const NETWORKS=["SMART","TNT","DITO","GLOBE","TM","GOMO","GLOBE AT HOME","GFIBER"];

const promos={
SMART:[
["POWER ALL 50","5GB + 3GB 5G Data + Unli Calls & Texts (3 Days)",57,false],
["NEW POWER ALL SHARE 99","7GB FB, TikTok, Viber & more + 10GB Shareable Data + 4GB 5G Data + Unli Calls & Texts (7 Days)",96,true],
["NEW POWER ALL BINGE 99","7GB YouTube, Viu & more + 10GB Shareable Data + 4GB 5G Data + Unli Calls & Texts (7 Days)",96,true],
["NEW POWER ALL GRIND 99","7GB Google Drive, Google Meet & more + 10GB Shareable Data + 4GB 5G Data + Unli Calls & Texts (7 Days)",96,true],
["POWER ALL KHAN ACADEMY 99","Unli Khan Academy Access + 10GB + Unli Calls & Texts (7 Days)",96,false],
["NEW POWER ALL GAME 99","7GB MLBB, COD & more + 10GB Shareable Data + 4GB 5G Data + Unli Calls & Texts (7 Days)",96,true],
["POWER ALL YOUTUBE 109","7GB YouTube + 10GB + 5GB 5G Data + Unli Calls & Texts (7 Days)",106,true],
["NEW POWER ALL FB + BINGE 149","Unli FB + 5GB YouTube, Viu & more + 16GB Shareable Data + 5GB 5G Data + Unli Calls & Texts (7 Days)",145,true],
["NEW POWER ALL FB + GAME 149","Unli FB + 5GB MLBB, COD & more + 16GB Shareable Data + 5GB 5G Data + Unli Calls & Texts (7 Days)",145,true],
["NEW POWER ALL FB + GRIND 449","Unli FB + 20GB Google Drive, Google Meet & more + 30GB Shareable Data + 15GB 5G Data + Unli Calls & Texts (28 Days)",436,true],
["NEW POWER ALL TIKTOK + GAME 449","Unli TikTok + 20GB MLBB, COD & more + 30GB Shareable Data + 15GB 5G Data + Unli Calls & Texts (28 Days)",436,true]
],
TNT:[
["SAYA ALL 50","9GB Total Data (3GB TikTok + 3GB Facebook + 3GB) + Unli Calls & Texts (3 Days)",49,false],
["SAYA ALL 99","10GB (TikTok, FB & MLBB) + 3GB 5G Data + 7GB Shareable Data + FREE 1GB + Unli Calls & Texts (7 Days)",96,true],
["SAYA ALL 109","Unli TikTok, Facebook & MLBB + 3GB 5G Data + 7GB Shareable Data + Unli Calls & Texts (7 Days)",106,true],
["SAYA ALL 149","Unli TikTok, Facebook & MLBB + 7GB 5G Data + 12GB Shareable Data + Unli Calls & Texts (7 Days)",145,true],
["SAYA ALL 449","Unli TikTok, Facebook & MLBB + 15GB 5G Data + 20GB Shareable Data + Unli Calls & Texts (28 Days)",436,true]
],
DITO:[
["DITO Level-Up 99","9GB All-Access Data + FREE 1GB for 1 day; Unlimited texts; unlimited DITO calls/video calls; 150 mins other networks; 15 days",95,false],
["DITO Level-Up 99","7GB All-Access Data; unlimited texts/calls/video calls; 300 mins other networks; 30 days",95,false],
["DITO Level-Up 109","10GB All-Access Data; unlimited texts/calls/video calls; 300 mins other networks; 30 days",104,false],
["DITO Level-Up 129","12GB All-Access Data + Prime Video + FREE 1GB/day Viber + Viber Plus & Dating Premium; 30 days",123,false],
["DITO Level-Up 199","20GB All-Access Data + Prime Video + FREE 1GB/day Viber; 30 days",190,false],
["DITO Data 50","5GB All-Access Data; Valid 7 days",48,false],
["DITO Data Sachet 30","3GB All-Access Data; Valid 3 days",29,false],
["DITO Data Sachet 20","2GB All-Access Data; Valid 1 day",19,false],
["DITO Live It! 50","8GB Total Data + FREE 1GB for 1 day; Valid 7 days",48,false],
["DITO Play It! 50","8GB Total Data + FREE 1GB for 1 day; Valid 7 days",48,false],
["DITO Work It! 50","8GB Total Data + FREE 1GB for 1 day; Valid 7 days",48,false],
["DATA MAXX 50","7GB all access data; Unlimited Calls & Texts; FREE 1GB; Valid 5 days",48,false],
["DATA MAXX 70","10GB all access data; Unlimited Calls & Texts; FREE 1GB; Valid 7 days",67,false],
["DATA MAXX 129","15GB Data + Social Apps; Unlimited Calls & Texts; FREE 1GB; Valid 15 days",124,false]
],
GLOBE:[
["GoWATCH10","1GB GoWATCH Data; 1 day",10,false],["GoSHARE10","1GB GoSHARE Data; 1 day",10,false],
["GoPLAY10","1GB GoPLAY Data; 1 day",10,false],["GoCALL10","Unli All-Net Calls; 1 day",10,false],
["GoBOOST15","1GB All Sites Data; 1 day",14,false],["GoUNLI20","50MB All Sites + Unli All-Net Calls + Texts; 1 day",19,false],
["Go59","5GB All Sites + Free 1GB 5G + Unli All-Net Texts; 3 days",55,false],
["Go59 for Students","5GB All Sites + 1GB Apps + Free 1GB 5G + Unli Texts; 3 days",55,false],
["GoEXTRA59","5GB Data + Unli All-Net Calls + Unli Texts; 3 days",55,false],
["Go+99","8GB Data + 4GB 5G + 8GB Apps + Unli Texts + Discount Voucher; 7 days",92,false],
["Go+109","10GB Data + 4GB 5G + 8GB Apps + Unli Texts + Discount Voucher; 7 days",101,false],
["Go+129","10GB Data + 8GB 5G + 8GB Apps + Unli Globe/TM Calls + Unli Texts; 7 days",120,false],
["Go+149","12GB Data + 8GB Apps + 8GB 5G + Unli Calls + Unli Texts; 7 days",139,false],
["Go+179","8GB Data + 8GB Apps + 8GB 5G + Unli Texts; 15 days",166,false],
["GoUNLI350","3GB All Sites + Unli All-Net Calls + Unli Texts; 30 days",326,false],
["Go+400","25GB Data + 8GB 5G + 15GB Apps + Discount Voucher; 15 days",372,false]
],
TM:[
["TM COMBO10","60 mins Globe/TM Calls + Unli All-Net Texts; 1 day",10,false],["TM COMBOALL10","Unli Globe/TM Calls + Unli Globe/TM Texts + 50 All-Net Texts; 1 day",10,false],
["TM ALL-NET SURF 10","100MB Data + 100MB FB/ML + 200 mins Calls + 200 Texts; 1 day",10,false],["TM FBML15","1GB Facebook & Messenger Data; 3 days",14,false],
["TM COMBO20","120 mins Globe/TM Calls + Unli All-Net Texts; 3 days",19,false],["TM PawerSURF20","1GB Data + 250 mins Calls + 250 Texts; 1 day",19,false],
["TM PawerSURF30","1GB Data + 1GB FunALIW + Unli Calls & Texts; 2 days",28,false],["TM EZ50 5G FunALIW","3GB Data + 3GB 5G + 1GB/day FunALIW + Unli Texts; 3 days",47,false],
["TM EZ75 ALLNET","2GB Data + 2GB/day FunALIW + Unli Calls & Texts; 3 days",70,false],["TM EasySURF 99 / EZ99","3GB Data + 2GB/day FunALIW + Unli Texts; 7 days",92,false],
["TM PawerSURF99","3GB Data + 6GB FunALIW + 1GB 5G + Unli Calls & Texts; 7 days",92,false],
["TM SURF4ALL 99","9GB Shareable Data; 7 days",92,false],["TM ALLSURF149","12GB Data + 1GB/day FunALIW + 8GB 5G + Unli Calls & Texts; 7 days",139,false],
["TM EasyPLAN 159","2GB Data + 2GB/day Apps + 2GB 5G + Unli Calls & Texts; 15 days",148,false],
["TM SURF4ALL 249","20GB Shareable Data; 7 days",232,false],["TM EZ299","2GB Data + 10GB FunALIW or FunACHIEVE; 30 days",278,false]
],
GOMO:[
["GOMO No Expiry Data 7GB","7GB No Expiry Data; UNLI Calls 7 days; UNLI Texts 7 days",139,false],
["GOMO No Expiry Data 15GB","15GB No Expiry Data; UNLI Calls 7 days; UNLI Texts 7 days",232,false],
["GOMO No Expiry Data 30GB","30GB No Expiry Data; UNLI Calls 7 days; UNLI Texts 7 days",418,false],
["GOMO UNLI Data 7 Days","Unlimited Mobile Data; speed up to 10 Mbps; valid 7 days",185,false],
["GOMO UNLI Data + Calls & Texts","Unlimited Mobile Data up to 10 Mbps + UNLI Calls/Texts; 7 days",232,false],
["GOMO UNLI Data 30 Days","Unlimited Mobile Data up to 10 Mbps; 30 days",743,false],
["GOMO UNLI Data + Calls & Texts 30 Days","Unlimited Mobile Data up to 10 Mbps + UNLI Calls/Texts; 30 days",929,false]
],
"GLOBE AT HOME":[
["FamSURF Unli 399","Unlimited All-Access Data; 7 days",371,false],["FamSURF Unli 999","Unlimited All-Access Data; 30 days",929,false],
["FamSURF No Expiry 399","30GB All-Access Data; No Expiry",371,false],["FamSURF No Expiry 699","60GB All-Access Data; No Expiry",650,false],
["FamSURF Extra 199","50GB Shareable Open Access Data; 7 days",185,false],["FamSURF Extra 299","75GB Shareable Open Access Data; 7 days",278,false],
["FamSURF Extra 499","120GB Shareable Open Access Data; 15 days",464,false],["FamSURF Extra 999","250GB Shareable Open Access Data; 30 days",929,false],
["FamSURF50","5GB Shareable Open Access Data; 3 days",47,false],["HomeSURF50","5GB Shareable Open Access Data; 3 days",47,false],
["HomeSURF1499","120GB Shareable Open Access Data; 30 days",1394,false]
],
GFIBER:[
["GFiber Prepaid UNLISurf 249","Unlimited Fiber Internet; speed up to 50 Mbps",232,false],
["GFiber Prepaid UNLISurf 399","Unlimited Fiber Internet; speed up to 100 Mbps",371,false],
["GFiber Prepaid UNLISurf 749","Unlimited Fiber Internet; speed up to 50 Mbps",697,false],
["GFiber Prepaid UNLISurf 999","Unlimited Fiber Internet; speed up to 100 Mbps",929,false],
["GFiber Prepaid UNLISurf 1,499","Unlimited Fiber Internet; speed up to 300 Mbps",1394,false],
["GFiber Prepaid UNLISurf 6,999","Unlimited Fiber Internet; long-term subscription",6509,false],
["GFiber Prepaid UNLISurf 9,999","Unlimited Fiber Internet; long-term subscription",9299,false]
]};

