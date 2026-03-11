/* ─── MARQUEE COMPONENT ─── */
(function () {
  const mount = document.getElementById('marquee-mount');
  if (!mount) return;

  const items = [
    'Modular Kitchens','Custom Wardrobes','False Ceilings',
    'Smart Lighting','3D Visualization','INFINITY Warranty',
    '45-Day Delivery','Zero Hidden Costs'
  ];

  // Duplicate for seamless loop
  const all = [...items, ...items];
  const html = all.map(t => `<span class="mi">${t}<span class="dot">✦</span></span>`).join('');

  mount.innerHTML = `
    <div class="marquee-bar">
      <div class="marquee-track">${html}</div>
    </div>
  `;
})();
