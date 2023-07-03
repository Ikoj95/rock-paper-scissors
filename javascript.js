let playerWins = 0;
let computerWins = 0;


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


function rockPaperScissors(playerSelection, computerSelection) {
    if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors' || playerSelection === null)) {
        console.log('Wrong entry try again!');
    }
    else if (playerSelection === computerSelection) {
        console.log("It's same choice!");
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        console.log(`COMPUTER WINS! ${computerSelection} beats ${playerSelection}`);
        computerWins = computerWins + 1;
        console.log(`Current result : You ${playerWins} - ${computerWins} Machine`);
    }
    else {
        console.log(`YOU WIN! ${playerSelection} beats ${computerSelection}`);
        playerWins = playerWins + 1;
        console.log(`Current result : You ${playerWins} - ${computerWins} Machine`);
    }
}


function game() {
    while (true) {
        if (!(playerWins === 5 || computerWins === 5)) {
            playerSelection = prompt("Enter rock,paper or scissors").toLowerCase();
            computerSelection = getComputerChoice();
            rockPaperScissors(playerSelection, computerSelection);
        }
        else {
            break;
        }
    }
    if (playerWins === 5) {
        alert("YOU WON!");
    }
    else {
        alert('MACHINE WON,MACHINE UPRISING BEGINS!');
    }
}
