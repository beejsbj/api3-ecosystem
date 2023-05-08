<script setup>
import slug from "slug";

const props = defineProps(["dapp"]);
const ecosystem = useEcosystemStore();
const logo = props.dapp.images.logo ?? "@/assets/images/square.jpg";

function filterBy(event) {
  if (event.target.classList.contains("category")) {
    ecosystem.filter.category.push(event.target.innerText);
  } else if (event.target.classList.contains("integration")) {
    ecosystem.filter.integrations.push(event.target.innerText);
  } else if (event.target.classList.contains("status")) {
    ecosystem.filter.status = event.target.innerText.toLowerCase();
  }
}
</script>

<template>
  <dapp-card>
    <header>
      <h2 class="attention-voice">{{ dapp.name }}</h2>
      <picture class="logo">
        <img :src="logo" alt="" />
      </picture>
      <div class="chains">
        <!-- <ul>
          <li v-for="chain in dapp.chains" :key="chain">
            <picture v-if="`/images/chains/${chain.toLowerCase()}.svg`">
              <img :src="`/images/chains/${chain.toLowerCase()}.svg`" alt="" />
            </picture>
          </li>
        </ul> -->
      </div>
    </header>

    <text-content>
      <!-- <h2 class="attention-voice">{{ dapp.name }}</h2> -->
      <p class="calm-voice">{{ dapp.tagline }}</p>
    </text-content>

    <footer>
      <div class="lists">
        <ul class="categories-list">
          <li
            class="whisper-voice category"
            v-for="category in dapp.categories"
            @click="filterBy"
          >
            {{ category }}
          </li>
        </ul>
        <ul class="integrations-list integration">
          <li
            class="whisper-voice"
            v-for="integration in dapp.integrations"
            @click="filterBy"
          >
            {{ integration }}
          </li>
        </ul>
      </div>
      <p class="status" :class="dapp.status" @click="filterBy">
        {{ dapp.status }}
      </p>
      <NuxtLink :to="`/ecosystem/${slug(dapp.name)}`" class="card-link">
      </NuxtLink>
    </footer>
    <div class="background-wrapper">
      <picture
        class="card-background"
        v-if="`/images/chains/${dapp.chains[0].toLowerCase()}.svg`"
      >
        <img
          :src="`/images/chains/${dapp.chains[0].toLowerCase()}.svg`"
          alt=""
        />
      </picture>
    </div>
  </dapp-card>
</template>

<style lang="scss" scoped>
dapp-card {
  padding: 2.5rem 1.875rem;
  display: grid;
  grid-template-rows: 0.5fr 1fr 0.5fr;
  gap: 1rem;
  border-radius: var(--corners);

  background: var(--gradient-dark);

  position: relative;
  min-height: 300px;

  //   transition: all 0.2s ease-in-out;

  &:hover {
    background: var(--gradient-dark-color);
    box-shadow: var(--shadow);
    transition: background 0.2s ease-in-out;
  }

  //   &::after {
  //     content: "";
  //     display: block;
  //     border-radius: var(--corners);
  //     transform: scaleX(0);

  //     position: absolute;
  //     inset: -1px;
  //     z-index: -1;
  //     background: var(--gradient-color);

  //   }

  //   &:hover::after {
  //     transform: scaleX(1);
  //     transform-origin: left;
  //     transition: transform 0.2s ease-in;
  //   }

  .calm-voice {
    font-size: 0.875rem;
  }
  .whisper-voice {
  }

  div.background-wrapper {
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: 0;
  }

  .card-background {
    position: absolute;
    opacity: 0.2;
    right: -100px;
    top: 25px;
    transform: rotate(-10deg) scale(0.7);
    transform-origin: top;
  }

  & :is(.lists, .status) {
    z-index: 2;
  }
  .card-link {
    position: absolute;
    inset: 0;
    z-index: 1;
  }
}
header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;

  h2 {
    white-space: nowrap;
  }
  picture {
    width: 50px;
    justify-self: end;
    z-index: 1;
  }
  .chains {
    background-image: url("@/assets/images/chain.svg");
    background-size: cover;
    background-position-x: 50%;

    ul {
      display: flex;
      gap: 0.5rem;
    }

    picture {
      max-width: 30px;
    }
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
  .status.Beta {
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

.category,
.integration,
.status {
  cursor: pointer;
}
:is(.category, .integration, .status):hover {
  filter: brightness(1.2);
}
</style>
