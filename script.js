/**
 * POOVARAGAVAN A — ZLL ARCHITECTURAL RUNTIME ENGINE
 * White, Black & Electric Purple Edition
 *
 * Core Modules:
 * 1. Vault Door Sliding Loader (000-100 count-up + split panel doors)
 * 2. Scroll Progress & HUD Status Tracker
 * 3. Dynamic Knowledge, Projects & Life Grid Renderer
 * 4. Autonomous Cursor Agent Swarm Engine
 * 5. 3D Perspective Card Tilt Interactions
 */

(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ================= 1. KNOWLEDGE & DATASETS ================= */
  const KNOWLEDGE_BASE = [
    [
      'Frontend',
      'UI/UX & React Engineering',
      'Clean, pixel-perfect, responsive interfaces built with React.js, Tailwind CSS, modern ES6+ JavaScript, and fluid CSS motion choreography.'
    ],
    [
      'Backend',
      'Backend & API Architecture',
      'Scalable server backends engineered with Node.js, Express, PHP, and RESTful API endpoints for secure, high-throughput client communication.'
    ],
    [
      'AI Apps',
      'AI Integration & LLM APIs',
      'Multilingual clinical triage and travel planners powered by Groq, Llama 3.3, Google Gemini API, voice recognition, and edge serverless execution.'
    ],
    [
      'Databases',
      'Relational & Real-Time Cloud',
      'Schema design, indexing, and query optimization across MySQL, Firebase, Cloud Firestore real-time listener rooms, and Cloudinary media delivery.'
    ],
    [
      'Developer',
      'AI Tooling & Modern IDEs',
      'Accelerating delivery velocity using Cursor, Codex, Google AI Studio, Lovable, GitHub workflows, and AI-assisted pair programming.'
    ],
    [
      'Full-Stack',
      'End-to-End Product Engineering',
      'Translating user friction into production MVPs from local discovery platforms to real-time couple chess engines with sub-50ms sync.'
    ]
  ];

  const PROJECTS_CATALOG = [
    [
      'PRJ_001',
      'https://github.com/poova-dev/reliefmind-triage',
      'ReliefMind Triage',
      'AI-powered emergency triage application supporting voice & text in Tamil, English, and Hindi with sub-400ms clinical classification.',
      ['Groq', 'Llama 3.3', 'React', 'Voice Input', 'Vercel']
    ],
    [
      'PRJ_002',
      '#contact',
      'NammaMap',
      'Tamil Nadu local discovery platform for neighborhood businesses, indigenous artisans, cultural gatherings, and hidden heritage gems.',
      ['PHP 8', 'MySQL', 'Bootstrap', 'Dynamic CMS']
    ],
    [
      'PRJ_003',
      'https://github.com/poova-dev/king-queen',
      'King & Queen ♟️',
      'Couple-focused real-time chess platform with private matchmaking rooms, move logs, and sub-50ms piece sync via Cloud Firestore.',
      ['HTML5', 'CSS3', 'JavaScript', 'Firestore']
    ],
    [
      'PRJ_004',
      '#contact',
      'TripSketch 🗺️',
      'Tamil Nadu-focused AI travel itinerary planner taking District + Days + Budget and generating optimal routes and food trails.',
      ['React', 'AI Engine', 'TN Tourism', 'Tailwind']
    ],
    [
      'PRJ_005',
      'https://github.com/poova-dev/eduvoice-ai',
      'EduVoice AI',
      'Voice-interactive educational learning companion designed for hands-free conceptual reinforcement and multilingual tutoring.',
      ['Python', 'WebSpeech', 'AI APIs', 'Node.js']
    ],
    [
      'PRJ_006',
      'https://github.com/poova-dev/ai-mystery-room',
      'AI Mystery Room',
      'Interactive room-escape puzzle game with dynamic generative AI storytelling and reactive scenario deduction.',
      ['JavaScript', 'LLM Prompting', 'Tailwind']
    ]
  ];

  const LIFE_MEDIA = [
    [
      'Outdoor Portrait',
      'Field Identity',
      'assets/photo-portrait-1.jpg'
    ],
    [
      'Engineering Workspace',
      'Development Rig',
      'assets/photo-landscape.jpg'
    ],
    [
      'Technology & Events',
      'Community Meetup',
      'assets/photo-portrait-2.jpg'
    ]
  ];

  // Render Knowledge Slides
  const knSlides = $('#knSlides');
  if (knSlides) {
    knSlides.innerHTML = KNOWLEDGE_BASE.map(([tag, title, desc], i) => `
      <article class="kn-slide">
        <div class="kn-num">0${i + 1}</div>
        <div class="mono" style="color: var(--acc);">(${tag})</div>
        <h3>${title}</h3>
        <p>${desc}</p>
      </article>
    `).join('');
  }

  // Render Project Cards
  const pjTrack = $('#pjTrack');
  if (pjTrack) {
    pjTrack.innerHTML = PROJECTS_CATALOG.map(([code, href, title, desc, tags], i) => `
      <a class="pj" href="${href}" target="_blank" rel="noopener">
        <div class="id mono"><span>${code}</span><span>↗</span></div>
        <h3>${title}</h3>
        <p>${desc}</p>
        <div class="tags">
          ${tags.map(t => `<span>${t}</span>`).join('')}
        </div>
      </a>
    `).join('');
  }

  // Render Life Gallery
  const lifeGrid = $('#life-grid');
  if (lifeGrid) {
    lifeGrid.innerHTML = LIFE_MEDIA.map(([title, cat, imgUrl]) => `
      <figure>
        <img src="${imgUrl}" alt="${title}" loading="lazy" />
        <figcaption>
          <b>${title}</b>
          <span>${cat}</span>
        </figcaption>
      </figure>
    `).join('');
  }

  /* ================= 2. VAULT LOADER SEQUENCE ================= */
  const loader = $('#loader');
  const ldNum = $('.ld-n', loader);
  let count = 0;

  document.documentElement.classList.add('locked');

  const countTimer = setInterval(() => {
    count += Math.floor(Math.random() * 8) + 3;
    if (count > 100) count = 100;
    if (ldNum) ldNum.textContent = String(count).padStart(3, '0');

    if (count === 100) {
      clearInterval(countTimer);
      setTimeout(() => {
        if (loader) {
          loader.classList.add('opened');
          document.documentElement.classList.remove('locked');
          setTimeout(() => {
            loader.remove();
          }, 800);
        }
        initAgentsSwarm();
      }, 300);
    }
  }, 30);

  /* ================= 3. SCROLL PROGRESS & HUD TRACKER ================= */
  const progressBar = $('#progressBar');
  const pctDisplay = $('#pct');
  const statusDisplay = $('#status');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) : 0;
    const pct = Math.min(100, Math.max(0, Math.round(progress * 100)));

    if (progressBar) progressBar.style.transform = `scaleX(${progress})`;
    if (pctDisplay) pctDisplay.textContent = `${pct}%`;

    if (statusDisplay) {
      if (pct < 15) statusDisplay.textContent = 'HERO // ORIGIN';
      else if (pct < 32) statusDisplay.textContent = 'ANALYZING PROFILE';
      else if (pct < 50) statusDisplay.textContent = 'PARSING KNOWLEDGE BASE';
      else if (pct < 70) statusDisplay.textContent = 'COMPILING FEATURED PROJECTS';
      else if (pct < 88) statusDisplay.textContent = 'VERIFYING CAREER & WORKS';
      else statusDisplay.textContent = 'READY // TERMINAL CONNECT';
    }
  }, { passive: true });

  /* ================= 4. AUTONOMOUS CURSOR AGENTS ENGINE ================= */
  function initAgentsSwarm() {
    const container = $('#agents');
    if (!container) return;

    const AGENTS_SPECS = [
      { name: 'POOVA', color: '#a855f7' },
      { name: 'REACT_BOT', color: '#c084fc' },
      { name: 'AI_AGENT', color: '#ffffff' }
    ];

    const agents = AGENTS_SPECS.map(spec => {
      const el = document.createElement('div');
      el.className = 'cur';
      el.style.setProperty('--c', spec.color);
      el.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="${spec.color}">
          <path d="M0 0l7 21 3.5-7.5L18 10 0 0z" />
        </svg>
        <span>${spec.name}</span>
      `;
      container.appendChild(el);

      return {
        el,
        x: Math.random() * (window.innerWidth - 100) + 50,
        y: Math.random() * (window.innerHeight - 100) + 50,
        targetX: Math.random() * (window.innerWidth - 100) + 50,
        targetY: Math.random() * (window.innerHeight - 100) + 50,
        speed: 0.035 + Math.random() * 0.03
      };
    });

    // Marquee selection simulator
    const marquee = document.createElement('div');
    marquee.className = 'mq';
    marquee.innerHTML = '<i></i><i></i><i></i><i></i>';
    marquee.style.setProperty('--c', '#a855f7');
    container.appendChild(marquee);

    let marqueeActive = false;
    let nextMarqueeTime = Date.now() + 2000;

    function triggerMarqueeAt(x, y) {
      marquee.style.left = `${x - 60}px`;
      marquee.style.top = `${y - 40}px`;
      marquee.style.width = '120px';
      marquee.style.height = '80px';
      marquee.style.opacity = '1';
      marqueeActive = true;

      setTimeout(() => {
        marquee.style.opacity = '0';
        marqueeActive = false;
        nextMarqueeTime = Date.now() + 4000 + Math.random() * 4000;
      }, 1200);
    }

    function swarmLoop() {
      agents.forEach(a => {
        a.x += (a.targetX - a.x) * a.speed;
        a.y += (a.targetY - a.y) * a.speed;
        a.el.style.transform = `translate(${a.x}px, ${a.y}px)`;

        if (Math.hypot(a.targetX - a.x, a.targetY - a.y) < 30) {
          a.targetX = Math.random() * (window.innerWidth - 120) + 60;
          a.targetY = Math.random() * (window.innerHeight - 120) + 60;

          if (!marqueeActive && Date.now() > nextMarqueeTime) {
            triggerMarqueeAt(a.targetX, a.targetY);
          }
        }
      });

      requestAnimationFrame(swarmLoop);
    }

    requestAnimationFrame(swarmLoop);
  }
})();
