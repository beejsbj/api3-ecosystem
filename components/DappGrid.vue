<script setup>
import { useEcosystemStore } from "~/stores/ecosystem";

const ecosystem = useEcosystemStore();

const filtered = computed(() => {
  if (!ecosystem.filter.category.length) {
    console.log("returned list");
    return ecosystem.list;
  }
  console.log("filtered list");

  return ecosystem.list.filter((dapp) => {
    return ecosystem.filter.category.every((category) => {
      return dapp.categories.includes(category);
    });
  });
});

const searchResults = computed(() => {
  if (!ecosystem.filter.search) return filtered.value;
  return filtered.value.filter((dapp) => {
    return (
      dapp.name.toLowerCase().includes(ecosystem.filter.search.toLowerCase()) ||
      dapp.tagline
        .toLowerCase()
        .includes(ecosystem.filter.search.toLowerCase()) ||
      dapp.categories
        .join(" ")
        .toLowerCase()
        .includes(ecosystem.filter.search.toLowerCase()) ||
      dapp.integrations
        .join(" ")
        .toLowerCase()
        .includes(ecosystem.filter.search.toLowerCase()) ||
      dapp.chains
        .join(" ")
        .toLowerCase()
        .includes(ecosystem.filter.search.toLowerCase()) ||
      dapp.about
        .join(" ")
        .toLowerCase()
        .includes(ecosystem.filter.search.toLowerCase()) ||
      dapp.year == ecosystem.filter.search
    );
  });
});
</script>

<template>
  <dapp-grid>
    <DappCard v-for="dapp in searchResults" :dapp="dapp" />
  </dapp-grid>
</template>

<style scoped>
dapp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  /* align-items: start; */
}
</style>
