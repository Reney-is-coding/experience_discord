const Discord = require('discord.js');

const {prefix, token} = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  if (message.content === prefix + 'ping') {
  	// send back "Pong." to the channel the message was sent in
  	message.channel.send('Pong.');
  }

	if (message.content === prefix + 'help') {
		message.channel.send('Commandes disponibles : !ping, ! help')
	}
});

client.login(token);
