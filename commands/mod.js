const Discord = require('discord.js');

const mod = new Array();
const modMessage = new Discord.MessageEmbed()
    .setColor('#ffbf00');

mod.push(
    //12g
    {id: 'm870', name: 'M870', recoil: 'https://i.imgur.com/YdT5n1b.png', ergo: 'https://i.imgur.com/GpkK80x.png'},
    {id: 'mp-133 mp133', name: 'MP-133', recoil: 'https://i.imgur.com/ugKBpV5.png', ergo: 'https://i.imgur.com/qAPepDV.png'},
    {id: 'mp-153 mp153', name: 'MP-153', recoil: 'https://i.imgur.com/Vik8EBI.png', ergo: 'https://i.imgur.com/zAEw2WZ.png'},
    {id: 'saiga-12 saiga12', name: 'Saiga-12', recoil: 'https://i.imgur.com/mNg6OSw.png', ergo: null},
    //20g
    {id: 'toz-106 memgun toz106', name: 'TOZ-106', recoil: '', ergo: ''},
    //4.6x30
    {id: 'mp7a1 mp7a2', name: 'MP7A1/MP7A2', recoil: '', ergo: ''},
    //.366
    {id: 'veprakm/vpo-209 vpo209', name: 'Vepr AKM/VPO-209', recoil: '', ergo: ''},
    {id: 'vpo-215 vpo215', name: 'VPO-215', recoil: '', ergo: ''},
    //5.45x39
    {id: 'ak-74n ak-74m ak74m ak74n', name: 'AK-74/AK-74N/AK-74M', recoil: '', ergo: ''},
    {id: 'aks-74n aks-74un aks-74ub aks74n aks74un aks74ub', name: 'AKS-74(N)/AKS-74U(N/B)', recoil: '', ergo: ''},
    {id: 'ak-105 ak105', name: 'AK-105', recoil: '', ergo: ''},
    {id: 'rpk-16 rpk16', name: 'RPK-16', recoil: '', ergo: ''},
    //5.56x45
    {id: 'ak-101 ak101', name: 'AK-101', recoil: '', ergo: ''},
    {id: 'ak-102 ak102', name: 'AK-102', recoil: '', ergo: ''},
    {id: 'hk416a5', name: 'HK 416A5', recoil: '', ergo: ''},
    {id: 'dtmdr', name: 'DT MDR', recoil: '', ergo: ''},
    {id: 'm4a1', name: 'M4A1', recoil: '', ergo: ''},
    {id: 'adar2-15', name: 'ADAR 2-15', recoil: '', ergo: ''},
    {id: 'lonestartx-15 tx15', name: 'Lone Star TX-15', recoil: '', ergo: ''},
    //7.62x25
    {id: 'tt', name: 'TT', recoil: '', ergo: ''},
    {id: 'ppsh-41 ppsh41 pepesza ppsz', name: 'PPSH-41', recoil: '', ergo: ''},
    //7.62x39
    {id: 'ak-103 ak103', name: 'AK-103', recoil: '', ergo: ''},
    {id: 'ak-104 ak104', name: 'AK-104', recoil: '', ergo: ''},
    {id: 'akmn akmsn', name: 'AKM(N)/AKMS(N)', recoil: '', ergo: ''},
    {id: 'veprkm/vpo-136 vpo136', name: 'Vepr KM/VPO-136', recoil: '', ergo: ''},
    {id: 'op-sks', name: 'SKS/OP-SKS', recoil: '', ergo: ''},
    //7.62x51
    {id: 'sa-58 sa58 fnfal', name: 'SA-58', recoil: '', ergo: ''},
    {id: 'veprhunter vpo101 vpo-101', name: 'Vepr Hunter/VPO-101', recoil: '', ergo: ''},
    {id: 'm1a mia', name: 'M1A', recoil: '', ergo: ''},
    {id: 'remingtonr11 rsass', name: 'Remington R11 RSASS', recoil: '', ergo: ''},
    {id: 'dvl-10 dvl10', name: 'DVL-10', recoil: '', ergo: ''},
    {id: 'm700', name: 'M700', recoil: '', ergo: ''},
    {id: 'dtmdr', name: 'DT MDR', recoil: '', ergo: ''},
    {id: 'sr-25 sr25', name: 'SR-25', recoil: '', ergo: ''},
    {id: 'orsist-5000 t5000', name: 'Orsis T-5000', recoil: '', ergo: ''},
    //7.62x54r
    {id: 'mosinboltactioninfantryrifle mosinboltactionsniperrifle', name: 'Mosin', recoil: '', ergo: ''},
    {id: 'svds', name: 'SVDS', recoil: '', ergo: ''},
    {id: 'sv-98 sv98', name: 'SV-98', recoil: '', ergo: ''},
    //9x18
    {id: 'pp-9klin pp9klin pp-91kedr pp-91-01Kedr-B pp9101kedrb', name: 'PP-9 Klin/PP-91 Kedr', recoil: '', ergo: ''},
    {id: 'pb', name: 'PB', recoil: '', ergo: ''},
    {id: 'aps apb', name: 'APS/APB', recoil: '', ergo: ''},
    {id: 'pm makarov', name: 'PM', recoil: '', ergo: ''},
    //9x19
    {id: 'mp5kurz', name: 'MP5/MP5 Kurz', recoil: '', ergo: ''},
    {id: 'mpx', name: 'MPX', recoil: '', ergo: ''},
    {id: 'pp-19-01vityaz-sn pp-19vityaz-sn pp1901vityazsn', name: 'PP-19-01 Vityaz-SN', recoil: '', ergo: ''},
    {id: 'saiga-9 saiga9', name: 'Saiga-9', recoil: '', ergo: ''},
    {id: 'glock17 glock18c', name: 'Glock 17/Glock 18C', recoil: '', ergo: ''},
    {id: 'mp-443grach mp443grach', name: 'MP-443 Grach', recoil: '', ergo: ''},
    {id: 'p226r', name: 'P226R', recoil: '', ergo: ''},
    {id: 'm9a3', name: 'M9A3', recoil: '', ergo: ''},
    {id: 'mp9', name: 'MP9', recoil: '', ergo: ''},
    //9x21
    {id: 'sr-1mpgyurza sr1mpgyurza srimp', name: 'SR-1MP Gyurza', recoil: '', ergo: ''},
    //9x39
    {id: 'asval', name: 'AS VAL', recoil: '', ergo: ''},
    {id: 'vssvintorez', name: 'VSS Vintorez', recoil: '', ergo: ''},
    //12.7x55
    {id: 'ash-12 ash12', name: 'ASh-12', recoil: '', ergo: ''},
    //5.7x28
    {id: 'fnp90', name: 'FN P90', recoil: '', ergo: ''},
    {id: 'fn57 fn5-7 fnfiveseven fnfive-seven', name: 'FN Five-seveN', recoil: '', ergo: ''},
    //.45
    {id: 'coltm1911a1', name: 'M1911A1', recoil: '', ergo: ''},
);

exports.run = (bot, message, args) => {
    var temp, txt, count = 0;
    for(var i = 0; i < mod.length; i++)
    {
        temp = 0;
        for(var j = 0; j < args.length; j++)
        {
            txt = args[j].toLowerCase();
            if(mod[i].id.includes(txt))
            {
                temp++;
                if(temp == args.length)
                {
                    modMessage.setTitle(mod[i].name);
                    modMessage.setDescription('Recoil build:');
                    modMessage.setImage(mod[i].recoil);
                    message.channel.send(modMessage);
                    if(mod[i].ergo != null)
                    {
                        modMessage.setDescription('Ergo build:');
                        modMessage.setImage(mod[i].ergo);
                        message.channel.send(modMessage);
                    }
                    count++;
                }

                if(count >= 3)
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
    name: 'mod'
};