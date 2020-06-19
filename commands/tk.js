const Discord = require('discord.js');
const fs = require('fs');

exports.run = (bot, message, args) => {
    var txt;
    fs.writeFile('../tk/' + args[0] + '.txt', 'w', err => {
        if(err) return console.error;
    });
};

exports.help = {
    name: 'tk'
};