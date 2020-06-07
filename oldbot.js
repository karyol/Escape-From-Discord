/* eslint-disable no-unused-vars */
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 4) == 'eft.') {
        var args = message.substring(4).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            case 'w':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://escapefromtarkov.gamepedia.com/index.php?search=' + args + '&title=Special%3ASearch&go=Go'
                });
            break;

            case 'channelID':
                bot.sendMessage({
                    to: channelID,
                    message: channelID
                });
            break;

            case 'roles':
                bot.sendMessage({
                    to: channelID,
                    message: ''//roles
                });
            break;

            case 'help':
                bot.sendMessage({
                    to:channelID,
                    message: '"eft.help" - show help \n"eft.w %s" - search for %s on eft wiki'
                });
            break;

            default:
                bot.sendMessage({
                    to: channelID,
                    message: 'If you need help type "eft.help"'
                });
            break;
         }
     }
});