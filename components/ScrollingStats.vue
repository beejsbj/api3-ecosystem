<script setup>
import { gsap } from "gsap";

const ui = useInterfaceStore();
const graph = ref(null);

const cards = [
  {
    triggerClass: "stats-card.first",
    imagePath: "/images/hero-ecosystem-articles.svg",
  },
  {
    triggerClass: "stats-card.second",
    imagePath: "/images/hero-ecosystem-gears.svg",
  },
  {
    triggerClass: "stats-card.third",
    imagePath: "/images/hero-graphic-ecosystem.svg",
  },
];

const changeImage = (card, index) => {
  gsap.to("scrolling-stats .graph", {
    scrollTrigger: {
      scroller: ui.isMobile ? "" : "main.index",
      trigger: card.triggerClass,
      toggleActions: "play reset play reset",
      start: "top 30%",
      end: "bottom 70%",
    },

    onStart: () => {
      graph.value = card.imagePath;
      gsap.to("scrolling-stats", {
        "--after-height":
          index === 0 ? "5%" : index === 1 ? "50%" : index === 2 ? "95%" : "0%",
        duration: 1,
        ease: "power2.out",
      });
    },
  });
};

onMounted(() => {
  cards.forEach(changeImage);
});
</script>

<template>
  <SectionColumn class="scrolling-stats">
    <scrolling-stats>
      <stats-card class="first">
        <h2 class="loud-voice">Ecosystem Dashboard</h2>
        <p class="notice-voice">
          L
        </p>
      </stats-card>
      <stats-card class="second">
        <p class="notice-voice">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          praesentium explicabo provident error tempora. Tenetur, facilis
          eligendi exercitationem nihil voluptates omnis enim magnam ducimus
          alias nam sint mollitia quisquam totam.
        </p>
      </stats-card>
      <stats-card class="third">
        <p class="notice-voice">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          praesentium explicabo provident error tempora. Tenetur, facilis
          eligendi exercitationem nihil voluptates omnis enim magnam ducimus
          alias nam sint mollitia quisquam totam.
        </p>
      </stats-card>
      <picture class="graph">
        <img :src="graph" alt="" />
      </picture>
    </scrolling-stats>
  </SectionColumn>
</template>

<style lang="scss"></style>
<style scoped lang="scss">
scrolling-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  position: relative;
  align-items: center;
  justify-items: center;

  @media (min-width: 768px) {
    gap: 5rem;
  }

  stats-card {
    scroll-snap-align: center;
    grid-column: 1;
    height: 100vh;
    display: grid;
    align-items: center;
    align-content: center;

    .notice-voice {
      @media (max-width: 768px) {
        font-size: var(--step-0);
      }
    }
  }
  .graph {
    position: sticky;
    top: 50%;
    transform: translatey(-50%);
    grid-row: 1;
    grid-column: 2;
  }

  &::after {
    content: "";
    background: var(--gradient-color);
    position: absolute;
    top: 0;
    right: 0;

    width: 1px;
    height: var(--after-height);
  }
}
</style>
