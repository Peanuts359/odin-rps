let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let rand = Math.random();
    return (rand < 1/3) ? "rock" : (rand < 2/3) ? "paper" : "scissors";
}

function getHumanChoice() {
    let choice = "";
    while (true) {
        choice = prompt("Rock, paper or scissors. Pick one.");
        choice = choice.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
        alert("invalid choice!");
    }
}

/*
function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return "Draw!";
    } else if (computerChoice === "rock") {
        return (humanChoice === "paper") ? "Paper beats rock, you win." : "Rock beats scissors, you lose." ;
    } else if (computerChoice === "paper") {
        return (humanChoice === "scissors") ? "Scissors beats paper, you win." : "Paper beats rock, you lose.";
    } else {
        return (humanChoice == "rock") ? "Rock beats scissors, you win." : "Scissors beats paper, you lose.";
    }
}
*/

function playRound(computerChoice, humanChoice) {
    // 0: draw
    // 1: player win
    // -1: computer win
    if (computerChoice === humanChoice) {
        return 0;
    } else if (computerChoice === "rock") {
        return (humanChoice === "paper") ? 1 : -1 ;
    } else if (computerChoice === "paper") {
        return (humanChoice === "scissors") ? 1 : -1;
    } else {
        return (humanChoice == "rock") ? 1 : -1;
    }
}

/*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("You pick " + humanSelection);
console.log("It picked " + computerSelection);
console.log(playRound(computerSelection, humanSelection));
*/

function playGame() {
    for (let i = 1; i <= 5; i++) {
        alert("Begin round " + i);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(computerSelection, humanSelection);

        if (result === 1) humanScore++;
        if (result === -1) computerScore++;
    }

    alert("Final score: You: " + humanScore + " The computer: " + computerScore);
    const winner = (humanScore > computerScore) ? "You win" : (humanScore < computerScore) ? "You lose" : "Draw"
    alert(winner);
    return winner;
}
// console.log(getComputerChoice());
// console.log(getHumanChoice());

console.log(playGame());