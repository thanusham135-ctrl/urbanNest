/* ─── GALLERY COMPONENT ─── */
(function () {
  const mount = document.getElementById('gallery-mount');
  if (!mount) return;

  const items = [
    { cls:'g1', cat:'living',   img:'photo-1600210492486-724fe5c67fb0', cat_label:'Living Room', title:'Prestige Heights — 3BHK Luxe', ann:[{pos:'ann-tl',text:'Smart lighting system'},{pos:'ann-tr',text:'Italian marble flooring'}] },
    { cls:'g2', cat:'kitchen',  img:'photo-1556909114-f6e7ad7d3136',    cat_label:'Kitchen',      title:'Modular Island Kitchen',         ann:[{pos:'ann-bl',text:'Quartz countertop'}] },
    { cls:'g3', cat:'bedroom',  img:'photo-1616594039964-ae9021a400a0', cat_label:'Bedroom',      title:'Master Suite',                   ann:[] },
    { cls:'g4', cat:'living',   img:'photo-1586023492125-27b2c045efd7', cat_label:'Living Room',  title:'Contemporary Lounge',            ann:[{pos:'ann-tl',text:'Decor panel wall'}] },
    { cls:'g5', cat:'kitchen',  img:'photo-1556909172-54557c7e4fb7',    cat_label:'Kitchen',      title:'Gourmet Island Setup',           ann:[] },
    { cls:'g6', cat:'bedroom',  img:'photo-1522771739844-6a9f6d5f14af', cat_label:'Bedroom',      title:'Serene Retreat',                 ann:[] },
    { cls:'g7', cat:'bathroom', img:'photo-1552321554-5fefe8c9ef14',    cat_label:'Bathroom',     title:'Spa Sanctuary',                  ann:[] },
  ];

  const cards = items.map(it => `
    <div class="gm ${it.cls}" data-cat="${it.cat}">
      <img src="https://images.unsplash.com/${it.img}?w=700&q=80" alt="${it.title}"/>
      <div class="gm-overlay">
        <div>
          <div class="gm-cat">${it.cat_label}</div>
          <div class="gm-title">${it.title}</div>
        </div>
      </div>
      ${it.ann.map(a => `<div class="gm-annotation ${a.pos}">${a.text}</div>`).join('')}
    </div>
  `).join('');

  mount.innerHTML = `
    <section id="gallery">
      <div class="gallery-hdr reveal">
        <div>
          <div class="sec-badge">Portfolio</div>
          <h2 class="sec-h2">Our <em>finest</em> work</h2>
        </div>
        <div class="gal-filters">
          <button class="gf-btn on" onclick="filterGal(this,'all')">All</button>
          <button class="gf-btn"    onclick="filterGal(this,'living')">Living</button>
          <button class="gf-btn"    onclick="filterGal(this,'kitchen')">Kitchen</button>
          <button class="gf-btn"    onclick="filterGal(this,'bedroom')">Bedroom</button>
          <button class="gf-btn"    onclick="filterGal(this,'bathroom')">Bathroom</button>
        </div>
      </div>
      <div class="gal-mosaic reveal">${cards}</div>
    </section>
  `;

  window.filterGal = function (btn, cat) {
    document.querySelectorAll('.gf-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    document.querySelectorAll('.gm').forEach(el => {
      const match = cat === 'all' || el.dataset.cat === cat;
      el.style.opacity    = match ? '1'     : '.25';
      el.style.transform  = match ? 'scale(1)' : 'scale(.97)';
      el.style.transition = 'opacity .4s, transform .4s';
    });
  };
})();
