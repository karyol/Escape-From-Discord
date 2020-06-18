const keys = new Array();

keys.push(
    {name: 'RB-BK', merchantPrice: '75,000₽', marketPrice: '75,000₽'}
);

exports.run = (bot, message, args) => {
    var temp, txt;
    for(var i = 0; i < keys.length; i++)
    {
        temp = 0;
        for(var j = 0; j < args.length; j++)
        {
            txt = args[j].toUpperCase();
            if(keys[i].name.includes(txt))
            {
                temp++;
                if(temp == args.length)
                {
                    message.channel.send(keys[i].marketPrice);
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