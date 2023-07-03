<script setup>
import { useEcosystemStore } from "~/stores/ecosystem";
import { gsap } from "gsap";

const ecosystem = useEcosystemStore();

const { searchResults } = useFilteredSearch(ecosystem);

watch(
  () => searchResults.value,
  (newVal) => {
    ecosystem.filter.count = newVal.length;
  }
);

onMounted(() => {
  const pageLoad = gsap.timeline();

  pageLoad.to(".dapp-grid", {
    opacity: 1,
    duration: 0,
  });

  if (document.querySelector("dapp-card")) {
    pageLoad.fromTo(
      "dapp-card",
      {
        y: "10vw",
        opacity: 0,
        duration: 0,
        delay: "0.5",
      },
      {
        y: "0vw",
        opacity: 1,
        duration: 0.5,
        stagger: {
          each: 0.15,
          from: "start",
        },
      }
    );
  }
});
</script>

<template>
  <ul class="dapp-grid" v-auto-animate>
    <DappCard
      v-for="(dapp, index) in searchResults"
      :dapp="dapp"
      :key="dapp?.name"
      :data-index="index"
    />
  </ul>
</template>

<style scoped>
.dapp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(425px, 1fr));
  gap: 2rem;
  align-items: start;
  position: relative;
  opacity: 0;
}

.list-move {
  transition: transform 0.5s;
}
</style>
