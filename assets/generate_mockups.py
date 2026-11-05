import os

os.makedirs('assets', exist_ok=True)

# 1. ReliefMind Triage Mockup
reliefmind_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="rm-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d1117"/>
      <stop offset="100%" stop-color="#161b22"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#ff3366" flood-opacity="0.25"/>
    </filter>
  </defs>

  <rect width="800" height="450" rx="16" fill="url(#rm-bg)"/>
  <rect x="0.5" y="0.5" width="799" height="449" rx="15.5" fill="none" stroke="#30363d" stroke-width="1"/>

  <!-- Top bar -->
  <rect x="0" y="0" width="800" height="48" rx="16" fill="#161b22"/>
  <circle cx="28" cy="24" r="6" fill="#ff5f56"/>
  <circle cx="48" cy="24" r="6" fill="#ffbd2e"/>
  <circle cx="68" cy="24" r="6" fill="#27c93f"/>
  <text x="100" y="29" fill="#8b949e" font-family="-apple-system,system-ui,sans-serif" font-size="12" font-weight="600">reliefmind-triage.vercel.app · AI Emergency Triage</text>
  <rect x="650" y="12" width="125" height="24" rx="12" fill="rgba(239,68,68,0.15)"/>
  <circle cx="665" cy="24" r="4" fill="#ef4444"/>
  <text x="676" y="28" fill="#ef4444" font-family="-apple-system,system-ui,sans-serif" font-size="11" font-weight="700">TRIAGE ACTIVE</text>

  <!-- Left Column: Patient Voice & Input -->
  <g transform="translate(30, 70)">
    <rect width="360" height="350" rx="12" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
    
    <text x="20" y="35" fill="#f0f6fc" font-family="-apple-system,system-ui,sans-serif" font-size="16" font-weight="700">Emergency Input Console</text>
    <text x="20" y="55" fill="#8b949e" font-family="-apple-system,system-ui,sans-serif" font-size="12">Multilingual Speech &amp; Text Assessment</text>

    <!-- Language selector pills -->
    <rect x="20" y="75" width="70" height="26" rx="13" fill="#238636"/>
    <text x="35" y="92" fill="#ffffff" font-family="-apple-system,system-ui,sans-serif" font-size="12" font-weight="600">தமிழ்</text>
    <rect x="98" y="75" width="75" height="26" rx="13" fill="#21262d"/>
    <text x="113" y="92" fill="#c9d1d9" font-family="-apple-system,system-ui,sans-serif" font-size="12">English</text>
    <rect x="180" y="75" width="70" height="26" rx="13" fill="#21262d"/>
    <text x="198" y="92" fill="#c9d1d9" font-family="-apple-system,system-ui,sans-serif" font-size="12">हिंदी</text>

    <!-- Voice Recording Waveform card -->
    <rect x="20" y="120" width="320" height="110" rx="10" fill="#161b22" stroke="#30363d"/>
    <circle cx="50" cy="175" r="22" fill="#ef4444" filter="url(#shadow)"/>
    <path d="M47 165 a3 3 0 0 1 6 0 v8 a3 3 0 0 1 -6 0 z M43 171 a7 7 0 0 0 14 0 M50 178 v5 M45 183 h10" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
    
    <!-- Audio Waveform bars -->
    <g transform="translate(90, 175)">
      <rect x="0" y="-12" width="4" height="24" rx="2" fill="#ef4444"/>
      <rect x="8" y="-22" width="4" height="44" rx="2" fill="#ef4444"/>
      <rect x="16" y="-8" width="4" height="16" rx="2" fill="#ef4444"/>
      <rect x="24" y="-30" width="4" height="60" rx="2" fill="#ff7b72"/>
      <rect x="32" y="-15" width="4" height="30" rx="2" fill="#ff7b72"/>
      <rect x="40" y="-28" width="4" height="56" rx="2" fill="#ff7b72"/>
      <rect x="48" y="-10" width="4" height="20" rx="2" fill="#ef4444"/>
      <rect x="56" y="-20" width="4" height="40" rx="2" fill="#ef4444"/>
      <rect x="64" y="-6" width="4" height="12" rx="2" fill="#8b949e"/>
      <rect x="72" y="-18" width="4" height="36" rx="2" fill="#8b949e"/>
      <rect x="80" y="-10" width="4" height="20" rx="2" fill="#8b949e"/>
    </g>
    <text x="200" y="179" fill="#8b949e" font-family="monospace" font-size="11">00:08 LIVE</text>

    <!-- Transcribed Symptom -->
    <text x="20" y="255" fill="#8b949e" font-family="-apple-system,system-ui,sans-serif" font-size="11" font-weight="600">TRANSCRIBED SYMPTOMS (TAMIL)</text>
    <rect x="20" y="265" width="320" height="65" rx="8" fill="#161b22" stroke="#30363d"/>
    <text x="32" y="290" fill="#f0f6fc" font-family="-apple-system,system-ui,sans-serif" font-size="13">"நெஞ்சு வலி கடுமையான அழுத்தம், மூச்சு"</text>
    <text x="32" y="312" fill="#79c0ff" font-family="-apple-system,system-ui,sans-serif" font-size="12">&gt; Severe retrosternal chest pain + dyspnea</text>
  </g>

  <!-- Right Column: AI Triage Intelligence (Groq + Llama 3.3) -->
  <g transform="translate(410, 70)">
    <rect width="360" height="350" rx="12" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
    
    <rect x="20" y="20" width="160" height="24" rx="6" fill="#1f242c" stroke="#388bfd"/>
    <text x="28" y="36" fill="#58a6ff" font-family="monospace" font-size="11" font-weight="700">GROQ + LLAMA 3.3</text>

    <!-- Priority Card -->
    <rect x="20" y="55" width="320" height="95" rx="10" fill="rgba(239, 68, 68, 0.12)" stroke="#da3633" stroke-width="1.5"/>
    <text x="35" y="85" fill="#f85149" font-family="-apple-system,system-ui,sans-serif" font-size="12" font-weight="700">TRIAGE CLASSIFICATION</text>
    <text x="35" y="115" fill="#ffffff" font-family="-apple-system,system-ui,sans-serif" font-size="22" font-weight="800">LEVEL 1: CRITICAL</text>
    <text x="35" y="136" fill="#ff7b72" font-family="-apple-system,system-ui,sans-serif" font-size="12">Immediate intervention needed (0 min delay)</text>

    <!-- Clinical extraction chips -->
    <text x="20" y="175" fill="#8b949e" font-family="-apple-system,system-ui,sans-serif" font-size="11" font-weight="600">EXTRACTED CLINICAL ENTITIES</text>
    <g transform="translate(20, 185)">
      <rect x="0" y="0" width="100" height="26" rx="6" fill="#161b22" stroke="#30363d"/>
      <text x="10" y="17" fill="#ff7b72" font-family="-apple-system,system-ui,sans-serif" font-size="11">Ac. Coronary</text>
      <rect x="108" y="0" width="95" height="26" rx="6" fill="#161b22" stroke="#30363d"/>
      <text x="118" y="17" fill="#d29922" font-family="-apple-system,system-ui,sans-serif" font-size="11">SpO2 Alert</text>
      <rect x="211" y="0" width="105" height="26" rx="6" fill="#161b22" stroke="#30363d"/>
      <text x="221" y="17" fill="#58a6ff" font-family="-apple-system,system-ui,sans-serif" font-size="11">ER Routing</text>
    </g>

    <!-- Recommended actions -->
    <text x="20" y="240" fill="#8b949e" font-family="-apple-system,system-ui,sans-serif" font-size="11" font-weight="600">ACTION PROTOCOL</text>
    <rect x="20" y="250" width="320" height="75" rx="8" fill="#161b22" stroke="#30363d"/>
    <text x="32" y="272" fill="#7ee787" font-family="-apple-system,system-ui,sans-serif" font-size="12">✓ 108 Emergency Ambulance Triggered</text>
    <text x="32" y="293" fill="#c9d1d9" font-family="-apple-system,system-ui,sans-serif" font-size="12">✓ Nearest Cardiac Facility Alerted (2.4 km)</text>
    <text x="32" y="313" fill="#8b949e" font-family="-apple-system,system-ui,sans-serif" font-size="11">AI Latency: 320ms · Vercel Edge Architecture</text>
  </g>
