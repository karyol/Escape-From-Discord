const Discord = require('discord.js');

const helpMessage = new Discord.MessageEmbed()
    .setColor('#d83ecc')
    .setTitle('Help')
    .setDescription(
        'eft.help - show help' + '\n' +
        'eft.w % - search for % on eft wiki' + '\n' +
        'eft.keys % - information about keys for % map' + '\n' +
        'eft.ammo % - ammo for % weapon' + '\n' +
        'eft.mod % - recommended builds for % weapon');

// eslint-disable-next-line no-unused-vars
exports.run = (bot, message, args) => {
    message.channel.send(helpMessage).catch(console.error);
};

exports.help = {
    name: 'help'
};