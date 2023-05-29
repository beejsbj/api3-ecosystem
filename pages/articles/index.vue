<script setup>
import slug from "slug";
import { useBlogStore } from "@/stores/blog";

const blog = useBlogStore();
</script>

<template>
  <PageHeader heading="Articles/Blog" />

  <SectionColumn>
    <ArticleGrid />
  </SectionColumn>
</template>
