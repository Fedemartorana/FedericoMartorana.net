(function () {
  document.body.classList.add('fm-internal');

  if (!document.querySelector('script[src="/assets/analytics.js"]')) {
    const analytics = document.createElement('script');
    analytics.defer = true;
    analytics.src = '/assets/analytics.js';
    document.head.appendChild(analytics);
  }

  const finePointer = window.matchMedia('(pointer: fine)').matches;
  let cursor = null;

  if (finePointer) {
    cursor = document.createElement('div');
    cursor.id = 'fm-cursor';
    cursor.textContent = '0.00 / 0.00';
    document.body.appendChild(cursor);

    window.addEventListener('mousemove', function (event) {
      const nx = event.clientX / window.innerWidth;
      const ny = event.clientY / window.innerHeight;
      cursor.style.left = event.clientX + 'px';
      cursor.style.top = event.clientY + 'px';
      cursor.textContent = nx.toFixed(2) + ' / ' + ny.toFixed(2);
    });
  }

  function getBackTarget() {
    const path = window.location.pathname;
    if (path.includes('/projects/')) return '../../works/works.html';
    if (path.includes('/extras/')) return '../../extra/extra.html';
    if (
      path.includes('/works/') ||
      path.includes('/extra/') ||
      path.includes('/who/') ||
      path.includes('/contacts/') ||
      path.includes('/proworks/')
    ) return '../index.html';
    return 'index.html';
  }

  const back = document.getElementById('back-link');
  if (back) {
    const declaredTarget = back.getAttribute('href');
    const target = declaredTarget && declaredTarget !== '#' ? declaredTarget : getBackTarget();
    back.setAttribute('href', target);
    back.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.assign(target);
    }, true);
  }

  document.querySelectorAll('img').forEach(function (image) {
    image.decoding = 'async';

    if (image.classList.contains('project-image')) {
      image.loading = 'eager';
      image.fetchPriority = 'high';
    } else if (image.id !== 'archive-preview') {
      image.loading = 'lazy';
    }
  });

  const archivePreview = document.getElementById('archive-preview');
  const archiveCaption = document.getElementById('archive-caption');
  const archiveRows = Array.from(document.querySelectorAll('.image-index-row'));
  const imageStage = archivePreview ? archivePreview.closest('.image-stage') : null;

  function updateArchive(row) {
    const src = row.getAttribute('data-src');
    const caption = row.getAttribute('data-caption') || '';

    if (!archivePreview || !src || row.classList.contains('is-unavailable')) return;

    archiveRows.forEach(function (item) {
      item.classList.remove('is-active');
      item.removeAttribute('aria-current');
    });

    row.classList.add('is-active');
    row.setAttribute('aria-current', 'true');

    if (imageStage) {
      imageStage.classList.add('is-loading');
      imageStage.classList.remove('has-error');
    }

    archivePreview.style.opacity = '0';

    const nextImage = new Image();
    nextImage.decoding = 'async';

    nextImage.onload = function () {
      archivePreview.src = src;
      archivePreview.alt = caption.replace(/^\d+\s*\/\s*/, '');
      archivePreview.style.opacity = '1';
      if (archiveCaption) archiveCaption.textContent = caption;
      if (imageStage) imageStage.classList.remove('is-loading', 'has-error');
    };

    nextImage.onerror = function () {
      row.classList.add('is-unavailable');
      row.setAttribute('aria-disabled', 'true');
      archivePreview.style.opacity = '1';
      if (archiveCaption) archiveCaption.textContent = caption + ' / MEDIA UNAVAILABLE';
      if (imageStage) {
        imageStage.classList.remove('is-loading');
        imageStage.classList.add('has-error');
      }
    };

    nextImage.src = src;
  }

  archiveRows.forEach(function (row) {
    row.addEventListener('click', function () {
      updateArchive(row);
    });
  });

  window.addEventListener('keydown', function (event) {
    const key = event.key.toLowerCase();

    if (key === 'a') {
      document.body.classList.toggle('archive-mode');
    }

    if (event.key === 'Escape') {
      window.location.assign(getBackTarget());
    }
  });
})();
