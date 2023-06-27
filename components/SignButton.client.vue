<script setup>
import { useSiwe } from "~/composables/useSiwe";

/////
const { verifyWallet } = useSiwe();
const { isConnected } = useWeb3();
</script>

<template>
  <button class="loud-button" v-if="isConnected" @click="verifyWallet">
    Signature
  </button>
</template>
