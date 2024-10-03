const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Äratuste arv: " , äratus =>  {
   const numäratus = parseInt(äratus, 10)
   if(isNaN(numäratus)|| numäratus < 0 || numäratus == 0){
    console.log("Sisestage positiivne number!")
    rl.close()
    
   } else{

    
    for (let i = 0; i < äratus; i++) {

       console.log("Tõuse ja sära!")
rl.close()
}}})