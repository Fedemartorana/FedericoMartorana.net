// Prendi il colore della variante dalla home tramite URL o localStorage
const themeColor = localStorage.getItem('themeColor') || "#000";
document.documentElement.style.setProperty('--theme-color', themeColor);

// Esempio di lavori
const works = [
  { title: "Progetto 1", description: "Descrizione progetto 1" },
  { title: "Progetto 2", description: "Descrizione progetto 2" },
  { title: "Progetto 3", description: "Descrizione progetto 3" },
  { title: "Progetto 4", description: "Descrizione progetto 4" }
];

const worksList = document.getElementById("works-list");
const workDetails = document.getElementById("work-details");

works.forEach((work, index) => {
  const item = document.createElement("div");
  item.className = "work-item";
  item.textContent = work.title;

  item.addEventListener("click", () => {
    workDetails.innerHTML = `<h2>${work.title}</h2><p>${work.description}</p>`;

    // Sbiadisce gli altri elementi
    document.querySelectorAll('.work-item').forEach(el => el.classList.add('dimmed'));
    item.classList.remove('dimmed');
  });

  worksList.appendChild(item);
});
