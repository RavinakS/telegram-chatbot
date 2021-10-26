const bot = require('../connection');

const welcome = (msg)=>{
    bot.sendMessage(msg.chat.id, "Welcome to Hi_Math!!")
};

const pic = (msg)=>{
    bot.sendPhoto(msg.chat.id, "https://images4.alphacoders.com/282/282628.jpg", {caption: "(:Sending <<-->> Gratitude:) ! \nRegards, \nRavina"})
}

module.exports = {welcome, pic};