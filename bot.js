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

module.exports = { config };

// bot.on('ready', () => {
//     console.log('Logged in!');
// });

// bot.on('message', message => {
//     if(message.content.substr(0, config.prefix.length) == config.prefix)
//     {
//         if(message.author.bot) return;
//         if(message.content.indexOf(config.prefix) !== 0) return;

//         var args = message.content.substr(config.prefix.length).split(/ +/g);
//         var cmd = args[0].toLowerCase();

//         const command = bot.commands.get(cmd);
//         if(!command) 
//         {
//             message.channel.send('If you need help type "eft.help"');
//             return;
//         }

//         args = args.splice(1);

//         command.run(bot, message, args);
//     }
// });

fs.readdir('./events', async (err, files) => {
    if(err) return console.error;
    files.forEach(file => {
        if(!file.endsWith('.js')) return;
        var evt = require(`./events/${file}`);
        var evtName = file.split('.')[0];
        console.log(`Loaded '${evtName}'.`);
        bot.on(evtName, evt.bind(null, bot));
    });
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