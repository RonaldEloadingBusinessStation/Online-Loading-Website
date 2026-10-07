const NETWORKS=["SMART","TNT","DITO","GLOBE","TM","GOMO","GLOBE AT HOME","GFIBER","PLDT","CIGNAL","GTM RETAILER BALANCE","SMART LOAD WALLET RETAILER BALANCE"];

const promos={

SMART:[
["EXAMPL SITE 10000 (formely 59)","5GB + 3GB 5G Data + Unli Calls & Texts (3656 Days)",19726228,true],
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
["DITO Level-Up 99 (15 days)","9GB All-Access Data + Unlimited Texts to All Networks + Unlimited DITO-to-DITO Calls + Unlimited DITO-to-DITO Video Calls + 150 Mins Calls to Other Networks (15 days)",99,false],
["DITO Level-Up 99 (30 days)","7GB All-Access Data + Unlimited Texts to All Networks + Unlimited DITO-to-DITO Calls + Unlimited DITO-to-DITO Video Calls + 300 Mins Calls to Other Networks (30 days)",99,false],
["DITO Level-Up 129","12GB All-Access Data + Unlimited Texts to All Networks + Unlimited DITO-to-DITO Calls + Unlimited DITO-to-DITO Video Calls + 300 Mins Calls to Other Networks + Prime Video Access (30 days)",129,false],
["DITO Level-Up 169","16GB All-Access Data + Unlimited Texts to All Networks + Unlimited DITO-to-DITO Calls + Unlimited DITO-to-DITO Video Calls + 300 Mins Calls to Other Networks + Prime Video Access (30 days)",169,false],
["DITO Level-Up 199","20GB All-Access Data + Unlimited Texts to All Networks + Unlimited DITO-to-DITO Calls + Unlimited DITO-to-DITO Video Calls + 300 Mins Calls to Other Networks + Prime Video Access (30 days)",199,false],
["DITO Level-Up 299","32GB All-Access Data + Unlimited Texts to All Networks + Unlimited DITO-to-DITO Calls + Unlimited DITO-to-DITO Video Calls + 300 Mins Calls to Other Networks + Prime Video Access (30 days)",299,false],
["DITO Level-Up 499","62GB All-Access Data + Unlimited Texts to All Networks + Unlimited DITO-to-DITO Calls + Unlimited DITO-to-DITO Video Calls + 300 Mins Calls to Other Networks + Prime Video Access (30 days)",499,false],
["DITO Level-Up 999","130GB All-Access Data + Unlimited Texts to All Networks + Unlimited DITO-to-DITO Calls + Unlimited DITO-to-DITO Video Calls + 300 Mins Calls to Other Networks + Prime Video Access (30 days)",999,false],
["DITO Level-Up 109","10GB All-Access Data + Unlimited Texts to All Networks + Unlimited DITO-to-DITO Calls + Unlimited DITO-to-DITO Video Calls + 300 Mins Calls to Other Networks (30 days)",109,false],

["Data Maxx 50","7GB All-Access Data + UNLI Calls & Texts to All Networks + UNLI DITO-to-DITO Video Calls with no data charge (5 days)",50,true],
["Data Maxx 70","10GB All-Access Data + UNLI Calls & Texts to All Networks + UNLI DITO-to-DITO Video Calls with no data charge (7 days)",70,true],
["Data Maxx 129","15GB All-Access Data + UNLI Data for Facebook, Messenger, Instagram, WhatsApp, Threads & TikTok + UNLI Calls & Texts to All Networks + UNLI DITO-to-DITO Video Calls (15 days)",129,true],
["Data Maxx 149","20GB All-Access Data + UNLI Data for Facebook, Messenger, Instagram, WhatsApp, Threads & TikTok + UNLI Calls & Texts to All Networks + UNLI DITO-to-DITO Video Calls (15 days)",149,true],
["Data Maxx 299","30GB All-Access Data + UNLI Data for Facebook, Messenger, Instagram, WhatsApp, Threads & TikTok + UNLI Calls & Texts to All Networks + UNLI DITO-to-DITO Video Calls (30 days)",299,true],

["Level-Up Gaming 29","3GB Data for Gaming Apps (2 days)",29,false],
["Level-Up Gaming 39","5GB Data for Gaming Apps + UNLI 5G for supported gaming apps (5 days)",39,false],
["Level-Up Gaming 59","8GB Data for Gaming Apps + UNLI 5G for supported gaming apps (7 days)",59,false],

["Level-Up YouTube 99","12GB Total Data: 10GB YouTube Data + 2GB All-Access Data + UNLI 5G for YouTube + FREE YouTube from 4:00AM-8:00AM (15 days)",99,false],
["Level-Up YouTube 199","26GB Total Data: 22GB YouTube Data + 4GB All-Access Data + UNLI 5G for YouTube + FREE YouTube from 4:00AM-8:00AM (30 days)",199,false],
["Level-Up YouTube 299","40GB Total Data: 30GB YouTube Data + 10GB All-Access Data + UNLI 5G for YouTube + FREE YouTube from 4:00AM-8:00AM + Unlimited Texts to All Networks + Unlimited Calls DITO-to-DITO + 300 Mins Calls to Other Networks (30 days)",299,false],

["StreamZone99","5GB All-Access Data + 5GB Streaming Data + Unlimited Mobile Calls and Texts to All Networks + Free iWant and BlastTV Vouchers (15 days)",99,false],
["StreamZone199","11GB All-Access Data + 11GB Streaming Data + Unlimited Mobile Calls and Texts to All Networks + Free Prime Video Mobile Access for 30 days + Free iWant and BlastTV Vouchers (30 days)",199,false],

["5G Maxx 50","15GB 5G Data + 3GB All-Access Data + Unlimited Calls & Texts to All Mobile Networks + Unlimited DITO-to-DITO Video Calls with no data charge (3 days)",50,true],
["Unli 5G Maxx 99","Unlimited 5G Data + 5GB All-Access Data + Unlimited Calls & Texts to All Mobile Networks + Unlimited DITO-to-DITO Video Calls with no data charge (3 days)",99,true],
["Unli 5G Maxx 149","Unlimited 5G Data + 15GB All-Access Data + Unlimited Data for Facebook, Messenger, Instagram, WhatsApp, Threads & TikTok + Unlimited Calls & Texts to All Networks + Unlimited DITO-to-DITO Video Calls with no data charge (7 days)",149,true],
["Unli 5G Maxx 249","Unlimited 5G Data + 20GB All-Access Data + Unlimited Data for Facebook, Messenger, Instagram, WhatsApp, Threads & TikTok + Unlimited Calls & Texts to all networks (Mobile) + Unlimited Video Calls DITO-to-DITO with no data charge (15 days)",249,true],
["Unli 5G Maxx 449","Unlimited 5G Data + 30GB All-Access Data + Unlimited Data for Facebook, Messenger, Instagram, WhatsApp, Threads & TikTok + Unlimited Calls & Texts to all networks (Mobile) + Unlimited Video Calls DITO-to-DITO with no data charge (30 days)",449,true],

["Level-Up Socials 20","2GB Data for Facebook, Messenger, Instagram, WhatsApp & Threads + 500MB All-Access Data (1 day)",20,false],
["Level-Up Socials 50","3.5GB Data for Facebook, Messenger, Instagram, WhatsApp & Threads + 3.5GB All-Access Data (3 days)",50,false],
["Level-Up Socials 70","Unli Data for Facebook, Messenger, Instagram, WhatsApp, Threads & TikTok + 5GB All-Access Data (7 days)",70,false],
["Level-Up Socials 299","Unli Data for Facebook, Messenger, Instagram, WhatsApp, Threads & TikTok + 5GB All-Access Data (30 days)",299,false],
["Level-Up Socials 399","Unli Data for Facebook, Messenger, Instagram, WhatsApp, Threads & TikTok + 10GB All-Access Data (30 days)",399,false],
["Level-Up Socials 499","Unli Data for Facebook, Messenger, Instagram, WhatsApp, Threads & TikTok + 15GB All-Access Data (30 days)",499,false],
["Level-Up Socials 599","Unli Data for Facebook, Messenger, Instagram, WhatsApp, Threads & TikTok + 20GB All-Access Data (30 days)",599,false],

["Live It!","7GB Data for selected social, messaging, video, shopping & productivity apps + 1GB All-Access Data (7 days)",50,false],
["Play It!","7GB Data for selected gaming, social, messaging, video & streaming apps + 1GB All-Access Data (7 days)",50,false],
["Work It!","7GB Data for selected communication, productivity, navigation & work apps + 1GB All-Access Data (7 days)",50,false],

["DITO Data 50","5GB All-Access Data (7 days)",48,false],
["DITO Data Sachet 30","3GB All-Access Data (3 days)",29,false],
["DITO Data Sachet 20","2GB All-Access Data (1 day)",19,false],
["DITO Data Sachet 10","500MB All-Access Data (1 day)",10,false],

["DITO REGULAR LOAD 5","P5 Regular Load.",5,false],
["DITO REGULAR LOAD 10","P10 Regular Load.",10,false],
["DITO REGULAR LOAD 20","P20 Regular Load.",20,false],
["DITO REGULAR LOAD 30","P29 Regular Load.",29,false],
["DITO REGULAR LOAD 50","P49 Regular Load.",49,false],
["DITO REGULAR LOAD 100","P97 Regular Load.",97,false],
["DITO REGULAR LOAD 200","P194 Regular Load.",194,false],
["DITO REGULAR LOAD 300","P291 Regular Load.",291,false],
["DITO REGULAR LOAD 500","P485 Regular Load.",485,false],
["DITO REGULAR LOAD 1000","P970 Regular Load.",970,false],

],
GLOBE:[
["GoWATCH10","1GB GoWATCH Data; 1 day",10,false],
["GoSHARE10","1GB GoSHARE Data; 1 day",10,false],
["GoPLAY10","1GB GoPLAY Data; 1 day",10,false],
["GoCALL10","Unli All-Net Calls; 1 day",10,false],
["GoBOOST15","1GB All Sites Data; 1 day",14,false],
["GoUNLI20","50MB All Sites + Unli All-Net Calls + Texts; 1 day",19,false],
["GoUNLI30","100MB All Sites + Unli All-Net Calls + Texts; 2 days",28,false],
["GoUNLI50","500MB All Sites + Unli All-Net Calls + Texts; 3 days",47,false],
["GoUNLI350","3GB All-Sites Data + Unli Allnet Calls + Unli Allnet Texts (30 days)",326,false],

["Go59","5GB All Sites + Free 1GB 5G + Unli All-Net Texts; 3 days",55,false],
["Go59 for Students","5GB All Sites + 1GB Apps + Free 1GB 5G + Unli Texts; 3 days",55,false],

["UNLI 5G 59","Unli 5G + 2GB All-Sites Data (2 days)",55,false],

["Go+99","20GB Total Data + Unli Allnet Texts (7 days)",92,false],
["Go+99 with GoWATCH","20GB Total Data + GoWATCH + Unli Allnet Texts (7 days)",92,false],
["Go+99 with GoPLAY","20GB Total Data + GoPLAY + Unli Allnet Texts (7 days)",92,false],
["Go+99 with GoLEARN","20GB Total Data + GoLEARN + Unli Allnet Texts (7 days)",92,false],
["Go+99 with GoSHARE","20GB Total Data + GoSHARE + Unli Allnet Texts (7 days)",92,false],
["Go+109","22GB Total Data + Unli Allnet Texts + Discount Voucher (7 days)",101,false],
["Go+129","27GB Total Data + Unli Allnet Texts + Discount Voucher (7 days)",120,false],
["Go+149","29GB Total Data (13GB Data + 8GB Apps + 8GB 5G) + Unli Allnet Texts + Discount Voucher (7 days)",139,false],
["Go+179","24GB Total Data (8GB Data + 8GB 5G + 8GB Apps) + Unli Allnet Texts + Discount Voucher (15 days)",166,false],
["Go+250","15GB Data + 8GB 5G Data + 15GB Apps Data + Discount Voucher (15 days)",233,false],
["Go+400","48GB Total Data (25GB Data + 8GB 5G + 15GB Apps) + Discount Voucher (15 days)",372,false],

["UnliGo99 Facebook","5GB All-Sites Data + Unli Allnet Texts (7 days)",92,false],
["UnliGo99 TikTok","5GB All-Sites Data + Unli Allnet Texts (7 days)",92,false],
["UnliGo99 Instagram","5GB All-Sites Data + Unli Allnet Texts (7 days)",92,false],

["GoEXTRA59","5GB Data + Unli All-Net Calls + Unli Texts; 3 days",55,false],
["GoEXTRA99","11GB Total Data + Unli Allnet Calls + Unli Allnet Texts (7 days)",92,false],
["GoEXTRA109","14GB Total Data + Unli Allnet Calls + Unli Allnet Texts (7 days)",101,false],
["GoEXTRA199","16GB Total Data + Unli Allnet Calls (15 days)",185,false],
["GoEXTRA149","21GB Total Data (13GB Data + 8GB 5G) + Unli Allnet Calls + Unli Allnet Texts (7 days)",139,false],
["GoEXTRA179","13GB Total Data (5GB Data + 8GB 5G) + Unli Allnet Calls + Unli Allnet Texts (15 days)",166,false],
["GoEXTRA199","16GB Total Data (8GB Data + 8GB 5G) + Unli Allnet Calls + Unli Allnet Texts (15 days)",185,false],

["SURF4ALL99","9GB Shareable All-Sites Data (7 days)",92,false],
["SURF4ALL249","20GB Shareable All-Sites Data (7 days)",232,false],

["GLOBE REGULAR LOAD 10","P10 Regular Load.",10,false],
["GLOBE REGULAR LOAD 20","P19 Regular Load.",19,false],
["GLOBE REGULAR LOAD 30","P28 Regular Load.",28,false],
["GLOBE REGULAR LOAD 50","P47 Regular Load.",47,false],
["GLOBE REGULAR LOAD 100","P93 Regular Load.",93,false],
["GLOBE REGULAR LOAD 200","P186 Regular Load.",186,false],
["GLOBE REGULAR LOAD 300","P279 Regular Load.",279,false],
["GLOBE REGULAR LOAD 500","P465 Regular Load.",465,false],
["GLOBE REGULAR LOAD 1000","P930 Regular Load.",930,false],

],
TM:[

["All-Net SURF 10","200MB: 100MB + 100MB FB/ML + 200 mins Allnet Calls + 200 Allnet Texts (1 day)",10,false],
["FBML15","1GB FB and ML (3 days)",14,false],
["COMBO15","120 mins Globe/TM + Unli Allnet Texts (2 days)",14,false],
["Unli iTxt20","Unli International SMS to select countries (1 day)",19,false],
["AN20","600MB: 300MB + 150MB/Day FunALIW + Unli Allnet Calls + Unli Allnet Texts (2 days)",19,false],
["PowerSURF20","1GB Data + 250 Mins Allnet Calls + 250 Allnet Texts (1 day)",19,false],
["All-Net SURF 20","600MB: 300MB + 150MB/Day FunALIW + Unli Allnet Calls + Unli Allnet Texts (2 days)",19,false],
["COMBO20","120 mins Globe/TM + Unli Allnet Texts (3 days)",19,false],
["COMBOALL20","Unli Globe/TM Calls + Unli Globe/TM + 50 Allnet Texts (3 days)",19,false],
["BIG BENTE","1.5GB FB, ML and TikTok (3 days)",19,false],
["GoCallIDD30","PHP 30 worth of IDD Credits (7 days)",28,false],
["PowerSURF30","2GB: 1GB Data + 1GB FunALIW + Unli Allnet Calls + Unli Allnet Texts (2 days)",28,false],
["All-Net SURF 30","1.2GB: 750MB + 150MB/Day FunALIW + Unli Allnet Calls + Unli Allnet Texts (3 days)",28,false],
["GoCallIDD50","PHP 50 worth of IDD Credits (15 days)",47,false],
["EZ50 5G FunALIW","9GB: 3GB + 3GB 5G + 1GB/Day FunALIW + Unli Allnet Texts (3 days)",47,false],
["EZ50 5G FunACHIEVE","9GB: 4GB + 2GB 5G + 1GB/Day FunACHIEVE + Unli Allnet Texts (3 days)",47,false],
["All-Net SURF 70","1.2GB: 1GB + 200MB FunALIW + Unli Allnet Calls + Unli Allnet Texts (7 days)",65,false],
["EZ75 FunALIW","8GB: 2GB + 2GB/Day FunALIW + Unli Allnet Calls + Unli Allnet Texts (3 days)",70,false],
["EZ75 FunACHIEVE","8GB: 2GB + 2GB/Day FunACHIEVE + Unli Allnet Calls + Unli Allnet Texts (3 days)",70,false],
["EZ99 5G","17GB: 3GB + 2GB/Day 5G + Unli Allnet Texts (7 days)",92,false],
["EZ99 FunALIW","17GB: 3GB + 2GB/Day FunALIW + Unli Allnet Texts (7 days)",92,false],
["EZ99 FunACHIEVE","17GB: 3GB + 2GB/Day FunACHIEVE + Unli Allnet Texts (7 days)",92,false],
["PowerSURF99","10GB: 3GB Data + 6GB FunALIW + 1GB 5G + Unli Allnet Calls + Unli Allnet Texts (7 days)",92,false],
["ALLSURF99","18GB: 7GB + 1GB/Day FunALIW + 4GB 5G + Unli Allnet Texts (7 days)",92,false],
["SURF4ALL99","9GB Shareable All-Sites Data (7 days)",92,false],
["GoCallIDD99","PHP 99 worth of IDD Credits (30 days)",92,false],
["EZ110 FunALIW","18GB: 4GB + 2GB/Day FunALIW + Unli Allnet Texts (7 days)",102,false],
["EZ110 5G","18GB: 4GB + 2GB/Day 5G + Unli Allnet Texts (7 days)",102,false],
["ALLSURF110","19GB: 8GB + 1GB/Day FunALIW + 4GB 5G + Unli Allnet Texts (7 days)",102,false],
["EZ140 FunALIW","18GB: 4GB + 2GB/Day FunALIW + Unli Allnet Calls + Unli Allnet Texts (7 days)",130,false],
["EZ140 FunACHIEVE","18GB: 4GB + 2GB/Day FunACHIEVE + Unli Allnet Calls + Unli Allnet Texts (7 days)",130,false],
["EZ140 5G","18GB: 4GB + 2GB/Day 5G + Unli Allnet Calls + Unli Allnet Texts (7 days)",130,false],
["ALLSURF149","19GB + 8GB 5G: 12GB + 1GB/Day FunALIW + 8GB 5G + Unli Allnet Calls + Unli Allnet Texts (7 days)",139,false],
["TM EasyPlan159","34GB: 2GB Data + 2GB/Day Apps + 2GB 5G + Unli Allnet Calls + Unli Allnet Texts (15 days)",148,false],
["GoCallIDD199","PHP 200 worth of IDD Credits (30 days)",185,false],
["SURF4ALL249","20GB Shareable All-Sites Data (7 days)",232,false],
["EZ299","12GB: 2GB + 10GB FunALIW or FunACHIEVE (30 days)",278,false],
["TM EasyPlan300","64GB: 2GB Data + 2GB/Day Apps + 2GB 5G + Unli Allnet Calls + Unli Allnet Texts (30 days)",279,false],

["TM REGULAR LOAD 10","P10 Regular Load.",10,false],
["TM REGULAR LOAD 20","P19 Regular Load.",19,false],
["TM REGULAR LOAD 30","P28 Regular Load.",28,false],
["TM REGULAR LOAD 50","P47 Regular Load.",47,false],
["TM REGULAR LOAD 100","P93 Regular Load.",93,false],
["TM REGULAR LOAD 200","P186 Regular Load.",186,false],
["TM REGULAR LOAD 300","P279 Regular Load.",279,false],
["TM REGULAR LOAD 500","P465 Regular Load.",465,false],
["TM REGULAR LOAD 1000","P930 Regular Load.",930,false],
],
GOMO:[
["GOMO7GB149","7GB No Expiry Data + UNLI Calls & Texts (7 days)",139,false],
["GOMO15GB249","15GB No Expiry Data + UNLI Calls & Texts (7 days)",232,false],
["GOMO30GB449","30GB No Expiry Data + UNLI Calls & Texts (7 days)",418,false],

["GOMO_UNLI7_199","UNLI Data up to 10 Mbps (7 days)",185,false],
["GOMO_UNLI7_249","UNLI Data up to 10 Mbps + UNLI Calls & Texts (7 days)",232,false],
["GOMO_UNLI30_799","UNLI Data up to 10 Mbps (30 days)",743,false],
["GOMO_UNLI30_999","UNLI Data up to 10 Mbps + UNLI Calls & Texts (30 days)",929,false],

["GOMO_F50_299","UNLI Fiber up to 50 Mbps + 7GB No Expiry Data (7 days)",278,false],
["GOMO_F50_349","UNLI Fiber up to 50 Mbps + Mobile Data up to 10 Mbps (7 days)",325,false],
["GOMO_F50_399","UNLI Fiber up to 50 Mbps + Mobile Data up to 10 Mbps + UNLI Calls & Texts (7 days)",371,false],
["GOMO_F50_899","UNLI Fiber up to 50 Mbps + 15GB No Expiry Data (30 days)",836,false],
["GOMO_F50_1299","UNLI Fiber up to 50 Mbps + Mobile Data up to 10 Mbps (30 days)",1208,false],
["GOMO_F50_1499","UNLI Fiber up to 50 Mbps + Mobile Data up to 10 Mbps + UNLI Calls & Texts (30 days)",1394,false],

["GOMO_F100_399","UNLI Fiber up to 100 Mbps + 7GB No Expiry Data (7 days)",371,false],
["GOMO_F100_449","UNLI Fiber up to 100 Mbps + Mobile Data up to 10 Mbps (7 days)",418,false],
["GOMO_F100_499","UNLI Fiber up to 100 Mbps + Mobile Data up to 10 Mbps + UNLI Calls & Texts (7 days)",464,false],
["GOMO_F100_1199","UNLI Fiber up to 100 Mbps + 15GB No Expiry Data (30 days)",1115,false],
["GOMO_F100_1599","UNLI Fiber up to 100 Mbps + Mobile Data up to 10 Mbps (30 days)",1487,false],
["GOMO_F100_1799","UNLI Fiber up to 100 Mbps + Mobile Data up to 10 Mbps + UNLI Calls & Texts (30 days)",1673,false],

["GOMO_F300_599","UNLI Fiber up to 300 Mbps + 7GB No Expiry Data (7 days)",557,false],
["GOMO_F300_649","UNLI Fiber up to 300 Mbps + Mobile Data up to 10 Mbps (7 days)",604,false],
["GOMO_F300_699","UNLI Fiber up to 300 Mbps + Mobile Data up to 10 Mbps + UNLI Calls & Texts (7 days)",650,false],
["GOMO_F300_1699","UNLI Data up to 300 Mbps + 15GB No Expiry Data (30 days)",1580,false],
["GOMO_F300_2099","UNLI Fiber up to 300 Mbps + Mobile Data up to 10 Mbps (30 days)",1952,false],
["GOMO_F300_2299","UNLI Fiber up to 300 Mbps + Mobile Data up to 10 Mbps + UNLI Calls & Texts (30 days)",2138,false]
],
"GLOBE AT HOME":[
["FamSURF50","5GB Shareable Open Access Data (3 days)",47,false],
["FamSURF Extra 199","50GB Shareable Open Access Data (7 days)",185,false], 
["FamSURF Extra 299","75GB Shareable Open Access Data (7 days)",278,false], 
["FamSURF Unli 399","Unli All-Access Data (7 days)",371,false], 
["FamSURF No Expiry 399","30GB All-Access Data (No Expiry)",371,false], 
["FamSURF Extra 499","120GB Shareable Open Access Data (15 days)",464,false], 
["FamSURF No Expiry 699","60GB All-Access Data (No Expiry)",650,false], 
["FamSURF Unli 999","Unli All-Access Data (30 days)",929,false], 
["FamSURF Extra 999","250GB Shareable Open Access Data (30 days)",929,false],

["HomeSurf50","5GB Shareable Open Access Data (3 days)",47,false], 
["HomeSurf1499","120GB Shareable Open Access Data (30 days)",1394,false],
],
GFIBER:[
["UNLISurf249","50Mbps UNLI Surf (7 days)",232,false], 
["UNLISurf399","100Mbps UNLI Surf (7 days)",371,false], 
["UNLISurf749","50Mbps UNLI Surf (30 days)",697,false], 
["UNLISurf999","100Mbps UNLI Surf (30 days)",929,false], 
["UNLISurf1499","300Mbps UNLI Surf (30 days)",1394,false], 
["UNLISurf1999","500Mbps UNLI Surf (30 days)",1859,false], 
["UNLISurf2499","100Mbps UNLI Surf (90 days)",2324,false], 
["UNLISurf3749","300Mbps UNLI Surf (90 days)",3487,false], 
["UNLISurf4999","100Mbps UNLI Surf (180 days)",4649,false], 
["UNLISurf4999","500Mbps UNLI Surf (90 days)",4649,false], 
["UNLISurf6999","50Mbps UNLI Surf (365 days)",6509,false], 
["UNLISurf7499","300Mbps UNLI Surf (180 days)",6974,false], 
["UNLISurf9999","100Mbps UNLI Surf (365 days)",9299,false], 
["UNLISurf9999","500Mbps UNLI Surf (180 days)",9299,false], 
["UNLISurf14999","300Mbps UNLI Surf (365 days)",13949,false], 
["UNLISurf19999","500Mbps UNLI Surf (365 days)",18599,false],
],

PLDT:[
  ["Landline Plus 30", "Convert your Landline Plus load into Landline Plus Plan 150 or 300 or just top-up for more outgoing calls. Valid for 1 year.", 30, false],
  ["Landline Plus 50", "Convert your Landline Plus load into Landline Plus Plan 150 or 300 or just top-up for more outgoing calls. Valid for 1 year.", 49, false],
  ["Landline Plus 100", "Convert your Landline Plus load into Landline Plus Plan 150 or 300 or just top-up for more outgoing calls. Valid for 1 year.", 98, true],
  ["Landline Plus 200", "Convert your Landline Plus load into Landline Plus Plan 150 or 300 or just top-up for more outgoing calls. Valid for 1 year.", 196, false],
  ["Landline Plus 300", "Convert your Landline Plus load into Landline Plus Plan 150 or 300 or just top-up for more outgoing calls. Valid for 1 year.", ,294, false],
  ["Landline Plus 1000", "Convert your Landline Plus load into Landline Plus Plan 150 or 300 or just top-up for more outgoing calls. Valid for 1 year.", 980, false],

  ["UNLI Fiber Prepaid 50Mbps 1 Day", "Valid for 1 Day", 49, false],
  ["UNLI Fiber Prepaid 50Mbps 7 Days", "Valid for 7 Days", 195, false],
  ["UNLI Fiber Prepaid 50Mbps 15 Days", "Valid for 15 Days", 371, false],
  ["UNLI Fiber Prepaid 50Mbps 30 Days", "Valid for 30 Days", 685, true],
  ["UNLI Fiber Prepaid 50Mbps 365 Days", "Valid for 365 Days", 6859, false],

  ["UNLI Fiber Prepaid 100Mbps 1 Day", "Valid for 1 Day", 97, false],
  ["UNLI Fiber Prepaid 100Mbps 7 Days", "Valid for 7 Days", 371, false],
  ["UNLI Fiber Prepaid 100Mbps 15 Days", "Valid for 15 Days", 538, false],
  ["UNLI Fiber Prepaid 100Mbps 30 Days", "Valid for 30 Days", 979, false],
  ["UNLI Fiber Prepaid 100Mbps 365 Days", "Valid for 365 Days", 9799, false],

  ["UNLI Fiber Prepaid 300Mbps 1 Day", "Valid for 1 Day", 195, false],
  ["UNLI Fiber Prepaid 300Mbps 7 Days", "Valid for 7 Days", 685, false],
  ["UNLI Fiber Prepaid 300Mbps 15 Days", "Valid for 15 Days", 979, false],
  ["UNLI Fiber Prepaid 300Mbps 30 Days", "Valid for 30 Days", 1469, false],
  ["UNLI Fiber Prepaid 300Mbps 365 Days", "Valid for 365 Days", 14699, false]
],

CIGNAL:[
  ["Cignal Sports Action 300", "Intense LIVE sports and action movies! Watch up to 69 channels.", 294, false],

  ["Cignal Family Time 300", "Complete bonding experience with all your family faves! Watch up to 79 channels.", 294, false],

  ["Cignal Ultimate Entertainment 300", "Your must-watch entertainment and news updates! Watch up to 78 channels.", 294, false],

  ["Cignal Asian & Pinoy 300", "Feel all kinds of kilig with Asian & local shows! Watch up to 68 channels.", 294, false],

  ["Cignal Ultimate Entertainment 600", "Ultimate Entertainment 300 + more channels. With HBO GO streaming access!", 588, false],

  ["Cignal Plan 175", "Load 175. Valid for 30 days.", 172, false],
  ["Cignal Plan 200", "Load 200. Valid for 30 days.", 196, false],
  ["Cignal Plan 300", "Load 300. Valid for 30 days.", 294, false],
  ["Cignal Plan 450", "Load 450. Valid for 30 days.", 441, false],
  ["Cignal Plan 500", "Load 500. Valid for 30 days.", 490, false],
  ["Cignal Plan 600", "Load 600. Valid for 30 days.", 588, false],
  ["Cignal Plan 800", "Load 800. Valid for 30 days.", 784, false],
  ["Cignal Plan 1000", "Load 1000. Valid for 30 days.", 980, false],

  ["SatLite 10", "Tingi Load 10 - Watch up to 24 channels. Valid for 3 days.", 10, false],
  ["SatLite 15", "Tingi Load 15 - Watch up to 39 channels. Valid for 3 days.", 15, false],
  ["SatLite 25", "Tingi Load 25 - Watch up to 46 channels. Valid for 3 days.", 25, false],

  ["SatLite 49", "Load 49 - Watch up to 24 channels. Valid for 30 days.", 48, false],
  ["SatLite 99", "Load 99 - Watch up to 39 channels. Valid for 30 days.", 97, false],
  ["SatLite 199", "Load 199 - Watch up to 46 channels. Valid for 30 days.", 195, false],
  ["SatLite 299", "Load 299 - Watch up to 51 channels. Valid for 30 days.", 293, false]
],

"GTM RETAILER BALANCE":[
["GTM RETAILER BALANCE 5000(20DC)"," DAYS PROCESS! NO CANCELLATION PLSS WAIT",4000,true],

["GTM RETAILER BALANCE 10,000(22DC)"," DAYS PROCESS! NO CANCELLATION PLSS WAIT",7800,true],

["GTM RETAILER BALANCE 25,000(24DC)"," DAYS PROCESS! NO CANCELLATION PLSS WAIT.. LIMITED TIME OFFER!",19000,true],

["GTM RETAILER BALANCE 30,000(25DC)"," DAYS PROCESS! NO CANCELLATION PLSS WAIT.. LIMITED TIME OFFER!",22500,true],

],

"SMART LOAD WALLET RETAILER BALANCE":[

["SMART LOAD WALLET RETAILER BALANCE 101","1% REBATES MINUTES/HOURS PROCESS. PLSS WAIT! ",100,true],

["SMART LOAD WALLET RETAILER BALANCE 202","1% REBATES MINUTES/HOURS PROCESS. PLSS WAIT! ",200,true],

["SMART LOAD WALLET RETAILER BALANCE 303","1% REBATES MINUTES/HOURS PROCESS. PLSS WAIT! ",300,true],

["SMART LOAD WALLET RETAILER BALANCE 507","1.5% REBATES MINUTES/HOURS PROCESS. PLSS WAIT! ",500,true],

["SMART LOAD WALLET RETAILER BALANCE 812","1.5% REBATES MINUTES/HOURS PROCESS. PLSS WAIT! ",800,true],

["SMART LOAD WALLET RETAILER BALANCE 812","1.5% REBATES MINUTES/HOURS PROCESS. PLSS WAIT! ",800,true],

["SMART LOAD WALLET RETAILER BALANCE 1,020","2% REBATES MINUTES/HOURS PROCESS. PLSS WAIT! ",1000,true],

["SMART LOAD WALLET RETAILER BALANCE 1,530","2% REBATES MINUTES/HOURS PROCESS. PLSS WAIT! ",1500,true],

["SMART LOAD WALLET RETAILER BALANCE 3,060","2% REBATES MINUTES/HOURS PROCESS. PLSS WAIT! ",3000,true],

["SMART LOAD WALLET RETAILER BALANCE 5,125","2.5% REBATES MINUTES/HOURS PROCESS. PLSS WAIT! ",5000,true],

["SMART LOAD WALLET RETAILER BALANCE 10,250","2.5% REBATES MINUTES/HOURS PROCESS. PLSS WAIT! ",10000,true],

["SMART LOAD WALLET RETAILER BALANCE 15,405","2.7% REBATES MINUTES/HOURS PROCESS. PLSS WAIT! ",15000,true],

["SMART LOAD WALLET RETAILER BALANCE 20,560","2.8% REBATES MINUTES/HOURS PROCESS. PLSS WAIT! ",20000,true],

["SMART LOAD WALLET RETAILER BALANCE 30,870","2.9% REBATES MINUTES/HOURS PROCESS. PLSS WAIT! ",30000,true],


],};

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
  document.querySelectorAll(".network-card").forEach(b=>b.onclick=()=>{activeNetwork=b.dataset.net;$("network").value=activeNetwork;$("search").value="";renderPromos();$("promoGrid").scrollIntoView({behavior:"smooth",block:"start"});});
  const logos={
SMART:"assets/networks/smart.png",
TNT:"assets/networks/tnt.png",
DITO:"assets/networks/dito.png",
GLOBE:"assets/networks/globe.png",
TM:"assets/networks/tm.png",
GOMO:"assets/networks/gomo.png",
GFIBER:"assets/networks/gfiber.png",
PLDT:"assets/networks/pldt.png",
CIGNAL:"assets/networks/cignal.png",
"GLOBE AT HOME":"assets/networks/globeathome.png",
"GTM RETAILER BALANCE":"assets/networks/gtmretbal.png",
"SMART LOAD WALLET RETAILER BALANCE":"assets/networks/smartretbal.png"
};

