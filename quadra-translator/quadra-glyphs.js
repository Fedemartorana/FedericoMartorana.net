// quadra-glyphs.js
// Sistema definitivo: solo OGGETTO mantiene il quadrato di contorno.

export const GLYPHS = {

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


// ----------------- BASE PRIMITIVES -----------------

function baseSVG(content) {
  return `
    <svg viewBox="0 0 100 100" width="64" height="64">
      ${content}
    </svg>
  `;
}

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