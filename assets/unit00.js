(function () {
  if (window.__unit00Loaded) return;
  window.__unit00Loaded = true;

  const STYLE_ID = 'unit00-style';
  const AUDIO_CHOICE_KEY = 'unit00-audio-choice-v2';
  const LEGACY_INTRO_KEY = 'unit00-intro-v1';
  const LEGACY_SOUND_KEY = 'unit00-sound-v1';
  const POSITION_KEY = 'unit00-position-v1';
  const IDENTITY_INTRO_KEY = 'unit00-identity-intro-v1';
  const VISIT_START_KEY = 'unit00-visit-start-v1';
  const POOPED_KEY = 'unit00-pooped-v1';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement('link');
    style.id = STYLE_ID;
    style.rel = 'stylesheet';
    style.href = '/assets/unit00.css?v=20260818-4';
    document.head.appendChild(style);
  }

  function readPreference(key) {
    try { return window.localStorage.getItem(key); } catch (error) { return null; }
  }

  function savePreference(key, value) {
    try { window.localStorage.setItem(key, value); } catch (error) { /* Storage is optional. */ }
  }

  function readSession(key) {
    try { return window.sessionStorage.getItem(key); } catch (error) { return null; }
  }

  function saveSession(key, value) {
    try { window.sessionStorage.setItem(key, value); } catch (error) { /* Storage is optional. */ }
  }

  function getAudioChoice() {
    const savedChoice = readPreference(AUDIO_CHOICE_KEY);
    if (savedChoice === 'on' || savedChoice === 'off') return savedChoice;

    if (readPreference(LEGACY_INTRO_KEY) === 'seen') {
      const migratedChoice = readPreference(LEGACY_SOUND_KEY) === 'on' ? 'on' : 'off';
      savePreference(AUDIO_CHOICE_KEY, migratedChoice);
      return migratedChoice;
    }

    return null;
  }

  const path = window.location.pathname.toLowerCase();
  const projectMoods = {
    hypogeum: { label: 'subterranean pressure', base: 43, second: 64, filter: 190, noise: .012 },
    houseatelier: { label: 'domestic tension', base: 98, second: 147, filter: 520, noise: .006 },
    archiveexhibitinhabit: { label: 'archive static', base: 65, second: 130, filter: 430, noise: .011 },
    tetra: { label: 'ritual pulse', base: 82, second: 123, filter: 680, noise: .009 },
    efesto: { label: 'metal, dust and afterlife', base: 46, second: 138, filter: 760, noise: .018 },
    terzotempo: { label: 'concrete in motion', base: 60, second: 90, filter: 360, noise: .013 },
    ermatene: { label: 'air, stone and resonance', base: 110, second: 165, filter: 1200, noise: .005 }
  };

  const projectSlug = Object.keys(projectMoods).find(function (slug) {
    return path.includes('/projects/' + slug + '/');
  });

  const mood = projectMoods[projectSlug] || {
    label: path === '/' || path.endsWith('/index.html') ? 'archive air' : 'low signal',
    base: 72,
    second: 109,
    filter: 480,
    noise: .007
  };

  const system = document.createElement('aside');
  system.id = 'unit00-system';
  system.setAttribute('aria-label', 'UNIT00 site guide');
  system.innerHTML =
    '<div class="unit00-stage is-fanculo">' +
      '<div class="unit00-bubble" role="status" aria-live="polite" hidden>' +
        '<div class="unit00-bubble-head"><span>UNIT00</span><button class="unit00-dismiss" type="button" aria-label="Close UNIT00 message">×</button></div>' +
        '<p class="unit00-message"></p>' +
        '<div class="unit00-actions" hidden><button type="button" data-unit00-answer="yes">YES, SOUND</button><button type="button" data-unit00-answer="no">NO, THANKS</button></div>' +
      '</div>' +
      '<button class="unit00-body" type="button" aria-label="Talk to or drag UNIT00">' +
        '<span class="unit00-cube" aria-hidden="true">' +
          '<span class="unit00-eye"></span><span class="unit00-eye"></span><span class="unit00-mouth"></span>' +
        '</span>' +
      '</button>' +
      '<span class="unit00-name">UNIT00</span>' +
      '<button class="unit00-sound" type="button" aria-label="Toggle ambient sound">SOUND OFF</button>' +
    '</div>';
  document.body.appendChild(system);

  const stage = system.querySelector('.unit00-stage');
  const bodyButton = system.querySelector('.unit00-body');
  const cube = system.querySelector('.unit00-cube');
  const bubble = system.querySelector('.unit00-bubble');
  const message = system.querySelector('.unit00-message');
  const actions = system.querySelector('.unit00-actions');
  const dismiss = system.querySelector('.unit00-dismiss');
  const soundButton = system.querySelector('.unit00-sound');
  let bubbleTimer = 0;
  let behaviorTimer = 0;
  let poopTimer = 0;
  let hasSpokenThisPage = false;
  let lastSpokenText = '';
  let audio = null;
  let audioChoice = getAudioChoice();
  let soundWanted = audioChoice === 'on';
  let activatedThisPage = false;
  let userPositioned = false;
  let dragState = null;
  let suppressClick = false;

  function clamp(value, minimum, maximum) {
    return Math.min(maximum, Math.max(minimum, value));
  }

  function getStageSize() {
    const rect = stage.getBoundingClientRect();
    return {
      width: rect.width || 62,
      height: rect.height || 92
    };
  }

  function applyPosition(x, y, animate) {
    const size = getStageSize();
    const margin = window.innerWidth < 680 ? 12 : 18;
    const maxX = Math.max(margin, window.innerWidth - size.width - margin);
    const maxY = Math.max(margin, window.innerHeight - size.height - margin);
    const nextX = clamp(x, margin, maxX);
    const nextY = clamp(y, margin, maxY);
    const bubbleWidth = Math.min(240, window.innerWidth - margin * 2);
    const preferredBubbleLeft = nextX > window.innerWidth / 2
      ? nextX + size.width - bubbleWidth
      : nextX;
    const bubbleLeft = clamp(preferredBubbleLeft, margin, window.innerWidth - bubbleWidth - margin);

    stage.classList.toggle('is-moving', Boolean(animate && !reducedMotion));
    stage.classList.toggle('is-top', nextY < 150);
    stage.style.setProperty('--unit00-bubble-left', (bubbleLeft - nextX) + 'px');
    stage.style.left = nextX + 'px';
    stage.style.top = nextY + 'px';
    stage.style.bottom = 'auto';

    if (animate && !reducedMotion) {
      window.setTimeout(function () { stage.classList.remove('is-moving'); }, 1250);
    }
  }

  function parseSavedPosition() {
    const value = readPreference(POSITION_KEY);
    if (!value) return null;

    try {
      const parsed = JSON.parse(value);
      if (!Number.isFinite(parsed.x) || !Number.isFinite(parsed.y)) return null;
      return parsed;
    } catch (error) {
      return null;
    }
  }

  function savePosition() {
    const size = getStageSize();
    const rect = stage.getBoundingClientRect();
    const availableX = Math.max(1, window.innerWidth - size.width);
    const availableY = Math.max(1, window.innerHeight - size.height);
    savePreference(POSITION_KEY, JSON.stringify({
      x: clamp(rect.left / availableX, 0, 1),
      y: clamp(rect.top / availableY, 0, 1)
    }));
    userPositioned = true;
  }

  function overlapArea(first, second) {
    const width = Math.max(0, Math.min(first.right, second.right) - Math.max(first.left, second.left));
    const height = Math.max(0, Math.min(first.bottom, second.bottom) - Math.max(first.top, second.top));
    return width * height;
  }

  function getBlockers() {
    const selectors = [
      'a', 'button', 'input', 'textarea', 'select', 'h1', 'h2',
      '.project-description', '.image-index-row', '.archive-header', '.top'
    ];

    return Array.from(document.querySelectorAll(selectors.join(',')))
      .filter(function (element) {
        if (system.contains(element)) return false;
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.visibility !== 'hidden' && style.display !== 'none' && rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < window.innerHeight;
      })
      .map(function (element) {
        const rect = element.getBoundingClientRect();
        return {
          left: rect.left - 10,
          top: rect.top - 10,
          right: rect.right + 10,
          bottom: rect.bottom + 10
        };
      });
  }

  function scorePosition(candidate, includeBubble) {
    const size = getStageSize();
    const margin = window.innerWidth < 680 ? 12 : 18;
    const stageRect = {
      left: candidate.x,
      top: candidate.y,
      right: candidate.x + size.width,
      bottom: candidate.y + size.height
    };
    const rects = [stageRect];

    if (includeBubble) {
      const bubbleWidth = Math.min(240, window.innerWidth - margin * 2);
      const bubbleHeight = 126;
      const bubbleLeft = clamp(
        candidate.x > window.innerWidth / 2 ? candidate.x + size.width - bubbleWidth : candidate.x,
        margin,
        window.innerWidth - bubbleWidth - margin
      );
      const bubbleTop = candidate.y < 150
        ? candidate.y + 62
        : candidate.y - bubbleHeight - 12;
      rects.push({
        left: bubbleLeft,
        top: bubbleTop,
        right: bubbleLeft + bubbleWidth,
        bottom: bubbleTop + bubbleHeight
      });
    }

    return getBlockers().reduce(function (total, blocker) {
      return total + rects.reduce(function (rectTotal, rect) {
        return rectTotal + overlapArea(rect, blocker);
      }, 0);
    }, 0);
  }

  function safeCandidates() {
    const size = getStageSize();
    const margin = window.innerWidth < 680 ? 12 : 18;
    const right = Math.max(margin, window.innerWidth - size.width - margin);
    const bottom = Math.max(margin, window.innerHeight - size.height - margin);
    const middle = clamp(Math.round(window.innerHeight * .52), margin, bottom);

    return [
      { x: margin, y: bottom },
      { x: right, y: bottom },
      { x: margin, y: middle },
      { x: right, y: middle },
      { x: margin, y: 76 },
      { x: right, y: 76 }
    ];
  }

  function placeSafely(animate, includeBubble) {
    if (userPositioned) return;
    const candidates = safeCandidates();
    const scored = candidates.map(function (candidate) {
      return { candidate: candidate, score: scorePosition(candidate, includeBubble) };
    }).sort(function (first, second) { return first.score - second.score; });
    const bestScore = scored[0].score;
    const best = scored.filter(function (item) { return item.score === bestScore; });
    const selected = best[Math.floor(Math.random() * best.length)].candidate;
    applyPosition(selected.x, selected.y, animate);
  }

  function restorePosition() {
    const saved = parseSavedPosition();
    if (!saved) {
      placeSafely(false, true);
      return;
    }

    const size = getStageSize();
    userPositioned = true;
    applyPosition(
      saved.x * Math.max(1, window.innerWidth - size.width),
      saved.y * Math.max(1, window.innerHeight - size.height),
      false
    );
  }

  function speak(text, options) {
    const settings = options || {};
    window.clearTimeout(bubbleTimer);
    message.textContent = text;
    lastSpokenText = text;
    actions.hidden = !settings.choices;
    bubble.classList.toggle('is-choice', Boolean(settings.choices));
    bubble.hidden = false;

    if (!settings.sticky) {
      bubbleTimer = window.setTimeout(function () {
        bubble.hidden = true;
      }, settings.duration || 7200);
    }
  }

  function introduceUnit00() {
    if (readPreference(IDENTITY_INTRO_KEY) === 'seen') return false;
    savePreference(IDENTITY_INTRO_KEY, 'seen');
    hasSpokenThisPage = true;
    speak("I'm UNIT00. I live in this archive, point you toward the good stuff and judge every bad decision you make. Try to keep up.", { duration: 10000 });
    return true;
  }

  function dropPoop() {
    window.clearTimeout(poopTimer);
    poopTimer = 0;
    if (readSession(POOPED_KEY) === 'yes') return;
    if (audioChoice === null) {
      poopTimer = window.setTimeout(dropPoop, 2500);
      return;
    }

    const rect = cube.getBoundingClientRect();
    const dropping = document.createElement('span');
    const roomOnRight = rect.right + 32 < window.innerWidth;
    dropping.className = 'unit00-dropping';
    dropping.setAttribute('aria-hidden', 'true');
    dropping.style.left = (roomOnRight ? rect.right + 5 : rect.left - 23) + 'px';
    dropping.style.top = (rect.bottom - 8) + 'px';
    system.appendChild(dropping);
    saveSession(POOPED_KEY, 'yes');
    window.clearTimeout(behaviorTimer);
    speak('One minute in and you are still here. Fine. I left you a little review.', { duration: 9000 });
    behaviorTimer = window.setTimeout(runBehavior, 9800);
  }

  function schedulePoop() {
    if (readSession(POOPED_KEY) === 'yes') return;
    const now = Date.now();
    let startedAt = Number(readSession(VISIT_START_KEY));
    if (!Number.isFinite(startedAt) || startedAt <= 0 || startedAt > now) {
      startedAt = now;
      saveSession(VISIT_START_KEY, String(startedAt));
    }
    poopTimer = window.setTimeout(dropPoop, Math.max(500, 60000 - (now - startedAt)));
  }

  const projectComments = {
    hypogeum: [
      'Keep scrolling. The darkness is doing half the architecture.',
      'Look at the section again. Yes, again.',
      'Underground, heavy, slightly hostile. Obviously it works.',
      'The section is doing more than most entire buildings.',
      'Do not look for a window. Commit to the cave.',
      'It is not gloomy. It is controlled pressure. Learn the difference.'
    ],
    houseatelier: [
      'A house and a workspace without the usual domestic nonsense.',
      'Look at the light. It did not land there by accident.',
      'Keep going. The quiet bits are the expensive bits.',
      'Domestic, but not domesticated. That is the useful part.',
      'Notice what is missing. Clutter, mostly.',
      'The light is carrying the room. Let it.'
    ],
    archiveexhibitinhabit: [
      'Archive, exhibit, inhabit. Three verbs. Try to keep up.',
      'This one is smarter than it first looks. Scroll back.',
      'Yes, the system is the project. That is why it is good.',
      'The archive is not sleeping. It is waiting for you to catch up.',
      'Look at how the pieces negotiate space. Better than most people.',
      'This is what happens when research actually becomes architecture.'
    ],
    tetra: [
      'Four sides, no wasted gestures. You are welcome.',
      'The geometry looks inevitable because someone did the work.',
      'Stay with it. The repetition is the point, not a loading error.',
      'Simple geometry. Annoyingly difficult to do this well.',
      'Every line has a job. Unlike some visitors.',
      'Order can be dramatic too. Here is the evidence.'
    ],
    efesto: [
      'Metal, dust and fire. Finally, something with a pulse.',
      'The ruin is not a defect. Look closer.',
      'Keep scrolling. This one gets better when it gets dirtier.',
      'This is not ruin porn. There is an actual idea underneath it.',
      'The material already had a life. The project was smart enough to listen.',
      'If you only see decay, go back and use your eyes properly.'
    ],
    terzotempo: [
      'Concrete in motion. Yes, it can do that.',
      'Do not skim the sequence. The sequence is why it works.',
      'This is the part where structure stops being boring.',
      'The sequence has rhythm. Scroll like you have one.',
      'Mass, pause, movement. It is all there.',
      'Concrete does not need to sit still just because you do.'
    ],
    ermatene: [
      'Air, stone and resonance. No decorative bullshit required.',
      'Look at the gaps, not only the objects.',
      'It is restrained. That does not mean timid.',
      'The empty space is not empty. Please try harder.',
      'This one whispers because shouting would ruin it.',
      'Nothing is accidental here, including the silence.'
    ]
  };

  function contextComments() {
    if (projectSlug) return projectComments[projectSlug];
    if (path.includes('/works/')) return [
      'Pick a project. They are not going to open themselves.',
      'Start with EFESTO if you need drama. TETRA if you need order.',
      'Open one properly. Thumbnails are for cowards.',
      'HYPogeum goes down. TERZO TEMPO moves. Choose a verb.',
      'You cannot judge architecture from the index. Click.',
      'There are seven projects here and somehow you are still hovering.'
    ];
    if (path.includes('/proworks/')) return [
      'Here: proof he can do the serious work too.',
      'Read the list. Competence is less photogenic, still useful.',
      'Yes, he can draw the boring things properly. Relax.',
      'Surveys, drawings, feasibility. The unsexy machinery behind the pretty image.',
      'This page pays the bills. Show some respect.',
      'Professional does not mean personality-free. Keep reading.'
    ];
    if (path.includes('/extra/') || path.includes('/extras/')) return [
      'This is the obsessive part. Naturally, it is worth reading.',
      'You came this far. Now read instead of pretending to browse.',
      'The side material is not filler. Pay attention.',
      'The footnotes have teeth. Do not skip them.',
      'Research first, architecture later. Revolutionary, apparently.',
      'You wanted depth. Here it is. Now deal with it.'
    ];
    if (path.includes('/who/')) return [
      'That is Federico. Mystery solved. Go back to the work.',
      'Enough biography. The projects explain him better.',
      'You wanted a face. There. Happy now?',
      'Architect, human, occasionally available. Continue.',
      'Do not overanalyse the portrait. He builds things.',
      'Biography consumed. Return to WORKS immediately.'
    ];
    if (path.includes('/contacts/')) return [
      'You found the contact page. Use it if you are serious.',
      'The email is right there. I cannot send it for you.',
      'Have a project? Write. Have an opinion? Keep it concise.',
      'Good architecture starts with an email. Unfortunately.',
      'Stop rehearsing the message and send it.',
      'Budget, site, ambition. Bring at least two.'
    ];
    return [
      'Start with WORKS. Obviously.',
      'PRO WORKS if you need proof he can behave professionally.',
      'WHO if you are nosy. CONTACTS if you have a budget.',
      'Pick a section. This is a website, not a waiting room.',
      'The archive is over there. I drew no arrow because you have eyes.',
      'Start anywhere. I will judge the choice either way.',
      'WORKS first, biography later. This is not a dating profile.'
    ];
  }

  function situationalComments() {
    const pageHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = Math.max(0, Math.min(1, window.scrollY / pageHeight));
    const startedAt = Number(readSession(VISIT_START_KEY));
    const secondsHere = Number.isFinite(startedAt) ? (Date.now() - startedAt) / 1000 : 0;
    const lines = [];

    if (progress < .08) {
      lines.push('You are still at the top. The rest of the page has filed a complaint.');
      lines.push('Scroll down. I promise the scrollbar is not decorative.');
    } else if (progress < .45) {
      lines.push('Good. You have started. Do not celebrate yet.');
      lines.push('Halfway would be an achievement. This is not halfway.');
    } else if (progress < .82) {
      lines.push('Now you are actually inside the project. Took you long enough.');
      lines.push('This is where people usually start pretending they understood everything.');
    } else {
      lines.push('You made it this far. Finish properly.');
      lines.push('Almost at the bottom. Miracles remain possible.');
    }

    if (secondsHere > 150) {
      lines.push('You have been here for a while. Good. Fast browsing is usually bad browsing.');
      lines.push('Still here after two minutes. Either you like it or you are lost. Both are useful.');
    }

    return lines;
  }

  function pickLine(lines) {
    const alternatives = lines.filter(function (line) { return line !== lastSpokenText; });
    const pool = alternatives.length ? alternatives : lines;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function currentHint() {
    return pickLine(contextComments());
  }

  const comments = [
    'Scroll. The good part is not coming to you.',
    'Click something. I am not doing everything around here.',
    'Yes, it looks good. That is why you are still here.',
    'Look closer. The details are doing more work than you are.',
    'Do not rush it. You clearly missed something.',
    'Keep going. I did not wake up for one image.',
    'You can leave, but the next website will be worse.',
    'Fine, stare at me instead of the architecture.',
    'That image is excellent. Your scrolling technique is not.',
    'Pause. Look. Architecture is not a TikTok transition.',
    'You missed something three images ago. I noticed.',
    'This is the good part. Conveniently, all of it is the good part.',
    'I could explain the composition, but looking is free.',
    'The project is making an argument. Try not to interrupt.',
    'Still here? Good. Your taste may be improving.',
    'Zoom mentally. The website is not doing that for you.',
    'A little attention would make this easier for both of us.',
    'Yes, Federico made this. No, I am not surprised.',
    'You are browsing very slowly. I respect it and hate it.',
    'Do not just collect references. Understand one for once.',
    'There is a reason that line is there. Find it.',
    'I have seen your cursor. Commit to a decision.',
    'Good work deserves time. Unfortunately, it got you.',
    'The architecture is confident enough for both of you.',
    'I am not saying this project is good. I am saying your alternatives are worse.',
    'Keep looking. Your first impression was underqualified.',
    'The composition is balanced. You, less so.',
    'Every image earned its place. Have you?',
    'You could skim this. You could also be wrong faster.',
    'I am guiding you beautifully. A little gratitude would be grotesque but welcome.',
    'Federico did the architecture. I handle quality control on visitors.',
    'No pop-up newsletter. Just me. Somehow you got the better deal.'
  ];

  function runBehavior() {
    window.clearTimeout(behaviorTimer);
    behaviorTimer = 0;
    if (document.hidden || audioChoice === null) return;

    stage.classList.add('is-fanculo');
    stage.classList.toggle('is-sleeping', Math.random() > .55);

    if (!userPositioned && Math.random() > .72) placeSafely(true, true);
    const lines = comments.concat(contextComments(), situationalComments());
    const nextLine = hasSpokenThisPage
      ? pickLine(lines)
      : currentHint();
    speak(nextLine, { duration: 7800 });
    hasSpokenThisPage = true;

    behaviorTimer = window.setTimeout(runBehavior, 12500 + Math.random() * 4500);
  }

  function createAudio() {
    if (audio) return audio;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;

    const context = new AudioContext();
    const master = context.createGain();
    const filter = context.createBiquadFilter();
    master.gain.value = .13;
    filter.type = 'lowpass';
    filter.frequency.value = mood.filter;
    filter.Q.value = 1.4;
    filter.connect(master);
    master.connect(context.destination);

    [mood.base, mood.second].forEach(function (frequency, index) {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = index === 0 ? 'sine' : 'triangle';
      oscillator.frequency.value = frequency;
      oscillator.detune.value = index === 0 ? -5 : 7;
      gain.gain.value = index === 0 ? .032 : .016;
      oscillator.connect(gain);
      gain.connect(filter);
      oscillator.start();
    });

    const noiseLength = context.sampleRate * 2;
    const noiseBuffer = context.createBuffer(1, noiseLength, context.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseLength; i += 1) noiseData[i] = Math.random() * 2 - 1;
    const noise = context.createBufferSource();
    const noiseGain = context.createGain();
    noise.buffer = noiseBuffer;
    noise.loop = true;
    noiseGain.gain.value = mood.noise;
    noise.connect(noiseGain);
    noiseGain.connect(filter);
    noise.start();

    const lfo = context.createOscillator();
    const lfoGain = context.createGain();
    lfo.frequency.value = .055;
    lfoGain.gain.value = .035;
    lfo.connect(lfoGain);
    lfoGain.connect(master.gain);
    lfo.start();

    audio = { context: context };
    return audio;
  }

  function updateSoundLabel() {
    soundButton.textContent = soundWanted ? 'SOUND ON' : 'SOUND OFF';
    soundButton.setAttribute('aria-pressed', soundWanted ? 'true' : 'false');
  }

  function enableSound(announce) {
    audioChoice = 'on';
    soundWanted = true;
    activatedThisPage = true;
    savePreference(AUDIO_CHOICE_KEY, 'on');
    savePreference(LEGACY_SOUND_KEY, 'on');
    const soundscape = createAudio();
    if (soundscape) soundscape.context.resume();
    updateSoundLabel();
    if (announce) speak("Sound's on. Don't make a thing of it.", { duration: 5600 });
  }

  function disableSound(announce) {
    audioChoice = 'off';
    soundWanted = false;
    savePreference(AUDIO_CHOICE_KEY, 'off');
    savePreference(LEGACY_SOUND_KEY, 'off');
    if (audio) audio.context.suspend();
    updateSoundLabel();
    if (announce) speak('Quiet, then. Fine by me.', { duration: 5200 });
  }

  function toggleSound() {
    if (soundWanted) disableSound(true);
    else enableSound(true);
  }

  soundButton.addEventListener('click', toggleSound);

  actions.addEventListener('click', function (event) {
    const answer = event.target.closest('[data-unit00-answer]');
    if (!answer) return;
    actions.hidden = true;
    bubble.classList.remove('is-choice');
    savePreference(LEGACY_INTRO_KEY, 'seen');

    if (answer.getAttribute('data-unit00-answer') === 'yes') enableSound(false);
    else disableSound(false);

    const introduced = introduceUnit00();
    behaviorTimer = window.setTimeout(runBehavior, introduced ? 11200 : 2600 + Math.random() * 1000);
  });

  dismiss.addEventListener('click', function () {
    bubble.hidden = true;
  });

  bodyButton.addEventListener('click', function () {
    if (suppressClick) {
      suppressClick = false;
      return;
    }
    stage.classList.remove('is-sleeping');
    speak(pickLine(comments.concat(contextComments(), situationalComments())));
  });

  bodyButton.addEventListener('pointerdown', function (event) {
    if (event.button !== 0) return;
    const rect = stage.getBoundingClientRect();
    dragState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: rect.left,
      originY: rect.top,
      moved: false
    };
    bodyButton.setPointerCapture(event.pointerId);
    stage.classList.add('is-dragging');
  });

  bodyButton.addEventListener('pointermove', function (event) {
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - dragState.startX;
    const deltaY = event.clientY - dragState.startY;
    if (Math.abs(deltaX) + Math.abs(deltaY) > 5) dragState.moved = true;
    if (!dragState.moved) return;
    event.preventDefault();
    bubble.hidden = true;
    applyPosition(dragState.originX + deltaX, dragState.originY + deltaY, false);
  });

  function finishDrag(event) {
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    const wasMoved = dragState.moved;
    dragState = null;
    stage.classList.remove('is-dragging');
    if (bodyButton.hasPointerCapture(event.pointerId)) bodyButton.releasePointerCapture(event.pointerId);

    if (wasMoved) {
      suppressClick = true;
      savePosition();
      speak("Fine. I'll stay here. Your interior design remains questionable.", { duration: 5200 });
    }
  }

  bodyButton.addEventListener('pointerup', finishDrag);
  bodyButton.addEventListener('pointercancel', finishDrag);

  window.addEventListener('pointermove', function (event) {
    if (dragState) return;
    const rect = cube.getBoundingClientRect();
    const x = Math.max(-2, Math.min(2, (event.clientX - (rect.left + rect.width / 2)) / 80));
    const y = Math.max(-2, Math.min(2, (event.clientY - (rect.top + rect.height / 2)) / 80));
    cube.style.setProperty('--eye-x', x + 'px');
    cube.style.setProperty('--eye-y', y + 'px');
  }, { passive: true });

  function resumePreferredSound() {
    if (soundWanted && !activatedThisPage) enableSound(false);
  }

  document.addEventListener('pointerdown', resumePreferredSound, { passive: true });
  document.addEventListener('keydown', resumePreferredSound);

  document.addEventListener('visibilitychange', function () {
    if (audio) {
      if (document.hidden) audio.context.suspend();
      else if (soundWanted && activatedThisPage) audio.context.resume();
    }
    if (!document.hidden && !behaviorTimer && audioChoice !== null) runBehavior();
  });

  window.addEventListener('resize', function () {
    const saved = parseSavedPosition();
    if (saved) {
      const size = getStageSize();
      applyPosition(
        saved.x * Math.max(1, window.innerWidth - size.width),
        saved.y * Math.max(1, window.innerHeight - size.height),
        false
      );
      return;
    }
    placeSafely(false, !bubble.hidden);
  });

  updateSoundLabel();
  window.requestAnimationFrame(restorePosition);
  schedulePoop();

  window.setTimeout(function () {
    if (audioChoice === null) {
      placeSafely(false, true);
      speak('Want sound with this, or should I leave it quiet?', { choices: true, sticky: true });
      return;
    }

    const introduced = introduceUnit00();
    behaviorTimer = window.setTimeout(runBehavior, introduced ? 11200 : 2600 + Math.random() * 1000);
  }, 700);
})();
