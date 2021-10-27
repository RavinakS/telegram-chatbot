const bot = require('./connection');

// response of text
const replyMsges = require('./controller/salt');
bot.on('message', replyMsges);

// to see the more details about the error
bot.on("polling_error", (err)=>console.log(err));

//set commands
const welcome = require('./controller/commands').welcome;
// const welcomeKeyboard = require('./controller/keyboards').welcomeKeyboard;
bot.onText(/\/start/, welcome);

const pic = require('./controller/commands').pic;
bot.onText(/\/sendpic/, pic);

const problem = require('./controller/math').question;
bot.on('user', problem);