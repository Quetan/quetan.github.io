import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [],
	build: {
		target: 'es2022',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				courses: resolve(__dirname, 'courses.html'),
			},
		},
	},
});
