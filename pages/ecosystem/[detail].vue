<script setup>
import { useEcosystemStore } from "~/stores/ecosystem";
const ecosystem = useEcosystemStore();
const { currentDapp: dapp } = storeToRefs(ecosystem);
</script>

<template>
  <template v-if="dapp">
    <DetailBanner />

    <SectionColumn class="detail-header">
      <detail-banner>
        <h1 class="loud-voice">{{ dapp.name }}</h1>
      </detail-banner>
    </SectionColumn>
    <SectionColumn class="detail-article">
      <article class="main">
        <DetailPanel :dapp="dapp" />

        <article>
          <section class="about">
            <h2 class="attention-voice">About</h2>
            <p v-for="paragraph in dapp.about" :key="paragraph">
              {{ paragraph }}
            </p>
          </section>

          <section class="">
            <h2 class="attention-voice">Artciles/Integrations</h2>
            <p v-for="paragraph in dapp.about" :key="paragraph">
              {{ paragraph }}
            </p>
          </section>

          <section class="screenshots">
            <h2 class="attention-voice">Screenshots</h2>
            <ul class="image-grid">
              <li v-for="image in dapp.images.screenshots" :key="image">
                <img src="@/assets/images/landscape.jpg" alt="" />
              </li>
            </ul>
          </section>
        </article>
      </article>
    </SectionColumn>
  </template>
</template>

<style lang="scss" scoped>
.detail-header {
  //   background: linear-gradient(
  //     0deg,
  //     hsla(300, 0%, 3%, 0) 10%,
  //     hsla(300, 0%, 3%, 1),
  //     hsla(300, 0%, 3%, 0) 80%
  //   );
  /* background-blend-mode: darken; */
}

article.main {
  display: grid;
  gap: 3rem;
  align-items: start;

  p {
    color: var(--gray);
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
}

article.main article {
  display: grid;
  gap: 2rem;
}

article.main article section {
  align-self: start;
  display: grid;
  gap: 1.2rem;
}

article.main .image-grid {
  display: grid;
  gap: 0.3125rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
