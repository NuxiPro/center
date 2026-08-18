# Documentation du projet page-starlight

## Le projet en 2 lignes

C'est le site de documentation de **NuxiPro** (`nuxipro.com`), construit avec **Astro + Starlight**. Le contenu est en Markdown, le build génère un site statique optimisé pour le SEO et les moteurs IA.

---

## Structure des fichiers

```
page-starlight/
├── astro.config.mjs        # Config principale (plugins, sidebar, site)
├── package.json             # Dépendances et scripts
├── tsconfig.json            # Config TypeScript
├── env.d.ts                 # Déclarations de types pour les plugins sans types
├── public/                  # Fichiers statiques copiés tels quels dans dist/
│   ├── favicon.svg
│   └── robots.txt           # Instructions pour les crawlers
├── src/
│   ├── content/
│   │   ├── docs/            # Pages de documentation (Markdown/MDX)
│   │   │   ├── index.mdx    # Page d'accueil (splash)
│   │   │   ├── guides/      # Guides (tutoriels)
│   │   │   └── reference/   # Pages de référence
│   │   └── blog/            # Articles du blog (vide pour l'instant)
│   ├── content.config.ts    # Définition des collections de contenu
│   └── assets/              # Images et ressources
├── dist/                    # Résultat du build (ne pas modifier)
└── node_modules/            # Dépendances installées
```

---

## Commandes essentielles

```bash
bun run dev        # Lancer le serveur de dev
bun run build      # Construire le site en production
bun run preview    # Prévisualiser le build
bun install        # Installer les dépendances
```

---

## Comment ajouter du contenu

### Ajouter une page de doc

Créer un fichier `.md` ou `.mdx` dans `src/content/docs/` :

```markdown
---
title: Mon titre
description: Ma description
---

Mon contenu ici.
```

### Ajouter un dossier

Créer un dossier dans `src/content/docs/` (ex: `src/content/docs/api/`) puis ajouter un fichier dedans. Ensuite, ajouter le dossier dans la sidebar dans `astro.config.mjs` :

```js
sidebar: [
  {
    label: 'Guides',
    items: [
      { label: 'Mon guide', slug: 'guides/mon-guide' },
    ],
  },
],
```

### Ajouter un article de blog

Créer un fichier dans `src/content/blog/` avec le frontmatter :

```markdown
---
title: Mon article
description: Description
date: 2026-08-18
authors: ['admin']
---

Contenu de l'article.
```

---

## Les plugins installés

| Plugin | Rôle | Génère quoi ? |
|--------|------|---------------|
| `starlight-blog` | Blog intégré | `/blog/`, `/blog/rss.xml` |
| `starlight-theme-exquisitus` | Thème visuel | — |
| `starlight-llms-txt` | Fichiers pour les LLMs | `/llms.txt`, `/llms-small.txt`, `/llms-full.txt` |
| `starlight-links-validator` | Vérifie les liens cassés | Alertes au build |
| `starlight-llm-actions` | Boutons Copy/Open-in-LLM | Interface dans les pages |
| `starlight-agentready` | Soumet le site aux agents IA | Indexation MCP |
| `starlight-md-txt` | Expose les pages en Markdown | URLs en `.md` |
| `@astrojs/sitemap` | Génère le sitemap XML | `sitemap-index.xml` |

---

## Fichiers générés au build (dans dist/)

| Fichier | Généré par | Usage |
|---------|-----------|-------|
| `sitemap-index.xml` | `@astrojs/sitemap` | Pour Google Search Console |
| `llms.txt` | `starlight-llms-txt` | Résumé du site pour les IA |
| `llms-small.txt` | `starlight-llms-txt` | Version compacte |
| `llms-full.txt` | `starlight-llms-txt` | Contenu complet |
| `blog/rss.xml` | `starlight-blog` | Flux RSS |
| `robots.txt` | Fichier statique dans `public/` | Instructions crawlers |

---

## SEO / GEO / AEO

### Ce qui est en place

- **Sitemap XML** généré automatiquement
- **robots.txt** dans `public/`
- **RSS feed** pour le blog
- **llms.txt** pour les moteurs IA (ChatGPT, Perplexity, etc.)
- **AgentReady** soumet le site aux agents IA via MCP
- **Liens validés** à chaque build

### Ce qu'il faut faire manuellement

- Remplir le `sidebar` dans `astro.config.mjs` avec tes pages
- Ajouter du contenu de qualité dans `src/content/docs/` et `src/content/blog/`
- Déployer sur un hébergement (Cloudflare Pages, Vercel, Netlify, etc.)

---

## Fichiers à ne pas toucher

| Fichier | Pourquoi |
|---------|----------|
| `dist/` | Résultat du build, régénéré à chaque build |
| `node_modules/` | Dépendances, réinstallées avec `bun install` |
| `.astro/` | Cache interne d'Astro |
| `bun.lock` | Lockfile des dépendances |

---

## En cas de problème

| Problème | Solution |
|----------|----------|
| Erreur TypeScript sur un plugin | Vérifier `env.d.ts` — ajouter `declare module 'nom-du-plugin';` |
| Liens cassés | `starlight-links-validator` les signale au build |
| Sitemap absent | Vérifier que `@astrojs/sitemap` est dans les intégrations |
| Plugin qui plante | Vérifier la config dans `astro.config.mjs` |

---

## Déploiement

Le build génère un dossier `dist/` statique. Déployer ce dossier sur :
- **Cloudflare Pages**

Le `site` dans `astro.config.mjs` doit correspondre à l'URL de production.
