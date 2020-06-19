const Discord = require('discord.js');

const weapons = new Array();
const ammo = new Array();
const c762x39 = new Array();
const ammoMessage = new Discord.MessageEmbed()
    .setColor('#ffbf00')
    .setFooter('1 armor class = 10 penetration points');

c762x39.push(
    {type: 'HP', dmg: '87', pen: '15'},
    {type: 'US', dmg: '56', pen: '29'},
    {type: 'T45M (Tracer)', dmg: '62', pen: '30'},
    {type: 'PS', dmg: '57', pen: '32 <- budget option'},
    {type: 'BP', dmg: '58', pen: '47 <- recommended option'}
);

ammo['7,62x39mm'] = c762x39;

weapons.push(
    {id: 'op-sks', name: 'SKS/OP-SKS', cal: '7,62x39mm'},
    {id: '7,62x39mm 762', name: '7,62x39mm', cal: '7,62x39mm'}
);

exports.run = (bot, message, args) => {
    var temp, txt, count = 0, ammoTxt, tempArray;
    for(var i = 0; i < weapons.length; i++)
    {
        temp = 0;
        ammoTxt = '';
        tempArray = new Array();
        for(var j = 0; j < args.length; j++)
        {
            txt = args[j].toLowerCase();
            if(weapons[i].id.includes(txt))
            {
                temp++;
                if(temp == args.length)
                {
                    ammoMessage.setTitle(weapons[i].name + ' - ' + weapons[i].cal);
                    tempArray = ammo[weapons[i].cal];
                    for(var k = 0; k < tempArray.length; k++)
                    {
                        ammoTxt += tempArray[k].type + ' - Damage: ' + tempArray[k].dmg + ' - Penetration: ' + tempArray[k].pen + '\n';
                    }
                    ammoMessage.setDescription(ammoTxt);
                    message.channel.send(ammoMessage);
                    count++;
                }

                if(count >= 5)
                {
                    return;
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
    name: 'ammo'
};