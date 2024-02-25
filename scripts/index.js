function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a draw!";
  }

  if (userChoice === "rock") {
    return computerChoice === "scissors" ? "You win!" : "You lose!";
  } else if (userChoice === "paper") {
    return computerChoice === "rock" ? "You win!" : "You lose!";
  } else if (userChoice === "scissors") {
    return computerChoice === "paper" ? "You win!" : "You lose!";
  }
}

const userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
const computerChoice = getComputerChoice();
const result = determineWinner(userChoice, computerChoice);

alert(`You chose ${userChoice}, computer chose ${computerChoice}. ${result}`);
