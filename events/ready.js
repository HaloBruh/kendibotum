const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
  console.log(` `)
  client.user.setActivity('Developer - ErenÖzcan#0457 | -yardım | Patlatma Koruma Sistemi,Mod Komutları,Eğlence Komutları ve Logo Oluşturma Komutları!', { type: "PLAYING"});
  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 
 //STREAMİNG = YAYINDA
  console.log(`${client.user.username}: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};