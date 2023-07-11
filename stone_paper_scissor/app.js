// function to be created -->
// 1. take user's choice
// 2. compute computer's choice
// 3. decide winner on the basis of choices
// 4.looping the game and let user end the game when he/she wants

// taking readline-sync module to take data from the user
let readlineSync = require('readline-sync');

// 1. take user's choice
const takeUserChoice = () => {
  let userInput, userChoice;
  console.log('Options [stone - [1] | paper -[2] | scissor -[3]]');
  userInput = parseInt(readlineSync.question('Enter your choice : '));

  // connverting nummeric input into string data
  if (userInput === 1) {
    userChoice = 'stone';
  } else if (userInput === 2) {
    userChoice = 'paper';
  } else if (userInput === 3) {
    userChoice = 'scissor';
  } else {
    console.log('invalid input please Re-enter');
    return;
  }

  return userChoice;
};

// 2. compute computer's choice
const takeComputerChoice = () => {
  let computerInput, computerChoice;
  computerInput = Math.floor(Math.random() * (4 - 1) + 1);

  // connverting nummeric input into string data
  if (computerInput === 1) {
    computerChoice = 'stone';
  } else if (computerInput === 2) {
    computerChoice = 'paper';
  } else if (computerInput === 3) {
    computerChoice = 'scissor';
  } else {
    console.log('invalid input please Re-enter');
    return;
  }

  return computerChoice;
};

// 3. decide winner on the basis of choices
const decideWinner = (userC, compC) => {
  if (
    (userC === 'stone' && compC === 'scissor') ||
    (userC === 'paper' && compC === 'stone') ||
    (userC === 'scissor' && compC === 'paper')
  ) {
    return 'User wins !!';
  } else if (
    (userC === 'stone' && compC === 'stone') ||
    (userC === 'paper' && compC === 'paper') ||
    (userC === 'scissor' && compC === 'scissor')
  ) {
    return 'Match draw !!';
  } else if (
    (userC === 'stone' && compC === 'paper') ||
    (userC === 'paper' && compC === 'scissor') ||
    (userC === 'scissor' && compC === 'stone')
  ) {
    return 'Computer Wins !! [Better luck next time..]';
  } else {
    return 'code 404 Not Found { check your code }';
  }
};

// 4.looping the game and let user end the game when he/she wants
while (true) {
  let wish = readlineSync.question('Wanna play (y/n) : ');
  if (wish === 'y') {
    let userChoice = takeUserChoice();
    let computerChoice = takeComputerChoice();
    let winner = decideWinner(userChoice, computerChoice);
    console.log('------------------------------------');
    console.log(`you - ${userChoice} and comp - ${computerChoice}`);
    console.log(`winner is ${winner}`);
    console.log('------------------------------------');
  } else {
    break;
  }
}
