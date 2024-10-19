/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				pumking: "#cd4c3a"
			},
			fontFamily: {
				sans: ['Space Grotesk Variable', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
}
