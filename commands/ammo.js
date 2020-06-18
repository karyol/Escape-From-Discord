const Discord = require('discord.js');

const weapons = new Array();
const ammoMessage = new Discord.MessageEmbed()
    .setColor('#ffffff');

weapons['sks'] = '7,62';

exports.run = (bot, message, args) => {
    
};

exports.help = {
    name: 'ammo'
};