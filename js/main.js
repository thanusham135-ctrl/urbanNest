/* ─── MAIN INIT ─── */
document.addEventListener('DOMContentLoaded', () => {

  /* Navbar scroll */
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    const cta = document.getElementById('float-cta');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
    if (cta) cta.classList.toggle('show',     window.scrollY > 400);
  });

  /* Auto-open owner card after 2.5s */
  setTimeout(() => {
    const card   = document.getElementById('owner-card');
    const toggle = document.querySelector('.oc-toggle');
    if (card)   card.classList.add('show');
    if (toggle) toggle.textContent = '✕';
  }, 2500);

  /* Auto-show float CTA after 8s */
  setTimeout(() => {
    const cta = document.getElementById('float-cta');
    if (cta) cta.classList.add('show');
  }, 8000);

  console.log('✦ ELARA Interiors — Loaded');
});
