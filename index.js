const discord = require('discord.js')
const bot = new discord.Client();

var prefix = ("//")

bot.on('ready', function() {
    bot.user.setGame("//aide pour savoir les commandes")
    console.log("conected");
});

bot.login("NDM0NzcyODY4MzEyNTk2NDg3.DbPRVw.AIk-pP9b0kynoyfoqgBQ-VhoQoc");