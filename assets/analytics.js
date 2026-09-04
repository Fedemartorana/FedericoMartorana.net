(function () {
  const GA_ID = 'G-HCZPGFH2WY';
  const scrollDepths = [25, 50, 75, 90];
  const sentScrollDepths = new Set();
  const engagementMilestones = new Set([30, 60, 120]);
  let activeSeconds = 0;

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

  function slugFromPath(path, section) {
    const parts = (path || '').split('/').filter(Boolean);
    const sectionIndex = parts.indexOf(section);
    return sectionIndex >= 0 && parts[sectionIndex + 1]
      ? normalizeTitle(parts[sectionIndex + 1])
      : '';
  }

  function pageContext() {
    const path = window.location.pathname;
    const projectName = slugFromPath(path, 'projects');
    let pageType = 'page';

    if (projectName) pageType = 'project';
    else if (path === '/' || path.endsWith('/index.html')) pageType = 'home';
    else if (path.includes('/works/')) pageType = 'works_index';
    else if (path.includes('/proworks/')) pageType = 'professional_works';
    else if (path.includes('/contacts/')) pageType = 'contact';
    else if (path.includes('/who/')) pageType = 'profile';
    else if (path.includes('/extra')) pageType = 'paper';

    return {
      page_path: path,
      page_type: pageType,
      project_name: projectName || undefined
    };
  }

  function eventContext(extra) {
    return Object.assign({}, pageContext(), extra || {});
  }

  function linkPlacement(link) {
    if (link.closest('footer')) return 'footer';
    if (link.classList.contains('cv-button')) return 'primary_cta';
    if (window.location.pathname.includes('/contacts/')) return 'contact_page';
    return 'content';
  }

  function resolvedUrl(href) {
    try { return new URL(href, window.location.href); } catch (error) { return null; }
  }

  document.addEventListener('click', function (event) {
    const link = event.target.closest('a, button');
    if (!link) return;

    const href = link.getAttribute('href') || '';
    const text = link.textContent || link.getAttribute('aria-label') || '';
    const url = resolvedUrl(href);
    const path = url ? url.pathname : '';

    if (href.toLowerCase().startsWith('mailto:')) {
      const params = eventContext({
        contact_method: 'email',
        link_placement: linkPlacement(link)
      });
      sendEvent('contact_click', params);
      sendEvent('generate_lead', params);
      return;
    }

    if (href.toLowerCase().startsWith('tel:')) {
      const params = eventContext({
        contact_method: 'phone',
        link_placement: linkPlacement(link)
      });
      sendEvent('contact_click', params);
      sendEvent('generate_lead', params);
      return;
    }

    if (path.includes('/projects/')) {
      sendEvent('open_project', eventContext({
        project_name: slugFromPath(path, 'projects'),
        source_page: window.location.pathname
      }));
    }

    if (path.includes('/extras/')) {
      sendEvent('open_paper', eventContext({
        paper_name: slugFromPath(path, 'extras'),
        source_page: window.location.pathname
      }));
    }

    if (href.toLowerCase().includes('thesis.pdf')) {
      sendEvent('download_thesis', eventContext());
    }

    if (href.toLowerCase().includes('cv') || text.toLowerCase().includes('open cv')) {
      sendEvent('open_cv', eventContext());
    }

    if (href.toLowerCase().includes('federico-martorana-portfolio.pdf') || text.toLowerCase().includes('download portfolio')) {
      sendEvent('download_portfolio', eventContext());
    }

    if (path.includes('/contacts/') || text.toLowerCase().includes('contact')) {
      sendEvent('open_contacts', eventContext({ source_page: window.location.pathname }));
    }

    if (url && /^https?:$/.test(url.protocol) && url.hostname !== window.location.hostname) {
      sendEvent('outbound_click', eventContext({
        outbound_domain: url.hostname,
        link_placement: linkPlacement(link)
      }));
    }
  }, true);

  function trackScrollDepth() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const percent = Math.round((window.scrollY / scrollable) * 100);

    scrollDepths.forEach(function (depth) {
      if (percent < depth || sentScrollDepths.has(depth)) return;
      sentScrollDepths.add(depth);
      sendEvent('scroll_depth', eventContext({ percent_scrolled: depth }));
    });
  }

  window.addEventListener('scroll', trackScrollDepth, { passive: true });

  window.setInterval(function () {
    if (document.hidden) return;
    activeSeconds += 1;
    if (!engagementMilestones.has(activeSeconds)) return;
    sendEvent('engagement_milestone', eventContext({ active_seconds: activeSeconds }));
  }, 1000);

  const initialContext = pageContext();
  if (initialContext.project_name) {
    sendEvent('project_view', initialContext);
  }

  window.fmTrack = sendEvent;
  const queuedEvents = window.fmTrackQueue || [];
  queuedEvents.forEach(function (queued) {
    sendEvent(queued.name, queued.params);
  });
  window.fmTrackQueue = [];
})();
