<script setup>
const ecosystem = useEcosystemStore();
const { currentDapp: dapp } = storeToRefs(ecosystem);
</script>

<template>
  <!-- <Teleport v-if="dapp" to="header .teleport-target"> -->
  <SectionColumn v-if="dapp" class="banner" innerClass="none">
    <picture>
      <img :src="dapp.images.banner" alt="" />
    </picture>
  </SectionColumn>
  <!-- </Teleport> -->
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  top: 4rem;
  z-index: -1;

  picture {
    overflow: hidden;
    aspect-ratio: 6 / 2;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
