import { defineConfig } from 'astro/config';

const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

const site =
	process.env.SITE_URL ??
	(isCustomDomain
		? 'https://evielution.org'
		: 'https://neostryder.github.io');

const base = process.env.SITE_BASE ?? (isCustomDomain ? '/' : '/Evielution');

export default defineConfig({
	site,
	base,
	output: 'static'
});
