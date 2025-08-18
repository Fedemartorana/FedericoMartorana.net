const worksContainer = document.getElementById('works-container');
const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color') || '#000000'; 
const realityNum = urlParams.get('layoutNum') || '–';

// Imposta colore dinamico per il footer e tutti i testi
document.documentElement.style.setProperty('--reality-color', color);

const layoutText = document.getElementById("layout-text");
const cursorPosition = document.getElementById("cursor-position");
const dateTimeSpan = document.querySelector('.date-time');
const customCursor = document.getElementById('custom-cursor');

// Lista dei progetti
const projects = [
    { title: "Miesian House", image: "/img/miesianhouse/miesianhouse.jpg" },
    { title: "Hypogeum", image: "/img/hypogeum/hypogeum.jpg" },
    { title: "House Atelier", image: "/img/houseatelier/houseatelier.jpg" },
    { title: "Archive, Exhibit, Inhabit", image: "/img/archiveexhibitinhabit/archiveexhibitinhabit.jpg" },
    { title: "Tetra", image: "/img/tetra/tetra.jpg" }
];

// Generazione dinamica dei riquadri
projects.forEach(project => {
    const square = document.createElement('div');
    square.className = 'project-square';

    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;

    const overlay = document.createElement('div');
    overlay.className = 'project-overlay';

    const projectFolder = project.title.toLowerCase().replace(/\s+/g, '');
    const titleLink = document.createElement('a');
    titleLink.textContent = project.title;

    const params = new URLSearchParams();
    params.set('color', color);
    if (realityNum) params.set('layoutNum', realityNum);

    titleLink.href = `/projects/${projectFolder}/${projectFolder}.html?${params.toString()}`;
    titleLink.style.color = 'inherit';
    titleLink.style.textDecoration = 'none';
    titleLink.style.cursor = 'pointer';

    overlay.appendChild(titleLink);
    square.appendChild(img);
    square.appendChild(overlay);
    worksContainer.appendChild(square);
});

// Imposta numero layout nel footer
layoutText.textContent = `Reality #${realityNum}`;

// Movimento cursore custom e coordinate
window.addEventListener('mousemove', e => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
    cursorPosition.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
});

// Data e ora aggiornate ogni secondo
function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleDateString('it-IT', { year: 'numeric', month: '2-digit', day: '2-digit' }) +
                      ' ' +
                      now.toLocaleTimeString('it-IT', { hour12: false });
    dateTimeSpan.textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Colore testo fascia sempre bianco
dateTimeSpan.style.color = '#ffffff';
layoutText.style.color = '#ffffff';
cursorPosition.style.color = '#ffffff';

// Colore cursore personalizzato
if(customCursor) customCursor.style.color = color;
