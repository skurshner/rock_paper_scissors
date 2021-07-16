//Create a function computerInput that randomly returns "Rock", "Paper", or "Scissors"
function computerInput() {
    let number = Math.random();
    if (number <= 0.33) {
        return "Rock";
    } else if (number > 0.33 && number <=.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

//Assign variable computerSelection to output of computerInput
let computerSelection = computerInput();
console.log(computerSelection);

//Create a function playerInput that gets the input from the user through a prompt & converts to title case
function playerInput() {
    let input = prompt("What is your move?").toLowerCase();
    return (input[0].toUpperCase()) + input.slice(1);   
}

//Assign variable playerSelection to output of playerInput
let playerSelection = playerInput();
console.log(playerSelection);

//Create a function playRound that takes in computerSelection and playerSelection and determines a winner
//Create a function game which repeats playRound 5 times