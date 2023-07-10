<script setup>
const { openModal, isConnected } = useWeb3();

/////

/////
async function buttonHandle() {
  await openModal();
}
</script>

<template>
  <button class="loud-button" @click="buttonHandle">
    <Transition name="fade" mode="out-in">
      <span class="gradient-text" v-if="!isConnected"> Connect </span>
      <span v-else class="gradient-text">Connected</span>
    </Transition>
  </button>
</template>

<style scoped></style>
