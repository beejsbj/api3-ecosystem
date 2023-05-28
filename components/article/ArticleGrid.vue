<script setup>
import { useBlogStore } from "@/stores/blog";

const blog = useBlogStore();

function cardType(index) {
  const types = [
    "card",
    "card",
    "card",
    "big-card",
    "slide",
    "text",
    "text",
    "text",
    "text",
  ];
  return types[index % types.length];
}
</script>

<template>
  <ul class="article-grid" v-auto-animate>
    <template v-for="(article, index) in blog.list">
      <ArticleCard :article="article" :class="cardType(index)" />
    </template>
  </ul>
</template>

<style scoped lang="scss">
.article-grid {
  display: grid;

  gap: 2rem;
  align-items: start;
  position: relative;

  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }
}
</style>
