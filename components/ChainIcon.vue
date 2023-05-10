<script setup>
const props = defineProps(["chain", "fill", "stroke"]);
</script>

<template>
  <Component :is="chain" />
</template>

<style scoped>
picture {
}

picture.fill {
  fill: var(--paper);
}
</style>
