let getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum == 1) return "rock";
  if (randomNum == 2) return "scissors";
  if (randomNum == 3) return "paper";
};

let getHumanChoice = () => {
  console.log("Select your weapon");
  console.log("1 - rock");
  console.log("2 - scissors");
  console.log("3 - paper");
  let userInput = prompt("Enter a selection");
  if (userInput == 1) return "rock";
  if (userInput == 2) return "scissors";
  if (userInput == 3) return "paper";
};

let humanScore = 0;
let computerScore = 0;

let playRound = (computerChoice, userChoice) => {
  userChoice = userChoice.toLowercase();
  if (userChoice == computerChoice) {
    console.log("It's a tie!");
  }
  if (userChoice == "rock" && computerChoice == "scissor") {
    humanScore++;
    console.log(" You win, rock beats scissors");
  }
  if (userChoice == "rock" && computerChoice == "paper") {
    computerChoice++;
    console.log(" You lose, rock loses to paper");
  }
  if (userChoice == "scissors" && computerChoice == "rock") {
    computerChoice++;
    console.log(" You lose, scissors loses to rock");
  }
  if (userChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    console.log(" You win, scissors beats paper");
  }
  if (userChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    console.log(" You lose, paper loses to scissors");
  }
  if (userChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    console.log(" You win, paper beats rock");
  }
};

let playGame = () => {
  while (humanScore < 5 && computerScore < 5) {
    playRound(getComputerChoice(), getHumanChoice());
  }
  if (humanScore == 5) console.log("You have won 5 games");
  else console.log("The computer has one 5 games");
};
