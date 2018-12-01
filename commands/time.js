var newDate = new Date();
var date1 = newDate.getHours();
var date2 = new Date('24:00:00 PM UTC'); // 5:00 PM

// the following is to handle cases where the times are on the opposite side of
// midnight e.g. when you want to get the difference between 9:00 PM and 5:00 AM

if (date2 < date1) {
    date2.setDate(date2.getDate() + 1);
}

var diff = 24 - date1;
var timecomment = [
	{ back: 'I believe in u! CX' },
	{ back: 'You did submit today, didnt you?'},
	{ back: 'You dont need to know the time because i know u are already on top of submitting. Right lasso?' }
	];
var randtimecomment = function() {

	var comment = timecomment[Math.floor(Math.random() * timecomment.length)]
	return formatcomment(comment)
};
function formatcomment(comment) {
		return [ 'It is **' + newDate + '**. Have you drawn today? You have **' + diff + ' hours** left to submit today. ' + comment.back + ''
		].join('\n')
};

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.send(randtimecomment()).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "time",
  category: "Art-related",
  description: "Need to know when the submission cutoff is? Type me!",
  usage: "time"
};
