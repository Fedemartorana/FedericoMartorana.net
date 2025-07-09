const container = document.getElementById("container");
const blockSize = 10; // dimensione del cubetto
const cols = Math.floor(window.innerWidth / (blockSize + 1));
const rows = Math.floor(window.innerHeight * 0.6 / (blockSize + 1));
const total = cols * rows;

let blocks = [];

function createGrid() {
  container.innerHTML = ""; // pulisce il contenitore
  blocks = [];

  for (let i = 0; i < total; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    container.appendChild(block);
    blocks.push(block);
  }
}

function fillGradually(index = 0) {
  if (index >= blocks.length) {
    setTimeout(() => showHeart(), 500); // attiva il cuore dopo riempimento
    return;
  }

  blocks[index].classList.add("visible");

  requestAnimationFrame(() => {
    fillGradually(index + 1);
  });
}

function showHeart() {
  const heart = getHeartPattern(cols, rows);

  // spegne tutti i blocchi
  blocks.forEach((block, i) => {
    const x = i % cols;
    const y = Math.floor(i / cols);
    if (!heart.some(([hx, hy]) => hx === x && hy === y)) {
      block.classList.remove("visible");
    }
  });
}

function getHeartPattern(cols, rows) {
  const centerX = Math.floor(cols / 2);
  const centerY = Math.floor(rows / 2);

  const heartCoords = [];

  // disegna un cuore stilizzato con punti manuali rispetto al centro
  const rawHeart = [
    [0, -2], [-1, -2], [1, -2],
    [-2, -1], [2, -1],
    [-3, 0], [-2, 0], [2, 0], [3, 0],
    [-2, 1], [2, 1],
    [-1, 2], [1, 2],
    [0, 3],
  ];

  rawHeart.forEach(([dx, dy]) => {
    heartCoords.push([centerX + dx, centerY + dy]);
  });

  return heartCoords;
}

// inizializza
createGrid();
fillGradually();
