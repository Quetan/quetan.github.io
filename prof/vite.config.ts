import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				primer: resolve(__dirname, 'primer.html'),
			},
		},
	},
});
