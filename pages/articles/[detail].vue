<script setup>
import { parseMarkdown } from "~/utils/parseMarkdown";

const route = useRoute();

const { data, error } = await useFetch(
  `/api/articles/article/${route.params.detail}`,
  { initialCache: true }
);

const article = ref(null);
const loadMarkdown = async () => {
  if (data.value.content) {
    console.log(data.value);

    article.value = await parseMarkdown(data.value);
  }
};
loadMarkdown();

useServerSeoMeta({
  title: () => article.value?.title,
  ogTitle: () => article.value?.title,
  ogType: () => "article",
  ogUrl: () => `#todo/articles/${data.id}`,
  description: () => article.value?.description,
  ogDescription: () => article.value?.description,
  image: () => article.value?.image,
  ogImage: () => article.value?.image,
  ogArticlePublishedTime: () => article.value?.date,
});

// const article = computed(() => {
//   return blog.list.find(
//     (article) => slug(article.title) === route.params.detail
//   );
// });[]

// article.value.sections = article.value.sections.map((section, index) => {
//   return {
//     ...section,
//     isHighlighted: index === 0 ? true : false,
//   };
// });

// onMounted(() => {
//   const pageLoad = gsap.timeline();

//   pageLoad
//     .to("article", {
//       opacity: 1,
//       duration: 0,
//     })

//     .fromTo(
//       ["h1", "h2", "article-meta div, aside"],
//       {
//         x: "-5vw",
//         opacity: 0,
//         delay: "0.5",
//         duration: 0,
//       },
//       {
//         x: "0vw",
//         opacity: 1,
//         duration: 0.5,
//         stagger: {
//           each: 0.15,
//           from: "start",
//         },
//       },
//       "0"
//     )
//     .fromTo(
//       "h1",
//       {
//         "--before-width": "0",
//         duration: 0,
//       },
//       {
//         "--before-width": "50%",
//         duration: 0.5,
//       }
//     )
//     .fromTo(
//       ["article > section > *"],
//       {
//         y: "10vw",
//         opacity: 0,
//         duration: 0,
//       },
//       {
//         y: "0vw",
//         opacity: 1,
//         duration: 0.5,
//         stagger: {
//           each: 0.08,
//           from: "start",
//         },
//       },
//       "1"
//     );
// });
</script>

<template>
  <SectionColumn innerClass="article">
    <article v-if="article">
      <ArticleSide :toc="article?.body?.toc" :title="article?.title" />

      <ArticleHeader :article="article" />

      <ContentRendererMarkdown
        :value="article"
        tag="article"
        v-if="article"
        class="body"
      />
      <!--

      <ArticleSection
        v-for="section in article.sections"
        :key="section.heading"
        :section="section"P
      />
      <ArticleRecommend :article="blog.list[0]" /> -->
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

  article.body {
    h2 {
      margin-bottom: 1.5rem;
      margin-top: 4rem;
    }

    h3 {
      margin-bottom: 1.5rem;
      margin-top: 2rem;
    }
    ul {
      margin-top: 1rem;
      display: grid;
      gap: 0.5rem;

      li {
        position: relative;
        --space: 1.5rem;
        left: var(--space);
        &::before {
          content: "";
          width: 8px;
          height: 8px;

          position: absolute;
          left: calc(-1 * var(--space));
          top: 50%;
          transform: translateY(-50%);

          background: url("/assets/images/triangle.svg");
          background-size: cover;
          background-position: center;
        }
      }
    }

    p {
      margin-top: 1rem;
    }

    li,
    p {
      letter-spacing: 0.02em;
      max-width: 70ch;
    }

    figure {
      margin: 2rem 0;
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 1rem;
      justify-items: start;

      position: relative;
      //   left: -10%;

      &::after {
        position: absolute;
        inset: 0;

        content: "";
        z-index: 1;
      }
    }

    code {
      margin: 2rem 0;
      padding: 2rem;
      background: var(--gradient-dark);
      border-radius: var(--corners);
      display: block;
      max-width: 70ch;
      color: var(--ink);
      position: relative;
      span {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: var(--step--2);
        cursor: pointer;
      }
    }
    & > blockquote {
      margin: 2rem 0;
      padding: 4rem;
      background: var(--gradient-dark);
      display: block;
      max-width: 70ch;
      color: var(--ink);
      position: relative;
      border-radius: var(--corners);
      //   overflow: hidden;
      z-index: 1;

      p {
        margin: 0;
        padding: 0;
        font-style: italic;
      }
      blockquote,
      p:last-child {
        margin-top: 1rem;
        color: var(--color);
        text-align: right;
        font-style: normal;
      }

      &::before {
        content: "“";
        position: absolute;
        top: 1rem;
        left: 1rem;
        font-size: 10rem;
        color: var(--highlight);
        z-index: -1;
        opacity: 0.5;
      }

      &::after {
        content: "";
        position: absolute;
        inset: -1px;
        z-index: -2;
        background: var(--gradient-color);
        border-radius: calc(var(--corners) + 3rem);
      }
    }

    & > * {
      position: relative;
      --height: 0;

      &::before {
        content: "";
        height: var(--height);
        width: 2px;

        position: absolute;
        left: -2rem;
        top: 50%;
        transform: translateY(-50%);

        background: var(--gradient-color);
        border-radius: var(--corners);

        transition: 0.1s;
      }
    }
    .highlight {
      --height: 100%;
    }
  }

  article > :not(aside) {
    grid-column: 1 / -1;
    @media (min-width: 768px) {
      grid-column: 4 / 10;
      //     padding: 2rem;
      //     gap: 2rem;
    }
  }
}
</style>

<style scoped lang="scss">
.article > article {
  //   opacity: 0;
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
</style>
