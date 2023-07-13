<script setup>
const ecosystem = useEcosystemStore();
</script>

<template>
  <PageHeader heading="Style Guide" />
  <SectionColumn>
    <div v-for="chain in ecosystem.chainOptions">
      <p>{{ chain.label }}</p>
      <!-- <ChainIcon :chain="chain.label" /> -->
    </div>
  </SectionColumn>
</template>

<style scoped>
div {
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  gap: 1rem;
}
</style>
