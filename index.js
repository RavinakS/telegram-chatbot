const TelegramBot = require('node-telegram-bot-api');

const token = "2050431990:AAEWD2fihGVg2ElaDJg6A88bWEwg6f5hjEs";

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) =>{
    var Hi = 'hi';
    if(msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello dear user");
    }
})