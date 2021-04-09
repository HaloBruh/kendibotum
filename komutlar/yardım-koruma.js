const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
.setDescription(`**[Davet Et](https://discord.com/oauth2/authorize?client_id=816237724285665321&scope=bot&permissions=8) | [Sitemiz](https://www.rylan.ml/) | [Destek Sunucusu](https://discord.gg/YCz5hF64w8) | [Youtube](https://www.youtube.com/channel/UCkCb5aCRW_3mEzpcPP18iVw?sub_confirmation=1)**

**__Gecikme Sürem__** **${client.ws.ping}**

**__Kullanıcı Sayısı__** **${client.guilds.cache.reduce((a,b) => a + b.memberCount,0).toLocaleString()}**

**\`Komutlarım\`**

\`${prefix}kanal-koruma\`
Sunucuyu Patlamadan Korur

\`${prefix}rol-koruma (Bakımda)\`
Bakımda

\`${prefix}mod-log\`
Mod Log
`)
.setThumbnail(client.user.avatarURL())
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
  name: "koruma",
  description: 'yardım kodu.',
  usage: 'koruma'
};