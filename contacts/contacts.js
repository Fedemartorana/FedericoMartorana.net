// Inizializza EmailJS con la tua Public Key
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // sostituisci con la tua public key
})();

// Gestione invio form
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      // Mostra overlay GOTCHA
      document.getElementById("gotcha-overlay").style.display = "flex";
      this.reset();
    }, (error) => {
      document.getElementById("form-status").innerText = "Failed to send message. Try again.";
      console.error("EmailJS error:", error);
    });
});

// Reality number random
const realityNumber = Math.floor(Math.random() * 240) + 1;
document.getElementById("reality-number").innerText = `Reality #${realityNumber}`;

// Data e ora live
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString();
  document.getElementById("date-time").innerText = formatted;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Posizione cursore
document.addEventListener("mousemove", (e) => {
  document.getElementById("cursor-position").innerText = `x:${e.clientX} y:${e.clientY}`;
});
