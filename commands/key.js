const Discord = require('discord.js');

const keys = new Array();
const keyMessage = new Discord.MessageEmbed()
    .setColor('#f34336')
    .setFooter('Market price may not be 100% accurate.');

keys.push(
    {id: 'rb-bk key', name: 'RB-BK key', merchantPrice: '75,000', marketPrice: '75,000', map: 'Reserve'},
    {id: 'rb-vo key', name: 'RB-VO key', merchantPrice: '75,000', marketPrice: '79,500', map: 'Reserve'},
    {id: 'rb-ak key', name: 'RB-AK key', merchantPrice: '54,750', marketPrice: '200,000', map: 'Reserve'},
    {id: 'west wing room 205 key', name: 'West wing room 205 key', merchantPrice: '37,125', marketPrice: '675,000', map: 'Shoreline'},
    {id: 'east wing room 205 key', name: 'East wing room 205 key', merchantPrice: '138,750', marketPrice: '150,000', map: 'Shoreline'}
);

//{id: '', name: '', merchantPrice: '', marketPrice: '', map: ''},

exports.run = (bot, message, args) => {
    var temp, txt;
    for(var i = 0; i < keys.length; i++)
    {
        temp = 0;
        for(var j = 0; j < args.length; j++)
        {
            txt = args[j].toLowerCase();
            if(keys[i].id.includes(txt))
            {
                temp++;
                if(temp == args.length)
                {
                    keyMessage.setTitle(keys[i].name);
                    keyMessage.setDescription(
                        'Therapist price: ' + keys[i].merchantPrice + '₽' + 
                        '\nFlea Market price: ' + keys[i].marketPrice + '₽' + 
                        '\nMap: ' + keys[i].map);
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