const Discord = require('discord.js');

const mod = new Array();
const featuredMods = new Array();
const modMessage = new Discord.MessageEmbed()
    .setColor('#994d00');

mod.push(
    //12g
    {id: 'm870', name: 'M870', recoil: 'https://i.imgur.com/YdT5n1b.png', ergo: 'https://i.imgur.com/GpkK80x.png', supp: 'SilencerCo Salvo 12 + SilencerCo choke adapter'},
    {id: 'mossberg590a1', name: 'Mossberg 590A1', recoil: 'https://i.ibb.co/4N5TtGF/Mossberg-recoil.png', ergo: 'https://i.ibb.co/3mzyR7x/Mossberg-ergo.png', supp: 'none'},
    {id: 'mp-133 mp133', name: 'MP-133', recoil: 'https://i.imgur.com/ugKBpV5.png', ergo: 'https://i.imgur.com/qAPepDV.png', supp: 'SilencerCo Salvo 12 + SilencerCo choke adapter'},
    {id: 'mp-153 mp153', name: 'MP-153', recoil: 'https://i.imgur.com/Vik8EBI.png', ergo: 'https://i.imgur.com/zAEw2WZ.png', supp: 'SilencerCo Salvo 12 + SilencerCo choke adapter'},
    {id: 'saiga-12 saiga12', name: 'Saiga-12', recoil: 'https://i.imgur.com/mNg6OSw.png', ergo: null, supp: 'SilencerCo Salvo 12 + SilencerCo Salvo 12 thread adapter'},
    //20g
    {id: 'toz-106 memgun toz106', name: 'TOZ-106', recoil: 'https://i.imgur.com/cMpV72k.png', ergo: null, supp: 'none'},
    //23g
    {id: 'tozks-23m', name: 'TOZ KS-23M', recoil: null, ergo: null, supp: 'none'},
    //4.6x30
    {id: 'mp7a1', name: 'MP7A1', recoil: 'https://i.imgur.com/aXzb2gE.png', ergo: null, supp: 'B&T Rotex 2 4.6x30 silencer'},
    {id: 'mp7a2', name: 'MP7A2', recoil: 'https://i.imgur.com/KaKQAjA.png', ergo: null, supp: 'B&T Rotex 2 4.6x30 silencer'},
    //.366
    {id: 'veprakm/vpo-209 vpo209', name: 'Vepr AKM/VPO-209', recoil: 'https://i.imgur.com/qBsiHYv.png', ergo: 'https://i.imgur.com/agaiuVq.png', supp: 'Rotor 43 .366TKM Muzzle Brake'},
    {id: 'vpo-215 vpo215', name: 'VPO-215', recoil: null, ergo: null, supp: 'Rotor 43 .366TKM Muzzle Brake'},
    //5.45x39
    {id: 'ak-74n ak74n', name: 'AK-74(N)', recoil: 'https://i.imgur.com/D1ynBjv.png', ergo: 'https://i.imgur.com/agaiuVq.png', supp: 'PBS-4 5.45x39 Silencer'},
    {id: 'ak-74m ak74m', name: 'AK-74(M)', recoil: 'https://i.imgur.com/U2ztyhj.png', ergo: 'https://i.imgur.com/agaiuVq.png', supp: 'PBS-4 5.45x39 Silencer'},
    {id: 'aks-74un aks-74ub aks74un aks74ub', name: 'AKS-74U(N/B)', recoil: 'https://i.imgur.com/xXNAU3b.png', ergo: null, supp: 'PBS-4 5.45x39 Silencer'},
    {id: 'aks-74n aks74n', name: 'AKS-74(N)', recoil: 'https://i.imgur.com/Gkhv8IE.png', ergo: 'https://i.imgur.com/agaiuVq.png', supp: 'PBS-4 5.45x39 Silencer'},
    {id: 'ak-105 ak105', name: 'AK-105', recoil: 'https://i.imgur.com/n2wjDeZ.png', ergo: 'https://i.imgur.com/UON3Csu.png', supp: 'PBS-4 5.45x39 Silencer'},
    {id: 'rpk-16 rpk16', name: 'RPK-16', recoil: 'https://i.imgur.com/Lay5zLq.png', ergo: null, supp: 'Hexagon AK-74 5.45x39 sound suppressor'},
    //5.56x45
    {id: 'ak-101 ak101', name: 'AK-101', recoil: 'https://i.imgur.com/Ae13wiA.png', ergo: 'https://i.imgur.com/agaiuVq.png', supp: 'Rotor 43 5.56x45 muzzle brake'},
    {id: 'ak-102 ak102', name: 'AK-102', recoil: 'https://i.imgur.com/Kh9bRi5.png', ergo: 'https://i.imgur.com/UON3Csu.png', supp: 'Rotor 43 5.56x45 muzzle brake	'},
    {id: 'hk416a5', name: 'HK 416A5', recoil: 'https://i.imgur.com/N7bpBVs.png', ergo: 'https://i.imgur.com/8mPQjd8.png', supp: 'Daniel Defence Wave QD Supr. + DD Wave MB. 5.56x45'},
    {id: 'dtmdr', name: 'DT MDR', recoil: 'https://i.imgur.com/sAm70k1.png', ergo: null, supp: 'Daniel Defence Wave QD Supr. + DD Wave MB. 5.56x45'},
    {id: 'm4a1', name: 'M4A1', recoil: 'https://i.imgur.com/k0ce1OA.png', ergo: 'https://i.imgur.com/ggqV3e5.png', supp: 'Daniel Defence Wave QD Supr. + DD Wave MB. 5.56x45'},
    {id: 'adar2-15', name: 'ADAR 2-15', recoil: 'https://i.imgur.com/MSa9r34.png', ergo: 'https://i.imgur.com/ggqV3e5.png', supp: 'Daniel Defence Wave QD Supr. + DD Wave MB. 5.56x45	'},
    {id: 'lonestartx-15 tx15', name: 'Lone Star TX-15', recoil: 'https://i.imgur.com/QTgnrlA.png', ergo: 'https://i.imgur.com/ggqV3e5.png', supp: 'Daniel Defence Wave QD Supr. + DD Wave MB. 5.56x45	'},
    //7.62x25
    {id: 'tt', name: 'TT', recoil: 'https://i.imgur.com/enjooZt.png', ergo: null, supp: 'Makeshift 7.62x25 TT silencer'},
    {id: 'ppsh-41 ppsh41 pepesza ppsz', name: 'PPSH-41', recoil: null, ergo: null, supp: 'none'},
    //7.62x39
    {id: 'ak-103 ak103', name: 'AK-103', recoil: 'https://i.imgur.com/T0SDicl.png', ergo: 'https://i.imgur.com/agaiuVq.png', supp: 'PBS-1 7.62x39 silencer'},
    {id: 'ak-104 ak104', name: 'AK-104', recoil: 'https://i.imgur.com/RaARsOT.png', ergo: 'https://i.imgur.com/UON3Csu.png', supp: 'PBS-1 7.62x39 silencer'},
    {id: 'akmn', name: 'AKM(N)', recoil: 'https://i.imgur.com/ntz6877.png', ergo: 'https://i.imgur.com/agaiuVq.png', supp: 'PBS-1 7.62x39 silencer'},
    {id: 'akmsn', name: 'AKMS(N)', recoil: 'https://i.imgur.com/e2w2BeK.png', ergo: 'https://i.imgur.com/agaiuVq.png', supp: 'PBS-1 7.62x39 silencer'},
    {id: 'veprkm/vpo-136 vpo136', name: 'Vepr KM/VPO-136', recoil: 'https://i.imgur.com/f6EJQuB.png', ergo: 'https://i.imgur.com/agaiuVq.png', supp: 'PBS-1 7.62x39 silencer'},
    {id: 'op-sks', name: 'SKS/OP-SKS', recoil: 'https://i.imgur.com/tj0cTuZ.png', ergo: 'https://i.imgur.com/KbaQXHL.png', supp: 'Hexagon SKS 7.62x39 sound supressor'},
    //7.62x51
    {id: 'sa-58 sa58 fnfal', name: 'SA-58', recoil: 'https://i.imgur.com/I9UkQJR.png', ergo: 'https://i.imgur.com/h5SNjVB.png', supp: 'Daniel Defence Wave QD Supr. + DD Wave MB. 7.62x51'},
    {id: 'veprhunter vpo101 vpo-101', name: 'Vepr Hunter/VPO-101', recoil: 'https://i.ibb.co/ckrmb09/Hunter-recoil.png', ergo: null, supp: 'Rotor 43 7.62x51 muzzle break for VPO-101'},
    {id: 'm1a mia', name: 'M1A', recoil: 'https://i.imgur.com/5eEjP4C.png', ergo: 'https://i.imgur.com/ca2hfqi.png', supp: 'Daniel Defence Wave QD Supr. + DD Wave MB. 7.62x51'},
    {id: 'remingtonr11 rsass', name: 'Remington R11 RSASS', recoil: 'https://i.imgur.com/TJQjjYR.png', ergo: null, supp: 'Daniel Defence Wave QD Supr. + DD Wave MB. 7.62x51'},
    {id: 'dvl-10 dvl10', name: 'DVL-10', recoil: null, ergo: null, supp: 'Daniel Defence Wave QD Supr. + DD Wave MB. 7.62x51'},
    {id: 'm700', name: 'M700', recoil: 'https://i.imgur.com/Cr2Ommj.png', ergo: null, supp: 'Daniel Defence Wave QD Supr. + DD Wave MB. 7.62x51'},
    {id: 'dtmdr', name: 'DT MDR', recoil: 'https://i.imgur.com/DssE8he.png', ergo: null, supp: 'Daniel Defence Wave QD Supr. + DD Wave MB. 7.62x51'},
    {id: 'sr-25 sr25', name: 'SR-25', recoil: 'https://i.imgur.com/7VFBCN2.png', ergo: null, supp: 'Daniel Defence Wave QD Supr. + DD Wave MB. 7.62x51'},
    {id: 'orsist-5000 t5000', name: 'Orsis T-5000', recoil: null, ergo: null, supp: 'Daniel Defence Wave QD Supr. + DD Wave MB. 7.62x51'},
    {id: 'kel-tecrfb keltecrfb', name: 'Kel-Tec RFB', recoil: 'https://i.ibb.co/tq9fmXC/RFB-recoil.png', ergo: 'https://i.ibb.co/QbjcGW4/RFB-ergo.png', supp: 'Daniel Defence Wave QD Supr. + DD Wave MB. 7.62x51'},
    //7.62x54r
    {id: 'mosinboltactioninfantryrifle mosinboltactionsniperrifle', name: 'Mosin', recoil: 'https://i.imgur.com/I1UAb7M.png', ergo: 'https://i.imgur.com/dse4ONC.png', supp: 'Daniel Defence Wave QD Supr. + DD Wave MB. 7.62x51 + Tiger Rock adapter'},
    {id: 'svds', name: 'SVDS', recoil: 'https://i.imgur.com/7y4CGtf.png', ergo: null, supp: 'Rotor 43 7.62x54 muzzle brake'},
    {id: 'sv-98 sv98', name: 'SV-98', recoil: 'https://i.imgur.com/rAvYIcc.png', ergo: null, supp: 'Regular SV-98 7.62x54 silencer'},
    //9x18
    {id: 'pp-9klin pp9klin pp-91kedr pp-91-01Kedr-B pp9101kedrb', name: 'PP-9 Klin/PP-91 Kedr', recoil: null, ergo: null, supp: 'none'},
    {id: 'pb', name: 'PB', recoil: null, ergo: null, supp: 'none'},
    {id: 'aps apb', name: 'APS/APB', recoil: null, ergo: null, supp: 'none'},
    {id: 'pm makarov', name: 'PM', recoil: null, ergo: null, supp: 'none'},
    //9x19
    {id: 'mp5', name: 'MP5', recoil: 'https://i.imgur.com/ir88QSK.png', ergo: 'https://i.imgur.com/PEzTz1S.png', supp: 'MP5 SD'},
    {id: 'mp5kurz', name: 'MP5 Kurz', recoil: 'https://i.imgur.com/LQFYP09.png', ergo: null, supp: 'none'},
    {id: 'mpx', name: 'MPX', recoil: 'https://i.imgur.com/vMwEKYZ.png', ergo: 'https://i.imgur.com/ST1LbIy.png', supp: 'Sig SRD 9 9x19mm sound suppressor'},
    {id: 'pp-19-01vityaz-sn pp-19vityaz-sn pp1901vityazsn', name: 'PP-19-01 Vityaz-SN', recoil: 'https://i.imgur.com/Ug0te0f.png', ergo: null, supp: 'Sig SRD 9 9x19mm sound suppressor'},
    {id: 'saiga-9 saiga9', name: 'Saiga-9', recoil: 'https://i.imgur.com/ItuEKAj.png', ergo: null, supp: 'Sig SRD 9 9x19mm sound suppressor'},
    {id: 'glock17', name: 'Glock 17', recoil: 'https://i.imgur.com/lO3t6xi.png', ergo: null, supp: 'Sig SRD 9 9x19mm sound suppressor'},
    {id: 'glock18c', name: 'Glock 18C', recoil: 'https://i.imgur.com/ymCiyUc.png', ergo: null, supp: 'Sig SRD 9 9x19mm sound suppressor'},
    {id: 'mp-443grach mp443grach', name: 'MP-443 Grach', recoil: null, ergo: null, supp: 'none'},
    {id: 'p226r', name: 'P226R', recoil: 'https://i.imgur.com/teYTCW4.png', ergo: null, supp: 'Sig SRD 9 9x19mm sound suppressor'},
    {id: 'm9a3', name: 'M9A3', recoil: 'https://i.imgur.com/ZIBoO9g.png', ergo: null, supp: 'Sig SRD 9 9x19mm sound suppressor'},
    {id: 'mp9', name: 'MP9', recoil: null, ergo: null, supp: 'B&T MP9 9x19mm sound suppressor + B&T adapter for MP9'},
    //9x21
    {id: 'sr-1mpgyurza sr1mpgyurza srimp', name: 'SR-1MP Gyurza', recoil: 'https://i.imgur.com/k8uVvcv.png', ergo: null, supp: 'SR1MP silencer 9x21'},
    //9x39
    {id: 'asval', name: 'AS VAL', recoil: 'https://i.imgur.com/A2m65n9.png', ergo: 'https://i.imgur.com/5MiUThQ.png', supp: 'none'},
    {id: 'vssvintorez', name: 'VSS Vintorez', recoil: 'https://i.imgur.com/bTNqp8r.png', ergo: 'https://i.imgur.com/CiuGHXw.png', supp: 'none'},
    //12.7x55
    {id: 'ash-12 ash12', name: 'ASh-12', recoil: 'https://i.imgur.com/UyHyL9G.png', ergo: null, supp: 'ASh-12 12.7x55 tactical suppressor'},
    //5.7x28
    {id: 'fnp90', name: 'FN P90', recoil: 'https://i.imgur.com/ggTKOF6.png', ergo: null, supp: 'FN Attenuator 5.7x28 silencer'},
    {id: 'fn57 fn5-7 fnfiveseven fnfive-seven', name: 'FN Five-seveN', recoil: 'https://i.imgur.com/pJZgXwh.png', ergo: null, supp: 'FN Attenuator 5.7x28 silencer'},
    //.45
    {id: 'coltm1911a1', name: 'Colt M1911A1', recoil: 'https://i.ibb.co/1sNCLDg/M1911.png', ergo: null, supp: 'none'},
    {id: 'coltm45a1', name: 'Colt M45A1', recoil: 'https://i.ibb.co/9HJ1xJd/M45A1.png', ergo: null, supp: 'none'}
);

