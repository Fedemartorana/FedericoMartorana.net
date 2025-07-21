const worksContainer = document.getElementById('works-container');
const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color') || '#000'; // Default fallback

const layoutText = document.getElementById("layout-text");
const cursorPosition = document.getElementById("cursor-position");
const dateTimeSpan = document.querySelector('.date-time');

// Funzione helper per convertire HEX in RGBA con alpha
function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
}

// Lista progetti (sostituisci con i tuoi dati reali)
const projects = [
    { title: "Progetto 1", image: "img/progetto1.jpg" },
    { title: "Progetto 2", image: "img/progetto2.jpg" },
    { title: "Progetto 3", image: "img/progetto3.jpg" },
    { title: "Progetto 4", image: "img/progetto4.jpg" }
];

// Genera quadrati progetto
projects.forEach(project => {
    const square = document.createElement('div');
    square.className = 'project-square';
    square.style.border = `1px solid ${color}`;
    square.style.background = '#fff'; // Sfondo bianco fisso

    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;

    const overlay = document.createElement('div');
    overlay.className = 'project-overlay';
    overlay.textContent = project.title;

    // Hover effect con patina colorata e testo bianco
    square.addEventListener('mouseenter', () => {
        overlay.style.background = hexToRgba(color, 0.5); // Patina colore reality trasparente
        overlay.style.color = '#fff'; // Testo bianco per leggibilità
    });

    square.addEventListener('mouseleave', () => {
        overlay.style.background = 'rgba(0,0,0,0)'; // Patina trasparente
        overlay.style.color = 'transparent'; // Nasconde testo
    });

    square.appendChild(img);
    square.appendChild(overlay);
    worksContainer.appendChild(square);
});

// Indicatore layout
layoutText.textContent = "Reality - Works View";

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

// Colore dinamico per indicatori
dateTimeSpan.style.color = color;
layoutText.style.color = color;
cursorPosition.style.color = color;
