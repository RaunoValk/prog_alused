const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisesta õhutemperatuur: " ,  temp =>{
    if (temp > 4){
        console.log("Ei ole jäätumise ohtu!")
        } else {
            console.log("Jäätumise oht!")
        } 
        rl.close()
        
        
    })