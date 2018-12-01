exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars


 /* LAS HOUSE POINT FUNCTIONS */
  // This is an in works miniproject, lets pray to sweet Korean baby jesus that it will work. 
 client.inventoryMonitor(client, message, args);
  // Point Fucntion END

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "inventory",
  category: "Artventuring",
  description: "Use this to check your inventory",
  usage: "points"
};
