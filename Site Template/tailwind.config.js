/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"**/*.{html, jsx, js}",
		"**/*.js",
		"**/*.html",
	],
	theme: {
		extend: {
			colors: {
				primary: "#155eef"
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				serif: ["Poppins", "serif"],
			}
		},
	},
	plugins: [],
}
