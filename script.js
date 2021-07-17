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

//Create a function playerInput that gets the input from the user through a prompt & converts to title case
function playerInput() {
    let input = prompt("What is your move?").toLowerCase();
    return (input[0].toUpperCase()) + input.slice(1);   
}

//Assign variables for counting the score
let computerScore = 0;
let playerScore = 0;

//Create a function playRound(x=5) that takes in computerSelection and playerSelection and determines a winner for each of the 5 games.
function playRound1() {
    let computerSelection1 = computerInput();
    //console.log(computerSelection1);
    let playerSelection1 = playerInput();
    
    if (computerSelection1 === playerSelection1) {
        alert("It's a tie");
    } else {
        if (computerSelection1 === "Rock" && playerSelection1 === "Scissors" ||
            computerSelection1 === "Paper" && playerSelection1 === "Rock" ||
            computerSelection1 === "Scissors" && playerSelection1 === "Paper") {
                ++computerScore;
                alert(`You lost, ${ computerSelection1 } beats ${ playerSelection1 }. \r\nYou: ${ playerScore }, Computer: ${ computerScore }`);
            } else {
                ++playerScore;
                alert(`You won, ${ playerSelection1 } beats ${ computerSelection1 }. \r\nYou: ${ playerScore }, Computer: ${ computerScore }`);
            }
    }
}

function playRound2() {
    let computerSelection2 = computerInput();
    //console.log(computerSelection2);
    let playerSelection2 = playerInput();
    
    if (computerSelection2 === playerSelection2) {
        alert("It's a tie");
    } else {
        if (computerSelection2 === "Rock" && playerSelection2 === "Scissors" ||
            computerSelection2 === "Paper" && playerSelection2 === "Rock" ||
            computerSelection2 === "Scissors" && playerSelection2 === "Paper") {
                ++computerScore;
                alert(`You lost, ${ computerSelection2 } beats ${ playerSelection2 }. \r\nYou: ${ playerScore }, Computer: ${ computerScore }`);
            } else {
                ++playerScore;
                alert(`You won, ${ playerSelection2 } beats ${ computerSelection2 }. \r\nYou: ${ playerScore }, Computer: ${ computerScore }`);
            }
    }
}

function playRound3() {
    let computerSelection3 = computerInput();
    //console.log(computerSelection3);
    let playerSelection3 = playerInput();
    
    if (computerSelection3 === playerSelection3) {
        alert("It's a tie");
    } else {
        if (computerSelection3 === "Rock" && playerSelection3 === "Scissors" ||
            computerSelection3 === "Paper" && playerSelection3 === "Rock" ||
            computerSelection3 === "Scissors" && playerSelection3 === "Paper") {
                ++computerScore;
                alert(`You lost, ${ computerSelection3 } beats ${ playerSelection3 }. \r\nYou: ${ playerScore }, Computer: ${ computerScore }`);
            } else {
                ++playerScore;
                alert(`You won, ${ playerSelection3 } beats ${ computerSelection3 }. \r\nYou: ${ playerScore }, Computer: ${ computerScore }`);
            }
    }
}

function playRound4() {
    let computerSelection4 = computerInput();
    //console.log(computerSelection4);
    let playerSelection4 = playerInput();
    
    if (computerSelection4 === playerSelection4) {
        alert("It's a tie");
    } else {
        if (computerSelection4 === "Rock" && playerSelection4 === "Scissors" ||
            computerSelection4 === "Paper" && playerSelection4 === "Rock" ||
            computerSelection4 === "Scissors" && playerSelection4 === "Paper") {
                ++computerScore;
                alert(`You lost, ${ computerSelection4 } beats ${ playerSelection4 }. \r\nYou: ${ playerScore }, Computer: ${ computerScore }`);
            } else {
                ++playerScore;
                alert(`You won, ${ playerSelection4 } beats ${ computerSelection4 }. \r\nYou: ${ playerScore }, Computer: ${ computerScore }`);
            }
    }
}

function playRound5() {
    let computerSelection5 = computerInput();
    //console.log(computerSelection5);
    let playerSelection5 = playerInput();
    
    if (computerSelection5 === playerSelection5) {
        alert("It's a tie");
    } else {
        if (computerSelection5 === "Rock" && playerSelection5 === "Scissors" ||
            computerSelection5 === "Paper" && playerSelection5 === "Rock" ||
            computerSelection5 === "Scissors" && playerSelection5 === "Paper") {
                ++computerScore;
                alert(`You lost, ${ computerSelection5 } beats ${ playerSelection5 }. \r\nYou: ${ playerScore }, Computer: ${ computerScore }`);
            } else {
                ++playerScore;
                alert(`You won, ${ playerSelection5 } beats ${ computerSelection5 }. \r\nYou: ${ playerScore }, Computer: ${ computerScore }`);
            }
    }
}
//Create a function game which plays the five rounds
function game () {
    playRound1();
    playRound2();
    playRound3();
    playRound4();
    playRound5();

    if (computerScore === playerScore) {
        alert("It's a tie!")
    }   else {
        (computerScore > playerScore) ? alert(`You Lost! ${ computerScore } to ${ playerScore }.`) : 
        alert(`You Won! ${ playerScore } to ${ computerScore }.`);
    }
}

game();