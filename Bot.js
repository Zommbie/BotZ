const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTg4MTA3NTAwODY4MzM3NzA0.XQBLHg.uQulYhpclsXpTX8bW3Y7GTYDAn8';

bot.on('ready', () => {
    console.log = ('This bot is online');

})
bot.login(process.env.BOT_TOKEN);

