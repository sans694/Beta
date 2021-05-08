const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const { get } = require('http');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands')
const prefix = '.'
const memberCounter = require('./counters/member-counter')

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log('Beta is now online!');
	memberCounter(client);
	client.user.setActivity('Radiation levels rise', { type: "WATCHING"})
		.then(presence => console.log(`Activity set to Watching ${presence.activities[0].name}`))
		.catch(console.error);
});

client.on('guildMemberAdd', guildMember => {
	let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'People')

	guildMember.roles.add(welcomeRole)
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	
	if (command === 'play') {
		client.commands.get('play').execute(message, args);
	}
})

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	
	if (command === 'leave') {
		client.commands.get('leave').execute(message, args);
	}
})

client.on('message', message => {
	if (message.content === 'yo mama')
		message.channel.setName(`${memberCount.toLocaleString()}`)
})

client.on('message', async message => {
	if (message.content === 'Hello, Beta!')
		message.channel.send(`Hello, ${message.author.username}!`)
})

client.login(config.token);