/* ─── OWNER CARD COMPONENT ─── */
(function () {
  const mount = document.getElementById('owner-card-mount');
  if (!mount) return;

  mount.innerHTML = `
    <div id="owner-card">
      <div class="oc-header">
        <div class="oc-avatar-wrap">
          <div class="oc-avatar">R</div>
          <div class="oc-online"></div>
        </div>
        <div>
          <div class="oc-name">Rajan Mehta</div>
          <div class="oc-role">Founder &amp; Lead Designer</div>
        </div>
      </div>
      <div class="oc-actions">
        <a href="tel:+919876543210" class="oc-btn oc-call">📞 Call Now — Free Consult</a>
        <a href="https://wa.me/919876543210" class="oc-btn oc-wa" target="_blank">💬 WhatsApp Us</a>
        <button class="oc-btn oc-msg" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">
          ✉ Send a Message
        </button>
      </div>
    </div>
    <button class="oc-toggle" id="oc-toggle" title="Contact Owner">🏠</button>
  `;

  let isOpen = false;

  window.toggleOwnerCard = function () {
    isOpen = !isOpen;
    document.getElementById('owner-card').classList.toggle('show', isOpen);
    document.getElementById('oc-toggle').textContent = isOpen ? '✕' : '🏠';
  };

  document.getElementById('oc-toggle').addEventListener('click', toggleOwnerCard);
})();
