# Architecture

Input action → deterministic policy → allow/review/deny. The example never executes external actions. In production, risk and allowlists must come from trusted policy configuration, not user or model input. Authorization must be enforced at the execution boundary. No real identity or approvals are implemented here.
