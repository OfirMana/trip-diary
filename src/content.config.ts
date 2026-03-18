import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const days = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/days' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    chapter: z.string().optional(),
    summary: z.string(),
    route: z.string().optional(),
    nextStop: z.string().optional(),
    hero: z.string(),
    gallery: z.array(z.string()).default([]),
    map: z.object({
      center: z.object({
        lat: z.number(),
        lng: z.number(),
      }),
      zoom: z.number().optional().default(8),
      stops: z.array(
        z.object({
          name: z.string(),
          lat: z.number(),
          lng: z.number(),
          note: z.string().optional(),
        })
      ).default([]),
    }).optional(),
  }),
});

export const collections = { days };
