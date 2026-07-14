const worksContainer = document.getElementById('works-container');

const projects = [
  { title: 'Hypogeum', href: '/projects/hypogeum/hypogeum.html' },
  { title: 'House Atelier', href: '/projects/houseatelier/houseatelier.html' },
  { title: 'Archive Exhibit Inhabit', href: '/projects/archiveexhibitinhabit/archiveexhibitinhabit.html' },
  { title: 'Tetra', href: '/projects/tetra/tetra.html' },
  { title: 'EFESTO', href: '/projects/efesto/efesto.html' },
  { title: 'Terzo Tempo', href: '/projects/terzotempo/terzotempo.html' }
];

projects.forEach((project, index) => {
  const row = document.createElement('button');
  row.type = 'button';
  row.className = 'project-square';
  row.setAttribute('aria-label', 'Open ' + project.title);

  const overlay = document.createElement('div');
  overlay.className = 'project-overlay';

  const title = document.createElement('span');
  title.textContent = project.title;
  overlay.appendChild(title);

  const meta = document.createElement('span');
  meta.className = 'archive-row-meta';
  meta.textContent = String(index + 1).padStart(2, '0') + ' / Academic Work';

  row.appendChild(overlay);
  row.appendChild(meta);

  row.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    window.location.assign(project.href);
  });

  worksContainer.appendChild(row);
});
