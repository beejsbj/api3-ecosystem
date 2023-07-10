<script setup>
useServerSeoMeta({
  title: "Login",
});

const { isConnected } = useWeb3();
const router = useRouter();
const route = useRoute();
const toPath = route.query.to;

watch(isConnected, async (newVal) => {
  if (newVal) {
    router.push(toPath ?? "/");
  }
});

///
</script>

<template>
  <SectionColumn>
    <h1 class="loud-voice">Please Connect your wallet</h1>
    <ConnectButton />
  </SectionColumn>
</template>

<style lang="scss" scoped>
:deep(inner-column) {
  display: grid;
  gap: 1rem;
  height: 100vh;

  align-content: center;
  @media (min-width: 768px) {
    place-items: center;
  }
}
</style>
