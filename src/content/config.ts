import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
    loader: undefined, // Default check. Astro v5 logic.
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

export const collections = { docs };
