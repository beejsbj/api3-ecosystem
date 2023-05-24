import { ref, computed, onUpdated } from "vue";
import { defineStore } from "pinia";

export const useInterfaceStore = defineStore("interface", function () {
  const mainMenuOpen = ref(false);
  const firstLoad = ref(true);

  function toggleMenu() {
    mainMenuOpen.value = !mainMenuOpen.value;
  }

  const isMobile = computed(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });

  const isTablet = computed(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 1024 && window.innerWidth >= 768;
  });

  const isDesktop = computed(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 1024;
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
    isTablet,
    isDesktop,
    firstLoad,
  };
});
