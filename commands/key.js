const Discord = require('discord.js');

const keys = new Array();
const keyMessage = new Discord.MessageEmbed()
    .setColor('#f00');

keys.push(
    {name: 'RB-BK', merchantPrice: '75,000₽', marketPrice: '75,000₽'}
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