/* ─── FLOATING CTA BAR COMPONENT ─── */
(function () {
  const mount = document.getElementById('float-cta-mount');
  if (!mount) return;

  mount.innerHTML = `
    <div id="float-cta">
      <div class="fcta-left">
        <div class="fcta-avatar">S</div>
        <div class="fcta-text">
          <div class="fcta-name">Shravan G Amin — Available Now</div>
          <div class="fcta-sub">Get your free 3D design preview today ✦</div>
        </div>
      </div>
      <div class="fcta-right">
        <a href="tel:+919731036845" class="fcta-btn fcta-call">📞 Call Free</a>
        <a href="https://wa.me/919731036845" class="fcta-btn fcta-wa" target="_blank">💬 WhatsApp</a>
        <button class="fcta-btn fcta-close" id="fcta-close">✕</button>
      </div>
    </div>
  `;

  document.getElementById('fcta-close').addEventListener('click', () => {
    document.getElementById('float-cta').classList.remove('show');
  });
})();
