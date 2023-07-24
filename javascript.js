let playerWins = 0;
let computerWins = 0;


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


function rockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        msg.textContent = 'SAME CHOICE,PLAY AGAIN!'
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerWins = computerWins + 1;
        computerRes.textContent = computerWins;

        text = `<span style='color:red'>${computerSelection}</span> BEATS <span style='color:green'>${playerSelection}</span> YOU LOST`;
        msg.innerHTML = text;
    }
    else {
        playerWins = playerWins + 1;
        playerRes.textContent = playerWins;
        text = `<span style='color:green'>${playerSelection}</span> BEATS <span style='color:red'>${computerSelection}</span> YOU WON`;
        msg.innerHTML = text;
    }
}


function game() {
    computerSelection = getComputerChoice();
    if (this.className === 'rock') {
        playerSelection = 'rock';
        this.classList.add('played');
        playerChoiceImage.src = '../rock-paper-scissors/pictures/rock.png';
        computerChoiceImage.src = `../rock-paper-scissors/pictures/${computerSelection}.png`;
    }
    else if (this.className === 'paper') {
        playerSelection = 'paper';
        this.classList.add('played');
        playerChoiceImage.src = '../rock-paper-scissors/pictures/paper.png';
        computerChoiceImage.src = `../rock-paper-scissors/pictures/${computerSelection}.png`;
    }
    else {
        playerSelection = 'scissors';
        this.classList.add('played');
        playerChoiceImage.src = '../rock-paper-scissors/pictures/scissors.png';
        computerChoiceImage.src = `../rock-paper-scissors/pictures/${computerSelection}.png`;
    }
    rockPaperScissors(playerSelection, computerSelection);

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


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('played');
}


const playerRes = document.querySelector('#playerRes');
const computerRes = document.querySelector('#computerRes');
computerRes.textContent = 0;
playerRes.textContent = 0;
const playerChoiceImage = document.querySelector('#player');
const computerChoiceImage = document.querySelector('#computer');
const main = document.querySelector('.main');
const msg = document.querySelector('.msg');
const reset = document.querySelector('#reset');
const images = document.querySelectorAll('img:not(#player):not(#computer)');


images.forEach(img => img.addEventListener('click', game));
images.forEach(img => img.addEventListener('transitionend', removeTransition));



reset.addEventListener('click', () => {
    images.forEach(img => { img.classList.remove('played') });
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
