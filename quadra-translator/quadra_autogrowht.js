// quadra-autogrow.js
// Autocrescita vocab: genera frasi italiane (controllate) e chiama /translate con autosave=true.
// Requisiti: Node 18+ (tu hai Node 22). Nessuna dipendenza.
//
// Uso:
//   node quadra-autogrow.js --n 300 --threshold 0.92 --delay 250
//   API_BASE può essere cambiata con env:
//   API_BASE="https://quadra-api.quadra-fm.workers.dev" node quadra-autogrow.js
//
// Output: log progress + riepilogo finale.

const API_BASE = process.env.API_BASE || "https://quadra-api.quadra-fm.workers.dev";

const N = numArg("--n", 300);
const TH = numArg("--threshold", 0.92);
const DELAY_MS = numArg("--delay", 250);
const MODE = strArg("--mode", "controlled"); // controlled | mixed
const VERBOSE = hasFlag("--verbose");

function numArg(name, fallback) {
  const i = process.argv.indexOf(name);
  if (i === -1) return fallback;
  const v = Number(process.argv[i + 1]);
  return Number.isFinite(v) ? v : fallback;
}
function strArg(name, fallback) {
  const i = process.argv.indexOf(name);
  if (i === -1) return fallback;
  return String(process.argv[i + 1] ?? fallback);
}
function hasFlag(name) {
  return process.argv.includes(name);
}
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function prob(p) {
  return Math.random() < p;
}

// Vocabolario seed controllato (espandibile)
const W = {
  subjects: ["persona", "amico", "utente", "bambino", "donna", "uomo"],
  verbs: ["entra", "esce", "vede", "sposta", "apre", "chiude", "cerca", "trova", "lascia", "prende", "porta"],
  objects: ["bottiglia", "contenitore", "porta", "chiave", "oggetto", "libro"],
  places: ["casa", "stanza", "città", "studio", "museo", "ufficio", "luogo"],
  states: ["pieno", "vuoto", "aperto", "chiuso", "presente", "assente", "abbandonato"],
  rels: ["dentro", "fuori", "vicino", "lontano"],
  abstracts: ["causa", "scopo", "possesso", "possibile", "dovere"],
  fillers: ["il", "la", "un", "una", "nel", "nella", "da", "con", "senza"]
};

// Frasi controllate (alta qualità, bassa deriva)
function makeControlledSentence() {
  const pat = Math.floor(Math.random() * 10);

  switch (pat) {
    case 0: // soggetto + verbo + oggetto
      return `${pick(W.subjects)} ${pick(W.verbs)} ${pick(W.objects)}`;
    case 1: // oggetto + stato
      return `${pick(W.objects)} ${pick(W.states)}`;
    case 2: // oggetto + relazione + luogo
      return `${pick(W.objects)} ${pick(W.rels)} ${pick(W.places)}`;
    case 3: // soggetto + verbo + relazione + luogo
      return `${pick(W.subjects)} ${pick(W.verbs)} ${pick(W.rels)} ${pick(W.places)}`;
    case 4: // luogo + stato
      return `${pick(W.places)} ${pick(W.states)}`;
    case 5: // negazione + stato
      return `non ${pick(W.states)}`;
    case 6: // astratto come “motivo”
      return `${pick(W.abstracts)} ${pick(W.objects)}`;
    case 7: // possesso semplice
      return `${pick(W.subjects)} ${pick(W.abstracts)} ${pick(W.objects)}`;
    case 8: // due parole (stress test: composizione)
      return `${pick(W.objects)} ${pick(W.rels)} ${pick(W.places)} ${pick(W.states)}`;
    case 9: // azione + scopo/causa
      return `${pick(W.subjects)} ${pick(W.verbs)} ${pick(W.objects)} ${pick(W.abstracts)}`;
    default:
      return `${pick(W.subjects)} ${pick(W.verbs)} ${pick(W.objects)}`;
  }
}

