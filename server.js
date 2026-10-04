const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const UPLOAD_DIR = path.join(__dirname, "uploads");

if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// ==========================================
// PAYMENT SCREENSHOT UPLOAD
// ==========================================

const upload = multer({
    dest: UPLOAD_DIR,

    limits: {
        fileSize: 10 * 1024 * 1024
    },

    fileFilter: function (req, file, cb) {
        const allowed = [
            "image/jpeg",
            "image/png"
        ];

        if (allowed.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Payment screenshot must be JPG, JPEG, or PNG."));
        }
    }
});

// ==========================================
// WEBSITE
// ==========================================

app.use(express.static(__dirname));

// ==========================================
// CLEAN TEXT
// ==========================================

function clean(value) {
    return String(value || "")
        .trim()
        .slice(0, 300);
}

// ==========================================
// DECODE PROMO
// ==========================================

function decodePromo(value) {
    let promo = clean(value);

    try {
        promo = decodeURIComponent(promo);
    } catch (error) {
        // Keep original value if it is not URL encoded
    }

    return promo;
}

// ==========================================
// CREATE ORDER MESSAGE
// ==========================================

function makeMessage(body) {
    const orderNumber = clean(body["Order Number"]);

    const customer = clean(
        body["Customer Name"]
    );

    const mobile = clean(
        body["Mobile Number"]
    );

    const network = clean(
        body["Network Selected"] ||
        body["Network"]
    );

    const promo = decodePromo(
        body["Promo Selected"] ||
        body["Promo"]
    );

    const amount = clean(
        body["Amount"]
    );

    const payment = clean(
        body["Payment Method"]
    );

    const reference =
        clean(body["Reference Number"]) || "N/A";

    return [
        "🔔 NEW RONALD E-LOADING ORDER",
        "Order No.: " + orderNumber,
        "Customer: " + customer,
        "Mobile: " + mobile,
        "Network: " + network,
        "Promo: " + promo,
        "Amount: " + amount,
        "Payment: " + payment,
        "Reference: " + reference
    ].join("\n");
}

// ==========================================
// SEND TELEGRAM
// ==========================================

async function sendTelegram(text, file) {

    const token =
        process.env.TELEGRAM_BOT_TOKEN;

    const chatId =
        process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        return {
            sent: false,
            photo: false,
            reason:
                "Telegram credentials are missing."
        };
    }

    // ======================================
    // SEND PHOTO + ORDER DETAILS
    // ======================================

    if (file) {

        const url =
            "https://api.telegram.org/bot" +
            token +
            "/sendPhoto";

        const form = new FormData();

        form.append(
            "chat_id",
            chatId
        );

        form.append(
            "caption",
            text
        );

        const fileBuffer =
            fs.readFileSync(file.path);

        const fileBlob = new Blob(
            [fileBuffer],
            {
                type: file.mimetype
            }
        );

        form.append(
            "photo",
            fileBlob,
            file.originalname ||
            "payment.jpg"
        );

        const response =
            await fetch(url, {
                method: "POST",
                body: form
            });

        const result =
            await response.json();

        if (!response.ok || !result.ok) {
            throw new Error(
                "Telegram photo error: " +
                JSON.stringify(result)
            );
        }

        return {
            sent: true,
            photo: true
        };
    }

    // ======================================
    // SEND TEXT ONLY
    // ======================================

    const url =
        "https://api.telegram.org/bot" +
        token +
        "/sendMessage";

    const response =
        await fetch(url, {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                disable_web_page_preview: true
            })
        });

    const result =
        await response.json();

    if (!response.ok || !result.ok) {
        throw new Error(
            "Telegram message error: " +
            JSON.stringify(result)
        );
    }

    return {
        sent: true,
        photo: false
    };
}

// ==========================================
// ORDER SUBMISSION
// ==========================================

app.post(
    "/api/orders",
    upload.single("Payment Screenshot"),

    async function (req, res) {

        try {

            const message =
                makeMessage(req.body);

            const telegram =
                await sendTelegram(
                    message,
                    req.file
                );

            // ==================================
            // SAVE ORDER LOG
            // ==================================

            const record = {
                receivedAt:
                    new Date().toISOString(),

                fields:
                    req.body,

                screenshot:
                    req.file
                        ? {
                            filename:
                                req.file.filename,

                            originalname:
                                req.file.originalname,

                            mimetype:
                                req.file.mimetype,

                            size:
                                req.file.size
                        }
                        : null,

                telegram:
                    telegram
            };

            fs.appendFileSync(
                path.join(
                    __dirname,
                    "orders.log"
                ),

                JSON.stringify(record) +
                "\n"
            );

            // ==================================
            // DELETE TEMP FILE
            // ==================================

            if (req.file) {
                try {
                    fs.unlinkSync(
                        req.file.path
                    );
                } catch (deleteError) {
                    console.log(
                        "Could not delete temporary file."
                    );
                }
            }

            // ==================================
            // SEND RESULT TO WEBSITE
            // ==================================

            res.json({
                ok: true,

                orderNumber:
                    clean(
                        req.body["Order Number"]
                    ),

                telegramNotification:
                    telegram.sent,

                screenshotSentToTelegram:
                    telegram.photo
            });

        } catch (error) {

            console.error(
                "ORDER ERROR:",
                error
            );

            res.status(500).json({
                ok: false,

                error:
                    error.message ||
                    "Server error."
            });
        }
    }
);

// ==========================================
// HEALTH CHECK
// ==========================================

app.get(
    "/api/health",

    function (req, res) {

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

// ==========================================
// START SERVER
// ==========================================

app.listen(
    PORT,

    function () {

        console.log(
            "Ronald E-Loading server running on http://localhost:" +
            PORT
        );

    }
);