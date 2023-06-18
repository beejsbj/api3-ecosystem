<script setup>
const props = defineProps(["article"]);

console.log(props.article);

const datePublished = computed(() => {
  const date = new Date(props.article.date_published);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});
</script>

<template>
  <header v-if="article">
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
          {{ datePublished }}
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
</template>

<style scoped lang="scss">
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

      width: var(--before-width);
      height: 1px;
      background: var(--gradient-light);

      @media (min-width: 768px) {
        top: 50%;
        left: calc(-1 * var(--before-width) - 2rem);
        transform: translateY(-50%);
      }
    }
  }

  article-meta {
    display: grid;
    gap: 1rem;
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
