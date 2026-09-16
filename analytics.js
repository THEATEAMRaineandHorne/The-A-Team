(function () {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;

  var loaded = false;

  function loadAnalytics() {
    if (loaded) return;
    loaded = true;

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-88WTQFKQV6';
    document.head.appendChild(script);

    gtag('js', new Date());
    gtag('config', 'G-88WTQFKQV6');

    removeListeners();
  }

  function removeListeners() {
    window.removeEventListener('scroll', loadAnalytics);
    window.removeEventListener('pointerdown', loadAnalytics);
    window.removeEventListener('keydown', loadAnalytics);
    window.removeEventListener('touchstart', loadAnalytics);
  }

  window.addEventListener('scroll', loadAnalytics, {
    passive: true,
    once: true
  });

  window.addEventListener('pointerdown', loadAnalytics, {
    passive: true,
    once: true
  });

  window.addEventListener('keydown', loadAnalytics, {
    once: true
  });

  window.addEventListener('touchstart', loadAnalytics, {
    passive: true,
    once: true
  });

  setTimeout(loadAnalytics, 10000);
})();
