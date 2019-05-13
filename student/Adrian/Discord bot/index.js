const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == 'ping'){
        //message.reply('pong');
        message.channel.sendMessage('pong');
    }
});

bot.login('NTc1NTk4Mjk5OTQwMzg4ODg0.XNKR9A.lsZTdA7aSkr94fO5-kLSo0mBa0c');