const container = document.getElementById('container');
const BLOCK_SIZE = 10;
const COLS = Math.floor(window.innerWidth / BLOCK_SIZE);
const ROWS = Math.floor((window.innerHeight * 0.6) / BLOCK_SIZE); // 60% container height

// Stato di quante righe sono state riempite per colonna
let filled = Array(COLS).fill(0);

// Imposta griglia CSS dinamicamente
container.style.gridTemplateColumns = `repeat(${COLS}, ${BLOCK_SIZE}px)`;
container.style.gridTemplateRows = `repeat(${ROWS}, ${BLOCK_SIZE}px)`;

// Crea un blocco nella posizione specificata
function createBlock(col, row) {
  const block = document.createElement('div');
  block.className = 'block';

  // Posiziona partendo dal basso
  block.style.gridColumnStart = col + 1;
  block.style.gridRowStart = ROWS - row;

  container.appendChild(block);
  return block;
}

// Costruzione graduale
async function buildBlocksGradually(totalBlocks = COLS * ROWS, delay = 20) {
  for (let i = 0; i < totalBlocks; i++) {
    let col;
    do {
      col = Math.floor(Math.random() * COLS);
    } while (filled[col] >= ROWS);

    const row = filled[col];
    const block = createBlock(col, row);

    await new Promise(r => setTimeout(r, delay));
    block.classList.add('visible');

    filled[col]++;
  }
}

// Avvia
buildBlocksGradually();

// Ricarica su resize
window.addEventListener('resize', () => {
  location.reload();
});
