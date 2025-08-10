// Leggi parametri URL per colore e layout
const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color') || '#000000';
const layout = urlParams.get('layoutNum') || '–';

// Imposta variabile CSS per colore fascia
document.documentElement.style.setProperty('--reality-color', color);

// Aggiorna testo Reality
const layoutText = document.getElementById("layout-text");
layoutText.textContent = `Reality #${layout}`;

// Aggiorna data e ora
const dateTimeSpan = document.querySelector('.date-time');
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleDateString('it-IT') + ' ' + now.toLocaleTimeString('it-IT', { hour12: false });
  dateTimeSpan.textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Cursore personalizzato e coordinate
const cursor = document.getElementById('custom-cursor');
const cursorPosition = document.getElementById('cursor-position');
cursor.style.color = color;
layoutText.style.color = 'white';       // testo fascia sempre bianco
dateTimeSpan.style.color = 'white';
cursorPosition.style.color = 'white';

window.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  cursorPosition.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
});

// Colore dinamico su elementi della pagina
const projectTitle = document.querySelector('.project-title');
if (projectTitle) projectTitle.style.color = color;

const backLink = document.getElementById('back-link');
if (backLink) {
  backLink.style.color = color;
  // Imposta link relativo semplice per evitare 404, ma mantiene i parametri URL corretti
  backLink.href = `./works.html?color=${encodeURIComponent(color)}&layoutNum=${encodeURIComponent(layout)}`;
}
