(function () {
  'use strict';

  var endpoint = 'https://formspree.io/f/mdabnpgl';
  var successUrl = '/thank-you/?submitted=1';

  function showError(form) {
    var status = form.querySelector('[data-formspree-status]');

    if (!status) {
      status = document.createElement('p');
      status.setAttribute('data-formspree-status', '');
      status.setAttribute('role', 'alert');
      status.setAttribute('aria-live', 'assertive');
      status.style.color = '#9b1c1c';
      status.style.fontWeight = '700';
      status.style.marginTop = '12px';

      var submitButton = form.querySelector('[type="submit"]');
      if (submitButton) {
        submitButton.insertAdjacentElement('afterend', status);
      } else {
        form.appendChild(status);
      }
    }

    status.textContent = 'We could not send your enquiry. Please try again or call Edita on 021 765 234.';
  }

  function bindForm(form) {
    if (form.getAttribute('data-formspree-redirect-bound') === 'true') return;

    form.setAttribute('data-formspree-redirect-bound', 'true');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!form.reportValidity()) return;

      var submitButton = form.querySelector('[type="submit"]');
      var originalButtonText = submitButton ? submitButton.textContent : '';
      var existingStatus = form.querySelector('[data-formspree-status]');

      if (existingStatus) existingStatus.textContent = '';

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.setAttribute('aria-busy', 'true');
        submitButton.textContent = 'Sending...';
      }

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      })
        .then(function (response) {
          if (!response.ok) throw new Error('Formspree rejected the submission');
          window.location.assign(successUrl);
        })
        .catch(function () {
          showError(form);

          if (submitButton) {
            submitButton.disabled = false;
            submitButton.removeAttribute('aria-busy');
            submitButton.textContent = originalButtonText;
          }
        });
    });
  }

  function initialise() {
    document
      .querySelectorAll('form[action="' + endpoint + '"]')
      .forEach(bindForm);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialise);
  } else {
    initialise();
  }
}());
