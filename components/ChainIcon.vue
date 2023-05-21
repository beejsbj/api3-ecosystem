<script setup>
const props = defineProps(["chain", "fill", "stroke", "strokeWidth"]);
const dynamicComponent = defineAsyncComponent(() =>
  import(`@/components/icons/chains/${props.chain.toLowerCase()}.vue`)
);

props.fill = props.fill ?? "none";
props.stroke = props.stroke ?? "var(--color)";
props.chain = props.chain ?? "ethereum";

function handleHover() {
  console.log("hovered");
}
</script>

<template>
  <Component
    :is="dynamicComponent"
    :style="`
   ${fill ? `fill: ${fill};` : ''}
	${stroke ? `stroke: ${stroke};` : ''}
	${strokeWidth ? `stroke-width: ${strokeWidth};` : ''}
  `"
    @mousemove="handleHover()"
  />
</template>

<style scoped></style>
