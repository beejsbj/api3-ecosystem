<script setup>
const props = defineProps(["chain", "fill"]);
// #todo turn chains into vue components
</script>

<template>
  <picture :class="fill">
    {{ chainSVG }}
  </picture>
</template>

<style scoped>
picture {
}

picture.fill {
  fill: var(--paper);
}
</style>
