<script setup>
const props = defineProps(["social", "fill"]);

const dynamicComponent = defineAsyncComponent(() =>
  import(`@/components/icons/socials/${props.social}Icon.vue`)
);
</script>

<template>
  <Component
    :is="dynamicComponent"
    :style="`
   ${fill ? `fill: ${fill};` : 'fill: #81838C'}
  `"
  />
</template>
