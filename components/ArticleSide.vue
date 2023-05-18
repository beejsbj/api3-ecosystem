<script setup>
import { useBlogStore } from "@/stores/blog";
const blog = useBlogStore();
const { currentArticle: article } = storeToRefs(blog);

function noHeading(section) {
  const firstPara = section.content.find((content) => {
    if (content.type === "paragraph") {
      return content;
    }
  });
  const paraStr = `${firstPara.text.slice(0, 17)}...`;

  return paraStr;
}
</script>

<template>
  <aside>
    <h3 class="notice-voice">TOC</h3>
    <ul class="toc-list">
      <li>
        <a class="text solid-voice" href="#{{ article.title }}">
          {{ article.title }}
        </a>
      </li>
      <li
        v-for="section in article.sections"
        :key="section.heading ?? noHeading(section)"
      >
        <a
          class="text solid-voice"
          :href="`#${section.heading ?? noHeading(section)}`"
        >
          {{ section.heading ?? noHeading(section) }}
        </a>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  @media (min-width: 768px) {
    position: sticky;
    top: 5rem;
  }
}
h3 {
  margin-bottom: 1.5rem;
}
.toc-list {
  display: grid;
  gap: 0rem;
  justify-content: start;

  a {
    padding-left: 0;
  }
}
</style>
