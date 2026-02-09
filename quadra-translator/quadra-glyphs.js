export const GRID = 8;

// 16 token definitivi
export const TOKENS = [
  "PERSONA","OGGETTO","LUOGO","SISTEMA",
  "ATTIVO","PASSIVO","RELAZIONE",
  "FERMO","MOVIMENTO","TRASFORMAZIONE","FLUSSO",
  "PRESENTE","ASSENTE","LIMITE",
  "IDENTITA","DIFFERENZA"
];

// Disegno = set di “primitive” su griglia 8×8.
// Ogni primitive è: line, rect, dot. Tutto snap-to-grid.
export const GLYPHS = {
  // ENTITÀ
  OGGETTO:   [{t:"frame", mode:"closed"}],
  PERSONA:   [{t:"frame", mode:"closed"},{t:"rect", x:2,y:2,w:4,h:4, fill:true}],
  LUOGO:     [{t:"frame", mode:"open-bottom"}],
  SISTEMA:   [{t:"frame", mode:"closed"},{t:"frame", mode:"inner"}],

  // AGENZIA
  ATTIVO:    [{t:"dot", x:4,y:2}],
  PASSIVO:   [{t:"dot", x:4,y:6}],
  RELAZIONE: [{t:"line", x1:2,y1:4,x2:6,y2:4}],

  // STATO
  FERMO:            [{t:"rect", x:3,y:3,w:2,h:2, fill:true}],
  MOVIMENTO:        [{t:"line", x1:2,y1:2,x2:6,y2:6}],
  TRASFORMAZIONE:   [{t:"line", x1:4,y1:2,x2:4,y2:6},{t:"line", x1:2,y1:4,x2:6,y2:4}],
  FLUSSO:           [{t:"poly", pts:[[2,3],[3,2],[5,4],[6,3]]}], // zig-zag minimale

  // TEMPO/CONDIZIONE
  PRESENTE:  [{t:"corners"}],
  ASSENTE:   [{t:"dot", x:2,y:2},{t:"dot", x:6,y:2},{t:"dot", x:4,y:4},{t:"dot", x:2,y:6},{t:"dot", x:6,y:6}],
  LIMITE:    [{t:"line", x1:4,y1:2,x2:4,y2:6}],

  // ASTRAZIONE
  IDENTITA:   [{t:"dot", x:3,y:3},{t:"dot", x:5,y:3},{t:"dot", x:3,y:5},{t:"dot", x:5,y:5}],
  DIFFERENZA: [{t:"dot", x:2,y:2},{t:"dot", x:6,y:6}],
};

// Renderer SVG (64×64) basato su primitive
export function glyphSVG(token, {negate=false} = {}) {
  const ops = GLYPHS[token];
  if (!ops) return "";

  const size = 64;
  const pad = 8;                 // padding esterno
  const cell = (size - pad*2) / GRID; // 6 px
  const stroke = 2.5;
  const fill = "#000";

  const x = (gx)=> pad + gx*cell;
  const y = (gy)=> pad + gy*cell;

  const parts = [];

  function frame(mode){
    const x0 = x(1), y0 = y(1), w = cell*6, h = cell*6;
    const x1 = x0, y1 = y0, x2 = x0+w, y2 = y0+h;
    const gap = cell*2; // apertura (2 celle)

    const seg = (x1,y1,x2,y2)=> `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#000" stroke-width="${stroke}" stroke-linecap="square"/>`;

    if(mode==="inner"){
      const ix0 = x(2), iy0 = y(2), iw = cell*4, ih = cell*4;
      parts.push(
        `<rect x="${ix0}" y="${iy0}" width="${iw}" height="${ih}" fill="none" stroke="#000" stroke-width="${stroke}" />`
      );
      return;
    }

    if(mode==="closed"){
      parts.push(`<rect x="${x0}" y="${y0}" width="${w}" height="${h}" fill="none" stroke="#000" stroke-width="${stroke}" />`);
      return;
    }

    if(mode==="open-bottom"){
      parts.push(
        seg(x1,y1,x2,y1),
        seg(x2,y1,x2,y2),
        seg(x1,y2,x1,y1),
        // bottom missing
      );
      return;
    }

    // fallback closed
    parts.push(`<rect x="${x0}" y="${y0}" width="${w}" height="${h}" fill="none" stroke="#000" stroke-width="${stroke}" />`);
  }

  function corners(){
    const x0 = x(1), y0 = y(1), w = cell*6, h = cell*6;
    const c = cell*1.2;
    const seg = (x1,y1,x2,y2)=> `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#000" stroke-width="${stroke}" stroke-linecap="square"/>`;
    parts.push(
      seg(x0,y0, x0+c,y0), seg(x0,y0, x0,y0+c),
      seg(x0+w,y0, x0+w-c,y0), seg(x0+w,y0, x0+w,y0+c),
      seg(x0,y0+h, x0+c,y0+h), seg(x0,y0+h, x0,y0+h-c),
      seg(x0+w,y0+h, x0+w-c,y0+h), seg(x0+w,y0+h, x0+w,y0+h-c),
    );
  }

  function dot(gx,gy){
    const cx = x(gx) + cell/2;
    const cy = y(gy) + cell/2;
    parts.push(`<rect x="${cx-2.3}" y="${cy-2.3}" width="4.6" height="4.6" fill="${fill}" />`);
  }

  function rect(gx,gy,w,h,fillOn){
    const rx = x(gx);
    const ry = y(gy);
    parts.push(`<rect x="${rx}" y="${ry}" width="${w*cell}" height="${h*cell}" fill="${fillOn?fill:"none"}" stroke="none" />`);
  }

  function line(x1,y1,x2,y2){
    parts.push(`<line x1="${x(x1)+cell/2}" y1="${y(y1)+cell/2}" x2="${x(x2)+cell/2}" y2="${y(y2)+cell/2}" stroke="#000" stroke-width="${stroke}" stroke-linecap="square"/>`);
  }

  function poly(pts){
    const d = pts.map(([gx,gy],i)=> `${i===0?"M":"L"} ${x(gx)+cell/2} ${y(gy)+cell/2}`).join(" ");
    parts.push(`<path d="${d}" fill="none" stroke="#000" stroke-width="${stroke}" stroke-linecap="square" stroke-linejoin="miter"/>`);
  }

  for (const op of ops){
    if(op.t==="frame") frame(op.mode);
    if(op.t==="corners") corners();
    if(op.t==="dot") dot(op.x,op.y);
    if(op.t==="rect") rect(op.x,op.y,op.w,op.h,op.fill);
    if(op.t==="line") line(op.x1,op.y1,op.x2,op.y2);
    if(op.t==="poly") poly(op.pts);
  }

  // negazione interna: overlay di 4 punti al centro (stessa logica che usavi)
  if(negate){
    [[3.5,3.5],[4.5,3.5],[3.5,4.5],[4.5,4.5]].forEach(([gx,gy])=>{
      // mezzo-step: approssimiamo al centro cella
      const cx = pad + gx*cell;
      const cy = pad + gy*cell;
      parts.push(`<rect x="${cx-2.0}" y="${cy-2.0}" width="4.0" height="4.0" fill="${fill}" />`);
    });
  }

  return `<svg width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="${token}">${parts.join("")}</svg>`;
}