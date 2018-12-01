exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  var inspiring = [
	{ front: 'YOU can do it ', back: '!  I believe in you!' },
	{ front: 'Keep drawing ', back: '!  It looks pretty!' },
	{ front: 'Dont give up ', back: '!  With enough practice u can achive your goals!' },
	{ front: 'Keep at it ', back: '! You will succeed at your goals, I am sure of it! X]' },
  { front:'"Jumping from failure to failure with undiminished enthusiasm is the big secret to success. - Savas Dimopoulos.  ', back: ', you should listen to him and surely you will succeed! <3 '},
  { front:'“Never let success get to your head, and never let failure get to your heart.” - Drake.   ', back:', do you love me? '},
  { front:'“You cant use up creativity. The more you use, the more you have.” - Maya Angelou    ', back:', she seems to know what shes talking about! '},
  { front:'“Don’t give up trying to do what you really want to do.” - Ella Fitzgerald    ', back:', you know what you want to do, so listen to her! Dont give up!'},
  { front:'“We are both dragon energy.” - Kanye.   ', back:', what more needs to be said?'},
  { front:'Listen ', back:', in this world its either yeet or be yeeted.'},
  { front:'Youre going to make it ', back:', I beleive in you!'},
  { front:'Ganbatte ', back:'!'},
  { front:'“It does not matter how slowly you go as long as you do not stop.” - Confucius.    ', back:', take your time but never stop!'},
  { front:'Well done ', back:'!'},

  { front:'“Step by step and the thing is done.” - Charles Atlas.    ', back:', small steps to bigger things is the way to go!'},
  { front:'Keep flexing those art muscles ', back:'!'},
  { front:'Row row, FIGHT THE POWAH ', back:'!'},

  { front:'', back:', Error Loading: Unable to load command inspire: SyntaxError: Work too beautiful'},
  { front:'Achieve your dreams ', back:'!'},
  { front:'Wow ', back:'! Great moves, keep it up, proud of you!'},
  { front:'', back:', My wife left me.'},

  { front:'Stay hydrated ', back:'!'},
  { front:'Right on ', back:'!'},
  { front:'', back:', Make sure youre getting enough sleep every night!'},

  { front:'', back:', Hashtag EPIC!! Ha ha, just kidding. Good job though.'},
  { front:'', back:', Cha cha real smooth'},
  { front:'', back:', Im so happy you submitted something today!'},
  { front:'', back:', Draw!! Draw with your beautiful hands!!'},

  { front:'', back:', Stretch your wrists for every 2 hours that you draw :)'},

  { front:'', back:', fantastic!'},

  { front:'', back:', bellissimo!'},

  { front:'', back:', did you know NicNacs favorite holiday is Christmas? ' },

];

  var randinspire = function() {

	var quote = inspiring[Math.floor(Math.random() * inspiring.length)]
	return formatquote(quote)
};
  function formatquote(quote) {
		return [ '' + quote.front + message.member + quote.back + ''
		].join('\n')
};
// Inspire End

  message.channel.send(randinspire());
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "inspire",
  category: "Art-related",
  description: "Having a bad day? This might just help it. Just a bit.",
  usage: "inspire"
};