// Frasi “mixed”: inserisce parole fuori-vocabolario per forzare crescita.
// Attenzione: aumenta rischio deriva → usa soglia alta.
const OOV = [
  "cilindro","liquido","vetro","metallo","strada","piazza","stazione","archivio","memoria","ombra",
  "ruota","spigolo","sezione","scala","finestra","parete","tetto","ferro","tessuto","fabbrica"
];
function makeMixedSentence() {
  const base = makeControlledSentence();
  if (!prob(0.55)) return base;
  const extra = pick(OOV);
  // infilalo in modo semplice
  return prob(0.5) ? `${base} ${extra}` : `${extra} ${base}`;
}

function makeSentence() {
  if (MODE === "mixed") return makeMixedSentence();
  if (MODE === "controlled") return makeControlledSentence();
  return makeControlledSentence();
}

async function translateAutosave(text) {
  const r = await fetch(`${API_BASE}/translate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      autosave: true,
      autosaveThreshold: TH
    })
  });

  const data = await r.json().catch(() => ({}));
  return { ok: r.ok, status: r.status, data };
}

function summarizeSuggestions(suggestions, threshold) {
  let total = 0, above = 0;
  const maxConfByIt = new Map();

  for (const s of (suggestions || [])) {
    const it = String(s.it || "").toLowerCase().trim();
    const conf = Number(s.confidence ?? 0);
    if (!it) continue;

    total++;
    if (conf >= threshold) above++;

    const prev = maxConfByIt.get(it) ?? 0;
    if (conf > prev) maxConfByIt.set(it, conf);
  }

  return { total, above, maxConfByIt };
}

(async function main() {
  console.log(`API_BASE=${API_BASE}`);
  console.log(`N=${N} threshold=${TH} delay=${DELAY_MS}ms mode=${MODE}`);
  console.log("----");

  let ok = 0, fail = 0;
  let totalSug = 0, totalAbove = 0;

  const globalBest = new Map(); // it -> best conf seen across run

  for (let i = 1; i <= N; i++) {
    const sentence = makeSentence();

    const res = await translateAutosave(sentence);
    if (!res.ok) {
      fail++;
      const err = res.data?.error || `http_${res.status}`;
      console.log(`[${i}/${N}] FAIL ${res.status} :: ${err}`);
      if (VERBOSE && res.data?.detail) console.log(res.data.detail);
      await sleep(DELAY_MS);
      continue;
    }

    ok++;
    const { total, above, maxConfByIt } = summarizeSuggestions(res.data?.suggestions, TH);
    totalSug += total;
    totalAbove += above;

    for (const [it, conf] of maxConfByIt.entries()) {
      const prev = globalBest.get(it) ?? 0;
      if (conf > prev) globalBest.set(it, conf);
    }

    const msg = `[${i}/${N}] OK :: sug=${total} >=TH=${above} :: "${sentence}"`;
    console.log(msg);

    if (VERBOSE) {
      const quadra = String(res.data?.quadra || "");
      console.log(`         quadra: ${quadra}`);
    }

    await sleep(DELAY_MS);
  }

  console.log("----");
  console.log(`DONE ok=${ok} fail=${fail}`);
  console.log(`suggestions total=${totalSug}  >=TH=${totalAbove}`);
  console.log(`unique terms suggested=${globalBest.size}`);

  const top = [...globalBest.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 30);

  console.log("Top 30 termini (max confidence vista):");
  for (const [k, v] of top) {
    console.log(`  ${k.padEnd(18)} ${(v * 100).toFixed(0)}%`);
  }

  console.log("\nDB check (manuale):");
  console.log(`  cd ~/Projects/quadra-api`);
  console.log(`  npx wrangler d1 execute quadra_vocab --remote --command "SELECT COUNT(*) AS n FROM vocabulary;"`);
  console.log(`  npx wrangler d1 execute quadra_vocab --remote --command "SELECT it, quadra, source, confidence, updated_at FROM vocabulary ORDER BY updated_at DESC LIMIT 20;"`);
})().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});