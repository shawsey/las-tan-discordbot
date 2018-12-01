exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
const filtered = client.points.filter( p => p.guildID === message.guild.id );
const user = message.mentions.users.first() || client.users.get(args[0]);
if(!user) return message.reply("You must mention someone or give their ID!");

client.points.delete(`${user.id}-${message.guild.id}`);


message.channel.send(`Points reset!`);

};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner, Bot Admins"
};

exports.help = {
  name: "reset",
  category: "Administration",
  description: "Only for reseting points. No touchy touchy if you shouldnt be.",
  usage: "reset"
};
