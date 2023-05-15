<script setup>
const props = defineProps(["heading"]);
</script>

<template>
  <SectionColumn innerClass="page-heading">
    <h1 class="loud-voice">{{ heading }}</h1>
  </SectionColumn>
</template>

<style lang="scss">
.page-heading {
  display: grid;
  justify-content: start;
  padding: 5rem 14px;
  h1 {
    padding: 5px 0;
    background: linear-gradient(
      var(--gradient-direction),
      var(--ink),
      var(--color)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
