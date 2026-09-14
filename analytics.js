(function () {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;

  function loadAnalytics() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-88WTQFKQV6';
    document.head.appendChild(script);

    gtag('js', new Date());
    gtag('config', 'G-88WTQFKQV6');
  }

  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadAnalytics, { timeout: 3000 });
  } else {
    setTimeout(loadAnalytics, 2000);
  }
})();
