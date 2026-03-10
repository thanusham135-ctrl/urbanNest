/* ─── SCROLL REVEAL ─── */
(function () {
  // Fade in .reveal elements
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('in');
    });
  }, { threshold: .08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

  // Stagger child cards
  const cardObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const cards = e.target.querySelectorAll(
        '.pkg-card, .svc-card, .af, .step, .rev-card, .ba-card'
      );
      cards.forEach((c, i) => {
        c.style.opacity   = '0';
        c.style.transform = 'translateY(20px)';
        setTimeout(() => {
          c.style.transition = 'opacity .6s ease, transform .6s ease';
          c.style.opacity    = '1';
          c.style.transform  = 'none';
        }, i * 90);
      });
    });
  }, { threshold: .05 });

  document.querySelectorAll(
    '.pkg-grid, .svc-grid, .process-grid, .rev-feed, .ba-grid, .about-features'
  ).forEach(el => cardObs.observe(el));
})();
