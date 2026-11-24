# Website starter

React + Vite, no browser secrets. Run `npm install` to generate the website lockfile, then `npm run build`. Once committed, use `npm ci` for reproducible installs. Set VITE_BASE_PATH to `/repo-name/` for project Pages or `/` for custom domains. This is a single-page starter, not the final SEO/prerendered design system. The CI website job requires a successful build; reproducibility remains pending until a lockfile is committed.


The website imports shared ops-ui components and palette registry at immutable Git commit b0be9d8b5112ebfc716490a2aa607c6d31380399. Set `.ops/project.json` palette to a registered project ID. npm installation requires access to the public GitHub repository. Lockfile generation and reproducible npm ci remain pending until the lockfile is committed. No npm publication required.
