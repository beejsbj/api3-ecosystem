<script setup>
import { useEcosystemStore } from "~/stores/ecosystem";

const ecosystem = useEcosystemStore();
</script>

<template>
  <dapp-grid>
    <DappCard v-for="dapp in ecosystem.list" :dapp="dapp" />
  </dapp-grid>
</template>

<style scoped>
dapp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
}
</style>
