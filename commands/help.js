const Discord = require('discord.js');

const helpMessage = new Discord.MessageEmbed()
    .setColor('#d83ecc')
    .setTitle('Help')
    .setDescription(
        'eft.help - show help' + '\n' +
        'eft.w % - search for % on eft wiki' + '\n' +
        'eft.key % - information about % key' + '\n' +
        'eft.ammo % - ammo for % weapon [WIP]');

// eslint-disable-next-line no-unused-vars
exports.run = (bot, message, args) => {
    message.channel.send(helpMessage).catch(console.error);
};

exports.help = {
    name: 'help'
};