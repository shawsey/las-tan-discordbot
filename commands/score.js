exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const scorePoints = client.points.get(`${message.author.id}-${message.guild.id}`).points;
  if (!scorePoints) return message.channel.send('You have no points yet.');
  message.channel.send(`You have ** ${scorePoints} points! **`);
};
// determine a way for folk with no points to get the correct response give client.points is null

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "score",
  category: "LAS-Houses",
  description: "Enter this command to check how many points you have amassed over the month!",
  usage: "score"
};
