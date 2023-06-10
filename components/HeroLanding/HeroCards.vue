<script setup>
import { useInterfaceStore } from "~/stores/interface";
const ui = useInterfaceStore();

const showcaseCards = ref([
  {
    heading: "Ecosystem",
    paragraph: "Discover the various components of the blockchain ecosystem.",
    cta: "Explore Ecosystem",
    link: "/ecosystem",
    image: "/images/hero-graphic-ecosystem.svg",
  },
  {
    heading: "Developers",
    paragraph: "Learn how to build your own blockchain applications.",
    cta: "Get Started",
    link: "/developers",
    image: "/images/hero-ecosystem-gears.svg",
  },

  {
    heading: "Learning",
    paragraph: "Find the tools and resources you need to get started.",
    cta: "Explore Resources",
    link: "/learning",
    image: "/images/hero-ecosystem-articles.svg",
  },
]);
</script>
<template>
  <div class="items">
    <hero-card
      class="item"
      v-for="card in showcaseCards"
      @mouseover="ui.changeHeroImage(card)"
    >
      <picture>
        <img :src="card.image" alt="" />
      </picture>
      <text-content>
        <h2 class="firm-voice">
          {{ card.heading }}
        </h2>
        <p>
          {{ card.paragraph }}
        </p>
      </text-content>
    </hero-card>
  </div>
</template>
<style scoped lang="scss">
div.items {
  grid-column: 1 / -1;

  grid-row: 3 / span 1;
  display: grid;
  position: relative;
  align-items: start;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 0.25rem;

  @media (min-width: 625px) {
    grid-column: 2 / -2;

    .item:nth-of-type(1) {
      grid-column: 1 / -1;
    }
  }
  @media (min-width: 1120px) {
    padding: 0 2rem;
    .item:nth-of-type(1) {
      grid-column: unset;
    }
  }

  .item {
    --heroCard-corners: var(--corners);
    border-radius: var(--heroCard-corners);
    border-right: 1px solid var(--highlight);
    /* box-shadow: var(--shadow); */
    min-height: 250px;
    box-shadow: var(--shadow);
    position: relative;
    padding: 3rem;
    display: grid;
    align-items: center;
    //  grid-template-columns: 0.1fr 1fr;
    gap: 1.5rem;

    @media (min-width: 768px) {
      box-shadow: unset;
      border-right: unset;
      border-left: 1px solid var(--color);
    }

    picture {
      // aspect-ratio: 1 / 1;

      position: absolute;
      top: 50%;
      right: 2rem;
      transform: translateY(-50%);
      width: 150px;
      opacity: 0.5;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;

      inset: 0;
      left: -5px;
      border-radius: var(--heroCard-corners);
      border-right: 1px solid var(--highlight);

      @media (min-width: 768px) {
        border-left: 1px solid var(--color);
        border-right: unset;
      }
    }
    &::after {
      left: 3px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: var(--before-width);
    height: 1px;
    background: var(--gradient-color);
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
}
</style>
