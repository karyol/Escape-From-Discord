exports.run = (bot, message, args) => {
    var temp;
    var txt = args[0];
    for(var i = 1; i < args.length; i++)
    {
        temp = args[i];
        txt = txt + "_" + temp;
    }
    message.channel.send('https://escapefromtarkov.gamepedia.com/index.php?search=' + txt + '&title=Special%3ASearch&go=Go');
};

exports.help = {
    name: 'w'
};