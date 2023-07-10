<script setup>
import { gsap } from "gsap";

gsap.fromTo(
  "picture.loading-triangle path",
  {
    strokeDashoffset: "888",
    strokeDasharray: "888",
  },
  {
    duration: 3,
    strokeDashoffset: 0,
    ease: "power2.in",
    stagger: 0.05,
  }
);
</script>

<template>
  <picture class="loading-triangle">
    <DecorationTriangle />
  </picture>
</template>

<style scoped>
.loading-triangle {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-color: var(--gradient-dark);
}
</style>
