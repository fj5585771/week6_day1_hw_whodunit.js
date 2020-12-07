// Episode 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// prediction: expression contained within variable that will return scenario murderer key value 'Miss Scarlet'

// Episode 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// prediction: INCORRECT- const verdict variable of declareMurderer() function expression cements global changes through invoking of changeMurderer().  Mrs Peacock will be returned.   CORRECT: const variable outside all function expressions claims priority.  TypeError in changeMurderer() function expression without assigned scope to murderer variable.

// Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// prediction: first log of declareMurderer function expression returns locally defined variable of Mrs Peacock.  second will return defined value of scope outwith previous function expression i.e. Professor Plum.

// Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// prediction: INCORRECT- Colonel Mustard is assigned suspectThree status within local scope of the function expression.  Once logged, it is calling this variable specifically alongside other defined variables.  CORRECT - additional logging of suspect three without reference to suspects object of function expression, so Mrs Peacock is shown seperately.

// Episode 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// prediction: reassigned 'scenario' key value 'weapon' through 'changeWeapon' function expression, will log out as part of declareWeapon anonymous function

// Episode 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// prediction: INCORRECT - changeMurderer and plotTwist function amendedments havent been assigned scope. logging of variable instance declareMurderer function will return Colonel Mustard;  CORRECT - globally defined let variable does not take precedence.  changeMurderer with block code plotTwist function takes effect after declareMurderer function is logged

// Episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// prediction: INCORRECT - declareMurderer overides changeMurderer expression and Professor Plum is called instead of Colonel Mustard. CORRECT - plotTwist and unexpected outcome are within scope of those functions respectivelly. declareMurderer function, once logged, returns variable with largest scope.

// Episode 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock'; //changes object key value to Mrs Peacock
//   scenario.room = 'Dining Room'; //changes object key value to Dining Room

//   const plotTwist = function(room) {
//     if (scenario.room === room) {   // this object key value is equla to function argument invokved
//       scenario.murderer = 'Colonel Mustard';   // Changes murderer in conditional statement
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) { // conditional statement is true and weapon changed appropriately.
//         scenario.weapon = 'Candle Stick'; 
//       }
//     }

//     unexpectedOutcome('Colonel Mustard'); 
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.` 
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// prediction: declareWeapon expression returns Candle Stick

// Episode 9

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// prediction: INCORRECT - murderer is Mrs Peacock, as conditional statement returns met clause to change value of murderer variable. Neither are inside a function, so both codeblocks are considered as part of exercise. CORRECT - contained Mrs Peacock local variable in conditional statement cant affect outcome of invoked expression contained in immutable variable 