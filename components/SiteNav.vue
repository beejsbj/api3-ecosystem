<script setup></script>

<template>
  <nav>
    <NuxtLink
      to="https://discord.com/invite/qnRrcfnm5W"
      class="icon social-icon"
    >
      <SocialIcon social="Discord" />
    </NuxtLink>
    <NuxtLink class="text" to="/">Home</NuxtLink>
    <NuxtLink class="text" to="/ecosystem">Ecosystem</NuxtLink>
    <NuxtLink class="text" to="/articles">Articles</NuxtLink>
    <!-- <NuxtLink to="/about">About</NuxtLink> -->
    <div class="actions">
      <!-- <ConnectButton /> -->
    </div>
  </nav>
</template>
<style lang="scss" scoped>
.social-icon {
  width: 35px;
  padding: 0.5rem;
  border: unset;
  margin-right: 1rem;
}

:deep(.loud-button) {
  padding: 0.5rem 2rem;
  @media (min-width: 768px) {
    margin-left: 2rem;
  }
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
}
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
