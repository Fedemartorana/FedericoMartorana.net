// Prendi colore reality da URL o localStorage
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

const colorFromUrl = getQueryParam('color');
if (colorFromUrl) {
  localStorage.setItem('themeColor', colorFromUrl);
}
const themeColor = colorFromUrl || localStorage.getItem('themeColor') || "#000";
document.documentElement.style.setProperty('--theme-color', themeColor);

// Esempio di works con immagini
const works = [
  { title: "Progetto 1", img: "img/progetto1.jpg" },
  { title: "Progetto 2", img: "img/progetto2.jpg" },
  { title: "Progetto 3", img: "img/progetto3.jpg" },
  { title: "Progetto 4", img: "img/progetto4.jpg" }
];

const worksGrid = document.getElementById("works-grid");

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
  if (!dateTimeSpan) return;
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
if (realityNumber) {
  realityNumber.textContent = `Reality: ${realityFromUrl}`;
}

// Cursor personalizzato
const cursorPosDisplay = document.getElementById('cursor-pos');
const oldCursor = document.getElementById('custom-cursor');
if (oldCursor) oldCursor.remove();

const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
cursor.textContent = '+';
document.body.appendChild(cursor);
cursor.style.position = 'fixed';
cursor.style.top = '0';
cursor.style.left = '0';
cursor.style.transform = 'translate(-50%, -50%)';
cursor.style.pointerEvents = 'none';
cursor.style.color = themeColor;
cursor.style.fontSize = '20px';
cursor.style.fontFamily = 'monospace';
cursor.style.zIndex = '9999';

window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  if (cursorPosDisplay) {
    cursorPosDisplay.textContent = `Cursor: ${e.clientX}, ${e.clientY}`;
  }
});
