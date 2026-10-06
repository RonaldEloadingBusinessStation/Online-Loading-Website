const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Allow requests from GitHub Pages
app.use(cors());

const UPLOAD_DIR = path.join(__dirname, "uploads");

fs.mkdirSync(UPLOAD_DIR, {
  recursive: true
});

const upload = multer({
  dest: UPLOAD_DIR,

  limits: {
    fileSize: 10 * 1024 * 1024
  },

  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png"
    ];

    const allowed =
      allowedTypes.includes(file.mimetype);

    if (!allowed) {
      return cb(
        new Error(
          "Payment screenshot must be JPG/JPEG/PNG."
        )
      );
    }

    cb(null, true);
  }
});

app.use(express.static(__dirname));

const clean = (value) =>
  decodeURIComponent(String(value ?? ""))
    .trim()
    .slice(0, 1000);

const ORDERS_FILE = path.join(__dirname, "orders-status.json");
function readOrders() {
  try { return JSON.parse(fs.readFileSync(ORDERS_FILE, "utf8")); }
  catch { return {}; }
}
function writeOrders(orders) {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
}
function manilaParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-PH", {
    timeZone: "Asia/Manila", year: "numeric", month: "long", day: "numeric",
    hour: "numeric", minute: "2-digit", hour12: true
  }).formatToParts(date);
  const get = type => parts.find(p => p.type === type)?.value || "";
  return {
    date: `${get("month")} ${get("day")}, ${get("year")}`,
    time: `${get("hour")}:${get("minute")} ${get("dayPeriod")}`
  };
}
function manilaDateTime(date = new Date()) {
  const p = manilaParts(date);
  return `${p.date} ${p.time}`;
}
function adminAuthorized(req) {
  const key = process.env.ADMIN_KEY;
  if (!key) return false;
  return String(req.headers["x-admin-key"] || req.query.key || req.body?.key || "") === key;
}

// ===============================
// TELEGRAM CONFIG
// ===============================

function getTelegramConfig() {
  const token =
    process.env.TELEGRAM_BOT_TOKEN;

  const chatId =
    process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error(
      "Telegram is not configured. Check TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID."
    );
  }

  return {
    token,
    chatId
  };
}

// ===============================
// ORDER MESSAGE
// ===============================

function makeMessage(body) {
  const orderType = clean(body["Order Type"] || body["OrderType"] || "");
  const network = clean(body["Network Selected"] || body["Network"] || "");
  const isMLBB = orderType.toLowerCase() === "mlbb top up" || network.toLowerCase() === "mlbb";
  const customer = clean(body["Customer Name"] || body["Customer"] || body["Name"] || "");
  const userId = clean(body["MLBB User ID"] || body["User ID"] || body["userId"] || "");
  const zoneId = clean(body["MLBB Zone ID"] || body["Zone ID"] || body["zoneId"] || "");

  return [
    "🔔 NEW RONALD E-LOADING ORDER",

    `Order No.: ${clean(
      body["Order Number"]
    )}`,

    `Customer: ${clean(body["Customer Name"] || body["Customer"] || body["Name"])}`,

    ...(body["Order Type"] === "MLBB Top Up" || body["Network"] === "MLBB" ? [] : [
      `Mobile: ${clean(body["Mobile Number"] || body["Mobile"])}`
    ]),

    `Order Type: ${clean(body["Order Type"] || "Regular Loading")}`,

    `Network: ${clean(
      body["Network Selected"] ||
      body["Network"]
    )}`,

    ...(body["Order Type"] === "MLBB Top Up" || body["Network"] === "MLBB" ? [
      `User ID: ${clean(body["MLBB User ID"] || body["User ID"])}`,
      `Zone ID: ${clean(body["MLBB Zone ID"] || body["Zone ID"])}`
    ] : []),

    `Promo: ${clean(
      body["Promo Selected"] ||
      body["Promo"]
    )}`,

    `Amount: ${clean(
      body["Amount"]
    )}`,

    `Payment: ${clean(
  body["Payment Method"]
)}`,

`Time: ${new Date().toLocaleString("en-PH", {
  timeZone: "Asia/Manila",
  hour: "numeric",
  minute: "2-digit",
  hour12: true
})}`,

`Reference: ${
      clean(body["Reference Number"]) ||
      "N/A"
    }`

  ].join("\n");
}

