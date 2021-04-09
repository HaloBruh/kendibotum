const Discord = require("discord.js");
const ayarlar = require("../botlar.json")
exports.run = (client, message, args) => {
  const botlar = ayarlar.botadi

let logoaltyap = args.slice(0).join("+");
if (!logoaltyap) return message.channel.send("Lütfen Bişey Yaz");
let link ="https://vacefron.nl/api/ejected?name=" + logoaltyap + "&imposter=true&crewmate=red";

const logobotaltyapi = new Discord.MessageEmbed()
.setTitle(`İşte Logon!`)
.setImage(link)
.setFooter(`İşte Logon!`)
return message.channel.send(logobotaltyapi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "imposter-logo"
};
