const worksContainer = document.getElementById('works-container');
const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color') || '#000000'; // fallback nero
const realityNum = urlParams.get('layoutNum') || '–';

// Imposta colore dinamico per il footer tramite variabile CSS
document.documentElement.style.setProperty('--reality-color', color);

const layoutText = document.getElementById("layout-text");
const cursorPosition = document.getElementById("cursor-position");
const dateTimeSpan = document.querySelector('.date-time');
const customCursor = document.getElementById('custom-cursor');

// Lista dei progetti
const projects = [
    { title: "Thesis", image: "/img/thesis/thesis.jpg" },
    { title: "Dal Co & Chipperfield", image: "/img/dalco&chipperfield/dalco&chipperfield.jpg" },
];

// Funzione HEX → RGBA
function hexToRgba(hex, alpha) {
    let c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c = hex.substring(1).split('');
        if(c.length === 3){
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + `,${alpha})`;
    }
    throw new Error('Invalid HEX color.');
}

// Generazione dinamica dei riquadri
projects.forEach(project => {
    const square = document.createElement('div');
    square.className = 'project-square';

    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;

    const overlay = document.createElement('div');
    overlay.className = 'project-overlay';

    // Link con parametri per mantenere colore e layout, percorso coerente
    const projectFolder = project.title.toLowerCase().replace(/\s+/g, '');
    const titleLink = document.createElement('a');
    titleLink.textContent = project.title;
    const params = new URLSearchParams();
    params.set('color', color);
    if (realityNum) {
        params.set('layoutNum', realityNum);
    }
    titleLink.href = `/extras/${projectFolder}/${projectFolder}.html?${params.toString()}`;

    titleLink.style.color = 'transparent';
    titleLink.style.textDecoration = 'none';
    titleLink.style.cursor = 'pointer';

    // Hover effect
    square.addEventListener('mouseenter', () => {
        overlay.style.background = hexToRgba(color, 0.5);
        overlay.style.color = color;
        titleLink.style.color = color;
        customCursor.style.color = color;
    });

    square.addEventListener('mouseleave', () => {
        overlay.style.background = 'transparent';
        overlay.style.color = 'transparent';
        titleLink.style.color = 'transparent';
        customCursor.style.color = color;
    });

    overlay.appendChild(titleLink);
    square.appendChild(img);
    square.appendChild(overlay);
    worksContainer.appendChild(square);
});

// Imposta numero layout nel footer
layoutText.textContent = `Reality #${realityNum}`;

// Movimento cursore custom e coordinate
window.addEventListener('mousemove', e => {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
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

// Colore testo footer sempre bianco
dateTimeSpan.style.color = '#ffffff';
layoutText.style.color = '#ffffff';
cursorPosition.style.color = '#ffffff';

// Colore titolo e link back
const projectTitle = document.querySelector('.project-title');
if (projectTitle) projectTitle.style.color = color;

const backLink = document.getElementById('back-link');
if (backLink) {
  backLink.style.color = color;
  backLink.style.cursor = 'none';
  backLink.addEventListener('click', (e) => {
    e.preventDefault();
    const targetURL = `../../index.html`;
    window.location.href = targetURL;
  });
}
