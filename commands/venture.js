
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  // Limited to guild owner - adjust to your own preference!
    // if(!message.author.id === message.guild.owner) return message.reply("You're not the boss of me, you can't do that!");

    const user = message.mentions.users.first() || client.users.get(args[0]);
    if(!user) return message.reply("You must mention someone or give their ID!");

    const pointsToAdd = (args[1]);
    if(!pointsToAdd) return message.reply("You didn't tell me how many points to give...");
    if (isNaN(pointsToAdd)) return message.reply("Hey, you have to give me a number dummy!");
    if (pointsToAdd % 1 != 0) return message.reply("Nice try, you cant fool me with decimals a second time. ")

    // Get their current points.
    const userPoints = client.points.get(`${user.id}-${message.guild.id}`);
    userPoints.points = [ Number(userPoints.points) + Number(pointsToAdd) ]

    // And we save it!
    client.points.set(`${user.id}-${message.guild.id}`, userPoints);

    message.reply(`${user.tag} has given ** ${pointsToAdd} points. **`);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner, Bot Admins"
};

exports.help = {
  name: "give",
  category: "Administration",
  description: "Only for giving points. No touchy touchy if you shouldnt be.",
  usage: "give"
};
