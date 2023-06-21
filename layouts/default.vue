<script setup>
const route = useRoute();
</script>

<template>
  <SiteHeader />
  <Transition name="fade" mode="out-in">
    <main :class="route.name">
      <slot />
    </main>
  </Transition>

  <SiteFooter v-if="route.name != 'add-dapp' || route.name !== 'add-dapp-2'" />

  <BlobAnimation />
  <!-- <BackgroundDecoration /> -->
</template>
