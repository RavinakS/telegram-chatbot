const bot = require('../connection');

const welcomeKeyboard = (msg) =>{
    bot.sendMessage(msg.chat.id, "Welcome", {
        reply_markup: {
            keyboard: [["Sample text", "Second text"], ["Keyboard"], ["I'm robot"]]
        }
    })
}

module.exports = {welcomeKeyboard};