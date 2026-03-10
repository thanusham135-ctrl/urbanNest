/* ─── BEFORE / AFTER COMPONENT ─── */
(function () {
  const mount = document.getElementById('beforeafter-mount');
  if (!mount) return;

  const pairs = [
    {
      id: 'slide1',
      before: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=700&q=80',
      after:  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&q=80',
    },
    {
      id: 'slide2',
      before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
      after:  'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=700&q=80',
    },
  ];

  const cards = pairs.map(p => `
    <div class="ba-card">
      <div class="ba-slide" id="${p.id}">
        <div class="ba-before">
          <img src="${p.before}" alt="Before"/>
          <div class="ba-label">Before</div>
        </div>
        <div class="ba-after" id="after_${p.id}">
          <img src="${p.after}" alt="After"/>
          <div class="ba-label">After</div>
        </div>
        <div class="ba-divider" id="div_${p.id}"></div>
        <div class="ba-handle"  id="hdl_${p.id}">↔</div>
      </div>
    </div>
  `).join('');

  mount.innerHTML = `
    <section id="beforeafter">
      <div class="ba-intro reveal">
        <div class="sec-badge">Transformations</div>
        <h2 class="sec-h2">Before &amp; <em>After</em></h2>
        <p class="sec-p">Drag the slider to reveal the transformation. Real projects, real results.</p>
      </div>
      <div class="ba-grid reveal">${cards}</div>
    </section>
  `;

  /* Drag logic */
  let dragging = null;

  pairs.forEach(p => {
    const slide = document.getElementById(p.id);
    const start = e => {
      dragging = p.id;
      e.preventDefault();
    };
    slide.addEventListener('mousedown',  start);
    slide.addEventListener('touchstart', start, { passive: false });
  });

  const move = e => {
    if (!dragging) return;
    const slide = document.getElementById(dragging);
    const rect  = slide.getBoundingClientRect();
    const x     = e.touches ? e.touches[0].clientX : e.clientX;
    let pct     = ((x - rect.left) / rect.width) * 100;
    pct = Math.max(5, Math.min(95, pct));

    document.getElementById(`after_${dragging}`).style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    document.getElementById(`div_${dragging}`).style.left        = pct + '%';
    document.getElementById(`hdl_${dragging}`).style.left        = pct + '%';
  };

  const stop = () => { dragging = null; };

  document.addEventListener('mousemove',  move);
  document.addEventListener('touchmove',  move, { passive: true });
  document.addEventListener('mouseup',    stop);
  document.addEventListener('touchend',   stop);
})();
