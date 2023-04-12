// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
	css: [
		'@/assets/styles/site.css',
	],

	vue: {
		compilerOptions: {
			//every tag with '-' is a custom element
			isCustomElement: (tag) => tag.includes("-"),
		},
	}
})
