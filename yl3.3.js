const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Täringute arv: " , täring =>{
    for (let i = 1; i <= täring; i++) {
        let nr = Math.ceil(Math.random()*6)
    
            console.log(nr)
          
        
     } 
     rl.close()
})