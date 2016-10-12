$(document).ready(start);

function start() {
  console.log('working');
  $('#make-insult').click(writeInsult);
}

var insult = [
  "omnishambles","dingus","egg","foetus", "fart badger", "muppet", "nuff nuff","galah","nubbin","dingbat","dufus","dingleberry",
  "wally","dunderhead","eyesore","twit","meathead", "nugget","nerf herder","onion",
  "plum","cabbage","rocket-jockey","milquetoast","bong","chuff","butterknife","lemon","pilchard","swine",
]

var suggestion = [
  "Step on an upturned plug","Kindly die","Suck an exhaust pipe","Take a long walk off a short pier","Quit wasting oxygen",
  "Go make toast in a bathtub","Go play in traffic","Go headbutt a table saw", "Eat a cold pie","Get in the bin", "Get in the sea",
  "Gas yourself","Jog on","Eat a large cactus", "Kiss a ceiling fan", "Die in a fire","Face your inadequacies","Grow a friend",
  "Eat my shorts","Suck on a trumpet","Move to Chernobyl","Marry your aunt","I hope your stocks crash","Chew concrete","Kiss a jellyfish",
  "Pash a stingray","Draw your pension","Quit life","Give it up",
]

var verb =[
  "brown-nosing","double-dipping","useless","ignorant","dense","bog-licking","flip-flopping","unimaginable","idle-minded","terminal",
  "archaic","abominable","inept","fermenting", "ruttish", "glistening", "raging", "scruffy-looking", "horrendous","futureless",
  "ignoble","nebbish","rudderless","ineffectual","feckless","clownish","unwanted","cooked","cracked","musty",
]

function writeInsult() {
  var randomSuggestion = suggestion[Math.floor(Math.random() * suggestion.length)];
  var randomInsult = insult[Math.floor(Math.random() * insult.length)];
  var randomVerb = verb[Math.floor(Math.random() * verb.length)];
  var generatedInsult = (randomSuggestion + ', you ' + randomVerb + ' ' + randomInsult + '.');
  $('#generated-insult').html(generatedInsult);
  $('#twitter').removeClass('hide');
  $('.twitter-share-button').attr("href", 'https://twitter.com/intent/tweet?text=' + generatedInsult + ' -- Insult generator by @aimeemakes. https://carruthersandco.github.io/');
}
