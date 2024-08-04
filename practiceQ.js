
 ////Q1.
// for(let i=1;i<=100;i++){
//     if(i%2==0) console.log("num=",i);
// }
    ////Q2.
    let gamenum=45;
    let userno = prompt("Guess the game number: ");

    while(userno!=gamenum){
        userno=prompt("You entered wrong number.Guess again: ");
    }
    console.log("congratulations,you entered the right number");