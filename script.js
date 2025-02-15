// Constants
let humanScore = 0;
let computerScore = 0;


// functions
function getComputerChoice(max) {       // random # from 0 - 2
    return Math.floor(Math.random() * max);

}
let max = getComputerChoice(3);

if (max == 0) {
    max = "Rock";
} else if (max == 1) {
    max = "Paper";
} else {
    max = "Scissors";
}

console.log(max);

function getHumanChoice(choice) { // player picks r, p, or s
    return choice;
}

let choice = prompt("Rock, Paper, or Scissors: ");
console.log(getHumanChoice(choice));

function playRound(humanChoice, computerChoice) {



}

