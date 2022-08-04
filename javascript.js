//input from computer
function getComputerChoice () {
    let randomNumber = Math.random();
    if (randomNumber <= 0.333) {
        return 'rock'
    } else if (randomNumber >= 0.667) {
        return 'paper'
    } else {return 'scissors'}
   
}
//input from player

function playRound (playerSelection, computerSelection) {         
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
          return 'It\'s a tie';
      } else if (computerSelection === 'paper') {
          computerScore++;
          return lose;
      } else {
          userScore++;
          return win; 
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
          userScore++;
          return win;
        } else if (computerSelection === 'paper') {
          return tie;
        } else {
          computerScore++;
          return lose;
          
        }
    }
    else if (playerSelection === 'scissors') {
       if (computerSelection === 'rock') {
          computerScore++;  
          return lose;
     } else if (computerSelection === 'paper') {
          userScore++;  
          return win;
     } else {
          return tie;}
    }

} 
let win = 'You Win!';
let lose = 'You Lose!';
let tie = 'It\s A Tie!';
let userScore = parseInt(0);
let computerScore = parseInt(0);

let playerSelection = prompt('Type in rock, paper, or scissors').toLowerCase();
let computerSelection = getComputerChoice();
console.log('You picked ' + playerSelection);
console.log('Computer picked ' + computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log('You ' + userScore + ' - ' + computerScore + ' Computer')

 