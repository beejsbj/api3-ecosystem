<script setup>
import { gsap } from "gsap";

const route = useRoute();

const { data: dapp, error } = await useFetch(
  `/api/projects/project/${route.params.detail}`,
  {
    initialCache: true,
    onResponse({ request, response, options }) {
      // Process the response data

      const dapp = response._data;

      useServerSeoMeta({
        title: () => dapp.name,
        ogTitle: () => dapp.name,

        ogType: () => "article",
        ogUrl: () => `/ecosystem/${dapp._id}`,
        ogArticlePublishedTime: () => dapp.year,

        description: () => dapp.tagline,
        ogDescription: () => dapp.tagline,

        image: () => dapp.images?.banner,
        ogImage: () => dapp.images?.banner,
      });
    },
  }
);

onMounted(() => {
  const pageLoad = gsap.timeline();

  pageLoad.to(".detail-page", { opacity: 1, duration: 0 }).fromTo(
    [
      ".detail-page .banner",
      "aside > *",
      ".detail-page detail-content section",
    ],
    {
      delay: "0.5",
      y: "10vw",
      opacity: 0,
      duration: 0,
    },
    {
      y: "0vw",
      opacity: 1,
      duration: 0.5,
      stagger: {
        each: 0.2,
        from: "start",
      },
    }
  );
});
</script>

<template>
  <article class="detail-page">
    <DetailBanner :dapp="dapp" />

    <SectionColumn class="detail-main">
      <article class="main">
        <PageHeader
          class="dapp-title"
          :heading="dapp?.name"
          innerClass="none"
        />

        <DetailPanel :dapp="dapp" v-if="dapp" />
        <detail-content>
          <section class="about">
            <h2 class="attention-voice">About</h2>
            <p v-for="paragraph in dapp?.description" :key="paragraph">
              {{ paragraph }}
            </p>
          </section>

          <DappProxies :dapp="dapp" v-if="dapp" />

          <section class="screenshots">
            <h2 class="attention-voice">Screenshots</h2>
            <ul class="image-grid">
              <li v-for="image in dapp?.images.screenshots" :key="image">
                <img src="@/assets/images/landscape.jpg" alt="" />
              </li>
            </ul>
          </section>
        </detail-content>
      </article>
    </SectionColumn>
  </article>
</template>

<style lang="scss" scoped>
.detail-page,
.banner {
  opacity: 0;
}

article.main {
  display: grid;
  gap: 4rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
}

article.main detail-content {
  display: grid;
  gap: 4rem;
  //   grid-column: 2;
  //   grid-row: 2;

  section {
    align-self: start;
    display: grid;
    gap: 1.2rem;

    p {
      line-height: 1.8;
      color: var(--gray);
    }
  }
}

article.main .image-grid {
  display: grid;
  gap: 0.3125rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto auto;
}

:deep(.dapp-title) {
  //   grid-column: 2;
}
</style>
