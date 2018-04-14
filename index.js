const discord = require('discord.js')
const bot = new discord.Client();

var prefix = ("//")

bot.on('ready', function() {
    bot.user.setGame("//aide pour savoir les commandes")
    console.log("conected");
});

bot.login(process.env.TOKEN);
