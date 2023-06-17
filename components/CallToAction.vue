<script setup>
import { gsap } from "gsap";
import { useInterfaceStore } from "~/stores/interface";

const ui = useInterfaceStore();

onMounted(() => {
  const pageLoad = gsap.timeline({
    scrollTrigger: {
      trigger: ".cta-module",
    },
  });

  pageLoad.set(".cta-module", {
    opacity: 1,
  });

  //   pageLoad.fromTo(
  //     "cta-module picture, cta-module h2, cta-module button",
  //     {
  //       y: 50,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 0.5,
  //       ease: "power4.out",
  //       stagger: 0.25,
  //     }
  //   );
  //   pageLoad.fromTo(
  //     ".cta-module .curves-decoration path",
  //     {
  //       strokeDashoffset: -4000,
  //       strokeDasharray: -4000,
  //     },
  //     {
  //       opacity: 1,
  //       duration: 1,
  //       strokeDashoffset: 1,
  //       ease: "power2.inOut",
  //       // stagger: 0.01,
  //     }
  //   );
});
</script>

<template>
  <SectionColumn class="cta-module">
    <!-- <span class="line"></span> -->
    <picture class="curves-decoration">
      <CurvesDecoration />
    </picture>
    <cta-module>
      <text-content>
        <h2
          class="gradient-text"
          :class="{
            'booming-voice': !ui.isMobile,
            'loud-voice': ui.isMobile,
          }"
        >
          Join the decentralized revolution and publish your dapp on our site
          today!
        </h2>
        <button class="button filled">Join Now</button>
      </text-content>
      <picture class="graphic">
        <img src="@/assets/images/partner-logos.png" alt="" />
      </picture>
    </cta-module>
  </SectionColumn>
</template>

<style>
.cta-module inner-column {
  display: grid;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.cta-module .curves-decoration {
  position: absolute;
  bottom: -60px;
  left: 100px;
  transform: rotateY(180deg) rotate(-10deg) scaleX(1.4);
  z-index: -1;

  @media (min-width: 768px) {
    bottom: 0;
  }
}

.cta-module :is(h2, button, picture.graphic, .curves-decoration path) {
  /* opacity: 0; */
}
</style>

<style scoped lang="scss">
.cta-module span.line {
  position: absolute;
  height: 1px;
  background: var(--gradient-color);
  top: 0;
  right: 0;
  width: 100%;
}
cta-module {
  display: grid;
  align-items: start;
  gap: 2rem;
  position: relative;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 0.75fr;
  }

  text-content {
    display: grid;
    gap: 3rem;
    justify-items: start;
    order: 2;
    //  mix-blend-mode: difference;
    //  background-color: green;
    h2 {
      color: var(--color);
    }

    @media (min-width: 768px) {
      order: unset;
    }
  }
  picture.graphic {
    position: absolute;
    top: 0;
    left: 50%;
    //  transform: translateX(-50%);
    width: 100%;
    z-index: -1;
    //  background-color: green;
    //  mix-blend-mode: difference;

    @media (min-width: 768px) {
      position: static;
      // background-color: transparent;
    }
  }
}
</style>
