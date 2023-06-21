<script setup>
import { useBlogStore } from "~/stores/blog";
const blog = useBlogStore();
</script>

<template>
  <PageHeader heading="Style Guide" />
  <SectionColumn>
    <SignButton />
  </SectionColumn>
</template>
