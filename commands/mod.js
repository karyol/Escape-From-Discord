const Discord = require('discord.js');

const mod = new Array();
const modMessage = new Discord.MessageEmbed()
    .setColor('#ffbf00');

mod.push(
    //12g
    {id: 'm870', name: 'M870', recoil: 'https://i.imgur.com/YdT5n1b.png', ergo: 'https://i.imgur.com/GpkK80x.png', supp: 'SilencerCo Salvo 12 + SilencerCo choke adapter'},
    {id: 'mp-133 mp133', name: 'MP-133', recoil: 'https://i.imgur.com/ugKBpV5.png', ergo: 'https://i.imgur.com/qAPepDV.png', supp: 'SilencerCo Salvo 12 + SilencerCo choke adapter'},
    {id: 'mp-153 mp153', name: 'MP-153', recoil: 'https://i.imgur.com/Vik8EBI.png', ergo: 'https://i.imgur.com/zAEw2WZ.png', supp: 'SilencerCo Salvo 12 + SilencerCo choke adapter'},
    {id: 'saiga-12 saiga12', name: 'Saiga-12', recoil: 'https://i.imgur.com/mNg6OSw.png', ergo: null, supp: 'SilencerCo Salvo 12 + SilencerCo Salvo 12 thread adapter'},
    //20g
    {id: 'toz-106 memgun toz106', name: 'TOZ-106', recoil: 'https://i.imgur.com/cMpV72k.png', ergo: null, supp: 'none'},
    //4.6x30
    {id: 'mp7a1', name: 'MP7A1', recoil: 'https://i.imgur.com/aXzb2gE.png', ergo: null, supp: 'B&T Rotex 2 4.6x30 silencer'},
    {id: 'mp7a2', name: 'MP7A2', recoil: 'https://i.imgur.com/KaKQAjA.png', ergo: null, supp: 'B&T Rotex 2 4.6x30 silencer'},
    //.366
    {id: 'veprakm/vpo-209 vpo209', name: 'Vepr AKM/VPO-209', recoil: 'https://i.imgur.com/qBsiHYv.png', ergo: 'https://i.imgur.com/agaiuVq.png', supp: 'Rotor 43 .366TKM Muzzle Brake'},
    {id: 'vpo-215 vpo215', name: 'VPO-215', recoil: null, ergo: null, supp: 'Rotor 43 .366TKM Muzzle Brake'},
    //5.45x39
    {id: 'ak-74n ak-74m ak74m ak74n', name: 'AK-74/AK-74N/AK-74M', recoil: '', ergo: '', supp: ''},
    {id: 'aks-74n aks-74un aks-74ub aks74n aks74un aks74ub', name: 'AKS-74(N)/AKS-74U(N/B)', recoil: '', ergo: '', supp: ''},
    {id: 'ak-105 ak105', name: 'AK-105', recoil: '', ergo: '', supp: ''},
    {id: 'rpk-16 rpk16', name: 'RPK-16', recoil: '', ergo: '', supp: ''},
    //5.56x45
    {id: 'ak-101 ak101', name: 'AK-101', recoil: '', ergo: '', supp: ''},
    {id: 'ak-102 ak102', name: 'AK-102', recoil: '', ergo: '', supp: ''},
    {id: 'hk416a5', name: 'HK 416A5', recoil: '', ergo: '', supp: ''},
    {id: 'dtmdr', name: 'DT MDR', recoil: '', ergo: '', supp: ''},
    {id: 'm4a1', name: 'M4A1', recoil: '', ergo: '', supp: ''},
    {id: 'adar2-15', name: 'ADAR 2-15', recoil: '', ergo: '', supp: ''},
    {id: 'lonestartx-15 tx15', name: 'Lone Star TX-15', recoil: '', ergo: '', supp: ''},
    //7.62x25
    {id: 'tt', name: 'TT', recoil: '', ergo: '', supp: ''},
    {id: 'ppsh-41 ppsh41 pepesza ppsz', name: 'PPSH-41', recoil: '', ergo: '', supp: ''},
    //7.62x39
    {id: 'ak-103 ak103', name: 'AK-103', recoil: '', ergo: '', supp: ''},
    {id: 'ak-104 ak104', name: 'AK-104', recoil: '', ergo: '', supp: ''},
    {id: 'akmn akmsn', name: 'AKM(N)/AKMS(N)', recoil: '', ergo: '', supp: ''},
    {id: 'veprkm/vpo-136 vpo136', name: 'Vepr KM/VPO-136', recoil: '', ergo: '', supp: ''},
    {id: 'op-sks', name: 'SKS/OP-SKS', recoil: '', ergo: '', supp: ''},
    //7.62x51
    {id: 'sa-58 sa58 fnfal', name: 'SA-58', recoil: '', ergo: '', supp: ''},
    {id: 'veprhunter vpo101 vpo-101', name: 'Vepr Hunter/VPO-101', recoil: '', ergo: '', supp: ''},
    {id: 'm1a mia', name: 'M1A', recoil: '', ergo: '', supp: ''},
    {id: 'remingtonr11 rsass', name: 'Remington R11 RSASS', recoil: '', ergo: '', supp: ''},
    {id: 'dvl-10 dvl10', name: 'DVL-10', recoil: '', ergo: '', supp: ''},
    {id: 'm700', name: 'M700', recoil: '', ergo: '', supp: ''},
    {id: 'dtmdr', name: 'DT MDR', recoil: '', ergo: '', supp: ''},
    {id: 'sr-25 sr25', name: 'SR-25', recoil: '', ergo: '', supp: ''},
    {id: 'orsist-5000 t5000', name: 'Orsis T-5000', recoil: '', ergo: '', supp: ''},
    //7.62x54r
    {id: 'mosinboltactioninfantryrifle mosinboltactionsniperrifle', name: 'Mosin', recoil: '', ergo: '', supp: ''},
    {id: 'svds', name: 'SVDS', recoil: '', ergo: '', supp: ''},
    {id: 'sv-98 sv98', name: 'SV-98', recoil: '', ergo: '', supp: ''},
    //9x18
    {id: 'pp-9klin pp9klin pp-91kedr pp-91-01Kedr-B pp9101kedrb', name: 'PP-9 Klin/PP-91 Kedr', recoil: '', ergo: '', supp: ''},
    {id: 'pb', name: 'PB', recoil: '', ergo: '', supp: ''},
    {id: 'aps apb', name: 'APS/APB', recoil: '', ergo: '', supp: ''},
    {id: 'pm makarov', name: 'PM', recoil: '', ergo: '', supp: ''},
    //9x19
    {id: 'mp5kurz', name: 'MP5/MP5 Kurz', recoil: '', ergo: '', supp: ''},
    {id: 'mpx', name: 'MPX', recoil: '', ergo: '', supp: ''},
    {id: 'pp-19-01vityaz-sn pp-19vityaz-sn pp1901vityazsn', name: 'PP-19-01 Vityaz-SN', recoil: '', ergo: '', supp: ''},
    {id: 'saiga-9 saiga9', name: 'Saiga-9', recoil: '', ergo: '', supp: ''},
    {id: 'glock17 glock18c', name: 'Glock 17/Glock 18C', recoil: '', ergo: '', supp: ''},
    {id: 'mp-443grach mp443grach', name: 'MP-443 Grach', recoil: '', ergo: '', supp: ''},
    {id: 'p226r', name: 'P226R', recoil: '', ergo: '', supp: ''},
    {id: 'm9a3', name: 'M9A3', recoil: '', ergo: '', supp: ''},
    {id: 'mp9', name: 'MP9', recoil: '', ergo: '', supp: ''},
    //9x21
    {id: 'sr-1mpgyurza sr1mpgyurza srimp', name: 'SR-1MP Gyurza', recoil: '', ergo: '', supp: ''},
    //9x39
    {id: 'asval', name: 'AS VAL', recoil: '', ergo: '', supp: ''},
    {id: 'vssvintorez', name: 'VSS Vintorez', recoil: '', ergo: '', supp: ''},
    //12.7x55
    {id: 'ash-12 ash12', name: 'ASh-12', recoil: '', ergo: '', supp: ''},
    //5.7x28
    {id: 'fnp90', name: 'FN P90', recoil: '', ergo: '', supp: ''},
    {id: 'fn57 fn5-7 fnfiveseven fnfive-seven', name: 'FN Five-seveN', recoil: '', ergo: '', supp: ''},
    //.45
    {id: 'coltm1911a1', name: 'M1911A1', recoil: '', ergo: '', supp: ''},
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
                    modMessage.setFooter('Best supressors: ' + mod[i].supp);
                    if(mod[i].recoil != null)
                    {
                        modMessage.setDescription('Recoil build:');
                        modMessage.setImage(mod[i].recoil);
                    }
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