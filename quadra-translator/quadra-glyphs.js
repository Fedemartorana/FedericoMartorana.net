// quadra-glyphs.js
// Definitive 16-glyph system: every glyph has a CLOSED outer square frame.
// Rendering is grid-based (1..7) in a 64x64 viewBox, Swiss-clean black & white.

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

// Primitive ops for each token.
// Coordinate system: a 8x8 grid; we draw inside 1..7 with padding.
export const GLYPHS = {
  // ENTITÀ
  OGGETTO:   [{ t:"frame", mode:"closed" }],

  PERSONA:   [
    { t:"frame", mode:"closed" },
    { t:"rect", x:2, y:2, w:4, h:4, fill:true }
  ],

  LUOGO:     [
    { t:"frame", mode:"closed" },
    { t:"line", x1:2, y1:6, x2:6, y2:6 } // internal base
  ],

  SISTEMA:   [
    { t:"frame", mode:"closed" },
    { t:"frame", mode:"inner" } // inner frame
  ],

  // AGENZIA / RELAZIONE
  ATTIVO:    [
    { t:"frame", mode:"closed" },
    { t:"dot", x:4, y:2 }
  ],

  PASSIVO:   [
    { t:"frame", mode:"closed" },
    { t:"dot", x:4, y:6 }
  ],

  RELAZIONE: [
    { t:"frame", mode:"closed" },
    { t:"line", x1:2, y1:4, x2:6, y2:4 }
  ],

  // STATO / DINAMICA
  FERMO: [
    { t:"frame", mode:"closed" },
    { t:"rect", x:3, y:3, w:2, h:2, fill:true }
  ],

  MOVIMENTO: [
    { t:"frame", mode:"closed" },
    { t:"line", x1:2, y1:2, x2:6, y2:6 }
  ],

  TRASFORMAZIONE: [
    { t:"frame", mode:"closed" },
    { t:"line", x1:4, y1:2, x2:4, y2:6 },
    { t:"line", x1:2, y1:4, x2:6, y2:4 }
  ],

  FLUSSO: [
    { t:"frame", mode:"closed" },
    { t:"poly", pts:[[2,3],[3,2],[4,3],[5,2],[6,3]] }
  ],

  // CONDIZIONE / TEMPO
  PRESENTE: [
    { t:"frame", mode:"closed" },
    { t:"cornermarks" } // internal L marks
  ],

  ASSENTE: [
    { t:"frame", mode:"closed" },
    { t:"dot", x:2, y:2 },
    { t:"dot", x:6, y:2 },
    { t:"dot", x:4, y:4 },
    { t:"dot", x:2, y:6 },
    { t:"dot", x:6, y:6 }
  ],

  LIMITE: [
    { t:"frame", mode:"closed" },
    { t:"line", x1:4, y1:2, x2:4, y2:6 }
  ],

  // ASTRAZIONE
  IDENTITA: [
    { t:"frame", mode:"closed" },
    { t:"dot", x:3, y:3 },
    { t:"dot", x:5, y:3 },
    { t:"dot", x:3, y:5 },
    { t:"dot", x:5, y:5 }
  ],

  DIFFERENZA: [
    { t:"frame", mode:"closed" },
    { t:"dot", x:2, y:2 },
    { t:"dot", x:6, y:6 }
  ],
};

// SVG renderer
// options.negate = true -> add "absence internal" small squares as overlay
export function glyphSVG(token, options = {}){
  const ops = GLYPHS[token];
  if(!ops) return "";

  const size = 64;
  const pad = 7; // outer padding
  const stroke = 2.5;

  // Grid: 0..8 (we use 1..7). cell is 1/8 of inner size.
  const inner = size - pad*2;
  const cell = inner / 8;

  const x = (gx) => pad + gx * cell;
  const y = (gy) => pad + gy * cell;

  const parts = [];

  function lineOp(x1,y1,x2,y2){
    parts.push(
      `<line x1="${x(x1)}" y1="${y(y1)}" x2="${x(x2)}" y2="${y(y2)}"
        stroke="#000" stroke-width="${stroke}" stroke-linecap="square"/>`
    );
  }

  function rectOp(rx,ry,rw,rh,fill){
    parts.push(
      `<rect x="${x(rx)}" y="${y(ry)}" width="${rw*cell}" height="${rh*cell}"
        fill="${fill ? "#000" : "none"}" />`
    );
  }

  function dotOp(dx,dy){
    parts.push(
      `<circle cx="${x(dx)}" cy="${y(dy)}" r="${cell*0.32}" fill="#000" />`
    );
  }

  function polyOp(pts){
    const d = pts.map(([px,py], i) => `${i===0?"M":"L"} ${x(px)} ${y(py)}`).join(" ");
    parts.push(
      `<path d="${d}" fill="none" stroke="#000" stroke-width="${stroke}" stroke-linecap="square" stroke-linejoin="miter" />`
    );
  }

  function frame(mode){
    // closed outer frame: square aligned to grid 1..7
    if(mode === "closed"){
      parts.push(
        `<rect x="${x(1)}" y="${y(1)}" width="${cell*6}" height="${cell*6}"
          fill="none" stroke="#000" stroke-width="${stroke}" shape-rendering="crispEdges" />`
      );
      return;
    }
    // inner frame: inset inside 1..7 by 1 cell -> 2..6
    if(mode === "inner"){
      parts.push(
        `<rect x="${x(2)}" y="${y(2)}" width="${cell*4}" height="${cell*4}"
          fill="none" stroke="#000" stroke-width="${stroke}" shape-rendering="crispEdges" />`
      );
      return;
    }
  }

  function cornermarks(){
    // 4 internal L marks near corners (not touching the frame)
    const x0 = x(1), y0 = y(1), w = cell*6, h = cell*6;
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
        `<rect x="${pad + gx*cell - s/2}" y="${pad + gy*cell - s/2}" width="${s}" height="${s}" fill="#000" />`
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
