<script setup>
import { useEcosystemStore } from "~/stores/ecosystem";
const ecosystem = useEcosystemStore();
const { currentDapp: dapp } = storeToRefs(ecosystem);
</script>

<template>
  <SectionColumn v-if="dapp" class="banner" innerClass="none">
    <picture>
      <img
        :src="dapp?.images?.banner"
        src="@/assets/images/landscape.jpg"
        alt=""
      />
    </picture>
  </SectionColumn>
</template>

<style lang="scss" scoped>
.banner {
  //   position: relative;
  //   top: 4rem;
  //   z-index: -1;
  margin-top: 5rem;
  picture {
    overflow: hidden;
    aspect-ratio: 8 / 2;
    border-radius: var(--corners);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
