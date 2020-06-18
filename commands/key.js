const Discord = require('discord.js');

const keys = new Array();
const keyMessage = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setFooter('Market price can not be 100% accurate.');

keys.push(
    {name: 'RB-BK', merchantPrice: '75,000₽', marketPrice: '75,000₽'},
    {name: 'West wing room 205 key', merchantPrice: '37,125₽', marketPrice: '675,000₽'},
    {name: 'East wing room 205 key', merchantPrice: '138,750₽', marketPrice: '150,000₽'}
);

exports.run = (bot, message, args) => {
    var temp, txt;
    for(var i = 0; i < keys.length; i++)
    {
        temp = 0;
        for(var j = 0; j < args.length; j++)
        {
            txt = args[j].toUpperCase();
            if(keys[i].name.includes(txt))
            {
                temp++;
                if(temp == args.length)
                {
                    keyMessage.setTitle(keys[i].name);
                    keyMessage.setDescription('Therapist price: ' + keys[i].merchantPrice + '\nFlea Market price: ' + keys[i].marketPrice);
                    message.channel.send(keyMessage);
                }
            }
            else
            {
                break;
            }
        }
    }
};

exports.help = {
    name: 'key'
};