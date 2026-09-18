(function () {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-88WTQFKQV6';
  document.head.appendChild(script);

  gtag('js', new Date());
  gtag('config', 'G-88WTQFKQV6');

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="tel:"]');

    if (!link) return;

    gtag('event', 'phone_click', {
      phone_number: link.getAttribute('href').replace('tel:', ''),
      page_location: window.location.href
    });
  });

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="mailto:"]');

    if (!link) return;

    gtag('event', 'email_click', {
      email_address: link.getAttribute('href').replace('mailto:', ''),
      page_location: window.location.href
    });
  });
})();
