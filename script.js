function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
// Callback Function: The getHumanChoice function takes a callback function as an argument. 
// This callback is called with the humanChoice once a button is clicked.

function getHumanChoice(callback) {
const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", (e) => {
  const humanChoice = e.target.textContent.toLowerCase();
  callback(humanChoice);
}))
}

function playRound(computerChoice, humanChoice) {
  const div = document.querySelector("#results");
  // winning combinations
  if (
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    const resultPara = document.createElement("p");
    resultPara.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
    div.appendChild(resultPara);
    return "human";
  } else if (computerChoice === humanChoice) {
    const drawPara = document.createElement("p");
    drawPara.textContent = "Draw!"
    div.appendChild(drawPara);
    return "draw";
  } else {
    const losePara = document.createElement("p");
    losePara.textContent = `You losed! ${computerChoice} beats ${humanChoice}`;
    div.appendChild(losePara);
    return "computer";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let currentRound = 1;

  // reset scores
  if (currentRound == 1) {
    humanScore = 0;
    computerScore = 0;
  }

  // call getHumanChoice and pass a callback
    getHumanChoice(function(humanChoice) {
      const computerChoice = getComputerChoice();
      const div = document.querySelector("#results")

      // clear previous results
      div.innerHTML = ""

      // display human and computer choices
      const humanChoicePara = document.createElement("p");
      humanChoicePara.textContent = "Human choice is: " + humanChoice;
      div.appendChild(humanChoicePara);

      const computerChoicePara = document.createElement("p");
      computerChoicePara.textContent = "Computer choice is: " + computerChoice;
      div.appendChild(computerChoicePara);

      // play the round and update scores

      const result = playRound(computerChoice, humanChoice);
      if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
    
    // display the current round results
    const resultPara = document.createElement("p");
    resultPara.textContent = `Round ${currentRound}: Human score = ${humanScore}, Computer score: ${computerScore}`;
    div.appendChild(resultPara);

    //increment round number
    currentRound++;

    // check if 5 rounds are complete
    if (currentRound > 5) {
      const finalResultPara = document.createElement("p");
        
      if (humanScore > computerScore) {
        finalResultPara.textContent = "You won!";
       } else if (computerScore > humanScore) {
        finalResultPara.textContent = "You lose!"
      } else {
        finalResultPara.textContent = "Draw!"
      }

      div.appendChild(finalResultPara);

      // reset round counter
      currentRound = 1;
      humanScore = 0;
      computerScore = 0;
  }

  
})
}

playGame();
