const Discord = require('discord.js')
module.exports = {
    name: 'clear',
    description: "clears up the server",
    execute(message, args) {
        const NotOwner = new Discord.MessageEmbed()
            .setTitle('Owner?')
            .setDescription('I think **NOT**')
            .addField('Only the owner of the server can use this command!', 'Contact your server owner!')
            .setColor('RED')
            .setFooter('Auto Server!')
        if (message.author === !message.guild.owner) return message.channel.send(NotOwner)
        message.guild.channels.cache.forEach(channel => channel.delete());
        message.author.send('Cleared Server')
    }
}