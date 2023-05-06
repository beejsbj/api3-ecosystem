<script setup>
import { useEcosystemStore } from "~/stores/ecosystem";

const ecosystem = useEcosystemStore();

const chains = computed(() => [
  ...new Set(ecosystem.list.map((dapp) => dapp.chains).flat()),
]);
const categories = computed(() => [
  ...new Set(ecosystem.list.map((dapp) => dapp.categories).flat()),
]);
const integrations = computed(() => [
  ...new Set(ecosystem.list.map((dapp) => dapp.integrations).flat()),
]);
const years = computed(() => [
  ...new Set(ecosystem.list.map((dapp) => dapp.year).flat()),
]);

function clearFilters() {
  ecosystem.filter.search = "";
  ecosystem.filter.chains = [];
  ecosystem.filter.category = [];
  ecosystem.filter.integrations = [];
  ecosystem.filter.years = [];
}
</script>

<template>
  <dapp-filter>
    <header>
      <h3 class="solid-voice">
        Displaying {{ ecosystem.filter.count }} of
        {{ ecosystem.list.length }} results
      </h3>
      <button class="button" @click="clearFilters">clear</button>
    </header>
    <search-bar>
      <FormKit
        type="search"
        placeholder="Search..."
        label="Search"
        v-model="ecosystem.filter.search"
      />
    </search-bar>

    <div class="chain filter">
      <h4 class="firm-voice">Chain</h4>
      <ul class="pills">
        <template v-for="chain in chains" :key="chain">
          <li class="pill">
            <label :for="chain">
              {{ chain }} ({{
                ecosystem.list.filter((dapp) => dapp.chains.includes(chain))
                  .length
              }})
            </label>
            <input
              :id="chain"
              type="checkbox"
              :value="chain"
              v-model="ecosystem.filter.chains"
            />
          </li>
        </template>
      </ul>
    </div>

    <div class="category filter">
      <h4 class="firm-voice">Category</h4>
      <ul class="pills">
        <template v-for="category in categories" :key="category">
          <li class="pill">
            <label :for="category">
              {{ category }} ({{
                ecosystem.list.filter((dapp) =>
                  dapp.categories.includes(category)
                ).length
              }})
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
    </div>

    <div class="integration filter">
      <h4 class="firm-voice">Integration</h4>
      <ul class="pills">
        <template v-for="integration in integrations" :key="integration">
          <li class="pill">
            <label :for="integration">
              {{ integration }} ({{
                ecosystem.list.filter((dapp) =>
                  dapp.integrations.includes(integration)
                ).length
              }})
            </label>
            <input
              :id="integration"
              type="checkbox"
              :value="integration"
              v-model="ecosystem.filter.integrations"
            />
          </li>
        </template>
      </ul>
    </div>

    <div class="year filter">
      <h4 class="firm-voice">Year</h4>
      <ul class="pills">
        <template v-for="year in years" :key="year">
          <li class="pill">
            <label :for="year">
              {{ year }} ({{
                ecosystem.list.filter((dapp) => dapp.year == year).length
              }})
            </label>
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
    </div>

    <div class="status filter">
      <h4 class="firm-voice">Status</h4>
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
    </div>
  </dapp-filter>
</template>

<style lang="scss" scoped>
dapp-filter {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  background-color: var(--gray-dark);
  padding: 1rem;
  border-radius: var(--corners);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.filter {
  display: grid;
  gap: 0.5rem;

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
      background-color: var(--color);
      color: black;
      font-family: var(--font);
      padding: 0.25rem 0.5rem;
    }

    input-field:has(input:checked) label {
      background-color: black;
      color: var(--ink);
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
      --gray-dark: hsla(167, 22%, 15%, 1);

      font-size: 12px;
      font-weight: 700;

      background-color: var(--gray-dark);
      padding: 0.5em 1em;

      --corners: 0.7em;
      border-radius: var(--corners);
    }

    &:has(input:checked) label {
      background-color: var(--color);
      color: var(--ink);
      --ink: black;
    }
  }
}
</style>
