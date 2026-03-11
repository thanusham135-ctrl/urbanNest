/* ─── CONTACT COMPONENT ─── */
(function () {
  const mount = document.getElementById('contact-mount');
  if (!mount) return;

  mount.innerHTML = `
    <section id="contact">
      <div class="contact-grid">

        <!-- Left info -->
        <div class="reveal">
          <div class="sec-badge">Begin Your Journey</div>
          <h2>Start your<br><em>dream home</em><br>today</h2>
          <p>Fill out the form — our team will reach out within 24 hours to schedule your free consultation and complimentary 3D room preview.</p>

          <a href="tel:+919731036845" class="contact-card">
            <div class="cc-icon">📞</div>
            <div><div class="cc-label">Call Shravan Directly</div><div class="cc-val">+91 97310 36845</div></div>
          </a>
          <a href="mailto:shravangamin64@gmail.com" class="contact-card">
            <div class="cc-icon">✉️</div>
            <div><div class="cc-label">Email Us</div><div class="cc-val">shravangamin64@gmail.com</div></div>
          </a>
          <a href="https://wa.me/919731036845" class="contact-card" target="_blank">
            <div class="cc-icon">💬</div>
            <div><div class="cc-label">WhatsApp</div><div class="cc-val">Chat with us directly</div></div>
          </a>
          <div class="contact-card" style="cursor:default;">
            <div class="cc-icon">📍</div>
            <div>
              <div class="cc-label">Cities We Serve</div>
              <div class="cc-val" style="font-size:12px;">Bangalore · Mumbai · Pune · Hyderabad · Chennai · Delhi NCR</div>
            </div>
          </div>
        </div>

        <!-- Right form -->
        <div class="reveal">
          <div class="form-box" id="mainForm">
            <div class="fb-title">Book a Free Consultation</div>
            <div class="fb-sub">No commitment · Free 3D preview · Response within 24 hours</div>
            <div class="form-grid">
              <div><label class="form-label">Full Name *</label><input class="form-input" type="text" placeholder="Shravan G Amin"/></div>
              <div><label class="form-label">Phone *</label><input class="form-input" type="tel" placeholder="+91 97310 36845"/></div>
            </div>
            <div class="form-grid">
              <div><label class="form-label">Email *</label><input class="form-input" type="email" placeholder="shravan@email.com"/></div>
              <div>
                <label class="form-label">Package</label>
                <select class="form-input">
                  <option>Select Package</option>
                  <option>2BHK — Essential</option><option>2BHK — Premium</option><option>2BHK — Luxe</option>
                  <option>3BHK — Essential</option><option>3BHK — Premium</option><option>3BHK — Luxe</option>
                </select>
              </div>
            </div>
            <div class="form-full">
              <label class="form-label">Budget Range</label>
              <select class="form-input">
                <option>Select Budget</option>
                <option>₹5 – ₹8 Lakhs</option><option>₹8 – ₹12 Lakhs</option>
                <option>₹12 – ₹18 Lakhs</option><option>₹18+ Lakhs</option>
              </select>
            </div>
            <div class="form-full">
              <label class="form-label">Tell us about your space</label>
              <textarea class="form-input" rows="3" placeholder="Apartment size, preferred style, move-in timeline..."></textarea>
            </div>
            <button class="submit-btn" id="submit-contact">Book Free Consultation →</button>
            <p style="text-align:center;font-size:11px;color:var(--sand);margin-top:10px;">No spam. We'll contact you once to schedule your session.</p>
          </div>

          <div class="contact-success" id="contact-success">
            <div class="cs-icon">🏡</div>
            <div class="cs-title">You're all set!</div>
            <p>Rajan will personally call you within 24 hours to discuss your dream home.</p>
          </div>
        </div>

      </div>
    </section>
  `;

  document.getElementById('submit-contact').addEventListener('click', function () {
    this.innerHTML = '<div class="spinner"></div> Sending...';
    this.disabled  = true;
    setTimeout(() => {
      document.getElementById('mainForm').style.display           = 'none';
      document.getElementById('contact-success').style.display    = 'block';
    }, 1800);
  });
})();
