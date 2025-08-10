const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color') || '#000000';
const layout = urlParams.get('layout') || '–';

// Indicatori
const layoutText = document.getElementById("layout-text");
layoutText.textContent = `Reality #${layout}`;

// Data e ora
const dateTimeSpan = document.querySelector('.date-time');
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleDateString('it-IT') + ' ' + now.toLocaleTimeString('it-IT', { hour12: false });
  dateTimeSpan.textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Cursore
const cursor = document.getElementById('custom-cursor');
const cursorPosition = document.getElementById('cursor-position');
cursor.style.color = color;
layoutText.style.color = color;
dateTimeSpan.style.color = color;
cursorPosition.style.color = color;

window.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  cursorPosition.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
});

// Colore dinamico su elementi
document.querySelector('.project-title').style.color = color;
document.querySelector('#back-link').style.color = color;

// Mantieni i parametri nella navigazione per il back
const backLink = document.getElementById('back-link');
backLink.href = `../works/works.html?color=${encodeURIComponent(color)}&layoutNum=${encodeURIComponent(layout)}`;
