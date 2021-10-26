const TelegramBot = require('node-telegram-bot-api');

const token = "2050431990:AAEWD2fihGVg2ElaDJg6A88bWEwg6f5hjEs";

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) =>{
    var hi = 'hi';
    if(msg.text.toString().toLowerCase().indexOf(hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello dear user");
    }

    var bye = 'bye';
    if(msg.text.toString().toLowerCase().includes(bye)){
        bot.sendMessage(msg.chat.id, "Hope to see you around again, Bye!!")
    }
})

// to see the more details about the error
bot.on("polling_error", (err)=>console.log(err));

//set commands
bot.onText(/\/start/, (msg)=>{
    bot.sendMessage(msg.chat.id, "Welcome to Hi_Math!!")
});

bot.onText(/\/sendpic/, (msg)=>{
    bot.sendPhoto(msg.chat.id, "https://images4.alphacoders.com/282/282628.jpg", {caption: "(:Sending <<-->> Gratitude:) ! \nRegards, \nRavina"})
})