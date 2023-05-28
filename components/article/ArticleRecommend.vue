<script setup>
const props = defineProps(["article", "class"]);
</script>

<template>
  <div>
    <ArticleCard class="text" :article="article" />
  </div>
</template>

<style scoped>
div {
  grid-column: 1 / -1;
  @media (min-width: 768px) {
    grid-column: 11 / span 2;
    grid-row: 20 / span 5;
  }
}
</style>