document.querySelectorAll(".network-card").forEach(b=>{
  const logo=logos[b.dataset.net];
  if(logo){
    b.insertAdjacentHTML("afterbegin",`<img class="network-logo-img" src="${logo}" alt="${b.dataset.net}">`);
  }
});
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

$("orderForm").addEventListener("submit",async e=>{
  e.preventDefault();
  const mobile=$("mobile").value.trim();
  if(!/^09\d{9}$/.test(mobile)){alert("Please enter a valid 11-digit Philippine mobile number (09xxxxxxxxx).");return}
  if(!$("network").value||!$("promo").value){alert("Please select network and promo.");return}
  $("orderNo").value ||= orderNumber();
  const o=$("promo").selectedOptions[0];
  updateSummary(decodeURIComponent(o.value),Number(o.dataset.price),$("network").value);
  if(!confirm(`Submit order ${$("orderNo").value}?\n\nYour order details and payment screenshot will be sent to the business.`)) return;

  const status=$("submitStatus");
  const btn=document.querySelector(".submit-btn");
  const fd=new FormData($("orderForm"));
  status.textContent="Sending order…";
  btn.disabled=true;
  try{
    const res=await fetch("https://online-loading-website.onrender.com/api/orders",{method:"POST",body:fd});
    const data=await res.json().catch(()=>({}));
    if(!res.ok) throw new Error(data.error||"Unable to submit the order.");
    status.textContent="Order submitted successfully! Your order is processing. Thank you, come again!";
    const successModal=$("successModal");
    if(successModal){
      $("successOrderNumber").textContent=$("orderNo").value;
      $("successModalTitle").textContent="Order submitted successfully!";
      successModal.hidden=false;
      successModal.setAttribute("aria-hidden","false");
    }
    
    $("orderForm").reset();
    $("orderNo").value=orderNumber();
    activeNetwork=""; fillNetworks(); renderPromos();
    $("paymentBox").innerHTML="<b>Payment details</b><p>Choose a payment method to display the account details.</p>";
    $("summary").innerHTML="<b>Order Summary</b><p>No promo selected yet.</p>";
  }catch(err){
    status.textContent=err.message;
    alert(err.message);
  }finally{
    btn.disabled=false;
  }
});

