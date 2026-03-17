import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const days = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/days' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    route: z.string().optional(),
    nextStop: z.string().optional(),
    hero: z.string(),          // לדוגמה: "day-001/hero.jpg"
    gallery: z.array(z.string()).default([]), // לדוגמה: ["day-001/metro.jpg", ...]
  }),
});

export const collections = { days };
