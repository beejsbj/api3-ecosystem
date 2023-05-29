<script setup>
import { gsap } from "gsap";
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
  // slide sections in while scrolling
  //   const sections = gsap.utils.toArray("main.index > section");
  //   sections.forEach((section) => {
  //     gsap.from(section, {
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top center",
  //         end: "bottom center",
  //         scrub: true,
  //         toggleActions: "play none none reverse",
  //       },
  //       xPercent: 100,
  //       ease: "none",
  //     });
  //   });
});
</script>

<template>
  <HeroLanding />
  <ScrollingStats />
  <PageHeader heading="Coming Sooooon!" voice="booming-voice" />

  <SectionColumn>
    <p class="attention-voice">
      This page is still under construction. Please check back later.
    </p>
  </SectionColumn>
</template>

<style lang="scss">
main.index {
  display: grid;
  gap: 5rem;
  @media (min-width: 1024px) {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: mandatory;
    scroll-snap-type: y mandatory;
    scroll-snap-points-y: repeat(100vh);

    display: grid;

    & > section {
      height: 100vh;
      scroll-snap-align: start;
      scroll-padding-top: 5rem;
    }
  }
}
</style>
