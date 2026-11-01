import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {validateCloud,chooseCloud} from '../cloud-data.mjs';
import {createHash} from 'node:crypto';

test('the staged nave asset matches the runtime binary contract', async () => {
  const meta = JSON.parse(await readFile(new URL('../../point-clouds/nave/nave.json',import.meta.url),'utf8'));
  const bytes = await readFile(new URL('../../point-clouds/nave/nave.bin',import.meta.url));
  assert.equal(validateCloud(meta,bytes).meta.count,270720);
  assert.throws(()=>validateCloud(meta,bytes.subarray(8)),/Invalid/);
  assert.throws(()=>validateCloud({...meta,format:'xyz'},bytes),/Invalid/);
  assert.throws(()=>validateCloud({...meta,aspect:0},bytes),/Invalid/);
  assert.throws(()=>validateCloud({...meta,width:1},bytes),/Invalid/);
});

test('all nine imported clouds match their manifest, sources and checksums', async()=>{
  const manifestUrl = new URL('../../point-clouds/manifest.json',import.meta.url);
  const manifest = JSON.parse(await readFile(manifestUrl,'utf8'));
  assert.equal(manifest.clouds.length,9);
  assert.equal(new Set(manifest.clouds.map(cloud=>cloud.id)).size,9);
  for(const entry of manifest.clouds){
    const metadataUrl=new URL(entry.metadata,manifestUrl);
    const meta=JSON.parse(await readFile(metadataUrl,'utf8'));
    const bytes=await readFile(new URL(entry.binary,manifestUrl));
    validateCloud(meta,bytes);
    assert.equal(createHash('sha256').update(bytes).digest('hex'),meta.binary_sha256);
    const source=await readFile(new URL(meta.source,metadataUrl));
    assert.equal(createHash('sha256').update(source).digest('hex'),meta.source_sha256);
  }
  const first=manifest.clouds[0].id;
  assert.equal(chooseCloud(manifest,{requested:first}).id,first);
  assert.notEqual(chooseCloud(manifest,{previous:first,random:()=>0}).id,first);
  assert.ok(manifest.clouds.includes(chooseCloud(manifest,{requested:'../../unexpected',random:()=>0})));
  const single={version:1,selection:'random-per-visit',clouds:[{id:'only'}]};
  assert.equal(chooseCloud(single,{previous:'only'}).id,'only');
});
