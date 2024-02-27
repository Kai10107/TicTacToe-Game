//..
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
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
let options = ["","","","","","","","",""];
let currentPlayer= "X";
let running = false;

//ZACH
function initializeGame(){
  cells.forEach(cell => cell.addEventListener("click", cellClicked))
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s Turn`;
}

//Kai
function cellClicked(){
const cellindex =this.getAttribute("cellindex");

if (options[cellindex] != "" || !running){
   return
}

updateCell(this, cellindex);
checkWinner();
}

function updateCell(){
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer(){

}
function checkWinner(){

}

function restartGame(){

}
 function updateScoreboard(){
  
 }
