// Utility per query params
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Colore reality da URL o localStorage
const colorFromUrl = getQueryParam('color');
if (colorFromUrl) {
  localStorage.setItem('themeColor', colorFromUrl);
}
const themeColor = colorFromUrl || localStorage.getItem('themeColor') || "#000";
document.documentElement.style.setProperty('--theme-color', themeColor);

// Lista dei lavori
const works = [
  { title: "HYPOGEUM", img: "immagini/progetto1.jpg" },
  { title: "MIESIAN HOUSE", img: "immagini/progetto2.jpg" },
  { title: "LIVING SCUPLTURE", img: "immagini/progetto3.jpg" },
  { title: "HOUSE ATELIER", img: "immagini/progetto4.jpg" }
];

const worksGrid = document.getElementById("works-grid");

// Genera griglia
works.forEach(work => {
  const square = document.createElement("div");
  square.className = "work-square";

  const img = document.createElement("img");
  img.src = work.img;
  img.alt = work.title;

  const overlay = document.createElement("div");
  overlay.className = "work-overlay";

  const title = document.createElement("div");
  title.className = "work-title";
  title.textContent = work.title;

  overlay.appendChild(title);
  square.appendChild(img);
  square.appendChild(overlay);

  worksGrid.appendChild(square);
});

// Indicatore data/ora
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

// Numero reality
const realityNumber = document.getElementById('reality-number');
const realityFromUrl = getQueryParam('reality') || 0;
realityNumber.textContent = `Reality: ${realityFromUrl}`;

// Cursore personalizzato
const cursorPosDisplay = document.getElementById('cursor-pos');

// Rimuovi eventuale cursore esistente
const oldCursor = document.getElementById('custom-cursor');
if (oldCursor) oldCursor.remove();

const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
cursor.textContent = '+';
document.body.appendChild(cursor);
cursor.style.color = themeColor;

window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursorPosDisplay.textContent = `Cursor: ${e.clientX}, ${e.clientY}`;
});
