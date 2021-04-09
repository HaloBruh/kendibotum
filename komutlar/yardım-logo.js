const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`**\`Logo\`**
» \`${prefix}roket-logo\`: **Logo Yapar**
» \`${prefix}f-logo\`: **Logo Yapar**
» \`${prefix}imposter-logo\`: **Among Us Da Imposter Olursun**
» \`${prefix}clyde-logo\`: **Clyde Size Yazı Yazar**
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
  name: "logo-yardım",
  description: 'yardım kodu.',
  usage: 'logo-yardım'
};