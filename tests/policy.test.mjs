import test from 'node:test';
import assert from 'node:assert/strict';
import {decide} from '../src/policy.mjs';
test('allows low risk allowlisted action',()=>assert.equal(decide({name:'read',risk:'low'},['read']),'allow'));
test('requires review for high risk',()=>assert.equal(decide({name:'update',risk:'high'},['update']),'review'));
test('denies unlisted action',()=>assert.equal(decide({name:'delete',risk:'low'},['read']),'deny'));
test('denies unknown risk',()=>assert.equal(decide({name:'read',risk:'unknown'},['read']),'deny'));
test('denies malformed input',()=>assert.equal(decide(null,[]),'deny'));
