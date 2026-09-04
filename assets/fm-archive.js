(function () {
  document.body.classList.add('fm-internal');

  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  }, true);

  if (!document.querySelector('script[data-fm-analytics]')) {
    const analytics = document.createElement('script');
    analytics.defer = true;
    analytics.src = '/assets/analytics.js?v=20260904-1';
    analytics.dataset.fmAnalytics = '';
    document.head.appendChild(analytics);
  }

  const finePointer = window.matchMedia('(pointer: fine)').matches;
  let cursor = null;

  if (finePointer) {
    cursor = document.createElement('div');
    cursor.id = 'fm-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursor);

    window.addEventListener('mousemove', function (event) {
      cursor.style.left = event.clientX + 'px';
      cursor.style.top = event.clientY + 'px';
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

  document.querySelectorAll('a[data-file-check]').forEach(function (link) {
    fetch(link.href, { method: 'HEAD' })
      .then(function (response) {
        if (response.ok) link.hidden = false;
      })
      .catch(function () {
        link.hidden = true;
      });
  });

  const archivePreview = document.getElementById('archive-preview');
  const archiveCaption = document.getElementById('archive-caption');
  const archiveRows = Array.from(document.querySelectorAll('.image-index-row'));
  const imageStage = archivePreview ? archivePreview.closest('.image-stage') : null;
  const mediaShareButtons = new Map();
  let imageStageOrigin = null;

  const projectHeading = document.querySelector('.project-title');
  const projectImageName = projectHeading
    ? Array.from(projectHeading.childNodes)
        .filter(function (node) { return node.nodeType === Node.TEXT_NODE; })
        .map(function (node) { return node.textContent; })
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim()
    : document.title.split('—')[0].trim();

  function getArchiveAlt(row, caption) {
    const declaredAlt = row.getAttribute('data-alt');
    if (declaredAlt) return declaredAlt;

    const imageLabel = caption.replace(/^\d+\s*\/\s*/, '').trim();
    if (!projectImageName) return imageLabel;
    if (!imageLabel) return projectImageName + ' project image';
    return projectImageName + ' — ' + imageLabel;
  }

  if (imageStage && imageStage.parentNode) {
    imageStageOrigin = document.createComment('image-stage-origin');
    imageStage.parentNode.insertBefore(imageStageOrigin, imageStage);
    imageStage.id = imageStage.id || 'archive-stage';

    archiveRows.forEach(function (row) {
      row.setAttribute('aria-controls', imageStage.id);

      const entry = document.createElement('div');
      entry.className = 'image-index-entry';
      if (row.classList.contains('is-active')) entry.classList.add('is-active');
      row.parentNode.insertBefore(entry, row);
      entry.appendChild(row);

      const mediaShareButton = document.createElement('button');
      mediaShareButton.type = 'button';
      mediaShareButton.className = 'fm-media-share-button';
      mediaShareButton.textContent = '↗';
      mediaShareButton.setAttribute('aria-label', 'Share this media');
      entry.appendChild(mediaShareButton);
      mediaShareButtons.set(row, mediaShareButton);

      mediaShareButton.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        openSharePanel({ type: 'media', row: row });
      });
    });
  }

  function placeArchiveStage(row) {
    if (!imageStage || !imageStageOrigin) return;

    if (row) {
      const entry = row.closest('.image-index-entry') || row;
      entry.insertAdjacentElement('afterend', imageStage);
      imageStage.classList.add('is-inline-archive');
      return;
    }

    if (imageStageOrigin.parentNode) {
      imageStageOrigin.parentNode.insertBefore(imageStage, imageStageOrigin.nextSibling);
      imageStage.classList.remove('is-inline-archive');
    }
  }

  function revealArchiveStage(row) {
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
    const mediaKind = row.getAttribute('data-kind') || '';

    if (!archivePreview || !src || row.classList.contains('is-unavailable')) return;

    archiveRows.forEach(function (item) {
      item.classList.remove('is-active');
      item.removeAttribute('aria-current');
      const entry = item.closest('.image-index-entry');
      if (entry) entry.classList.remove('is-active');
    });

    row.classList.add('is-active');
    row.setAttribute('aria-current', 'true');
    const activeEntry = row.closest('.image-index-entry');
    if (activeEntry) activeEntry.classList.add('is-active');

    if (imageStage) {
      imageStage.classList.add('is-loading');
      imageStage.classList.remove('has-error');
    }

    archivePreview.style.opacity = '0';

    const nextImage = new Image();
    nextImage.decoding = 'async';

    nextImage.onload = function () {
      archivePreview.src = src;
      archivePreview.alt = getArchiveAlt(row, caption);
      if (mediaKind) archivePreview.setAttribute('data-media-kind', mediaKind);
      else archivePreview.removeAttribute('data-media-kind');
      archivePreview.style.opacity = '1';
      if (archiveCaption) archiveCaption.textContent = caption;
      if (imageStage) imageStage.classList.remove('is-loading', 'has-error');
      revealArchiveStage(row);
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
      placeArchiveStage(row);
      updateArchive(row);
    });
  });

  const initiallyActiveArchiveRow = archiveRows.find(function (row) {
    return row.classList.contains('is-active');
  });

  if (initiallyActiveArchiveRow) {
    const initialCaption = initiallyActiveArchiveRow.getAttribute('data-caption') || '';
    if (archivePreview) archivePreview.alt = getArchiveAlt(initiallyActiveArchiveRow, initialCaption);
    placeArchiveStage(initiallyActiveArchiveRow);
  }

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
  const projectShareData = {
    hypogeum: { number: '01', title: 'HYPOGEUM', subtitle: 'Climate Architecture' },
    houseatelier: { number: '02', title: 'HOUSE ATELIER', subtitle: 'Artist House' },
    archiveexhibitinhabit: { number: '03', title: 'ARCHIVE EXHIBIT INHABIT', subtitle: 'Archive, Exhibition and Inhabitation' },
    tetra: { number: '04', title: 'TETRA', subtitle: 'Cultural Park in Naples' },
    efesto: { number: '05', title: 'EFESTO', subtitle: 'Industrial Adaptive Reuse' },
    terzotempo: { number: '06', title: 'TERZO TEMPO', subtitle: 'Metamorphosis of the Unfinished' },
    ermatene: { number: '07', title: 'ERMA TENE', subtitle: 'A Place for the Monteverdi Festival' }
  };

  function getCurrentProject() {
    const slug = Object.keys(projectShareData).find(function (key) {
      return currentPath.includes('/projects/' + key + '/');
    });

    if (!slug) return null;
    return Object.assign({ slug: slug }, projectShareData[slug]);
  }

  const currentProject = getCurrentProject();
  let shareContext = null;
  let sharePanel = null;
  let sharePanelStatus = null;
  const projectShareFiles = {};

  function getCanonicalUrl() {
    const canonical = document.querySelector('link[rel="canonical"]');
    return canonical ? canonical.href : window.location.href;
  }

  function getTrackedShareUrl() {
    const url = new URL(getCanonicalUrl());
    url.searchParams.set('utm_source', 'portfolio');
    url.searchParams.set('utm_medium', 'share');
    url.searchParams.set('utm_campaign', 'portfolio_share');
    url.searchParams.set('utm_content', currentProject ? currentProject.slug : 'academic_works');
    return url.href;
  }

  function closeSharePanel() {
    if (!sharePanel) return;
    sharePanel.hidden = true;
    shareContext = null;
    document.body.classList.remove('fm-share-open');
  }

  function setSharePanelStatus(message) {
    if (sharePanelStatus) sharePanelStatus.textContent = message || '';
  }

  function ensureSharePanel() {
    if (sharePanel) return sharePanel;

    sharePanel = document.createElement('div');
    sharePanel.className = 'fm-share-panel';
    sharePanel.hidden = true;
    sharePanel.innerHTML =
      '<div class="fm-share-dialog" role="dialog" aria-modal="true" aria-labelledby="fm-share-title">' +
        '<div class="fm-share-dialog-header"><span id="fm-share-title">SHARE</span><button type="button" class="fm-share-close" aria-label="Close share menu">ESC</button></div>' +
        '<button type="button" class="fm-share-option" data-share-format="story"><span>01</span><strong>STORY</strong><small>9:16</small></button>' +
        '<button type="button" class="fm-share-option" data-share-format="post"><span>02</span><strong>POST</strong><small>4:5</small></button>' +
        '<button type="button" class="fm-share-option" data-share-format="link"><span>03</span><strong>COPY LINK</strong><small>URL</small></button>' +
        '<p class="fm-share-status" aria-live="polite"></p>' +
      '</div>';
    document.body.appendChild(sharePanel);

    sharePanelStatus = sharePanel.querySelector('.fm-share-status');

    sharePanel.addEventListener('click', function (event) {
      if (event.target === sharePanel) closeSharePanel();
    });

    sharePanel.querySelector('.fm-share-close').addEventListener('click', closeSharePanel);

    sharePanel.querySelectorAll('[data-share-format]').forEach(function (button) {
      button.addEventListener('click', async function () {
        const format = button.getAttribute('data-share-format');
        if (!shareContext) return;

        if (format === 'link') {
          try {
            await copyPageLink(getTrackedShareUrl());
            setSharePanelStatus('LINK COPIED');
            trackShare(shareContext.type, 'link');
          } catch (error) {
            setSharePanelStatus('COPY FAILED');
          }
          return;
        }

        button.disabled = true;
        setSharePanelStatus('PREPARING ' + format.toUpperCase());

        try {
          let file;
          if (shareContext.type === 'media') {
            file = createMediaShareFile(shareContext.row, format);
          } else if (projectShareFiles[format]) {
            file = projectShareFiles[format];
          } else {
            file = await getProjectShareFile(format);
          }
          await shareOrSaveFile(file);
          setSharePanelStatus(navigator.share ? 'READY TO SHARE' : 'CARD SAVED');
          trackShare(shareContext.type, format);
        } catch (error) {
          setSharePanelStatus('SHARE UNAVAILABLE');
        } finally {
          button.disabled = false;
        }
      });
    });

    return sharePanel;
  }

  function openSharePanel(context) {
    if (!currentProject) return;
    shareContext = context;
    ensureSharePanel();
    setSharePanelStatus(context.type === 'media' ? 'SELECT FORMAT / CURRENT MEDIA' : 'SELECT FORMAT / PROJECT CARD');
    sharePanel.hidden = false;
    document.body.classList.add('fm-share-open');
    sharePanel.querySelector('[data-share-format="story"]').focus();
  }

  function getProjectShareFile(format) {
    const url = '/img/share/' + currentProject.slug + '/' + format + '.jpg';
    return fetch(url).then(function (response) {
      if (!response.ok) throw new Error('Project share card not found');
      return response.blob();
    }).then(function (blob) {
      const file = new File([blob], currentProject.slug + '-' + format + '.jpg', { type: 'image/jpeg' });
      projectShareFiles[format] = file;
      return file;
    });
  }

  if (currentProject) {
    ['story', 'post'].forEach(function (format) {
      getProjectShareFile(format).catch(function () {});
    });
  }

  function fitCanvasText(context, text, maximumWidth, startingSize, minimumSize, weight, family) {
    let size = startingSize;
    do {
      context.font = weight + ' ' + size + 'px ' + family;
      if (context.measureText(text).width <= maximumWidth) return size;
      size -= 2;
    } while (size > minimumSize);
    return minimumSize;
  }

  function drawContainedImage(context, image, x, y, width, height) {
    const scale = Math.min(width / image.naturalWidth, height / image.naturalHeight);
    const renderedWidth = image.naturalWidth * scale;
    const renderedHeight = image.naturalHeight * scale;
    context.drawImage(
      image,
      x + (width - renderedWidth) / 2,
      y + (height - renderedHeight) / 2,
      renderedWidth,
      renderedHeight
    );
  }

  function canvasToJpegFile(canvas, filename) {
    const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
    const encoded = dataUrl.split(',')[1];
    const binary = window.atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return new File([bytes], filename, { type: 'image/jpeg' });
  }

  function createMediaShareFile(row, format) {
    if (!currentProject || !archivePreview) throw new Error('Active project media not found');
    if (!archivePreview.complete || !archivePreview.naturalWidth) throw new Error('Active media is still loading');

    const isStory = format === 'story';
    const width = 1080;
    const height = isStory ? 1920 : 1350;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    const sans = 'Inter, "Helvetica Neue", Arial, sans-serif';
    const mono = '"IBM Plex Mono", "SFMono-Regular", Menlo, monospace';
    const image = archivePreview;
    const caption = row.getAttribute('data-caption') || archiveCaption && archiveCaption.textContent || '';
    const mediaTitle = caption.replace(/^\d+\s*\/\s*/, '').toUpperCase();
    const mediaNumber = (caption.match(/^\d+/) || [''])[0];
    const margin = 58;

    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, width, height);
    context.textBaseline = 'top';

    context.fillStyle = '#000000';
    context.font = '700 38px ' + sans;
    context.fillText('FM_ARCHIVE', margin, 58);
    context.textAlign = 'right';
    context.font = '700 72px ' + sans;
    context.fillText(currentProject.number, width - margin, 48);
    context.textAlign = 'left';

    const titleY = isStory ? 245 : 185;
    const titleSize = fitCanvasText(context, currentProject.title, width - margin * 2, isStory ? 116 : 94, 58, '700', sans);
    context.font = '700 ' + titleSize + 'px ' + sans;
    context.fillText(currentProject.title, margin, titleY);

    const subtitleY = titleY + titleSize + 42;
    const subtitleSize = fitCanvasText(context, currentProject.subtitle.toUpperCase(), width - margin * 2, isStory ? 30 : 25, 18, '700', sans);
    context.font = '700 ' + subtitleSize + 'px ' + sans;
    context.fillText(currentProject.subtitle.toUpperCase(), margin, subtitleY);

    context.fillStyle = 'rgba(0,0,0,.48)';
    context.font = '400 ' + (isStory ? 20 : 18) + 'px ' + mono;
    context.fillText((mediaNumber ? mediaNumber + ' / ' : '') + mediaTitle, margin, subtitleY + subtitleSize + 32);

    const imageY = isStory ? 650 : 500;
    const imageHeight = isStory ? 900 : 700;
    drawContainedImage(context, image, 28, imageY, width - 56, imageHeight);

    context.fillStyle = 'rgba(0,0,0,.48)';
    context.font = '400 ' + (isStory ? 18 : 16) + 'px ' + mono;
    context.fillText('FEDERICOMARTORANA.NET', margin, height - 92);

    const safeMediaTitle = mediaTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'media';
    return canvasToJpegFile(
      canvas,
      currentProject.slug + '-' + safeMediaTitle + '-' + format + '.jpg'
    );
  }

  function downloadFile(file) {
    const link = document.createElement('a');
    const objectUrl = URL.createObjectURL(file);
    link.href = objectUrl;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(function () { URL.revokeObjectURL(objectUrl); }, 1000);
  }

  async function shareOrSaveFile(file) {
    const shareData = { files: [file], title: currentProject ? currentProject.title : document.title };
    const canShareFiles = navigator.share && (!navigator.canShare || navigator.canShare({ files: [file] }));

    if (canShareFiles) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error && error.name === 'AbortError') return;
      }
    }

    downloadFile(file);
  }

  function trackShare(type, format) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'share_page', {
        page_path: window.location.pathname,
        share_content: type,
        share_format: format
      });
    }
  }

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
      if (currentProject) {
        openSharePanel({ type: 'project' });
        return;
      }

      const url = getTrackedShareUrl();
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
      if (sharePanel && !sharePanel.hidden) {
        closeSharePanel();
        return;
      }
      window.location.assign(getBackTarget());
    }
  });
})();

if (!document.querySelector('script[data-unit00]')) {
  const unit00Script = document.createElement('script');
  unit00Script.src = '/assets/unit00.js?v=20260829-1';
  unit00Script.dataset.unit00 = '';
  document.head.appendChild(unit00Script);
}
