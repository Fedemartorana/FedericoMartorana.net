
const grid = document.getElementById("grid");
const cols = Math.floor(window.innerWidth / 20);
const rows = Math.floor(window.innerHeight / 20);
let filled = Array(cols).fill(rows);

function addBlock() {
  const col = Math.floor(Math.random() * cols);
  if (filled[col] <= 0) return;
  const block = document.createElement("div");
  block.className = "block";
  block.style.gridColumnStart = col + 1;
  block.style.gridRowStart = filled[col];
  filled[col]--;
  grid.appendChild(block);
}

setInterval(addBlock, 50);
