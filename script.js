// Constants
let humanScore = 0;
let computerScore = 0;


// functions
function getComputerChoice(max) {       // random # from 0 - 2
    return Math.floor(Math.random() * max);

}
let max = getComputerChoice(3);

if (max == 0) {
    max = "rock";
} else if (max == 1) {
    max = "paper";
} else {
    max = "scissors";
}

console.log(max);

function getHumanChoice(choice) { // player picks r, p, or s
    return choice;
}

let choice = prompt("Rock, Paper, or Scissors: ");
console.log(getHumanChoice(choice));

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore += 1;
        alert("You Lose!");
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore += 1;
        alert("You Win!");
    } else if (humanChoice == "rock" && computerChoice == "rock"){
        alert("Tie!");
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore += 1;
        alert("You Lose!");
    } else if (humanChoice == "paper" && computerChoice == "paper"){
        alert("Tie!");
    } else if (humanChoice == "scissors" && computerChoice == "scissors"){
        alert("Tie!")
    } else {
        alert("You can only choose rock, paper, or scissors!!");
    }
    }



}

