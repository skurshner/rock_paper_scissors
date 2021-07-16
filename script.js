//Create a function computerPlay that randomly returns "Rock", "Paper", or "Scissors"

function computerPlay() {
    let number = Math.random();
    if (number <= 0.33) {
        return "Rock";
    } else if (number > 0.33 && number <=.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let computerSelection = computerPlay();
console.log(computerSelection);

//Create a function computerSelection that takes in output of computerPlay and assigns it to a variable
//Create a function playerSelection that gets the input from the user through a prompt
//Create a function playRound that takes in computerSelection and playerSelection and determines a winner
//Create a function game which repeats playRound 5 times