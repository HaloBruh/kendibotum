const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setAuthor('Bu komutu kullanan kullanıcı ' + message.author.tag)
.setDescription(`**[Davet Et](https://discord.com/oauth2/authorize?client_id=816237724285665321&scope=bot&permissions=8) | [Sitemiz Yakında]()**

  **__Gecikme Sürem__** **${client.ws.ping}** 

  **__Kullanıcı Sayısı__** **${client.guilds.cache.reduce((a,b) => a + b.memberCount,0).toLocaleString()}** 

 __**Komutlarım**__ 

__**-hesapkur**__ ᲼᲼᲼᲼᲼᲼ ᲼᲼᲼᲼᲼᲼ ᲼᲼᲼᲼᲼᲼ ᲼᲼᲼᲼᲼᲼ ᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼
İlk Önce Bu Komutu Kullan Yoksa Diğerlerini Kullanamazsın

**-çalış** ᲼᲼᲼᲼᲼᲼
Çalışır Ve Para Kazanırsın

**-meslek** ᲼᲼᲼᲼᲼᲼
Meslek Seçersin (polis-doktor-muhabir)

**-maaş** ᲼᲼᲼᲼᲼᲼
Maaşına Bakarsın

**-param** ᲼᲼᲼᲼᲼᲼
Parana Bakarsın

**-kumar** ᲼᲼᲼᲼᲼᲼
Kumar Oynarsın
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
  name: "ekonomi-yardım",
  description: 'yardım kodu.',
  usage: 'ekonomi-yardım'
};