// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
  site: 'https://demo.nuxipro.com',
  integrations: [
    starlight({
      title: 'NuxiPro',
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
              url: 'https://github.com/votre-user',
            },
          },
        }),
      ],
      sidebar: [
        // La documentation sera ajoutée ici plus tard
      ],
    }),
  ],
});
