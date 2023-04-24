<script setup>
const ecosystem = useEcosystemStore();
const { currentDapp: dapp } = storeToRefs(ecosystem);
</script>

<template>
  <article v-if="dapp">
    <DetailBanner :dapp="dapp" />
    <SectionColumn class="detail-header">
      <detail-banner>
        <h1 class="loud-voice">{{ dapp.name }}</h1>
      </detail-banner>
    </SectionColumn>
    <SectionColumn class="detail-main">
      <main>
        <DetailPanel :dapp="dapp" />

        <section class="about">
          <h2 class="attention-voice">About</h2>
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
      </main>
    </SectionColumn>
  </article>
</template>

<style scoped>
.detail-header {
  background: linear-gradient(
    0deg,
    hsla(300, 0%, 3%, 1) 20%,
    hsla(300, 0%, 3%, 0)
  );
}

article main {
  display: grid;

  gap: 1rem;
}
@media (min-width: 768px) {
  article main {
    grid-template-columns: 1fr 2fr;
  }
}

main .about {
  align-self: start;
  display: grid;
  gap: 1.2rem;
}
</style>
