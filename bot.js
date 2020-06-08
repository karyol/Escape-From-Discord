const Discord = require('discord.js');
//const auth = require('./auth.json');

const bot = new Discord.Client();

const config = 
{
    token: process.env.BOT_TOKEN,
    prefix: process.env.PREFIX
};

const helpMessage = new Discord.MessageEmbed()
    .setColor('#d83ecc')
    .setTitle('Help')
    .setDescription('eft.help - show help \n eft.w %s - search for %s on eft wiki');

bot.on('ready', () => {
    console.log('Logged in!');
});

bot.on('message', message => {
    if(message.content.substr(0, config.prefix.length) == config.prefix)
    {
        var args = message.content.substr(config.prefix.length).split(/ +/g);
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd)
        {
            case 'w':
                var temp;
                var txt = args[0];
                for(var i = 1; i < args.length; i++)
                {
                    temp = args[i];
                    txt = txt + "_" + temp;
                }
                message.channel.send('https://escapefromtarkov.gamepedia.com/index.php?search=' + txt + '&title=Special%3ASearch&go=Go');
            break;

            case 'help':
                message.channel.send(helpMessage);
            break;

            default:
                message.channel.send('If you need help type "eft.help"');
            break;
        }
    }
});

bot.login(config.token);
