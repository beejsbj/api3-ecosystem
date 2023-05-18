<script setup>
import { useBlogStore } from "@/stores/blog";
const blog = useBlogStore();
const { currentArticle: article } = storeToRefs(blog);
article.value.sections = article.value.sections.map((section, index) => {
  return {
    ...section,
    isHighlighted: index === 0 ? true : false,
  };
});
</script>

<template>
  <SectionColumn innerClass="article">
    <ArticleSide />
    <article>
      <header>
        <h1 class="loud-voice article-heading" :id="article.title">
          {{ article.title }}
        </h1>
        <article-meta>
          <p class="solid-voice">{{ article.author }}</p>
          <p class="solid-voice">{{ article.date_published }}</p>
          <p class="solid-voice">
            {{ article.category }}
          </p>
        </article-meta>
      </header>

      <template v-for="section in article.sections" :key="section.heading">
        <ArticleSection :section="section" />
      </template>
    </article>
  </SectionColumn>
</template>

<style lang="scss">
inner-column.article {
  display: grid;
  gap: 1rem;
  padding: 5rem 2rem;
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 5fr;
  }
}
</style>

<style scoped lang="scss">
article {
  display: grid;
  gap: 4rem;
  align-items: start;
  //   background-color: var(--black);
  //   max-width: 80ch;
  //   padding: 1rem;
}

header {
  display: grid;

  align-items: start;
  //   justify-content: start;

  h1 {
    padding: 5px 0;
    background: linear-gradient(
      var(--gradient-direction),
      var(--ink),
      var(--color)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .solid-voice {
    font-size: var(--step--1);
  }
}
</style>