</svg>'''

with open("assets/reliefmind-mockup.svg", "w") as f:
    f.write(reliefmind_svg)

# 2. NammaMap Mockup
nammamap_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="nm-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a101d"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>

  <rect width="800" height="450" rx="16" fill="url(#nm-bg)"/>
  <rect x="0.5" y="0.5" width="799" height="449" rx="15.5" fill="none" stroke="#1e293b" stroke-width="1"/>

  <!-- Top bar -->
  <rect x="0" y="0" width="800" height="48" rx="16" fill="#0f172a"/>
  <circle cx="28" cy="24" r="6" fill="#ff5f56"/>
  <circle cx="48" cy="24" r="6" fill="#ffbd2e"/>
  <circle cx="68" cy="24" r="6" fill="#27c93f"/>
  <text x="100" y="29" fill="#94a3b8" font-family="-apple-system,system-ui,sans-serif" font-size="12" font-weight="600">nammamap.app · Tamil Nadu Local Discovery Platform</text>
  <rect x="620" y="12" width="155" height="24" rx="12" fill="rgba(6,182,212,0.15)"/>
  <text x="635" y="28" fill="#38bdf8" font-family="-apple-system,system-ui,sans-serif" font-size="11" font-weight="700">TAMIL NADU EDITION</text>

  <!-- Left: Interactive Map View Graphic -->
  <g transform="translate(30, 70)">
    <rect width="420" height="350" rx="12" fill="#0b1329" stroke="#1e293b"/>
    <!-- Stylized Map Grid Lines -->
    <path d="M40 50 Q180 80 250 160 T400 300" stroke="#1e3a8a" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M100 320 Q220 280 260 180 T350 70" stroke="#0e7490" stroke-width="3" fill="none" opacity="0.5"/>
    <circle cx="250" cy="160" r="45" fill="none" stroke="rgba(6,182,212,0.2)" stroke-width="2"/>
    <circle cx="250" cy="160" r="90" fill="none" stroke="rgba(6,182,212,0.1)" stroke-width="1"/>

    <!-- Map Pins -->
    <g transform="translate(140, 110)">
      <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
      <circle cx="0" cy="0" r="7" fill="#f59e0b"/>
      <rect x="15" y="-12" width="115" height="24" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="23" y="4" fill="#f1f5f9" font-family="-apple-system,system-ui,sans-serif" font-size="11" font-weight="600">Brihadeeswarar</text>
    </g>

    <g transform="translate(250, 180)">
      <circle cx="0" cy="0" r="18" fill="#06b6d4" opacity="0.25"/>
      <circle cx="0" cy="0" r="8" fill="#06b6d4"/>
      <rect x="16" y="-12" width="135" height="24" rx="6" fill="#1e293b" stroke="#06b6d4"/>
      <text x="24" y="4" fill="#38bdf8" font-family="-apple-system,system-ui,sans-serif" font-size="11" font-weight="700">Chettinad Heritage ★</text>
    </g>

    <g transform="translate(180, 260)">
      <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
      <circle cx="0" cy="0" r="7" fill="#10b981"/>
      <rect x="14" y="-12" width="115" height="24" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="22" y="4" fill="#f1f5f9" font-family="-apple-system,system-ui,sans-serif" font-size="11">Artisan Pottery</text>
    </g>

    <!-- Category filter bar -->
    <g transform="translate(20, 20)">
      <rect x="0" y="0" width="80" height="26" rx="13" fill="#06b6d4"/>
      <text x="14" y="17" fill="#ffffff" font-family="-apple-system,system-ui,sans-serif" font-size="11" font-weight="700">All Places</text>
      <rect x="88" y="0" width="92" height="26" rx="13" fill="#1e293b"/>
      <text x="100" y="17" fill="#94a3b8" font-family="-apple-system,system-ui,sans-serif" font-size="11">Hidden Gems</text>
      <rect x="188" y="0" width="75" height="26" rx="13" fill="#1e293b"/>
      <text x="200" y="17" fill="#94a3b8" font-family="-apple-system,system-ui,sans-serif" font-size="11">Food Trail</text>
      <rect x="270" y="0" width="65" height="26" rx="13" fill="#1e293b"/>
      <text x="282" y="17" fill="#94a3b8" font-family="-apple-system,system-ui,sans-serif" font-size="11">Events</text>
    </g>
  </g>

  <!-- Right: Business Spotlight & Admin Panel -->
  <g transform="translate(470, 70)">
    <rect width="300" height="350" rx="12" fill="#0b1329" stroke="#1e293b"/>
    <text x="20" y="32" fill="#f8fafc" font-family="-apple-system,system-ui,sans-serif" font-size="15" font-weight="700">Spotlight Discovery</text>
    
    <rect x="20" y="48" width="260" height="110" rx="10" fill="#131e3a" stroke="#1e293b"/>
    <text x="35" y="75" fill="#38bdf8" font-family="-apple-system,system-ui,sans-serif" font-size="13" font-weight="700">Sri Meenakshi Sweet Mart</text>
    <text x="35" y="95" fill="#94a3b8" font-family="-apple-system,system-ui,sans-serif" font-size="11">Traditional Halwa &amp; Ghee Savories</text>
    <rect x="35" y="108" width="65" height="20" rx="4" fill="rgba(245,158,11,0.2)"/>
    <text x="42" y="122" fill="#fbbf24" font-family="-apple-system,system-ui,sans-serif" font-size="10" font-weight="700">★ 4.9 (420)</text>
    <rect x="108" y="108" width="75" height="20" rx="4" fill="#1e293b"/>
    <text x="115" y="122" fill="#94a3b8" font-family="-apple-system,system-ui,sans-serif" font-size="10">Thanjavur</text>

    <!-- Card 2: Upcoming Event -->
    <rect x="20" y="170" width="260" height="75" rx="10" fill="#131e3a" stroke="#1e293b"/>
    <text x="35" y="195" fill="#a7f3d0" font-family="-apple-system,system-ui,sans-serif" font-size="12" font-weight="700">Carnatic Heritage Fest</text>
    <text x="35" y="215" fill="#94a3b8" font-family="-apple-system,system-ui,sans-serif" font-size="11">Heritage Hall · Weekend 6:00 PM</text>
    <text x="35" y="232" fill="#38bdf8" font-family="-apple-system,system-ui,sans-serif" font-size="10">Free Entry · Registered</text>

    <!-- Tech Stack indicator -->
    <rect x="20" y="260" width="260" height="70" rx="8" fill="#0f172a" stroke="#334155"/>
    <text x="32" y="282" fill="#94a3b8" font-family="monospace" font-size="11">PHP 8.x + MySQL + Bootstrap</text>
    <text x="32" y="302" fill="#cbd5e1" font-family="-apple-system,system-ui,sans-serif" font-size="11">✓ Dynamic Admin CMS Management</text>
    <text x="32" y="318" fill="#38bdf8" font-family="-apple-system,system-ui,sans-serif" font-size="10">Lightweight, instant local discovery</text>
  </g>
</svg>'''

