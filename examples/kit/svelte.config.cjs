const { optimizeCarbonImports } = require("carbon-components-svelte/preprocess");
const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: [
		optimizeCarbonImports(),
		sveltePreprocess(),
	],
	kit: {
		adapter: node(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
