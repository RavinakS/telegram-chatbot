const bot = require('./connection');

const replyMsges = require('./controller/salt');
bot.on('message', replyMsges);

// to see the more details about the error
bot.on("polling_error", (err)=>console.log(err));

//set commands
const welcome = require('./controller/commands').welcome;
bot.onText(/\/start/, welcome);

const pic = require('./controller/commands').pic;
bot.onText(/\/sendpic/, pic);

// bot.on.