<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

definePageMeta({
  layout: "home",

  meta: [
    {
      hid: "home",
      name: "home",
    },
  ],
});

onMounted(() => {
  //   document.body.scrollTop = document.documentElement.scrollTop = 0;
  window.scroll({
    top: 0,
    left: 0,
  });

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    // toggleActions: "restart reset restart none",
    //  scroller: "main.index",
    // markers: "true",
  });
});
</script>

<template>
  <HeroLanding />
  <ScrollingStats />

  <MissionComponent />

  <SectionColumn class="home-article-grid">
    <h2 class="loud-voice">Read About us</h2>
    <ArticleGrid layout="4" cardCount="4" />
  </SectionColumn>

  <CallToAction />

  <SiteFooter />
</template>

<style lang="scss">
body:has(main.index) {
  @media (min-width: 1024px) {
    overflow: hidden;
  }
}
main.index {
  display: grid;
  gap: 3rem;
  inner-column {
    padding: 3rem 15px;
  }
  inner-column > h2 {
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    max-height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: mandatory;
    scroll-snap-type: y mandatory;
    scroll-snap-points-y: repeat(calc(100vh - 100px));

    display: grid;

    & > section:not(.scrolling-stats) {
      scroll-snap-align: start;
      scroll-padding-top: 15rem;
      inner-column {
        height: calc(100vh - 100px);
      }
      // padding-bottom: 5rem 0;
    }
    & > footer {
      scroll-snap-align: end;
      // scroll-padding-top: 15rem;
      inner-column {
        height: calc(50vh - 50px);
      }
    }
  }
}
</style>
