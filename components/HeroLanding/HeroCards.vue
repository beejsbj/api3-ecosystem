<script setup>
const showcaseCards = ref([
  {
    heading: "Ecosystem",
    paragraph: "Discover the various components of the blockchain ecosystem.",
    cta: "Explore Ecosystem",
    link: "/ecosystem",
  },
  {
    heading: "Developers",
    paragraph: "Learn how to build your own blockchain applications.",
    cta: "Get Started",
    link: "/developers",
    image: "/images/hero-developers.png",
  },

  {
    heading: "Learning",
    paragraph: "Find the tools and resources you need to get started.",
    cta: "Explore Resources",
    link: "/learning",
  },
]);
</script>
<template>
  <div class="items">
    <showcase-card class="item" v-for="card in showcaseCards">
      <picture>
        <LogoWhite />
      </picture>
      <text-content>
        <h2 class="firm-voice">
          {{ card.heading }}
        </h2>
        <p>
          {{ card.paragraph }}
        </p>
      </text-content>
    </showcase-card>
  </div>
</template>
<style scoped lang="scss">
div.items {
  grid-column: 1 / -1;

  grid-row: 3 / span 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: 768px) {
    grid-column: 2 / -2;
  }

  padding: 0 2rem;
  overflow-x: scroll;
  position: relative;

  .item {
    border-radius: 50px;
    border-left: 1px solid var(--color);
    /* box-shadow: var(--shadow); */
    box-shadow: var(--shadow);
    @media (min-width: 768px) {
      box-shadow: unset;
    }

    padding: 3rem;
    display: grid;
    align-items: center;
    grid-template-columns: 0.1fr 1fr;
    gap: 2rem;

    picture {
      aspect-ratio: 1 / 1;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--gradient-color);
  }
}
</style>
