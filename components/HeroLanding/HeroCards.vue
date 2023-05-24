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
    <hero-card class="item" v-for="card in showcaseCards">
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (min-width: 625px) {
    grid-column: 2 / -2;
    //  grid-template-columns: repeat(2, 1fr);
    .item:nth-last-of-type(1) {
      grid-column: 1 / -1;
    }
  }
  @media (min-width: 1120px) {
    //  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    padding: 0 2rem;
    .item:nth-last-of-type(1) {
      grid-column: unset;
    }
  }

  .item {
    border-radius: 50px;
    border-right: 1px solid var(--highlight);
    /* box-shadow: var(--shadow); */
    min-height: 250px;
    box-shadow: var(--shadow);
    @media (min-width: 768px) {
      box-shadow: unset;
      border-right: unset;
      border-left: 1px solid var(--color);
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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: var(--before-width);
    height: 1px;
    background: var(--gradient-color);
  }
}
</style>
