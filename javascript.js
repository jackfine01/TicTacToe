let computerChoice = undefined
function getComputerChoice(){
    let numChoice = Math.random();
    if (numChoice <= 0.33)
        computerChoice = "Rock"
    else if (numChoice >= 0.67)
        computerChoice = "Paper"
    else
        computerChoice = "Scissors"
    return computerChoice
};

let humanChoice = undefined
function getHumanChoice(){

    let choice = prompt("Rock, Paper, or Scissors?");
    if (choice.toLowerCase() === "rock") {
        humanChoice = "Rock";
        }
    else if (choice.toLowerCase() === "paper"){
        humanChoice = "Paper";
    }
    else if (choice.toLowerCase() === "scissors"){
        humanChoice = "Scissors";
    }
    else
        getHumanChoice();

    if(humanChoice != undefined)
        return humanChoice
};



function playRound(humanChoice, computerChoice){

        if(humanChoice == computerChoice){
            console.log("Tie!");
        }
        else if(humanChoice == "Rock" && computerChoice == "Scissors"){
            console.log("You win! Rock beats Scissors.")
            humanScore++;
        }
        else if(computerChoice == "Rock" && humanChoice == "Scissors"){
            console.log("You lose! Rock beats Scissors.")
            computerScore++;
        }
        else if(humanChoice == "Paper" && computerChoice == "Scissors"){
            console.log("You lose! Scissors beats Paper.")
            computerScore++;
        }
        else if(computerChoice == "Paper" && humanChoice == "Scissors"){
            console.log("You win! Scissors beats Paper.")
            humanScore++;
        }
        else if(computerChoice == "Paper" && humanChoice == "Rock"){
            console.log("You Lose! Paper beats Rock.")
            computerScore++;
        }
        else if(computerChoice == "Rock" && humanChoice == "Paper") {
            console.log("You win! Paper beats Rock.")
            humanScore++;
        }
        else
            consloe.log("Invalid, play again.")
    console.log("Your Score: " + humanScore + " Computer Score: " + computerScore)
};

 // const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

    const buttonHolder = document.querySelector('.buttonHolder')
    const rockButton = buttonHolder.firstElementChild;
    const paperButton = document.querySelector('#pButton');
    const scissorsButton = document.querySelector('#sButton');