// ===============================
// TELEGRAM REQUEST
// ===============================

async function telegramRequest(
  method,
  formData
) {
  const { token } =
    getTelegramConfig();

  const url =
    `https://api.telegram.org/bot${token}/${method}`;

  const response = await fetch(url, {
    method: "POST",
    body: formData
  });

  const data =
    await response
      .json()
      .catch(() => ({}));

  if (
    !response.ok ||
    !data.ok
  ) {
    throw new Error(
      `Telegram API error (${response.status}): ${JSON.stringify(data)}`
    );
  }

  return data;
}

// ===============================
// SEND TELEGRAM MESSAGE
// ===============================

async function sendTelegramMessage(text) {
  const { chatId } =
    getTelegramConfig();

  const form =
    new FormData();

  form.append(
    "chat_id",
    chatId
  );

  form.append(
    "text",
    text
  );

  form.append(
    "disable_web_page_preview",
    "true"
  );

  return telegramRequest(
    "sendMessage",
    form
  );
}

// ===============================
// SEND PAYMENT SCREENSHOT
// ===============================

async function sendTelegramPhoto(
  filePath,
  originalName,
  mimeType,
  caption
) {
  const { chatId } =
    getTelegramConfig();

  const buffer =
    fs.readFileSync(filePath);

  const blob =
    new Blob(
      [buffer],
      { type: mimeType }
    );

  const form =
    new FormData();

  form.append(
    "chat_id",
    chatId
  );

  form.append(
    "photo",
    blob,
    originalName ||
    "payment-screenshot.jpg"
  );

  form.append(
    "caption",
    caption.slice(0, 1024)
  );

  return telegramRequest(
    "sendPhoto",
    form
  );
}

// ===============================
// ORDER API
// ===============================

app.post(
  "/api/orders",

  upload.single(
    "Payment Screenshot"
  ),

  async (req, res) => {

    try {

      const message =
        makeMessage(req.body);

      // Send order details and payment screenshot together
      if (req.file) {
        await sendTelegramPhoto(
          req.file.path,
          req.file.originalname,
          req.file.mimetype,
          message
        );
      } else {
        await sendTelegramMessage(message);
      }
      // Save order + customer-facing status
      const orderNumber = clean(req.body["Order Number"]);
      const orders = readOrders();
      const now = new Date();
      const record = {
        orderNumber,
        orderTime: manilaDateTime(now),
        status: "PROCESSING",
        successfulTime: null,
        fields: req.body,
        telegramNotification: true,
        telegramScreenshot: !!req.file
      };
      orders[orderNumber] = record;
      writeOrders(orders);

      fs.appendFileSync(
        path.join(
          __dirname,
          "orders.log"
        ),
        JSON.stringify(record) + "\n"
      );

      // Send successful response
      return res.status(200).json({
        ok: true,

        orderNumber,

        telegramNotification:
          true,

        telegramScreenshot:
          !!req.file
      });

    } catch (err) {

      console.error(
        "Order submission failed:",
        err
      );

      return res.status(500).json({
        error:
          err.message ||
          "Unable to submit the order."
      });
    }
  }
);

// ===============================
// CUSTOMER ORDER STATUS
// ===============================

app.get("/api/orders/:orderNumber", (req, res) => {
  const order = readOrders()[clean(req.params.orderNumber)];
  if (!order) return res.status(404).json({ ok: false, error: "Order not found." });
  const f = order.fields || {};
  res.json({
    ok: true,
    orderNumber: order.orderNumber,
    customer: clean(f["Customer Name"]),
    orderType: clean(f["Order Type"] || "Regular Loading"),
    network: clean(f["Network Selected"] || f["Network"]),
    mobile: clean(f["Mobile Number"]),
    userId: clean(f["MLBB User ID"]),
    zoneId: clean(f["MLBB Zone ID"]),
    promo: clean(f["Promo Selected"] || f["Promo"]),
    amount: clean(f["Amount"]),
    payment: clean(f["Payment Method"]),
    orderTime: order.orderTime,
    status: order.status,
    successfulTime: order.successfulTime
  });
});

// ===============================
// ADMIN: MARK ORDER COMPLETED
// ===============================

