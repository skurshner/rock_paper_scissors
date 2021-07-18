//Create a function computerPlay that randomly returns "Rock", "Paper", or "Scissors"
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

//Create a function playerPlay that gets the input from the user through a prompt & converts to title case
function playerPlay() {
    let input = prompt("What is your move ... Rock, Paper or Scissors?").toLowerCase();
    return (input[0].toUpperCase()) + input.slice(1);     
}

//Assign and initialize variables for counting the score
let computerScore = 0;
let playerScore = 0;

//Assign and initialize variables for computer and player selection
let computerSelection;
let playerSelection;

//Create a function playRound that takes in computerSelection and playerSelection and determines a winner for each of the 5 games.
function playRound() {
    computerSelection = computerPlay();
    console.log(computerSelection);
    playerSelection = playerPlay();
    
    if (computerSelection === playerSelection) {
        alert("It's a tie.");
    } else {
        if (computerSelection === "Rock" && playerSelection === "Scissors" ||
            computerSelection === "Paper" && playerSelection === "Rock" ||
            computerSelection === "Scissors" && playerSelection === "Paper") {
                ++computerScore;
                alert(`You lost this round. ${ computerSelection } beats ${ playerSelection }. \r\nYou: ${ playerScore }, Computer: ${ computerScore }`);
            } else {
                ++playerScore;
                alert(`You won this round! ${ playerSelection } beats ${ computerSelection }. \r\nYou: ${ playerScore }, Computer: ${ computerScore }`);
            }
    }
}

//Create a function game which plays the five rounds
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

game();