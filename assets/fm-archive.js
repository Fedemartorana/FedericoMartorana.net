(function () {
  document.body.classList.add('fm-internal');

  const cursor = document.createElement('div');
  cursor.id = 'fm-cursor';
  cursor.textContent = '0.00 / 0.00';
  document.body.appendChild(cursor);

  function getBackTarget() {
    const path = window.location.pathname;
    if (path.includes('/projects/')) return '../../works/works.html';
    if (path.includes('/extras/')) return '../../extra/extra.html';
    if (path.includes('/works/') || path.includes('/extra/') || path.includes('/who/') || path.includes('/contacts/')) return '../index.html';
    return 'index.html';
  }

  const back = document.getElementById('back-link');
  if (back) {
    const target = back.getAttribute('href') && back.getAttribute('href') !== '#' ? back.getAttribute('href') : getBackTarget();
    back.setAttribute('href', target);
    back.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.href = target;
    }, true);
  }

  const archivePreview = document.getElementById('archive-preview');
  const archiveCaption = document.getElementById('archive-caption');
  const archiveRows = document.querySelectorAll('.image-index-row');

  archiveRows.forEach(function (row) {
    row.addEventListener('click', function () {
      archiveRows.forEach(function (item) { item.classList.remove('is-active'); });
      row.classList.add('is-active');

      const src = row.getAttribute('data-src');
      const caption = row.getAttribute('data-caption');

      if (archivePreview && src) {
        archivePreview.style.opacity = '0';
        window.setTimeout(function () {
          archivePreview.src = src;
          archivePreview.alt = caption || '';
          archivePreview.style.opacity = '1';
        }, 120);
      }

      if (archiveCaption && caption) archiveCaption.textContent = caption;
    });
  });

  window.addEventListener('mousemove', function (event) {
    const nx = event.clientX / window.innerWidth;
    const ny = event.clientY / window.innerHeight;
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
    cursor.textContent = nx.toFixed(2) + ' / ' + ny.toFixed(2);
  });

  window.addEventListener('keydown', function (event) {
    const key = event.key.toLowerCase();
    if (key === 'a') document.body.classList.toggle('archive-mode');
    if (event.key === 'Escape') window.location.href = getBackTarget();
  });
})();
