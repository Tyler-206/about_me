'use strict';

var user = prompt ('What is your name?');

alert ('Hello ' + user + ' thank you for visiting my "about me" page, answer the next five questions to get to know me:');

var q1 = prompt ('Does Tyler ride the bus to 201? Answer yes or no', 'type yes or no') .toLowerCase();
console.log (q1);

if (q1 === 'yes' || q1 === 'y') {
  alert ('Correct! Great job ' + user + ', next question');
} else {
  alert ('Wrong, tyler rides the bus becuase parking is too expensive! and theres crazy traffic to boot! Next question.');
};

var q2 = prompt ('Is Tyler from Seattle? Answer yes or no', 'type yes or no').toLowerCase();
console.log (q2);

if (q2 === 'yes' || q2 === 'y') {
  alert ('Correct! Great job ' + user + ', next question.');
} else {
  alert ('Wrong, Tyler is in fact from Seattle, next question.');
};

var q3 = prompt ('Is Tyler\'s favorite sports team the Seahawks? Answer yes or no', 'type yes or no').toLowerCase();
console.log (q3);

if (q3 === 'no' || q3 === 'n') {
  alert ('Correct! Great job ' + user + ',the Seahawks are Tyler\'s second favorite team. Tyler\'s favorite team is the Sounders, next question. Next question.');
} else {
  alert ('Wrong, The Seahawks are Tyler\'s second favorite team. Tyler\'s favorite team is the Sounders, next question.');
};

var q4 = prompt ('Does Tyler have a dog named Woolly Mamoth? Answer yes or no', 'type yes or no' ).toLowerCase();
console.log (q4);

if (q4 === 'yes' || q4 === 'y') {
  alert ('Correct! Great job ' + user + ', next question.');
} else {
  alert ('Wrong, Tyler\'s dog is infact named Woolly Mammoth, next question.');
};

var q5 = prompt ('Final question: Does Tyler have a cat named "cat"? Answer yes or no', 'type yes or no').toLowerCase();
console.log (q5);

if (q5 === 'no' || q5 === 'n') {
  alert ('Correct! Tylers cat is not named, "cat" his name is Dinosaur. Great job ' + user + ', thanks for taking a stab at these get to know me questions!');
} else {
  alert ('Wrong, Tyler\'s cat is named Dinosaur, thanks for trying to answer these the get to know me questions!');
};
