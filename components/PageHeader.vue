<script setup>
import { gsap } from "gsap";
const props = defineProps(["heading", "voice", "innerClass"]);

onMounted(() => {
  const pageLoad = gsap.timeline();

  pageLoad.fromTo(
    ".page-title",
    {
      y: 50,
      opacity: 0,
      duration: 0,
      delay: "0.5",
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
    }
  );
});
</script>

<template>
  <SectionColumn :innerClass="'page-title ' + innerClass">
    <h1 :class="voice ? voice : 'loud-voice'">{{ heading }}</h1>
  </SectionColumn>
</template>

<style lang="scss">
.page-title {
  display: grid;
  justify-content: start;
  padding: 5rem 15px;
  //   opacity: 0;
}

h1 {
  padding: 5px 0;
  background: linear-gradient(
    var(--gradient-direction),
    var(--ink),
    var(--color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &.booming-voice {
    padding: 30px 0;
  }
}

main.ecosystem-detail .page-title {
  padding: 3rem 15px;
}
</style>
