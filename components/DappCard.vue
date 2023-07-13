<script setup>
import slug from "slug";
const props = defineProps(["dapp"]);
const ecosystem = useEcosystemStore();
const logo = props?.dapp?.images?.logo ?? "@/assets/images/square.jpg";

// console.log(props.dapp);

function filterBy(event) {
  if (event.target.classList.contains("category")) {
    ecosystem.filter.category.push(event.target.innerText);
  } else if (event.target.classList.contains("productType")) {
    ecosystem.filter.productTypes.push(event.target.innerText);
  } else if (event.target.classList.contains("status")) {
    ecosystem.filter.status = event.target.innerText?.toLowerCase();
  }
}
</script>

<template>
  <dapp-card class="list-move">
    <header>
      <picture class="logo">
        <img :src="logo" alt="" />
      </picture>
      <div>
        <!-- <p
          class="status"
          :class="{ Live: dapp.status, Beta: dapp.status }"
          @click="filterBy"
        >
          {{ dapp.status }}
        </p> -->
        <div class="lists" v-if="true">
          <ul class="productTypes-list productType">
            <li class="micro-voice productType" @click="filterBy">
              {{ ecosystem?.productTypeToLabel?.[dapp?.productType] }}

              <picture v-if="`/images/icons/${slug(dapp?.productType)}.svg`">
                <img
                  :src="`/images/icons/${slug(dapp?.productType)}.svg`"
                  alt=""
                />
              </picture>
            </li>
          </ul>

          <ul class="categories-list">
            <li
              class="micro-voice category"
              v-for="category in dapp.categories"
              @click="filterBy"
            >
              {{ ecosystem?.categoryToLabel?.[category] }}
              <picture v-if="`/images/icons/${slug(category)}.svg`">
                <img :src="`/images/icons/${slug(category)}.svg`" alt="" />
              </picture>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <text-content>
      <h2 class="attention-voice">{{ dapp.name }}</h2>

      <p class="calm-voice">{{ dapp.tagline }}</p>
    </text-content>

    <footer>
      <NuxtLink :to="`/ecosystem/${dapp._id}`" class="text card-link">
        Read More
      </NuxtLink>
    </footer>

    <div class="background-wrapper">
      <picture class="card-background">
        <ChainIcon
          :chain="ecosystem.chainNames(dapp.chains[0])"
          fill="none"
          stroke="var(--color)"
        />
      </picture>
    </div>
  </dapp-card>
</template>

<style lang="scss" scoped>
dapp-card {
  display: grid;
  grid-template-rows: 0.5fr 1fr 0.1fr;
  gap: 0.5rem;

  padding: 1rem;
  border-radius: var(--corners);
  min-height: 250px;

  position: relative;
  overflow: hidden;

  background: var(--gradient-dark);

  &:hover {
    background: var(--gradient-dark-color);
    transition: 0.2s ease-in-out;
  }

  .calm-voice {
    font-size: 0.875rem;
  }
  .whisper-voice {
    font-size: var(--step--2);
  }

  & :is(.lists, .status) {
    z-index: 2;
  }

  .card-link {
    padding-left: 0;
    position: unset;
  }
  .card-link::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    cursor: pointer;
  }

  div.background-wrapper {
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: 0;

    .card-background {
      position: absolute;
      opacity: 1;
      right: -100px;
      top: 125px;
      transform: rotate(-10deg) scale(0.5);
      transform-origin: top;
    }
  }
}
header {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  justify-content: end;
  align-items: center;

  h2 {
    white-space: nowrap;
  }
  picture {
    max-width: 80px;
    border-radius: 50%;
    z-index: 1;
  }
}

text-content {
  align-self: end;
  display: grid;
  gap: 0.5rem;
}

header > div {
  display: grid;
  gap: 1rem;
  justify-content: end;
  align-items: center;
}
.lists {
  display: grid;
  gap: 0.5rem;
  ul {
    display: flex;
    gap: 0.5rem;
    justify-content: end;

    li {
      border-radius: var(--corners);
      padding: 0.1rem 0.5rem;
      border-right: 0.5px solid var(--gray-dark);
      border-bottom: 0.5px solid var(--gray-dark);
      display: flex;
      align-items: center;
      gap: 0.25rem;
      white-space: nowrap;

      picture {
        max-width: 16px;
      }
    }
  }
}

.category,
.productType,
.status {
  cursor: pointer;
}
:is(.category, .productType, .status):hover {
  filter: brightness(1.2);
}

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
</style>
