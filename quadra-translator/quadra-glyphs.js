// quadra-glyphs.js
// 16-token system.
// Change requested: NO outer square frame for every glyph EXCEPT OGGETTO,
// which keeps the closed square frame.
// Rendering is grid-based (1..7) in a 64x64 viewBox, black & white.

export const TOKENS = [
  // ENTITÀ (4)
  "OGGETTO",
  "PERSONA",
  "LUOGO",
  "SISTEMA",

  // AGENZIA / RELAZIONE (3)
  "ATTIVO",
  "PASSIVO",
  "RELAZIONE",

  // STATO / DINAMICA (4)
  "FERMO",
  "MOVIMENTO",
  "TRASFORMAZIONE",
  "FLUSSO",

  // CONDIZIONE / TEMPO (3)
  "PRESENTE",
  "ASSENTE",
  "LIMITE",

  // ASTRAZIONE (2)
  "IDENTITA",
  "DIFFERENZA",
];

// Ops vocabulary:
// - frame: only used for OGGETTO now (closed square).
// - inner: still allowed (SISTEMA) but it's an inner frame without outer frame.
// - primitives are placed on an 8x8 grid inside a padded 64x64 canvas.
export const GLYPHS = {
  // ENTITÀ
  OGGETTO: [
    { t:"frame", mode:"closed" } // ONLY glyph that keeps outer contour
  ],

  PERSONA: [
    { t:"rect", x:2, y:2, w:4, h:4, fill:true }
  ],

  LUOGO: [
    { t:"line", x1:2, y1:6, x2:6, y2:6 } // internal base
  ],

  SISTEMA: [
    { t:"frame", mode:"inner" } // inner frame only (no outer frame)
  ],

  // AGENZIA / RELAZIONE
  ATTIVO: [
    { t:"dot", x:4, y:2 }
  ],

  PASSIVO: [
    { t:"dot", x:4, y:6 }
  ],

  RELAZIONE: [
    { t:"line", x1:2, y1:4, x2:6, y2:4 }
  ],

  // STATO / DINAMICA
  FERMO: [
    { t:"rect", x:3, y:3, w:2, h:2, fill:true }
  ],

  MOVIMENTO: [
    { t:"line", x1:2, y1:2, x2:6, y2:6 }
  ],

  TRASFORMAZIONE: [
    { t:"line", x1:4, y1:2, x2:4, y2:6 },
    { t:"line", x1:2, y1:4, x2:6, y2:4 }
  ],

  FLUSSO: [
    { t:"poly", pts:[[2,3],[3,2],[4,3],[5,2],[6,3]] }
  ],

  // CONDIZIONE / TEMPO
  PRESENTE: [
    { t:"cornermarks" } // internal L marks (no outer frame)
  ],

  ASSENTE: [
    { t:"dot", x:2, y:2 },
    { t:"dot", x:6, y:2 },
    { t:"dot", x:4, y:4 },
    { t:"dot", x:2, y:6 },
    { t:"dot", x:6, y:6 }
  ],

  LIMITE: [
    { t:"line", x1:4, y1:2, x2:4, y2:6 }
  ],

  // ASTRAZIONE
  IDENTITA: [
    { t:"dot", x:3, y:3 },
    { t:"dot", x:5, y:3 },
    { t:"dot", x:3, y:5 },
    { t:"dot", x:5, y:5 }
  ],

  DIFFERENZA: [
    { t:"dot", x:2, y:2 },
    { t:"dot", x:6, y:6 }
  ],
};

