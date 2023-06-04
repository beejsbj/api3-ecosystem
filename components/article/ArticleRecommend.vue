<script setup>
const props = defineProps(["article", "class"]);
</script>

<template>
  <div class="recommend">
    <ArticleCard class="text" :article="article" />
  </div>
</template>

<style scoped>
div.recommend {
  grid-column: 1 / -1;
  @media (min-width: 768px) {
    grid-column: 11 / span 2;
    grid-row: 20 / span 5;
  }
}
</style>
