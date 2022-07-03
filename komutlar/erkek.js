const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
var toplam = db.fetch(`toplamKayit_${message.author.id}`)
 
 const genelrol = message.guild.roles.find(r => r.id === "");
  const erkek = message.guild.roles.find(r => r.id === "852502512404791297");
  const misafir = message.guild.roles.find(r => r.id === "947052606847590410"); 
  const log = message.guild.channels.find(c => c.id === "947117261125201971");
  if(!message.member.roles.array().filter(r => r.id === "993175045188894802")[0]) { 
    return message.channel.send("**Bu komutu sadece !! ve üstü rollere sahip olan kişiler kullanabilir.**");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("**Kayıt yapılacak kişiyi etiketleyin.**")
    const c = message.guild.member(member)
    c.addRole(genelrol)
    c.addRole(erkek)
    c.removeRole(misafir)
    c.setNickname(`${c.user.tag}}`)
    db.add(`erkekKayit_${message.author.id}`, 1)
    db.add(`toplamKayit_${message.author.id}`, 1)
    const embed = new Discord.RichEmbed()
    .setAuthor("Erkek Kayıt Yapıldı")
    .addField(`Kaydı yapılan\n`, `${c.user.tag}`)
    .addField(`Kaydı yapan\n`, `${message.author.tag}`)
    .addField(`Yeni isim\n`, `${c.user.tag}}`)
    .addField(`Toplam Kayıt\n`, toplam || 0)
    .setFooter("Bornoz Kayıt Sistemi")
    .setColor("#1955a8")
    log.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["erkek"],
  permLevel: 0
};
exports.help = {
  name: "e",
  description: "e",
  usage: "e"
}; //6
