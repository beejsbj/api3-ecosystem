<script setup>
const props = defineProps(["chain", "fill", "stroke", "strokeWidth"]);

const dynamicComponent = defineAsyncComponent(() =>
  import(`@/components/icons/chains/${props.chain.name.toLowerCase()}.vue`)
);

function handleHover() {
  console.log("hovered");
}
</script>

<template>
  <Component
    :is="dynamicComponent"
    :style="`
   	fill: ${props.fill ? props.fill : 'none'};
      stroke: ${props.stroke ? props.stroke : 'var(--color)'};
      ${props.strokeWidth ? `stroke-width: ${props.strokeWidth};` : ''}
  `"
    @mousemove="handleHover()"
  />
</template>

<style scoped></style>
