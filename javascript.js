
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


let playerWins = 0;
let computerWins = 0;


function rockPaperScissors(playerSelection, computerSelection) {
    if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors' || playerSelection === null)) {
        console.log('wrong entry try again');
    }
    else if (playerSelection === computerSelection) {
        console.log('its same choice');
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        console.log(`COMPUTER WINS! ${computerSelection} beats ${playerSelection}`);
        computerWins = computerWins + 1;
    }
    else {
        console.log(`YOU WIN! ${playerSelection} beats ${computerSelection}`);
        playerWins = playerWins + 1;
    }
}


function game() {
    let bool = true;
    while (bool) {
        if (!(playerWins === 5 || computerWins === 5)) {
            playerSelection = prompt("enter rock,paper or scissors").toLowerCase();
            computerSelection = getComputerChoice();
            rockPaperScissors(playerSelection, computerSelection);
        }
        else {
            bool = false;
        }
    }
    if (playerWins === 5) {
        alert("human won");
    }
    else {
        alert('machine won');
    }
}
