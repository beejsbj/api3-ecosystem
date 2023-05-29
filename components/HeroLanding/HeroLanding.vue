<script setup>
import { useInterfaceStore } from "@/stores/interface";
import { gsap } from "gsap";

const ui = useInterfaceStore();

onMounted(() => {
  const pageLoad = gsap.timeline();

  pageLoad.fromTo(
    "hero-landing .page-title",
    {
      delay: "0.5",
      duration: 0,
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",

      className: ui.isMobile
        ? "page-title loud-voice"
        : "page-title booming-voice",
    }
  );

  pageLoad.from("hero-landing .intro-paragraph", {
    duration: 0.5,
    y: 50,
    opacity: 0,
    ease: "power4.out",
  });

  pageLoad
    .to(
      "hero-landing",
      {
        duration: 0.5,
        "--before-width": "100%",
        opacity: 1,
        ease: "power4.inOut",
      },
      "-=1"
    )
    .fromTo(
      "hero-landing",
      {
        "--after-height": "0",
      },

      {
        duration: 0.5,
        "--after-height": ui.isMobile ? "25%" : "50%",
        ease: "power4.in",
      },
      "-=0.5"
    );
  pageLoad.from("hero-card", {
    duration: 0.5,
    x: 50,
    opacity: 0,
    ease: "power4.out",
    stagger: 0.2,
  });

  pageLoad.from(
    ".line-decoration path",
    {
      duration: 0.5,
      scale: 0,
      transformOrigin: "bottom right",
      stagger: { each: 0.1, from: "random" },
      ease: "power4.out",
    },
    "-=1"
  );
});
</script>

<template>
  <SectionColumn>
    <hero-landing>
      <picture class="line-decoration decoration">
        <LineDecoration />
      </picture>
      <h1 class="page-title">Unleash the Potential of Web3 dApps</h1>

      <div class="intro-paragraph">
        <picture>
          <LogoWhite />
        </picture>
        <p class="notice-voice">
          Experience the transformative power of blockchain technology through
          revolutionary applications that are reshaping various industries.
          Uncover the forefront of innovation and witness the game-changing
          potential of blockchain in action.
        </p>
      </div>
      <HeroCards />
      <CoinDecoration v-if="!ui.isMobile && false" />
    </hero-landing>
  </SectionColumn>
</template>

<style scoped lang="scss">
hero-landing {
  display: grid;
  row-gap: 4rem;
  position: relative;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  opacity: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);

    gap: 2rem;
    height: 100vh;
  }

  .line-decoration {
    position: absolute;
    top: -1rem;
    right: -1rem;
    scale: 0.6;
    transform-origin: top right;

    opacity: 0.5;
    @media (min-width: 768px) {
      scale: 1;
    }
  }

  .page-title {
    grid-column: 1 / -1;

    @media (min-width: 1194px) {
      grid-column: 2 / -6;
    }
    grid-row: 1 / span 1;
    padding: 15px 0;
    align-self: center;
  }

  .intro-paragraph {
    grid-row: 2 / span 1;
    grid-column: 1 / -1;

    display: grid;
    gap: 0.5rem;
    align-content: start;

    @media (min-width: 768px) {
      grid-column: 1 / -7;
      grid-template-columns: 0.1fr 1fr;
      gap: 2rem;
    }
    @media (min-width: 1194px) {
      grid-template-columns: repeat(6, 1fr);
      p {
        grid-column: 2 / -1;
      }
    }

    picture {
      aspect-ratio: 1 / 1;
      max-width: 50px;
      background-image: url("@/assets/images/dual-lines.svg");
      background-size: cover;
      background-position: center;

      @media (min-width: 768px) {
        max-width: 200px;
      }

      svg {
        filter: invert(1);
        mix-blend-mode: multiply;
      }
    }

    .notice-voice {
      font-size: var(--step-0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;

    width: var(--before-width);
    height: 1px;

    background: var(--color);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;

    width: 1px;
    background: var(--gradient-color);

    height: var(--after-height);
    @media (min-width: 768px) {
      height: var(--after-height);
    }
  }
}
</style>
