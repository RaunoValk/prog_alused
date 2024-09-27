const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Sisestage enda vanus: ", vanus=>{
  rl.question("Sisestage enda sugu: ", sugu=>{
    rl.question("Sisestage treeningu tüüp: ", tüüp=>{
      let pulss
      let minvahemik
      let maxvahemik
      if(sugu== "M" || sugu== "m"){
        pulss= 220 - vanus} 
        else if(sugu== "N" || sugu== "n"){
        pulss= 206 - vanus * 0.88}
        
        if(tüüp == 1){
          minvahemik=pulss * 0.5
          maxvahemik=pulss * 0.7
        }
        else if(tüüp == 2){
          minvahemik=pulss * 0.7
          maxvahemik=pulss *0.8
        } 
        else if(tüüp == 3){
          minvahemik=pulss * 0.8
          maxvahemik=pulss *0.87
       }
       console.log(`Pulsisagedus peaks olema vahemikus ${Math.round(minvahemik)} ja ${Math.round(maxvahemik)}.`)
          rl.close()
        }) 
        }) 
})