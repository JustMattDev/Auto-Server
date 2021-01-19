const Discord = require('discord.js'); 
const fs = require("fs"); 
const prefix = 'auto!'
const bot = new Discord.Client(); 
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    bot.commands.set(command.name, command)
}
bot.on('ready', () => {
    console.log('Creating Great Servers')
    bot.user.setPresence({status: 'dnd'})
    bot.user.setActivity('Creating Servers');
})
bot.on('message', (message) => {

    if (message.channel.type === "dm" || message.author.bot || message.author === bot.user || !message.content.startsWith(prefix)) return;
        var args = message.content.slice(prefix.length).split(/ +/g); // We need this later
    const commandName = args.shift().toLowerCase();
    if (!bot.commands.has(commandName)) return;

    const command = bot.commands.get(commandName);
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.channel.send('Check the code. There was a error');
    }
});
bot.on('guildCreate', (guild) => { // If the Bot was added on a server, proceed
    let defaultChannel = "general";
    guild.channels.cache.forEach((channel) => {
        if (channel.type == "text" && defaultChannel == "general") {
            if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                defaultChannel = channel;
            }
        }
    })
    const joinEmbed = new Discord.MessageEmbed()
        .setColor('0xB9C0DA')
        .setTitle('Hey, Auto Server Here')
        .addField('My prefix is `auto!`', 'Use help for commands!')
        .addField('Note', 'I need to have all of my permission.')
        .addField('**Warning**', 'Be carefull while using the bot.')
        .setFooter('Creator : mc123#8695')
        .setTimestamp()
    defaultChannel.send(joinEmbed)
});
bot.login('NzkxMjA1Mjg3NjU0NzE5NTA5.X-LxWA.C3nCcJhfqvANTYewEY5N_ak55RY')