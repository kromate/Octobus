module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	mode:'jit',
	theme: {
		extend: {
			spacing: {
				128: '32rem',
			},
			colors:{
				primary:'#000000',
				secondary:'#8F2A46',
				lightGray:'#F6F6F6',
				gray:'#A4A8BA',
				blue:'#2c58de0d',
			},
			boxShadow: {
				modal: '0 -9px 3px 11px rgba(2, 2, 2, 0.25)'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
