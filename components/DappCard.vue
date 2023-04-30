<script setup>
import slug from "slug";

const props = defineProps(["dapp"]);
</script>

<template>
  <dapp-card>
    <header>
      <h2 class="attention-voice">{{ dapp.name }}</h2>
      <picture class="logo">
        <img
          :src="dapp?.images?.logo"
          src="@/assets/images/square.jpg"
          alt=""
        />
      </picture>
      <div class="chain">eth</div>
    </header>

    <text-content>
      <!-- <h2 class="attention-voice">{{ dapp.name }}</h2> -->
      <p class="calm-voice">{{ dapp.tagline }}</p>
    </text-content>

    <footer>
      <div class="lists">
        <ul class="categories-list">
          <li class="whisper-voice" v-for="category in dapp.categories">
            {{ category }}
          </li>
        </ul>
        <ul class="integrations-list">
          <li class="whisper-voice" v-for="integration in dapp.integrations">
            {{ integration }}
          </li>
        </ul>
      </div>
      <p class="status" :class="dapp.status">
        {{ dapp.status }}
      </p>
      <!-- <NuxtLink :to="`/ecosystem/${slug(dapp.name)}`" class="button">
        View Dapp
      </NuxtLink> -->
    </footer>
  </dapp-card>
</template>

<style lang="scss" scoped>
dapp-card {
  padding: 2.5rem 1.25rem;
  display: grid;
  grid-template-rows: 0.5fr 1fr 0.5fr;
  gap: 1rem;
  border-radius: var(--corners);

  background: var(--dark-background);

  position: relative;

  &::after {
    content: "";
    display: block;
    border-radius: var(--corners);
    transform: scaleX(0);

    position: absolute;
    inset: -1px;
    z-index: -1;
    background: linear-gradient(90deg, var(--color), var(--highlight));

    box-shadow: var(--shadow);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.2s ease-in;
  }

  .calm-voice {
    font-size: 0.875rem;
  }
  .whisper-voice {
    font-size: 0.75rem;
  }
}
header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  picture {
    width: 50px;
    justify-self: end;
  }
  .chain {
    background-image: url("@/assets/images/chain.svg");
    background-size: cover;
    //  background-position: 0 center;
  }
}

text-content {
  align-self: center;
}

footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: end;
  gap: 0.5rem;

  .status {
    font-size: 0.75rem;
    text-align: right;
    font-weight: 700;
  }
  .status.Live {
    color: var(--success);
  }
  .status.Intent {
    color: var(--warning);
  }

  .lists {
    display: grid;
    gap: 0.5rem;
    ul {
      display: flex;
      gap: 0.5rem;
    }
  }
}
</style>
