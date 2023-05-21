<script setup>
const props = defineProps(["image", "alt", "caption"]);
</script>

<template>
  <figure>
    <img :src="image" :alt="alt" />
    <figcaption class="whisper-voice" v-if="caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
figure {
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1rem;

  position: relative;
  //   left: -10%;

  &::after {
    position: absolute;
    inset: 0;

    content: "";
    z-index: 1;
  }
}
</style>
