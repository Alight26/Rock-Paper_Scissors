function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}

console.log(getComputerChoice(3));

function getHumanChoice(choice) {
    return choice;
}

let choice = prompt("Rock, Paper, or Scissors: ");
console.log(getHumanChoice(choice));
