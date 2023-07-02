<script setup>
useServerSeoMeta({
  title: "Login",
});
</script>

<template>
  <div>
    <h1 class="booming-voice">Please Connect your wallet</h1>
    <ConnectButton />
  </div>
</template>

<style scoped>
div {
  display: grid;
  place-items: center;
  gap: 1rem;
  height: 100vh;
  align-content: center;
}
</style>
