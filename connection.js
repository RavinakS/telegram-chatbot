const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.token

const bot = new TelegramBot(token, {polling: true});

module.exports = bot;