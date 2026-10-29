import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const layout = (name: string) => fileURLToPath(new URL(`./src/lib/layouts/${name}.svelte`, import.meta.url));

export default defineConfig({
	plugins: [
		sveltekit({
			extensions: ['.svelte', '.svx'],
			preprocess: [
				mdsvex({
					extensions: ['.svx'],
					layout: { runbook: layout('runbook') }
				})
			],
			compilerOptions: {
				// Force runes mode for the project, except libraries and mdsvex output
				// (mdsvex wraps pages with legacy $$props). Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') || filename.endsWith('.svx')
						? undefined
						: true
			},

			adapter: adapter({ fallback: undefined })
		})
	]
});
