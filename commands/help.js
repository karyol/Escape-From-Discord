const Discord = require('discord.js');

const helpMessage = new Discord.MessageEmbed()
    .setColor('#d83ecc')
    .setTitle('Help')
    .setDescription('eft.help - show help \n eft.w %s - search for %s on eft wiki');

// eslint-disable-next-line no-unused-vars
exports.run = (bot, message, args) => {
    message.channel.send(helpMessage).catch(console.error);
};

exports.help = {
    name: 'help'
};