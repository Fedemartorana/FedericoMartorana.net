const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color') || '#ff0000';
const layout = urlParams.get('layoutNum') || '–';

document.documentElement.style.setProperty('--reality-color', color);

// Aggiorna top bar
document.getElementById("layout-text").textContent = `Reality #${layout}`;
document.querySelector('.date-time').style.color = "white";
document.getElementById('cursor-position').style.color = "white";

// Aggiorna data e ora
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleDateString('it-IT') + ' ' +
    now.toLocaleTimeString('it-IT', { hour12: false });
  document.querySelector('.date-time').textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Cursor custom
const cursor = document.getElementById('custom-cursor');
window.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  document.getElementById('cursor-position').textContent =
    `x: ${e.clientX}, y: ${e.clientY}`;
});

// Colore titolo e back
document.querySelector('.project-title').style.color = color;
const backLink = document.getElementById('back-link');
backLink.style.color = color;
backLink.addEventListener('click', (e) => {
  e.preventDefault();
  const targetURL = `../../works/works.html?color=${encodeURIComponent(color)}&layoutNum=${encodeURIComponent(layout)}`;
  window.location.href = targetURL;
});

// Modal immagini
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.image-frame img').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
