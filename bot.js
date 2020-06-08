const Discord = require('discord.js');
//const auth = require('./auth.json');

const bot = new Discord.Client();

const helpMessage = new Discord.MessageEmbed()
    .setColor('#d83ecc')
    .setTitle('Help')
    .setDescription('eft.help - show help \n eft.w %s - search for %s on eft wiki');

bot.on('ready', () => {
    console.log('Logged in!');
});

bot.on('message', message => {
    if(message.content.substr(0, 4) == 'eft.')
    {
        var args = message.content.substr(4).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd)
        {
            case 'hello':
                message.channel.send('Hi!');
            break;

            case 'w':
                args = args.toString().replace(' ', '_');
                message.channel.send('https://escapefromtarkov.gamepedia.com/index.php?search=' + args + '&title=Special%3ASearch&go=Go');
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

bot.login(process.env.BOT_TOKEN);
