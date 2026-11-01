export function validateCloud(meta, bytes) {
  if (!Number.isInteger(meta.count) || meta.count < 1 || meta.count > 2000000 ||
      !Number.isInteger(meta.width) || meta.width < 1 || !Number.isInteger(meta.height) || meta.height < 1 ||
      meta.count !== meta.width * meta.height || !Number.isFinite(meta.aspect) || meta.aspect <= 0 ||
      meta.format !== 'uint16 little-endian normalized: u,v,inverse-depth,luminance' ||
      bytes.byteLength !== meta.count * 8) throw new Error('Invalid point-cloud data');
  return {meta, bytes};
}

export function chooseCloud(manifest, {requested, previous, random = Math.random} = {}) {
  if (manifest.version !== 1 || !Array.isArray(manifest.clouds) || !manifest.clouds.length) throw new Error('Invalid cloud manifest');
  const requestedCloud = manifest.clouds.find(cloud => cloud.id === requested);
  if (requestedCloud) return requestedCloud;
  if (manifest.selection === 'random-per-visit') {
    const candidates = manifest.clouds.filter(cloud => cloud.id !== previous);
    const pool = candidates.length ? candidates : manifest.clouds;
    return pool[Math.min(pool.length-1, Math.max(0, Math.floor(random()*pool.length)))];
  }
  return manifest.clouds.find(cloud => cloud.id === manifest.default) || manifest.clouds[0];
}

export async function loadCloud(manifestUrl, signal, options) {
  const read = async (url, type) => {
    if (url.origin !== location.origin) throw new Error('Cloud assets must be same-origin');
    const response = await fetch(url, {signal});
    if (!response.ok) throw new Error('Point-cloud asset unavailable');
    return response[type]();
  };
  const manifest = await read(manifestUrl, 'json');
  const entry = chooseCloud(manifest, options);
  if (typeof entry.metadata !== 'string' || typeof entry.binary !== 'string') throw new Error('Missing cloud paths');
  const [meta, bytes] = await Promise.all([
    read(new URL(entry.metadata, manifestUrl), 'json'), read(new URL(entry.binary, manifestUrl), 'arrayBuffer')
  ]);
  return {...validateCloud(meta, bytes), id: entry.id, motionScale: Number.isFinite(entry.motionScale) ? Math.max(0,Math.min(1,entry.motionScale)) : 1};
}
