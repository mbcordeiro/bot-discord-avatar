const Discord = require('discord.js')
const token = ''

const client = new Discord.Client()

client.login(token)

client.on('ready', () => console.log('ok'))

client.on('message', message => {
    if (message.content === '!avatar') {
        message.reply(message.author.displayAvatarURL())
    }
})