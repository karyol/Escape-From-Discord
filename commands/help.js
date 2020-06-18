exports.run = (bot, message, args) => {
    message.channel.send(helpMessage).catch(console.error);
};

exports.help = {
    name: 'help'
};