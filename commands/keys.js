const Discord = require('discord.js');

const keys = new Array();
const maps = new Array();
const keyMessage = new Discord.MessageEmbed()
    .setColor('#f34336');

maps.push(
    {id: 'reserve', name: 'Reserve', img: 'https://i.ibb.co/yXJRLsD/dfsfdsfsd.jpg'},
    {id: 'thelabs', name: 'The Lab', img: null},
    {id: 'woods', name: 'Woods', img: 'https://i.ibb.co/nmrxff7/cfw.jpg'},
    {id: 'factory', name: 'Factory', img: 'https://i.ibb.co/nmrxff7/cfw.jpg'},
    {id: 'interchange', name: 'Interchange', img: null},
    {id: 'customs', name: 'Customs', img: 'https://i.ibb.co/nmrxff7/cfw.jpg'},
    {id: 'shoreline', name: 'Shoreline', img: 'https://i.imgur.com/kNPzh5z.png'}
);

//{id: '', name: '', img: ''}

keys.push(
    //Reserve
    {id: 'rb-bk key', name: 'RB-BK key', tier: '1', worth: 'YES', map: 'reserve'},
    {id: 'rb-vo key', name: 'RB-VO key', tier: '1', worth: 'YES', map: 'reserve'},
    {id: 'rb-pkpm key', name: 'RB-PKPM key', tier: '1', worth: 'NO', map: 'reserve'},
    {id: 'rb-ak key', name: 'RB-AK key', tier: '1', worth: 'NO', map: 'reserve'},
    {id: 'rb-mp21 key', name: 'RB-MP21 key', tier: '1', worth: 'YES', map: 'reserve'},
    {id: 'rb-psp1 key', name: 'RB-PSP1 key', tier: '1', worth: 'YES', map: 'reserve'},
    {id: 'key rb-psp2', name: 'Key RB-PSP2', tier: '1', worth: 'OPTIONAL', map: 'reserve'},
    {id: 'rb-ps81 key', name: 'RB-PS81 key', tier: '1', worth: 'OPTIONAL', map: 'reserve'},
    {id: 'rb-ps82 key', name: 'RB-PS82 key', tier: '1', worth: 'YES', map: 'reserve'},
    {id: 'rb-kprl key', name: 'RB-KPRL key', tier: '1', worth: 'YES', map: 'reserve'},
    {id: 'rb-smp key', name: 'RB-SMP key', tier: '1', worth: 'YES', map: 'reserve'},
    {id: 'rb-st key', name: 'RB-ST key', tier: '1', worth: 'YES', map: 'reserve'},
    {id: 'rb-ao key', name: 'RB-AO key', tier: '2', worth: 'YES', map: 'reserve'},
    {id: 'rb-tb key', name: 'RB-TB key', tier: '2', worth: 'YES', map: 'reserve'},
    {id: 'rb-am key', name: 'RB-AM key', tier: '2', worth: 'YES', map: 'reserve'},
    {id: 'rb-rlssa key', name: 'RB-RLSSA key', tier: '2', worth: 'YES', map: 'reserve'},
    {id: 'rb-mp22 key', name: 'RB-MP22 key', tier: '2', worth: 'OPTIONAL', map: 'reserve'},
    {id: 'rb-orb1 key', name: 'RB-ORB1 key', tier: '2', worth: 'YES', map: 'reserve'},
    {id: 'rb-orb2 key', name: 'RB-ORB2 key', tier: '2', worth: 'OPTIONAL', map: 'reserve'},
    {id: 'rb-orb3 key', name: 'RB-ORB3 key', tier: '2', worth: 'YES', map: 'reserve'},
    {id: 'rb-gn key', name: 'RB-GN key', tier: '2', worth: 'OPTIONAL', map: 'reserve'},
    {id: 'rb-mp11 key', name: 'RB-MP11 key', tier: '3', worth: 'OPTIONAL', map: 'reserve'},
    {id: 'rb-mp12 key', name: 'RB-MP12 key', tier: '3', worth: 'OPTIONAL', map: 'reserve'},
    {id: 'rb-mp13 key', name: 'RB-MP13 key', tier: '3', worth: 'OPTIONAL', map: 'reserve'},
    {id: 'rb-ob key', name: 'RB-OB key', tier: '3', worth: 'OPTIONAL', map: 'reserve'},
    {id: 'rb-op key', name: 'RB-OP key', tier: '3', worth: 'NO', map: 'reserve'},
    {id: 'rb-korl key', name: 'RB-KORL key', tier: '3', worth: 'NO', map: 'reserve'},
    {id: 'rb-ksm key', name: 'RB-KSM key', tier: '3', worth: 'NO', map: 'reserve'},
    {id: 'rb-rs key', name: 'RB-RS key', tier: '3', worth: 'NO', map: 'reserve'},
    {id: 'rb-rh key', name: 'RB-RH key', tier: '3', worth: 'OPTIONAL', map: 'reserve'},
    {id: 'rb-pp key', name: 'RB-PP key', tier: '5', worth: 'NO', map: 'reserve'},
    //Labs
    {id: 'lab. green keycard', name: 'Lab. Green keycard', tier: '1', worth: 'YES', map: 'thelabs'},
    {id: 'lab. red keycard', name: 'Lab. Red keycard', tier: '1', worth: 'NO', map: 'thelabs'},
    {id: 'lab. violet keycard', name: 'Lab. Violet keycard', tier: '1', worth: 'NO', map: 'thelabs'},
    {id: 'key card with a blue marking', name: 'Key card with a blue marking', tier: '1', worth: 'OPTIONAL', map: 'thelabs'},
    {id: 'lab. key. arsenal storage room', name: 'Lab. key. Arsenal storage room', tier: '1', worth: 'NO', map: 'thelabs'},
    {id: 'lab. key. manager office', name: 'Lab. key. Manager office', tier: '1', worth: 'YES', map: 'thelabs'},
    {id: 'lab. black keycard', name: 'Lab. Black keycard', tier: '2', worth: 'OPTIONAL', map: 'thelabs'},
    {id: 'lab. blue keycard', name: 'Lab. Blue keycard', tier: '2', worth: 'OPTIONAL', map: 'thelabs'},
    {id: 'lab. key. testing area (weap.)', name: 'Lab. key. Testing area (weap.)', tier: '2', worth: 'YES', map: 'thelabs'},
    {id: 'lab. yellow keycard', name: 'Lab. Yellow keycard', tier: '3', worth: 'OPTIONAL', map: 'thelabs'},
    //Woods
    {id: 'key zb-014', name: 'Key ZB-014', tier: '1', worth: 'YES', map: 'woods'},
    {id: 'shturman key', name: 'Shturman key', tier: '1', worth: 'OPTIONAL', map: 'woods'},
    {id: 'yotota car key', name: 'Yotota car key', tier: '4', worth: 'NO', map: 'woods'},
    //Factory
    {id: 'factory exit key', name: 'Factory exit key', tier: '1', worth: 'YES', map: 'factory'},
    {id: 'door key', name: 'Door key', tier: '4', worth: 'NO', map: 'factory'},
    {id: 'door key (alternative)', name: 'Door key (alternative)', tier: '4', worth: 'NO', map: 'factory'},
    //Interchange
    {id: 'key to kiba store outlet', name: 'Key to KIBA store outlet', tier: '1', worth: 'YES', map: 'interchange'},
    {id: 'key to kiba outlet grate door', name: 'Key to KIBA Outlet grate door', tier: '1', worth: 'YES', map: 'interchange'},
    {id: 'key to emercom medical unit', name: 'Key to EMERCOM medical unit', tier: '1', worth: 'YES', map: 'interchange'},
    {id: 'ultra medical storage key', name: 'ULTRA medical storage key', tier: '1', worth: 'YES', map: 'interchange'},
    {id: 'object 11sr keycard', name: 'Object 11SR keycard', tier: '1', worth: 'YES', map: 'interchange'},
    {id: 'key to utility room of power substation', name: 'Key to utility room of power substation', tier: '2', worth: 'YES', map: 'interchange'},
    {id: 'object 21ws keycard', name: 'Object 21WS keycard', tier: '2', worth: 'OPTIONAL', map: 'interchange'},
    {id: 'key to pharmacy', name: 'Key to pharmacy', tier: '3', worth: 'OPTIONAL', map: 'interchange'},
    {id: 'key to oli administrator office', name: 'Key to OLI administrator office', tier: '4', worth: 'OPTIONAL', map: 'interchange'},
    {id: 'key to oli logistics department office', name: 'Key to OLI logistics department office', tier: '4', worth: 'OPTIONAL', map: 'interchange'},
    {id: 'key to utility room of oli outlet', name: 'Key to utility room of OLI outlet', tier: '4', worth: 'OPTIONAL', map: 'interchange'},
    {id: 'key to oli cash register', name: 'Key to OLI cash register', tier: '4', worth: 'NO', map: 'interchange'},
    {id: 'key to idea cash register', name: 'Key to IDEA cash register', tier: '4', worth: 'NO', map: 'interchange'},
    {id: 'key to goshan cash register', name: 'Key to Goshan cash register', tier: '4', worth: 'NO', map: 'interchange'},
    //Customs
    {id: 'factory exit key', name: 'Factory exit key', tier: '1', worth: 'YES', map: 'customs'},
    {id: 'marked key', name: 'Marked key', tier: '1', worth: 'YES', map: 'customs'},
    {id: 'customs office key', name: 'Customs office key', tier: '1', worth: 'YES', map: 'customs'},
    {id: 'dorm guard desk key', name: 'Dorm guard desk key', tier: '2', worth: 'YES', map: 'customs'},
    {id: 'dorm room 110 key', name: 'Dorm room 110 Key', tier: '2', worth: 'YES', map: 'customs'},
    {id: 'dorm room 114 key', name: 'Dorm room 114 Key', tier: '2', worth: 'YES', map: 'customs'},
    {id: 'cabinet key', name: 'Cabinet key', tier: '2', worth: 'YES', map: 'customs'},
    {id: 'the key to the gas station storage room', name: 'The key to the gas station storage room', tier: '2', worth: 'YES', map: 'customs'},
    {id: 'usec stash on customs key', name: 'USEC stash on Customs key', tier: '2', worth: 'YES', map: 'customs'},
    {id: 'military base checkpoint key', name: 'Military base checkpoint key', tier: '3', worth: 'NO', map: 'customs'},
    {id: 'dorm room 104 key', name: 'Dorm room 104 Key', tier: '3', worth: 'OPTIONAL', map: 'customs'},
    {id: 'dorm room 105 key', name: 'Dorm room 105 Key', tier: '3', worth: 'OPTIONAL', map: 'customs'},
    {id: 'dorm room 204 key', name: 'Dorm room 204 Key', tier: '3', worth: 'OPTIONAL', map: 'customs'},
    {id: 'dorm room 214 key', name: 'Dorm room 214 Key', tier: '3', worth: 'OPTIONAL', map: 'customs'},
    {id: 'dorm room 220 key', name: 'Dorm room 220 Key', tier: '3', worth: 'OPTIONAL', map: 'customs'},
    {id: 'dorm room 303 key', name: 'Dorm room 303 Key', tier: '3', worth: 'OPTIONAL', map: 'customs'},
    {id: 'dorm room 103 key', name: 'Dorm room 103 Key', tier: '4', worth: 'OPTIONAL', map: 'customs'},
    {id: 'dorm room 108 key', name: 'Dorm room 108 Key', tier: '4', worth: 'OPTIONAL', map: 'customs'},
    {id: 'dorm room 118 key', name: 'Dorm room 118 Key', tier: '4', worth: 'OPTIONAL', map: 'customs'},
    {id: 'dorm room 218 key', name: 'Dorm room 218 Key', tier: '4', worth: 'NO', map: 'customs'},
    {id: 'dorm room 306 key', name: 'Dorm room 306 Key', tier: '4', worth: 'NO', map: 'customs'},
    {id: 'dorm room 308 key', name: 'Dorm room 308 Key', tier: '4', worth: 'NO', map: 'customs'},
    {id: 'dorm room 315 key', name: 'Dorm room 315 Key', tier: '4', worth: 'NO', map: 'customs'},
    {id: 'portable cabin key', name: 'Portable cabin key', tier: '4', worth: 'NO', map: 'customs'},
    {id: 'portable cabin key of customs factory zone', name: 'Portable cabin key of customs factory zone', tier: '4', worth: 'OPTIONAL', map: 'customs'},
    {id: 'machinery key', name: 'Machinery key', tier: '5', worth: 'NO', map: 'customs'},
    {id: 'car key', name: 'Car key', tier: '5', worth: 'NO', map: 'customs'},
    {id: 'trailer park cabin key', name: 'Trailer park cabin key', tier: '5', worth: 'NO', map: 'customs'},
    {id: 'unknown key', name: 'Unknown key', tier: '5', worth: 'NO', map: 'customs'},
    {id: 'dorm room 203 key', name: 'Dorm room 203 Key', tier: '5', worth: 'NO', map: 'customs'},
    {id: 'dorm room 206 key', name: 'Dorm room 206 Key', tier: '5', worth: 'NO', map: 'customs'},
    //Shoreline
    {id: 'key with tape', name: 'Key with tape', tier: '1', worth: 'YES', map: 'shoreline'},
    {id: 'health resort utility room key', name: 'Health resort utility room key', tier: '1', worth: 'YES', map: 'shoreline'},
    {id: 'office 104 west wing key', name: 'Office 104 West wing key', tier: '1', worth: 'YES', map: 'shoreline'},
    {id: 'office 107 east wing key', name: 'Office 107 East wing key', tier: '1', worth: 'YES', map: 'shoreline'},
    {id: 'west wing room 203/205 key', name: 'West wing room 203/205 key', tier: '1', worth: 'YES', map: 'shoreline'},
    {id: 'west wing room 218/221/222 key', name: 'West wing room 218/221/222 key', tier: '1', worth: 'YES', map: 'shoreline'},
    {id: 'west wing room 220 key', name: 'West wing room 220 key', tier: '1', worth: 'YES', map: 'shoreline'},
    {id: 'east wing room 222/226 key', name: 'Eest wing room 222/226 key', tier: '1', worth: 'YES', map: 'shoreline'},
    {id: 'west wing room 301 key', name: 'West wing room 301 key', tier: '1', worth: 'YES', map: 'shoreline'},
    {id: 'east wing room 306/308 key', name: 'East wing room 306/308 key', tier: '1', worth: 'YES', map: 'shoreline'},
    {id: 'east wing room 328 key', name: 'East wing room 328 key', tier: '1', worth: 'YES', map: 'shoreline'},
    {id: 'office 112 west wing key', name: 'Office 112 West wing key', tier: '2', worth: 'OPTIONAL', map: 'shoreline'},
    {id: 'west wing room 216 key', name: 'West wing room 216 key', tier: '2', worth: 'YES', map: 'shoreline'},
    {id: 'east wing room 205/206 key', name: 'East wing room 205/206 key', tier: '2', worth: 'YES', map: 'shoreline'},
    {id: 'east wing room 313/314 key', name: 'East wing room 313/314 key', tier: '2', worth: 'YES', map: 'shoreline'},
    {id: 'east wing room 316 key', name: 'East wing room 316 key', tier: '2', worth: 'YES', map: 'shoreline'},
    {id: 'key to hep station storage', name: 'Key to HEP station storage', tier: '2', worth: 'YES', map: 'shoreline'},
    {id: 'cottage back entrance key', name: 'Cottage back entrance key', tier: '3', worth: 'OPTIONAL', map: 'shoreline'},
    {id: 'cottage safe key', name: 'Cottage safe key', tier: '3', worth: 'OPTIONAL', map: 'shoreline'},
    {id: 'west wing room 219 key', name: 'West wing room 219 key', tier: '3', worth: 'OPTIONAL', map: 'shoreline'},
    {id: 'west wing room 306 key', name: 'West wing room 306 key', tier: '3', worth: 'OPTIONAL', map: 'shoreline'},
    {id: 'health resort warehouse safe key', name: 'Health resort warehouse safe key', tier: '3', worth: 'OPTIONAL', map: 'shoreline'},
    {id: 'health resort management office safe key', name: 'Health resort management office safe key', tier: '3', worth: 'OPTIONAL', map: 'shoreline'},
    {id: 'health resort room 321 safe key', name: 'Health resort room 321 safe key', tier: '3', worth: 'OPTIONAL', map: 'shoreline'},
    {id: 'smw car key', name: 'SMW car key', tier: '4', worth: 'NO', map: 'shoreline'},
    {id: 'weather station safe key', name: 'Weather station safe key', tier: '5', worth: 'NO', map: 'shoreline'},
    {id: 'key to store safe', name: 'Key to store safe', tier: '5', worth: 'NO', map: 'shoreline'},
    {id: 'gas station safe key', name: 'Gas station safe key', tier: '5', worth: 'NO', map: 'shoreline'},
    {id: 'office 108 east wing key', name: 'Office 108 East wing key', tier: '5', worth: 'NO', map: 'shoreline'},
    {id: 'west wing room 207 key', name: 'West wing room 207 key', tier: '5', worth: 'NO', map: 'shoreline'},
    {id: 'east wing room 209/213 key', name: 'East wing room 209/213 key', tier: '5', worth: 'NO', map: 'shoreline'},
    {id: 'east wing room 216 key', name: 'East wing room 216 key', tier: '5', worth: 'NO', map: 'shoreline'},
    {id: 'west wing room 303 key', name: 'West wing room 303 key', tier: '5', worth: 'NO', map: 'shoreline'},
    {id: 'west wing room 309 key', name: 'West wing room 309 key', tier: '5', worth: 'NO', map: 'shoreline'},
    {id: 'east wing room 310 key', name: 'East wing room 310 key', tier: '5', worth: 'NO', map: 'shoreline'},
    {id: 'east wing room 322 key', name: 'East wing room 322 key', tier: '5', worth: 'NO', map: 'shoreline'},
    {id: 'west wing room 323 key', name: 'West wing room 323 key', tier: '5', worth: 'NO', map: 'shoreline'},
    {id: 'west wing room 325 key', name: 'West wing room 325 key', tier: '5', worth: 'NO', map: 'shoreline'}
);

//{id: '', name: '', tier: '', worth: '', map: ''},

exports.run = (bot, message, args) => {
    var temp, txt, tempName, tempTier, tempWorth;
    for(var i = 0; i < maps.length; i++)
    {
        temp = 0;
        for(var j = 0; j < args.length; j++)
        {
            txt = args[j].toLowerCase();
            if(maps[i].id.includes(txt))
            {
                temp++;
                if(temp == args.length)
                {
                    tempName = '';
                    tempTier = '';
                    tempWorth = '';
                    keyMessage.setTitle(maps[i].name);
                    for(var k = 0; k < keys.length; k++)
                    {
                        if(keys[k].map == maps[i].id)
                        {
                            tempName += keys[k].name + '\n';
                            tempTier += keys[k].tier + '\n';
                            tempWorth += keys[k].worth + '\n';
                        }
                    }
                    keyMessage.addFields(
                        {name: 'Name', value: tempName, inline: true},
                        {name: 'Tier', value: tempTier, inline: true},
                        {name: 'Worth?', value: tempWorth ,inline: true}
                    );
                    keyMessage.setImage(maps[i].img);
                    message.channel.send(keyMessage);
                    keyMessage.spliceFields(0, 3);
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
    name: 'keys'
};