with open("assets/nammamap-mockup.svg", "w") as f:
    f.write(nammamap_svg)

# 3. King & Queen Mockup
kq_squares = []
for r in range(6):
    for c in range(6):
        fill = "#362459" if (r + c) % 2 == 0 else "#1d1233"
        kq_squares.append(f'<rect x="{c*51}" y="{r*51}" width="51" height="51" fill="{fill}"/>')

kingqueen_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="kq-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#110d1f"/>
      <stop offset="100%" stop-color="#1d1335"/>
    </linearGradient>
    <linearGradient id="purple-neon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <linearGradient id="cyan-neon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
  </defs>

  <rect width="800" height="450" rx="16" fill="url(#kq-bg)"/>
  <rect x="0.5" y="0.5" width="799" height="449" rx="15.5" fill="none" stroke="#3b2d54" stroke-width="1"/>

  <!-- Top bar -->
  <rect x="0" y="0" width="800" height="48" rx="16" fill="#18112b"/>
  <circle cx="28" cy="24" r="6" fill="#ff5f56"/>
  <circle cx="48" cy="24" r="6" fill="#ffbd2e"/>
  <circle cx="68" cy="24" r="6" fill="#27c93f"/>
  <text x="100" y="29" fill="#c084fc" font-family="-apple-system,system-ui,sans-serif" font-size="12" font-weight="700">KING &amp; QUEEN ♟️ · Couple Chess Application</text>
  <rect x="630" y="12" width="145" height="24" rx="12" fill="rgba(168,85,247,0.2)"/>
  <text x="642" y="28" fill="#e879f9" font-family="monospace" font-size="11" font-weight="700">ROOM #KQ-7729</text>

  <!-- Left: Chessboard UI -->
  <g transform="translate(40, 75)">
    <rect width="340" height="340" rx="12" fill="#24183d" stroke="#583b8a" stroke-width="2"/>
    <g transform="translate(17, 17)">
      {''.join(kq_squares)}
      <rect x="102" y="153" width="51" height="51" fill="rgba(168,85,247,0.3)" stroke="#c084fc" stroke-width="2"/>
      <rect x="153" y="102" width="51" height="51" fill="rgba(6,182,212,0.3)" stroke="#38bdf8" stroke-width="2"/>

      <text x="25" y="38" font-size="28" text-anchor="middle" fill="#f472b6">♞</text>
      <text x="76" y="38" font-size="28" text-anchor="middle" fill="#f472b6">♝</text>
      <text x="128" y="38" font-size="30" text-anchor="middle" fill="#f472b6">♛</text>
      <text x="179" y="38" font-size="32" text-anchor="middle" fill="#f472b6">♚</text>
      <text x="230" y="38" font-size="28" text-anchor="middle" fill="#f472b6">♝</text>
      <text x="281" y="38" font-size="28" text-anchor="middle" fill="#f472b6">♜</text>

      <text x="25" y="89" font-size="22" text-anchor="middle" fill="#f472b6">♟</text>
      <text x="76" y="89" font-size="22" text-anchor="middle" fill="#f472b6">♟</text>
      <text x="179" y="140" font-size="22" text-anchor="middle" fill="#f472b6">♟</text>

      <text x="25" y="293" font-size="28" text-anchor="middle" fill="#38bdf8">♖</text>
      <text x="76" y="293" font-size="28" text-anchor="middle" fill="#38bdf8">♗</text>
      <text x="128" y="293" font-size="32" text-anchor="middle" fill="#38bdf8">♔</text>
      <text x="179" y="293" font-size="30" text-anchor="middle" fill="#38bdf8">♕</text>
      <text x="230" y="293" font-size="28" text-anchor="middle" fill="#38bdf8">♘</text>
      <text x="281" y="293" font-size="28" text-anchor="middle" fill="#38bdf8">♖</text>
      <text x="128" y="191" font-size="30" text-anchor="middle" fill="#38bdf8">♕</text>
    </g>
  </g>

  <!-- Right: Couple Match & Firestore Sync Panel -->
  <g transform="translate(420, 75)">
    <rect width="340" height="340" rx="12" fill="#1b122e" stroke="#3b2d54"/>
    
    <rect x="20" y="20" width="300" height="70" rx="10" fill="#281a44" stroke="#ec4899"/>
    <circle cx="55" cy="55" r="20" fill="url(#purple-neon)"/>
    <text x="55" y="62" fill="#fff" font-size="16" text-anchor="middle" font-weight="700">Q</text>
    <text x="90" y="47" fill="#fdf4ff" font-family="-apple-system,system-ui,sans-serif" font-size="14" font-weight="700">Queen Player</text>
    <text x="90" y="67" fill="#f472b6" font-family="-apple-system,system-ui,sans-serif" font-size="12">Turn Timer: 02:45 · Moves: 14</text>
    <circle cx="295" cy="45" r="5" fill="#10b981"/>

    <!-- Player 2 -->
    <rect x="20" y="105" width="300" height="70" rx="10" fill="#281a44" stroke="#38bdf8"/>
    <circle cx="55" cy="140" r="20" fill="url(#cyan-neon)"/>
    <text x="55" y="147" fill="#fff" font-size="16" text-anchor="middle" font-weight="700">K</text>
    <text x="90" y="132" fill="#f0f9ff" font-family="-apple-system,system-ui,sans-serif" font-size="14" font-weight="700">King Player</text>
    <text x="90" y="152" fill="#38bdf8" font-family="-apple-system,system-ui,sans-serif" font-size="12">Thinking... (Your move)</text>

    <!-- Firestore Realtime Status -->
    <rect x="20" y="195" width="300" height="125" rx="10" fill="#140c24" stroke="#4c1d95"/>
    <text x="35" y="222" fill="#a855f7" font-family="monospace" font-size="11" font-weight="700">FIRESTORE REAL-TIME ROOM SYNC</text>
    <text x="35" y="246" fill="#e9d5ff" font-family="-apple-system,system-ui,sans-serif" font-size="12">✓ Multi-room state listening active</text>
    <text x="35" y="268" fill="#c084fc" font-family="-apple-system,system-ui,sans-serif" font-size="12">✓ Realtime board synchronization (45ms)</text>
    <text x="35" y="290" fill="#9ca3af" font-family="-apple-system,system-ui,sans-serif" font-size="11">Tech: HTML · CSS · JS · Firebase Firestore</text>
  </g>
