<script setup>
useServerSeoMeta({
  title: "Login",
});

const { isConnected } = useWeb3();
const router = useRouter();

watch(isConnected, (newVal) => {
  console.log("isConnected", newVal);
  if (newVal) {
    router.push("/add-dapp");
    console.log("passing If", newVal);
  }
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
