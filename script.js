// Create a function computerPlay that randomly returns "Rock", "Paper", or "Scissors"
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
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
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

// Target outcome
let outcome = document.querySelector('#outcome');

// When either score reaches 5, hide buttons and announce winner
function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        console.log("there is a winner");
    }
}

// Create a function playRound that takes in computerSelection and playerSelection and determines a winner and sets the game score
function playRound() {
    computerSelection = computerPlay();
    //console.log(computerSelection);
    
    if (computerSelection === playerSelection) {
        outcome.textContent = "It's a tie.";
    } else {
        if (computerSelection === "Rock" && playerSelection === "Scissors" ||
            computerSelection === "Paper" && playerSelection === "Rock" ||
            computerSelection === "Scissors" && playerSelection === "Paper") {
                ++computerScore;
                computerCount.textContent = computerScore;
                outcome.textContent = `You lost this round. ${ computerSelection } beats ${ playerSelection }`;
            } else {
                ++playerScore;
                playerCount.textContent = playerScore;
                outcome.textContent = `You won this round! ${ playerSelection } beats ${ computerSelection }`;
            }
    }
    checkWinner();
}