</svg>'''

with open("assets/kingqueen-mockup.svg", "w") as f:
    f.write(kingqueen_svg)

# 4. TripSketch Mockup
tripsketch_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="ts-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#061a14"/>
      <stop offset="100%" stop-color="#0b2e23"/>
    </linearGradient>
    <linearGradient id="emerald-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#34d399"/>
    </linearGradient>
  </defs>

  <rect width="800" height="450" rx="16" fill="url(#ts-bg)"/>
  <rect x="0.5" y="0.5" width="799" height="449" rx="15.5" fill="none" stroke="#134e3f" stroke-width="1"/>

  <!-- Top bar -->
  <rect x="0" y="0" width="800" height="48" rx="16" fill="#08281f"/>
  <circle cx="28" cy="24" r="6" fill="#ff5f56"/>
  <circle cx="48" cy="24" r="6" fill="#ffbd2e"/>
  <circle cx="68" cy="24" r="6" fill="#27c93f"/>
  <text x="100" y="29" fill="#6ee7b7" font-family="-apple-system,system-ui,sans-serif" font-size="12" font-weight="700">TripSketch 🗺️ · Tamil Nadu AI Travel Planner</text>
  <rect x="610" y="12" width="165" height="24" rx="12" fill="rgba(16,185,129,0.2)"/>
  <text x="625" y="28" fill="#34d399" font-family="monospace" font-size="11" font-weight="700">AI SMART ENGINE</text>

  <!-- Left: Trip Configuration inputs -->
  <g transform="translate(35, 75)">
    <rect width="320" height="340" rx="12" fill="#062119" stroke="#134e3f"/>
    <text x="20" y="32" fill="#ecfdf5" font-family="-apple-system,system-ui,sans-serif" font-size="15" font-weight="700">Tamil Nadu Trip Planner</text>
    
    <!-- District input -->
    <text x="20" y="65" fill="#a7f3d0" font-family="-apple-system,system-ui,sans-serif" font-size="11" font-weight="600">STEP 1: SELECT DISTRICT</text>
    <rect x="20" y="75" width="280" height="36" rx="8" fill="#0d3b2e" stroke="#10b981"/>
    <text x="32" y="98" fill="#ffffff" font-family="-apple-system,system-ui,sans-serif" font-size="13" font-weight="600">Thanjavur &amp; Delta Hub</text>

    <!-- Days & Budget in 2 cols -->
    <text x="20" y="135" fill="#a7f3d0" font-family="-apple-system,system-ui,sans-serif" font-size="11" font-weight="600">STEP 2: DURATION</text>
    <rect x="20" y="145" width="130" height="36" rx="8" fill="#0d3b2e" stroke="#134e3f"/>
    <text x="32" y="168" fill="#ffffff" font-family="-apple-system,system-ui,sans-serif" font-size="13">3 Days</text>

    <text x="170" y="135" fill="#a7f3d0" font-family="-apple-system,system-ui,sans-serif" font-size="11" font-weight="600">STEP 3: BUDGET</text>
    <rect x="170" y="145" width="130" height="36" rx="8" fill="#0d3b2e" stroke="#134e3f"/>
    <text x="182" y="168" fill="#fbbf24" font-family="-apple-system,system-ui,sans-serif" font-size="13" font-weight="700">₹ 8,500</text>

    <!-- Nearby Districts detected -->
    <text x="20" y="210" fill="#a7f3d0" font-family="-apple-system,system-ui,sans-serif" font-size="11" font-weight="600">NEARBY DISTRICTS CLUSTERS</text>
    <g transform="translate(20, 220)">
      <rect x="0" y="0" width="85" height="26" rx="6" fill="#134e3f"/>
      <text x="8" y="17" fill="#6ee7b7" font-size="11">Kumbakonam</text>
      <rect x="92" y="0" width="75" height="26" rx="6" fill="#134e3f"/>
      <text x="100" y="17" fill="#6ee7b7" font-size="11">Chettinad</text>
      <rect x="174" y="0" width="70" height="26" rx="6" fill="#134e3f"/>
      <text x="182" y="17" fill="#6ee7b7" font-size="11">Trichy</text>
    </g>

    <!-- CTA Button -->
    <rect x="20" y="270" width="280" height="42" rx="10" fill="url(#emerald-glow)"/>
    <text x="75" y="296" fill="#042f24" font-family="-apple-system,system-ui,sans-serif" font-size="13" font-weight="800">GENERATE AI ITINERARY</text>
  </g>

  <!-- Right: Generated Itinerary Preview -->
  <g transform="translate(380, 75)">
    <rect width="385" height="340" rx="12" fill="#062119" stroke="#134e3f"/>
    <text x="20" y="32" fill="#ecfdf5" font-family="-apple-system,system-ui,sans-serif" font-size="15" font-weight="700">AI Generated Travel Schedule</text>

    <!-- Day 1 -->
    <g transform="translate(20, 50)">
      <circle cx="12" cy="12" r="10" fill="#10b981"/>
      <text x="12" y="16" fill="#042f24" font-size="10" font-weight="800" text-anchor="middle">1</text>
      <text x="32" y="16" fill="#34d399" font-family="-apple-system,system-ui,sans-serif" font-size="13" font-weight="700">Day 1: Chola Grandeur &amp; Royal Palace</text>
      <rect x="32" y="25" width="310" height="48" rx="6" fill="#0d3b2e"/>
      <text x="44" y="44" fill="#ecfdf5" font-size="11">Brihadeeswarar Temple (Morning) &gt; Royal Palace Museum</text>
      <text x="44" y="60" fill="#fbbf24" font-size="10">Food: Authentic Ashoka Halwa &amp; Thanjavur Degree Coffee</text>
    </g>

    <!-- Day 2 -->
    <g transform="translate(20, 135)">
      <circle cx="12" cy="12" r="10" fill="#10b981"/>
      <text x="12" y="16" fill="#042f24" font-size="10" font-weight="800" text-anchor="middle">2</text>
      <text x="32" y="16" fill="#34d399" font-family="-apple-system,system-ui,sans-serif" font-size="13" font-weight="700">Day 2: Temple Hub &amp; Mahamaham</text>
      <rect x="32" y="25" width="310" height="48" rx="6" fill="#0d3b2e"/>
      <text x="44" y="44" fill="#ecfdf5" font-size="11">Kumbakonam Mahamaham Tank &gt; Airavatesvara Temple</text>
      <text x="44" y="60" fill="#fbbf24" font-size="10">Stay: Heritage Homestay · Est: ₹1,800/night</text>
    </g>

    <!-- Day 3 -->
    <g transform="translate(20, 220)">
      <circle cx="12" cy="12" r="10" fill="#10b981"/>
      <text x="12" y="16" fill="#042f24" font-size="10" font-weight="800" text-anchor="middle">3</text>
      <text x="32" y="16" fill="#34d399" font-family="-apple-system,system-ui,sans-serif" font-size="13" font-weight="700">Day 3: Chettinad Mansions &amp; Flavors</text>
      <rect x="32" y="25" width="310" height="48" rx="6" fill="#0d3b2e"/>
      <text x="44" y="44" fill="#ecfdf5" font-size="11">Kanadukathan 1000-window Palace &gt; Athangudi Tile Factory</text>
      <text x="44" y="60" fill="#fbbf24" font-size="10">Culinary: Chettinad Pepper Curry &amp; Seepu Seedai</text>
    </g>

    <!-- Total Cost Meter -->
    <g transform="translate(20, 305)">
      <text x="0" y="15" fill="#a7f3d0" font-size="11">Budget Allocation: ₹8,150 / ₹8,500 (Saved ₹350)</text>
      <rect x="245" y="4" width="95" height="18" rx="4" fill="rgba(16,185,129,0.2)"/>
      <text x="253" y="16" fill="#34d399" font-size="10" font-weight="700">OPTIMAL</text>
    </g>
  </g>
</svg>'''

with open("assets/tripsketch-mockup.svg", "w") as f:
    f.write(tripsketch_svg)

print("Created all 4 SVG mockups successfully!")

