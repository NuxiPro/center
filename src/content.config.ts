import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: (context) => blogSchema(context),
    }),
  }),
  i18n: defineCollection({
    loader: i18nLoader(),
    schema: i18nSchema({
      extend: z
        .looseObject({
          'newsletter.badge': z.string().optional(),
          'newsletter.title': z.string().optional(),
          'newsletter.descPrefix': z.string().optional(),
          'newsletter.descBold1': z.string().optional(),
          'newsletter.descAnd': z.string().optional(),
          'newsletter.descBold2': z.string().optional(),
          'newsletter.descSuffix': z.string().optional(),
          'newsletter.placeholder': z.string().optional(),
          'newsletter.button': z.string().optional(),
          'newsletter.disclaimer': z.string().optional(),
          'newsletter.success': z.string().optional(),
          'newsletter.errorRateLimit': z.string().optional(),
          'newsletter.errorRetry': z.string().optional(),
          'newsletter.errorNetwork': z.string().optional(),
          'newsletter.errorSubscribe': z.string().optional(),
        })
        .catchall(z.string()),
    }),
  }),
};
