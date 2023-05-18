<script setup>
import slug from "slug";
import { useBlogStore } from "@/stores/blog";

const blog = useBlogStore();
</script>

<template>
  <PageHeader heading="Articles/Blog" />

  <SectionColumn>
    <p class="attention-voice">
      This page is still under construction. Please check back later.
    </p>
    <ul>
      <li v-for="article in blog.list">
        <NuxtLink :to="slug(article.title)">{{ article.title }}</NuxtLink>
      </li>
    </ul>
  </SectionColumn>
</template>
