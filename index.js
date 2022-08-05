console.log("Hello World!");

function getComputerChoice() {

  let randomN = Math.floor(Math.random() * 3);
  const choice = ["rock", "paper", "scissors"];

  for (let index = 0; index < choice.length; index++) {
    const element = choice[index];
    if (choice.indexOf(element) === randomN) {
      return element;
    }
  }
}

let playerScore = 0;
let computerScore = 0;
let round = 0;

function playRound(playerSelection = () => playerSelection.toLowerCase(), computerSelection) {

  while (playerSelection !== computerSelection) {

    if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore += 1;
      return playerScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore += 1;
      return computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore += 1;
      return playerScore;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore += 1;
      return computerScore;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore += 1;
      return playerScore;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore += 1;
      return computerScore;
    }
  }

  return `They're the same. Player with: ${playerScore} points and Computer with: ${computerScore} points `;
}

function game() {

  for (let index = 0; index < 5; index++) {
    let playerSelection = prompt("type rock, paper or scissors");
    if ((playerSelection !== "rock") && (playerSelection !== "scissors") && playerSelection !== "paper") {
			alert("You ought to put rock, paper or scissors");  			
    } else {
			console.log(playerSelection);
      const computerSelection = getComputerChoice();
      console.log(computerSelection);
      playRound(playerSelection, computerSelection);
      round += 1;
      console.log(`Round number:${round} Human:${playerScore} and Computer:${computerScore}`);
    }  
  }

	if (playerScore > computerScore) {
		return `The winner is Player with:${playerScore} points and Computer with:${computerScore}`;
	} else if (computerScore > playerScore) {
		return `The winner is Computer:${computerScore} points and Player:${playerScore} points`;
	} else {
		return `There is a tie Human:${playerScore} - Computer:${computerScore}`;
	}
}

console.log(game());
// fix problem with prove the correct string put by the player