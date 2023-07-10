<script setup>
useServerSeoMeta({
  title: "Login",
});

const web3 = useWeb3Store();
const router = useRouter();
const route = useRoute();
const toPath = route.query.to;

const { isConnected } = useWeb3();

function redirect() {
  console.log("redirecting to", toPath);
  router.push(toPath || "/");
}

watch(isConnected, (value) => {
  console.log("isConnected", value);

  if (value) {
    //  redirect();
  }
});

///
</script>

<template>
  <SectionColumn>
    <h1 class="loud-voice">Please Connect your wallet</h1>
    <div class="actions">
      <ConnectButton />
      <!-- <button class="loud-button" :disabled="!isConnected" @click="redirect()">
        Continue to page
      </button> -->
    </div>
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
