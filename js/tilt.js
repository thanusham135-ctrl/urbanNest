/* ─── 3D TILT EFFECT ON CARDS ─── */
(function () {
  function applyTilt(selector, strength = 6) {
    document.querySelectorAll(selector).forEach(card => {
      card.addEventListener('mousemove', e => {
        const r  = card.getBoundingClientRect();
        const x  = e.clientX - r.left;
        const y  = e.clientY - r.top;
        const cx = r.width  / 2;
        const cy = r.height / 2;
        const dx = (x - cx) / cx;
        const dy = (y - cy) / cy;
        card.style.transform =
          `perspective(800px) rotateX(${-dy * strength}deg) rotateY(${dx * strength}deg) translateY(-6px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  applyTilt('.pkg-card', 6);
  applyTilt('.svc-card', 4);
  applyTilt('.rev-card', 3);
})();
