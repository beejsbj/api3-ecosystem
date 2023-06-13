import { ref, computed, onUpdated } from "vue";
import { defineStore } from "pinia";
import { gsap } from "gsap";
// #todo make this store client only

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

  const heroImage = ref(null);

  function changeHeroImage(card) {
    heroImage.value = card.image;
    setTimeout(() => {}, 100);
    gsap.fromTo(
      "hero-landing .hero-graphic",
      { duration: 0, opacity: 0 },
      { duration: 1, opacity: 0.25 }
    );
    gsap.to("hero-landing .line-decoration", { duration: 0, scale: 0.6 });
    gsap.fromTo(
      "hero-landing .line-decoration path",
      { duration: 0, scale: 0 },
      { duration: 0.25, scale: 1, stagger: 0.05 }
    );
  }

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
    heroImage,

    changeHeroImage,
  };
});
