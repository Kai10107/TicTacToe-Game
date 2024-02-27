
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
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer= "X";
let running = false;

initializeGame();

//ZACH
function initializeGame(){
  cells.forEach(cell => cell.addEventListener("click", cellClicked))
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s Turn`;
  running = true;
}

//Kai
function cellClicked(){
const cellIndex =this.getAttribute("cellIndex");

if (options[cellIndex] != "" || !running){
   return;
}

updateCell(this, cellIndex);
changePlayer();
checkWinner();
}

function updateCell(cell, index){
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer(){
  currentPlayer = (currentPlayer == "X") ? "O" : "X";
  statusText.textContent = `${currentPlayer}'s Turn`;
}
function checkWinner(){
    let roundwon = false;

    for(let i= 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condtion[0]];
        const cellB = options[condtion[1]];
        const cellC = options[condtion[2]];
      
      if(cellA == "" || cellB == "" || cellC == ""){
        continue;
      }
      if(cellA == cellB && cellB == cellC){
        roundwon = true;
        break
      }

      if(roundwon){
        statusText.textContent = `${currentPlayer} Wins!`;
        running = false;
      }
      else if(options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
      }
      else{
        changePlayer();
      }

}
}

function restartGame(){
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = "");
  running = true;
}
 function updateScoreboard(){
  
 }