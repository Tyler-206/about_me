'use strict';

var userPoints = 0;
var total = 7;

var user = prompt ('What is your name?');
console.log ('User\'s name is ' + user);

alert ('Hello ' + user + ' thank you for visiting my "about me" page, answer the next five questions to get to know me:');


var q1 = askQuestion('Does Tyler ride the bus to class? Answer yes or no');

if (checkAnswer(q1, 'yes')) {
  alert ('Correct! Great job ' + user + ', next question');
} else {
  alert ('Wrong, Tyler rides the bus becuase parking is too expensive! and theres crazy traffic to boot! Next question.');
};

var q2 = askQuestion('Is Tyler from Seattle?');
if (checkAnswer(q2, 'yes')) {
  alert ('Correct! Great job ' + user + ', next question.');
} else {
  alert ('Wrong, Tyler is in fact from Seattle, next question.');
};

var q3 = askQuestion('Is Tyler\'s favorite sports team the Seahawks?');
if (checkAnswer(q3, 'no')) {
  alert ('Correct! Great job ' + user + ', the Seahawks are Tyler\'s second favorite team. Tyler\'s favorite team is the Sounders, next question.');
} else {
  alert ('Wrong, The Seahawks are Tyler\'s second favorite team. Tyler\'s favorite team is the Sounders, next question.');
};

var q4 = askQuestion('Does Tyler have a dog named Woolly Mammoth? Answer yes or no', 'type yes or no' ).toLowerCase();
console.log ('Question 4: Does Tyler have a dog named Woolly Mammoth? ' + user + '\'s answer: ' + q4);

if (checkAnswer(q4, 'yes')) {
  alert ('Correct! Great job ' + user + ', next question.');
} else {
  alert ('Wrong, Tyler\'s dog is infact named Woolly Mammoth, next question.');
};


var q5 = askQuestion('Does Tyler have a cat named "cat"?');
if (checkAnswer(q5, 'no')) {
  alert ('Correct! Tyler\'s cat is named Dinosaur. Great job ' + user + ', thanks for taking a stab at these get to know me questions! Let\'s do a couple more');
} else {
  alert ('Wrong, Tyler\'s cat is named Dinosaur, thanks for trying to answer these get to know me questions! Let\'s do a couple more');
};

var tries = 1;

while (tries <= 4 && a6 !== 9){
  var q6 = prompt ('What is my favorite number?');
  var a6 = parseInt(q6);

  console.log ('Question 6: What is my favorite number? Try #: ' + tries + ' ' + user + '\'s answer: ' + q6);

  if (a6 < 9){
    alert ('Too low, try again! You have used ' + triesRemaining(tries, 4));
  } else if (a6 === 9){
    alert ('Good Job!');
    userPoints++;
  } else {
    alert ('Too high, try again! You have used ' + triesRemaining(tries, 4));
  }
  tries++;
}


alert('Final question, so far you have gotten ' + userPoints + ' out of ' + total + ' points!');

console.log (user + '\'s Points: ' + userPoints + ' out of ' + total);

tries = 1;
var states = ['missouri', 'new york', 'florida', 'california'];


var q7 = prompt ('What states have I lived in other than Washington?').toLowerCase();
while (tries <= 6 && states.indexOf(q7) === -1 ){

  console.log ('Question 7: What states have I lived in? Try #: ' + tries + ' ' + user + '\'s answer: ' + q7);

  alert ('Try again! You have used ' + triesRemaining(tries, 6));
  tries++;
  q7 = prompt ('What states have I lived in other than Washington?').toLowerCase();
}
if (states.indexOf(q7) !== -1) {
  alert ('Good Job!');
  userPoints++;
}
console.log (user + '\'s Points: ' + userPoints + ' out of ' + total);

alert('I have lived in Washington, Missouri, New York, Florida and California! ' + user + ', you answered ' + userPoints + ' out of ' + total + ' questions! Thanks for playing!!');



function checkAnswer(attempt, answer) {
  console.log(attempt, answer);
  if (attempt === answer || attempt === answer.slice(0,1)) {
    userPoints++;
    console.log ('Correct, ' + user + '\'s Points: ' + userPoints + ' out of ' + total);
    return(true);
  } else {
    console.log ('Wrong, ' + user + '\'s Points: ' + userPoints + ' out of ' + total);
    return(false);
  }
}

function askQuestion(question) {
  var attempt0 = prompt(question + '\n\nAnswer yes or no');
  while (!attempt0) {
    attempt0 = prompt(question + '\n\nAnswer yes or no');
  }
  console.log(question + user + '\s answer: ' + attempt0);
  return(attempt0.toLowerCase());
}

function triesRemaining(used, total) {
  return(used + ' out of ' + total + ' attempts');
}
