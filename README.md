# Ronald E-Loading — Telegram Notifications

This version sends website order submissions to your Telegram chat through a Telegram Bot.

## IMPORTANT SECURITY
Do NOT put your Telegram bot token in `index.html`, `script.js`, or any public GitHub repository.
The bot token belongs only in `.env`.

If a bot token was posted publicly or shared in a chat, revoke it with BotFather and create a new token.

## Setup

1. Install Node.js.
2. Open this folder in VS Code.
3. Run:
   `npm install`
4. Copy `.env.example` to `.env`.
5. Put your NEW Telegram bot token in:
   `TELEGRAM_BOT_TOKEN=`
6. Put your Telegram personal chat ID in:
   `TELEGRAM_CHAT_ID=`
7. Start:
   `npm start`
8. Open:
   `http://localhost:3000`

## How to get the Chat ID

Using your Telegram personal account:
1. Open your new bot.
2. Press Start / send `/start` to the bot.
3. Use a Telegram bot such as `@userinfobot` to view your own Telegram user/chat ID, or use your bot's `getUpdates` endpoint after sending `/start`.
4. Put that numeric ID in `.env`.

The notification is sent to the configured chat ID. The customer does not receive the Telegram notification unless you explicitly configure their chat ID.

## Notification format

The notification includes the order number, customer name, mobile number, network, promo, amount, payment method, reference number, and whether a payment screenshot was uploaded.

Payment screenshots are stored in the local `uploads/` folder. For production, use secure storage and a retention/deletion policy.

## Hosting

This project needs a Node.js-capable host because `server.js` handles the Telegram API call. A static-only host such as GitHub Pages cannot run the server.
