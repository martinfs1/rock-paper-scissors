console.log(`Welcome to my Rock, Paper, Scissors game.`);
let playerScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
  let randomN = Math.floor(Math.random() * 3);
  const choice = [`rock`, `paper`, `scissors`];

  for (let index = 0; index < choice.length; index++) {
    const element = choice[index];
    if (choice.indexOf(element) === randomN) {
      return element;
    }
  }
}

function getPlayerSelection(e) {
  let choice = e.target.innerText;
  return choice.toLowerCase();
}

function playRound(e) {
  let playerSelection = getPlayerSelection(e);
  humanChoose.textContent = `Human choose: ${playerSelection}`;

  let computerSelection = getComputerChoice();
  computersChoose.textContent = `Computer choose: ${computerSelection}`;

  while (playerSelection !== computerSelection) {
    if (playerSelection === `rock` && computerSelection === `scissors`) {
      playerScore += 1;
      console.log(playerScore);
      return playerScore;
    } else if (playerSelection === `scissors` && computerSelection === `rock`) {
      computerScore += 1;
      return computerScore;
    } else if (
      playerSelection === `scissors` &&
      computerSelection === `paper`
    ) {
      playerScore += 1;
      return playerScore;
    } else if (
      playerSelection === `paper` &&
      computerSelection === `scissors`
    ) {
      computerScore += 1;
      return computerScore;
    } else if (playerSelection === `paper` && computerSelection === `rock`) {
      playerScore += 1;
      return playerScore;
    } else if (playerSelection === `rock` && computerSelection === `paper`) {
      computerScore += 1;
      return computerScore;
    }
  }

  tieResult.textContent =`They're the same. Player with: ${playerScore} points and
   Computer with: ${computerScore} points `;
}

console.log("despues de jugar una ronda ");

// function game() {
//   if (playerScore > computerScore) {
//   	return `The winner is Human with:${playerScore} points and
//      Computer with:${computerScore}`;
//   } else if (computerScore > playerScore) {
//   	return `The winner is Computer:${computerScore} points and
//     Player:${playerScore} points`;
//   } else {
//   	return `There is a tie Human:${playerScore} - Computer:${computerScore}`;
//   }
// }

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", playRound);

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", playRound);

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", playRound);

const displayResults = document.querySelector("#results");
const humanChoose = document.createElement("p");
displayResults.appendChild(humanChoose);

const computersChoose = document.createElement("p");
displayResults.appendChild(computersChoose);

const tieResult = document.createElement('p')
displayResults.appendChild(tieResult)
