/* ─── REVIEW MODAL COMPONENT ─── */
(function () {
  const mount = document.getElementById('review-modal-mount');
  if (!mount) return;

  mount.innerHTML = `
    <div id="review-modal">
      <div class="modal-box">
        <button class="modal-close" onclick="closeReviewModal()">✕</button>
        <div class="modal-title">Share Your Experience</div>
        <div class="modal-sub">Your review helps future homeowners choose with confidence ✦</div>

        <label class="form-label">Your Rating</label>
        <div class="star-picker" id="star-picker">
          <span class="star-pick" onclick="setStars(1)">★</span>
          <span class="star-pick" onclick="setStars(2)">★</span>
          <span class="star-pick" onclick="setStars(3)">★</span>
          <span class="star-pick" onclick="setStars(4)">★</span>
          <span class="star-pick" onclick="setStars(5)">★</span>
        </div>

        <label class="form-label">Your Name</label>
        <input class="form-input" type="text" id="rev-name" placeholder="Priya Sharma"/>

        <label class="form-label">City</label>
        <input class="form-input" type="text" id="rev-city" placeholder="Bangalore, Karnataka"/>

        <label class="form-label">Package Used</label>
        <select class="form-input" id="rev-pkg">
          <option value="">Select Package</option>
          <option>2BHK Essential</option>
          <option>2BHK Premium</option>
          <option>2BHK Luxe</option>
          <option>3BHK Essential</option>
          <option>3BHK Premium</option>
          <option>3BHK Luxe</option>
        </select>

        <label class="form-label">Your Review</label>
        <textarea class="form-input" id="rev-body" rows="4"
          placeholder="Tell us about your experience with ELARA..."></textarea>

        <button class="submit-review" onclick="submitReview()">Submit Review ✦</button>
      </div>
    </div>
  `;

  let currentStars = 5;

  window.openReviewModal  = () => document.getElementById('review-modal').classList.add('open');
  window.closeReviewModal = () => document.getElementById('review-modal').classList.remove('open');

  window.setStars = function (v) {
    currentStars = v;
    document.querySelectorAll('.star-pick').forEach((s, i) =>
      s.classList.toggle('lit', i < v)
    );
  };
  setStars(5);

  window.submitReview = function () {
    const name = document.getElementById('rev-name').value.trim();
    const body = document.getElementById('rev-body').value.trim();
    const city = document.getElementById('rev-city').value.trim();
    const pkg  = document.getElementById('rev-pkg').value;

    if (!name || !body) { alert('Please fill in your name and review.'); return; }

    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const card = document.createElement('div');
    card.className = 'rev-card fade-up';
    card.innerHTML = `
      <div class="rev-card-hdr">
        <div class="rev-user">
          <div class="rev-ava">${initials}</div>
          <div>
            <div class="rev-uname">${name}</div>
            <div class="rev-uloc">${city ? '📍 ' + city : ''}</div>
          </div>
        </div>
        <div class="rev-meta">
          ${pkg ? `<div class="rev-pkg-tag">${pkg}</div>` : ''}
          <div class="rev-date">Just now</div>
        </div>
      </div>
      <p class="rev-body">"${body}"</p>
      <div class="rev-footer">
        <div class="rev-stars-sm">${'<i>★</i>'.repeat(currentStars)}</div>
        <button class="rev-helpful" onclick="likeReview(this)">👍 Helpful (0)</button>
      </div>
    `;

    const zone = document.getElementById('new-reviews-zone');
    zone.parentNode.insertBefore(card, zone);

    closeReviewModal();
    document.getElementById('rev-name').value = '';
    document.getElementById('rev-body').value = '';
    document.getElementById('rev-city').value = '';
    document.getElementById('rev-pkg').value  = '';
    setStars(5);
  };

  /* Close on backdrop click */
  document.getElementById('review-modal').addEventListener('click', function (e) {
    if (e.target === this) closeReviewModal();
  });
})();
