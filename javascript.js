let playerScore = 0;
let computerScore = 0;
const button = document.querySelectorAll('input');

//disable buttons after the game ends
function disableButton () {
    button.forEach(element => {
        element.disabled = true
    })
}

//input from computer
function getComputerChoice () {
   let choices = ['ROCK', 'PAPER', 'SCISSORS'];
   return choices[Math.floor(Math.random()*choices.length)];
}
//input from player
function playRound (playerSelection) {         
    let computerSelection = getComputerChoice();
    let result = '';
    
    if  ((playerSelection == 'ROCK' && computerSelection == 'PAPER') ||
         (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') ||
         (playerSelection == 'SCISSORS' && computerSelection == 'ROCK')) {

            playerScore += 1;
            result = ('YOU WIN THIS ROUND! ' + playerSelection + ' BEATS ' + computerSelection +
                       '<br><br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore);
            
            if (playerScore == 5) {
                result += '<br><br>YOU WIN THIS GAME!!! <br>Reload this page to play again';
                disableButton()
            }
    } 
    else if (playerSelection == computerSelection) {
    result = 'IT\S A DRAW! YOU BOTH PICKED ' + playerSelection +
             '<br><br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore;
    } 
    else {
    computerScore += 1;
        result = ('YOU LOSE THIS ROUND! ' + computerSelection + ' BEATS ' + playerSelection +
                   '<br><br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore);
            
        if (computerScore == 5) {
            result += '<br><br>YOU LOSE THIS GAME!!! <br>Reload this page to try again';
            disableButton()
        }
    }  

    document.getElementById('result').innerHTML = result
    return
} 

button.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
    })
});


 