/* ─── NAVBAR COMPONENT ─── */
(function () {
  const mount = document.getElementById('navbar-mount');
  if (!mount) return;

  mount.innerHTML = `
    <nav id="nav">
      <a href="#" class="logo">URBAN<span>NEST</span></a>
      <ul class="nav-links">
        <li><a href="#about">Studio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#packages">Packages</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="nav-right">
        <a href="tel:+919731036845 class="nav-call">📞 +91 9731036845</a>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobile-menu">
      <button class="mobile-close" id="mobile-close">✕</button>
      <a href="#about"    onclick="closeMob()">Studio</a>
      <a href="#services" onclick="closeMob()">Services</a>
      <a href="#packages" onclick="closeMob()">Packages</a>
      <a href="#gallery"  onclick="closeMob()">Gallery</a>
      <a href="#reviews"  onclick="closeMob()">Reviews</a>
      <a href="#contact"  onclick="closeMob()">Contact</a>
      <a href="tel:+919731036845" style="color:var(--gold)">📞 Call Now</a>
    </div>
  `;

  window.closeMob = function () {
    document.getElementById('mobile-menu').classList.remove('open');
  };

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.add('open');
  });
  document.getElementById('mobile-close').addEventListener('click', closeMob);
})();
