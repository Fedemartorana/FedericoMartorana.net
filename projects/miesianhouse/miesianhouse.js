const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color') || '#000000';
const layout = urlParams.get('layoutNum') || '–';

// Imposta colore reality
document.documentElement.style.setProperty('--reality-color', color);

// Aggiorna testo Reality
const layoutText = document.getElementById("layout-text");
layoutText.textContent = `Reality #${layout}`;

// Data e ora
const dateTimeSpan = document.querySelector('.date-time');
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleDateString('it-IT') + ' ' +
    now.toLocaleTimeString('it-IT', { hour12: false });
  dateTimeSpan.textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Cursore personalizzato
const cursor = document.getElementById('custom-cursor');
const cursorPosition = document.getElementById('cursor-position');

cursor.style.color = color;
layoutText.style.color = 'white';
dateTimeSpan.style.color = 'white';
cursorPosition.style.color = 'white';

window.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  cursorPosition.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
});

// Titolo progetto in colore reality
const projectTitle = document.querySelector('.project-title');
if (projectTitle) projectTitle.style.color = color;

// Link "Back to works"
const backLink = document.getElementById('back-link');
if (backLink) {
  backLink.style.color = color;
  backLink.style.cursor = 'pointer';
  backLink.addEventListener('click', e => {
    e.preventDefault();
    const targetURL = `../../works/works.html?color=${encodeURIComponent(color)}&layoutNum=${encodeURIComponent(layout)}`;
    window.location.href = targetURL;
  });
}
