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
          <picture class="site-logo" :class="{ menuOpen: showMenu }">
            <LogoText />
          </picture>
          <SiteNav v-if="!ui.isMobile" />
          <button
            class="button menu"
            :class="{ menuOpen: showMenu }"
            v-if="ui.isMobile"
            @click="showMenu = !showMenu"
          >
            <MenuIcon />
          </button>
          <SidePanelSlot
            v-if="ui.isMobile"
            :showPanel="showMenu"
            @toggle="showMenu = !showMenu"
          >
            <SiteNav class="panel-menu" />
          </SidePanelSlot>
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

@media (max-width: 768px) {
  .site-logo.menuOpen {
    //  position: fixed;
    z-index: 9999;
  }

  .button.menu {
    justify-self: end;
    &.menuOpen {
      z-index: 9999;
    }
  }
}
</style>