/*featuredMods.push(
    {name: 'Colt M1911A1', link: 'https://i.ibb.co/1sNCLDg/M1911.png'},
    {name: 'FN P90', link: 'https://i.imgur.com/ggTKOF6.png'}
);*/

exports.run = (bot, message, args) => {
    var temp, txt, count = 0;
    for(var i = 0; i < mod.length; i++)
    {
        temp = 0;
        for(var j = 0; j < args.length; j++)
        {
            txt = args[j].toLowerCase();
            /*if('featured'.includes(txt))
            {
                var d = new Date();
                var now = d.getDate + d.getMonth + d.getFullYear;
                if(process.env.LASTDATE != now)
                {
                    process.env.LASTDATE = now;
                    process.env.RANDOMNUM = Math.floor(Math.random() * (featuredMods.length - 1));
                }

                modMessage.setTitle('Build of the day:');
                modMessage.setDescription(featuredMods[process.env.RANDOMNUM].name);
                modMessage.setImage(featuredMods[process.env.RANDOMNUM].link);
                message.channel.send(modMessage);
                break;
            }
            else */
            if(mod[i].id.includes(txt))
            {
                temp++;
                if(temp == args.length)
                {
                    modMessage.setTitle(mod[i].name);
                    modMessage.setFooter('Best supressor: ' + mod[i].supp);
                    modMessage.setDescription('');
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