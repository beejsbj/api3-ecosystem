<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/ecosystem">Ecosystem</NuxtLink>
    <!-- <NuxtLink to="/learn">Learn</NuxtLink> -->
    <NuxtLink to="/contact">Contact</NuxtLink>
    <!-- <NuxtLink to="/about">About</NuxtLink> -->
    <NuxtLink class="button" to="/add-dapp">Add</NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>
nav:not(.modal-menu) {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;

  a {
    color: var(--ink);
  }

  .button {
    margin-left: 2rem;
  }
}

nav.modal-menu {
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  background: var(--gradient-dark);

  a {
    color: var(--ink);
  }
}
</style>
