const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Mitu pöialpoissi tahab õunu: ", poisid =>{
let õunad= 14
for(let i = 1; i <= poisid; i++){
    

   console.log(i+ ".pöialpoiss")
   let õunadpoistele = Math.ceil(Math.random()*2)
   console.log(õunadpoistele)
   õunad = õunad - õunadpoistele
}
 console.log("Lumivalgekesele on jäänud " + õunad + " õuna.")

rl.close()
}) 