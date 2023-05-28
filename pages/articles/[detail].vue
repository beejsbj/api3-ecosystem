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
    <article>
      <ArticleSide />

      <header>
        <h1 class="loud-voice article-heading" :id="article.title">
          {{ article.title }}
        </h1>
        <h2 class="notice-voice" v-if="article.subtitle">
          {{ article.subtitle }}
        </h2>
        <article-meta>
          <div class="author">
            <picture>
              <img src="@/assets/images/author.svg" alt="" />
            </picture>
            <p class="solid-voice">
              {{ article.author }}
            </p>
          </div>
          <div class="date">
            <picture>
              <img src="@/assets/images/calendar-icon.svg" alt="" />
            </picture>
            <p class="solid-voice">
              {{ article.date_published }}
            </p>
          </div>
          <div class="tag">
            <picture>
              <img src="@/assets/images/bookmark-icon.svg" alt="" />
            </picture>
            <p class="solid-voice">
              {{ article.category }}
            </p>
          </div>
        </article-meta>
      </header>

      <ArticleSection
        v-for="section in article.sections"
        :key="section.heading"
        :section="section"
      />
      <ArticleRecommend :article="blog.list[0]" />
    </article>
  </SectionColumn>
</template>

<style lang="scss">
inner-column.article {
  display: grid;
  gap: 1rem;
  padding: 5rem 2rem;
  align-items: start;
  position: relative;
}
</style>

<style scoped lang="scss">
article {
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  align-items: start;
  //   background-color: var(--black);
  //   max-width: 80ch;
  //   padding: 1rem;
  & > * > :not(aside) {
    grid-column: 1 / -1;
    @media (min-width: 768px) {
      //     padding: 2rem;
      //     gap: 2rem;
      grid-column: 4 / 10;
    }
  }
}

header {
  grid-column: 1 / -1;
  @media (min-width: 768px) {
    grid-column: 5 / -1;
  }
  display: grid;
  grid-template-columns: auto auto;
  align-items: start;
  justify-content: start;
  position: relative;
  margin-bottom: 4rem;

  h1 {
    position: relative;

    padding: 5px 0;
    background: linear-gradient(
      var(--gradient-direction),
      var(--ink),
      var(--color)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::before {
      content: "";
      position: absolute;
      top: -1rem;
      left: 0;

      --width: 50%;

      width: var(--width);
      height: 1px;
      background: var(--gradient-light);

      @media (min-width: 768px) {
        --width: 6rem;

        top: 50%;
        left: calc(-1 * var(--width) - 2rem);
        transform: translateY(-50%);
      }
    }
  }

  article-meta {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 0.5rem;
    .solid-voice {
      font-size: var(--step--1);
    }
    div {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      picture {
        max-width: 15px;
      }
    }
  }
}
</style>
