const buttons = document.querySelectorAll(".buttons");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const result = document.getElementById("result");

let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum == 1) return "rock";
  if (randomNum == 2) return "scissors";
  if (randomNum == 3) return "paper";
};

let playRound = (computerChoice, userChoice) => {
  if (userChoice == computerChoice) {
    console.log("It's a tie!");
    result.innerHTML = "It's a tie!";
  }
  if (userChoice == "rock" && computerChoice == "scissor") {
    humanScore++;
    console.log(" You win, rock beats scissors");
    result.innerHTML = "You win, rock beats scissors";
  }
  if (userChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    console.log(" You lose, rock loses to paper");
    result.innerHTML = " You lose, rock loses to paper";
  }
  if (userChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    console.log(" You lose, scissors loses to rock");
    result.innerHTML = " You lose, scissors loses to rock";
  }
  if (userChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    console.log(" You win, scissors beats paper");
    result.innerHTML = " You win, scissors beats paper";
  }
  if (userChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    console.log(" You lose, paper loses to scissors");
    result.innerHTML = " You lose, paper loses to scissors";
  }
  if (userChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    console.log(" You win, paper beats rock");
    result.innerHTML = "You win, paper beats rock";
  }

  score1.innerHTML = humanScore;
  score2.innerHTML = computerScore;
};

buttons.forEach((button) => {
  addEventListener("click", (e) => {
    let userChoice = e.target.id;
    playRound(getComputerChoice(), userChoice);
    if (humanScore == 5) result.innerHTML = "Player has won a total of 5 games!";
    else if (computerScore == 5) result.innerHTML = "Computer has one a total of 5 games!";
  });
});
