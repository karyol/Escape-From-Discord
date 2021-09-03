const Discord = require('discord.js');

const weapons = new Array();
const ammo = new Array();
const c12g = new Array();
const c20g = new Array();
const c23g = new Array();
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
    {type: '5.25mm Buckshot', dmg: '37', pen: '1'},
    {type: '8.5mm Buckshot "Magnum"', dmg: '50', pen: '2 <- budget option'},
    {type: '6.5mm Buckshot "Express', dmg: '35', pen: '3'},
    {type: '7mm Buckshot', dmg: '39', pen: '3'},
    {type: 'Flechette', dmg: '25', pen: '31'},
    {type: '\nRIP Slug', dmg: '265', pen: '0'},
    {type: 'Superformance HP Slug', dmg: '220', pen: '2'},
    {type: 'Grizzly 40 Slug', dmg: '190', pen: '12'},
    {type: 'HP Copper Sabot Premier', dmg: '206', pen: '14'},
    {type: 'Led Slug', dmg: '167', pen: '15'},
    {type: 'Dual Sabot Slug', dmg: '85', pen: '17'},
    {type: 'Slug "Poleva-3"', dmg: '140', pen: '17'},
    {type: 'FTX Custom Lite Slug', dmg: '183', pen: '20'},
    {type: 'Slug "Poleva-6u"', dmg: '150', pen: '20'},
    {type: 'Shell With .50 BMG (Tracer)', dmg: '197', pen: '26'},
    {type: 'AP-20 Slug', dmg: '164', pen: '37 <- recommended option'}
);

c20g.push(
    {type: '5.6mm Buckshot', dmg: '26', pen: '1 <- budget option'},
    {type: '6.2mm Buckshot', dmg: '22', pen: '2'},
    {type: '7.5mm Buckshot', dmg: '25', pen: '3'},
    {type: '7.3mm Buckshot', dmg: '23', pen: '3'},
    {type: '\nDevastator Slug', dmg: '198', pen: '5'},
    {type: 'Slug "Poleva-3"', dmg: '120', pen: '14'},
    {type: 'Star Slug', dmg: '154', pen: '16'},
    {type: 'Slug "Poleva-6u"', dmg: '135', pen: '17 <- recommended option'}
);

c23g.push(
    {type: '"Star" Flashbang Slug', dmg: '0', pen: '0'},
    {type: 'Sharpnel 25', dmg: '78', pen: '10'},
    {type: 'Sharpnel 10', dmg: '87', pen: '11'},
    {type: '"Barricade" Slug', dmg: '192', pen: '39 <- recommended option'}
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
    {type: 'LRNPC', dmg: '66', pen: '7'},
    {type: 'LRN', dmg: '64', pen: '8'},
    {type: 'FMJ43', dmg: '60', pen: '11'},
    {type: 'akbs', dmg: '58', pen: '12'},
    {type: 'P Gl', dmg: '58', pen: '14'},
    {type: 'T Gzh (Tracer)', dmg: '60', pen: '18'},
    {type: 'Pst gzh', dmg: '50', pen: '25 <- recommended option'}
);

c9x19.push(
    {type: 'RIP', dmg: '102', pen: '2'},
    {type: 'QuakeMaker', dmg: '85', pen: '8'},
    {type: 'PSO gzh', dmg: '59', pen: '10'},
    {type: 'Luger CCI', dmg: '70', pen: '10'},
    {type: 'Green Tracer (Tracer)', dmg: '58', pen: '14'},
    {type: 'PST gzh', dmg: '54', pen: '20 <- budget option'},
    {type: 'AP 6.3', dmg: '52', pen: '30 '},
    {type: '7n31', dmg: '52', pen: '39 <- recommended option'}
);

c45.push(
    {type: 'RIP', dmg: '127', pen: '3'},
    {type: 'Hydra-Shock', dmg: '95', pen: '13'},
    {type: 'Lasermatch FMJ (Tracer)', dmg: '74', pen: '18'},
    {type: 'ACP', dmg: '72', pen: '19'},
    {type: 'ACP AP', dmg: '70', pen: '36 <- recommended option'}
);

c9x21.push(
    {type: 'SP12', dmg: '80', pen: '15'},
    {type: 'SP11', dmg: '65', pen: '18'},
    {type: 'SP10', dmg: '49', pen: '35'},
    {type: 'SP13', dmg: '63', pen: '39 <- recommended option'}
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
    {type: 'Subsonic SX', dmg: '45', pen: '36'},
    {type: 'FMJ SX', dmg: '43', pen: '40 <- budget option'},
    {type: 'AP SX', dmg: '35', pen: '53 <- recommended option'}
);

