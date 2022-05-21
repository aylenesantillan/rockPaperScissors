// generates computer choice

const getComputerChoice = randNum  => {

  randNum = Math.floor(Math.random() * 3);

    switch(randNum){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
    }
}

// determines winner for the game, taking userChoice and computerChoice as parameters

const determineWinner = (userChoice, computerChoice) => {

    console.log('Computer chooses: ' + computerChoice); // used in order to show computer choice
    
    if(userChoice === computerChoice){
        return 'This game is a tie!';
    }
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'Sorry, computer won!';
        }
        else{
            return 'Congratulation! You won!';
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors') {
            return 'Sorry, computer won!';
        }
        else{
            return 'Congratulation! You won!';
        }
    }

    if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'Sorry, computer won!';
        }
        else{
            return 'Congratulations! You won!';
        }
    }
}

/** gathering computer choice from function, then prompting the user to pick rock paper or scissors
    if user input is valid, then follow through and use determineWinner function
    if user input is not valid, exit program
**/
const computerChoice = getComputerChoice();
const prompt = require('prompt-sync')();
let userChoice = prompt('Lets play rock paper scissors! Choose: rock, paper, or scissors: ');
userChoice = userChoice.toLowerCase();

   if(`${userChoice}` === 'rock' || `${userChoice}` === 'scissors' || `${userChoice}` === 'paper'){
        return console.log('You chose: ' + userChoice + '\n' + determineWinner(userChoice, computerChoice));
    }
    else{
        return console.log('Error, invalid input! Run again to play.');
    }
