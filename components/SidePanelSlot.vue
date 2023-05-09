<script setup>
const props = defineProps(["showPanel"]);
</script>

<template>
  <Teleport to="body">
    <Transition name="panel">
      <div v-if="showPanel" class="panel-mask">
        <button class="button close" @click="$emit('toggle')" v-if="false">
          <MenuIcon />
        </button>
        <div class="panel-content" @click.stop>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.panel-enter-active,
.panel-leave-active {
  transition: all 5s ease;
}

.panel-enter-from,
.panel-leave-to {
  transform: translateX(100%);
}

.panel-mask {
  position: fixed;
  z-index: 9998;
  inset: 0;
  background: var(--gradient-dark);
  transition: opacity 0.3s ease;
  overflow-y: auto;
  display: grid;
  grid-template-rows: auto;
}

button.close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  /* font-size: 2rem; */
  padding: 1rem;
}

.panel-content {
  display: grid;
  align-items: end;
  padding: 8rem 2rem;
}
</style>
