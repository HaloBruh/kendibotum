const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {


  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setAuthor('Bu komutu kullanan kullanıcı ' + message.author.tag)
.setDescription(`**[Davet Et](https://discord.com/oauth2/authorize?client_id=816237724285665321&scope=bot&permissions=8) **)

  **__Gecikme Sürem__** **${client.ws.ping}** 

  **__Kullanıcı Sayısı__** **${client.guilds.cache.reduce((a,b) => a + b.memberCount,0).toLocaleString()}** 

 __**Komutlarım**__ 

**-logo-yardım** ᲼᲼᲼᲼᲼᲼
Logo Komutlarını Atar

**-ekonomi-yardım** ᲼᲼᲼᲼᲼᲼
Ekonomi Komutlarını Atar

**-otocevap-ekle/sil/liste** ᲼᲼᲼᲼᲼᲼
Oto cevap

**-ping**
Botun Pingini Gösterir

**-rastgele-meme**
Meme(miim) Komudu

**-nuke**
Kullanılan Kanalı Patlatır ve Tekrar Oluşturur

**-prefix <prefixiniz>**
Botun Prefixini Değiştirmeye Yarar

**-sil <Silincek Miktar>**
Yazdığınız Miktar Kadar Mesaj Siler

**-yardım2** ᲼᲼᲼᲼᲼᲼
2.Yardım Menüsünü Atar

 __**Özel Kodlar**__ 

**-karaliste** ᲼᲼᲼᲼᲼᲼
Sahibimin Komudu

**-beyazliste** ᲼᲼᲼᲼᲼᲼
Sahibimin Komudu

 __**Developer Komutları**__ 

**-kod-çevir** ᲼᲼᲼᲼᲼᲼
İstediğiniz Kod V12 Ye Çevirir

**-embed** ᲼᲼᲼᲼᲼᲼
Embed Hakkında Bilgi

**-embed-oluştur** ᲼᲼᲼᲼᲼᲼
Embedlı Yazar

 __**Gelenler Gidenler**__ 

**Anti Raid** ᲼᲼᲼᲼᲼᲼
Anti Raid'i Botumuzdan Kaldırdık **Neden** Çünkü Bottan Hem Çok CPU ve RAM Yiyordu Bizde Kaldırdık İlginiz İçin Teşekkürler 

**Ekonomi**
Botumuzdan Anti Raid'i Kaldırdık Bizde Yeni Ve Her Botta Olmayan Bir Komut Getirelim Dedik - -ekonomi-yardım
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
  name: "yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};