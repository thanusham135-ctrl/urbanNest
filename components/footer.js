/* ─── FOOTER COMPONENT ─── */
(function () {
  const mount = document.getElementById('footer-mount');
  if (!mount) return;

  mount.innerHTML = `
    <footer>
      <div class="foot-grid">
        <div>
          <a href="#" class="foot-logo">URBAN<span>NEST</span></a>
          <p class="foot-desc">Premium all-inclusive interior design for commercial and residential space interior designing homes. Crafting extraordinary spaces since 2012.</p>
          <div class="foot-socials">
            <a href="#" class="fsoc" aria-label="LinkedIn">in</a>
            <a href="#" class="fsoc" aria-label="YouTube">▶</a>
            <a href="#" class="fsoc" aria-label="Instagram">ig</a>
            <a href="#" class="fsoc" aria-label="Facebook">f</a>
          </div>
        </div>
        <div class="foot-col">
          <h5>Packages</h5>
          <a href="#">2BHK Essential</a>
          <a href="#">2BHK Premium</a>
          <a href="#">2BHK Luxe</a>
          <a href="#">3BHK Essential</a>
          <a href="#">3BHK Premium</a>
          <a href="#">3BHK Luxe</a>
        </div>
        <div class="foot-col">
          <h5>Services</h5>
          <a href="#">Modular Kitchens</a>
          <a href="#">Wardrobes</a>
          <a href="#">False Ceilings</a>
          <a href="#">Smart Lighting</a>
          <a href="#">Balcony Design</a>
        </div>
        <div class="foot-col">
          <h5>Support</h5>
          <a href="#">Free Consultation</a>
          <a href="#">EMI Options</a>
          <a href="#">Warranty Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div class="foot-bottom">
        <p>© 2025 URBAN NEST Studios. All rights reserved.</p>
        <div class="foot-cities">
          <span class="fcity">Bangalore</span>
          <span class="fcity">Mumbai</span>
          <span class="fcity">Pune</span>
          <span class="fcity">Hyderabad</span>
          <span class="fcity">Chennai</span>
          <span class="fcity">Delhi NCR</span>
        </div>
      </div>
    </footer>
  `;
})();
