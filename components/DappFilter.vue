<script setup>
import { useEcosystemStore } from "~/stores/ecosystem";
import { gsap } from "gsap";

const ecosystem = useEcosystemStore();

const chains = computed(() => {
  if (ecosystem.stats) {
    return [...ecosystem.stats.chains];
  }
});
const categories = computed(() => {
  if (ecosystem.stats) {
    return [...ecosystem.stats.categories];
  }
});
const productTypes = computed(() => {
  if (ecosystem.stats) {
    return [...ecosystem.stats.productTypes];
  }
});
const years = computed(() => {
  if (ecosystem.stats) {
    return [...ecosystem.stats.years];
  }
});

function clearFilters() {
  ecosystem.filter.search = "";
  ecosystem.filter.chains = [];
  ecosystem.filter.category = [];
  ecosystem.filter.productTypes = [];
  ecosystem.filter.years = [];
}

const showAll = ref({
  chains: false,
  categories: false,
  productTypes: false,
  years: false,
});

onMounted(() => {
  const pageLoad = gsap.timeline();

  pageLoad.fromTo(
    "dapp-filter",
    {
      delay: "0.5",
      y: "10vw",
      opacity: 0,
      duration: 0,
    },
    {
      y: "0vw",
      opacity: 1,
      duration: 0.5,
      stagger: {
        each: 0.15,
        from: "start",
      },
    }
  );
});
</script>

<template>
  <dapp-filter>
    <header>
      <h3 class="solid-voice">
        Displaying {{ ecosystem.filter.count }} of
        {{ ecosystem?.list?.length }} results
      </h3>
      <button class="button" @click="clearFilters">Clear</button>
    </header>
    <search-bar>
      <FormKit
        type="search"
        placeholder="Search..."
        v-model="ecosystem.filter.search"
      />
    </search-bar>

    <div class="chain filter">
      <h4 class="solid-voice">Chain</h4>
      <ul class="pills" v-auto-animate>
        <template v-for="(chain, index) in chains">
          <li class="pill" :key="chain.id" v-if="index < 5 || showAll.chains">
            <label :for="chain"> {{ chain.name }} ({{ chain.count }}) </label>
            <input
              :id="chain"
              type="checkbox"
              :value="chain"
              v-model="ecosystem.filter.chains"
            />
          </li>
        </template>
      </ul>
      <button
        class="text"
        @click="showAll.chains = !showAll.chains"
        v-if="chains?.length > 5"
      >
        Show More
      </button>
    </div>

    <div class="category filter">
      <h4 class="solid-voice">Category</h4>

      <ul class="pills" v-auto-animate>
        <template v-for="(category, index) in categories" :key="category">
          <li class="pill" v-if="index < 5 || showAll.categories">
            <label :for="category">
              {{ category.name }} ({{ category.count }})
            </label>
            <input
              :id="category"
              type="checkbox"
              :value="category"
              v-model="ecosystem.filter.category"
            />
          </li>
        </template>
      </ul>
      <button
        class="text"
        @click="showAll.categories = !showAll.categories"
        v-if="categories?.length > 5"
      >
        Show More
      </button>
    </div>

    <div class="productType filter">
      <h4 class="solid-voice">productType</h4>
      <ul class="pills" v-auto-animate>
        <template
          v-for="(productType, index) in productTypes"
          :key="productType"
        >
          <li class="pill" v-if="index < 5 || showAll.productTypes">
            <label :for="productType">
              {{ productType.name }} ({{ productType.count }})
            </label>
            <input
              :id="productType"
              type="checkbox"
              :value="productType"
              v-model="ecosystem.filter.productTypes"
            />
          </li>
        </template>
      </ul>
      <button
        class="text"
        @click="showAll.productTypes = !showAll.productTypes"
        v-if="productTypes?.length > 5"
      >
        Show More
      </button>
    </div>

    <div class="year filter">
      <h4 class="solid-voice">Year</h4>
      <ul class="pills" v-auto-animate>
        <template v-for="(year, index) in years" :key="year">
          <li class="pill" v-if="index < 5 || showAll.years">
            <label :for="year"> {{ year.name }} ({{ year.count }}) </label>
            <input
              :id="year"
              type="checkbox"
              :value="year"
              v-model="ecosystem.filter.years"
              onclick="console.log('test', this.checked)"
            />
          </li>
        </template>
      </ul>
      <button
        class="text"
        @click="showAll.years = !showAll.years"
        v-if="years?.length > 5"
      >
        Show More
      </button>
    </div>

    <!-- <div class="status filter">
      <h4 class="solid-voice">Status</h4>
      <div class="status-actions">
        <input-field>
          <label for="all">All</label>
          <input
            type="radio"
            name="status"
            id="all"
            value="all"
            v-model="ecosystem.filter.status"
          />
        </input-field>
        <input-field>
          <label for="live">Live</label>
          <input
            type="radio"
            name="status"
            id="live"
            value="live"
            v-model="ecosystem.filter.status"
          />
        </input-field>
        <input-field>
          <label for="beta">Beta</label>
          <input
            type="radio"
            name="status"
            id="beta"
            value="beta"
            v-model="ecosystem.filter.status"
          />
        </input-field>
      </div>
    </div> -->
  </dapp-filter>
</template>

<style lang="scss" scoped>
dapp-filter {
  display: grid;
  grid-template-columns: 1fr;
  position: sticky;
  top: 2rem;

  border-radius: var(--corners);
  padding-bottom: 2rem;

  max-height: 100vh;
  overflow-y: auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .solid-voice {
      font-size: 0.75rem;
    }

    .button {
      font-size: 14px;
    }
  }

  & > * {
    padding: 1.5rem;

    & + *:not(search-bar) {
      border-top: 1px solid hsla(162, 10%, 30%, 0.5);
    }
  }
}

.filter {
  display: grid;
  gap: 1rem;

  &.status .status-actions {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2px;
    border-radius: var(--corners);
    overflow: hidden;
    text-align: center;

    input {
      display: none;
    }

    label {
      font-size: 0.875rem;
      font-weight: 700;
      font-family: var(--font);
      padding: 0.5rem;
      --gray-darkest: hsla(167, 22%, 15%, 1);
      background-color: var(--gray-darkest);
    }

    input-field:has(input:checked) label {
      color: var(--black);
      background-color: var(--color);
    }
  }

  .pills {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    gap: 0.5rem;
  }
  .pill {
    input {
      display: none;
    }

    label {
      --gray-darkest: hsla(167, 22%, 15%, 1);
      background-color: var(--gray-darkest);

      font-size: 12px;
      font-weight: 700;
      padding: 0.5em 1em;
      border-radius: var(--corners);
    }

    &:has(input:checked) label {
      background-color: var(--color);
      color: var(--ink);
      --ink: black;
    }
  }

  button.text {
    justify-self: end;
    padding: 0;
  }

  button.text::after {
    display: none;
  }
}
</style>