app.post("/api/admin/orders/:orderNumber/complete", express.json(), async (req, res) => {
  if (!adminAuthorized(req)) return res.status(401).json({ ok: false, error: "Unauthorized." });
  const orders = readOrders();
  const key = clean(req.params.orderNumber);
  const order = orders[key];
  if (!order) return res.status(404).json({ ok: false, error: "Order not found." });
  if (order.status === "COMPLETED") return res.json({ ok: true, order });
  order.status = "COMPLETED";
  order.successfulTime = manilaDateTime(new Date());
  writeOrders(orders);
  const f = order.fields || {};
  const msg = [
    "🟢 ORDER COMPLETED",
    `Order No.: ${order.orderNumber}`,
    `Customer: ${clean(f["Customer Name"])}`,
    `Order Type: ${clean(f["Order Type"] || "Regular Loading")}`,
    `Network: ${clean(f["Network Selected"] || f["Network"])}`,
    ...(String(f["Network"] || "").toLowerCase() === "mlbb" ? [`User ID: ${clean(f["MLBB User ID"])}`, `Zone ID: ${clean(f["MLBB Zone ID"])}`] : [`Mobile: ${clean(f["Mobile Number"])}`]),
    `Promo: ${clean(f["Promo Selected"] || f["Promo"])}`,
    `Amount: ${clean(f["Amount"])}`,
    `Payment: ${clean(f["Payment Method"])}`,
    `Date: ${manilaParts(new Date()).date}`,
    `Order Time: ${order.orderTime.slice(order.orderTime.indexOf(",") + 1).trim()}`,
    `Status: COMPLETED at ${manilaParts(new Date()).time}`
  ].join("\\n");
  try { await sendTelegramMessage(msg); } catch (e) { console.error("Completion Telegram notification failed:", e.message); }
  res.json({ ok: true, order });
});

// ===============================
// SIMPLE ADMIN PAGE
// ===============================

app.get("/admin", (req, res) => {
  if (!adminAuthorized(req)) return res.status(401).send("Unauthorized. Open /admin?key=YOUR_ADMIN_KEY");
  const orders = Object.values(readOrders()).reverse();
  const rows = orders.map(o => `<tr><td>${escapeHtml(o.orderNumber)}</td><td>${escapeHtml(o.fields?.["Customer Name"] || "")}</td><td>${escapeHtml(o.status)}</td><td>${escapeHtml(o.orderTime)}</td><td>${escapeHtml(o.successfulTime || "—")}</td><td>${o.status === "COMPLETED" ? "✅ Completed" : `<button onclick="completeOrder('${encodeURIComponent(o.orderNumber)}')">✅ COMPLETED</button>`}</td></tr>`).join("");
  res.send(`<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>Ronald Admin</title><style>body{font-family:Arial,sans-serif;padding:20px;background:#f5f7fb}table{width:100%;border-collapse:collapse;background:#fff}th,td{padding:10px;border:1px solid #ddd;text-align:left}button{padding:8px 12px;border:0;border-radius:8px;cursor:pointer}h1{font-size:22px}@media(max-width:700px){table{font-size:12px}th,td{padding:6px}}</style></head><body><h1>RONALD E-LOADING — ADMIN</h1><p>Click <b>COMPLETED</b> only after the load/top-up is actually successful.</p><table><thead><tr><th>Order</th><th>Customer</th><th>Status</th><th>Order Time</th><th>Successful Time</th><th>Action</th></tr></thead><tbody>${rows || '<tr><td colspan="6">No orders yet.</td></tr>'}</tbody></table><script>const KEY=${JSON.stringify(String(req.query.key||""))};async function completeOrder(no){if(!confirm('Confirm this order is successfully loaded?'))return;const r=await fetch('/api/admin/orders/'+no+'/complete?key='+encodeURIComponent(KEY),{method:'POST',headers:{'Content-Type':'application/json'}});const d=await r.json();if(!r.ok)alert(d.error||'Failed');else location.reload();}</script></body></html>`);
});
function escapeHtml(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;", "'":"&#39;"}[c]));}

// ===============================
// HEALTH CHECK
// ===============================

app.get(
  "/api/health",
  (req, res) => {

    res.json({
      ok: true,

      telegramConfigured:
        Boolean(
          process.env.TELEGRAM_BOT_TOKEN &&
          process.env.TELEGRAM_CHAT_ID
        )
    });

  }
);

// ===============================
// START SERVER
// ===============================

app.listen(
  PORT,
  () => {
    console.log(
      `Ronald E-Loading server running on port ${PORT}`
    );
  }
);




