const bot = require('../connection');

const replyMsges = (msg) =>{
    var hi = 'hi';
    if(msg.text.toString().toLowerCase().indexOf(hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello dear user");
    }

    var bye = 'bye';
    if(msg.text.toString().toLowerCase().includes(bye)){
        bot.sendMessage(msg.chat.id, "Hope to see you around again, Bye!!")
    }
}

module.exports = replyMsges;