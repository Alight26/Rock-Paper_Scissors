// Constants



// functions


let gameScore = 0;

function playGame(gameScore) {
    // constants
    let humanScore = 0;
    let computerScore = 0;

    // moving evething into this function
    function getComputerChoice(max) {       // random # from 0 - 2
        return Math.floor(Math.random() * max);
    
    }
    let max = getComputerChoice(3);         // changed function to "max"
    
    if (max == 0) {
        max = "rock";
    } else if (max == 1) {
        max = "paper";
    } else {
        max = "scissors";
    }
    
    console.log(max);
    
    function getHumanChoice(choice) {       // player picks r, p, or s
        
        return choice;
    }
    
    let choice = prompt("Rock, Paper, or Scissors:");
    choice = choice.trim().toLowerCase();
    console.log(getHumanChoice(choice));



    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("Tie!!");
        }   else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            console.log("You Win!!");
        }   else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            console.log("You lose!");
        }   else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log("You Win!");
        }   else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            console.log("You Lose!");
        }   else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            console.log("You Lose!");
        }   else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log("You Win!!!");
        }
    
    
    }

    let humanChoice = getHumanChoice(choice);
    let computerChoice = max;
    
    playRound(humanChoice, computerChoice);

    if (humanScore++ || computerScore++) {
        gameScore++;
        console.log(gameScore);
    }
    
        


    console.log(humanScore, computerScore);

    
}


let gamePoints = playGame(gameScore);






// scoreboard




