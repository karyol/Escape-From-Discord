const Discord = require('discord.js');

const weapons = new Array();
const ammo = new Array();
const c12g = new Array();
const c20g = new Array();
const c9x18 = new Array();
const c762x25 = new Array();
const c9x19 = new Array();
const c45 = new Array();
const c9x21 = new Array();
const c57x28 = new Array();
const c46x30 = new Array();
const c9x39 = new Array();
const c366 = new Array();
const c545x39 = new Array();
const c556x45 = new Array();
const c762x39 = new Array();
const c762x51 = new Array();
const c762x54r = new Array();
const c127x55 = new Array();
const ammoMessage = new Discord.MessageEmbed()
    .setColor('#ffbf00')
    .setFooter('1 armor class = 10 penetration points');

//{type: '', dmg: '', pen: ''},

c12g.push(
    {type: '5.25mm Buckshot', dmg: '34', pen: '1'},
    {type: '8.5mm Buckshot "Magnum"', dmg: '44', pen: '2 <- budget option'},
    {type: '6.5mm Buckshot "Express', dmg: '29', pen: '3'},
    {type: '7mm Buckshot', dmg: '32', pen: '3'},
    {type: 'Flechette', dmg: '19', pen: '28'},
    {type: '\nRIP Slug', dmg: '235', pen: '0'},
    {type: 'Superformance HP Slug', dmg: '190', pen: '2'},
    {type: 'Grizzly 40 Slug', dmg: '170', pen: '12'},
    {type: 'HP Copper Sabot Premier', dmg: '160', pen: '13'},
    {type: 'Led Slug', dmg: '147', pen: '15'},
    {type: 'Dual Sabot Slug', dmg: '75', pen: '17'},
    {type: 'Slug "Poleva-3"', dmg: '130', pen: '17'},
    {type: 'FTX Custom Lite Slug', dmg: '153', pen: '18'},
    {type: 'Slug "Poleva-6u"', dmg: '140', pen: '20'},
    {type: 'Shell With .50 BMG (Tracer)', dmg: '177', pen: '23'},
    {type: 'AP 20 Slug', dmg: '164', pen: '32 <- recommended option'}
);

c20g.push(
    {type: '5.6mm Buckshot', dmg: '25', pen: '1 <- budget option'},
    {type: '6.2mm Buckshot', dmg: '21', pen: '2'},
    {type: '7.5mm Buckshot', dmg: '24', pen: '3'},
    {type: '7.3mm Buckshot', dmg: '22', pen: '3'},
    {type: '\nDevastator Slug', dmg: '188', pen: '4'},
    {type: 'Slug "Poleva-3"', dmg: '110', pen: '14'},
    {type: 'Star Slug', dmg: '134', pen: '16'},
    {type: 'Slug "Poleva-6u"', dmg: '120', pen: '17 <- recommended option'}
);

c762x39.push(
    {type: 'HP', dmg: '87', pen: '15'},
    {type: 'US', dmg: '56', pen: '29'},
    {type: 'T45M (Tracer)', dmg: '62', pen: '30'},
    {type: 'PS', dmg: '57', pen: '32 <- budget option'},
    {type: 'BP', dmg: '58', pen: '47 <- recommended option'}
);

ammo['12 Gauge'] = c12g;
ammo['20 Gaouge'] = c20g;
ammo['7,62x39mm'] = c762x39;

weapons.push(
    {id: 'toz-106 mem gun', name: 'TOZ-106', cal: '20 Gauge'},
    {id: 'op-sks', name: 'SKS/OP-SKS', cal: '7,62x39mm'},
    {id: '12 gauge shot slugs 12g', name: '12 Gauge', cal: '12 Gauge'},
    {id: '20 gauge shot slugs 20g', name: '20 Gauge', cal: '20 Gauge'},
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