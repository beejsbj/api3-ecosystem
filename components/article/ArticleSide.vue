<script setup>
const props = defineProps(["toc", "title"]);

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
        <a class="text solid-voice" :href="'#' + title">
          {{ title }}
        </a>
      </li>
      <li v-for="link in toc.links" :key="link.id">
        <a class="text solid-voice" :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  grid-row: 2 / 10;
  grid-column: 1 / -1;
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    grid-column: 1 / 3;

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
