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
    {type: 'AP-20 Slug', dmg: '164', pen: '32 <- recommended option'}
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

c9x18.push(
    {type: 'SP8', dmg: '67', pen: '1'},
    {type: 'SP7', dmg: '77', pen: '2 <- budget option'},
    {type: 'PSV', dmg: '69', pen: '3'},
    {type: 'P gzh', dmg: '50', pen: '5'},
    {type: 'PSO gzh', dmg: '54', pen: '5'},
    {type: 'PS gs PPO', dmg: '55', pen: '6'},
    {type: 'PRS gs', dmg: '58', pen: '6'},
    {type: 'PPE gzh', dmg: '61', pen: '7'},
    {type: 'PPT gzh', dmg: '59', pen: '8'},
    {type: 'PST gzh', dmg: '50', pen: '12'},
    {type: 'RG028 gzh', dmg: '65', pen: '13'},
    {type: 'BZT gzh', dmg: '53', pen: '18'},
    {type: 'PMM', dmg: '58', pen: '24 <- recommended option'},
    {type: 'PBM', dmg: '40', pen: '28 <- recommended option'}
);

c762x25.push(
    {type: 'LRNPC', dmg: '66', pen: '5'},
    {type: 'LRN', dmg: '64', pen: '6'},
    {type: 'FMJ43', dmg: '60', pen: '8'},
    {type: 'akbs', dmg: '58', pen: '9'},
    {type: 'P Gl', dmg: '58', pen: '10'},
    {type: 'T Gzh (Tracer)', dmg: '60', pen: '12'},
    {type: 'Pst gzh', dmg: '50', pen: '24 <- recommended option'}
);

c9x19.push(
    {type: 'RIP', dmg: '102', pen: '2'},
    {type: 'PSO gzh', dmg: '59', pen: '10'},
    {type: 'Luger CCI', dmg: '70', pen: '10'},
    {type: 'Green Tracer', dmg: '58', pen: '14'},
    {type: 'PST gzh', dmg: '54', pen: '20 <- budget option'},
    {type: 'AP 6.3', dmg: '52', pen: '30 <- recommended option'}
);

c45.push(
    {type: 'RIP', dmg: '127', pen: '3'},
    {type: 'ACP', dmg: '72', pen: '19 <- recommended option'}
);

c9x21.push(
    {type: 'SP12', dmg: '80', pen: '15'},
    {type: 'SP11', dmg: '65', pen: '18'},
    {type: 'SP10', dmg: '49', pen: '35'},
    {type: 'SP13', dmg: '63', pen: '39'}
);

c57x28.push(
    {type: 'R37.F', dmg: '98', pen: '8'},
    {type: 'SS198LF', dmg: '74', pen: '10'},
    {type: 'R37.X', dmg: '81', pen: '11'},
    {type: 'SS197SR', dmg: '62', pen: '20'},
    {type: 'L191 (Tracer)', dmg: '58', pen: '33 <- budget option'},
    {type: 'SB193', dmg: '54', pen: '35 <- recommended option'},
    {type: 'SS190', dmg: '49', pen: '37'}
);

c46x30.push(
    {type: 'Action SX', dmg: '65', pen: '13'},
    {type: 'FMJ SX', dmg: '43', pen: '30'},
    {type: 'Subsonic SX', dmg: '41', pen: '34 <- budget option'},
    {type: 'AP SX', dmg: '35', pen: '47 <- recommended option'}
);

c9x39.push(
    {type: 'SP-5', dmg: '68', pen: '35'},
    {type: 'SP-6', dmg: '58', pen: '43 <- budget option'},
    {type: 'SPP', dmg: '64', pen: '45'},
    {type: 'BP', dmg: '60', pen: '48 <- recommended option'}
);

c366.push(
    {type: 'Geksa', dmg: '102', pen: '14'},
    {type: 'FMJ', dmg: '93', pen: '23'},
    {type: 'EKO', dmg: '68', pen: '30 <- recommeded option'}
);

