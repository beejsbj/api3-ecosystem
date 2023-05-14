<template>
  <nav>
    <NuxtLink class="text" to="/">Home</NuxtLink>
    <NuxtLink class="text" to="/ecosystem">Ecosystem</NuxtLink>
    <!-- <NuxtLink to="/learn">Learn</NuxtLink> -->
    <NuxtLink class="text" to="/contact">Contact</NuxtLink>
    <!-- <NuxtLink to="/about">About</NuxtLink> -->
    <NuxtLink class="button" to="/add-dapp">Add</NuxtLink>
  </nav>
</template>
<style lang="scss" scoped>
nav:not(.panel-menu) {
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

nav.panel-menu {
  display: grid;

  //   align-items: end;
  //   justify-content: start;
  gap: 2em;
  padding: 2rem;

  a {
    color: var(--ink);
    font-size: var(--step-1);

    &.button {
      // justify-self: center;
      align-self: center;
    }
  }
}
</style>
