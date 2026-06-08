(function () {
  const GA_ID = 'G-HCZPGFH2WY';

  if (!window.__fmAnalyticsLoaded) {
    window.__fmAnalyticsLoaded = true;

    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(tag);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  function sendEvent(name, params) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, params || {});
  }

  function normalizeTitle(text) {
    return (text || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_|_$/g, '');
  }

  document.addEventListener('click', function (event) {
    const link = event.target.closest('a, button');
    if (!link) return;

    const href = link.getAttribute('href') || '';
    const text = link.textContent || link.getAttribute('aria-label') || '';
    const path = window.location.pathname;

    if (href.includes('/projects/') || href.includes('../projects/')) {
      const projectName = normalizeTitle(text.replace(/Open /i, ''));
      sendEvent('open_project', {
        project_name: projectName,
        link_url: href,
        source_page: path
      });
    }

    if (href.includes('/extras/') || href.includes('../extras/')) {
      const paperName = normalizeTitle(text);
      sendEvent('open_paper', {
        paper_name: paperName,
        link_url: href,
        source_page: path
      });
    }

    if (href.toLowerCase().includes('thesis.pdf')) {
      sendEvent('download_thesis', {
        link_url: href,
        source_page: path
      });
    }

    if (href.toLowerCase().includes('cv') || text.toLowerCase().includes('open cv')) {
      sendEvent('open_cv', {
        link_url: href,
        source_page: path
      });
    }

    if (href.includes('/contacts/') || text.toLowerCase().includes('contact')) {
      sendEvent('open_contacts', {
        link_url: href,
        source_page: path
      });
    }
  }, true);

  window.fmTrack = sendEvent;
})();
