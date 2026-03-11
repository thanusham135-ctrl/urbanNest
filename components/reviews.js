/* ─── REVIEWS COMPONENT ─── */
(function () {
  const mount = document.getElementById('reviews-mount');
  if (!mount) return;

  const ratings = [
    { stars: 5, pct: 87 },
    { stars: 4, pct: 8  },
    { stars: 3, pct: 3  },
    { stars: 2, pct: 1  },
    { stars: 1, pct: 1  },
  ];

  const ratingBars = ratings.map(r => `
    <div class="rb-row">
      <span class="rb-star">${r.stars}</span>
      <span class="rb-icon">★</span>
      <div class="rb-bar"><div class="rb-fill" style="width:${r.pct}%"></div></div>
      <span class="rb-pct">${r.pct}%</span>
    </div>
  `).join('');

  const seedReviews = [
    { init:'PS', name:'Priya Sharma',         loc:'Bangalore, Karnataka', pkg:'3BHK Luxe',    date:'March 2025',    stars:5,
      body:'URBAN NEST transformed our apartment beyond our wildest expectations. The 3D visualization before execution gave us complete confidence. They delivered on day 43 — 2 days ahead of schedule. Every corner is perfect.',
      imgs:['photo-1600210492486-724fe5c67fb0','photo-1556909114-f6e7ad7d3136'], helpful:24 },
    { init:'RK', name:'Rajesh & Meena Kumar', loc:'Mumbai, Maharashtra',  pkg:'2BHK Luxe',    date:'February 2025', stars:5,
      body:'Not a single hidden cost. Our designer Shravan was always available. The kitchen alone gets compliments from every single guest. Worth every rupee. Highly recommend the Luxe package!',
      imgs:[], helpful:18 },
    { init:'AM', name:'Arjun Mehta',           loc:'Pune, Maharashtra',    pkg:'2BHK Premium', date:'January 2025',  stars:5,
      body:'I travel constantly and needed a hassle-free experience. Weekly photo updates, zero site visits needed. Came back to a home that looked exactly like the 3D render. Extraordinary service.',
      imgs:['photo-1616594039964-ae9021a400a0'], helpful:31 },
  ];

  function buildCard(r) {
    const imgs = r.imgs.map(id =>
      `<img class="rev-img" src="https://images.unsplash.com/${id}?w=200&q=70" alt=""/>`
    ).join('');

    return `
      <div class="rev-card">
        <div class="rev-card-hdr">
          <div class="rev-user">
            <div class="rev-ava">${r.init}</div>
            <div>
              <div class="rev-uname">${r.name}</div>
              <div class="rev-uloc">📍 ${r.loc}</div>
            </div>
          </div>
          <div class="rev-meta">
            <div class="rev-pkg-tag">${r.pkg}</div>
            <div class="rev-date">${r.date}</div>
          </div>
        </div>
        <p class="rev-body">"${r.body}"</p>
        ${imgs ? `<div class="rev-imgs">${imgs}</div>` : ''}
        <div class="rev-footer">
          <div class="rev-stars-sm">${'<i>★</i>'.repeat(r.stars)}</div>
          <button class="rev-helpful" onclick="likeReview(this)">👍 Helpful (${r.helpful})</button>
        </div>
      </div>
    `;
  }

  mount.innerHTML = `
    <section id="reviews">
      <div class="reviews-layout">

        <!-- Left panel -->
        <div class="rev-left reveal">
          <div class="sec-badge">Reviews</div>
          <div class="rev-score">4.9<span>★</span></div>
          <div class="rev-stars"><i>★</i><i>★</i><i>★</i><i>★</i><i>★</i></div>
          <div class="rev-count">Based on 500+ verified reviews</div>
          <div class="rev-photo-row" style="margin-top:16px;">
            <div class="rev-avatar-sm">P</div>
            <div class="rev-avatar-sm">R</div>
            <div class="rev-avatar-sm">A</div>
            <div class="rev-avatar-sm">K</div>
            <div class="rev-avatar-sm">M</div>
            <span class="rev-photo-text">+495 happy homeowners</span>
          </div>
          <button class="write-review-btn" onclick="openReviewModal()">✏ Write a Review</button>
          <p style="font-size:11px;color:var(--sand);margin-top:8px;">Help others choose confidently.</p>
          <div class="rating-breakdown">
            <div class="rb-title">Rating Breakdown</div>
            ${ratingBars}
          </div>
        </div>

        <!-- Right feed -->
        <div class="rev-right reveal">
          <div class="rev-feed" id="rev-feed">
            ${seedReviews.map(buildCard).join('')}
            <div id="new-reviews-zone"></div>
          </div>
        </div>

      </div>
    </section>
  `;

  /* Helpful button */
  window.likeReview = function (btn) {
    const m = btn.textContent.match(/\((\d+)\)/);
    if (m) {
      btn.textContent  = `👍 Helpful (${parseInt(m[1]) + 1})`;
      btn.style.color  = 'var(--gold)';
    }
  };
})();
