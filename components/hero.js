/* ─── HERO COMPONENT ─── */
(function () {
  const mount = document.getElementById('hero-mount');
  if (!mount) return;

  mount.innerHTML = `
    <section id="hero">
      <div class="hero-bg">
       <img src="images/hero-bg.jpg" alt="Luxury Interior"/>    
      </div>
      <div class="hero-inner">
        <div class="hero-tag">Inspired Interiors, Designed for Living</div>
        <h1 class="hero-h1">
          Elevate<br>
          Your Everyday<br>
          <span class="italic">Space.</span>
        </h1>
      </div>
      <div class="hero-middle">
        <p class="hero-desc">
          We are a <strong>full-service interior design studio</strong> specialising in commercial and residential space interior designing — all-inclusive, zero surprises, delivered in 45 days.
        </p>
        <div class="hero-ctas">
          <a href="#packages" class="btn-walnut"><span>Explore Packages</span><span>→</span></a>
          <a href="#gallery"  class="btn-outline-w">View Our Work ↗</a>
        </div>
        <div class="hero-stats-row">
          <div class="hero-stat">
            <div class="hs-num">20<sup>+</sup></div>
            <div class="hs-label">Projects Done</div>
          </div>
          <div class="hero-stat">
            <div class="hs-num">45<sup>d</sup></div>
            <div class="hs-label">Delivery</div>
          </div>
          <div class="hero-stat">
            <div class="hs-num">4.9<sup>★</sup></div>
            <div class="hs-label">Rating</div>
          </div>
        </div>
      </div>
      <div class="hero-scroll-line">Scroll</div>
    </section>
  `;
})();
