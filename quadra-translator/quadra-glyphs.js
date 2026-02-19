// quadra-glyphs.js (Versione A — “quadrato”)
// 16 token definitivi.
// OGGETTO mantiene frame nero forte.
// Tutti i glifi hanno anche un QUADRATO LEGGERO esterno (guide frame).
// Negazione: overlay di “assenza interna” (4 micro-quadrati).

(function () {
  "use strict";

  const SIZE = 64;
  const PAD = 7;
  const LINE = 2.5;

  const STROKE = "#000";
  const FILL = "#000";

  // frame leggero (visivo/guida)
  const LIGHT_STROKE = "#c9d6dc";
  const LIGHT_W = 1.35;

  function svgWrap(inner, aria) {
    // quadrato leggero sempre presente (sotto ai segni)
    const light = `<rect x="6.5" y="6.5" width="51" height="51" fill="none" stroke="${LIGHT_STROKE}" stroke-width="${LIGHT_W}"/>`;
    return `
      <svg width="${SIZE}" height="${SIZE}" viewBox="0 0 64 64" role="img" aria-label="${aria}">
        ${light}
        ${inner}
      </svg>
    `;
  }

  function rect(x, y, w, h, fill, stroke, sw) {
    const f = fill ? `fill="${fill}"` : `fill="none"`;
    const s = stroke ? `stroke="${stroke}" stroke-width="${sw || LINE}" stroke-linecap="square"` : "";
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" ${f} ${s}/>`;
  }

  function line(x1, y1, x2, y2, sw) {
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${STROKE}" stroke-width="${sw || LINE}" stroke-linecap="square"/>`;
  }

  function circle(cx, cy, r) {
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${FILL}"/>`;
  }

  // Frame helper (solo OGGETTO) — frame nero forte
  function frameClosedStrong() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD, h = 64 - 2 * PAD;
    return rect(x0, y0, w, h, null, STROKE, LINE);
  }

  // “Corner cuts” (PRESENTE) — solo linee
  function brokenCorners() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD, h = 64 - 2 * PAD;
    const x1 = x0, y1 = y0, x2 = x0 + w, y2 = y0 + h;
    const c = 10;
    return [
      line(x1 + c, y1, x2 - c, y1),
      line(x2, y1 + c, x2, y2 - c),
      line(x2 - c, y2, x1 + c, y2),
      line(x1, y2 - c, x1, y1 + c)
    ].join("");
  }

  // “Assenza interna” (overlay) per negazione
  function negOverlay() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD, h = 64 - 2 * PAD;
    const pts = [
      [x0 + w * 0.38, y0 + h * 0.38],
      [x0 + w * 0.62, y0 + h * 0.38],
      [x0 + w * 0.38, y0 + h * 0.62],
      [x0 + w * 0.62, y0 + h * 0.62]
    ];
    return pts.map(([cx, cy]) => rect(cx - 2.2, cy - 2.2, 4.4, 4.4, FILL)).join("");
  }

  // Nucleo (PERSONA) / banda (MOVIMENTO) / diagonale (TRASFORMAZIONE)
  function nucleus() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD, h = 64 - 2 * PAD;
    return rect(x0 + w * 0.38, y0 + h * 0.38, w * 0.24, h * 0.24, FILL);
  }

  function band() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD, h = 64 - 2 * PAD;
    return rect(x0 + w * 0.18, y0 + h * 0.44, w * 0.64, h * 0.12, FILL);
  }

  function diagonal() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD, h = 64 - 2 * PAD;
    return line(x0 + w * 0.20, y0 + h * 0.80, x0 + w * 0.80, y0 + h * 0.20);
  }

  // LUOGO: base line
  function baseLine() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD, h = 64 - 2 * PAD;
    return line(x0 + w * 0.15, y0 + h * 0.85, x0 + w * 0.85, y0 + h * 0.85, 3);
  }

  // ATTIVO/PASSIVO: dot top/bottom
  function dotTop() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD, h = 64 - 2 * PAD;
    return circle(x0 + w / 2, y0 + h * 0.22, 3.2);
  }
  function dotBottom() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD, h = 64 - 2 * PAD;
    return circle(x0 + w / 2, y0 + h * 0.78, 3.2);
  }

  // APERTO/CHIUSO: apertura/chiusura top
  function openTop() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD;
    const gap = 12;
    const leftEnd = x0 + (w - gap) / 2;
    const rightStart = x0 + (w + gap) / 2;
    return [
      line(x0, y0, leftEnd, y0),
      line(rightStart, y0, x0 + w, y0)
    ].join("");
  }
  function closedTop() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD;
    return rect(x0, y0 - 1, w, 8, FILL);
  }

  // INIZIO/FINE: stroke top/bottom
  function strokeTop() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD;
    return line(x0, y0, x0 + w, y0, 4);
  }
  function strokeBottom() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD, h = 64 - 2 * PAD;
    return line(x0, y0 + h, x0 + w, y0 + h, 4);
  }

  // RELAZIONE: barra verticale
  function verticalBar() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD, h = 64 - 2 * PAD;
    return rect(x0 + w * 0.46, y0 + h * 0.15, w * 0.08, h * 0.70, FILL);
  }

  // CAUSA/SCOPO: frecce minimali
  function arrowRight() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD, h = 64 - 2 * PAD;
    const y = y0 + h * 0.5;
    const x1 = x0 + w * 0.2;
    const x2 = x0 + w * 0.75;
    const head = `<polygon points="${x2},${y-6} ${x2+10},${y} ${x2},${y+6}" fill="${FILL}"/>`;
    return line(x1, y, x2, y) + head;
  }

  function arrowUp() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD, h = 64 - 2 * PAD;
    const x = x0 + w * 0.5;
    const y1 = y0 + h * 0.75;
    const y2 = y0 + h * 0.25;
    const head = `<polygon points="${x-6},${y2} ${x},${y2-10} ${x+6},${y2}" fill="${FILL}"/>`;
    return line(x, y1, x, y2) + head;
  }

  // ASSENTE: 5 micro-quadrati “cross”
  function absenceCross() {
    const x0 = PAD, y0 = PAD, w = 64 - 2 * PAD, h = 64 - 2 * PAD;
    const pts = [
      [x0 + w * 0.30, y0 + h * 0.30],
      [x0 + w * 0.70, y0 + h * 0.30],
      [x0 + w * 0.30, y0 + h * 0.70],
      [x0 + w * 0.70, y0 + h * 0.70],
      [x0 + w * 0.50, y0 + h * 0.50]
    ];
    return pts.map(([cx, cy]) => rect(cx - 2.6, cy - 2.6, 5.2, 5.2, FILL)).join("");
  }

  // ----------------- TOKEN SET (16) -----------------
  const GLYPH_DEFS = {
    OGGETTO:        () => frameClosedStrong(),
    PERSONA:        () => nucleus(),
    LUOGO:          () => baseLine(),

    ATTIVO:         () => dotTop(),
    PASSIVO:        () => dotBottom(),

    PRESENTE:       () => brokenCorners(),
    ASSENTE:        () => absenceCross(),

    MOVIMENTO:      () => band(),
    TRASFORMAZIONE: () => diagonal(),

    APERTO:         () => openTop(),
    CHIUSO:         () => closedTop(),

    INIZIO:         () => strokeTop(),
    FINE:           () => strokeBottom(),

    RELAZIONE:      () => verticalBar(),
    CAUSA:          () => arrowRight(),
    SCOPO:          () => arrowUp()
  };

  const TOKENS = Object.keys(GLYPH_DEFS);

  function parseQuadraString(s) {
    const words = String(s || "")
      .split("/")
      .map(w => w.trim())
      .filter(Boolean);

    return words.map(word => {
      const rawTokens = word.split("+").map(t => t.trim()).filter(Boolean);
      const tokens = [];
      const opts = [];
      rawTokens.forEach(rt => {
        let negate = false;
        let t = rt.toUpperCase();
        if (t.startsWith("!")) { negate = true; t = t.slice(1); }
        tokens.push(t);
        opts.push({ negate });
      });
      return { tokens, opts };
    });
  }

  function svgGlyph(token, options = {}) {
    const t = String(token || "").toUpperCase();
    const draw = GLYPH_DEFS[t];
    const base = draw ? draw() : `<text x="14" y="40" font-size="18" font-family="ui-monospace, Menlo, monospace" fill="#000">?</text>`;
    const neg = options.negate === true ? negOverlay() : "";
    return svgWrap(base + neg, t);
  }

  function renderWords(wordsParsed, targetEl) {
    targetEl.innerHTML = "";
    wordsParsed.forEach((w, idx) => {
      const wordWrap = document.createElement("div");
      wordWrap.className = "word";
      w.tokens.forEach((t, i) => {
        const cell = document.createElement("div");
        cell.innerHTML = svgGlyph(t, { negate: w.opts[i]?.negate === true });
        wordWrap.appendChild(cell);
      });
      targetEl.appendChild(wordWrap);
      if (idx !== wordsParsed.length - 1) {
        const sep = document.createElement("span");
        sep.className = "pill";
        sep.textContent = "⟂";
        targetEl.appendChild(sep);
      }
    });
  }

  window.QUADRA = {
    TOKENS,
    parseQuadraString,
    svgGlyph,
    renderWords
  };
})();