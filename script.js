const NETWORKS=["SMART","TNT","DITO","GLOBE","TM","GOMO","GLOBE AT HOME","GFIBER"];

const promos={

SMART:[
["POWER ALL 50 (formely 59)","5GB + 3GB 5G Data + Unli Calls & Texts (3 Days)",57,true],
["POWER ALL KHAN ACADEMY 99","Unli Khan Academy Access + 10GB + Unli Calls & Texts (7 Days)",96,false],
["NEW POWER ALL GRIND 99","7GB Google Drive, Google Meet & more + 10GB Shareable Data + 4GB 5G Data + Unli Calls & Texts (7 Days)",96,true],
["NEW POWER ALL GAME 99","7GB MLBB, COD & more + 10GB Shareable Data + 4GB 5G Data + Unli Calls & Texts (7 Days)",96,true],
["NEW POWER ALL BINGE 99","7GB YouTube, Viu & more + 10GB Shareable Data + 4GB 5G Data + Unli Calls & Texts (7 Days)",96,true],
["NEW POWER ALL SHARE 99","7GB FB, TikTok, Viber & more + 10GB Shareable Data + 4GB 5G Data + Unli Calls & Texts (7 Days)",96,true],
["NEW POWER ALL GRIND 99","7GB Google Drive, Google Meet & more + 10GB Shareable Data + 4GB 5G Data + Unli Calls & Texts (7 Days)",96,true],
["NEW POWER ALL TIKTOK + BINGE 109","UNLI TikTok + 5 GB YouTube, Viu and more + 10 GB Shareable Data + 4 GB 5G DATA + Unli Calls & Texts Best for personal use (7 Days)",106,false],
["NEW POWER ALL TIKTOK + SHARE 109","UNLI TikTok + 5 GB FB, IG, Viber and more + 10 GB Shareable Data + 4 GB 5G DATA + Unli Calls & Texts Best for personal use (7 Days)",106,false],
["NEW POWER ALL TIKTOK + GAME 109","UNLI TikTok + 5 GB MLBB, COD and more + 10 GB Shareable Data + 4 GB 5G DATA + Unli Calls & Texts Best for personal use (7 Days)",106,false],
["NEW POWER ALL TIKTOK + GRIND 109","UNLI TikTok + 5 GB Google Drive, Google Meet and more + 10 GB Shareable Data + 4 GB 5G DATA + Unli Calls & Texts Best for personal use. (7 Days)",106,false],
["NEW POWER ALL SHARE w/CPLAY 109","7 GB FB, Tik Tok, Viber and more + 10 GB Shareable Data + 4 GB 5G DATA + Unli Calls & Texts with CPlay Lite subscription Best for personal use. (7 Days)",106,false],
["NEW POWER ALL GAME w/CPLAY 109","7 GB MLBB, COD and more + 10 GB Shareable Data + 4 GB 5G DATA + Unli Calls & Texts with CPlay Lite subscription Best for personal use. (7 Days)",106,false],
["NEW POWER ALL TIKTOK + GRIND 149","UNLI TikTok + 5 GB Google Drive, Meet and more + 16 GB Shareable Data + 5 GB 5G DATA + Unli Calls & Texts Best for personal use. (7 Days)",145,false],
["NEW POWER ALL TIKTOK + BINGE 149","UNLI TikTok + 5 GB YouTube, Viu and more + 16 GB Shareable Data + 5 GB 5G DATA + Unli Calls & Texts for Best for personal use. (7 Days)",145,false],
["NEW POWER ALL FB + GRIND 149","UNLI FB + 5 GB Google Drive, Google Meet and more + 16 GB Shareable Data + 5 GB 5G DATA + Unli Calls & Texts Best for personal use. (7 Days)",145,false],
["NEW POWER ALL FB + GAME 149","UNLI FB + 5 GB MLBB, COD and more + 16 GB Shareable Data + 5 GB 5G DATA + Unli Calls & Texts Best for personal use. (7 Days)",145,false],
["NEW POWER ALL FB + SHARE 149","UNLI FB + 5 GB TikTok, IG, Viber and more + 16 GB Shareable Data + 5 GB 5G DATA + Unli Calls & Texts Best for personal use. (7 Days)",145,false],
["NEW POWER ALL FB + BINGE 149","UNLI FB + 5 GB YouTube, Viu and more + 16 GB Shareable Data + 5 GB 5G DATA + Unli Calls & Texts Best for personal use. (7 Days)",145,false],
["POWER ALL YOUTUBE 109","7GB YouTube + 10GB + 5GB 5G Data + Unli Calls & Texts (7 Days)",106,true],
["NEW POWER ALL FB + GRIND 449","Unli FB + 20GB Google Drive, Google Meet & more + 30GB Shareable Data + 15GB 5G Data + Unli Calls & Texts (28 Days)",436,true],
["NEW POWER ALL TIKTOK + GAME 449","Unli TikTok + 20GB MLBB, COD & more + 30GB Shareable Data + 15GB 5G Data + Unli Calls & Texts (28 Days)",436,true],

["UNLI 5G w/ NSD 35","UNLI 5G + NON-STOP 4G DATA Best for personal use (1 Day)",34,false],
["UNLI 5G w/ NSD 90","UNLI 5G + NON-STOP 4G DATA Best for personal use. (3 Days)",87,false],
["UNLI 5G w/ NSD 195","UNLI 5G + NON-STOP 4G DATA Best for personal use. (7 Days)",189,false],
["UNLI 5G w/ NSD 399","UNLI 5G + NON-STOP 4G DATA Best for personal use. (15 Days)",387,false],
["UNLI 5G w/ NSD 749","UNLI 5G + NON-STOP 4G DATA Best for personal use. (28 Days)",727,false],

["MAGIC DATA 149","3 GB NO EXPIRY DATA",145,false],
["MAGIC DATA+ 199","TOTAL 4 GB NO EXPIRY DATA: 3 GB + 1 GB 5G DATA for all sites w/ 50 Mins CALLS to ANY mobile and landline + 50 TEXTS",193,false],
["MAGIC DATA 249","8 GB NO EXPIRY DATA",242,false],
["MAGIC DATA+299","TOTAL 10 GB NO EXPIRY DATA: NOW 8 GB + 2 GB 5G DATA for all sites w/ 100 Mins CALLS to ANY mobile and landline + 100 TEXTS",290,false],
["MAGIC DATA 349","16 GB NO EXPIRY DATA",339,false],
["MAGIC DATA+ 399","TOTAL 19 GB NO EXPIRY DATA: 16 GB + 3 GB 5G DATA for all sites w/ 150 Mins CALLS to ANY mobile and landline + 150 TEXTS",387,false],
["MAGIC DATA 449","26 GB NO EXPIRY DATA",436,false],
["MAGIC DATA+ 499","TOTAL 30 GB NO EXPIRY DATA: 26 GB + 4 GB 5G for all sites w/ 200 Mins CALLS to ANY mobile and landline + 200 TEXTS",484,false],
["MAGIC DATA 549","38 GB NO EXPIRY DATA",533,false],
["MAGIC DATA 649","50 GB NO EXPIRY DATA",630,false],
["MAGIC DATA+ 699","TOTAL 50 GB NO EXPIRY DATA: 44 GB + 6 GB 5G DATA for all sites w/ 300 Mins CALLS to ANY mobile and landline + 300 TEXTS",678,false],
["MAGIC DATA 749","65 GB NO EXPIRY DATA",727,false],
["MAGIC DATA+ 799","TOTAL 64 GB NO EXPIRY DATA: 56 GB + 8 GB 5G DATA for all sites w/ 600 Mins CALLS to ANY mobile and landline + 600 TEXTS",775,false],
["MAGIC DATA+ 899","TOTAL 85 GB NO EXPIRY DATA: 75 GB + 10 GB 5G DATA for all sites w/ 900 Mins CALLS to ANY mobile and landline + 900 TEXTS",872,false],
["New! MAGIC DATA 988","88 GB NO EXPIRY DATA for all sites. Maintain at least P1 load to keep your SIM active.",958,false],

["DOUBLE GIGA VIDEO+75","TOTAL 9 GB: 2 GB VIDEO EVERY DAY for YouTube, Netflix, iWantTFC (6 GB) + 3 GB + UNLI CALLS & TEXTS (3 Days)",73,false],
["DOUBLE GIGA STORIES+75","TOTAL 9 GB-NOW 3 GB + 2 GB STORIES EVERY DAY for TikTok, IG, FB, X, Kumu (6 GB) + FREE UNLI CALLS & TEXTS (3 Days)",73,false],
["DOUBLE GIGA VIDEO+149","TOTAL 20 GB: 2 GB VIDEO EVERY DAY for YouTube, Netflix, iWantTFC (14 GB) + 6 GB + UNLI CALLS & TEXTS (7 Days)",145,false],
["DOUBLE GIGA STORIES+ 149","TOTAL 20 GB 6GB + 2 GB STORIES EVERY DAY for Tik Tok, IG, FB, X, Kumu (14 GB) + UNLI CALLS & TEXTS (7 Days)",145,false],
["GIGA POWER 75","2 GB POWER EVERYDAY FOR ALL SITES & APPS + 2 GB SHAREABLE DATA. Valid for Also available for Smart FLP (Fixed Load Plan) (3 Days)",73,false],
["GIGA POWER 499","TOTAL 85 GB: NOW 29 GB + 2GB POWER EVERY DAY FOR ALL SITES & APPS (56 GB) (28 Days)",484,false],

["TRIPLE DATA STORIES+ 75","With 3X MORE Shareable Data, TOTAL 7 GB - NOW 4 GB + 1 GB STORIES EVERY DAY for TikTok, IG, FB, X, Kumu (3 GB) + FREE UNLI CALLS & TEXTS (3 Days)",73,false],
["TRIPLE DATA VIDEO+ 75","TOTAL 7 GB: 1 GB VIDEO EVERY DAY for YouTube, Netflix, iWantTFC (3 GB) + 4 GB + UNLI CALLS & TEXTS (3 Days)",73,false],
["TRIPLE DATA STORIES+ 149","With 3X MORE Shareable Data. TOTAL 15 GB-8 GB+1 GB STORIES EVERY DAY for Tik Tok, IG, FB, X, Kumu (7 GB) + UNLI CALLS & TEXTS (7 Days)",145,false],
["GIGA VIDEO 60","TOTAL 6 GB: 1 GB VIDEO EVERY DAY for YouTube, Netflix, iWantTFC (3 GB) + 3 GB + UNLI Texts (3 Days)",58,false],
["GIGA VIDEO 99","TOTAL 9 GB: 1 GB VIDEO EVERY DAY for YouTube, Netflix, iWantTFC (7 GB) + 2 GB (7 Days)",96,false],
["GIGA VIDEO 120","TOTAL 13 GB: 1 GB VIDEO EVERY DAY for YouTube, Netflix, iWantTFC (7 GB) + 6 GB (7 Days)",116,false],
["GIGA VIDEO 349","TOTAL 40 GB: NOW 12 GB + 1 GB VIDEO EVERY DAY for YouTube, Netflix, iWantTFC (28 GB) (28 Days)",339,false],
["GIGA GAMES 60","TOTAL 5 GB 2GB + 1 GB GAMES EVERY DAY for ML, PUBG Mobile, Call of Duty, Wild Rift, CoC, AoV, Clash Royale, FB Gaming, Giga Arena (3 Days)",58,false],
["GIGA GAMES 120","TOTAL 13 GB6GB + 1 GB GAMES EVERY DAY for ML, PUBG Mobile, Call of Duty, Wild Rift, CoC, AoV, Clash Royale, FB Gaming, Giga Arena (7 GB) (7 Days)",116,false],
["GIGA STORIES 60","TOTAL 6 GB NOW 3 GB + 1 GB STORIES EVERY DAY for TikTok, IG, FB, X, Kumu (3 GB) (3 Days)",58,false],
["GIGA STORIES 120","TOTAL 13 GB-6 GB + 1 GB STORIES EVERY DAY for Tik Tok, IG, FB, X, Kumu (7 GB) (7 Days)",116,false],
["GIGA STORIES 349","TOTAL 40 GB: NOW 12 GB + 1 GB STORIES EVERY DAY for TikTok, IG, FB, X, Kumu (28 GB) (28 Days)",339,false],

["PROMO LOAD P100 + FREE P5","PROMO LOAD and FREE LOAD valid for 30 days.Use to register to promos with up to 30 days validity and without expiry. Cannot be used as Pasaload, for Value Added Services, as Payment and for buying Roaming & International Servic...(30 Days)",97,false],

["REGULAR LOAD 30","P30 Regular Load. Valid for (1 Year)",29,false],
["REGULAR LOAD 50","P50 Regular Load. Valid for (1 Year)",49,false],
["REGULAR LOAD 100","P100 Regular Load valid for (1 Year)",97,false],
["REGULAR LOAD 125","P125 Regular Load valid for (1 Year)",121,false],
["REGULAR LOAD 150","P150 Regular Load valid for (1 Year)",146,false],
["REGULAR LOAD 200","P200 Regular Load valid for (1 Year)",194,false],
["REGULAR LOAD 300","P300 Regular Load valid for (1 Year)",291,false],
["REGULAR LOAD 500","P500 Regular Load valid for (1 Year)",485,false],
["REGULAR LOAD 1000","P1000 Regular Load valid for (1 Year)",970,false],

],
TNT:[
["TIKTOK SAYA 50 w/ 5G DATA","Unli Tik Tok + 3 GB + 2GB 5G Data + Unli Calls & Texts for (3 Days)",49,false],
["SAYA ALL 50","Total 9 GB: 3 GB Tik Tok + 3 GB FB + 3 GB + Unli Calls & Texts Best for personal use. (3 days)",49,false],
["New! SAYA ALL 99 with FREE 1 GB","10 GB Tik Tok, FB & MLBB + 3 GB 5G DATA + 7 GB Shareable Data + FREE 1 GB + Unli Calls & Texts for (7 days)",96,true],
["New! SAYA ALL 109","UNLI TikTok, FB and MLBB + 3 GB 5G DATA + 7 GB Shareable Data + Unli Calls & Texts Best for personal use. (7 days)",106,true],
["New! SAYA ALL 109 with CPlay Lite","10 GB Tik Tok, FB & MLBB + 3 GB 5G DATA + 7 GB Shareable Data + Unli Calls & Texts with CPlay Lite subscription for (7 days)",106,true],
["New! SAYA ALL 149","UNLI TikTok, FB and MLBB + 7 GB 5G DATA + 12 GB Shareable Data + Unli Calls & Texts Best for personal use. (7 days)",145,true],
["New! SAYA ALL 449","UNLI Tik Tok, FB and MLBB + 15 GB 5G DATA + 20 GB Shareable Data + Unli Calls & Texts Best for personal use. (28 days)",436,true],


["UNLI 5G w/ NSD 35","UNLI 5G + NON-STOP 4G DATA Best for personal use (1 Day)",34,false],
["UNLI 5G w/ NSD 90","UNLI 5G + NON-STOP 4G DATA Best for personal use. (3 Days)",87,false],
["UNLI 5G w/ NSD 195","UNLI 5G + NON-STOP 4G DATA Best for personal use. (7 Days)",189,false],
["UNLI 5G w/ NSD 399","UNLI 5G + NON-STOP 4G DATA Best for personal use. (15 Days)",387,false],
["UNLI 5G w/ NSD 749","UNLI 5G + NON-STOP 4G DATA Best for personal use. (28 Days)",727,false],

["SURFSAYA 20","TOTAL 600 MB. 150 MB ARAW-ARAW for Tik Tok and MORE (300 MB) + 300 MB + Unli Calls & Texts for (2 days)",20,false],
["SURFSAYA 25","TOTAL 900 MB. 250 MB ARAW-ARAW for TikTok and MORE (500 MB) + 400 MB + Unli Calls & Texts for (2 days)",25,false],
["SURFSAYA 30","TOTAL 1.35 GB. 250 MB ARAW-ARAW for TikTok and MORE (750 MB) + NOW 600 MB + Unli Calls & Texts for (3 days)",29,false],
["SURFSAYA 35","TOTAL 2.4 GB. 500 MB ARAW-ARAW for Tik Tok and MORE (1.5 GB) + 900 MB + Unli Calls & Texts for (3 days)",34,false],
["SURFSAYA 49","TOTAL 1.2 GB. 100 MB ARAW-ARAW for Tik Tok and MORE (700 MB) + 500 MB + Unli Calls & Texts for (7 days)",48,false],
["SURFSAYA 99","TOTAL 2.2 GB. 100 MB ARAW-ARAW for Tik Tok and MORE (700 MB) + 1.5 GB + Unli Calls & Texts for (7 days)",96,false],
["SURFSAYA 199","TOTAL 8 GB. 200 MB ARAW-ARAW for Tik Tok and MORE (6 GB) + 2 GB + Unli Calls & Texts for (30 days)",193,false],

["PANALO 10","300 MB + 60 Mins Calls + 60 Texts for (1 day)",10,false],
["PANALO 15","600 MB + 120 Mins Calls + 120 Texts for (1 day)",15,false],
["PANALO 20","1 GB + NOW with 250 Mins Calls to Mobile + 250 Texts valid for (1 day)",20,false],
["PANALO 30","2 GB + 500 Mins Calls + 500 Texts for (2 days)",29,false],

["DOUBLE GIGA VIDEO+75","TOTAL 9 GB: 2 GB VIDEO EVERY DAY for YouTube, Netflix, iWantTFC (6 GB) + 3 GB + UNLI CALLS & TEXTS (3 Days)",73,false],
["DOUBLE GIGA STORIES+75","TOTAL 9 GB-NOW 3 GB + 2 GB STORIES EVERY DAY for TikTok, IG, FB, X, Kumu (6 GB) + FREE UNLI CALLS & TEXTS (3 Days)",73,false],
["DOUBLE GIGA VIDEO+149","TOTAL 20 GB: 2 GB VIDEO EVERY DAY for YouTube, Netflix, iWantTFC (14 GB) + 6 GB + UNLI CALLS & TEXTS (7 Days)",145,false],
["DOUBLE GIGA STORIES+ 149","TOTAL 20 GB 6GB + 2 GB STORIES EVERY DAY for Tik Tok, IG, FB, X, Kumu (14 GB) + UNLI CALLS & TEXTS (7 Days)",145,false],
["GIGA POWER 75","2 GB POWER EVERYDAY FOR ALL SITES & APPS + 2 GB SHAREABLE DATA. Valid for Also available for Smart FLP (Fixed Load Plan) (3 Days)",73,false],

["TRIPLE DATA STORIES+ 75","With 3X MORE Shareable Data, TOTAL 7 GB - NOW 4 GB + 1 GB STORIES EVERY DAY for TikTok, IG, FB, X, Kumu (3 GB) + FREE UNLI CALLS & TEXTS (3 Days)",73,false],
["TRIPLE DATA VIDEO+ 75","TOTAL 7 GB: 1 GB VIDEO EVERY DAY for YouTube, Netflix, iWantTFC (3 GB) + 4 GB + UNLI CALLS & TEXTS (3 Days)",73,false],
["TRIPLE DATA STORIES+ 149","With 3X MORE Shareable Data. TOTAL 15 GB-8 GB+1 GB STORIES EVERY DAY for Tik Tok, IG, FB, X, Kumu (7 GB) + UNLI CALLS & TEXTS (7 Days)",145,false],

["GIGA VIDEO 60","TOTAL 6 GB: 1 GB VIDEO EVERY DAY for YouTube, Netflix, iWantTFC (3 GB) + 3 GB + UNLI Texts (3 Days)",58,false],
["GIGA VIDEO 99","TOTAL 9 GB: 1 GB VIDEO EVERY DAY for YouTube, Netflix, iWantTFC (7 GB) + 2 GB (7 Days)",96,false],
["GIGA VIDEO 120","TOTAL 13 GB: 1 GB VIDEO EVERY DAY for YouTube, Netflix, iWantTFC (7 GB) + 6 GB (7 Days)",116,false],
["GIGA VIDEO 349","TOTAL 40 GB: NOW 12 GB + 1 GB VIDEO EVERY DAY for YouTube, Netflix, iWantTFC (28 GB) (28 Days)",339,false],
["GIGA GAMES 60","TOTAL 5 GB 2GB + 1 GB GAMES EVERY DAY for ML, PUBG Mobile, Call of Duty, Wild Rift, CoC, AoV, Clash Royale, FB Gaming, Giga Arena (3 Days)",58,false],
["GIGA GAMES 120","TOTAL 13 GB6GB + 1 GB GAMES EVERY DAY for ML, PUBG Mobile, Call of Duty, Wild Rift, CoC, AoV, Clash Royale, FB Gaming, Giga Arena (7 GB) (7 Days)",116,false],
["GIGA STORIES 60","TOTAL 6 GB NOW 3 GB + 1 GB STORIES EVERY DAY for TikTok, IG, FB, X, Kumu (3 GB) (3 Days)",58,false],
["GIGA STORIES 120","TOTAL 13 GB-6 GB + 1 GB STORIES EVERY DAY for Tik Tok, IG, FB, X, Kumu (7 GB) (7 Days)",116,false],
["GIGA STORIES 349","TOTAL 40 GB: NOW 12 GB + 1 GB STORIES EVERY DAY for TikTok, IG, FB, X, Kumu (28 GB) (28 Days)",339,false],

["REGULAR LOAD 30","P30 Regular Load. Valid for (1 Year)",29,false],
["REGULAR LOAD 50","P50 Regular Load. Valid for (1 Year)",49,false],
["REGULAR LOAD 100","P100 Regular Load valid for (1 Year)",97,false],
["REGULAR LOAD 125","P125 Regular Load valid for (1 Year)",121,false],
["REGULAR LOAD 150","P150 Regular Load valid for (1 Year)",146,false],
["REGULAR LOAD 200","P200 Regular Load valid for (1 Year)",194,false],
["REGULAR LOAD 300","P300 Regular Load valid for (1 Year)",291,false],
["REGULAR LOAD 500","P500 Regular Load valid for (1 Year)",485,false],
["REGULAR LOAD 1000","P1000 Regular Load valid for (1 Year)",970,false],

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

$("screenshot").addEventListener("change",e=>{
  const file=e.target.files[0];
  if(!file)return;
  const allowed=["image/jpeg","image/png"];
  if(!allowed.includes(file.type)){
    e.target.value="";
    alert("Payment screenshot must be JPG, JPEG, or PNG only. MP3/audio files are not allowed.");
    return;
  }
  if(file.size>10*1024*1024){
    e.target.value="";
    alert("Payment screenshot is too large. Please choose an image up to 10MB.");
    return;
  }
});

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
