export const GLYPHS = {
  // ENTITÀ
  OGGETTO:   [{t:"frame", mode:"closed"}],

  PERSONA:   [
    {t:"frame", mode:"closed"},
    {t:"rect", x:2,y:2,w:4,h:4, fill:true}
  ],

  LUOGO:     [
    {t:"frame", mode:"closed"},
    {t:"line", x1:2,y1:6,x2:6,y2:6} // base interna
  ],

  SISTEMA:   [
    {t:"frame", mode:"closed"},
    {t:"frame", mode:"inner"}
  ],

  // AGENZIA / RELAZIONE
  ATTIVO:    [
    {t:"frame", mode:"closed"},
    {t:"dot", x:4,y:2}
  ],

  PASSIVO:   [
    {t:"frame", mode:"closed"},
    {t:"dot", x:4,y:6}
  ],

  RELAZIONE: [
    {t:"frame", mode:"closed"},
    {t:"line", x1:2,y1:4,x2:6,y2:4}
  ],

  // STATO / DINAMICA
  FERMO: [
    {t:"frame", mode:"closed"},
    {t:"rect", x:3,y:3,w:2,h:2, fill:true}
  ],

  MOVIMENTO: [
    {t:"frame", mode:"closed"},
    {t:"line", x1:2,y1:2,x2:6,y2:6}
  ],

  TRASFORMAZIONE: [
    {t:"frame", mode:"closed"},
    {t:"line", x1:4,y1:2,x2:4,y2:6},
    {t:"line", x1:2,y1:4,x2:6,y2:4}
  ],

  FLUSSO: [
    {t:"frame", mode:"closed"},
    {t:"poly", pts:[[2,3],[3,2],[4,3],[5,2],[6,3]]}
  ],

  // CONDIZIONE / TEMPO
  PRESENTE: [
    {t:"frame", mode:"closed"},
    {t:"cornermarks"} // 4 L interni
  ],

  ASSENTE: [
    {t:"frame", mode:"closed"},
    {t:"dot", x:2,y:2},
    {t:"dot", x:6,y:2},
    {t:"dot", x:4,y:4},
    {t:"dot", x:2,y:6},
    {t:"dot", x:6,y:6}
  ],

  LIMITE: [
    {t:"frame", mode:"closed"},
    {t:"line", x1:4,y1:2,x2:4,y2:6}
  ],

  // ASTRAZIONE
  IDENTITA: [
    {t:"frame", mode:"closed"},
    {t:"dot", x:3,y:3},
    {t:"dot", x:5,y:3},
    {t:"dot", x:3,y:5},
    {t:"dot", x:5,y:5}
  ],

  DIFFERENZA: [
    {t:"frame", mode:"closed"},
    {t:"dot", x:2,y:2},
    {t:"dot", x:6,y:6}
  ],
};
