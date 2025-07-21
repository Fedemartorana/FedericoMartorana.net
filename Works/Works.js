const worksContainer = document.getElementById('works-container');
const urlParams = new URLSearchParams(window.location.search);

// Legge parametri URL: colore e layout (reality)
const color = urlParams.get('color') || '#000000';  // fallback nero
const layoutNum = urlParams.get('layout') || '1';   // fallback layout 1

const layoutText = document.getElementById("layout-text");
const cursorPosition = document.getElementById("cursor-position");
const dateTimeSpan = document.querySelector('.date-time');

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

    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;

    const overlay = document.createElement('div');
    overlay.className = 'project-overlay';
    overlay.textContent = project.title;

    // Hover effect
    square.addEventListener('mouseenter', () => {
        overlay.style.background = `rgba(0,0,0,0.5)`;
        overlay.style.color = color;
    });

    square.addEventListener('mouseleave', () => {
        overlay.style.background = `rgba(0,0,0,0)`;
        overlay.style.color = 'transparent';
    });

    square.appendChild(img);
    square.appendChild(overlay);
    worksContainer.appendChild(square);
});

// Aggiorna indicatore layout con reality e colore
layoutText.textContent = `Reality ${layoutNum} / 240`;
layoutText.style.color = color;

// Cursore custom
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
cursor.textContent = '+';
cursor.style.color = color;
document.body.appendChild(cursor);

// Movimento cursore
window.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorPosition.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
    cursorPosition.style.color = color;
});

// Data e ora
function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleDateString('it-IT', { year: 'numeric', month: '2-digit', day: '2-digit' }) +
                      ' ' +
                      now.toLocaleTimeString('it-IT', { hour12: false });
    dateTimeSpan.textContent = formatted;
    dateTimeSpan.style.color = color;
}
updateDateTime();
setInterval(updateDateTime, 1000);
