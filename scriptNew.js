function getComputerChoice(max) {
    let randomNumber = Math.floor(Math.random() * max); // chooses 0, 1, or 2


    // turns numbers into rock paper and scissors
    if (randomNumber == 0) {
        randomNumber = "rock";

    } else if (randomNumber == 1) {
        randomNumber = "paper";

    } else {
        randomNumber = "scissors";

    }

    console.log(randomNumber);

}

getComputerChoice(3); // declaring the function so it will pick only 3 numbers

function getHumanChoice(choice) {

    return choice;

    
}


let choice = prompt("Rock, Paper, or Scissors:"); // user input
choice = choice.trim().toLowerCase();
console.log(getHumanChoice(choice));
