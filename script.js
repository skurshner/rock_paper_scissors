// Computer randomly return "Rock", "Paper", or "Scissors"
function computerPlay() {
    let number = Math.random();
    if (number <= 0.33) {
        return "Rock";
    } else if (number > 0.33 && number <=0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
// Assign and initialize variables for computer and player selection
let computerSelection;
let playerSelection;

// Button click event assigns player's move and calls playRound()
const playerChoice = document.querySelectorAll('button');

playerChoice.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = (button.id[0].toUpperCase()) + button.id.slice(1); 
        //console.log(playerSelection);
        playRound();
    })
})

// Assign and initialize variables for counting the score
let computerScore = 0;
let playerScore = 0;

// Target score counters
let computerCount = document.querySelector('#computerscore');
let playerCount = document.querySelector('#playerscore');

// Target outcome of each round and game winner
let outcome = document.querySelector('#outcome');
let winner = document.querySelector('#winner');
let reload = document.querySelector('#reload');

// Target buttons 
let buttons = document.querySelector('#buttons');

// When either score reaches 5, hide buttons and announce winner
function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        buttons.classList.add("hidden");
        winner.classList.remove("hidden")
        reload.classList.remove("hidden");

        if (playerScore === 5){
            winner.textContent = 'Congrats, you won!'
        } else {
            winner.textContent = 'Sorry, you lost!'
        }
    }
}

// Take in computerSelection and playerSelection. Determine a winner and set the game score
function playRound() {
    computerSelection = computerPlay();
    //console.log(computerSelection);
    
    if (computerSelection === playerSelection) {
        outcome.textContent = "It's a tie";
    } else {
        if (computerSelection === "Rock" && playerSelection === "Scissors" ||
            computerSelection === "Paper" && playerSelection === "Rock" ||
            computerSelection === "Scissors" && playerSelection === "Paper") {
                ++computerScore;
                computerCount.textContent = computerScore;
                outcome.textContent = `You lost this round ... ${ computerSelection } beats ${ playerSelection }`;
            } else {
                ++playerScore;
                playerCount.textContent = playerScore;
                outcome.textContent = `You won this round! ${ playerSelection } beats ${ computerSelection }`;
            }
    }
    checkWinner();
}

