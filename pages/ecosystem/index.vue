<script setup>
import { useInterfaceStore } from "@/stores/interface";

const ui = useInterfaceStore();

const showFilter = ref(false);
</script>

<template>
  <SectionColumn innerClass="ecosystem-header">
    <h1 class="loud-voice gradient-text">Search API3's Ecosystem</h1>
    <button class="loud-button firm-voice">
      <NuxtLink to="/add-dapp">Add Your Own</NuxtLink>
    </button>
  </SectionColumn>

  <SectionColumn innerClass="main-grid">
    <ClientOnly>
      <DappFilter v-if="!ui.isMobile" />
      <div v-else>
        <button class="button" @click="showFilter = !showFilter">Open</button>

        <ModalSlot :showModal="showFilter" @toggle="showFilter = !showFilter">
          <DappFilter />
        </ModalSlot>
      </div>
    </ClientOnly>

    <DappGrid />
  </SectionColumn>
</template>

<style lang="scss">
.ecosystem .main-grid {
  position: relative;
  display: grid;
  grid-gap: 2.5rem;

  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 0.7fr 1fr;
  }
  @media (min-width: 1166px) {
    grid-template-columns: 0.3fr 1fr;
  }
}
.ecosystem-header {
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  align-items: center;
  justify-content: space-between;
  justify-items: start;
  padding: 60px 15px;

  button {
    justify-self: center;
  }
}
</style>
