// Reveal-on-scroll and skill-bar fill; elements are shown immediately if IntersectionObserver is missing.
function initScrollEffects() {
  const revealItems = document.querySelectorAll('.reveal');
  const bars = document.querySelectorAll('.progress-bar[data-progress]');

  const showItem = (el) => {
    if (el.classList.contains('progress-bar')) {
      const value = el.getAttribute('data-progress');
      el.style.width = value + '%';
      el.setAttribute('aria-valuenow', value);
    } else {
      el.classList.add('in-view');
    }
  };

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(showItem);
    bars.forEach(showItem);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showItem(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((el) => observer.observe(el));
  bars.forEach((el) => observer.observe(el));
}

// Collapse the mobile menu after a link is tapped.
function initMobileMenu() {
  const menu = document.getElementById('navbarNav');
  if (!menu || !window.bootstrap) return;
  document.querySelectorAll('#navbarNav .nav-link, #navbarNav .nav-call').forEach((link) => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('show')) {
        window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  initScrollEffects();
  initMobileMenu();
});

// First submission triggers a FormSubmit activation email to the recipient; click its link once.
async function emailsend(form) {
  const button = form.querySelector('button[type="submit"]');
  const status = document.getElementById('formStatus');
  const name = form.firstName.value + ' ' + form.lastName.value;
  const setStatus = (text, ok) => {
    status.textContent = text;
    status.className = 'form-status mt-3 mb-0 ' + (ok ? 'text-success' : 'text-danger');
  };
  button.disabled = true;
  setStatus('Sending...', true);
  try {
    const response = await fetch('https://formsubmit.co/ajax/viyaaskge@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        _subject: 'Portfolio mail from ' + name,
        _replyto: form.email.value,
        _captcha: 'false',
        _honey: form._honey.value,
        name: name,
        email: form.email.value,
        message: form.message.value
      })
    });
    const result = await response.json();
    if (response.ok && String(result.success) === 'true') {
      setStatus('Message sent successfully. Thank you!', true);
      form.reset();
    } else {
      setStatus('Could not send the message: ' + (result.message || 'please try again later.'), false);
    }
  } catch (error) {
    setStatus('Network error. Please email viyaaskge@gmail.com directly.', false);
  } finally {
    button.disabled = false;
  }
}