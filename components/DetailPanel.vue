<script setup>
const props = defineProps(["dapp"]);

const upvotes = ref(0);
const showShareBox = ref(false);
</script>

<template>
  <aside class="panel">
    <header class="panel-header">
      <picture class="logo">
        <img
          :src="dapp?.images?.logo"
          src="@/assets/images/square.jpg"
          alt=""
        />
      </picture>
      <h2 class="teaser-voice">
        {{ dapp.tagline }}
      </h2>
    </header>
    <article class="rows">
      <!-- <div class="row status">
        <p>Status</p>
        <p>{{ dapp.status ? "Live" : "Beta" }}</p>
      </div> -->

      <div class="row chain">
        <p>Chain</p>
        <ul>
          <li v-for="chain in dapp.chains" :key="chain.id">
            <!-- {{ chain }} -->
            <picture class="chain">
              <ChainIcon
                :chain="chain.name"
                fill="var(--color)"
                stroke="var(--paper)"
                strokeWidth="15%"
              />
            </picture>
          </li>
        </ul>
      </div>

      <div class="year row">
        <p>Year</p>
        <p>{{ dapp.year }}</p>
      </div>

      <div class="row category-list">
        <p>Category</p>
        <ul>
          <li v-for="category in dapp.categories" :key="category">
            {{ category }}
          </li>
        </ul>
      </div>

      <div class="row product-list">
        <p>productTypes</p>
        <ul>
          <li v-for="productType in dapp.productTypes" :key="productType">
            {{ productType }}
          </li>
        </ul>
      </div>

      <div class="row socials">
        <p>Socials</p>
        <ul>
          <li v-for="social in dapp.links.socials" :key="social.id">
            <a :href="social.url" :target="social.name">
              <SocialIcon :social="social.label" />
            </a>
          </li>
        </ul>
      </div>
    </article>

    <div class="actions">
      <NuxtLink
        :to="dapp.links?.website"
        :target="`${dapp.name}-website`"
        class="button"
      >
        Website
      </NuxtLink>
      <!-- Launch dapp -->
      <NuxtLink
        :to="dapp.links.dapp"
        :target="`${dapp?.name}-app`"
        class="button"
        >Launch</NuxtLink
      >
      <button class="button" @click="upvotes++">Upvote ({{ upvotes }})</button>
      <button class="button" @click="showShareBox = !showShareBox">
        Share
      </button>

      <ModalSlot
        :showModal="showShareBox"
        @toggle="showShareBox = !showShareBox"
      >
        <ShareComponent :dappLinks="dapp.links" />
      </ModalSlot>
    </div>
  </aside>
</template>
<style lang="scss" scoped>
aside {
  display: grid;
  grid-column: 1 / 1;
  gap: 3rem;

  .panel-header {
    display: grid;
    justify-items: center;
    gap: 1rem;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 1rem 0;
    align-items: center;
  }
  div.row {
    border-bottom: 1px solid var(--gray-dark);
  }
}

.chain {
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;

    picture.chain {
      aspect-ratio: 1/1;
    }
  }
}
.socials {
  ul {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    align-items: center;
  }
}

.logo {
  border-radius: 50%;
  max-width: 100px;
}
</style>
