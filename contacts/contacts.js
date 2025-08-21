// Imposta colore reality e numero da URL
const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color') || '#000000';
const layout = urlParams.get('layoutNum') || '–';

document.documentElement.style.setProperty('--reality-color', color);

const layoutText = document.getElementById("layout-text");
if (layoutText) layoutText.textContent = `Reality #${layout}`;

// Data e ora
const dateTimeSpan = document.querySelector('.date-time');
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleDateString('it-IT') + ' ' +
    now.toLocaleTimeString('it-IT', { hour12: false });
  if (dateTimeSpan) dateTimeSpan.textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Cursore
const cursor = document.getElementById('custom-cursor');
const cursorPosition = document.getElementById('cursor-position');

window.addEventListener('mousemove', e => {
  if (cursor) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }
  if (cursorPosition) {
    cursorPosition.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
  }
});

// EmailJS inizializzazione (sostituisci con le tue chiavi!)
emailjs.init("Hwzu2esk_kltPrwsd");

const form = document.getElementById("contact-form");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_sgw22gh", "template_oirjqf4", this)
    .then(() => {
      alert("Messaggio inviato con successo!");
      form.reset();
    }, (error) => {
      alert("Errore nell'invio: " + JSON.stringify(error));
    });
});
