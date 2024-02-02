/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './primer.html', './src/**.*.{js,ts}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
			},
		},
		extend: {
			colors: {
				red: '#ed1c24',
				blue: '#072fdb',
				green: '#00ad4e',
				primary: '#429fc9',
			},
		},
	},
	plugins: [],
};
