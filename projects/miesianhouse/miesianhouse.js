// Leggi parametri URL per colore e layout
const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color') || '#000000';
const layout = urlParams.get('layoutNum') || '–';  // default se assente

// Imposta variabile CSS per colore fascia
document.documentElement.style.setProperty('--reality-color', color);

// Aggiorna testo Reality con numero
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

  // Nascondi cursore personalizzato se il puntatore è sopra un'immagine aggiuntiva
  const elemUnder = document.elementFromPoint(e.clientX, e.clientY);
  if (elemUnder && elemUnder.classList.contains('additional-image')) {
    cursor.style.display = 'none';
  } else {
    cursor.style.display = 'block';
  }
});

// Colore dinamico su elementi della pagina
const projectTitle = document.querySelector('.project-title');
if (projectTitle) projectTitle.style.color = color;

// Link "Back to works": uso evento click per evitare problemi di routing 404
const backLink = document.getElementById('back-link');
if (backLink) {
  backLink.style.color = color;
  backLink.style.cursor = 'pointer';

  backLink.addEventListener('click', (e) => {
    e.preventDefault();
    const targetURL = `../../works/works.html?color=${encodeURIComponent(color)}&layoutNum=${encodeURIComponent(layout)}`;
    window.location.href = targetURL;
  });
}

// Rimosso click zoom fullscreen sulle immagini aggiuntive
// Quindi nessun event listener sulle immagini aggiuntive

// Rimosso anche l'overlay fullscreen (non più usato)
// Se vuoi riabilitare il fullscreen, basta ripristinare quel codice
