// quadra-glyphs.js
// Versione "semplice": no export / no module. Espone window.QUADRA
// Sistema definitivo: solo OGGETTO mantiene il quadrato di contorno.
// Negazione: overlay di 4 puntini interni (assenza-interna).

(function () {
  "use strict";

  // ----------------- BASE SVG -----------------
  function baseSVG(content, size = 64) {
    return `
      <svg viewBox="0 0 100 100" width="${size}" height="${size}" aria-hidden="true">
        ${content}
      </svg>
    `;
  }

  // OGGETTO: unico con frame
  function drawFrame() {
    return baseSVG(`
      <rect x="10" y="10" width="80" height="80"
        fill="none" stroke="black" stroke-width="4"/>
    `);
  }

  // --- CORE FORMS (no frame) ---
  function drawCore() {
    return baseSVG(`<circle cx="50" cy="50" r="12" fill="black"/>`);
  }
  function drawBaseLine() {
    return baseSVG(`<line x1="20" y1="80" x2="80" y2="80" stroke="black" stroke-width="4"/>`);
  }
  function drawInnerSquare() {
    return baseSVG(`<rect x="35" y="35" width="30" height="30" fill="none" stroke="black" stroke-width="4"/>`);
  }

  // --- AGENCY ---
  function drawTopDot() {
    return baseSVG(`<circle cx="50" cy="25" r="6" fill="black"/>`);
  }
  function drawBottomDot() {
    return baseSVG(`<circle cx="50" cy="75" r="6" fill="black"/>`);
  }

  // --- STATE ---
  function drawCenterDot() {
    return baseSVG(`<circle cx="50" cy="50" r="6" fill="black"/>`);
  }
  function drawHorizontalBar() {
    return baseSVG(`<rect x="25" y="45" width="50" height="10" fill="black"/>`);
  }
  function drawOpenTop() {
    return baseSVG(`<line x1="20" y1="20" x2="80" y2="20" stroke="black" stroke-width="4"/>`);
  }
  function drawClosedBar() {
    return baseSVG(`<rect x="20" y="15" width="60" height="15" fill="black"/>`);
  }
  function drawSolidCore() {
    return baseSVG(`<circle cx="50" cy="50" r="18" fill="black"/>`);
  }
  function drawHollowCore() {
    return baseSVG(`<circle cx="50" cy="50" r="18" fill="none" stroke="black" stroke-width="4"/>`);
  }
  function drawDiagonal() {
    return baseSVG(`<line x1="25" y1="75" x2="75" y2="25" stroke="black" stroke-width="4"/>`);
  }

  // --- SPACE ---
  function drawInnerPoint() {
    return baseSVG(`<circle cx="50" cy="50" r="4" fill="black"/>`);
  }
  function drawOuterPoint() {
    return baseSVG(`<circle cx="90" cy="50" r="4" fill="black"/>`);
  }
  function drawLeftPoint() {
    return baseSVG(`<circle cx="20" cy="50" r="4" fill="black"/>`);
  }
  function drawRightPoint() {
    return baseSVG(`<circle cx="80" cy="50" r="4" fill="black"/>`);
  }

  // --- TIME ---
  function drawCornerCuts() {
    return baseSVG(`
      <rect x="10" y="10" width="15" height="15" fill="black"/>
      <rect x="75" y="10" width="15" height="15" fill="black"/>
      <rect x="10" y="75" width="15" height="15" fill="black"/>
      <rect x="75" y="75" width="15" height="15" fill="black"/>
    `);
  }
  function drawCrossPoints() {
    return baseSVG(`
      <circle cx="30" cy="30" r="4" fill="black"/>
      <circle cx="70" cy="30" r="4" fill="black"/>
      <circle cx="30" cy="70" r="4" fill="black"/>
      <circle cx="70" cy="70" r="4" fill="black"/>
    `);
  }
  function drawTopStroke() {
    return baseSVG(`<line x1="20" y1="20" x2="80" y2="20" stroke="black" stroke-width="6"/>`);
  }
  function drawBottomStroke() {
    return baseSVG(`<line x1="20" y1="80" x2="80" y2="80" stroke="black" stroke-width="6"/>`);
  }

  // --- LOGIC ---
  function drawVerticalBar() {
    return baseSVG(`<rect x="45" y="20" width="10" height="60" fill="black"/>`);
  }
  function drawArrowRight() {
    return baseSVG(`
      <line x1="20" y1="50" x2="70" y2="50" stroke="black" stroke-width="4"/>
      <polygon points="70,40 85,50 70,60" fill="black"/>
    `);
  }
  function drawArrowUp() {
    return baseSVG(`
      <line x1="50" y1="70" x2="50" y2="30" stroke="black" stroke-width="4"/>
      <polygon points="40,30 50,15 60,30" fill="black"/>
    `);
  }
  function drawDoubleCore() {
    return baseSVG(`
      <circle cx="40" cy="50" r="8" fill="black"/>
      <circle cx="60" cy="50" r="8" fill="black"/>
    `);
  }
  function drawDashedCore() {
    return baseSVG(`
      <circle cx="50" cy="50" r="18"
        fill="none" stroke="black" stroke-width="4"
        stroke-dasharray="6 4"/>
    `);
  }
  function drawHeavyBottom() {
    return baseSVG(`<rect x="20" y="70" width="60" height="12" fill="black"/>`);
  }

  // --- NEGATION overlay (assenza interna) ---
  function negOverlaySVG() {
    return `
      <circle cx="42" cy="42" r="3.5" fill="black"/>
      <circle cx="58" cy="42" r="3.5" fill="black"/>
      <circle cx="42" cy="58" r="3.5" fill="black"/>
      <circle cx="58" cy="58" r="3.5" fill="black"/>
    `;
  }

  // ----------------- GLYPH MAP -----------------
  const GLYPHS = {
    // ENTITÀ
    OGGETTO: drawFrame,
    PERSONA: drawCore,
    LUOGO: drawBaseLine,
    CONTENITORE: drawInnerSquare,

    // AGENZIA
    ATTIVO: drawTopDot,
    PASSIVO: drawBottomDot,

    // STATI
    FERMO: drawCenterDot,
    MOVIMENTO: drawHorizontalBar,
    APERTO: drawOpenTop,
    CHIUSO: drawClosedBar,
    PIENO: drawSolidCore,
    VUOTO: drawHollowCore,
    TRASFORMAZIONE: drawDiagonal,

    // SPAZIO
    DENTRO: drawInnerPoint,
    FUORI: drawOuterPoint,
    VICINO: drawLeftPoint,
    LONTANO: drawRightPoint,

    // TEMPO
    PRESENTE: drawCornerCuts,
    ASSENTE: drawCrossPoints,
    INIZIO: drawTopStroke,
    FINE: drawBottomStroke,

    // RELAZIONE / LOGICA
    RELAZIONE: drawVerticalBar,
    CAUSA: drawArrowRight,
    SCOPO: drawArrowUp,
    POSSESSO: drawDoubleCore,
    POSSIBILE: drawDashedCore,
    DOVERE: drawHeavyBottom
  };

  const TOKENS = Object.keys(GLYPHS);

  // ----------------- PARSER -----------------
  // Quadra string: WORD / WORD ; tokens inside word: A+B+!C
  function parseQuadraString(s) {
    const str = String(s || "").trim();
    if (!str) return [];
    const words = str.split("/").map(w => w.trim()).filter(Boolean);
    return words.map(word => {
      const raw = word.split("+").map(t => t.trim()).filter(Boolean);
      const tokens = [];
      const opts = [];
      raw.forEach(rt => {
        let negate = false;
        let t = rt.toUpperCase();
        if (t.startsWith("!")) { negate = true; t = t.slice(1); }
        tokens.push(t);
        opts.push({ negate });
      });
      return { tokens, opts };
    });
  }

  // ----------------- RENDER -----------------
  function svgGlyph(token, options = {}) {
    const t = String(token || "").toUpperCase();
    const fn = GLYPHS[t];
    if (!fn) return baseSVG(`<text x="10" y="55" font-size="14" font-family="monospace">?</text>`, 64);

    // render base glyph at 100x100 coordinates then (optional) overlay negation
    const base = fn();
    if (!options || options.negate !== true) return base;

    // inject overlay by re-wrapping into single SVG to avoid string surgery headaches
    // We re-render base content by extracting inside <svg>...</svg>.
    const inner = base.replace(/^.*?<svg[^>]*>/s, "").replace(/<\/svg>\s*$/s, "");
    return baseSVG(inner + negOverlaySVG(), 64);
  }

  function renderWords(wordsParsed, targetEl) {
    const el = targetEl;
    el.innerHTML = "";
    wordsParsed.forEach((w, idx) => {
      const wrap = document.createElement("div");
      wrap.className = "word";
      w.tokens.forEach((tok, i) => {
        const cell = document.createElement("div");
        cell.innerHTML = svgGlyph(tok, { negate: w.opts[i]?.negate === true });
        wrap.appendChild(cell);
      });
      el.appendChild(wrap);
      if (idx !== wordsParsed.length - 1) {
        const sep = document.createElement("span");
        sep.className = "pill";
        sep.textContent = "⟂";
        el.appendChild(sep);
      }
    });
  }

  // ----------------- EXPOSE GLOBAL -----------------
  window.QUADRA = {
    TOKENS,
    GLYPHS,
    parseQuadraString,
    svgGlyph,
    renderWords
  };
})();