const paymentDetails={
"GCash":"Ronald P.\n09919018849",
"Maya":"Ronald P.\n09917019078",
"GoTyme Bank":"Ronald P.\nAccount No. 014261416464",
"MariBank":"Ronald P.\nAccount No. 16065980076"
};

const $=id=>document.getElementById(id);
let activeNetwork="";

function money(n){return "₱"+Number(n).toLocaleString("en-PH")}
function orderNumber(){const d=new Date();return `REL-${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}-${Math.floor(1000+Math.random()*9000)}`}
function fillNetworks(){
  $("network").innerHTML='<option value="">Select network</option>'+NETWORKS.map(n=>`<option>${n}</option>`).join("");
  $("networkGrid").innerHTML=NETWORKS.map(n=>`<button class="network-card ${activeNetwork===n?"active":""}" data-net="${n}">${n}</button>`).join("");
  document.querySelectorAll(".network-card").forEach(b=>b.onclick=()=>{activeNetwork=b.dataset.net;$("network").value=activeNetwork;renderPromos();$("order").scrollIntoView({behavior:"smooth"});});
}
function renderPromos(){
  const net=activeNetwork||$("network").value||"";
  const q=$("search").value.toLowerCase().trim();
  const list=(promos[net]||[]).filter(p=>(p[0]+" "+p[1]).toLowerCase().includes(q));
  $("promoGrid").innerHTML=list.length?list.map((p,i)=>`<article class="promo"><h3>${p[0]} ${p[3]?'<span class="new">NEW!</span>':""}</h3><p>${p[1]}</p><div class="price">${money(p[2])}</div><button class="select-btn" data-promo="${encodeURIComponent(p[0])}" data-price="${p[2]}">Select Promo</button></article>`).join(""):"<p>No promo found for this network.</p>";
  document.querySelectorAll(".select-btn").forEach(b=>b.onclick=()=>selectPromo(decodeURIComponent(b.dataset.promo),Number(b.dataset.price),net));
  const opts=(promos[net]||[]).map(p=>`<option value="${encodeURIComponent(p[0])}" data-price="${p[2]}">${p[0]} — ${money(p[2])}</option>`).join("");
  $("promo").innerHTML='<option value="">Select promo</option>'+opts;
}
function selectPromo(name,price,net){
  activeNetwork=net;$("network").value=net;
  [...$("promo").options].forEach(o=>{if(decodeURIComponent(o.value)===name)o.selected=true});
  updateSummary(name,price,net);$("order").scrollIntoView({behavior:"smooth"});
}
function updateSummary(name,price,net){
  $("promoField").value=name;$("amountField").value=money(price);$("networkField").value=net;
  $("summary").innerHTML=`<b>Order Summary</b><p>Network: ${net}\nPromo: ${name}\nAmount: ${money(price)}\nOrder No.: ${$("orderNo").value}</p>`;
}
$("network").onchange=()=>{activeNetwork=$("network").value;renderPromos()};
$("promo").onchange=()=>{
  const o=$("promo").selectedOptions[0];if(!o||!o.value)return;
  updateSummary(decodeURIComponent(o.value),Number(o.dataset.price),$("network").value);
};
$("payment").onchange=()=>{$("paymentBox").innerHTML=$("payment").value?`<b>${$("payment").value}</b><p>${paymentDetails[$("payment").value]}</p>`:"<b>Payment details</b><p>Choose a payment method to display the account details.</p>"};
$("search").oninput=renderPromos;
$("orderNo").value=orderNumber();

