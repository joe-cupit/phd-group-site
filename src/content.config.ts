import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const publications = defineCollection({
  loader: glob({
    base: "./src/content/publications",
    pattern: "**/*.{md,mdx}",
  }),

  schema: () =>
    z.object({
      title: z.string(),
      authors: z.array(z.string()),
      journal: z.string(),
      date: z.date(),
      doi: z.string().url(),
    }),
});

export const collections = { publications };
