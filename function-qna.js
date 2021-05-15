var readlineSync = require("readline-sync");

var score=0;
 function play(question,answer){
     var username = readlineSync.question(question)
     if (useAnswer ===answer){
         console.log("you were right!");
         score+=1;

     }
     else{
         console.log("you were wrong!");
         score-=1;
     }

 }
play("where do i work?", "cisco");
play("where do i live?", "mumbai");
