// IRC BOT

var irc = require('irc');

var config = {
	channels: ["#demoBot"],
	server: "irc.tawx.net",
	botName: 'johnBottle'
}

var bot = new irc.Client(config.server, config.botName,{
	channels: config.channels,
	debug : true
});

console.log('running');

bot.addListener("join", function(from, to, text, message) {
	bot.say(config.channels[0], "Que PASA??");
});

// Listen for any message, say to him/her in the room
bot.addListener("message", function(from, to, text, message) {
	bot.say(config.channels[0], "¿Public que?");
	console.log(from);
	console.log(to);
	console.log(text);
	console.log(message);
});