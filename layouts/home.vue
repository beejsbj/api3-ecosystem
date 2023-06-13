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

  <BlobAnimation />
  <!-- <BackgroundDecoration /> -->
</template>
