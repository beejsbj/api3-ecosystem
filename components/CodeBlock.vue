<script setup>
const props = defineProps(["content"]);

function copyCode(text) {
  navigator.clipboard.writeText(text);
}
</script>

<template>
  <code>
    <span @click="copyCode(content.text)">
      {{ content.language }}
    </span>
    <pre>{{ content.text }}</pre>
  </code>
</template>

<style scoped lang="scss">
code {
  margin: 2rem 0;
  padding: 2rem;
  background: var(--gradient-dark);
  border-radius: var(--corners);
  display: block;
  max-width: 70ch;
  color: var(--ink);
  position: relative;

  span {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: var(--step--2);
    cursor: pointer;
  }
}
</style>
