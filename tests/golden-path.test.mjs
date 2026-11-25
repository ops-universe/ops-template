import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read = path => readFileSync(new URL('../'+path,import.meta.url),'utf8');
test('starter includes agent and evidence checkpoint files',()=>{
 for(const path of ['AGENTS.md','CLAUDE.md','docs/status/IMPLEMENTATION-STATUS.md','docs/status/RESUME.md','docs/security/threat-model.md']) assert.ok(read(path).trim(),path);
 assert.match(read('CLAUDE.md'),/4d7f564fa62dfed112b6d6ade1165c20b7e36c25/);
 assert.match(read('docs/status/IMPLEMENTATION-STATUS.md'),/scaffold only/);
 assert.match(read('docs/status/RESUME.md'),/no implementation checkpoint is asserted/);
});
