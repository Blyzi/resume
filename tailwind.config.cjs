/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'2xs': '.625rem',
				'3xs': '.5rem',
			},
		},
	},
	plugins: [],
}
