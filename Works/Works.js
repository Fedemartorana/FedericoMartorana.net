const dateTimeSpan = document.querySelector('.date-time');
const cursorPosition = document.getElementById("cursor-position");

// Utility per query params
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Colore reality da URL o localStorage
const colorFromUrl = getQueryParam('color');
if (colorFromUrl) {
  localStorage.setItem('themeColor', colorFromUrl);
}
const themeColor = colorFromUrl || localStorage.getItem('themeColor') || "#000";
document.documentElement.style.setProperty('--theme-color', themeColor);

// Lista dei lavori
const works = [
  { title: "Progetto 1", img: "immagini/progetto1.jpg" },
  { title: "Progetto 2", img: "immagini/progetto2.jpg" },
  { title: "Progetto 3", img: "immagini/progetto3.jpg" },
  { title: "Progetto 4", img: "immagini/progetto4.jpg" }
];

const worksGrid = document.getElementById("works-grid");

// Genera griglia
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

// Aggiorna indicatore reality
layoutText.textContent = `Reality ${layoutNum} / 240`;

// Cursore personalizzato
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
cursor.textContent = '+';
document.body.appendChild(cursor);

// Stile cursore
cursor.style.color = color;

// Movimento del cursore
window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursorPosition.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
});

// Data e ora
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleDateString('it-IT', { year: 'numeric', month: '2-digit', day: '2-digit' }) +
                    ' ' +
                    now.toLocaleTimeString('it-IT', { hour12: false });
  dateTimeSpan.textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Colore dinamico anche per data e indicatore layout
dateTimeSpan.style.color = color;
layoutText.style.color = color;
cursorPosition.style.color = color;
