const container = document.getElementById('container');
const BLOCK_SIZE = 10;
const COLS = Math.floor(window.innerWidth / BLOCK_SIZE);
const ROWS = Math.floor((window.innerHeight * 0.6) / BLOCK_SIZE); // 60% container height

// Stato colonna per costruzione
let filled = Array(COLS).fill(0);

// Funzione per creare un blocco in colonna e riga specifica
function createBlock(col, row) {
  const block = document.createElement('div');
  block.className = 'block';
  block.style.gridColumnStart = col + 1;
  block.style.gridRowStart = row;
  container.appendChild(block);
  return block;
}

// Funzione per aggiungere i blocchi con apparizione graduale
async function buildBlocksGradually(totalBlocks = 500, delay = 0.5) {
  for (let i = 0; i < totalBlocks; i++) {
    // Scegli colonna casuale che non sia piena
    let col;
    do {
      col = Math.floor(Math.random() * COLS);
    } while (filled[col] >= ROWS);

    const row = ROWS - filled[col];
    const block = createBlock(col, row);
    
    // Piccolo delay prima di mostrare il blocco
    await new Promise(r => setTimeout(r, delay));
    block.classList.add('visible');

    filled[col]++;
  }
}

// Avvio costruzione
buildBlocksGradually();

// Aggiorna pagina al resize
window.addEventListener('resize', () => {
  location.reload();
});
