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
</script>

<template>
  <ul class="dapp-grid" v-auto-animate>
    <DappCard
      v-for="(dapp, index) in searchResults"
      :dapp="dapp"
      :key="dapp.name"
      :data-index="index"
      class="list-move hover-underline"
    />
  </ul>
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
