<script setup>
const props = defineProps(["innerClass"]);
</script>

<template>
  <section>
    <inner-column :class="innerClass">
      <slot />
    </inner-column>
  </section>
</template>
