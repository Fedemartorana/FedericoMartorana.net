const worksContainer = document.getElementById('works-container');
const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color') || '#000'; // Default fallback nero
const realityNum = urlParams.get('layoutNum');

// Imposta colore dinamico per il footer tramite variabile CSS
document.documentElement.style.setProperty('--reality-color', color);

const layoutText = document.getElementById("layout-text");
const cursorPosition = document.getElementById("cursor-position");
const dateTimeSpan = document.querySelector('.date-time');

// Lista progetti
const projects = [
    { title: "Miesian House", image: "/img/miesianhouse.jpg" },
    { title: "Hypogeum", image: "/img/hypogeum.jpg" },
    { title: "House Atelier", image: "/img/houseatelier.jpg" },
    { title: "Archive, Exhibit, Inhabit", image: "/img/archiveexhibitinhabit.jpg" },
    { title: "Tetra", image: "/img/tetra.jpg" }
];

// Genera quadrati progetto
projects.forEach(project => {
    const square = document.createElement('div');
    square.className = 'project-square';
    square.style.border = `0px solid ${color}`;

    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;

    const overlay = document.createElement('div');
    overlay.className = 'project-overlay';

    // Genera nome cartella/HTML basato sul titolo
    const projectFolder = project.title.toLowerCase().replace(/\s+/g, '');
    const projectUrl = `projects/${projectFolder}/${projectFolder}.html`;

const titleLink = document.createElement('a');
titleLink.textContent = project.title;
const projectFolder = project.title.toLowerCase().replace(/\s+/g, '');
titleLink.href = `/projects/${projectFolder}/${projectFolder}.html`;
titleLink.style.color = 'transparent';
titleLink.style.textDecoration = 'none';
titleLink.style.cursor = 'pointer';


    // Hover effect
    square.addEventListener('mouseenter', () => {
        overlay.style.background = hexToRgba(color, 0.5);
        overlay.style.color = color;
        titleLink.style.color = color;
    });

    square.addEventListener('mouseleave', () => {
        overlay.style.background = 'transparent';
        overlay.style.color = 'transparent';
        titleLink.style.color = 'transparent';
    });

    overlay.appendChild(titleLink);
    square.appendChild(img);
    square.appendChild(overlay);
    worksContainer.appendChild(square);
});

// Indicatore layout
layoutText.textContent = `Reality #${realityNum}`;

// Cursore custom
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
cursor.textContent = '+';
document.body.appendChild(cursor);
cursor.style.color = color;

// Movimento cursore
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

// Colore dinamico per data, layout e cursore (testo bianco)
dateTimeSpan.style.color = '#ffffff';
layoutText.style.color = '#ffffff';
cursorPosition.style.color = '#ffffff';

// Funzione per convertire HEX in RGBA con opacità
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