$("orderForm").addEventListener("submit",e=>{
  const mobile=$("mobile").value.trim();
  if(!/^09\d{9}$/.test(mobile)){e.preventDefault();alert("Please enter a valid 11-digit Philippine mobile number (09xxxxxxxxx).");return}
  if(!$("network").value||!$("promo").value){e.preventDefault();alert("Please select network and promo.");return}
  $("orderNo").value ||= orderNumber();
  const o=$("promo").selectedOptions[0];
  updateSummary(decodeURIComponent(o.value),Number(o.dataset.price),$("network").value);
  if(!confirm(`Submit order ${$("orderNo").value}?\n\nYour order details and payment screenshot will be sent to Ronald E-Loading.`))e.preventDefault();
});

$("clearBtn").onclick=()=>{ $("orderForm").reset();$("orderNo").value=orderNumber();activeNetwork="";fillNetworks();renderPromos();$("paymentBox").innerHTML="<b>Payment details</b><p>Choose a payment method to display the account details.</p>";$("summary").innerHTML="<b>Order Summary</b><p>No promo selected yet.</p>"};
$("themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("rel-dark",document.body.classList.contains("dark"))};
if(localStorage.getItem("rel-dark")==="true")document.body.classList.add("dark");
fillNetworks();renderPromos();
