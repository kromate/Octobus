module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	mode: 'jit',
	theme: {
		extend: {
			spacing: {
				128: '32rem',
			},
			colors:{
				primary:'#000000',
				secondary:'#8F2A46',
				lightGray2:'#F6F6F6',
				lightGray:'#F3F4F7',
				gray:'#A4A8BA',
				blue:'#F4F6FA',
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
