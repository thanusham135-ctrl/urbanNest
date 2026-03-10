/* ─── ABOUT COMPONENT ─── */
(function () {
  const mount = document.getElementById('about-mount');
  if (!mount) return;

  mount.innerHTML = `
    <section id="about">
      <div class="about-wrap">
        <div class="about-img-grid reveal">
          <div class="aig-big">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" alt="Living Room"/>
            <div class="aig-tag">
              <div class="aig-tag-val">12+</div>
              <div class="aig-tag-label">Years of Excellence</div>
            </div>
          </div>
          <div class="aig-sm"><img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80" alt="Kitchen"/></div>
          <div class="aig-sm"><img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&q=80" alt="Bedroom"/></div>
        </div>
        <div class="about-content reveal">
          <div class="sec-badge">Our Studio</div>
          <h2 class="sec-h2">Where <em>luxury</em> meets thoughtful design</h2>
          <p class="sec-p">For over 12 years, ELARA has transformed ordinary apartments into extraordinary sanctuaries. We believe your home should be a perfect expression of who you are.</p>
          <p class="sec-p">Our all-inclusive packages eliminate every stress of coordinating multiple vendors — from modular kitchens to custom wardrobes, we handle everything with total transparency.</p>
          <div class="about-features">
            <div class="af"><div class="af-icon">🏆</div><div class="af-title">Award-Winning Designs</div><div class="af-desc">Recognized by Architectural Digest India 2023</div></div>
            <div class="af"><div class="af-icon">👤</div><div class="af-title">Your Own Designer</div><div class="af-desc">Dedicated lead designer from concept to handover</div></div>
            <div class="af"><div class="af-icon">🔨</div><div class="af-title">Precision Execution</div><div class="af-desc">In-house certified craftsmen, 50-point QC</div></div>
            <div class="af"><div class="af-icon">🛡</div><div class="af-title">10-Year Guarantee</div><div class="af-desc">Every detail warranted, defects fixed for free</div></div>
          </div>
          <a href="#packages" class="btn-walnut" style="margin-top:28px;display:inline-flex;">
            <span>View Packages</span><span>→</span>
          </a>
        </div>
      </div>
    </section>
  `;
})();
