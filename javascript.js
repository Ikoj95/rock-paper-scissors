let playerWins = 0;
let computerWins = 0;


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


function rockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's same choice!");     
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        console.log(`COMPUTER WINS! ${computerSelection} beats ${playerSelection}`);
        computerWins = computerWins + 1;
        computerRes.textContent = computerWins;
        console.log(`Current result : You ${playerWins} - ${computerWins} Machine`);
    }
    else {
        console.log(`YOU WIN! ${playerSelection} beats ${computerSelection}`);
        playerWins = playerWins + 1;
        playerRes.textContent = playerWins;
        console.log(`Current result : You ${playerWins} - ${computerWins} Machine`);
    }
}


function game() {
    computerSelection = getComputerChoice();
    if (this.className === computerSelection) {
        msg2.textContent = 'SAME CHOICE PLAY AGAIN!';
    }
    else {
        msg2.textContent = '';
    }
    if (this.className === 'rock') {
        playerSelection = 'rock';
        playerChoiceImage.src = '../rock-paper-scissors/pictures/rock.png'; 
        computerChoiceImage.src = `../rock-paper-scissors/pictures/${computerSelection}.png`;
    }
    else if (this.className === 'paper') {
        playerSelection = 'paper';
        playerChoiceImage.src = '../rock-paper-scissors/pictures/paper.png'; 
        computerChoiceImage.src = `../rock-paper-scissors/pictures/${computerSelection}.png`;
    }
    else {
        playerSelection = 'scissors';
        playerChoiceImage.src = '../rock-paper-scissors/pictures/scissors.png'; 
        computerChoiceImage.src = `../rock-paper-scissors/pictures/${computerSelection}.png`;
    }
    rockPaperScissors(playerSelection, computerSelection);
    
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
const playerRes = document.querySelector('#playerRes');
const computerRes = document.querySelector('#computerRes');
computerRes.textContent = 0;
playerRes.textContent = 0;
const playerChoiceImage = document.querySelector('#player');
const computerChoiceImage = document.querySelector('#computer');
const main = document.querySelector('.main');
const msg = document.querySelector('.msg');
const msg2 = document.querySelector('.msg2');
const reset = document.querySelector('#reset');
const secondary = document.querySelector('.secondary');
const images = document.querySelectorAll('img:not(#player):not(#computer)');


images.forEach(img => img.addEventListener('click',game));



reset.addEventListener('click', () => {
    playerWins = 0;
    computerWins = 0;
    computerRes.textContent = 0;
    playerRes.textContent = 0;
    playerChoiceImage.src = "../rock-paper-scissors/pictures/rps.png";
    computerChoiceImage.src = "../rock-paper-scissors/pictures/rps.png";
    main.style.display = 'flex';
    msg.textContent = '';
    reset.style.display = 'none';
});
