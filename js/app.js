'use strict';

var userPoints = 0;
var total = 7;

var user = prompt ('What is your name?');
console.log ('User\'s name is ' + user);

alert ('Hello ' + user + ' thank you for visiting my "about me" page, answer the next five questions to get to know me:');

var q1 = prompt ('Does Tyler ride the bus to class? Answer yes or no', 'type yes or no') .toLowerCase();
console.log ('Question 1: Does Tyler ride the bus to class? ' + user + '\'s answer: ' + q1);

if (q1 === 'yes' || q1 === 'y') {
  alert ('Correct! Great job ' + user + ', next question');
  userPoints++;
} else {
  alert ('Wrong, Tyler rides the bus becuase parking is too expensive! and theres crazy traffic to boot! Next question.');
};

console.log (user + '\'s Points: ' + userPoints + ' out of ' + total);

var q2 = prompt ('Is Tyler from Seattle? Answer yes or no', 'type yes or no').toLowerCase();
console.log ('Question 2: Is Tyler from Seattle? ' + user + '\'s answer: ' + q2);

if (q2 === 'yes' || q2 === 'y') {
  alert ('Correct! Great job ' + user + ', next question.');
  userPoints++;
} else {
  alert ('Wrong, Tyler is in fact from Seattle, next question.');
};

console.log (user + '\'s Points: ' + userPoints + ' out of ' + total);

var q3 = prompt ('Is Tyler\'s favorite sports team the Seahawks? Answer yes or no', 'type yes or no').toLowerCase();
console.log ('Question 3: Is Tyler\'s favorite sports team the Seahawks? ' + user + '\'s answer: ' + q3);

if (q3 === 'no' || q3 === 'n') {
  alert ('Correct! Great job ' + user + ', the Seahawks are Tyler\'s second favorite team. Tyler\'s favorite team is the Sounders, next question.');
  userPoints++;
} else {
  alert ('Wrong, The Seahawks are Tyler\'s second favorite team. Tyler\'s favorite team is the Sounders, next question.');
};

console.log (user + '\'s Points: ' + userPoints + ' out of ' + total);

var q4 = prompt ('Does Tyler have a dog named Woolly Mammoth? Answer yes or no', 'type yes or no' ).toLowerCase();
console.log ('Question 4: Does Tyler have a dog named Woolly Mammoth? ' + user + '\'s answer: ' + q4);

if (q4 === 'yes' || q4 === 'y') {
  alert ('Correct! Great job ' + user + ', next question.');
  userPoints++;
} else {
  alert ('Wrong, Tyler\'s dog is infact named Woolly Mammoth, next question.');
};

console.log (user + '\'s Points: ' + userPoints + ' out of ' + total);

var q5 = prompt ('Does Tyler have a cat named "cat"? Answer yes or no', 'type yes or no').toLowerCase();
console.log ('Question 5: Does Tyler have a cat named "cat"? ' + user + '\'s answer: ' + q5);

if (q5 === 'no' || q5 === 'n') {
  alert ('Correct! Tyler\'s cat is named Dinosaur. Great job ' + user + ', thanks for taking a stab at these get to know me questions! Let\'s do a couple more');
  userPoints++;
} else {
  alert ('Wrong, Tyler\'s cat is named Dinosaur, thanks for trying to answer these get to know me questions! Let\'s do a couple more');
};

console.log (user + '\'s Points: ' + userPoints + ' out of ' + total);


var tries = 1;

while (tries <= 4 && a6 !== 9){
  var q6 = prompt ('What is my favorite number?');
  var a6 = parseInt(q6);

  console.log ('Question 6: What is my favorite number? Try #: ' + tries + ' ' + user + '\'s answer: ' + q6);

  if (a6 < 9){
    alert ('Too low, try again! You have used ' + tries + ' out of 4 attempts');
  } else if (a6 === 9){
    alert ('Good Job!');
    userPoints++;
  } else {
    alert ('Too high, try again! You have used ' + tries + ' out of 4 attempts');
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

  alert ('Try again!');
  tries++;
  q7 = prompt ('What states have I lived in other than Washington?').toLowerCase();
}
if (states.indexOf(q7) !== -1) {
  alert ('Good Job!');
  userPoints++;
}
console.log (user + '\'s Points: ' + userPoints + ' out of ' + total);

alert('I have lived in Washington, Missouri, New York, Florida and California! ' + user + ', you answered ' + userPoints + ' out of ' + total + ' questions! Thanks for playing!!');
