const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setAuthor('Bu komutu kullanan kullanıcı ' + message.author.tag)
.setDescription(`**[Davet Et](https://discord.com/oauth2/authorize?client_id=816237724285665321&scope=bot&permissions=8) | [Sitemiz Yakında!]()**

**__Gecikme Sürem__** **${client.ws.ping}**

**__Kullanıcı Sayısı__** **${client.guilds.cache.reduce((a,b) => a + b.memberCount,0).toLocaleString()}**

**\`Komutlarım\`**

\`-yetkili\` ᲼᲼᲼᲼᲼᲼
Yetkili Komutlarını Atar

\`-koruma\` ᲼᲼᲼᲼᲼᲼
Koruma Komutlarını Atar

\`-eğlence\` ᲼᲼᲼᲼᲼᲼
Eğlence Komutlarını Atar

\`-kısalt <kısaltıcağınız link>\` ᲼᲼᲼᲼᲼᲼
Yazdığınız Linki Kısaltır

\`-gelişmiş-say\` ᲼᲼᲼᲼᲼᲼
Sunucudaki Çevrimiçi Üyeleri,Çevrimdışı Üyeleri,Botları ve Toplam Üyeleri Gösterir

\`-mute-yardım\` ᲼᲼᲼᲼᲼᲼
Mute Komutlarını Atar
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
  name: "yardım2",
  description: 'yardım kodu.',
  usage: 'yardım2'
};