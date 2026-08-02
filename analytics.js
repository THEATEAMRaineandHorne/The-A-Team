function loadGoogleAnalytics() {
  if (window.analyticsLoaded) return;
  window.analyticsLoaded = true;

  var script = document.createElement('script');
  script.async = true;
  script.src = "https://googletagmanager.com";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-88WTQFKQV6');
  
  console.log('Google Analytics loaded via user interaction!');
}

const interactionEvents = ['mouseover', 'keydown', 'touchstart', 'scroll'];
interactionEvents.forEach(event => {
  window.addEventListener(event, loadGoogleAnalytics, { once: true });
});

setTimeout(loadGoogleAnalytics, 4000);