c545x39.push(
    {type: 'SP', dmg: '68', pen: '11'},
    {type: 'HP', dmg: '74', pen: '11'},
    {type: 'PRS', dmg: '60', pen: '14'},
    {type: 'US', dmg: '65', pen: '15'},
    {type: 'FMJ', dmg: '54', pen: '20'},
    {type: 'T (Tracer)', dmg: '57', pen: '20'},
    {type: 'PS', dmg: '50', pen: '25'},
    {type: 'PP', dmg: '46', pen: '30'},
    {type: 'BP', dmg: '48', pen: '32'},
    {type: 'BT (Tracer)', dmg: '44', pen: '37 <- budget option'},
    {type: 'BS', dmg: '40', pen: '51 <- recommended option'},
    {type: '7N39 "Igolnik"', dmg: '37', pen: '62 <- recommended option'}
);

c762x39.push(
    {type: 'HP', dmg: '87', pen: '15'},
    {type: 'US', dmg: '56', pen: '29'},
    {type: 'T45M (Tracer)', dmg: '62', pen: '30'},
    {type: 'PS', dmg: '57', pen: '32 <- budget option'},
    {type: 'BP', dmg: '58', pen: '47 <- recommended option'}
);

//{type: '', dmg: '', pen: ''},

ammo['12 Gauge'] = c12g;
ammo['20 Gauge'] = c20g;
ammo['9x18mm'] = c9x18;
ammo['7,62x25mm'] = c762x25;
ammo['9x19mm'] = c9x19;
ammo['.45'] = c45;
ammo['9x21mm'] = c9x21;
ammo['5,7x28mm'] = c57x28;
ammo['4,6x30mm'] = c46x30;
ammo['9x39mm'] = c9x39;
ammo['.366'] = c366;
ammo['5,45x39mm'] = c545x39;

ammo['7,62x39mm'] = c762x39;

weapons.push(
    {id: 'toz-106 memgun toz106', name: 'TOZ-106', cal: '20 Gauge'},
    {id: 'op-sks', name: 'SKS/OP-SKS', cal: '7,62x39mm'},
    //ammo
    {id: '12 gauge shot slugs 12g', name: '12 Gauge', cal: '12 Gauge'},
    {id: '20 gauge shot slugs 20g', name: '20 Gauge', cal: '20 Gauge'},
    {id: '9x18mm 918mm', name: '9x18mm', cal: '9x18mm'},
    {id: '7,62x25mm 7.62x25mm 76225mm', name: '7,62x25mm', cal: '7,62x25mm'},
    {id: '9x19mm 919mm', name: '9x19mm', cal: '9x19mm'},
    {id: '.45', name: '.45', cal: '.45'},
    {id: '9x21mm 921mm', name: '9x21mm', cal: '9x21mm'},
    {id: '5,7x28mm 5.7x28mm 5728mm', name: '5,7x28mm', cal: '5,7x28mm'},
    {id: '4,6x30mm 4.6x30mm 4630mm', name: '4,6x30mm', cal: '4,6x30mm'},
    {id: '9x39mm 939mm', name: '9x39mm', cal: '9x39mm'},
    {id: '.366', name: '.366', cal: '.366'},
    {id: '5,45x39mm 5.45x39mm 54539mm', name: '5,45x39mm', cal: '5,45x39mm'},
    // {id: '', name: '', cal: ''},
    {id: '7,62x39mm 7.62x39mm 76239mm', name: '7,62x39mm', cal: '7,62x39mm'}
);

exports.run = (bot, message, args) => {
    var temp, txt, count = 0, ammoTxt = '', tempArray;

    if(args[0] == 'list')
    {
        ammoMessage.setTitle('Ammo List');
        for(var l = 0; l < ammo.length; l++)
        {
            ammoTxt += ammo[l] + '\n';
        }
        ammoMessage.setDescription(ammoTxt);
    }
    else
    {
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
    }
};

exports.help = {
    name: 'ammo'
};