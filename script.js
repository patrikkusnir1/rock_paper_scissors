function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice() {
  let humanChoice;
  while (true) {
    humanChoice = prompt("Choose rock or paper or scissors", "").toLowerCase();
    if (
      humanChoice === "rock" ||
      humanChoice === "paper" ||
      humanChoice === "scissors"
    ) {
      return humanChoice;
    } else {
      console.log("Wrong choice! Please type 'rock', 'paper', or 'scissors'");
    }
  }
}

function playRound(computerChoice, humanChoice) {
  // winning combinations
  if (
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    return "human";
  } else if (computerChoice === humanChoice) {
    console.log("Draw!");
    return "draw";
  } else {
    console.log(`You losed! ${computerChoice} beats ${humanChoice}`);
    return "computer";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    const result = playRound(computerChoice, humanChoice);
    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
    console.log(
      `Round ${
        i + 1
      }: Human score = ${humanScore}, Computer score: ${computerScore}`
    );
  }
  if (humanScore > computerScore) {
    console.log("You won!");
  } else if (computerScore > humanScore) {
    console.log("You lose");
  } else {
    console.log("Draw");
  }
}

// if (humanScore === 5) {
//   console.log("Game over! You won");
// } else if (computerScore === 5) {
//   console.log("Game over!, You lose");
// }

playGame();
