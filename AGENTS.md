## Development

When starting the dev server, use background mode:

---

### Security rule
- No modifications without authorization
- Follow instructions given by the human
- Help the human build their project
- No autonomous decisions without human approval
- No self-modifications without clear explanation to the human
- In case of a problem, alert the human — do not try to fix it yourself, as the human must make the decision, not the AI
- Use bun

---

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Project

**NuxiPro** documentation site (`center.nuxipro.com`), built with **Astro + Starlight**. Content in Markdown/MDX, static build optimized for SEO/GEO/AEO.

### Commands

```bash
bun run dev        # Start dev server
bun run build      # Build for production
bun run preview    # Preview production build
bun install        # Install dependencies
```

### Installed plugins

| Plugin | Role |
|--------|------|
| `starlight-blog` | Built-in blog (`/blog/`, `/blog/rss.xml`) |
| `starlight-theme-exquisitus` | Visual theme |
| `starlight-llms-txt` | Files for LLMs (`/llms.txt`) |
| `starlight-links-validator` | Validates broken links at build |
| `starlight-llm-actions` | Copy/Open-in-LLM buttons |
| `starlight-agentready` | Submits site to AI agents |
| `starlight-md-txt` | Pages exposed as Markdown |
| `@astrojs/sitemap` | XML sitemap |

### Do not touch

| File | Reason |
|------|--------|
| `dist/` | Build output, regenerated each build |
| `node_modules/` | Dependencies |
| `.astro/` | Astro internal cache |
| `bun.lock` | Dependency lockfile |

### Troubleshooting

| Problem | Solution |
|---------|----------|
| TypeScript error on a plugin | Check `env.d.ts` |
| Broken links | `starlight-links-validator` reports them at build |
| Plugin crash | Check config in `astro.config.mjs` |

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
- [Global project documentation](./docs.md)
