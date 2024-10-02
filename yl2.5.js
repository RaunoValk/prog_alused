const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Kirja suurus:" , suurus=>{
    rl.question("Pealkiri:" , pealkiri=> {
        rl.question("Fail:" , fail=> {

if( suurus <= 1 && pealkiri !== "" && fail == "jah"){




    console.log("Kiri ei ole spamm.")
 } else {
            console.log("Kiri on spamm.")
        }        
rl.close()
        })
    } )
} ) 