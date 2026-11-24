const risks = new Set(['low', 'high']);
export function decide(action, allowed = []) {
  if (!action || typeof action.name !== 'string' || !Array.isArray(allowed) || !risks.has(action.risk)) return 'deny';
  if (!allowed.includes(action.name)) return 'deny';
  return action.risk === 'high' ? 'review' : 'allow';
}
