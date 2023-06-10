<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

definePageMeta({
  title: "My home page",
  meta: [
    {
      hid: "home",
      name: "home",
      content: "Home page home",
    },
  ],
});

onMounted(() => {
  //   document.body.scrollTop = document.documentElement.scrollTop = 0;
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  gsap.registerPlugin(ScrollTrigger);

  //   ScrollTrigger.defaults({
  //     toggleActions: "restart reset restart none",
  //     scroller: "main.index",
  //     markers: "true",
  //   });
});
</script>

<template>
  <HeroLanding />
  <ScrollingStats />
  <CallToAction />
  <PageHeader heading="Coming Sooooon!" voice="booming-voice" />

  <SectionColumn>
    <h2 class="loud-voice">Read About us</h2>
    <ArticleGrid layout="4" cardCount="4" />
  </SectionColumn>

  <SectionColumn>
    <p class="attention-voice">
      This page is still under construction. Please check back later.
    </p>
  </SectionColumn>
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
  gap: 5rem;
  @media (min-width: 1024px) {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: mandatory;
    scroll-snap-type: y mandatory;
    scroll-snap-points-y: repeat(calc(100vh - 100px));

    display: grid;

    & > section {
      scroll-snap-align: start;
      scroll-padding-top: 15rem;
      inner-column {
        height: calc(100vh - 100px);

        & > h2 {
          margin-bottom: 2rem;
        }
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
