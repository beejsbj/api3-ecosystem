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
  gap: 2.5em;
  padding: 2rem;

  a {
    color: var(--ink);
    font-size: var(--step-1);

    &.button {
      // justify-self: center;
    }
  }
}
</style>
