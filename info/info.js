// Numero reality casuale
const realityNumber = document.getElementById("realityNumber");
realityNumber.textContent = "reality " + Math.floor(Math.random() * 240 + 1);

// Data e ora
const dateTime = document.getElementById("dateTime");
function updateDateTime() {
  const now = new Date();
  dateTime.textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Posizione cursore
const cursorPosition = document.getElementById("cursorPosition");
document.addEventListener("mousemove", (e) => {
  cursorPosition.textContent = `x:${e.clientX}, y:${e.clientY}`;
});

// Imposta colore reality
const colors = ["#000000", "#FF0000", "#00FF00", "#0000FF", "#FF00FF", "#00FFFF", "#FFA500", "#800080", "#808080", "#008080"];
const chosenColor = colors[Math.floor(Math.random() * colors.length)];
document.documentElement.style.setProperty("--reality-color", chosenColor);
