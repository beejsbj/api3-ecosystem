<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/ecosystem">Ecosystem</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>
    <NuxtLink to="/add-dapp/1">Add</NuxtLink>
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
