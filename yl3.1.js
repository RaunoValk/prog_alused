const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Äratuste arv: " , äratus =>  {
   

    
    for (let i = 1; i <= äratus; i++) {

       console.log("Tõuse ja sära!")
    } 
rl.close()
})