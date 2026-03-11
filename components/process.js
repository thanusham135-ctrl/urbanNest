/* ─── PROCESS COMPONENT ─── */
(function () {
  const mount = document.getElementById('process-mount');
  if (!mount) return;

  const steps = [
    { num:'01', icon:'📞', title:'Free Consultation',   day:'Day 1',     desc:'We understand your vision, lifestyle, and budget. Zero pressure, full honesty.' },
    { num:'02', icon:'✏️', title:'3D Design Proposal',  day:'Day 3–5',   desc:'Full photorealistic 3D render of your home with transparent costing.' },
    { num:'03', icon:'🔨', title:'Execution',            day:'Day 8–40',  desc:'In-house team takes over. Daily photo updates — no site visits needed.' },
    { num:'04', icon:'🔑', title:'Handover',             day:'Day 45',    desc:'50-point QC inspection. Warranty activated. Walk into your dream home.' },
  ];

  const cards = steps.map(s => `
    <div class="step">
      <div class="step-ghost">${s.num}</div>
      <div class="step-num">${s.num}</div>
      <div class="step-icon">${s.icon}</div>
      <div class="step-title">${s.title}</div>
      <div class="step-day">${s.day}</div>
      <div class="step-desc">${s.desc}</div>
    </div>
  `).join('');

  mount.innerHTML = `
    <section id="process">
      <div class="process-intro reveal">
        <div class="sec-badge">Our Method</div>
        <h2 class="sec-h2">Dream to <em>reality</em> in 45 days</h2>
      </div>
      <div class="process-grid reveal">${cards}</div>
    </section>
  `;
})();
