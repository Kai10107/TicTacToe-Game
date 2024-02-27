//zach
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const scoreXElement = document.querySelector("#scoreX");
const scoreOElement = document.querySelector("#scoreO");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
let scoreX = 0;
let scoreO = 0;

initializeGame();

//Zach 
function initializeGame() {
  cells.forEach(cell => cell.addEventListener("click", cellClicked))
  restartBtn.addEventListener("click", restartGame);
  updateScoreboard();
  statusText.textContent = `${currentPlayer}'s Turn`;
  running = true;
}
//longo
function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");

  if (options[cellIndex] != "" || !running) {
    return;
  }

  updateCell(this, cellIndex);
  checkWinner();
}
//kai
function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}
//zach
function changePlayer() {
  currentPlayer = (currentPlayer == "X") ? "O" : "X";
  statusText.textContent = `${currentPlayer}'s Turn`;
}
//longo
function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = `${currentPlayer} Wins!`;
    if (currentPlayer === "X") {
      scoreX++;
    } else {
      scoreO++;
    }
    updateScoreboard();
    running = false;
  } else if (!options.includes("")) {
    statusText.textContent = `Draw!`;
    running = false;
  } else {
    changePlayer();
  }
}
//kai
function restartGame() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = "");
  running = true;
}
//kai
function updateScoreboard() {
  scoreXElement.textContent = `Score X: ${scoreX}`;
  scoreOElement.textContent = `Score O: ${scoreO}`;
}
