import { ref, computed, onUpdated } from "vue";
import { defineStore } from "pinia";

export const useInterfaceStore = defineStore("interface", function () {
  const mainMenuOpen = ref(false);
  function toggleMenu() {
    mainMenuOpen.value = !mainMenuOpen.value;
  }

  const isMobile = computed(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 450;
    }
  });

  function notify(message) {
    toast(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1500,
    });
  }

  return {
    mainMenuOpen,
    toggleMenu,
    notify,
    isMobile,
  };
});
