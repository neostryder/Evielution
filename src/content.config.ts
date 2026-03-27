import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		category: z.enum([
			'music',
			'games',
			'worldbuilding',
			'media',
			'workshop'
		]),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
		status: z
			.enum(['featured', 'in-progress', 'planned'])
			.default('planned'),
		visibility: z.enum(['public', 'unlisted']).default('unlisted'),
		featured: z.boolean().default(false),
		simulated: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
		callToAction: z.string().optional()
	})
});

const writing = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		category: z
			.enum(['essay', 'journal', 'fiction', 'note'])
			.default('note'),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
		visibility: z.enum(['public', 'unlisted']).default('unlisted'),
		featured: z.boolean().default(false),
		simulated: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
		publishedAt: z.coerce.date().optional()
	})
});

export const collections = {
	projects,
	writing
};
