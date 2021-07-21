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
let computerCount = document.querySelector('#computerscore');
let playerScore = 0;
let playerCount = document.querySelector('#playerscore')

// Create a function playRound that takes in computerSelection and playerSelection and determines a winner and sets the game score
function playRound() {
    computerSelection = computerPlay();
    //console.log(computerSelection);
    
    if (computerSelection === playerSelection) {
        //alert("It's a tie.");
    } else {
        if (computerSelection === "Rock" && playerSelection === "Scissors" ||
            computerSelection === "Paper" && playerSelection === "Rock" ||
            computerSelection === "Scissors" && playerSelection === "Paper") {
                ++computerScore;
                computerCount.textContent = computerScore;
                //alert(`You lost this round. ${ computerSelection } beats ${ playerSelection }. \r\nYou: ${ playerScore }, Computer: ${ computerScore }`);
            } else {
                ++playerScore;
                playerCount.textContent = playerScore;
                //alert(`You won this round! ${ playerSelection } beats ${ computerSelection }. \r\nYou: ${ playerScore }, Computer: ${ computerScore }`);
            }
    }
}

/* Create a function game which plays the five rounds
function game () {
    const roundOne = playRound();
    const roundTwo = playRound();
    const roundThree = playRound();
    const roundFour = playRound();
    const roundFive = playRound();
    
    if (computerScore === playerScore) {
        alert("Game ended in a tie. Refresh and try again.")
    }   else {
        (computerScore > playerScore) ? alert(`You lost the game ${ computerScore } to ${ playerScore }, refresh to try again!`) : 
        alert(`You won the game ${ playerScore } to ${ computerScore }, awesome job!`);
    }
}

game();*/