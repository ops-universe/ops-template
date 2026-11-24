import { decide } from './policy.mjs';
for (const action of [{name:'read',risk:'low'},{name:'update',risk:'high'},{name:'delete',risk:'low'}]) console.log(JSON.stringify({action,decision:decide(action,['read','update'])}));
