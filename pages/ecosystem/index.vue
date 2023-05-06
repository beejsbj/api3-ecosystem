<script setup>
import { useInterfaceStore } from "@/stores/interface";

const ui = useInterfaceStore();

const showFilter = ref(false);
</script>

<template>
  <SectionColumn>
    <h1 class="booming-voice">Ecosystem</h1>
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

<style>
@media (min-width: 768px) {
  .ecosystem .main-grid {
    display: grid;
    grid-template-columns: 0.4fr 1fr;
    grid-gap: 1rem;
    align-items: start;
  }
}
</style>
