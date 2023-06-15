<script setup>
import { gsap } from "gsap";
import slug from "slug";
import { useBlogStore } from "@/stores/blog";
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
    <article>
      <!-- <ArticleSide /> -->
      <pre>
			{{ article }}
		</pre
      >

      <ArticleHeader :article="article" />

      <ContentRendererMarkdown :value="article" v-if="article" />
      <!--

      <ArticleSection
        v-for="section in article.sections"
        :key="section.heading"
        :section="section"
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
