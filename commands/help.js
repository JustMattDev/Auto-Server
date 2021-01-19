const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: "help command",
    execute(message, args) {
        const Help = new Discord.MessageEmbed()
            .setTitle('Auto Server')
            .setDescription('Only Owners can use the bot.')
            .addField('Commands', 'clear\nsetup\ninvite\nhelp')
            .addField('Simple Bot, Huge Powers', 'Use the bot wisely')
            .addField('Prefix : `auto!`', 'Permissions :\n `Manage Server\nManage Channels`')
            .setColor('RED')
            .setFooter('Auto Server!')
            message.channel.send(Help)

        
    }
}