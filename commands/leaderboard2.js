exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const Discord = require("discord.js");
    // Get a filtered list (for this guild only), and convert to an array while we're at it.
    const filtered = client.points.filterArray( p => p.guildID === message.guild.id );

    // Sort it to get the top results... well... at the top. Y'know. 
    const sorted = filtered.sort((a, b) => b.points > a.points);

    // Slice it, dice it, get the top 30 of it!
    const top30 = sorted.splice(0, 30);
    //Defining roles
    const alleycats = message.guild.roles.find("name", "Alley Cats ฅ•ω•ฅ");
    const cc = message.guild.roles.find("name", "comfy-corpse");
    // Now shake it and show it! (as a nice embed, too!)
    const embed = new Discord.RichEmbed()
      .setTitle("Leaderboard")
      .setAuthor(client.user.username, client.user.avatarURL)
      .setDescription("Our top 30 submitters!")
      .setColor(0x00AE86);
    for(data of top30) {
    	/*if(data.users.roles.has(485840330701406241)) {
 		 // has one of the roles
	  		embed.addField("- shadmen - ");
	     	embed.addField(client.users.get(data.userID).tag, `${data.points} points ` );
	    }
	    else {
        if(message.member.roles.has(alleycats.id)) {
     // has one of the roles
        embed.addField("- Alley Cats - ");
        embed.addField(client.users.get(data.userID).tag, `${data.points} points ` );
      }
      else {
        if(message.member.roles.has(cc.id)) {
     // has one of the roles
        embed.addField("- comfy corpse - ");
        embed.addField(client.users.get(data.userID).tag, `${data.points} points ` );
      }
      else {
	    	embed.addField("No role ");*/
	    	embed.addField(client.users.get(data.userID).tag, `${data.points} points ` );
	    //}
    return message.channel.send({embed});
	// };
 // };
  };
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "leaderboard",
  category: "LAS-Houses",
  description: "Oh yeah baby. Leaderboards now.",
  usage: "leaderboard"
};
