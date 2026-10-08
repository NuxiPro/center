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
import starlightMdTxt from 'starlight-md-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://center.nuxipro.com',
  integrations: [sitemap(), starlight({
    title: 'NuxiPro Center',
    favicon: '/logo.png',
    lastUpdated: true,
    social: [
      {
        icon: 'codeberg',
        label: 'Codeberg',
        href: 'https://codeberg.org/NuxiPro',
      },
    ],
    defaultLocale: "root",
    locales: {
      root: {
        label: "Français",
        lang: "fr",
      },
      en: {
        label: "English",
        lang: "en",
      },
    },
    plugins: [
      starlightBlog({
        authors: {
          admin: {
            name: 'Sébastien Babas',
            url: 'https://codeberg.org/sbabas',
          },
        },
      }),
      starlightThemeExquisitus(),
      starlightLlmsTxt(),
      starlightLinksValidator(),
      starlightLlmActions(),
      starlightMdTxt({ format: '.md.txt' }),
    ],
    components: {
      Footer: './src/components/Footer.astro',
      Head: './src/components/Head.astro',
    },
    sidebar: [
    ],
  })],
});
