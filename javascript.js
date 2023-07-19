let playerWins = 0;
let computerWins = 0;


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


function rockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's same choice!");
        msg2.textContent = "It's same choice! PLAY AGAIN!";
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
    computerSelection = getComputerChoice();
    if (this.id === 'rock') {
        playerSelection = 'rock';
        
    }
    else if (this.id === 'paper') {
        playerSelection = 'paper'
    }
    else {
        playerSelection = 'scissors';
    };
    
    rockPaperScissors(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        msg2.textContent = 'SAME CHOICE PLAY AGAIN!';
    }
    else {
        msg2.textContent = '';
    }
    msg.textContent = `YOU ${playerWins} - ${computerWins} MACHINE`;
    if (playerWins === 5) {
        msg.textContent = 'YOU SAVED HUMANITY';
        main.style.display = 'none';
        reset.style.display = 'block';
    }
    else if (computerWins === 5) {
        msg.textContent = 'MACHINES WON,MACHINE UPRISING BEGINS!';
        main.style.display = 'none';
        reset.style.display = 'block';
    }
}


const main = document.querySelector('.main');
const msg = document.querySelector('.msg');
const msg2 = document.querySelector('.msg2');
const reset = document.querySelector('#reset');
const secondary = document.querySelector('.secondary');
const images = document.querySelectorAll('img')


images.forEach(img => img.addEventListener('click',game));



reset.addEventListener('click', () => {
    playerWins = 0;
    computerWins = 0;
    main.style.display = 'flex';
    msg.textContent = '';
    reset.style.display = 'none';
});
