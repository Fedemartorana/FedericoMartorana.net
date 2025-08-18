const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color') || '#000000';
const layout = urlParams.get('layoutNum') || '–';

// Imposta colore dinamico per tutti i testi e variabile CSS
document.documentElement.style.setProperty('--reality-color', color);

// Aggiorna testo Reality con numero
const layoutText = document.getElementById("layout-text");
if(layoutText) layoutText.textContent = `Reality #${layout}`;

// Aggiorna data e ora
const dateTimeSpan = document.querySelector('.date-time');
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleDateString('it-IT') + ' ' + now.toLocaleTimeString('it-IT', { hour12: false });
  if(dateTimeSpan) dateTimeSpan.textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Cursore personalizzato e coordinate
const cursor = document.getElementById('custom-cursor');
const cursorPosition = document.getElementById('cursor-position');

if(cursor) cursor.style.color = color;
if(layoutText) layoutText.style.color = 'white';       // testo fascia sempre bianco
if(dateTimeSpan) dateTimeSpan.style.color = 'white';
if(cursorPosition) cursorPosition.style.color = 'white';

window.addEventListener('mousemove', e => {
  if(cursor){
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }
  if(cursorPosition){
    cursorPosition.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
  }
});

// Colore dinamico titolo e link back
const projectTitle = document.querySelector('.project-title');
if (projectTitle) projectTitle.style.color = color;

const backLink = document.getElementById('back-link');
if (backLink) {
  backLink.style.color = color;
  backLink.style.cursor = 'none'; 

  backLink.addEventListener('click', (e) => {
    e.preventDefault();
    const targetURL = `../../works/works.html?color=${encodeURIComponent(color)}&layoutNum=${encodeURIComponent(layout)}`;
    window.location.href = targetURL;
  });
}