const worksContainer = document.getElementById('works-container');

const papers = [
  { title: 'Thesis', image: '/img/thesis/thesis.jpg', href: '../extras/thesis/thesis.html' }
];

papers.forEach((paper, index) => {
  const row = document.createElement('a');
  row.className = 'project-square';
  row.href = paper.href;

  const overlay = document.createElement('div');
  overlay.className = 'project-overlay';

  const title = document.createElement('span');
  title.textContent = paper.title;
  overlay.appendChild(title);

  const img = document.createElement('img');
  img.src = paper.image;
  img.alt = paper.title;

  const meta = document.createElement('span');
  meta.className = 'archive-row-meta';
  meta.textContent = String(index + 1).padStart(2, '0') + ' / Paper';

  row.appendChild(overlay);
  row.appendChild(img);
  row.appendChild(meta);
  worksContainer.appendChild(row);
});