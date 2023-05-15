<script setup>
const props = defineProps(["showModal"]);

watch(
  () => props.showModal,
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
    <Transition name="modal">
      <div v-if="showModal" class="modal-mask" @click="$emit('toggle')">
        <div class="modal-content" @click.stop>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  transition: all 0.3s ease;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s ease;
  overflow-y: auto;

  display: grid;
  place-items: center;
}
.modal-mask > * {
  width: clamp(300px, 90vw, 500px);
  margin: auto;

  background-color: var(--paper);
}

.modal-content {
  border-radius: var(--corners);
}
</style>
