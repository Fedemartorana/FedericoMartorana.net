const container = document.getElementById('container');
const BLOCK_SIZE = 10;
const COLS = Math.floor(window.innerWidth / BLOCK_SIZE);
const ROWS = Math.floor(window.innerHeight / BLOCK_SIZE);

let filled = Array(COLS).fill(0);
let blocks = [];

// Imposta griglia dinamicamente
container.style.gridTemplateColumns = `repeat(${COLS}, ${BLOCK_SIZE}px)`;
container.style.gridTemplateRows = `repeat(${ROWS}, ${BLOCK_SIZE}px)`;

// Crea blocco
function createBlock(col, row) {
  const block = document.createElement('div');
  block.className = 'block';
  block.style.gridColumnStart = col + 1;
  block.style.gridRowStart = row;
  container.appendChild(block);
  blocks.push({ col, row, element: block });
  return block;
}

// Costruzione completa
async function buildUntilFull(delay = 5) {
  let total = COLS * ROWS;
  let placed = 0;

  while (placed < total) {
    let col;
    do {
      col = Math.floor(Math.random() * COLS);
    } while (filled[col] >= ROWS);

    const row = ROWS - filled[col];
    const block = createBlock(col, row);

    await new Promise(r => setTimeout(r, delay));
    block.classList.add('visible');

    filled[col]++;
    placed++;
  }

  // Dopo costruzione: disegna cuore
  setTimeout(() => drawHeart(), 800);
}

// Disegna cuore stilizzato spegnendo alcuni blocchi
function drawHeart() {
  const heartShape = [
    "00100100",
    "01111110",
    "11111111",
    "11111111",
    "01111110",
    "00111100",
    "00011000",
    "00000000"
  ];

  const offsetX = Math.floor((COLS - 8) / 2);
  const offsetY = Math.floor((ROWS - 8) / 2);

  for (let y = 0; y < heartShape.length; y++) {
    for (let x = 0; x < heartShape[y].length; x++) {
      if (heartShape[y][x] === '0') {
        const col = offsetX + x;
        const row = offsetY + y;
        const block = blocks.find(b => b.col === col && b.row === row);
        if (block) {
          block.element.classList.remove('visible');
          block.element.classList.add('hidden');
        }
      }
    }
  }
}

buildUntilFull();

window.addEventListener('resize', () => location.reload());