c9x39.push(
    {type: 'SP-5', dmg: '68', pen: '35'},
    {type: 'SP-6', dmg: '58', pen: '43 <- budget option'},
    {type: 'SPP', dmg: '64', pen: '45'},
    {type: 'BP', dmg: '60', pen: '48 <- recommended option'}
);

c366.push(
    {type: 'Geksa', dmg: '110', pen: '14'},
    {type: 'FMJ', dmg: '98', pen: '23'},
    {type: 'EKO', dmg: '73', pen: '30 <- budget option'},
    {type: 'AP', dmg: '90', pen: '42 <- recommended option'}
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

c556x45.push(
    {type: 'Warmage', dmg: '85', pen: '3'},
    {type: '55 HP', dmg: '75', pen: '9'},
    {type: 'MK 255 Mod 0', dmg: '60', pen: '17'},
    {type: 'M856 (Tracer)', dmg: '55', pen: '23'},
    {type: 'FMJ', dmg: '52', pen: '24'},
    {type: 'M855', dmg: '50', pen: '30'},
    {type: 'M856A1 (Tracer)', dmg: '51', pen: '37 <- budget option'},
    {type: 'M855A1', dmg: '45', pen: '43 <- budget option'},
    {type: 'M995', dmg: '40', pen: '53 <-recommended option'}
);

c762x39.push(
    {type: 'HP', dmg: '87', pen: '15'},
    {type: 'US', dmg: '56', pen: '29'},
    {type: 'T45M (Tracer)', dmg: '62', pen: '30'},
    {type: 'PS', dmg: '57', pen: '32 <- budget option'},
    {type: 'BP', dmg: '58', pen: '47 <- recommended option'}
);

c762x51.push(
    {type: 'Ultra Nosler', dmg: '102', pen: '15'},
    {type: 'BPZ FMJ', dmg: '88', pen: '31'},
    {type: 'TPZ SP', dmg: '60', pen: '36'},
    {type: 'M80', dmg: '80', pen: '41'},
    {type: 'M62 (Tracer)', dmg: '79', pen: '54 <- budget option'},
    {type: 'M61', dmg: '70', pen: '68 <- recommended option'},
    {type: 'M993', dmg: '67', pen: '70 <- recommended option'}
);

c762x54r.push(
    {type: 'T-46M (Tracer)', dmg: '82', pen: '41'},
    {type: 'LPS Gzh', dmg: '81', pen: '42 <- budget option'},
    {type: '7N1', dmg: '86', pen: '45 <- recommended option'},
    {type: '7BT1 (Tracer)', dmg: '78', pen: '59'},
    {type: 'SNB', dmg: '75', pen: '62'},
    {type: '7n37', dmg: '72', pen: '70'}
);

c127x55.push(
    {type: 'PS12A', dmg: '165', pen: '10'},
    {type: 'PS12', dmg: '115', pen: '28'},
    {type: 'PS12B', dmg: '102', pen: '46 <- recommended option'}
);

//{type: '', dmg: '', pen: ''},

ammo['12 Gauge'] = c12g;
ammo['20 Gauge'] = c20g;
ammo['23 Gauge'] = c23g;
ammo['9x18mm'] = c9x18;
ammo['7.62x25mm'] = c762x25;
ammo['9x19mm'] = c9x19;
ammo['.45'] = c45;
ammo['9x21mm'] = c9x21;
ammo['5.7x28mm'] = c57x28;
ammo['4.6x30mm'] = c46x30;
ammo['9x39mm'] = c9x39;
ammo['.366'] = c366;
ammo['5.45x39mm'] = c545x39;
ammo['5.56x45mm'] = c556x45;
ammo['7.62x39mm'] = c762x39;
ammo['7.62x51mm'] = c762x51;
ammo['7.62x54R'] = c762x54r;
ammo['12.7x55mm'] = c127x55;

weapons.push(
    //12g
    {id: 'm870', name: 'M870', cal: '12 Gauge'},
    {id: 'mossberg590a1', name: 'Mossberg 590A1', cal: '12 Gauge'},
    {id: 'mp-133 mp133', name: 'MP-133', cal: '12 Gauge'},
    {id: 'mp-153 mp153', name: 'MP-153', cal: '12 Gauge'},
    {id: 'saiga-12 saiga12', name: 'Saiga-12', cal: '12 Gauge'},
    //20g
    {id: 'toz-106 memgun toz106', name: 'TOZ-106', cal: '20 Gauge'},
    //23g
    {id: 'tozks-23m tozks23m', name: 'TOZ KS-23M', cal: '23 Gauge'},
    //4.6x30
    {id: 'mp7a1 mp7a2', name: 'MP7A1/MP7A2', cal: '4.6x30mm'},
    //.366
    {id: 'veprakm/vpo-209 vpo209', name: 'Vepr AKM/VPO-209', cal: '.366'},
    {id: 'vpo-215 vpo215', name: 'VPO-215', cal: '.366'},
    //5.45x39
    {id: 'ak-74n ak-74m ak74m ak74n', name: 'AK-74/AK-74N/AK-74M', cal: '5.45x39mm'},
    {id: 'aks-74n aks-74un aks-74ub aks74n aks74un aks74ub', name: 'AKS-74(N)/AKS-74U(N/B)', cal: '5.45x39mm'},
    {id: 'ak-105 ak105', name: 'AK-105', cal: '5.45x39mm'},
    {id: 'rpk-16 rpk16', name: 'RPK-16', cal: '5.45x39mm'},
    //5.56x45
    {id: 'ak-101 ak101', name: 'AK-101', cal: '5.56x45mm'},
    {id: 'ak-102 ak102', name: 'AK-102', cal: '5.56x45mm'},
    {id: 'hk416a5', name: 'HK 416A5', cal: '5.56x45mm'},
    {id: 'dtmdr', name: 'DT MDR', cal: '5.56x45mm'},
    {id: 'm4a1', name: 'M4A1', cal: '5.56x45mm'},
    {id: 'adar2-15', name: 'ADAR 2-15', cal: '5.56x45mm'},
    {id: 'lonestartx-15 tx15', name: 'Lone Star TX-15', cal: '5.56x45mm'},
    //7.62x25
    {id: 'tt', name: 'TT', cal: '7.62x25mm'},
    {id: 'ppsh-41 ppsh41 pepesza ppsz', name: 'PPSH-41', cal: '7.62x25mm'},
    //7.62x39
    {id: 'ak-103 ak103', name: 'AK-103', cal: '7.62x39mm'},
    {id: 'ak-104 ak104', name: 'AK-104', cal: '7.62x39mm'},
    {id: 'akmn akmsn', name: 'AKM(N)/AKMS(N)', cal: '7.62x39mm'},
    {id: 'veprkm/vpo-136 vpo136', name: 'Vepr KM/VPO-136', cal: '7.62x39mm'},
    {id: 'op-sks', name: 'SKS/OP-SKS', cal: '7.62x39mm'},
    //7.62x51
    {id: 'sa-58 sa58 fnfal', name: 'SA-58', cal: '7.62x51mm'},
    {id: 'veprhunter vpo101 vpo-101', name: 'Vepr Hunter/VPO-101', cal: '7.62x51mm'},
    {id: 'm1a mia', name: 'M1A', cal: '7.62x51mm'},
    {id: 'remingtonr11 rsass', name: 'Remington R11 RSASS', cal: '7.62x51mm'},
    {id: 'dvl-10 dvl10', name: 'DVL-10', cal: '7.62x51mm'},
    {id: 'm700', name: 'M700', cal: '7.62x51mm'},
    {id: 'dtmdr', name: 'DT MDR', cal: '7.62x51mm'},
    {id: 'sr-25 sr25', name: 'SR-25', cal: '7.62x51mm'},
    {id: 'orsist-5000 t5000', name: 'Orsis T-5000', cal: '7.62x51mm'},
    {id: 'kel-tecrfb keltecrfb', name: 'Kel-Tec RFB', cal: '7.62x51mm'},
    //7.62x54r
    {id: 'mosinboltactioninfantryrifle mosinboltactionsniperrifle', name: 'Mosin', cal: '7.62x54R'},
    {id: 'svds', name: 'SVDS', cal: '7.62x54R'},
    {id: 'sv-98 sv98', name: 'SV-98', cal: '7.62x54R'},
    //9x18
    {id: 'pp-9klin pp9klin pp-91kedr pp-91-01Kedr-B pp9101kedrb', name: 'PP-9 Klin/PP-91 Kedr', cal: '9x18mm'},
    {id: 'pb', name: 'PB', cal: '9x18mm'},
    {id: 'aps apb', name: 'APS/APB', cal: '9x18mm'},
    {id: 'pm makarov', name: 'PM', cal: '9x18mm'},
    //9x19
    {id: 'mp5kurz', name: 'MP5/MP5 Kurz', cal: '9x19mm'},
    {id: 'mpx', name: 'MPX', cal: '9x19mm'},
    {id: 'pp-19-01vityaz-sn pp-19vityaz-sn pp1901vityazsn', name: 'PP-19-01 Vityaz-SN', cal: '9x19mm'},
    {id: 'saiga-9 saiga9', name: 'Saiga-9', cal: '9x19mm'},
    {id: 'glock17 glock18c', name: 'Glock 17/Glock 18C', cal: '9x19mm'},
    {id: 'mp-443grach mp443grach', name: 'MP-443 Grach', cal: '9x19mm'},
    {id: 'p226r', name: 'P226R', cal: '9x19mm'},
    {id: 'm9a3', name: 'M9A3', cal: '9x19mm'},
    {id: 'mp9', name: 'MP9', cal: '9x19mm'},
    //9x21
    {id: 'sr-1mpgyurza sr1mpgyurza srimp', name: 'SR-1MP Gyurza', cal: '9x21mm'},
    //9x39
    {id: 'asval', name: 'AS VAL', cal: '9x39mm'},
    {id: 'vssvintorez', name: 'VSS Vintorez', cal: '9x39mm'},
    //12.7x55
    {id: 'ash-12 ash12', name: 'ASh-12', cal: '12.7x55mm'},
    //5.7x28
    {id: 'fnp90', name: 'FN P90', cal: '5.7x28mm'},
    {id: 'fn57 fn5-7 fnfiveseven fnfive-seven', name: 'FN Five-seveN', cal: '5.7x28mm'},
    //.45
    {id: 'coltm1911a1', name: 'Colt M1911A1', cal: '.45'},
    {id: 'coltm45a1', name: 'Colt M45A1', cal: '.45'},
    // {id: '', name: '', cal: ''},
    //ammo
    {id: '12gauge shot slugs 12g', name: '12 Gauge', cal: '12 Gauge'},
    {id: '20gauge shot slugs 20g', name: '20 Gauge', cal: '20 Gauge'},
    {id: '23gauge shot slugs 23g', name: '23 Gauge', cal: '23 Gauge'},
    {id: '9x18mm 918mm', name: '9x18mm', cal: '9x18mm'},
    {id: '7,62x25mm 7.62x25mm 76225mm', name: '7.62x25mm', cal: '7.62x25mm'},
    {id: '9x19mm 919mm', name: '9x19mm', cal: '9x19mm'},
    {id: '.45', name: '.45', cal: '.45'},
    {id: '9x21mm 921mm', name: '9x21mm', cal: '9x21mm'},
    {id: '5,7x28mm 5.7x28mm 5728mm', name: '5.7x28mm', cal: '5.7x28mm'},
    {id: '4,6x30mm 4.6x30mm 4630mm', name: '4.6x30mm', cal: '4.6x30mm'},
    {id: '9x39mm 939mm', name: '9x39mm', cal: '9x39mm'},
    {id: '.366', name: '.366', cal: '.366'},
    {id: '5,45x39mm 5.45x39mm 54539mm', name: '5.45x39mm', cal: '5.45x39mm'},
    {id: '5,56x45mm 5.56x45mm 55645mm', name: '5.56x45mm', cal: '5.56x45mm'},
    {id: '7,62x39mm 7.62x39mm 76239mm', name: '7.62x39mm', cal: '7.62x39mm'},
    {id: '7,62x51mm 7.62x51mm 76251mm', name: '7.62x51mm', cal: '7.62x51mm'},
    {id: '7,62x54R 7.62x54R 76254R', name: '7.62x54R', cal: '7.62x54R'},
    {id: '12,7x55mm 12.7x55mm 12755mm', name: '12.7x55mm', cal: '12.7x55mm'}
);

exports.run = (bot, message, args) => {
    var temp, txt, count = 0, ammoTxt, tempArray;
    
    ammoMessage.setTitle("Results count: " + args.length);
    message.channel.send(ammoMessage);
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
                    // message.channel.send(ammoMessage);
                    count++;
                }

                if(count >= 4)
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