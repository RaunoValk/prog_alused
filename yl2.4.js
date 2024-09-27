const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(" Ise või loos? " , valik=>{
    rl.question(" Aken või muu? " , aken=>{

if(valik == "ise")
    console.log("Valisite ise.")
else if(valik == "loos")
    console.log("Istekoht loositi.")
rl.close()
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    } )

} ) 

let nr = Math.ceil(Math.random()*3)
console.log(nr)
rl.close()