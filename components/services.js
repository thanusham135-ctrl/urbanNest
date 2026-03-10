/* ─── SERVICES COMPONENT ─── */
(function () {
  const mount = document.getElementById('services-mount');
  if (!mount) return;

  const services = [
    { icon:'🍳', title:'Modular Kitchens',      desc:'L-shape, parallel, island, and U-shape kitchens with premium laminates and smart storage.' },
    { icon:'🛏', title:'Bedroom & Wardrobes',   desc:'Custom wardrobe walls, walk-in closets, upholstered headboards, and study nooks.' },
    { icon:'🛋', title:'Living Spaces',          desc:'TV units, false ceilings, accent walls, decor panels, smart lighting, and entertainment zones.' },
    { icon:'🚿', title:'Bathrooms',              desc:'Vanity units, premium fittings, tile selection, shower enclosures, and spa-inspired finishes.' },
    { icon:'🏡', title:'Foyer & Passage',        desc:'Statement entrances, console tables, mirror walls, and wallpaper that set the tone instantly.' },
    { icon:'🌿', title:'Balcony & Outdoor',      desc:'Deck flooring, planters, outdoor furniture, pergolas, and zen garden concepts.' },
    { icon:'💡', title:'Smart Home & Lighting',  desc:'Automated lighting, motorized blinds, smart switches, and home theatre setups.' },
    { icon:'🎨', title:'Soft Furnishings',       desc:'Curtains, rugs, cushions, art curation, plants, and the finishing touches that make it home.' },
  ];

  const cards = services.map((s, i) => `
    <div class="svc-card">
      <div class="svc-num">0${i + 1}</div>
      <div class="svc-icon">${s.icon}</div>
      <div class="svc-title">${s.title}</div>
      <div class="svc-desc">${s.desc}</div>
      <div class="svc-link">Explore</div>
    </div>
  `).join('');

  mount.innerHTML = `
    <section id="services">
      <div class="container">
        <div class="sec-center reveal">
          <div class="sec-badge">Our Services</div>
          <h2 class="sec-h2">Everything your home <em>deserves</em></h2>
          <p class="sec-p" style="max-width:480px;margin:0 auto;">Complete end-to-end interior solutions — from a single room refresh to a full home transformation.</p>
        </div>
      </div>
      <div class="svc-grid reveal">${cards}</div>
    </section>
  `;
})();
