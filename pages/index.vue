<script setup>
definePageMeta({
  title: "My home page",
  meta: [
    {
      hid: "home",
      name: "home",
      content: "Home page home",
    },
  ],
});
</script>

<template>
  <HeroLanding />
  <PageHeader heading="Coming Sooooon!" voice="booming-voice" />

  <SectionColumn>
    <p class="attention-voice">
      This page is still under construction. Please check back later.
    </p>
  </SectionColumn>
</template>
