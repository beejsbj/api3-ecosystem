<script setup>
const route = useRoute();

useHead({
  bodyAttrs: {
    class: route.name,
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
