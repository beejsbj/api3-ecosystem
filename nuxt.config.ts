export default defineNuxtConfig({
  //global default head metadata
  app: {
    head: {
      title: "API3 Ecosystem",

      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],

      link: [
        // favicon icon in assets/images
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      ],
    },
  },

  css: ["@/assets/styles/site.css", "@formkit/themes/genesis"],
  build: {
    transpile: ["gsap"],
  },

  vue: {
    compilerOptions: {
      //every tag with '-' is a custom element
      isCustomElement: (tag) => tag.includes("-"),
    },
  },

  modules: [
    "@formkit/nuxt",

    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "storeToRefs"],
      },
    ],
    [
      "@nuxt/content",
      {
        content: null,
        // https://content.nuxtjs.org/api/configuration
      },
    ],
  ],
  plugins: ["~/plugins/gsap.ts", "~/plugins/tooltip.ts"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  imports: {
    dirs: ["stores"],
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  runtimeConfig: {
    mongodbURI: process.env.DEV_DB_URL,
  },
});
