// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  buildModules: [
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
    
        'Playfair Display': {
          wght: [400, 700],
          ital: [400]
        },
      // 'Playfair Display': {
      //   ital: [0, 400, 500, 600, 700, 800, 1, 400, 500],
      // },
    },
    display: 'swap',
  },

  css: [
		'~/assets/main.css', '@/assets/fonts.css'
	],

  postcss: {
		plugins: {
		  tailwindcss: {},
		  autoprefixer: {},
		},
	},
}
