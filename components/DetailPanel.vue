<script setup>
const props = defineProps(["dapp"]);
</script>

<template>
  <aside class="panel">
    <header class="panel-header">
      <picture class="logo">
        <img :src="dapp.images.logo" alt="" />
      </picture>
      <h2 class="teaser-voice">
        {{ dapp.tagline }}
      </h2>
    </header>
    <article class="rows">
      <div class="row status">
        <p>Status</p>
        <p>{{ dapp.status }}</p>
      </div>
      <div class="row chain">
        <p>Chain</p>
        <p>{{ dapp.chain }}</p>
      </div>
      <div class="year row">
        <p>Year</p>
        <p>{{ dapp.year }}</p>
      </div>
      <div class="row category-list">
        <p>Category</p>
        <ul>
          <li v-for="category in dapp.category" :key="category">
            {{ category }}
          </li>
        </ul>
      </div>
      <div class="row product-list">
        <p>Product</p>
        <ul>
          <li v-for="product in dapp.product" :key="product">
            {{ product }}
          </li>
        </ul>
      </div>
      <div class="row socials">
        <p>Socials</p>
        <ul>
          <li v-for="social in dapp.links.socials" :key="social.label">
            <a :href="social.url" :target="social.label">
              {{ social.label }}
            </a>
          </li>
        </ul>
      </div>
    </article>
    <div class="actions">
      <NuxtLink :to="dapp.links.website" class="button"> Website </NuxtLink>
      <!-- Launch dapp -->
      <NuxtLink :to="dapp.links.dapp" class="button">Launch</NuxtLink>
      <button class="button">Upvote</button>
      <button class="button">Share</button>
    </div>
  </aside>
</template>
<style lang="scss" scoped>
aside {
  display: grid;
  grid-column: 1 / 1;
  gap: 1rem;

  .panel-header {
    display: grid;
    justify-items: center;
    gap: 1rem;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
  }
  div.row {
    border-bottom: 1px solid var(--color);
  }
}
</style>
