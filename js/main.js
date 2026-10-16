/* Nesma Ra'fat — Portfolio
   Small, calm behaviours only:
   1. hero code panel types itself once
   2. each section fades in once
   3. the nav underline follows the section in view
   Everything respects prefers-reduced-motion. */
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1 — typing (once) */
  const target = document.querySelector('[data-typing]');
  const caret = document.querySelector('.caret');
  if (target && !reduceMotion) {
    const full = target.textContent;
    let i = 0;
    target.textContent = '';
    const step = () => {
      i += 1;
      target.textContent = full.slice(0, i);
      if (i < full.length) {
        setTimeout(step, full[i - 1] === '\n' ? 280 : 55);
      } else if (caret) {
        caret.classList.add('is-done'); // blinks a few times, then stays still
      }
    };
    setTimeout(step, 600);
  }

  /* 2 — one soft fade per section */
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduceMotion) {
    reveals.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach((el) => revealObserver.observe(el));
  }

  /* 3 — nav underline follows the current section */
  const links = document.querySelectorAll('.site-nav a[href^="#"]');
  const byId = new Map();
  links.forEach((a) => byId.set(a.getAttribute('href').slice(1), a));
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.removeAttribute('aria-current'));
        const link = byId.get(entry.target.id);
        if (link) link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    byId.forEach((_, id) => {
      const section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  }
})();
