// scoreboard

let computerScore = 0;
let humanScore = 0;

function playGame() {
    for (let i = 0; i < 5; i++) { // 5 rounds so loop runs the code 5 times
        console.log(`round: ${i}`); // shows what round they are on.

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
            return randomNumber;
    
        }
    
        let computerChoice = getComputerChoice(3); // declaring the function so it will pick only 3 numbers
    
    
        function getHumanChoice(choice) {
    
            return choice;
        }
    
        let choice = prompt("Rock, Paper, or Scissors:"); // user input
        choice = choice.trim().toLowerCase();
        console.log(getHumanChoice(choice));
    
        let humanChoice = getHumanChoice(choice);
    
        // rock paper scissors game logic
        function playRound(humanChoice, computerChoice) {
            if (humanChoice == computerChoice) {
                console.log("Tie");
    
            } else if (humanChoice == "rock" && computerChoice == "scissors"
                || humanChoice == "paper" && computerChoice == "rock" 
                || humanChoice == "scissors" && computerChoice == "paper") {
                    humanScore++;
                    console.log("You Win!");
            } else {
                computerScore++;
                console.log("You Lose!");
            }
    
            return humanChoice, computerChoice;
            
        }
    
        playRound(humanChoice, computerChoice);

        console.log(`Your Score ${humanScore}`);
        console.log(`Opponent Score ${computerScore}`);


    }

   

}

playGame();