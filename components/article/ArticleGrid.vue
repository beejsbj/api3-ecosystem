<script setup>
import { useBlogStore } from "@/stores/blog";

const blog = useBlogStore();

const layoutOne = [
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

const layoutTwo = ["big-card", "big-card", "card", "card", "card"];

const layoutThree = ["big-card", "slide", "big-card", "slide", "slide"];

const layoutFour = ["big-card", "slide", "text", "text", "text"];

function cardType(index, layout = layoutOne) {
  return layout[index % layout.length];
}
</script>

<template>
  <ul class="article-grid" v-auto-animate>
    <template v-for="(article, index) in blog.list">
      <ArticleCard :article="article" :class="cardType(index, layoutFour)" />
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
