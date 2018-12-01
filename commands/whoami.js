exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const name = message.author.id;
  message.channel.send(`You are ${name} `);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "whoami",
  category: "Misc",
  description: "testing",
  usage: "whoami"
};
