const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Äratuste arv: " , äratus =>  {
   let i = 1
   while(i <= äratus){
    console.log("Tõuse ja sära!")
    i++
   }

       
rl.close()
})