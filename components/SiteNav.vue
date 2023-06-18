<script setup></script>

<template>
  <nav>
    <NuxtLink class="text" to="/">Home</NuxtLink>
    <NuxtLink class="text" to="/ecosystem">Ecosystem</NuxtLink>
    <NuxtLink class="text" to="/articles">Articles</NuxtLink>
    <NuxtLink class="text" to="/contact">Contact</NuxtLink>
    <!-- <NuxtLink to="/about">About</NuxtLink> -->
    <NuxtLink class="button" to="/add-dapp">Connect</NuxtLink>
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
  gap: 1.5em;
  padding: 2rem;

  a {
    color: var(--ink);
    font-size: var(--step-1);

    &.button {
      justify-self: center;
      // align-self: center;
      min-width: 200px;
    }
  }
}
</style>
