# smf-kit-secrets

Shared token / key prefix heuristics for SMF Works viral apps.

Skill Lint and Redact Before Share both import `src/tokens.ts` (copied into each app as `src/lib/kit-tokens.ts` so Vite stays zero-config). Edit this file first, then copy.

```bash
node --experimental-strip-types --test src/tokens.test.ts
```

MIT — SMF Works
