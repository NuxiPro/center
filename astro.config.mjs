// @ts-check
/// <reference path="./env.d.ts" />
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import starlightBlog from 'starlight-blog';
import starlightThemeExquisitus from 'starlight-theme-exquisitus';
import starlightLlmsTxt from 'starlight-llms-txt';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmActions from 'starlight-llm-actions';
import starlightAgentready from 'starlight-agentready';
import starlightMdTxt from 'starlight-md-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://center.nuxipro.com',
  integrations: [sitemap(), starlight({
    title: 'NuxiPro Center',
    favicon: '/logo.png',
    credits: false,
    social: [
      {
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/nuxipro',
      },
    ],
    plugins: [
      starlightBlog({
        authors: {
          admin: {
            name: 'Fondateur NuxiPro',
            url: 'https://github.com/sbabas',
          },
        },
      }),
      starlightThemeExquisitus(),
      starlightLlmsTxt(),
      starlightLinksValidator(),
      starlightLlmActions(),
      starlightAgentready({ domain: 'center.nuxipro.com' }),
      starlightMdTxt({ format: '.md.txt' }),
    ],
    components: {
      // Surcharge du composant Footer natif
      Footer: './src/components/Footer.astro',
      Head: './src/components/Head.astro',
    },
    sidebar: [
      // La documentation sera ajoutée ici plus tard
    ],
  })],
});
