// Choice Logic - Computer Side

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

// Round logic 
let humanScore = 0;
let computerScore = 0;

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

// Choice Logic - Human Side

    let humanChoice = "";

    function setHumanChoice(choice){
        humanChoice = choice;
        console.log(humanChoice);
    };

    const buttonHolder = document.querySelector('.buttonHolder')
    const rockButton = document.querySelectorAll(".Button")[0];
    rockButton.addEventListener('click', () => setHumanChoice("Rock"));

    const paperButton = document.querySelectorAll(".Button")[1];
    paperButton.addEventListener('click', () => setHumanChoice("Paper"));

    const scissorsButton = document.querySelectorAll(".Button")[2];
    scissorsButton.addEventListener('click', () => setHumanChoice("Scissors"));

// Header Display

document.getElementById("scoreCard").textContent = humanScore + " : " + computerScore;