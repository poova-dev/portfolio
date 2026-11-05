(() => {
    const html = document.documentElement;
    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => [...r.querySelectorAll(s)];

    /* ================= CONTENT ================= */
    const KNOW = [
        ["Frontend", "UI/UX & React.js", "Crafting high-performance, responsive interfaces with React.js, Tailwind CSS, modern component architecture, and intuitive user experiences."],
        ["Backend", "Node.js & PHP APIs", "Designing scalable server-side architectures, clean RESTful APIs, robust authentication workflows, and microservice integration."],
        ["Database", "MySQL & Firebase Firestore", "Relational data modeling, schema optimization, real-time NoSQL document synchronization, and security rules enforcement."],
        ["AI & LLMs", "AI APIs & Agentic Solutions", "Engineering AI integrations using Groq (Llama 3.3), Google Gemini, voice input triage, and practical workflow automation."],
        ["Full-Stack", "Full-Stack Web Engineering", "End-to-end web engineering connecting reactive client experiences with clean backend layers, database logic, and cloud hosting."],
        ["DevOps & Cloud", "Cloud & Developer Tooling", "Deploying production applications via Vercel, Cloudflare, Cloudinary, automated Git CI/CD pipelines, and Cursor IDE."],
        ["Product & Design", "Product Strategy & UI/UX", "Transforming real-world ideas into functional products: wireframing in Figma, designing user flows, and building accessible solutions."]
    ];
    $('#knSlides').innerHTML = KNOW.map(([tag, t, d], i) =>
        `<article class="kn-slide"><div class="kn-num" aria-hidden="true">0${i + 1}</div><div class="mono">(0${i + 1}) ${tag}</div><h3>${t.replace('&', '&amp;')}</h3><p data-b="words" data-l="${tag}" data-manual>${d}</p></article>`).join('');

    const PROJ = [
        ["reliefmind-triage", "https://github.com/poova-dev/reliefmind-triage", "ReliefMind Triage", "AI-powered multilingual emergency triage app with voice and symptom analysis.", ["React", "Groq", "Llama 3.3", "Voice AI"]],
        ["nammamap", "https://github.com/poova-dev/nammamap", "NammaMap", "Hyperlocal discovery platform for local businesses, community events, and hidden spots.", ["PHP", "MySQL", "Bootstrap", "REST API"]],
        ["king-queen", "https://github.com/poova-dev/king-queen", "King & Queen ♟️", "Couple-focused real-time chess platform featuring Firebase Firestore multiplayer rooms.", ["JavaScript", "Firebase", "Firestore", "Canvas"]],
        ["tripsketch", "https://github.com/poova-dev/tripsketch", "TripSketch 🗺️", "Tamil Nadu-focused AI travel planner generating practical district-by-district itineraries.", ["React", "AI Studio", "Tailwind", "Maps"]],
        ["flyggo-web", "https://flyggo.com", "Flyggo Web Platform", "Production web application architecture, responsive frontends, and API integrations.", ["React", "Node.js", "APIs", "Production"]],
        ["portfolio-2026", "https://github.com/poova-dev/portfolio", "Autonomous Kinetic Portfolio", "Kinetic personal portfolio orchestrated by autonomous swarm agents with GSAP.", ["GSAP", "ScrollTrigger", "Swarm", "CSS3"]]
    ];
    $('#pjTrack').innerHTML = PROJ.map(([, href, t, d, tags], i) =>
        `<a class="pj" href="${href}" target="_blank" rel="noopener" data-b="frame" data-l="${t}" data-manual><div class="id mono"><span>PRJ_00${i + 1}</span><span>↗</span></div><div class="big" aria-hidden="true">0${i + 1}</div><h3>${t}</h3><p>${d}</p><div class="tags">${tags.map(x => `<span>${x}</span>`).join('')}</div></a>`).join('');

    const STACK = ["React.js", "Node.js", "JavaScript", "PHP", "MySQL", "Firebase", "Firestore", "Tailwind CSS", "Bootstrap", "Python", "C++", "REST APIs", "Groq / Llama 3", "Gemini API", "Google AI Studio", "Cursor IDE", "Git", "Vercel", "Cloudinary", "Cloudflare"];
    const MAKER = ["Full Stack Developer", "Flyggo", "M.Sc. Computer Science", "AI Applications", "ReliefMind Triage", "NammaMap", "King & Queen ♟️", "TripSketch 🗺️", "Tamil Nadu", "Product Builder", "UI/UX Design", "Prompt Engineering"];
    const fill = (el, list) => { const s = list.map(t => `<span>${t} </span>`).join(''); el.innerHTML = s + s + s; };
    fill($('#trk1'), STACK); fill($('#trk2'), MAKER);

    const LIFE = [
        ["photo-portrait-1.jpg", "Poovaragavan", "Full Stack Developer", "4/5"],
        ["reliefmind-mockup.svg", "ReliefMind AI", "Emergency Triage", "4/3"],
        ["photo-landscape.jpg", "Tamil Nadu Landscape", "Photography", "16/9"],
        ["nammamap-mockup.svg", "NammaMap", "Local Discovery", "4/3"],
        ["dev-setup.svg", "Dev Environment", "Cursor / Terminal", "4/5"],
        ["kingqueen-mockup.svg", "King & Queen ♟️", "Multiplayer Chess", "1/1"],
        ["photo-portrait-2.jpg", "Campus & Tech Events", "Academic Life", "3/4"],
        ["tripsketch-mockup.svg", "TripSketch 🗺️", "AI Travel Planner", "4/3"],
        ["ai-tuning.svg", "Llama 3.3 & Groq", "AI Engineering", "4/5"],
        ["poova-avatar.jpg", "Profile Portrait", "Identity", "4/5"],
        ["route-map.svg", "Itinerary Engine", "Algorithms", "1/1"],
        ["mobile-arch.svg", "Flyggo Platform", "Web Architecture", "4/5"]
    ];
    const lifeCols = innerWidth < 700 ? 2 : 3;
    const lifeGrid = $('#life-grid');
    lifeGrid.style.setProperty('--cols', lifeCols);
    lifeGrid.innerHTML = Array.from({ length: lifeCols }, (_, c) =>
        `<div class="col">${LIFE.filter((_, i) => i % lifeCols === c).map(([f, t, cat, ar], k) =>
            `<figure class="media" data-b="img" data-l="${f}" data-dir="${'ltr'[(c + k) % 3]}" style="--ar:${ar}"><img src="assets/${f}" alt="${t}" loading="lazy"><figcaption><b>${t}</b><span>${cat}</span></figcaption></figure>`).join('')}</div>`).join('');

    /* ================= fallbacks ================= */
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const unlock = () => html.classList.remove('locked');
    if (!window.gsap || !window.ScrollTrigger || reduce) {
        html.classList.remove('js'); unlock();
        $$('#loader').forEach(e => e.remove());
        $$('.quote').forEach(e => { e.style.opacity = 1; });
        return;
    }
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    scrollTo(0, 0);

    /* ================= text splitting ================= */
    const split = (root, words) => {
        const out = [];
        const walk = node => [...node.childNodes].forEach(n => {
            if (n.nodeType === 3) {
                const frag = document.createDocumentFragment();
                n.textContent.split(/(\s+)/).forEach(w => {
                    if (!w) return;
                    if (/^\s+$/.test(w)) { frag.append(' '); return; }
                    const ws = document.createElement('span'); ws.className = 'w';
                    if (words) { ws.textContent = w; out.push(ws); }
                    else[...w].forEach(ch => { const c = document.createElement('span'); c.className = 'c'; c.textContent = ch; ws.append(c); out.push(c); });
                    frag.append(ws);
                });
                n.replaceWith(frag);
            } else if (n.nodeType === 1 && !n.classList.contains('k')) walk(n);
        });
        walk(root);
        return out;
    };
    const letters = el => $$('.ln', el).flatMap(ln => {
        const t = ln.textContent; ln.textContent = '';
        return [...t].map(ch => { const s = document.createElement('span'); s.className = 'hc'; s.textContent = ch; ln.append(s); return s; });
    });

    /* ================= build targets ================= */
    const SHUT = { l: 'inset(0 100% 0 0)', r: 'inset(0 0 0 100%)', t: 'inset(0 0 100% 0)' };
    const OPEN = 'inset(0 0% 0% 0%)';
    const SCAN = { l: ['left', '0%', '100%'], r: ['left', '100%', '0%'], t: ['top', '0%', '100%'] };
    $$('[data-b]').forEach(el => {
        const t = el.dataset.b, P = {};
        if (t === 'type') P.parts = split(el, false);
        if (t === 'words') P.parts = split(el, true);
        if (t === 'frame') {
            const bd = document.createElement('span'); bd.className = 'bd';
            bd.innerHTML = '<i class="t"></i><i class="r"></i><i class="b"></i><i class="l"></i><i class="fl"></i>';
            P.kids = [...el.children]; el.append(bd);
            P.lines = [...bd.children].slice(0, 4); P.flash = bd.lastChild;
            gsap.set(P.lines, { scale: 0 }); gsap.set(P.kids, { opacity: 0, y: 14 });
        }
        if (t === 'img') {
            P.dir = el.dataset.dir || 'l';
            const s = document.createElement('i'); s.className = P.dir === 't' ? 'scan h' : 'scan'; el.append(s);
            P.scan = s; P.img = el.querySelector('img'); P.cap = el.querySelector('figcaption');
            gsap.set(el, { clipPath: SHUT[P.dir] });
            if (P.cap) gsap.set(P.cap, { opacity: 0, y: 12 });
        }
        if (t === 'pop') { P.kids = [...el.children]; gsap.set(P.kids, { opacity: 0, scale: .4 }); }
        el._p = P;
        el.style.visibility = 'visible';
    });

    const finish = el => {
        const P = el._p;
        el._state = 'built';
        if (P.parts) P.parts.forEach(p => p.classList.add('on'));
        if (P.lines) { gsap.set(P.lines, { scale: 1 }); gsap.set(P.kids, { opacity: 1, y: 0 }); el.classList.add('built'); }
        if (P.scan) gsap.set(el, { clipPath: OPEN });
        if (P.cap) gsap.set(P.cap, { opacity: 1, y: 0 });
        if (el.dataset.b === 'pop') gsap.set(P.kids, { opacity: 1, scale: 1 });
    };
    const reset = el => {
        const P = el._p;
        el._state = 'empty';
        if (P.parts) P.parts.forEach(p => p.classList.remove('on'));
        if (P.lines) { gsap.set(P.lines, { scale: 0 }); gsap.set(P.kids, { opacity: 0, y: 14 }); el.classList.remove('built'); }
        if (P.scan) gsap.set(el, { clipPath: SHUT[P.dir || 'l'] });
        if (P.cap) gsap.set(P.cap, { opacity: 0, y: 12 });
        if (el.dataset.b === 'pop') gsap.set(P.kids, { opacity: 0, scale: .4 });
    };

    const layer = $('#agents');
    const css = getComputedStyle(html);
    const statusEl = $('#status'), dotEl = $('.hud .status i');
    const mk = (cls, inner = '') => { const d = document.createElement('div'); d.className = cls; d.innerHTML = inner; layer.append(d); return d; };
    const AG = [['AGENT·01', 'layout', '--a1'], ['AGENT·02', 'type', '--a2'], ['AGENT·03', 'media', '--a3']].map(([name, role, v], i) => {
        const color = css.getPropertyValue(v).trim();
        const a = { name, role, color, q: [], busy: false };
        a.gh = mk('gd h'); a.gv = mk('gd v'); a.caret = mk('caret');
        a.mq = mk('mq', '<i></i><i></i><i></i><i></i><b></b>'); a.lbl = a.mq.querySelector('b');
        a.cur = mk('cur', `<svg width="22" height="22" viewBox="0 0 24 24"><path d="M3 2l7.6 19.2 2.7-8 7.9-2.8z" fill="${color}" stroke="#000" stroke-width="1.3" stroke-linejoin="round"/></svg><span>${name}</span>`);
        [a.gh, a.gv, a.caret, a.mq, a.cur].forEach(e => e.style.setProperty('--c', color));
        a.x = innerWidth / 2 + (i - 1) * Math.min(110, innerWidth * .22) - 40; a.y = innerHeight / 2 - 24;
        gsap.set(a.cur, { x: a.x, y: a.y, scale: 0, opacity: 0 });
        return a;
    });
    const ROLE = { frame: 'layout', pop: 'layout', type: 'type', words: 'type', img: 'media' };
    const VERB = { frame: 'drawing', pop: 'spawning', type: 'writing', words: 'writing', img: 'placing' };
    const maxX = () => innerWidth - 96;
    const lerp = (a, b, t) => a + (b - a) * t;
    const place = (a, x, y) => { a.x = Math.min(x, maxX()); a.y = y; gsap.set(a.cur, { x: a.x, y: a.y }); };
    const backlog = () => AG.reduce((n, a) => n + a.q.length, 0);
    const speed = () => Math.min(1 + backlog() * .45, 4);
    const drive = (dur, ease, onTick) => new Promise(res => {
        const o = { p: 0 };
        gsap.to(o, { p: 1, duration: dur / speed(), ease, onUpdate: () => onTick(o.p), onComplete: res });
    });
    const travel = (a, target, dur = .5) => { const sx = a.x, sy = a.y; return drive(dur, 'power3.inOut', p => { const t = target(); place(a, lerp(sx, t.x, p), lerp(sy, t.y, p)); }); };
    const wait = s => new Promise(r => gsap.delayedCall(s / speed(), r));
    const say = (a, verb, label) => {
        statusEl.textContent = `${a.name} › ${verb} <${label}/>`;
        dotEl.style.background = a.color;
    };
    const spark = (R, color) => {
        [[R.left, R.top], [R.right, R.top], [R.left, R.bottom], [R.right, R.bottom]].forEach(([x, y]) => {
            for (let k = 0; k < 3; k++) {
                const s = mk('spark'); s.style.setProperty('--c', color);
                const ang = Math.random() * Math.PI * 2, dist = 16 + Math.random() * 32;
                gsap.fromTo(s, { x, y, opacity: 1, scale: 1 }, { x: x + Math.cos(ang) * dist, y: y + Math.sin(ang) * dist, opacity: 0, scale: 0, rotation: 180, duration: .7, ease: 'power3.out', onComplete: () => s.remove() });
            }
        });
    };

    const marquee = async (a, el) => {
        const r = () => el.getBoundingClientRect();
        await travel(a, () => ({ x: r().left, y: r().top }));
        gsap.set(a.mq, { opacity: 1 }); gsap.set([a.gh, a.gv], { opacity: .45 });
        const tick = p => {
            const R = r(), w = R.width * p, h = R.height * p;
            gsap.set(a.mq, { x: R.left, y: R.top, width: w, height: h });
            gsap.set(a.gh, { y: R.top }); gsap.set(a.gv, { x: R.left });
            a.lbl.textContent = `${Math.round(w)} × ${Math.round(h)}`;
            place(a, R.left + w, R.top + h);
        };
        await drive(.45, 'power2.out', tick);
        return () => {
            const hold = { p: 0 };
            gsap.to(hold, { p: 1, duration: .45, onUpdate: () => tick(1) });
            gsap.to([a.mq, a.gh, a.gv], { opacity: 0, duration: .35, delay: .2 });
        };
    };

    const JOBS = {
        async frame(a, el) {
            const release = await marquee(a, el), P = el._p;
            gsap.to(P.lines, { scale: 1, duration: .45, stagger: .06, ease: 'power2.inOut' });
            gsap.fromTo(P.flash, { opacity: .16 }, { opacity: 0, duration: .7 });
            gsap.to(P.kids, { opacity: 1, y: 0, duration: .5, stagger: .05, ease: 'power2.out', delay: .1 });
            el.classList.add('built');
            spark(el.getBoundingClientRect(), a.color);
            release();
            await wait(.25);
        },
        async img(a, el) {
            const release = await marquee(a, el), P = el._p, [axis, from, to] = SCAN[P.dir || 'l'];
            if (!P.keep) gsap.fromTo(el, { clipPath: SHUT[P.dir || 'l'] }, { clipPath: OPEN, duration: .8, ease: 'power3.inOut' });
            gsap.fromTo(P.scan, { [axis]: from, opacity: 1 }, { [axis]: to, duration: .8, ease: 'power3.inOut', onComplete: () => gsap.set(P.scan, { opacity: 0 }) });
            if (!P.keep) gsap.fromTo(P.img, { scale: 1.3 }, { scale: 1, duration: 1.2, ease: 'power2.out' });
            if (P.cap) gsap.to(P.cap, { opacity: 1, y: 0, duration: .5, delay: .55, ease: 'power3.out' });
            spark(el.getBoundingClientRect(), a.color);
            release();
            await wait(.35);
        },
        async pop(a, el) {
            const kids = el._p.kids;
            await travel(a, () => { const R = kids[0].getBoundingClientRect(); return { x: R.left, y: R.top }; });
            for (const k of kids) {
                const R = () => k.getBoundingClientRect();
                await travel(a, () => ({ x: R().left + R().width * .5, y: R().top + R().height * .6 }), .14);
                gsap.to(k, { opacity: 1, scale: 1, duration: .35, ease: 'back.out(2.4)' });
            }
        },
        async type(a, el) {
            const parts = el._p.parts, n = parts.length, per = el.dataset.b === 'words' ? .06 : .03;
            const at = i => parts[Math.max(0, Math.min(i, n - 1))].getBoundingClientRect();
            await travel(a, () => { const R = at(0); return { x: R.left, y: R.top + R.height * .7 }; }, .45);
            gsap.set(a.caret, { opacity: 1 });
            let k = 0;
            await drive(n * per, 'none', p => {
                const target = Math.ceil(p * n);
                while (k < target) parts[k++].classList.add('on');
                const R = at(k - 1);
                gsap.set(a.caret, { x: R.right + 1, y: R.top, height: R.height });
                place(a, lerp(a.x, R.right + 8, .35), lerp(a.y, R.top + R.height * .7, .35));
            });
            parts.forEach(p => p.classList.add('on'));
            await wait(.2);
            gsap.set(a.caret, { opacity: 0 });
        }
    };
    JOBS.words = JOBS.type;

    const UNJOBS = {
        async frame(a, el) {
            const P = el._p, r = () => el.getBoundingClientRect();
            await travel(a, () => ({ x: r().right, y: r().bottom }), .35);
            el.classList.remove('built');
            gsap.to(P.kids, { opacity: 0, y: 14, duration: .3, stagger: { each: .03, from: 'end' } });
            await drive(.35, 'power2.in', p => place(a, lerp(r().right, r().left, p), lerp(r().bottom, r().top, p)));
            gsap.to(P.lines, { scale: 0, duration: .3, stagger: { each: .04, from: 'end' }, ease: 'power2.in' });
        },
        async img(a, el) {
            const P = el._p, r = () => el.getBoundingClientRect(), [axis, from, to] = SCAN[P.dir || 'l'];
            await travel(a, () => ({ x: r().right, y: r().top + r().height * .5 }), .35);
            if (P.cap) gsap.to(P.cap, { opacity: 0, y: 12, duration: .2 });
            gsap.fromTo(P.scan, { [axis]: to, opacity: 1 }, { [axis]: from, duration: .5, ease: 'power2.in', onComplete: () => gsap.set(P.scan, { opacity: 0 }) });
            gsap.to(el, { clipPath: SHUT[P.dir || 'l'], duration: .5, ease: 'power2.in' });
            await drive(.5, 'power2.in', p => place(a, lerp(r().right, r().left, p), r().top + r().height * .5));
        },
        async pop(a, el) {
            for (const k of [...el._p.kids].reverse()) {
                const R = () => k.getBoundingClientRect();
                await travel(a, () => ({ x: R().left + R().width * .5, y: R().top + R().height * .6 }), .09);
                gsap.to(k, { opacity: 0, scale: .4, duration: .2, ease: 'power2.in' });
            }
        },
        // backspace
        async type(a, el) {
            const parts = el._p.parts, n = parts.length, per = el.dataset.b === 'words' ? .025 : .012;
            const at = i => parts[Math.max(0, Math.min(i, n - 1))].getBoundingClientRect();
            await travel(a, () => { const R = at(n - 1); return { x: R.right + 8, y: R.top + R.height * .7 }; }, .35);
            gsap.set(a.caret, { opacity: 1 });
            let k = n;
            await drive(n * per, 'none', p => {
                const target = n - Math.ceil(p * n);
                while (k > target) parts[--k].classList.remove('on');
                const R = at(k - 1), x = k ? R.right + 1 : at(0).left;
                gsap.set(a.caret, { x, y: R.top, height: R.height });
                place(a, lerp(a.x, x + 8, .35), lerp(a.y, R.top + R.height * .7, .35));
            });
            parts.forEach(p => p.classList.remove('on'));
            gsap.set(a.caret, { opacity: 0 });
        }
    };
    UNJOBS.words = UNJOBS.type;

    const idle = (a, on) => a.cur.classList.toggle('idle', on);

    const pump = async a => {
        if (a.busy) return;
        a.busy = true;
        idle(a, false);
        while (a.q.length) {
            const el = a.q.shift(), want = el._want, type = el.dataset.b;
            el._queued = false;
            if ((el._state || 'empty') === want) continue;
            const R = el.getBoundingClientRect();
            const slide = el.closest('.kn-slide');
            if (R.bottom < -40 || R.top > innerHeight + 40 || R.right < 0 || R.left > innerWidth || (slide && gsap.getProperty(slide, 'opacity') < .3)) {
                want === 'built' ? finish(el) : reset(el);
                continue;
            }
            say(a, want === 'built' ? VERB[type] : 'removing', el.dataset.l || el.tagName.toLowerCase());
            el._active = true;
            await (want === 'built' ? JOBS : UNJOBS)[type](a, el);
            el._active = false;
            el._state = want;
            // the visitor changed direction mid-job: queue the opposite pass
            if (el._want !== want) { el._queued = true; a.q.push(el); }
        }
        a.busy = false;
        idle(a, true);
    };
    const dispatch = (el, build = true) => {
        if (!el) return;
        el._want = build ? 'built' : 'empty';
        if (el._queued || el._active || (el._state || 'empty') === el._want) return;
        el._queued = true;
        const pref = AG.find(a => a.role === ROLE[el.dataset.b]);
        const a = pref.q.length + (pref.busy ? 1 : 0) < 2 ? pref : AG.reduce((m, x) => (x.q.length + x.busy < m.q.length + m.busy ? x : m));
        a.q.push(el);
        pump(a);
    };
    const watch = el => ScrollTrigger.create({ trigger: el, start: 'top 88%', onEnter: () => dispatch(el), onLeaveBack: () => dispatch(el, false) });

    /* ================= opening ================= */
    const nameChars = letters($('#heroName'));
    const endChars = letters($('#theEnd'));
    gsap.set(nameChars, { yPercent: 115 });
    gsap.set(endChars, { yPercent: 115 });
    const opening = gsap.timeline({ paused: true });
    opening
        .to('.grid-bg', { opacity: 1, duration: 1.4 }, .2)
        .to(nameChars, { yPercent: 0, duration: .8, stagger: .06, ease: 'power4.out' }, .3)
        .addLabel('photo', '<1.3')
        .fromTo('.hero-photo .ph', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1.8, ease: 'power2.out', force3D: true }, 'photo')
        .from('.hero-side', { opacity: 0, duration: 1 }, 'photo+=.6')
        .fromTo('.hero-tag', { opacity: 0 }, { opacity: 1, duration: .8, ease: 'power2.out' }, 'photo+=1.1')
        .call(() => {
            dispatch($('.hero-tag'));
            gsap.delayedCall(.5, () => dispatch($('.hero-bottom .desc')));
            gsap.delayedCall(.8, () => dispatch($('.ctas')));
        }, null, 'photo+=1.5')
        .call(unlock, null, 'photo+=1.7');

    $('#heroPhoto')._p = { scan: document.createElement('i'), img: $('#heroPhoto img'), keep: true };
    $('#heroPhoto').append($('#heroPhoto')._p.scan); $('#heroPhoto')._p.scan.className = 'scan';
    const ff = () => { if (opening.isActive()) opening.timeScale(4); };
    ['wheel', 'touchstart', 'keydown'].forEach(ev => addEventListener(ev, ff, { passive: true, once: true }));

    /* ================= scroll cinema ================= */
    const scenes = () => {
        const mid = (nameChars.length - 1) / 2;
        gsap.timeline({ scrollTrigger: { trigger: '#home', start: 'top top', end: '+=110%', pin: true, scrub: 1 } })
            .to('.hero-photo', { opacity: 0, yPercent: -6, ease: 'power1.in' }, 0)
            .to(nameChars, { x: i => (i - mid) * innerWidth * .025, opacity: .0, ease: 'power2.in' }, 0)
            // .to(['.hero-tag', '.hero-bottom'], { opacity: 0, y: -30, duration: .4 }, 0)
            .to('.hero-fade', { opacity: 1, duration: .35 }, .65)
            .to('.hero', { opacity: 0, duration: .35 }, .65 + .35);

        // ghost words parallax
        $$('.ghost').forEach(g => gsap.fromTo(g, { xPercent: 8 }, { xPercent: -16, ease: 'none', scrollTrigger: { trigger: g.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } }));

        // ticker band driven by scroll
        gsap.fromTo('#trk1', { xPercent: 0 }, { xPercent: -33.3, ease: 'none', scrollTrigger: { trigger: '.ticker', start: 'top bottom', end: 'bottom top', scrub: true } });
        gsap.fromTo('#trk2', { xPercent: -33.3 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: '.ticker', start: 'top bottom', end: 'bottom top', scrub: true } });

        const slides = $$('.kn-slide'), n = slides.length;
        gsap.set(slides, { opacity: 0, z: -700, rotationX: 28, yPercent: 14 });
        const kn = gsap.timeline({
            scrollTrigger: {
                trigger: '#knowledge', start: 'top top', end: () => '+=' + innerHeight * n * .85, pin: true, scrub: 1,
                onUpdate: s => { $('#knNow').textContent = '0' + Math.min(n, Math.floor(s.progress * n) + 1); }
            }
        });
        slides.forEach((s, i) => {
            kn.to(s, { opacity: 1, z: 0, rotationX: 0, yPercent: 0, duration: 1, ease: 'power3.out' }, i * 2)
                .to('.kn-bar i', { scaleY: (i + 1) / n, duration: 1, ease: 'none' }, i * 2)
                .call(() => dispatch($('p', s), kn.scrollTrigger.direction > 0), null, i * 2 + .6);
            if (i < n - 1) kn.to(s, { opacity: 0, z: 380, rotationX: -18, yPercent: -12, duration: .5, ease: 'power2.in' }, i * 2 + 1.45);
        });
        kn.to({}, { duration: .6 });

        const mm = gsap.matchMedia();
        mm.add('(min-width: 901px)', () => {
            const track = $('#pjTrack');
            const dist = () => track.scrollWidth - innerWidth;
            const h = gsap.to(track, {
                x: () => -dist(), ease: 'none',
                scrollTrigger: { trigger: '#projects', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true }
            });
            gsap.to('.pj-progress i', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '#projects', start: 'top top', end: () => '+=' + dist(), scrub: true } });
            $$('.pj').forEach(card => ScrollTrigger.create({ trigger: card, containerAnimation: h, start: 'left 88%', onEnter: () => dispatch(card), onLeaveBack: () => dispatch(card, false) }));
        });
        mm.add('(max-width: 900px)', () => { $$('.pj').forEach(card => watch(card)); });

        const qw = split($('#quote'), true);
        qw.forEach(w => w.classList.add('qw'));
        const phil = gsap.timeline({ scrollTrigger: { trigger: '#philosophy', start: 'top top', end: '+=140%', pin: true, scrub: 1 } });
        const down = () => phil.scrollTrigger.direction > 0;
        phil.to(qw, { opacity: 1, stagger: .1, ease: 'none', duration: .3 })
            .call(() => dispatch($('.phil-p'), down()))
            .call(() => dispatch($('#philosophy .chips'), down()), null, '+=.4')
            .to({}, { duration: .8 });

        $$('.life .col').forEach((c, i) => gsap.fromTo(c, { y: [60, -30, 110][i] }, { y: [-60, 40, -110][i], ease: 'none', scrollTrigger: { trigger: '#life-grid', start: 'top bottom', end: 'bottom top', scrub: true } }));

        ScrollTrigger.create({
            trigger: '#theEnd', start: 'top 85%',
            onEnter: () => gsap.to(endChars, { yPercent: 0, duration: .9, stagger: .07, ease: 'power4.out', overwrite: true }),
            onLeaveBack: () => gsap.to(endChars, { yPercent: 115, duration: .5, stagger: .04, ease: 'power2.in', overwrite: true })
        });

        $$('[data-b]:not([data-manual])').forEach(el => watch(el));

        // HUD
        ScrollTrigger.create({
            start: 0, end: 'max',
            onUpdate: s => {
                gsap.set('.progress', { scaleX: s.progress });
                $('#pct').textContent = s.progress > .995 ? 'BUILT ✓' : Math.round(s.progress * 100) + '%';
            }
        });
    };

    /* ================= loader ================= */
    html.classList.add('loading');
    const spawn = gsap.timeline();
    AG.forEach((a, i) => {
        const box = { p: 0 };
        spawn.set(a.mq, { x: a.x - 14, y: a.y - 14, width: 0, height: 0, opacity: 1 }, .3 + i * .45)
            .to(box, {
                p: 1, duration: .35, ease: 'power2.out',
                onUpdate: () => { const s = 44 * box.p; gsap.set(a.mq, { width: s, height: s }); a.lbl.textContent = `${Math.round(s)} × ${Math.round(s)}`; }
            }, '<')
            .to(a.cur, { scale: 1, opacity: 1, duration: .45, ease: 'back.out(2.6)', clearProps: 'opacity' }, '>-.05')
            .to(a.mq, { opacity: 0, duration: .3 }, '<.15');
    });

    // real progress. Calculates based on prefetch
    const eager = $$('img').filter(img => img.loading !== 'lazy');
    let fontsDone = false;
    const fontsReady = Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2500))]).then(() => { fontsDone = true; });
    const pageLoaded = new Promise(r => (document.readyState === 'complete' ? r() : addEventListener('load', r, { once: true })));
    const shown = { v: 0 }, counter = $('#loader .ld-n');
    const tickCounter = () => {
        const real = (eager.filter(img => img.complete).length + (fontsDone ? 1 : 0)) / (eager.length + 1);
        shown.v = Math.max(shown.v, shown.v + (real - shown.v) * .08);
        counter.textContent = String(Math.round(shown.v * 100)).padStart(3, '0');
    };
    gsap.ticker.add(tickCounter);

    Promise.all([fontsReady, pageLoaded, spawn.then()]).then(() => {
        gsap.ticker.remove(tickCounter);
        scenes();
        ScrollTrigger.refresh();
        gsap.timeline()
            .to(shown, { v: 1, duration: .4, ease: 'power1.out', onUpdate: () => { counter.textContent = String(Math.round(shown.v * 100)).padStart(3, '0'); } })
            .to(counter, { opacity: 0, duration: .25 }, '+=.15')
            .to('#loader .l', { xPercent: -101, duration: 1.2, ease: 'expo.inOut', force3D: true })
            .to('#loader .r', { xPercent: 101, duration: 1.2, ease: 'expo.inOut', force3D: true }, '<')
            .call(() => { html.classList.remove('loading'); AG.forEach(a => idle(a, true)); }, null, '-=.3')
            .call(() => { $('#loader').remove(); opening.play(); });
    });
})();
