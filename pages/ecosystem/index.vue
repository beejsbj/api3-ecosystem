<script setup>
import { useInterfaceStore } from "@/stores/interface";

const ui = useInterfaceStore();

const showFilter = ref(false);
</script>

<template>
  <PageHeader heading="Search API3's Ecosystem" />

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

/* Hide scrollbar for Chrome, Safari and Opera */
body:has(main.ecosystem)::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body:has(main.ecosystem) {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
