const bot = require('../connection');

const replyMsges = (msg) =>{
    var hi = 'hi';
    // if(msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    //     bot.sendMessage(msg.chat.id, "Hello dear user");
    // }

    if(msg.text.toString().toLowerCase().indexOf(hi) === 0){
        bot.sendMessage(msg.from.id, "Hello" + msg.from.first_name);
    }

    var bye = 'bye';
    if(msg.text.toString().toLowerCase().includes(bye)){
        bot.sendMessage(msg.chat.id, "Hope to see you around again, Bye.")
    }

    var robot = "I'm robot";
    if(msg.text.indexOf(robot)===0){
        bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
    }
}

module.exports = replyMsges;