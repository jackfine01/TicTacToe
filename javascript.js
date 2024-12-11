// Choice Logic - Computer Side

let computerChoice = "";
function getComputerChoice(){
    let numChoice = Math.random();
    if (numChoice <= 0.33)
        computerChoice = "Rock"
    else if (numChoice >= 0.67)
        computerChoice = "Paper"
    else
        computerChoice = "Scissors"
};

// Round logic 
let humanScore = 0;
let computerScore = 0;

function playRound(human, computer){

    humanChoice===human;

    computerChoice===computer;

        if(humanChoice == computerChoice){
            document.getElementById("descriptorOfResult").textContent = ("Tie!");
        }
        else if(humanChoice === "Rock" && computerChoice === "Scissors"){
            document.getElementById("descriptorOfResult").textContent = ("You win! Rock beats Scissors.");
            humanScore++;
        }
        else if(computerChoice === "Rock" && humanChoice === "Scissors"){
            document.getElementById("descriptorOfResult").textContent = ("You lose! Rock beats Scissors.");
            computerScore++;
        }
        else if(humanChoice === "Paper" && computerChoice === "Scissors"){
            document.getElementById("descriptorOfResult").textContent = ("You lose! Scissors beats Paper.");
            computerScore++;
        }
        else if(computerChoice === "Paper" && humanChoice === "Scissors"){
            document.getElementById("descriptorOfResult").textContent = ("You win! Scissors beats Paper.");
            humanScore++;
        }
        else if(computerChoice === "Paper" && humanChoice === "Rock"){
            document.getElementById("descriptorOfResult").textContent = "You Lose! Paper beats Rock.";
            computerScore++;
        }
        else if(computerChoice === "Rock" && humanChoice === "Paper") {
            document.getElementById("descriptorOfResult").textContent = "You win! Paper beats Rock.";
            humanScore++;
        }
        else
            console.log("Invalid Result");

            document.getElementById("scoreCard").textContent = humanScore + " : " + computerScore;
            document.getElementById("playerResult").textContent = humanChoice;
            document.getElementById("computerResult").textContent = computerChoice;
};

// Choice Logic - Human Side

    let humanChoice = "";

    function setHumanChoice(choice){
        humanChoice = choice;
    };

    const buttonHolder = document.querySelector('.buttonHolder')
    const rockButton = document.querySelectorAll(".Button")[0];
    rockButton.addEventListener('click', () => playRound(setHumanChoice("Rock"), getComputerChoice()));

    const paperButton = document.querySelectorAll(".Button")[1];
    paperButton.addEventListener('click', () => playRound(setHumanChoice("Paper"), getComputerChoice()));

    const scissorsButton = document.querySelectorAll(".Button")[2];
    scissorsButton.addEventListener('click', () => playRound(setHumanChoice("Scissors"), getComputerChoice()));

// Header Display

