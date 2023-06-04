// plugins/tooltip.client.js

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("focus", {
    beforeMount(el, binding) {
      el.setAttribute("data-tooltip", binding.value);
    },

    updated(el, binding) {
      el.setAttribute("data-tooltip", binding.value);
    },

    unmounted(el) {
      el.removeAttribute("data-tooltip");
    },

    getSSRProps(binding, vnode) {
      // you can provide SSR-specific props here
      return {};
    },
  });
});
// #todo fix thi
