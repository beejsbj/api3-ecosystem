<script setup>
import { gsap } from "gsap";
import { useInterfaceStore } from "@/stores/interface";

const ui = useInterfaceStore();

const showFilter = ref(false);

useServerSeoMeta({
  title: "Ecosystems",
});

onMounted(() => {
  const pageLoad = gsap.timeline();

  pageLoad.fromTo(
    ".ecosystem-header",
    {
      y: 50,
      opacity: 0,
      duration: 0,
      delay: "0.5",
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
    }
  );
});
</script>

<template>
  <SectionColumn class="ecosystem-header">
    <h1 class="loud-voice gradient-text">Search API3's Ecosystem</h1>

    <NuxtLink to="/add-dapp" class="filled button firm-voice">
      <span class=""> Add Your Own </span>
    </NuxtLink>
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
  opacity: 0;
  inner-column {
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    align-items: center;
    justify-content: space-between;
    justify-items: start;
    padding: 60px 15px;

    .button {
      justify-self: center;
    }
  }
}
</style>
