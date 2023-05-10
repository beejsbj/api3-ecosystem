<script setup>
const props = defineProps(["showPanel"]);

watch(
  () => props.showPanel,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
);
</script>

<template>
  <Teleport to="body">
    <Transition name="panel">
      <div v-if="showPanel" class="panel-mask">
        <div class="panel-content" @click.stop>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.panel-enter-from,
.panel-leave-to {
  transform: translateX(100%);
}

.panel-mask {
  position: fixed;
  z-index: 9998;
  inset: 0;
  background: var(--gradient-dark);
  transition: all 0.3s ease;

  display: grid;
  grid-template-rows: auto;
}

.panel-content {
  display: grid;
  align-items: end;
  padding: 8rem 2rem;
}
</style>
