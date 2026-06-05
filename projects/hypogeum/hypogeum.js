const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color') || '#000000';
const layout = urlParams.get('layoutNum') || '–';

document.documentElement.style.setProperty('--reality-color', color);

const layoutText = document.getElementById("layout-text");
if (layoutText) layoutText.textContent = `Reality #${layout}`;

const dateTimeSpan = document.querySelector('.date-time');
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleDateString('it-IT') + ' ' +
    now.toLocaleTimeString('it-IT', { hour12: false });
  if (dateTimeSpan) dateTimeSpan.textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 1000);

const cursor = document.getElementById('custom-cursor');
const cursorPosition = document.getElementById('cursor-position');

window.addEventListener('mousemove', e => {
  if(cursor){
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }
  if(cursorPosition){
    cursorPosition.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
  }
});

const projectTitle = document.querySelector('.project-title');
if (projectTitle) projectTitle.style.color = color;

const backLink = document.getElementById('back-link');
if (backLink) {
  backLink.style.color = color;
  backLink.style.cursor = 'none';
}

const archivePreview = document.getElementById('archive-preview');
const archiveCaption = document.getElementById('archive-caption');
const archiveRows = document.querySelectorAll('.image-index-row');

archiveRows.forEach(row => {
  row.addEventListener('click', () => {
    archiveRows.forEach(item => item.classList.remove('is-active'));
    row.classList.add('is-active');

    const src = row.getAttribute('data-src');
    const caption = row.getAttribute('data-caption');

    if (archivePreview && src) {
      archivePreview.style.opacity = '0';
      window.setTimeout(() => {
        archivePreview.src = src;
        archivePreview.alt = caption || '';
        archivePreview.style.opacity = '1';
      }, 120);
    }

    if (archiveCaption && caption) {
      archiveCaption.textContent = caption;
    }
  });
});
