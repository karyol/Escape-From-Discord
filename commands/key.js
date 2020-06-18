const Discord = require('discord.js');

const keys = new Array();
const keyMessage = new Discord.MessageEmbed()
    .setColor('#f34336')
    .setFooter('Market price may not be 100% accurate.');

keys.push(
    {id: 'rb-bk key', name: 'RB-BK key', merchantPrice: '75,000', marketPrice: '75,000', map: 'Reserve'},
    {id: 'rb-vo key', name: 'RB-VO key', merchantPrice: '75,000', marketPrice: '79,500', map: 'Reserve'},
    {id: 'rb-ak key', name: 'RB-AK key', merchantPrice: '54,750', marketPrice: '200,000', map: 'Reserve'},
    {id: 'rb-mp11 key', name: 'RB-MP11 key', merchantPrice: '57,000', marketPrice: '140,000', map: 'Reserve'},
    {id: 'rb-mp12 key', name: 'RB-MP12 key', merchantPrice: '66,000', marketPrice: '80,000', map: 'Reserve'},
    {id: 'rb-mp13 key', name: 'RB-MP13 key', merchantPrice: '51,000', marketPrice: '624,000', map: 'Reserve'},
    {id: 'rb-mp21 key', name: 'RB-MP21 key', merchantPrice: '48,750', marketPrice: '82,222', map: 'Reserve'},
    {id: 'rb-mp22 key', name: 'RB-MP22 key', merchantPrice: '51,750', marketPrice: '770,000', map: 'Reserve'},
    {id: 'rb-psp1 key', name: 'RB-PSP1 key', merchantPrice: '41,250', marketPrice: '100,000', map: 'Reserve'},
    {id: 'key rb-psp2', name: 'Key RB-PSP2', merchantPrice: '37,500', marketPrice: '950,000', map: 'Reserve'},
    {id: 'rb-ps81 key', name: 'RB-PS81 key', merchantPrice: '41,250', marketPrice: '1,199,999', map: 'Reserve'},
    {id: 'rb-ps82 key', name: 'RB-PS82 key', merchantPrice: '37,500', marketPrice: '128,500', map: 'Reserve'},
    {id: 'rb-kprl key', name: 'RB-KPRL key', merchantPrice: '39,000', marketPrice: '189,999', map: 'Reserve'},
    {id: 'rb-smp key', name: 'RB-SMP key', merchantPrice: '37,500', marketPrice: '165,000', map: 'Reserve'},
    {id: 'rb-st key', name: 'RB-ST key', merchantPrice: '93,000', marketPrice: '219,000', map: 'Reserve'},
    {id: 'rb-ao key', name: 'RB-AO key', merchantPrice: '45,000', marketPrice: '128,420', map: 'Reserve'},
    {id: 'rb-tb key', name: 'RB-TB key', merchantPrice: '37,500', marketPrice: '89,998', map: 'Reserve'},
    {id: 'rb-am key', name: 'RB-AM key', merchantPrice: '52,500', marketPrice: '184,500', map: 'Reserve'},
    {id: 'rb-orb1 key', name: 'RB-ORB1 key', merchantPrice: '36,750', marketPrice: '53,000', map: 'Reserve'},
    {id: 'rb-orb2 key', name: 'RB-ORB2 key', merchantPrice: '60,750', marketPrice: '298,420', map: 'Reserve'},
    {id: 'rb-orb3 key', name: 'RB-ORB3 key', merchantPrice: '57,750', marketPrice: '71,111', map: 'Reserve'},
    {id: 'rb-gn key', name: 'RB-GN key', merchantPrice: '37,500', marketPrice: '1,188,000', map: 'Reserve'},
    {id: 'rb-ob key', name: 'RB-OB key', merchantPrice: '37,500', marketPrice: '435,000', map: 'Reserve'},
    {id: 'rb-op key', name: 'RB-OP key', merchantPrice: '69,000', marketPrice: '750,000', map: 'Reserve'},
    {id: 'rb-korl key', name: 'RB-KORL key', merchantPrice: '67,500', marketPrice: '350,000', map: 'Reserve'},
    {id: 'rb-ksm key', name: 'RB-KSM key', merchantPrice: '37,500', marketPrice: '470,000', map: 'Reserve'},
    {id: 'rb-rs key', name: 'RB-RS key', merchantPrice: '93,000', marketPrice: '115,000', map: 'Reserve'},
    {id: 'rb-rh key', name: 'RB-RH key', merchantPrice: '93,000', marketPrice: '128,887', map: 'Reserve'},
    {id: 'rb-pp key', name: 'RB-PP key', merchantPrice: '26,250', marketPrice: '409,888', map: 'Reserve'},
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