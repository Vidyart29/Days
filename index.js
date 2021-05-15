var readlineSync = require('readline-sync');

var score = 0;


var questionOne = "Am I older than 25? ";
var answerOne = "yes";



function play(question, answer) {
  // input
  var userAnswer = readlineSync.question(questionOne);

  console.log("You entered " + userAnswer);

  // processing
  if (userAnswer === answerOne) {
    // output
    console.log("You are right!");
    score = score + 1;
    console.log("Score is: " + score)
  } else {
    // output
    console.log("You are wrong!");
    score = score - 1;
    console.log("Score is: " + score)
  }
}

// for questionTwo
var readlineSync = require('readline-sync');
var score = 0;
var questionTwo = "Am I older than 25? ";
var answerTwo = "yes";

function play(question, answer) {
  // input
  var userAnswer = readlineSync.question(questionOne);

  console.log("You entered " + userAnswer);

  // processing
  if (userAnswer === answerOne) {
    // output
    console.log("You are right!");
    score = score + 1;
    console.log("Score is: " + score)
  } else {
    // output
    console.log("You are wrong!");
    score = score - 1;
    console.log("Score is: " + score)
  }
}



// play(questionOne, answerOne)
// var questionTwo = "Am I from the city Mirzapur? ";
// var answerTwo = "no";

// play(questionTwo, answerTwo)