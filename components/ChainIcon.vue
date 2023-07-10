<script setup>
const props = defineProps(["chain", "fill", "stroke", "strokeWidth"]);

const dynamicComponent = defineAsyncComponent(() =>
  import(`@/components/icons/chains/${props.chain?.toLowerCase()}.vue`)
);
</script>

<template>
  <Component
    :is="dynamicComponent"
    :style="`
   	fill: ${props.fill ? props.fill : 'none'};
      stroke: ${props.stroke ? props.stroke : 'var(--color)'};
      ${props.strokeWidth ? `stroke-width: ${props.strokeWidth};` : ''}
  `"
    v-tooltip="props.chain"
    v-if="props.chain"
  />
</template>

<style scoped></style>
