const cursor = document.getElementById('cursor');
const clock = document.getElementById('clock');
const archivePath = document.getElementById('archivePath');

document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
}, true);

const archiveCoordinates = [
  '/archive/45.1337-10.0245',
  '/archive/45.8081-9.0852',
  '/archive/45.3626-9.6818',
  '/archive/45.4654-9.1859'
];

if (archivePath) {
  archivePath.textContent = archiveCoordinates[Math.floor(Math.random() * archiveCoordinates.length)];
}

const finePointer = window.matchMedia('(pointer: fine)').matches;

if (cursor && finePointer) {
  window.addEventListener('mousemove', function (event) {
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
  });
} else if (cursor) {
  cursor.hidden = true;
}

function updateClock() {
  if (!clock) return;
  clock.textContent = new Date().toLocaleTimeString('it-IT', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

updateClock();
window.setInterval(updateClock, 1000);

window.addEventListener('keydown', function (event) {
  if (event.key.toLowerCase() === 'a') {
    document.body.classList.toggle('archive-mode');
  }
});

const unit00Script = document.createElement('script');
unit00Script.src = '/assets/unit00.js?v=20260829-1';
unit00Script.dataset.unit00 = '';
document.head.appendChild(unit00Script);
