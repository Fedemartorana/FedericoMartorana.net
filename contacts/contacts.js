// Inizializza EmailJS
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // sostituisci con la tua public key
})();

// Gestione invio form
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      // Mostra overlay GOTCHA
      document.getElementById("gotcha-overlay").style.display = "flex";
    }, (error) => {
      alert("FAILED... " + JSON.stringify(error));
    });
});

// Fascia info
function updateDateTime() {
  const now = new Date();
  document.getElementById("date-time").textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

document.addEventListener("mousemove", (e) => {
  document.getElementById("cursor-pos").textContent = `x:${e.clientX}, y:${e.clientY}`;
});

// Numero random reality
document.getElementById("reality-number").textContent = `reality ${Math.floor(Math.random() * 240) + 1}`;
