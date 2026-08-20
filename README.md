# NuxiPro Center – Documentation Site

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This repository hosts the **public documentation site** for NuxiPro, built with **Astro + Starlight**. All sensitive data and internal services (PostHog, Starlight AgentReady) have been removed.

```bash
bun create astro@latest -- --template starlight
```

## 📦 What’s inside?

The project follows the standard Starlight layout:

```
.
├── public/                # static assets – favicons, logo.png, etc.
├── src/
│   ├── assets/           # images used in markdown
│   ├── content/          # content collections
│   │   └── docs/          # markdown/MDX pages exposed as routes
│   └── content.config.ts # Starlight content config
├── astro.config.mjs      # Astro + Starlight configuration (Pagefind enabled, AgentReady disabled)
├── package.json
└── tsconfig.json
```

**Key points**
- **Favicon & logo**: the site now uses `public/logo.png` (PNG) for the browser tab and Apple‑Touch icon.
- **Search**: Powered by **Pagefind**, the built‑in client‑side search engine. No external API keys or services are required.
- **No analytics**: all PostHog code has been stripped out.
- **No AgentReady**: the Starlight AgentReady plugin has been disabled to avoid the free‑plan quota.

## 🧞 Commands

Run all commands from the project root:

| Command               | Action                                      |
|----------------------|---------------------------------------------|
| `bun install`        | Install dependencies                        |
| `bun dev`            | Start the dev server (http://localhost:4321) |
| `bun build`          | Build the production site into `./dist/`   |
| `bun preview`        | Preview the built site locally               |
| `bun astro …`        | Run Astro CLI commands (`astro add`, `astro check`, …) |
| `bun astro -- --help`| Show Astro CLI help                         |

## 🔎 Search

The documentation includes a search field automatically injected by Starlight. It uses the **Pagefind** index generated at build time, so the search works completely offline with zero external dependencies.

## 📖 Learn more

- Starlight docs: https://starlight.astro.build/
- Astro docs: https://docs.astro.build/
- Join the Astro Discord: https://astro.build/chat

Feel free to fork, contribute, or deploy this site to a static host of your choice (e.g., Netlify, Vercel, Cloudflare Pages).
