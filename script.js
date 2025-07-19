const layoutText = document.getElementById("layout-text");
const cursorPosition = document.getElementById("cursor-position");
const textContainer = document.getElementById("text-container");

// Colori disponibili
const colors = [
  "#c2c1b6", "#878787", "#e1c57f", "#c76758", "#c1ce93",
  "#88a07e", "#899eaa", "#9b9fc2", "#4d4639", "#1d1d1b"
];

// Scritte
const labels = ["works", "papers", "info", "contacts"];

// Genera tutte le permutazioni delle 4 parole (24 combinazioni)
function getAllPermutations(arr) {
  if (arr.length <= 1) return [arr];
  const perms = [];
  arr.forEach((item, i) => {
    const rest = arr.slice(0, i).concat(arr.slice(i + 1));
    const subPerms = getAllPermutations(rest);
    subPerms.forEach(p => perms.push([item, ...p]));
  });
  return perms;
}

const textPermutations = getAllPermutations(labels);
const totalLayouts = textPermutations.length * colors.length;

// Genera layout casuale
const randomColorIndex = Math.floor(Math.random() * colors.length);
const randomTextPermutation = Math.floor(Math.random() * textPermutations.length);
const layoutNum = randomColorIndex * textPermutations.length + randomTextPermutation + 1;

const color = colors[randomColorIndex];
const selectedOrder = textPermutations[randomTextPermutation];

// Crea le scritte con ordine e colore casuali
selectedOrder.forEach(label => {
  const span = document.createElement("span");
  span.textContent = label;
  span.className = "word";
  span.style.color = color;
  textContainer.appendChild(span);
});

// Aggiorna indicatore reality
layoutText.textContent = `Reality ${layoutNum} / 240`;

// Cursore personalizzato
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
cursor.textContent = '+';
document.body.appendChild(cursor);

window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursorPosition.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
});

// Data e ora
const dateTimeSpan = document.querySelector('.date-time');
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleDateString('it-IT', { year: 'numeric', month: '2-digit', day: '2-digit' }) +
                    ' ' +
                    now.toLocaleTimeString('it-IT', { hour12: false });
  dateTimeSpan.textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 1000);
