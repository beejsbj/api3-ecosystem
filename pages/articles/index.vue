<script setup>
//random number between 0 and 5
const random = Math.floor(Math.random() * 6);
</script>

<template>
  <PageHeader heading="Articles/Blog" />
  <SectionColumn>
    <ArticleGrid :layout="random" />
  </SectionColumn>
</template>
