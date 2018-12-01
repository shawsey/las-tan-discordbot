// Topic Random Picker Start
var topics = [
    { topic: 'machinery and mechs', comment: 'If you can draw these well then you can survive as a slave-artist to them after the AI takes over. xP' },
    { topic: 'people out and about', comment: 'Y-you do have a life beyond the tablet in your room, right?' },
    { topic: 'some environmental concept work', comment: ' These are always cool to draw!' },
    { topic: 'some bugs and insects', comment: ' They are so CUUUUTEEEEEE!' },
    { topic: 'some Superheroes', comment: ' - and.. I.. I just wanted to say you are my superhero s-senpai! <:animegirl:253713382287343626>' }, 
    { topic: 'mermaids', comment: 'Oooo, with some watercolor and ballpoint would look nice!' },
    { topic: 'Middle Eastern architecture', comment: ' How many times do I have to tell you? xP' },
    { topic: 'somethin **DEVILISH**', comment: ' <:hahueh:427250304845873153> ' },
    { topic: 'some fantasy creatures', comment: ' You *do* plan on making it right? <:hahueh:427250304845873153> ' },
    { topic: 'some plants today', comment: ' Remember to take care of Earth Chan too! <:owo:270308323595780097> ' },
    { topic: 'some clothes', comment: ' Your characters gotta look fraische ;) ' },
    { topic: 'an animal eating another animal', comment: 'If you cant do this then how can you survive in the predatorial art-industry?' },
    { topic: 'a dead bird in a beautiful landscape', comment: 'Nothings more marvelous than the the unity of life and death, right senpai?' },
    { topic: 'three existing animals to create a completely new creature', comment: 'You can really use your imagination with this one!' },
    { topic: 'a C-Clamp tightening on a banana', comment: ' Do it. ' },
    { topic: 'a piece of fruit every day until it becomes rotten', comment: ' You know, one day we all will rot away like that fruit. Thats just why we have to make the most of today lasso!' },
    { topic: 'a watch or another piece of jewelry', comment: ' Speaking of which, my birthday is coming up. *Wink Wink* :)' },
    { topic: 'a detailed drawing of a rock', comment: 'Lots of people tell me rocks are boring but I dont think so. You arent boring either lasso!' },
    { topic: 'an empty room. ', comment: 'Make it interesting.' },
    { topic: ' a new sport.', comment: 'You can improve an existing sport, combine two existing sports, or come up with something completely new. You have got this!  ' },
    { topic: 'something that is completely and utterly impossible', comment: 'Wait, but if you draw something impossible, then it becomes possible as it is seen right there, but then it should be impossible to see such an impossibility. Hmm. ' },
    { topic: 'your greatest fear', comment: 'Talk about some stimuli desensitation!' },
    { topic: 'something you keep putting off, or something that causes you to procrastinate.', comment: 'Its time to make amends lasso, tell us why you havent been drawing enough today? '},
    { topic: 'something soothing', comment: 'Seeing you draw always soothes me! <:uwu:230870933613707264>' },
    { topic: 'a building lobby with a high twisting stairwell.', comment: ' You have this in the bag lasso!' },
    { topic: 'a city street at night full of different people and languages', comment: ' You have this in the bag lasso!' },
    { topic: 'an ancient house with magic in its very walls', comment: ' You have this in the bag lasso!' },
    { topic: 'an empty public place at night', comment: ' You have this in the bag lasso!' },
    { topic: 'a ruined cathedral', comment: ' You have this in the bag lasso!' },
    { topic: 'the ruined parts of a city', comment: ' You have this in the bag lasso!' },
    { topic: 'a medieval society', comment: ' You have this in the bag lasso!' },
    { topic: 'a gas station in the middle of nowhere', comment: ' You have this in the bag lasso!' },
    { topic: 'an oasis in the midst of a wasteland', comment: ' You have this in the bag lasso!' },
    { topic: 'the Malabar Coast', comment: ' I know, I know, oddly specific. Go google it and you will see why I picked it for you!' },
    { topic: 'an abandoned monastery', comment: ' You have this in the bag lasso! ' },
    { topic: 'vehicles in motion', comment: ' You have this in the bag lasso!' },
    { topic: 'a kung-fu fight', comment: ' You have this in the bag lasso!' },
    { topic: 'the fragment of a dream', comment: ' You have this in the bag lasso!' },
    { topic: 'a landscape lost in mist', comment: ' You have this in the bag lasso!' },
    { topic: 'a dramatic death scene', comment: ' You have this in the bag lasso!' },
    { topic: 'unrequited love', comment: ' You have this in the bag lasso!' },
    { topic: 'impending doom', comment: ' You have this in the bag lasso!' },
    { topic: 'an aging dragon sleeping in its trove of money and treasure', comment: ' You have this in the bag lasso! ' },
    { topic: 'a water serpent, rising from a fountain hidden deep in its dungeon', comment: ' You have this in the bag lasso!' },
    { topic: 'a gathering of thieves to plan a heist, none of them trust each other', comment: ' You have this in the bag lasso!' },
    { topic: 'a Botanic Shop', comment: ' You have this in the bag lasso!' },
    { topic: 'an unfinished Museum being broken into at night', comment: ' You have this in the bag lasso!' },
    { topic: 'a Frozen Metro as an explorer trudges through its tunnels', comment: ' You have this in the bag lasso!' },
    { topic: 'a Viking Archmage admist a battle ', comment: ' You have this in the bag lasso!' },
    { topic: 'me some potions! lasso! I NEED HEALING!  and poisons for later.. ', comment: ' <:hahueh:427250304845873153> ' },
    { topic: ' us some gas masks quick lasso!', comment: ' You do smell that dont you? P h e w!  ' },
    { topic: 'some hands and arms', comment: ' Did you think I wouldnt notice you havent drawn hands lately? Get to it!  ' },
    { topic: 'me a fluffy jacket', comment: ' I...lasso...its getting cold... ' },
    { topic: 'a BOOBY TRAP', comment: ' NOW! ' },
    { topic: 'a Smug Devil', comment: ' Sound familiar? <:hahueh:427250304845873153> ' },

]


var senpapiidea = [
{ topic: 'machinery and mechs', comment: 'charcoal' }]

var randtopic = function() {

    var idea = topics[Math.floor(Math.random() * topics.length)]
    return formatIdea(idea)
}


function formatIdea(idea) {
    return [ 'You know, it would be cool to see you draw ' + idea.topic + '! ' + idea.comment + ''
    ].join('\n')
}

// Topic End 

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    message.channel.send(randtopic());  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "topic",
  category: "Art-related",
  description: "Missing some art ideas? I have over 50 for you to try!",
  usage: "topic"
};
