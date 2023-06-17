<script setup>
import { useBlogStore } from "@/stores/blog";

const blog = useBlogStore();
const props = defineProps(["layout", "cardCount"]);

const layouts = [
  ["card", "card", "card", "big-card", "slide", "text", "text", "text", "text"],
  ["big-card", "big-card", "card", "card", "card"],
  ["big-card", "slide", "big-card", "slide", "slide"],
  ["big-card", "slide", "text", "text", "text"],
  ["big-card", "big-card", "slide", "slide", "slide"],
  ["big-card", "card", "text", "text"],
  ["big-card"],
];

const layoutIndex = ref(props.layout ?? 0);

function cardType(index, layout = layouts[0]) {
  return layout[index % layout.length];
}
</script>

<template>
  <ul class="article-grid" v-auto-animate>
    <template v-for="(article, index) in blog.list">
      <ArticleCard
        :article="article"
        :class="cardType(index, layouts[layoutIndex])"
        v-if="index < (props.cardCount ?? blog.list.length)"
      />
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
