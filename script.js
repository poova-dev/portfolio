/**
 * POOVARAGAVAN A — PORTFOLIO INTERACTIVITY SCRIPT
 * Featuring CursorSwarm Integration, Live Simulators & Smooth UI
 */

document.addEventListener('DOMContentLoaded', () => {
  // ========================================================
  // 1. CURSOR-SWARM INITIALIZATION
  // ========================================================
  let swarmInstance = null;

  try {
    if (typeof CursorSwarm !== 'undefined') {
      swarmInstance = new CursorSwarm({
        cursors: 3,
        agents: [
          { name: 'POOVA', color: '#7f5af0', role: 'layout' },
          { name: 'REACT_BOT', color: '#00f0ff', role: 'type' },
          { name: 'AI_AGENT', color: '#10b981', role: 'media' }
        ],
        deconstruct: false,         // Keep content built once drawn for best reading experience
        hud: true,                  // Show status pill
        hudPosition: 'bottom-left', // Bottom-left status
        sparks: true,               // Sparks on element finish
        caret: true,                // Blinking caret typing
        copyPaste: 0.35,            // Visual clone & customize cards
        speed: 1.1
      }).init();

      window.cursorSwarm = swarmInstance;
    }
  } catch (err) {
    console.warn('CursorSwarm initialization skipped or fallback active:', err);
  }

  // ========================================================
  // 2. SWARM DOCK CONTROLS (Pause, Rebuild, Palette)
  // ========================================================
  const btnToggleSwarm = document.getElementById('btnToggleSwarm');
  const btnRebuildSwarm = document.getElementById('btnRebuildSwarm');
  const swarmPaletteSelect = document.getElementById('swarmPaletteSelect');
  let isSwarmPaused = false;

  if (btnToggleSwarm && swarmInstance) {
    btnToggleSwarm.addEventListener('click', () => {
      if (!isSwarmPaused) {
        if (typeof swarmInstance.pause === 'function') swarmInstance.pause();
        btnToggleSwarm.textContent = '▶ Resume';
        isSwarmPaused = true;
      } else {
        if (typeof swarmInstance.resume === 'function') swarmInstance.resume();
        btnToggleSwarm.textContent = '⏸ Pause';
        isSwarmPaused = false;
      }
    });
  }

  if (btnRebuildSwarm && swarmInstance) {
    btnRebuildSwarm.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        try {
          if (typeof swarmInstance.destroy === 'function') swarmInstance.destroy();
          swarmInstance = new CursorSwarm({
            cursors: 3,
            agents: [
              { name: 'POOVA', color: '#7f5af0', role: 'layout' },
              { name: 'REACT_BOT', color: '#00f0ff', role: 'type' },
              { name: 'AI_AGENT', color: '#10b981', role: 'media' }
            ],
            deconstruct: false,
            hud: true,
            hudPosition: 'bottom-left',
            sparks: true,
            caret: true,
            speed: 1.2
          }).init();
          window.cursorSwarm = swarmInstance;
        } catch (e) {
          console.error(e);
        }
      }, 300);
    });
  }

  if (swarmPaletteSelect && swarmInstance) {
    swarmPaletteSelect.addEventListener('change', (e) => {
      const pal = e.target.value;
      if (typeof swarmInstance.setPalette === 'function') {
        swarmInstance.setPalette(pal);
      }
    });
  }

  // ========================================================
  // 3. ROLE TYPEWRITER EFFECT
  // ========================================================
  const roleElement = document.getElementById('roleTypewriter');
  const roles = [
    'Full Stack Developer',
    'React.js & Node.js Specialist',
    'AI Applications Builder',
    'Full Stack Developer @ Flyggo',
    'M.Sc. Computer Science Scholar'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 75;

  function typeRole() {
    if (!roleElement) return;
    const current = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      roleElement.textContent = current.substring(0, charIdx);
    } else {
      charIdx++;
      roleElement.textContent = current.substring(0, charIdx);
    }

    if (!isDeleting && charIdx === current.length) {
      isDeleting = true;
      typeSpeed = 1600; // Pause at end of text
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeSpeed = 300;
    } else {
      typeSpeed = isDeleting ? 40 : 80;
    }

    setTimeout(typeRole, typeSpeed);
  }

  setTimeout(typeRole, 600);

  // ========================================================
  // 4. MOBILE NAVIGATION TOGGLE
  // ========================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close mobile menu on click of any link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // ========================================================
  // 5. INTERACTIVE TRIPSKETCH AI PLANNER SIMULATOR
  // ========================================================
  const btnPlanTrip = document.getElementById('btnPlanTrip');
  const tripDistrict = document.getElementById('tripDistrict');
  const tripDays = document.getElementById('tripDays');
  const tripBudget = document.getElementById('tripBudget');
  const tripResult = document.getElementById('tripResult');

  const tripDatabase = {
    Thanjavur: {
      d1: 'Brihadeeswarar Temple & Royal Palace Museum (Food: Thanjavur Degree Coffee & Ashoka Halwa)',
      d2: 'Kumbakonam Mahamaham Tank & Darasuram Airavatesvara Temple (Stay: Heritage Homestay)',
      d3: 'Chettinad Kanadukathan Mansions & Athangudi Tile Factory (Food: Chettinad Pepper Curry)',
      d5: 'Thiruvaiyaru Thyagaraja Samadhi + Poondi Madha Basilica + Poompuhar Shoreline'
    },
    Madurai: {
      d1: 'Meenakshi Amman Temple & Thirumalai Nayakar Mahal (Food: Murugan Idli & Jigarthanda)',
      d2: 'Rameshwaram Coastal Corridor & Pamban Sea Bridge (Stay: Seaside Guesthouse)',
      d3: 'Dhanushkodi Ghost Town & Vibhishana Temple (Food: Coastal Seafood & Filter Kaapi)',
      d5: 'Kodaikanal Hill Station Extension (Silver Cascade, Pillar Rocks, Lake boating)'
    },
    Chennai: {
      d1: 'San Thome Basilica & Kapaleeshwarar Mylapore (Food: Rayar’s Mess Ghee Podi Dosa)',
      d2: 'Mahabalipuram Shore Temple & Pancha Rathas UNESCO (Stay: ECR Beach Resort)',
      d3: 'Kanchipuram Silk Weavers Village & Ekambareswarar Temple (Food: Kanchi Idli)',
      d5: 'Pulicat Lake Bird Sanctuary & Dutch Cemetery + Vedanthangal Sanctuary'
    },
    Nilgiris: {
      d1: 'Ooty Botanical Gardens, Nilgiri Mountain Railway Toy Train (Food: Ooty Varkey & Tea)',
      d2: 'Coonoor Sim’s Park, Dolphin’s Nose & Tea Factory Tour (Stay: Pine View Cottage)',
      d3: 'Pykara Waterfalls, Needle Rock View Point Gudalur (Food: Homemade Chocolates)',
      d5: 'Mudumalai Tiger Reserve Safari & Bandipur Forest Border Trail'
    },
    Kanyakumari: {
      d1: 'Vivekananda Rock Memorial & Thiruvalluvar Statue (Sunrise & Sunset point)',
      d2: 'Padmanabhapuram Wooden Palace & Mathur Aqueduct (Stay: Cape Breeze Hotel)',
      d3: 'Tiruchendur Murugan Seashore Temple & Manapad Church (Food: Nanjil Fish Curry)',
      d5: 'Suchindram Thanumalayan Temple + Courtallam Waterfalls Trail'
    }
  };

  if (btnPlanTrip && tripResult) {
    btnPlanTrip.addEventListener('click', () => {
      const dist = tripDistrict.value;
      const days = parseInt(tripDays.value, 10);
      const budget = tripBudget.value || '₹8,500';
      const data = tripDatabase[dist] || tripDatabase.Thanjavur;

      tripResult.innerHTML = `
        <div style="color:#34d399; font-weight:700; margin-bottom:6px;">✨ AI Plan for ${dist} (${days} Days · Est. Budget ${budget})</div>
        <strong>Day 1:</strong> ${data.d1}<br/>
        <strong>Day 2:</strong> ${data.d2}<br/>
        ${days >= 3 ? `<strong>Day 3:</strong> ${data.d3}<br/>` : ''}
        ${days >= 5 ? `<strong>Day 4-5:</strong> ${data.d5}<br/>` : ''}
        <div style="font-size:0.75rem; color:#94a3b8; margin-top:6px;">⚡ Clustered adjacent transport routes calculated with 0% budget leak.</div>
      `;
    });
  }

  // ========================================================
  // 6. INTERACTIVE RELIEFMIND TRIAGE SIMULATOR
  // ========================================================
  const btnTestTriage = document.getElementById('btnTestTriage');
  const triageInput = document.getElementById('triageInput');
  const triageOutput = document.getElementById('triageOutput');

  if (btnTestTriage && triageInput && triageOutput) {
    btnTestTriage.addEventListener('click', () => {
      const text = triageInput.value.toLowerCase().trim();

      if (!text) {
        triageOutput.innerHTML = `<span style="color:#ef4444;">Please enter a symptom description.</span>`;
        return;
      }

      // Simple keyword triage heuristic
      const criticalKeywords = ['நெஞ்சு', 'வலி', 'மூச்சு', 'chest', 'heart', 'breath', 'unconscious', 'cardiac', 'stroke', 'bleeding'];
      const urgentKeywords = ['fever', 'காய்ச்சல்', 'fracture', 'bone', 'pain', 'vomit', 'burn', 'deep cut'];

      let isCritical = criticalKeywords.some((k) => text.includes(k));
      let isUrgent = urgentKeywords.some((k) => text.includes(k));

      if (isCritical) {
        triageOutput.innerHTML = `
          <span class="triage-output-badge triage-crit">LEVEL 1: CRITICAL</span>
          <span style="margin-left: 8px;">Cardiac/Respiratory risk identified. 108 Emergency Ambulance routed. Nearest ER notified.</span>
        `;
      } else if (isUrgent) {
        triageOutput.innerHTML = `
          <span class="triage-output-badge triage-urg">LEVEL 2: URGENT</span>
          <span style="margin-left: 8px;">Acute condition flagged. Priority physician review queued within 15 minutes.</span>
        `;
      } else {
        triageOutput.innerHTML = `
          <span class="triage-output-badge triage-stab">LEVEL 3: STABLE</span>
          <span style="margin-left: 8px;">Vitals non-critical. Standard outpatient or tele-consultation triage recommended.</span>
        `;
      }
    });
  }

  // ========================================================
  // 7. CONTACT FORM HANDLER
  // ========================================================
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value;
      const email = document.getElementById('senderEmail').value;
      const msg = document.getElementById('senderMsg').value;

      formFeedback.style.display = 'block';

      // Open email client
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Poovaragavan,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
      window.location.href = `mailto:poovaragavan.dev@gmail.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        contactForm.reset();
      }, 1500);
    });
  }
});

