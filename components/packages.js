/* ─── PACKAGES COMPONENT ─── */
(function () {
  const mount = document.getElementById('packages-mount');
  if (!mount) return;

  const data = {
    '2': [
      { tier:'Essential', price:'5.5L', note:'All-inclusive · Zero hidden costs', star:false,
        features:['Modular Kitchen (L / Straight)','2 Wardrobes with mirrors','False ceiling — Living room','TV unit with storage','Foyer design & console','Premium paint (Asian Paints)','10-year warranty'] },
      { tier:'Premium',   price:'8.5L', note:'Most popular choice',               star:true,  badge:'✦ Most Popular',
        features:['Everything in Essential +','Island kitchen, premium finish','Walk-in wardrobe design','Decor wall panels & textures','Smart lighting & dimmers','3D visualization preview','Dedicated project manager','Bar counter + crockery unit'] },
      { tier:'Luxe',      price:'12L',  note:'Ultimate luxury experience',         star:false,
        features:['Everything in Premium +','Italian laminate finishes','Custom upholstered headboard','Home automation basics','Curtains & soft furnishings','Premium flooring upgrade','Unlimited design revisions','White-glove handover'] },
    ],
    '3': [
      { tier:'Essential', price:'8.5L', note:'All-inclusive · Zero hidden costs', star:false,
        features:['Modular Kitchen (L / Parallel)','3 Wardrobes with mirrors','False ceiling — Living & Master','TV unit & entertainment wall','Foyer + Passage design','Bathroom fittings (2 baths)','10-year warranty'] },
      { tier:'Premium',   price:'13L',  note:'Best value for 3BHK',               star:true,  badge:'✦ Best Value',
        features:['Everything in Essential +','Island kitchen, premium finish','Master bedroom wardrobe wall','Kids room themed design','Smart lighting + auto blinds','3D visualization — all rooms','Dedicated project manager','Weekly progress updates'] },
      { tier:'Luxe',      price:'18L',  note:'The complete luxury package',        star:false,
        features:['Everything in Premium +','Imported materials & finishes','Full home automation system','Custom furniture pieces','Italian marble / vinyl flooring','Curtains, rugs & art curation','Balcony & utility design','Lifestyle consultation'] },
    ]
  };

  function buildGrid(bhk) {
    return data[bhk].map(p => `
      <div class="pkg-card ${p.star ? 'star' : ''} reveal">
        ${p.star ? `<div class="pkg-star-badge">${p.badge}</div>` : ''}
        <div class="pkg-tier">${bhk} BHK · ${p.tier}</div>
        <div class="pkg-name">${p.tier}</div>
        <div class="pkg-line"></div>
        <div class="pkg-price"><sub>₹</sub>${p.price}</div>
        <div class="pkg-note">${p.note}</div>
        <ul class="pkg-list">
          ${p.features.map(f => `<li><div class="pkg-check">✓</div>${f}</li>`).join('')}
        </ul>
        <button class="pkg-btn ${p.star ? 'pkg-btn-gold' : p.tier === 'Luxe' ? 'pkg-btn-dark' : 'pkg-btn-outline'}"
          onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">
          Get Started →
        </button>
      </div>
    `).join('');
  }

  mount.innerHTML = `
    <section id="packages">
      <div class="container">
        <div class="sec-center reveal">
          <div class="sec-badge">Pricing</div>
          <h2 class="sec-h2">All-Inclusive <em>Packages</em></h2>
          <p class="sec-p" style="max-width:480px;margin:0 auto;">Transparent pricing. One price covers everything — design, materials, execution, and warranty.</p>
          <div class="pkg-tabs">
            <button class="ptab on" id="pt2" onclick="switchPkg('2')">2 BHK</button>
            <button class="ptab"    id="pt3" onclick="switchPkg('3')">3 BHK</button>
          </div>
        </div>
      </div>
      <div class="pkg-grid" id="pkgs2">${buildGrid('2')}</div>
      <div class="pkg-grid" id="pkgs3" style="display:none;">${buildGrid('3')}</div>
    </section>
  `;

  window.switchPkg = function (v) {
    const is2 = v === '2';
    document.getElementById('pkgs2').style.display = is2 ? 'grid' : 'none';
    document.getElementById('pkgs3').style.display = is2 ? 'none' : 'grid';
    document.getElementById('pt2').className = 'ptab' + (is2  ? ' on' : '');
    document.getElementById('pt3').className = 'ptab' + (!is2 ? ' on' : '');
  };
})();
