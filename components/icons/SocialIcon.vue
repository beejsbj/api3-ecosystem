<script setup>
const props = defineProps(["social"]);

const dynamicComponent = defineAsyncComponent(() =>
  import(`@/components/icons/socials/${props.social}Icon.vue`)
);
</script>

<template>
  <Component :is="dynamicComponent" />
</template>
