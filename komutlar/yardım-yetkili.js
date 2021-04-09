const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setTitle(`${client.user.username} - Komutlarım`)
.setURL('')
.setDescription(`**\`Yetkili\`**
» \`${prefix}unban <user>\`: **Banı Kaldırır**
» \`${prefix}ban <user>\`: **Banlar**
» \`${prefix}prefix\`: **Botun Prefixini Ayarlar**
» \`${prefix}kurallar\`: **Hazır Kurallar Metni Atar**
`)
.setThumbnail("https://www.tamgaturk.com/files/uploads/news/default/20201108-berat-albayrakin-gorevine-devam-edecegi-iddia-edildi-831941-10b29847c7e5599bf1e7.jpg")
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "yetkili",
  description: 'yardım kodu.',
  usage: 'yetkili'
};