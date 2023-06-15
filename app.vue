<script setup>
const route = useRoute();

useHead({
  title: "API3 Ecosystem",
  bodyAttrs: {
    class: route.name,
  },
});

useServerSeoMeta({
  //#todo do the seo for the rest
  title: "API3 Ecosystem",
  ogTitle: "API3 Ecosystem",

  description: "This is the API3 Ecosystem",
  ogDescription: "This is the API3 Ecosystem",

  image: "/images/triangle.svg",
  ogImage: "/images/triangle.svg",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
