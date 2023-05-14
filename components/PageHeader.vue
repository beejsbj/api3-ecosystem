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
  padding: 5rem 14px;
  h1 {
    background: linear-gradient(to right, var(--ink), var(--color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
