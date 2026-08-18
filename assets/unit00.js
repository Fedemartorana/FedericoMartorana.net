(function () {
  if (window.__unit00Loaded) return;
  window.__unit00Loaded = true;

  const STYLE_ID = 'unit00-style';
  const INTRO_KEY = 'unit00-intro-v1';
  const SOUND_KEY = 'unit00-sound-v1';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;

  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement('link');
    style.id = STYLE_ID;
    style.rel = 'stylesheet';
    style.href = '/assets/unit00.css?v=20260818-1';
    document.head.appendChild(style);
  }

  function readPreference(key) {
    try { return window.localStorage.getItem(key); } catch (error) { return null; }
  }

  function savePreference(key, value) {
    try { window.localStorage.setItem(key, value); } catch (error) { /* Storage is optional. */ }
  }

  const path = window.location.pathname.toLowerCase();
  const projectMoods = {
    hypogeum: { label: 'SUBTERRANEAN PRESSURE', base: 43, second: 64, filter: 190, noise: .012 },
    houseatelier: { label: 'DOMESTIC TENSION', base: 98, second: 147, filter: 520, noise: .006 },
    archiveexhibitinhabit: { label: 'ARCHIVE STATIC', base: 65, second: 130, filter: 430, noise: .011 },
    tetra: { label: 'RITUAL PULSE', base: 82, second: 123, filter: 680, noise: .009 },
    efesto: { label: 'METAL / DUST / AFTERLIFE', base: 46, second: 138, filter: 760, noise: .018 },
    terzotempo: { label: 'CONCRETE IN MOTION', base: 60, second: 90, filter: 360, noise: .013 },
    ermatene: { label: 'AIR / STONE / RESONANCE', base: 110, second: 165, filter: 1200, noise: .005 }
  };

  const projectSlug = Object.keys(projectMoods).find(function (slug) {
    return path.includes('/projects/' + slug + '/');
  });

  const mood = projectMoods[projectSlug] || {
    label: path === '/' || path.endsWith('/index.html') ? 'ARCHIVE AIR' : 'LOW SIGNAL',
    base: 72,
    second: 109,
    filter: 480,
    noise: .007
  };

  const system = document.createElement('aside');
  system.id = 'unit00-system';
  system.setAttribute('aria-label', 'UNIT00 site custodian');
  system.innerHTML =
    '<div class="unit00-stage">' +
      '<div class="unit00-bubble" role="status" aria-live="polite" hidden>' +
        '<div class="unit00-bubble-head"><span>UNIT00 / CUSTODIAN</span><button class="unit00-dismiss" type="button" aria-label="Close UNIT00 message">×</button></div>' +
        '<p class="unit00-message"></p>' +
        '<div class="unit00-actions" hidden><button type="button" data-unit00-answer="yes">ENABLE</button><button type="button" data-unit00-answer="no">NO SOUND</button></div>' +
      '</div>' +
      '<button class="unit00-body" type="button" aria-label="Talk to UNIT00">' +
        '<span class="unit00-cube" aria-hidden="true"><span class="unit00-eye"></span><span class="unit00-eye"></span></span>' +
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
  let audio = null;
  let soundWanted = readPreference(SOUND_KEY) === 'on';
  let activatedThisPage = false;

  function setMode(mode) {
    stage.classList.remove('is-gas', 'is-fanculo', 'is-sleeping');
    if (mode) stage.classList.add('is-' + mode);
  }

  function speak(text, options) {
    const settings = options || {};
    window.clearTimeout(bubbleTimer);
    message.textContent = text;
    actions.hidden = !settings.choices;
    bubble.hidden = false;

    if (!settings.sticky) {
      bubbleTimer = window.setTimeout(function () {
        bubble.hidden = true;
      }, settings.duration || 4200);
    }
  }

  function moveTo(x, fast) {
    if (reducedMotion || coarsePointer) return;
    const max = Math.max(18, window.innerWidth - 80);
    const destination = Math.min(max, Math.max(18, x));
    stage.style.setProperty('--unit00-step', fast ? '.72s' : '1.8s');
    stage.classList.toggle('is-right', destination > window.innerWidth * .58);
    stage.classList.add('is-moving');
    stage.style.left = destination + 'px';
    window.setTimeout(function () { stage.classList.remove('is-moving'); }, fast ? 760 : 1840);
  }

  function randomPosition() {
    return 18 + Math.random() * Math.max(0, window.innerWidth - 110);
  }

  function currentHint() {
    if (projectSlug) return projectSlug.toUpperCase() + '. ' + mood.label + '.';
    if (path.includes('/works/')) return 'PICK ONE. DO NOT OVERTHINK IT.';
    if (path.includes('/proworks/')) return 'THE WORK BEHIND THE WORK.';
    if (path.includes('/extra/') || path.includes('/extras/')) return 'WORDS. UNFORTUNATELY NECESSARY.';
    if (path.includes('/who/') || path.includes('/contacts/')) return 'YOU WANTED THE PERSON. THERE HE IS.';
    return 'THE ARCHIVE IS OPEN. PICK A DOOR.';
  }

  const gasLines = [
    'MOVE. THERE IS MORE BELOW.',
    'GOOD. KEEP GOING.',
    'I KNOW WHERE THIS GOES.',
    'THE ARCHIVE IS ALIVE TODAY.',
    currentHint()
  ];

  const fanculoLines = [
    'FIGURE IT OUT.',
    'I AM ON BREAK.',
    'NOT EVERYTHING NEEDS A GUIDE.',
    'YOU HAVE EYES. USE THEM.',
    'NO.'
  ];

  function runBehavior() {
    window.clearTimeout(behaviorTimer);
    if (document.hidden) return;

    const gas = Math.random() > .42;
    setMode(gas ? 'gas' : 'fanculo');

    if (gas) {
      moveTo(randomPosition(), Math.random() > .5);
      if (Math.random() > .35) speak(gasLines[Math.floor(Math.random() * gasLines.length)]);
    } else {
      if (!coarsePointer && !reducedMotion && Math.random() > .5) {
        moveTo(Math.random() > .5 ? 18 : window.innerWidth - 80, false);
      }
      speak(fanculoLines[Math.floor(Math.random() * fanculoLines.length)], { duration: 3000 });
      window.setTimeout(function () { setMode('sleeping'); }, 3200);
    }

    behaviorTimer = window.setTimeout(runBehavior, 9000 + Math.random() * 9000);
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

    audio = { context: context, master: master };
    return audio;
  }

  function updateSoundLabel() {
    soundButton.textContent = soundWanted ? 'SOUND ON' : 'SOUND OFF';
    soundButton.setAttribute('aria-pressed', soundWanted ? 'true' : 'false');
  }

  function enableSound(announce) {
    soundWanted = true;
    activatedThisPage = true;
    savePreference(SOUND_KEY, 'on');
    const soundscape = createAudio();
    if (soundscape) soundscape.context.resume();
    updateSoundLabel();
    if (announce) speak('AUDIO ON / ' + mood.label + '.', { duration: 3600 });
  }

  function disableSound(announce) {
    soundWanted = false;
    savePreference(SOUND_KEY, 'off');
    if (audio) audio.context.suspend();
    updateSoundLabel();
    if (announce) speak('FINE. WALK IN SILENCE.', { duration: 3000 });
  }

  function toggleSound() {
    if (soundWanted && activatedThisPage) disableSound(true);
    else enableSound(true);
  }

  soundButton.addEventListener('click', toggleSound);

  actions.addEventListener('click', function (event) {
    const answer = event.target.closest('[data-unit00-answer]');
    if (!answer) return;
    savePreference(INTRO_KEY, 'seen');
    actions.hidden = true;
    if (answer.getAttribute('data-unit00-answer') === 'yes') enableSound(true);
    else disableSound(true);
    window.setTimeout(runBehavior, 6500);
  });

  dismiss.addEventListener('click', function () {
    bubble.hidden = true;
    savePreference(INTRO_KEY, 'seen');
    window.setTimeout(runBehavior, 5000);
  });

  bodyButton.addEventListener('click', function () {
    setMode(Math.random() > .35 ? 'gas' : 'fanculo');
    speak(Math.random() > .28 ? currentHint() : fanculoLines[Math.floor(Math.random() * fanculoLines.length)]);
    if (!coarsePointer && !reducedMotion && Math.random() > .45) moveTo(randomPosition(), true);
  });

  if (!coarsePointer) {
    window.addEventListener('pointermove', function (event) {
      const rect = cube.getBoundingClientRect();
      const x = Math.max(-2, Math.min(2, (event.clientX - (rect.left + rect.width / 2)) / 80));
      const y = Math.max(-2, Math.min(2, (event.clientY - (rect.top + rect.height / 2)) / 80));
      cube.style.setProperty('--eye-x', x + 'px');
      cube.style.setProperty('--eye-y', y + 'px');
    }, { passive: true });
  }

  document.addEventListener('pointerdown', function resumePreferredSound() {
    if (soundWanted && !activatedThisPage) enableSound(false);
  }, { passive: true });

  document.addEventListener('visibilitychange', function () {
    if (!audio) return;
    if (document.hidden) audio.context.suspend();
    else if (soundWanted && activatedThisPage) audio.context.resume();
    if (!document.hidden && !behaviorTimer) runBehavior();
  });

  window.addEventListener('resize', function () {
    if (coarsePointer || reducedMotion) return;
    const current = parseFloat(stage.style.left || '18');
    moveTo(Math.min(current, window.innerWidth - 80), false);
  });

  updateSoundLabel();

  window.setTimeout(function () {
    if (readPreference(INTRO_KEY) !== 'seen') {
      setMode('gas');
      speak('I KEEP THIS PLACE. IT SOUNDS BETTER WITH ME. ENABLE AUDIO?', { choices: true, sticky: true });
      return;
    }

    if (soundWanted) {
      speak('SOUND ARMED. TOUCH ANYWHERE TO WAKE IT.', { duration: 4200 });
    } else {
      speak(currentHint(), { duration: 3600 });
    }
    behaviorTimer = window.setTimeout(runBehavior, 7000);
  }, 900);
})();
