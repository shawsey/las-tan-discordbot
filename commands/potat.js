
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.send("*You will suffer and face a great internal struggle potato spaghet. But the solution can only be found in yourself.*").catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "potat",
  category: "Miscelaneous",
  description: "Only the realest will know.",
  usage: "potat"
};
