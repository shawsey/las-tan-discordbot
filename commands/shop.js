
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  // Limited to guild owner - adjust to your own preference!
    // if(!message.author.id === message.guild.owner) return message.reply("You're not the boss of me, you can't do that!");
    
    let itemSelection = args[0];
    if (itemSelection == 1) {
      // Get their current points.
      const userPoints = client.points.get(`${message.author.id}-${message.guild.id}`);
      userPoints.points = [ Number(userPoints.points) - 30 ]

      // And we save it!
      client.points.set(`${message.author.id}-${message.guild.id}`, userPoints);

    message.reply(`check1`);
    const userinventory = client.inventory.get(`${message.author.id}-${message.guild.id}`);
    message.reply(`check2`);
    userinventory.item[0] = "Spook Spear"
    message.reply(`check3`);
    userinventory.description[0] = "A spear made from the bones of a youngin' who dooted too hard. Quite sad. Great weapon though. "
    message.reply(`check4`);
    // And we save it!
    client.inventory.set(`${message.author.id}-${message.guild.id}`, userinventory);
    message.reply(`check5`);
    message.reply(`${user.tag} has been deducted ** 30 points.  enjoy your new item!**`);
      };
    if (!itemSelection) {

      message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Shopkeeper",
        icon_url: client.user.avatarURL
      },
      
      description: "Ahoy, young artventurers! I have a fine selection of items for you to buy, oh yes I do!",
      fields: [{
          name: "Item #1 -- Spook Spear - 30 Points",
          value: "A spear made from the bones of a youngin' who dooted too hard. Quite sad. Great weapon though. "
        },
        {
          name: "Item #2 -- Spook Armor - 70 Points",
          value: "A set of bone-touselin' armor, it came from a noble who drank a lot of milk so it is surprisingly strong. "
        },
        {
          name: "Item #3 -- Helm of Spooktober - 100 Points ",
          value: "All who see this helm tremble and are spooked by it's wearers raw power. "
        }
      ],
      description: "See an item you want? Type shop (Item number#) and you can buy it! So long as you have the points, of course..."
    }
  });
}
    

    

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "shop",
  category: "Artventuring",
  description: "Looking for the best shop to buy all your artventuring gear? Look no farther. ",
  usage: "shop"
};
