// Funzione per ottenere i parametri URL
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Prendi il colore dal parametro URL
const colorFromUrl = getQueryParam('color');

// Se c'è il colore nell'URL, aggiornalo e salvalo in localStorage
if (colorFromUrl) {
  localStorage.setItem('themeColor', colorFromUrl);
}

// Se no, prendi il colore da localStorage oppure default nero
const themeColor = colorFromUrl || localStorage.getItem('themeColor') || "#000";

// Imposta la variabile CSS --theme-color
document.documentElement.style.setProperty('--theme-color', themeColor);

// Esempio di lavori
const works = [
  { title: "Progetto 1", description: "Descrizione progetto 1" },
  { title: "Progetto 2", description: "Descrizione progetto 2" },
  { title: "Progetto 3", description: "Descrizione progetto 3" },
  { title: "Progetto 4", description: "Descrizione progetto 4" }
];

const worksList = document.getElementById("works-list");
const workDetails = document.getElementById("work-details");

works.forEach((work, index) => {
  const item = document.createElement("div");
  item.className = "work-item";
  item.textContent = work.title;

  item.addEventListener("click", () => {
    workDetails.innerHTML = `<h2>${work.title}</h2><p>${work.description}</p>`;

    // Sbiadisce gli altri elementi
    document.querySelectorAll('.work-item').forEach(el => el.classList.add('dimmed'));
    item.classList.remove('dimmed');
  });

  worksList.appendChild(item);
});

// ---------------------
// Indicatori layout, data e cursore
// ---------------------

// Aggiorna testo reality (se vuoi passarne il numero da URL o altro, modifica qui)
const layoutText = document.getElementById('layout-text');
if (layoutText) {
  layoutText.textContent = 'Reality -'; // oppure setta dinamicamente
}

// Aggiorna data e ora ogni secondo
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


const oldCursor = document.getElementById('custom-cursor');
if (oldCursor) oldCursor.remove();// Cursore personalizzato
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

// Movimento cursore e aggiornamento posizione
const cursorPosition = document.getElementById('cursor-position');
window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  if (cursorPosition) {
    cursorPosition.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
  }
});
