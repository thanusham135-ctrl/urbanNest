/* ─── FLOATING PARTICLES ─── */
(function () {
  const container = document.getElementById('particles');
  if (!container) return;

  const colors = [
    'rgba(201,168,76,.6)',
    'rgba(232,199,106,.4)',
    'rgba(245,230,184,.5)',
    'rgba(168,137,107,.4)'
  ];

  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    const size    = Math.random() * 10 + 3;
    const isSquare = Math.random() > .5;

    p.style.cssText = `
      width:            ${size}px;
      height:           ${size}px;
      left:             ${Math.random() * 100}%;
      background:       ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration:  ${Math.random() * 20 + 12}s;
      animation-delay:     ${Math.random() * 15}s;
      border-radius:    ${isSquare ? '4px' : '50%'};
    `;

    container.appendChild(p);
  }
})();
