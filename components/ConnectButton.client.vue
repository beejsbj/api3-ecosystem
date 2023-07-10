<script setup>
const { openModal, isConnected, account } = useWeb3();

/////

/////
async function buttonHandle() {
  await openModal();

  console.log("isConnected", isConnected.value);
}
</script>

<template>
  <button class="loud-button" @click="buttonHandle">
    <Transition name="fade" mode="out-in">
      <span class="gradient-text" v-if="!isConnected"> Connect </span>
      <span v-else class="gradient-text">
        Connected
        <!-- <span>{{ account.slice(0, 6) }}</span> -->
      </span>
    </Transition>
  </button>
</template>

<style scoped></style>
