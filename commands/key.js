const Discord = require('discord.js');

const keys = new Array();
const keyMessage = new Discord.MessageEmbed()
    .setColor('#f34336')
    .setFooter('Market price may not be 100% accurate.');

keys.push(
    //Reserve
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
    //Labs
    {id: 'lab. green keycard', name: 'Lab. Green keycard', merchantPrice: '147,000', marketPrice: '5,666,666', map: 'The Lab'},
    {id: 'lab. red keycard', name: 'Lab. Red keycard', merchantPrice: '5,400,000', marketPrice: '30,000,000', map: 'The Lab'},
    {id: 'lab. violet keycard', name: 'Lab. Violet keycard', merchantPrice: '2,475,000', marketPrice: '3,890,000', map: 'The Lab'},
    {id: 'lab. black keycard', name: 'Lab. Black keycard', merchantPrice: '157,500', marketPrice: '1,400,000', map: 'The Lab'},
    {id: 'lab. blue keycard', name: 'Lab. Blue keycard', merchantPrice: '1,762,500', marketPrice: '7,339,999', map: 'The Lab'},
    {id: 'lab. yellow keycard', name: 'Lab. Yellow keycard', merchantPrice: '33,750', marketPrice: '46,000', map: 'The Lab'},
    {id: 'lab. key. arsenal storage room', name: 'Lab. key. Arsenal storage room', merchantPrice: '75,000', marketPrice: '75,420', map: 'The Lab'},
    {id: 'lab. key. manager office', name: 'Lab. key. Manager office', merchantPrice: '259,215', marketPrice: '267,888', map: 'The Lab'},
    {id: 'lab. key. testing area (weap.)', name: 'Lab. key. Testing area (weap.)', merchantPrice: '75,000', marketPrice: '70,000', map: 'The Lab'},
    //Woods
    {id: 'key zb-014', name: 'Key ZB-014', merchantPrice: '3,476', marketPrice: '16,000', map: 'Woods'},
    {id: 'shturman key', name: 'Shturman key', merchantPrice: '265,212', marketPrice: '345,000', map: 'Woods'},
    {id: 'yotota car key', name: 'Yotota car key', merchantPrice: '750', marketPrice: '950', map: 'Woods'},
    //Factory
    {id: 'factory exit key', name: 'Factory exit key', merchantPrice: '159,674', marketPrice: '158,999', map: 'Factory, Customs'},
    {id: 'door key', name: 'Door key', merchantPrice: '3,953', marketPrice: '3,500', map: 'Factory'},
    {id: 'door key (alternative)', name: 'Door key (alternative)', merchantPrice: '3,953', marketPrice: '3,900', map: 'Factory'},
    //Interchange
    {id: 'key to kiba store outlet', name: 'Key to KIBA store outlet', merchantPrice: '450,000', marketPrice: '1,350,000', map: 'Interchange'},
    {id: 'key to kiba outlet grate door', name: 'Key to KIBA Outlet grate door', merchantPrice: '103,050', marketPrice: '105,000', map: 'Interchange'},
    {id: 'key to emercom medical unit', name: 'Key to EMERCOM medical unit', merchantPrice: '82,500', marketPrice: '213,000', map: 'Interchange'},
    {id: 'ultra medical storage key', name: 'ULTRA medical storage key', merchantPrice: 'n/a', marketPrice: '1,699,999', map: 'Interchange'},
    {id: 'key to utility room of power substation', name: 'Key to utility room of power substation', merchantPrice: '7,500', marketPrice: '10,000', map: 'Interchange'},
    {id: 'key to pharmacy', name: 'Key to pharmacy', merchantPrice: '60,750', marketPrice: '63,000', map: 'Interchange'},
    {id: 'key to oli administrator office', name: 'Key to OLI administrator office', merchantPrice: '23,250', marketPrice: '23,000', map: 'Interchange'},
    {id: 'key to oli logistics department office', name: 'Key to OLI logistics department office', merchantPrice: '52,500', marketPrice: '340,000', map: 'Interchange'},
    {id: 'key to utility room of oli outlet', name: 'Key to utility room of OLI outlet', merchantPrice: '32,250', marketPrice: '32,999', map: 'Interchange'},
    {id: 'key to oli cash register', name: 'Key to OLI cash register', merchantPrice: '90,000', marketPrice: '90,000', map: 'Interchange'},
    {id: 'key to idea cash register', name: 'Key to IDEA cash register', merchantPrice: '90,000', marketPrice: '90,000', map: 'Interchange'},
    {id: 'key to goshan cash register', name: 'Key to Goshan cash register', merchantPrice: '465,000', marketPrice: '568,000', map: 'Interchange'},
    {id: 'object 11sr keycard', name: 'Object 11SR keycard', merchantPrice: 'n/a', marketPrice: '1,900,000', map: 'Interchange'},
    {id: 'object 21ws keycard', name: 'Object 21WS keycard', merchantPrice: 'n/a', marketPrice: '598,999', map: 'Interchange'},
    //Customs
    {id: 'marked key', name: 'Marked key', merchantPrice: '25,259', marketPrice: '125,000', map: 'Customs'},
    {id: 'customs office key', name: 'Customs office key', merchantPrice: '8,330', marketPrice: '9,999', map: 'Customs'},
    {id: 'cabinet key', name: 'Cabinet key', merchantPrice: '8,816', marketPrice: '7,700', map: 'Customs'},
    {id: 'the key to the gas station storage room', name: 'The key to the gas station storage room', merchantPrice: '6,675', marketPrice: '9,000', map: 'Customs'},
    {id: 'usec stash on customs key', name: 'USEC stash on Customs key', merchantPrice: '93,000', marketPrice: '459,999', map: 'Customs'},
    {id: 'military base checkpoint key', name: 'Military base checkpoint key', merchantPrice: '184,223', marketPrice: '196,000', map: 'Customs'},
    {id: 'portable cabin key', name: 'Portable cabin key', merchantPrice: '4,275', marketPrice: '4,800', map: 'Customs'},
    {id: 'Portable cabin key of customs Factory zone', name: 'Portable cabin key of customs Factory zone', merchantPrice: '2,518', marketPrice: '12,000', map: 'Customs'},
    {id: 'machinery key', name: 'Machinery key', merchantPrice: '1,511', marketPrice: '6,500', map: 'Customs'},
    {id: 'car key', name: 'Car key', merchantPrice: '1,125', marketPrice: '1,498', map: 'Customs'},
    {id: 'trailer park cabin key', name: 'Trailer park cabin key', merchantPrice: '4,955', marketPrice: '5,800', map: 'Customs'},
    {id: 'unknown key', name: 'Unknown key', merchantPrice: '1,203', marketPrice: '8,000', map: 'Customs'},
    {id: 'dorm guard desk key', name: 'Dorm guard desk key', merchantPrice: '10,650', marketPrice: '10,698', map: 'Customs'},
    {id: 'dorm room 103 key', name: 'Dorm room 103 Key', merchantPrice: '2,784', marketPrice: '2,999', map: 'Customs'},
    {id: 'dorm room 104 key', name: 'Dorm room 104 Key', merchantPrice: '13,500', marketPrice: '13,500', map: 'Customs'},
    {id: 'dorm room 105 key', name: 'Dorm room 105 Key', merchantPrice: '806', marketPrice: '4,800', map: 'Customs'},
    {id: 'dorm room 108 key', name: 'Dorm room 108 Key', merchantPrice: '4,517', marketPrice: '4,655', map: 'Customs'},
    {id: 'dorm room 110 key', name: 'Dorm room 110 Key', merchantPrice: '27,000', marketPrice: '27,000', map: 'Customs'},
    {id: 'dorm room 114 key', name: 'Dorm room 114 Key', merchantPrice: '10,500', marketPrice: '20,000', map: 'Customs'},
    {id: 'dorm room 118 key', name: 'Dorm room 118 Key', merchantPrice: '4,019', marketPrice: '4,400', map: 'Customs'},
    {id: 'dorm room 203 key', name: 'Dorm room 203 Key', merchantPrice: '2,678', marketPrice: '7,499', map: 'Customs'},
    {id: 'dorm room 204 key', name: 'Dorm room 204 Key', merchantPrice: '4,288', marketPrice: '30,000', map: 'Customs'},
    {id: 'dorm room 206 key', name: 'Dorm room 206 Key', merchantPrice: '1,301', marketPrice: '6,769', map: 'Customs'},
    {id: 'dorm room 214 key', name: 'Dorm room 214 Key', merchantPrice: '61,500', marketPrice: '61,900', map: 'Customs'},
    {id: 'dorm room 218 key', name: 'Dorm room 218 Key', merchantPrice: '5,743', marketPrice: '4,950', map: 'Customs'},
    {id: 'dorm room 220 key', name: 'Dorm room 220 Key', merchantPrice: '8,326', marketPrice: '24,750', map: 'Customs'},
    {id: 'dorm room 303 key', name: 'Dorm room 303 Key', merchantPrice: '5,570', marketPrice: '9,000', map: 'Customs'},
    {id: 'dorm room 306 key', name: 'Dorm room 306 Key', merchantPrice: '4,581', marketPrice: '4,599', map: 'Customs'},
    {id: 'dorm room 308 key', name: 'Dorm room 308 Key', merchantPrice: '2,625', marketPrice: '2,700', map: 'Customs'},
    {id: 'dorm room 315 key', name: 'Dorm room 315 Key', merchantPrice: '8,250', marketPrice: '8,250', map: 'Customs'},
    //Shoreline
    {id: 'west wing room 205 key', name: 'West wing room 205 key', merchantPrice: '37,125', marketPrice: '675,000', map: 'Shoreline'},
    {id: 'east wing room 205 key', name: 'East wing room 205 key', merchantPrice: '138,750', marketPrice: '150,000', map: 'Shoreline'}
);

//{id: '', name: '', merchantPrice: '', marketPrice: '', map: ''},

exports.run = (bot, message, args) => {
    var temp, txt, count = 0;
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
    name: 'key'
};