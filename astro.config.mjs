import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  output: 'server',
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
