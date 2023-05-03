<script setup>
const route = useRoute();
</script>

<template>
  <SiteHeader />
  <main :class="route.name">
    <slot />
  </main>
  <SiteFooter />
</template>
