const worksContainer = document.getElementById('works-container');

const projects = [
  { title: 'Miesian House', image: '/img/miesianhouse/miesianhouse.jpg', href: '../projects/miesianhouse/miesianhouse.html' },
  { title: 'Hypogeum', image: '/img/hypogeum/hypogeum.jpg', href: '../projects/hypogeum/hypogeum.html' },
  { title: 'House Atelier', image: '/img/houseatelier/houseatelier.jpg', href: '../projects/houseatelier/houseatelier.html' },
  { title: 'Archive Exhibit Inhabit', image: '/img/archiveexhibitinhabit/archiveexhibitinhabit.jpg', href: '../projects/archiveexhibitinhabit/archiveexhibitinhabit.html' },
  { title: 'Tetra', image: '/img/tetra/tetra.jpg', href: '../projects/tetra/tetra.html' },
  { title: 'Living Sculpture', image: '/img/livingsculpture/livingsculpture.jpg', href: '../projects/livingsculpture/livingsculpture.html' }
];

projects.forEach((project, index) => {
  const row = document.createElement('a');
  row.className = 'project-square';
  row.href = project.href;

  const overlay = document.createElement('div');
  overlay.className = 'project-overlay';

  const title = document.createElement('span');
  title.textContent = project.title;
  overlay.appendChild(title);

  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.title;

  const meta = document.createElement('span');
  meta.className = 'archive-row-meta';
  meta.textContent = String(index + 1).padStart(2, '0') + ' / Academic Work';

  row.appendChild(overlay);
  row.appendChild(img);
  row.appendChild(meta);
  worksContainer.appendChild(row);
});
