const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage oma perekonnanimi: ", perekonnanimi =>{
    if(perekonnanimi.slice(-2)== "ne"){
        console.log("Abielus!")
    } 
    else if(perekonnanimi.slice(-2)== "te"){
        console.log("Vallaline!")
    } 
    else if(perekonnanimi.slice(-1)== "e"){
        console.log("Määramata!")
    } else {
        console.log("Pole leedulanna!")
    } 
    rl.close()
})