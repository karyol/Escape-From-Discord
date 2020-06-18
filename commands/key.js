const keys = new Array();

keys.push(
    {name: 'RB-BK', merchantPrice: '75,000₽', marketPrice: '75,000₽'}
);

exports.run = (bot, message, args) => {
    for(var i = 0; i < keys.length; i++)
    {
        var temp = 0;
        for(var j = 0; j < args.length; j++)
        {
            if(keys[i].name.includes(args[j]))
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