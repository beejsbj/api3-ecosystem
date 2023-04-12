<script setup>
const dapps = reactive([1, 2, 3, 4, 5, 6]);
</script>

<template>
  <dapp-grid>
    <DappCard v-for="dapp in dapps" :key="dapp" />
  </dapp-grid>
</template>

<style scoped>
dapp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
}
</style>
