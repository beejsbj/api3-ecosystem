<script setup>
const route = useRoute();
const nuxtApp = useNuxtApp();
const loading = ref(false);

nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", async () => {
  loading.value = false;
  await nextTick();
});

useHead({
  bodyAttrs: {
    class: route.name,
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <!-- <LoadingScreen v-if="loading" /> -->
    <NuxtPage />
  </NuxtLayout>
</template>
