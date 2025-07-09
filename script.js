const container = document.getElementById('container');
const BLOCK_SIZE = 10;
const COLS = Math.floor(window.innerWidth / BLOCK_SIZE);
const ROWS = Math.floor((window.innerHeight * 0.6) / BLOCK_SIZE); // 60% container height

let filled = Array(COLS).fill(0);
let blocks = []; // memorizziamo tutti i blocchi

function createBlock(col, row) {
  const block = document.createElement('div');
  block.className = 'block';
  block.style.gridColumnStart = col + 1;
  block.style.gridRowStart = row;
  container.appendChild(block);
  return block;
}

// Definiamo il perimetro del cuore in coordinate (col, row)
// Qui un esempio semplice, adattalo in base alla griglia
// Le coordinate sono relative alla griglia, con origine in basso sinistra
const heartOutline = new Set();

// Funzione helper per aggiungere una linea orizzontale di blocchi al perimetro
function addHorizontalLine(y, xStart, xEnd) {
  for (let x = xStart; x <= xEnd; x++) {
    heartOutline.add(`${x},${y}`);
  }
}

// Funzione helper per aggiungere una linea verticale di blocchi al perimetro
function addVerticalLine(x, yStart, yEnd) {
  for (let y = yStart; y <= yEnd; y++) {
    heartOutline.add(`${x},${y}`);
  }
}

// Disegniamo una forma di cuore stilizzato a partire dal basso (adatta al numero di righe e colonne)
const mid = Math.floor(COLS / 2);
const bottom = 1;
const top = ROWS - 1;

// Perimetro cuore (esempio semplice e stilizzato)
addHorizontalLine(bottom, mid - 5, mid + 5);         // base cuore
addHorizontalLine(bottom + 6, mid - 8, mid - 2);     // lato sinistro alto
addHorizontalLine(bottom + 6, mid + 2, mid + 8);     // lato destro alto

addVerticalLine(mid - 8, bottom + 2, bottom + 6);    // lato sinistro verticale
addVerticalLine(mid + 8, bottom + 2, bottom + 6);    // lato destro verticale

// Connetti angoli curvi (approssimazione diagonali)
heartOutline.add(`${mid - 7},${bottom + 7}`);
heartOutline.add(`${mid - 6},${bottom + 8}`);
heartOutline.add(`${mid + 7},${bottom + 7}`);
heartOutline.add(`${mid + 6},${bottom + 8}`);

// Costruzione blocchi
async function buildBlocksGradually(totalBlocks = COLS * ROWS, delay = 5) {
  for (let i = 0; i < totalBlocks; i++) {
    let col;
    do {
      col = Math.floor(Math.random() * COLS);
    } while (filled[col] >= ROWS);

    const row = ROWS - filled[col];
    const block = createBlock(col, row);
    blocks.push({block, col, row});

    await new Promise(r => setTimeout(r, delay));
    block.classList.add('visible');

    filled[col]++;
  }

  // Quando finito, disegna perimetro cuore in nero (blocchi neri)
  drawHeartPerimeter();
}

function drawHeartPerimeter() {
  for (const {block, col, row} of blocks) {
    const key = `${col},${row}`;
    if (heartOutline.has(key)) {
      // Perimetro cuore: blocchi neri (sfondo nero o opacità 1 nera)
      block.style.background = '#000';
      block.style.opacity = '1';
    } else {
      // Dentro cuore: blocchi bianchi visibili
      block.style.background = 'white';
      block.style.opacity = '0.9';
    }
  }
}

buildBlocksGradually();

window.addEventListener('resize', () => {
  location.reload();
});
