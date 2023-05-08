<script setup>
import { useInterfaceStore } from "~/stores/interface";
const ui = useInterfaceStore();

const showMenu = ref(false);
</script>

<template>
  <header>
    <SectionColumn class="mast-head">
      <ClientOnly>
        <mast-head>
          <picture class="site-logo">
            <LogoText />
          </picture>
          <SiteNav v-if="!ui.isMobile" />
          <button
            class="button"
            v-if="ui.isMobile"
            @click="showMenu = !showMenu"
          >
            Menu
          </button>
          <ModalSlot
            v-if="ui.isMobile"
            :showModal="showMenu"
            @toggle="showMenu = !showMenu"
          >
            <SiteNav class="modal-menu" />
          </ModalSlot>
        </mast-head>
      </ClientOnly>
    </SectionColumn>
    <!-- <div class="teleport-target"></div>
	 --></header>
</template>

<style lang="scss" scoped>
mast-head {
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  justify-content: space-between;
  .site-logo {
    width: 50px;
    @media (min-width: 768px) {
      width: 100px;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 0.5fr 1fr;
  }
}
</style>
