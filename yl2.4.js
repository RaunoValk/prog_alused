const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let nr = Math.ceil(Math.random()*3);
rl.question("Ise või loos?" , valik =>{
    if(valik == "ise")  {
        rl.question("Aken või muu?" , aken => {
            if(aken == "aken") {
                console.log("Valisite ise aknakoha!");
    } else {
                console.log("Valisite ise vahekaigukoha!");
            }
            rl.close();
});

} else if(valik == "loos")  { 
        if(nr == 1 ){
            console.log("Teile loositi aknakoht!");
        }
            else {
                console.log("Teile loositi vahekaigukoht!");
                
            }
            
        rl.close();
        } else {
            console.log("Sisestage ise voi loos.");
            rl.close();
        }


});
