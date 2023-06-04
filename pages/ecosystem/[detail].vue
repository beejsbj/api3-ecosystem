<script setup>
import { useEcosystemStore } from "~/stores/ecosystem";
import { gsap } from "gsap";
const ecosystem = useEcosystemStore();
const { currentDapp: dapp } = storeToRefs(ecosystem);

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
    <DetailBanner />

    <SectionColumn class="detail-header">
      <detail-banner>
        <PageHeader :heading="dapp?.name" />
      </detail-banner>
    </SectionColumn>
    <SectionColumn class="detail-main">
      <article class="main">
        <DetailPanel :dapp="dapp" v-if="dapp" />

        <detail-content>
          <section class="about">
            <h2 class="attention-voice">About</h2>
            <p v-for="paragraph in dapp?.about" :key="paragraph">
              {{ paragraph }}
            </p>
          </section>

          <section class="">
            <h2 class="attention-voice">Artciles/Integrations</h2>
            <p v-for="paragraph in dapp?.about" :key="paragraph">
              {{ paragraph }}
            </p>
          </section>

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
// .detail-page {
//   display: grid;
//   gap: 3rem;
//   align-items: start;
// }
.detail-header {
  //   background: linear-gradient(
  //     0deg,
  //     hsla(300, 0%, 3%, 0) 10%,
  //     hsla(300, 0%, 3%, 1),
  //     hsla(300, 0%, 3%, 0) 80%
  //   );
  /* background-blend-mode: darken; */
}

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
}
</style>