$("clearBtn").onclick=()=>{ $("orderForm").reset();$("orderNo").value=orderNumber();activeNetwork="";fillNetworks();renderPromos();$("paymentBox").innerHTML="<b>Payment details</b><p>Choose a payment method to display the account details.</p>";$("summary").innerHTML="<b>Order Summary</b><p>No promo selected yet.</p>"};
$("themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("rel-dark",document.body.classList.contains("dark"))};
if(localStorage.getItem("rel-dark")==="true")document.body.classList.add("dark");
fillNetworks();renderPromos();





window.addEventListener("DOMContentLoaded",()=>{
  const copyBtn=$("copyOrderNumber");
  if(copyBtn){
    copyBtn.addEventListener("click",async()=>{
      const no=$("successOrderNumber").textContent.trim();
      if(!no || no==="—") return;
      try{ await navigator.clipboard.writeText(no); copyBtn.textContent="✅ COPIED"; setTimeout(()=>copyBtn.textContent="📋 COPY ORDER NUMBER",1500); }
      catch(e){ alert("Order Number: " + no); }
    });
  }
  const successModal=$("successModal");
  const successModalOk=$("successModalOk");
  if(!successModal || !successModalOk) return;
  successModalOk.addEventListener("click",()=>{
    successModal.hidden=true;
    successModal.setAttribute("aria-hidden","true");
    $("orderForm").reset();
    $("orderNo").value=orderNumber();
    activeNetwork="";
    fillNetworks();
    renderPromos();
    $("paymentBox").innerHTML="<b>Payment details</b><p>Choose a payment method to display the account details.</p>";
    $("summary").innerHTML="<b>Order Summary</b><p>No promo selected yet.</p>";
    $("submitStatus").textContent="";
    window.location.hash="home";
    window.scrollTo({top:0,behavior:"smooth"});
  });
});















// ===============================
// MLBB TOP UP
// ===============================
const mlbbLauncher = $("mlbbLauncher");
const mlbbForm = $("mlbbForm");
if (mlbbLauncher && mlbbForm) {
  mlbbLauncher.addEventListener("click", () => {
    const open = mlbbForm.classList.toggle("mlbb-form-hidden");
    mlbbLauncher.setAttribute("aria-expanded", String(!open));
    mlbbLauncher.classList.toggle("is-open", !open);
    if (!open) setTimeout(() => mlbbForm.scrollIntoView({behavior:"smooth", block:"start"}), 80);
  });
}
const mlPaymentDetails=paymentDetails;
function mlOrderNumber(){const d=new Date();return `MLT-${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}-${Math.floor(1000+Math.random()*9000)}`}
function updateMlSummary(name,price){
  $("mlPromoField").value=name;
  $("mlAmountField").value=money(price);
  $("mlSummary").innerHTML=`<b>MLBB Order Summary</b><p>Customer: ${$("mlCustomerName").value.trim() || "—"}\nUser ID: ${$("mlUserId").value.trim() || "—"}\nZone ID: ${$("mlZoneId").value.trim() || "—"}\nPackage: ${name}\nAmount: ${money(price)}\nOrder No.: ${$("mlOrderNo").value}</p>`;
}

document.querySelectorAll(".ml-select-btn").forEach(btn=>btn.addEventListener("click",()=>{
  const name=btn.dataset.mlName;
  const price=Number(btn.dataset.mlPrice);
  document.querySelectorAll(".ml-select-btn").forEach(b=>b.classList.remove("ml-selected"));
  btn.classList.add("ml-selected");
  updateMlSummary(name,price);
  $("mlSummary").scrollIntoView({behavior:"smooth",block:"center"});
}));

if($("mlOrderNo")){
  $("mlOrderNo").value=mlOrderNumber();
  $("mlPayment").onchange=()=>{$("mlPaymentBox").innerHTML=$("mlPayment").value?`<b>${$("mlPayment").value}</b><p>${mlPaymentDetails[$("mlPayment").value]}</p>`:"<b>Payment details</b><p>Choose a payment method to display the account details.</p>"};
  $("mlUserId").addEventListener("input",()=>{if($("mlPromoField").value) updateMlSummary($("mlPromoField").value,Number($("mlAmountField").value.replace(/[^0-9.]/g,"")))});
  $("mlZoneId").addEventListener("input",()=>{if($("mlPromoField").value) updateMlSummary($("mlPromoField").value,Number($("mlAmountField").value.replace(/[^0-9.]/g,"")))});
  $("mlCustomerName").addEventListener("input",()=>{if($("mlPromoField").value) updateMlSummary($("mlPromoField").value,Number($("mlAmountField").value.replace(/[^0-9.]/g,"")))});
  $("mlScreenshot").addEventListener("change",e=>{
    const file=e.target.files[0]; if(!file)return;
    if(!["image/jpeg","image/png"].includes(file.type)){e.target.value="";alert("Payment screenshot must be JPG, JPEG, or PNG only.");return;}
    if(file.size>10*1024*1024){e.target.value="";alert("Payment screenshot is too large. Please choose an image up to 10MB.");}
  });
  $("mlbbForm").addEventListener("submit",async e=>{
    e.preventDefault();
    const uid=$("mlUserId").value.trim(), zid=$("mlZoneId").value.trim();
    if(!/^\d+$/.test(uid)){alert("Please enter a valid MLBB User ID.");return}
    if(!/^\d+$/.test(zid)){alert("Please enter a valid MLBB Zone ID.");return}
    if(!$("mlPromoField").value){alert("Please select a Weekly Pass or Diamond package.");return}
    $("mlOrderNo").value ||= mlOrderNumber();
    updateMlSummary($("mlPromoField").value,Number($("mlAmountField").value.replace(/[^0-9.]/g,"")));
    if(!confirm(`Send MLBB order ${$("mlOrderNo").value}?\n\nYour Name, User ID, Zone ID, package, payment details and screenshot will be sent to the business via Telegram.`))return;
    const status=$("mlSubmitStatus"),btn=$("mlSubmitBtn");
    status.textContent="Sending MLBB order…";btn.disabled=true;
    try{
      const fd=new FormData($("mlbbForm"));
      const res=await fetch("https://online-loading-website.onrender.com/api/orders",{method:"POST",body:fd});
      const data=await res.json().catch(()=>({}));
      if(!res.ok)throw new Error(data.error||"Unable to submit the MLBB order.");
      status.textContent="Order submitted successfully! Your order is processing. Please wait.";
      const successModal=$("successModal");
      if(successModal){
        $("successModalTitle").textContent="Order submitted successfully!";
        $("successOrderNumber").textContent=$("mlOrderNo").value;
        successModal.hidden=false;
        successModal.setAttribute("aria-hidden","false");
      }
      $("mlbbForm").reset();$("mlOrderNo").value=mlOrderNumber();$("mlPromoField").value="";$("mlAmountField").value="";
      $("mlSummary").innerHTML="<b>MLBB Order Summary</b><p>No package selected yet.</p>";
      $("mlPaymentBox").innerHTML="<b>Payment details</b><p>Choose a payment method to display the account details.</p>";
      document.querySelectorAll(".ml-select-btn").forEach(b=>b.classList.remove("ml-selected"));
    }catch(err){status.textContent=err.message;alert(err.message)}finally{btn.disabled=false}
  });
}


// ===============================
// ORDER STATUS / TRACKING
// ===============================
const trackBtn = $("trackBtn");
if (trackBtn) {
  trackBtn.addEventListener("click", async () => {
    const no = $("trackOrderNo").value.trim();
    const result = $("trackResult");
    if (!no) { alert("Please enter your Order Number."); return; }
    result.hidden = false;
    result.innerHTML = "Checking order status…";
    try {
      const res = await fetch(`https://online-loading-website.onrender.com/api/orders/${encodeURIComponent(no)}`);
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(d.error || "Order not found.");
      const isML = String(d.orderType).toLowerCase().includes("mlbb") || String(d.network).toLowerCase() === "mlbb";
      const completed = d.status === "COMPLETED";
      window.currentReceiptData = d;
      const maskMobile = (v) => String(v ?? "").trim() || "—";
      const receiptCustomer = String(d.customer ?? "").trim() || "Customer";
      result.innerHTML = `<div class="order-result-card receipt-card ${completed ? "completed" : "processing"}">
        <div class="receipt-brand">RONALD E-LOADING BUSINESS STATION<small>OFFICIAL ORDER RECEIPT</small></div>
        <div class="receipt-status ${completed ? "done" : "pending"}">${completed ? "🟢 ORDER COMPLETED" : "🟡 ORDER PROCESSING"}</div>
        ${completed ? `<div class="success-proof">✅ SUCCESSFUL LOAD PROOF<small>Verified by Ronald E-Loading Business Station</small></div>` : ""}
        <div class="receipt-meta"><span>Order No.</span><b>${escapeTrack(d.orderNumber)}</b></div>
        <div class="receipt-divider"></div>
        <div class="receipt-details">
          <div><span>Customer</span><b>${escapeTrack(receiptCustomer)}</b></div>
          <div><span>Order Type</span><b>${escapeTrack(d.orderType)}</b></div>
          <div><span>Network</span><b>${escapeTrack(d.network)}</b></div>
          ${isML ? `<div><span>User ID</span><b>${escapeTrack(d.userId)}</b></div><div><span>Zone ID</span><b>${escapeTrack(d.zoneId)}</b></div>` : `<div><span>Mobile</span><b>${escapeTrack(maskMobile(d.mobile))}</b></div>`}
          <div><span>Promo</span><b>${escapeTrack(d.promo)}</b></div>
          <div><span>Amount</span><b>${escapeTrack(d.amount)}</b></div>
          <div><span>Payment</span><b>${escapeTrack(d.payment || "Paid")}</b></div>
          <div><span>Order Time</span><b>${escapeTrack(d.orderTime)}</b></div>
          <div><span>Status</span><b>${escapeTrack(d.status)}</b></div>
          ${d.successfulTime ? `<div><span>Successful Time</span><b>${escapeTrack(d.successfulTime)}</b></div>` : ""}
        </div>
        <div class="receipt-divider"></div>
        <div class="receipt-note">Official customer/reseller proof of successful loading. Keep this receipt together with your Order Number.</div>
        ${completed ? `<div class="receipt-actions"><button type="button" class="primary-btn receipt-print-btn" onclick="downloadReceiptImage()">🧾 SAVE RECEIPT TO PHONE</button><button type="button" class="secondary-btn receipt-print-btn" onclick="window.print()">🖨️ PRINT RECEIPT</button></div>` : ""}
      </div>`;
    } catch (err) { result.innerHTML = `<b>Order Status</b><p>${escapeTrack(err.message)}</p>`; }
  });
}

function downloadReceiptImage(){
  const d=window.currentReceiptData||{};
  const isML=String(d.orderType||'').toLowerCase().includes('mlbb')||String(d.network||'').toLowerCase()==='mlbb';
  const esc=(v)=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  const rows=[
    ['Customer',d.customer||'Customer'],['Order Type',d.orderType||''],['Network',d.network||''],
    ...(isML?[['User ID',d.userId||''],['Zone ID',d.zoneId||'']]:[['Mobile',d.mobile||'']]),
    ['Promo',d.promo||''],['Amount',d.amount||''],['Payment',d.payment||'Paid'],['Order Time',d.orderTime||''],['Status',d.status||''],
    ...(d.successfulTime?[['Successful Time',d.successfulTime]]:[])
  ];
  const lineH=52, top=330, height=Math.max(900,top+rows.length*lineH+220), w=900;
  let y=top;
  const svgRows=rows.map(([k,v])=>{const out=`<text x="70" y="${y}" font-size="26" fill="#667085">${esc(k)}</text><text x="830" y="${y}" text-anchor="end" font-size="27" font-weight="700" fill="#101828">${esc(v)}</text><line x1="70" y1="${y+16}" x2="830" y2="${y+16}" stroke="#eaecf0"/>`; y+=lineH; return out;}).join('');
  const order=esc(d.orderNumber||'');
  const status=d.status==='COMPLETED'?'ORDER COMPLETED':'ORDER PROCESSING';
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${height}" viewBox="0 0 ${w} ${height}"><rect width="100%" height="100%" fill="#f2f4f7"/><rect x="35" y="35" width="830" height="${height-70}" rx="18" fill="#fff" stroke="#d0d5dd" stroke-width="2"/><text x="450" y="95" text-anchor="middle" font-family="Arial,sans-serif" font-size="32" font-weight="800" fill="#101828">RONALD E-LOADING BUSINESS STATION</text><text x="450" y="130" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="700" fill="#667085">OFFICIAL LOADING RECEIPT</text><line x1="70" y1="160" x2="830" y2="160" stroke="#98a2b3" stroke-dasharray="8 8"/><text x="450" y="215" text-anchor="middle" font-family="Arial,sans-serif" font-size="34" font-weight="800" fill="#067647">✓ ${status}</text><text x="450" y="265" text-anchor="middle" font-family="Arial,sans-serif" font-size="28" font-weight="800" fill="#101828">${order}</text><line x1="70" y1="290" x2="830" y2="290" stroke="#98a2b3" stroke-dasharray="8 8"/>${svgRows}<line x1="70" y1="${y+8}" x2="830" y2="${y+8}" stroke="#98a2b3" stroke-dasharray="8 8"/><text x="450" y="${y+65}" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" fill="#667085">Keep this receipt with your Order Number.</text><text x="450" y="${y+98}" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="700" fill="#101828">RONALD E-LOADING BUSINESS STATION</text></svg>`;
  const blob=new Blob([svg],{type:'image/svg+xml;charset=utf-8'});
  const url=URL.createObjectURL(blob); const img=new Image();
  img.onload=()=>{const c=document.createElement('canvas');c.width=w;c.height=height;const ctx=c.getContext('2d');ctx.drawImage(img,0,0);URL.revokeObjectURL(url);c.toBlob(b=>{const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=`Receipt-${order||'Order'}.png`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000);},'image/png');};
  img.src=url;
}

function escapeTrack(v){return String(v ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
