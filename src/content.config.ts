import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const group = defineCollection({
  loader: glob({
    base: "./src/content/group",
    pattern: "**/*.{md,mdx}",
  }),

  schema: ({ image }) =>
    z.object({
      name: z.string(),
      position: z.string(),
      email: z.string(),
      summary: z.string().optional(),
      profileImage: image().optional(),
      links: z.record(z.string().url()).optional(),
    }),
});

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

export const collections = { group, publications };
