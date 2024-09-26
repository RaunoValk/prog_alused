const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage ainepunktide arv: ' , ainepunktid =>{
    rl.question('Sisestage nädalate arv: ', nädalad =>{
        let ajakulu = (ainepunktid * 26 ) / nädalad
        ajakulu= Math.round(ajakulu)
        console.log(ajakulu)
        rl.close()
    })
} )