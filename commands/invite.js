module.exports = {
    name: 'invite',
    description: "invite command",
    execute(message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
            .setTitle('Invite?')
            .addField("Help Below!", "[Support Server](https://discord.gg/xErquGgshX)")
            .addField("Invite Me!", "[Auto Server invite Link](https://discord.com/oauth2/authorize?client_id=791205287654719509&scope=bot&permissions=48)")
        message.channel.send(embed)
    }
}