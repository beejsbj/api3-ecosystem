<script setup>
import { useInterfaceStore } from "~/stores/interface";
const ui = useInterfaceStore();
</script>

<template>
  <nav v-if="!ui.isMobile">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/ecosystem">Ecosystem</NuxtLink>
    <!-- <NuxtLink to="/learn">Learn</NuxtLink> -->
    <NuxtLink to="/contact">Contact</NuxtLink>
    <!-- <NuxtLink to="/about">About</NuxtLink> -->
    <NuxtLink to="/add-dapp">Add</NuxtLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
}
</style>
