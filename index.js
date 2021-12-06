const information = require('./information') 
const cowsay = require("cowsay")

// console.log(information) 

console.log(cowsay.say({
    text : `Hello I'm ${information.nom} from ${information.campus}`,
    e : "oO",
    T : "U"
 }));
