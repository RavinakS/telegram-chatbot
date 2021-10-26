const TelegramBot = require('node-telegram-bot-api');

const token = "2050431990:AAEWD2fihGVg2ElaDJg6A88bWEwg6f5hjEs";

const bot = new TelegramBot(token, {polling: true});

module.exports = bot;