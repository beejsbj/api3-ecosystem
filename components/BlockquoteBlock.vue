<script setup>
const props = defineProps(["quote", "source"]);
</script>

<template>
  <blockquote>
    <p>
      {{ quote }}
    </p>
    <figcaption>—{{ source }}</figcaption>
  </blockquote>
</template>

<style scoped lang="scss">
blockquote {
  margin: 2rem 0;

  padding: 4rem;
  background: var(--gradient-dark);
  display: block;
  max-width: 70ch;
  color: var(--ink);
  position: relative;
  border-radius: var(--corners);
  //   overflow: hidden;

  p {
    margin: 0;
    padding: 0;
    font-style: italic;
  }
  figcaption {
    margin-top: 1rem;
    color: var(--color);
    text-align: right;
    font-style: normal;
  }

  &::after {
    content: "“";
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 10rem;
    color: var(--highlight);
    z-index: 1;
    opacity: 0.5;
  }
  p::after {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -2;
    background: var(--gradient-color);
    border-radius: calc(var(--corners) + 3rem);
  }
}
</style>
