// plugins/floating-vue.ts
import { defineNuxtPlugin } from "#app";
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";

const FloatingVueConfig = {
  distance: 12,
  themes: {
    "api3-theme": {},
  },
};

export default defineNuxtPlugin(({ vueApp }) => {
  if (process.client) {
    FloatingVue.options.themes.tooltip.disabled = window.innerWidth <= 768;
  }
  vueApp.use(FloatingVue, FloatingVueConfig);
});
