const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let summa = 0
rl.question("Ringide arv: ", arv =>{
for (let ring = 1; ring <= arv; ring++){
    if ( ring % 2 == 0){
    summa = summa + ring
}} 
   console.log(`Porgandite koguarv ${summa}`)
   rl.close() 

})
