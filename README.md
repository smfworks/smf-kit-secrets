# smf-kit-secrets

Shared token / key prefix heuristics for SMF Works viral apps.

Skill Lint and Redact Before Share vendor `src/tokens.ts` into `src/lib/kit-tokens.ts` so Vite stays zero-config. **Edit this repo first**, then from an app:

```bash
npm run vendor:secrets
```

which fetches `main` and overwrites the vendored file. There is also a local helper:

```bash
node scripts/vendor.mjs /path/to/redact-before-share
```

```bash
node --experimental-strip-types --test src/tokens.test.ts
```

MIT — SMF Works
