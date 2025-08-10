const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color') || '#000000';
const layout = urlParams.get('layoutNum') || '–';  // Legge il parametro corretto

// Elementi DOM
const layoutText = document.getElementById("layout-text");
const dateTimeSpan = document.querySelector('.date-time');
const cursor = document.getElementById('custom-cursor');
const cursorPosition = document.getElementById('cursor-position');
const backLink = document.getElementById('back-link');
const projectTitle = document.querySelector('.project-title');

// Imposta testo Reality con numero
layoutText.textContent = `Reality #${layout}`;

// Funzione aggiornamento data e ora
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleDateString('it-IT') + ' ' + now.toLocaleTimeString('it-IT', { hour12: false });
  dateTimeSpan.textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Imposta colori dinamici
cursor.style.color = color;
layoutText.style.color = '#fff';          // sempre bianco nella barra
dateTimeSpan.style.color = '#fff';        // sempre bianco nella barra
cursorPosition.style.color = '#fff';      // sempre bianco nella barra
projectTitle.style.color = color;
backLink.style.color = color;

// Muovi cursore personalizzato
window.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  cursorPosition.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
});

// Mantieni parametri nel link "back to works"
backLink.href = `../works/works.html?color=${encodeURIComponent(color)}&layoutNum=${encodeURIComponent(layout)}`;
