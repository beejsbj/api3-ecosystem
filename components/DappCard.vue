<script setup>
import slug from "slug";
const props = defineProps(["dapp"]);
</script>

<template>
  <dapp-card>
    <header>
      <picture>
        <img src="@/assets/images/square.jpg" alt="" />
      </picture>

      <p class="status">
        {{ dapp.status }}
      </p>
    </header>
    <text-content>
      <h2 class="attention-voice">{{ dapp.name }}</h2>
      <p class="whisper-voice">{{ dapp.tagline }}</p>
    </text-content>
    <footer>
      <ul class="category-list">
        <li class="solid-voice" v-for="category in dapp.category">
          {{ category }}
        </li>
      </ul>
      <ul class="product-list">
        <li class="solid-voice" v-for="product in dapp.product">
          {{ product }}
        </li>
      </ul>
      <NuxtLink :to="`/ecosystem/${slug(dapp.name)}`" class="button"
        >View Dapp</NuxtLink
      >
    </footer>
  </dapp-card>
</template>

<style scoped>
dapp-card {
  border: 2px solid var(--color);
  padding: 0.5rem;
  display: grid;
  grid-template-rows: 0.5fr 1fr 0.5fr;
  gap: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header picture {
  width: 50px;

  /* border-radius: 50%; */
}

footer {
  display: grid;
  gap: 0.5rem;
}

footer ul {
  display: flex;
  gap: 0.5rem;
}

.category-list,
.product-list {
  display: flex;
  gap: 0.5rem;
}
</style>
