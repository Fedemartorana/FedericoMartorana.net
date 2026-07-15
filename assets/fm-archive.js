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
  const mobileArchive = window.matchMedia('(max-width: 860px)');
  let imageStageOrigin = null;

  if (imageStage && imageStage.parentNode) {
    imageStageOrigin = document.createComment('image-stage-origin');
    imageStage.parentNode.insertBefore(imageStageOrigin, imageStage);
    imageStage.id = imageStage.id || 'archive-stage';

    archiveRows.forEach(function (row) {
      row.setAttribute('aria-controls', imageStage.id);
    });
  }

  function placeMobileArchiveStage(row) {
    if (!imageStage || !imageStageOrigin) return;

    if (mobileArchive.matches && row) {
      row.insertAdjacentElement('afterend', imageStage);
      imageStage.classList.add('is-inline-mobile');
      return;
    }

    if (imageStageOrigin.parentNode) {
      imageStageOrigin.parentNode.insertBefore(imageStage, imageStageOrigin.nextSibling);
      imageStage.classList.remove('is-inline-mobile');
    }
  }

  function revealMobileArchiveStage(row) {
    if (!mobileArchive.matches) return;

    window.requestAnimationFrame(function () {
      row.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start'
      });
    });
  }

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
      revealMobileArchiveStage(row);
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
      placeMobileArchiveStage(row);
      updateArchive(row);
    });
  });

  mobileArchive.addEventListener('change', function () {
    placeMobileArchiveStage(null);
  });

  function legacyCopyPageLink(url) {
    return new Promise(function (resolve, reject) {
      const input = document.createElement('textarea');
      input.value = url;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();

      try {
        const copied = document.execCommand('copy');
        if (copied) resolve();
        else reject(new Error('Copy command was rejected'));
      } catch (error) {
        reject(error);
      } finally {
        input.remove();
      }
    });
  }

  function copyPageLink(url) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(url).catch(function () {
        return legacyCopyPageLink(url);
      });
    }

    return legacyCopyPageLink(url);
  }

  function showShareFeedback(button, message) {
    window.clearTimeout(button.feedbackTimer);
    button.textContent = message;
    button.feedbackTimer = window.setTimeout(function () {
      button.textContent = 'SHARE ↗';
    }, 1400);
  }

  const currentPath = window.location.pathname;
  const isSharePage =
    currentPath.includes('/projects/') ||
    currentPath.endsWith('/works/works.html');

  if (isSharePage) {
    const shareButton = document.createElement('button');
    shareButton.type = 'button';
    shareButton.className = 'fm-share-button';
    shareButton.textContent = 'SHARE ↗';
    shareButton.setAttribute('aria-label', 'Share this page');
    document.body.appendChild(shareButton);

    shareButton.addEventListener('click', async function () {
      const canonical = document.querySelector('link[rel="canonical"]');
      const url = canonical ? canonical.href : window.location.href;
      const shareData = { title: document.title, url: url };
      const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
      const mobileViewport = window.matchMedia('(max-width: 860px)').matches;
      const canUseNativeShare = mobileViewport && coarsePointer && navigator.share;

      if (canUseNativeShare) {
        try {
          await navigator.share(shareData);
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'share_page', { page_path: window.location.pathname });
          }
          return;
        } catch (error) {
          if (error && error.name === 'AbortError') return;
        }
      }

      try {
        await copyPageLink(url);
        showShareFeedback(shareButton, 'LINK COPIED');
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'share_page', { page_path: window.location.pathname });
        }
      } catch (error) {
        showShareFeedback(shareButton, 'COPY FAILED');
      }
    });
  }

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
