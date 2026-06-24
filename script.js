const cursor = document.getElementById('cursor');
const clock = document.getElementById('clock');
const archivePath = document.getElementById('archivePath');
const liveCoordinates = document.getElementById('liveCoordinates');
const modeIndicator = document.getElementById('modeIndicator');

const surveys = [
  { label: 'San Marcellino', coords: '45.1337 N / 10.0245 E', path: '/archive/45.1337-10.0245' },
  { label: 'Sant Elia', coords: '45.8081 N / 9.0852 E', path: '/archive/45.8081-9.0852' },
  { label: 'EFESTO', coords: '45.3626 N / 9.6818 E', path: '/archive/45.3626-9.6818' },
  { label: 'Milan Origin', coords: '45.4654 N / 9.1859 E', path: '/archive/45.4654-9.1859' }
];

const selectedSurvey = surveys[Math.floor(Math.random() * surveys.length)];

if (archivePath) archivePath.textContent = selectedSurvey.path;
if (liveCoordinates) liveCoordinates.innerHTML = selectedSurvey.coords + '<br>' + selectedSurvey.label + ' / survey origin';
if (modeIndicator) {
  modeIndicator.innerHTML = 'Keyboard commands<br>A - archive mode<br>W - wireframe cloud<br>Esc - close project<br>Survey: ' + selectedSurvey.label;
}

document.querySelectorAll('.nav-link').forEach(function(link) {
  if (link.textContent.includes('Professional Works')) {
    link.href = 'proworks/proworks.html';
    link.removeAttribute('onclick');
    link.removeAttribute('aria-disabled');
    const meta = link.querySelector('.nav-meta');
    if (meta) meta.textContent = 'Survey / documentation / representation';
  }
});

window.addEventListener('mousemove', function(e) {
  if (!cursor) return;
  const nx = e.clientX / window.innerWidth;
  const ny = e.clientY / window.innerHeight;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursor.textContent = nx.toFixed(2) + ' / ' + ny.toFixed(2);
}); 

function updateClock() {
  if (!clock) return;
  clock.textContent = new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
updateClock(); 
setInterval(updateClock, 1000);

window.addEventListener('keydown', function(e) {
  const k = e.key.toLowerCase();
  if (k === 'a') document.body.classList.toggle('archive-mode');
});