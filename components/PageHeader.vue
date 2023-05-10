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
}
</style>
