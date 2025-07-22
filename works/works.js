const worksContainer = document.getElementById('works-container');
const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color') || '#000'; // Default fallback nero

const layoutText = document.getElementById("layout-text");
const cursorPosition = document.getElementById("cursor-position");
const dateTimeSpan = document.querySelector('.date-time');

// Non modificare lo sfondo del body: resta bianco come da CSS

// Lista progetti (sostituisci con i tuoi dati reali)
const projects = [
    { title: "Progetto 1", image: "img/progetto1.jpg" },
    { title: "Progetto 2", image: "img/progetto2.jpg" },
    { title: "Progetto 3", image: "img/progetto3.jpg" },
    { title: "Progetto 4", image: "img/progetto4.jpg" },
    { title: "Progetto 5", image: "img/progetto5.jpg" },
    { title: "Progetto 6", image: "img/progetto6.jpg" },
    { title: "Progetto 7", image: "img/progetto7.jpg" },
    { title: "Progetto 8", image: "img/progetto8.jpg" },
    { title: "Progetto 9", image: "img/progetto9.jpg" }
];

// Genera quadrati progetto
projects.forEach(project => {
    const square = document.createElement('div');
    square.className = 'project-square';
    square.style.border = `1px solid ${color}`;

    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;

    const overlay = document.createElement('div');
    overlay.className = 'project-overlay';
    overlay.textContent = project.title;
    overlay.style.color = 'transparent';

    // Hover effect
    square.addEventListener('mouseenter', () => {
        overlay.style.background = hexToRgba(color, 0.5);
        overlay.style.color = color; 
    });

    square.addEventListener('mouseleave', () => {
        overlay.style.background = 'transparent';
        overlay.style.color = 'transparent';
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

// Colore dinamico per indicatori (nero fisso)
dateTimeSpan.style.color = '#000';
layoutText.style.color = '#000';
cursorPosition.style.color = '#000';

// Funzione per convertire HEX in RGBA con opacità
function hexToRgba(hex, alpha) {
    let c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c = hex.substring(1).split('');
        if(c.length === 3){
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
    }
    return 'rgba(0,0,0,' + alpha + ')'; // fallback nero
}
