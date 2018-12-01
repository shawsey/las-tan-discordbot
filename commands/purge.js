

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  // Limited to guild owner - adjust to your own preference!
    // if(!message.author.id === message.guild.owner) return message.reply("You're not the boss of me, you can't do that!");

    let inventory = args[0];

    if (inventory == 1) {
    	const filtered = client.inventory.filter( p => p.guildID === message.guild.id );

    // We then filter it again (ok we could just do this one, but for clarity's sake...) 
    // So we get only users that haven't been online for a month, or are no longer in the guild.
    const rightNow = new Date();
    const toRemove = filtered.filter(data => {
      return !message.guild.members.has(data.user) || rightNow - 2500000009 > data.lastSeen;
	});

    toRemove.forEach(data => {
      client.inventory.delete(`${data.userID}-${message.guild.id}`);
    });

    message.channel.send(`I've cleaned up ${toRemove.size} old inventories.`);


    } else {

    const filtered = client.points.filter( p => p.guildID === message.guild.id );

    // We then filter it again (ok we could just do this one, but for clarity's sake...) 
    // So we get only users that haven't been online for a month, or are no longer in the guild.
    const rightNow = new Date();
    const toRemove = filtered.filter(data => {
      return !message.guild.members.has(data.user) || rightNow - 2500000009 > data.lastSeen;
});

    toRemove.forEach(data => {
      client.points.delete(`${data.userID}-${message.guild.id}`);
    });

    message.channel.send(`I've cleaned up ${toRemove.size} old scores.`);
}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "purge",
  category: "Administration",
  description: "Never Touch this. Ever.",
  usage: "purge"
};
