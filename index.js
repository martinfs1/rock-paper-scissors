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
  tieResult.textContent = "";

  let playerSelection = getPlayerSelection(e);
  humanChoose.textContent = `Human choose: ${playerSelection}`;

  let computerSelection = getComputerChoice();
  computersChoose.textContent = `Computer choose: ${computerSelection}`;

  while (playerSelection !== computerSelection) {
    if (playerSelection === `rock` && computerSelection === `scissors`) {
      playerScore += 1;
      thereIsAWinner(playerScore, computerScore);
      return playerScore;
    } else if (playerSelection === `scissors` && computerSelection === `rock`) {
      computerScore += 1;
      thereIsAWinner(playerScore, computerScore);
      return computerScore;
    } else if (
      playerSelection === `scissors` &&
      computerSelection === `paper`
    ) {
      playerScore += 1;
      thereIsAWinner(playerScore, computerScore);
      return playerScore;
    } else if (
      playerSelection === `paper` &&
      computerSelection === `scissors`
    ) {
      computerScore += 1;
      thereIsAWinner(playerScore, computerScore);
      return computerScore;
    } else if (playerSelection === `paper` && computerSelection === `rock`) {
      playerScore += 1;
      thereIsAWinner(playerScore, computerScore);
      return playerScore;
    } else if (playerSelection === `rock` && computerSelection === `paper`) {
      computerScore += 1;
      thereIsAWinner(playerScore, computerScore);
      return computerScore;
    }
  }
  tieResult.textContent = `There is a tie. `;
}

function thereIsAWinner(playerScore, computerScore) {
  if (playerScore === 5 && playerScore > computerScore) {
    HumanScore.textContent = ` The Winner is the Human with: ${playerScore} points`;
    machineScore.textContent = `Computer : ${computerScore} points`;
  } else if (computerScore === 5 && computerScore > playerScore) {
    HumanScore.textContent = `Human : ${playerScore} points`;
    machineScore.textContent = `The Winner is the Computer with : ${computerScore}
       points`;
  } else {
    HumanScore.textContent = `Human score: ${playerScore} points`;
    machineScore.textContent = `Computer score : ${computerScore} points`;
  }
}

function reset() {
  tieResult.textContent = "";
  humanChoose.textContent = "";
  computersChoose.textContent = "";
  playerScore = 0;
  computerScore = 0;
  HumanScore.textContent = `Human score: ${playerScore} points`;
  machineScore.textContent = `Computer score : ${computerScore} points`;
}

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", playRound);

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", playRound);

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", playRound);

const displayResults = document.querySelector("#results");
const humanChoose = document.createElement("div");
displayResults.appendChild(humanChoose);

const computersChoose = document.createElement("div");
displayResults.appendChild(computersChoose);

const tieResult = document.createElement("p");
displayResults.appendChild(tieResult);

let HumanScore = document.createElement("div");
displayResults.appendChild(HumanScore);

let machineScore = document.createElement("div");
displayResults.appendChild(machineScore);

const btnReset = document.querySelector("#btnReset");
btnReset.addEventListener("click", reset);
