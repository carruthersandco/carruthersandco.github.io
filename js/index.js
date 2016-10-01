$(document).ready(start);

function start() {
  console.log('working');
  $('#make-insult').click(writeInsult);
}

var insult = [
  "omnishambles","dingus","egg","foetus", "fart badger", "muppet", "nuff nuff","galah","nubbin","dingbat","dufus","dingleberry","wally","dunderhead","eyesore","twit","meathead", "nugget","nerf herder",
]

var suggestion = [
  "Step on an upturned plug","Kindly die","Suck an exhaust pipe","Take a long walk off a short pier","Stop wasting oxygen","Go make toast in a bathtub","Go play in traffic","Go headbutt a table saw", "Eat a cold pie","Get in the bin", "Get in the sea","Gas yourself","Jog on","Eat a large cactus"
]

var verb =[
  "brown-nosing","double-dipping","useless","ignorant","dense","bog-licking","flip-flopping","unimaginable","idle-minded","terminal", "archaic","abominable","inept","fermenting", "ruttish", "glistening", "raging", "scruffy-looking", "horrendous",
]

function writeInsult() {
  var randomSuggestion = suggestion[Math.floor(Math.random() * suggestion.length)];
  var randomInsult = insult[Math.floor(Math.random() * insult.length)];
  var randomVerb = verb[Math.floor(Math.random() * verb.length)];
  $('#generated-insult').html(randomSuggestion + ', you ' + randomVerb + " " + randomInsult + ".")
  }
