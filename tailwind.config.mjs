/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'heading': ["CabinetGrotesk-Variable", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
			'body': ["SpaceGrotesk-Variable", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"]
		},
	},
	plugins: [],
}