// SVG renderer
// options.negate = true -> add "assenza interna" small squares as overlay
export function glyphSVG(token, options = {}){
  const ops = GLYPHS[token];
  if(!ops) return "";

  const size = 64;
  const pad = 7;
  const stroke = 2.5;

  const inner = size - pad*2;
  const cell = inner / 8;

  const X = (gx) => pad + gx * cell;
  const Y = (gy) => pad + gy * cell;

  const parts = [];

  function lineOp(x1,y1,x2,y2){
    parts.push(
      `<line x1="${X(x1)}" y1="${Y(y1)}" x2="${X(x2)}" y2="${Y(y2)}"
        stroke="#000" stroke-width="${stroke}" stroke-linecap="square"/>`
    );
  }

  function rectOp(rx,ry,rw,rh,fill){
    parts.push(
      `<rect x="${X(rx)}" y="${Y(ry)}" width="${rw*cell}" height="${rh*cell}"
        fill="${fill ? "#000" : "none"}" />`
    );
  }

  function dotOp(dx,dy){
    parts.push(
      `<circle cx="${X(dx)}" cy="${Y(dy)}" r="${cell*0.32}" fill="#000" />`
    );
  }

  function polyOp(pts){
    const d = pts.map(([px,py], i) => `${i===0?"M":"L"} ${X(px)} ${Y(py)}`).join(" ");
    parts.push(
      `<path d="${d}" fill="none" stroke="#000" stroke-width="${stroke}"
        stroke-linecap="square" stroke-linejoin="miter" />`
    );
  }

  function frame(mode){
    if(mode === "closed"){
      // outer frame aligned to grid 1..7
      parts.push(
        `<rect x="${X(1)}" y="${Y(1)}" width="${cell*6}" height="${cell*6}"
          fill="none" stroke="#000" stroke-width="${stroke}" shape-rendering="crispEdges" />`
      );
      return;
    }
    if(mode === "inner"){
      // inner frame only (2..6)
      parts.push(
        `<rect x="${X(2)}" y="${Y(2)}" width="${cell*4}" height="${cell*4}"
          fill="none" stroke="#000" stroke-width="${stroke}" shape-rendering="crispEdges" />`
      );
      return;
    }
  }

  function cornermarks(){
    // 4 internal L marks in an implied square (no outer frame)
    const x0 = X(1), y0 = Y(1), w = cell*6, h = cell*6;
    const c = cell*1.1;
    const inset = cell*0.7;

    const seg = (x1,y1,x2,y2)=>
      `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
        stroke="#000" stroke-width="${stroke}" stroke-linecap="square"/>`;

    // TL
    parts.push(seg(x0+inset, y0+inset, x0+inset+c, y0+inset));
    parts.push(seg(x0+inset, y0+inset, x0+inset, y0+inset+c));
    // TR
    parts.push(seg(x0+w-inset, y0+inset, x0+w-inset-c, y0+inset));
    parts.push(seg(x0+w-inset, y0+inset, x0+w-inset, y0+inset+c));
    // BL
    parts.push(seg(x0+inset, y0+h-inset, x0+inset+c, y0+h-inset));
    parts.push(seg(x0+inset, y0+h-inset, x0+inset, y0+h-inset-c));
    // BR
    parts.push(seg(x0+w-inset, y0+h-inset, x0+w-inset-c, y0+h-inset));
    parts.push(seg(x0+w-inset, y0+h-inset, x0+w-inset, y0+h-inset-c));
  }

  function negateOverlay(){
    // "assenza interna" overlay: 4 small squares around center
    const centers = [
      [3.2, 3.2],
      [4.8, 3.2],
      [3.2, 4.8],
      [4.8, 4.8],
    ];
    const s = cell*0.55;
    for(const [gx,gy] of centers){
      parts.push(
        `<rect x="${pad + gx*cell - s/2}" y="${pad + gy*cell - s/2}"
          width="${s}" height="${s}" fill="#000" />`
      );
    }
  }

  // Render ops
  for(const op of ops){
    if(op.t === "frame") frame(op.mode);
    else if(op.t === "line") lineOp(op.x1, op.y1, op.x2, op.y2);
    else if(op.t === "rect") rectOp(op.x, op.y, op.w, op.h, !!op.fill);
    else if(op.t === "dot") dotOp(op.x, op.y);
    else if(op.t === "poly") polyOp(op.pts);
    else if(op.t === "cornermarks") cornermarks();
  }

  if(options.negate === true) negateOverlay();

  return `
    <svg width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="${token}">
      ${parts.join("\n")}
    </svg>
  `;
}
