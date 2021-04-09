const Discord = require('discord.js');
const modül = require('sozluk-api');

exports.run = async (client, message, args) => {
if(!args[0]) return message.reply('**bir kelime gir bro**')
let kelime = await modül.tdk(args[0])
const embed = new Discord.MessageEmbed() 
.setColor('#003366')
.setThumbnail('https://cdn.discordapp.com/attachments/827573044468908032/828607363577282600/Turk_Dil_Kurumu-logo-502E4BBBF5-seeklogo.com.png')
.addField('Anlam:', kelime.anlam)
.addField('Lisan:', kelime.lisan)
.addField('Örnek:', `${kelime.örnek} **${kelime.Yazar}**`)
.addField('Atasözü:', kelime.Atasözü)
message.channel.send(embed)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tdk'],
    permLevel: 0
}

exports.help = {
    name: 'tdk',
    description: "tdk'den kelime ararsınız",
    usage: 'tdk'
}