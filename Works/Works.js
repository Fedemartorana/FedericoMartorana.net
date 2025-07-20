// Funzione per ottenere i parametri URL
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Gestione colore tema
const colorFromUrl = getQueryParam('color');
if (colorFromUrl) {
  localStorage.setItem('themeColor', colorFromUrl);
}
const themeColor = colorFromUrl || localStorage.getItem('themeColor') || "#000";
document.documentElement.style.setProperty('--theme-color', themeColor);

// Dati esempio per i lavori
const works = [
  { title: "Progetto 1", description: "Descrizione progetto 1" },
  { title: "Progetto 2", description: "Descrizione progetto 2" },
  { title: "Progetto 3", description: "Descrizione progetto 3" },
  { title: "Progetto 4", description: "Descrizione progetto 4" }
];

const worksList = document.getElementById("works-list");
const workDetails = document.getElementById("work-details");

// Popola la lista lavori
works.forEach(work => {
  const item = document.createElement("div");
  item.className = "work-item";
  item.textContent = work.title;

  item.addEventListener("click", () => {
    workDetails.innerHTML = `<h2>${work.title}</h2><p>${work.description}</p>`;
    document.querySelectorAll('.work-item').forEach(el => el.classList.add('dimmed'));
    item.classList.remove('dimmed');
  });

  worksList.appendChild(item);
});

// --------- Indicatori in basso ---------

// Data e ora
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

// Reality / layout indicator
const layoutText = document.getElementById('layout-text');
const realityFromUrl = getQueryParam('reality') || 0;
if (layoutText) {
  layoutText.textContent = `Reality: ${realityFromUrl}`;
}

// Cursore personalizzato
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
cursor.textContent = '+';
document.body.appendChild(cursor);

// Stile cursore
cursor.style.color = color;

// Movimento e posizione cursore
window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  if (cursorPosDisplay) {
    cursorPosDisplay.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
  }
});
 
