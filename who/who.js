const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color') || '#000000';
const layout = urlParams.get('layoutNum') || '–';

// Imposta colore dinamico
document.documentElement.style.setProperty('--reality-color', color);

// Aggiorna Reality #
const layoutText = document.getElementById("layout-text");
if (layoutText) layoutText.textContent = `Reality #${layout}`;

// Data e ora
const dateTimeSpan = document.querySelector('.date-time');
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleDateString('it-IT') + ' ' +
    now.toLocaleTimeString('it-IT', { hour12: false });
  if (dateTimeSpan) dateTimeSpan.textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Cursore personalizzato
const cursor = document.getElementById('custom-cursor');
const cursorPosition = document.getElementById('cursor-position');
window.addEventListener('mousemove', e => {
  if (cursor) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }
  if (cursorPosition) {
    cursorPosition.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
  }
});

// Colore titolo e link back
const projectTitle = document.querySelector('.project-title');
if (projectTitle) projectTitle.style.color = color;

const backLink = document.getElementById('back-link');
if (backLink) {
  backLink.style.color = color;
  backLink.style.cursor = 'none';
  backLink.addEventListener('click', (e) => {
    e.preventDefault();
    const targetURL = `../../index.html?color=${encodeURIComponent(color)}&layoutNum=${encodeURIComponent(layout)}`;
    window.location.href = targetURL;
  });
}