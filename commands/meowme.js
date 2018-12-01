
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  mewpoints = Math.floor(Math.random() * 201);    
  message.channel.send(`** ${mewpoints}  GMMP - Gold Meow Meow Points** has been added to your account.  ฅ•ω•ฅ`).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "meowme",
  category: "Miscelaneous",
  description: "ฅ•ω•ฅ",
  usage: "meowme"
};
