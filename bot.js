const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
//const auth = require('./auth.json');

const bot = new Discord.Client();

bot.commands = new Enmap();

const config = {
    token: process.env.BOT_TOKEN,
    prefix: process.env.PREFIX
};

// const helpMessage = new Discord.MessageEmbed()
//     .setColor('#d83ecc')
//     .setTitle('Help')
//     .setDescription('eft.help - show help \n eft.w %s - search for %s on eft wiki');

bot.on('ready', () => {
    console.log('Logged in!');
});

bot.on('message', message => {
    if(message.content.substr(0, config.prefix.length) == config.prefix)
    {
        if(message.author.bot) return;
        if(message.content.indexOf(config.prefix) !== 0) return;

        var args = message.content.substr(config.prefix.length).split(/ +/g);
        var cmd = args[0].toLowerCase();

        const command = bot.commands.get(cmd);
        if(!command) return;

        command.run(bot, message, args);
        
        args = args.splice(1);
        // switch(cmd)
        // {
        //     case 'w':
        //         var temp;
        //         var txt = args[0];
        //         for(var i = 1; i < args.length; i++)
        //         {
        //             temp = args[i];
        //             txt = txt + "_" + temp;
        //         }
        //         message.channel.send('https://escapefromtarkov.gamepedia.com/index.php?search=' + txt + '&title=Special%3ASearch&go=Go');
        //     break;

        //     case 'help':
        //         message.channel.send(helpMessage);
        //     break;

        //     default:
        //         message.channel.send('If you need help type "eft.help"');
        //     break;
        // }
    }
});

fs.readdir('./commands', async (err, files) => {
    if(err) return console.error;
    files.forEach(file => {
        if(!file.endsWith('.js')) return;
        var props = require(`./commands/${file}`);
        var cmdName = file.split('.')[0];
        console.log(`Loaded command '${cmdName}'.`);
        bot.commands.set(cmdName, props);
    });
});

bot.login(config.token);
