/* ─── CUSTOM GOLD CURSOR ─── */
(function () {
  const cur  = document.getElementById('cur');
  const ring = document.getElementById('cur-ring');
  if (!cur || !ring) return;

  let mx = 0, my = 0;
  let rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
  });

  // Ring follows with lag
  function animateCursor() {
    rx += (mx - rx) * .1;
    ry += (my - ry) * .1;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Scale on hover
  document.querySelectorAll('a, button, .pkg-card, .svc-card, .gm, .rev-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cur.style.transform = 'translate(-50%,-50%) scale(2.5)';
      cur.style.opacity   = '.5';
    });
    el.addEventListener('mouseleave', () => {
      cur.style.transform = 'translate(-50%,-50%) scale(1)';
      cur.style.opacity   = '1';
    });
  });
})();
