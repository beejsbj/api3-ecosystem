<script setup>
import { useEcosystemStore } from "~/stores/ecosystem";
import { gsap } from "gsap";

const ecosystem = useEcosystemStore();

const { searchResults } = useFilteredSearch(ecosystem);

// function onBeforeEnter(el) {
//   el.style.opacity = 0;
// }

// function onEnter(el, done) {
//   console.log(el.dataset.index);
//   gsap.to(el, {
//     x: 0,
//     opacity: 1,
//     delay: el.dataset.index * 0.15,
//     //  ease: "bounce.out",
//     onComplete: done,
//   });
// }

// function onLeave(el, done) {
//   gsap.fromTo(
//     el,
//     { position: "absolute", zIndex: -5 },
//     {
//       opacity: 0,
//       onComplete: done,
//     }
//   );
// }

// function afterLeave(el, done) {
//   console.log(el.dataset.index);

//   gsap.to(el, {
//     position: "relative",
//     zIndex: 0,
//   });
// }
</script>

<template>
  <ClientOnly>
    <ul class="dapp-grid" v-auto-animate>
      <DappCard
        v-for="(dapp, index) in searchResults"
        :dapp="dapp"
        :key="dapp.name"
        :data-index="index"
        class="list-move hover-underline"
      />
    </ul>
  </ClientOnly>
</template>

<style scoped>
.dapp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  align-items: start;
  position: relative;
}

.list-move {
  transition: transform 0.5s;
}
</style>
