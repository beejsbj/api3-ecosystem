<script setup>
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import { configureChains, createConfig, watchAccount } from "@wagmi/core";
import { arbitrum, mainnet, polygon } from "@wagmi/core/chains";

//get env variable for project id
const config = useRuntimeConfig();
const projectId = config.public.WEB3MODAL_PROJECT_ID;

//configure chains
const chains = [arbitrum, mainnet, polygon];
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

//create wagmi config
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});

//create ethereum client and web3modal
const ethereumClient = new EthereumClient(wagmiConfig, chains);
const web3modal = new Web3Modal({ projectId }, ethereumClient);

//get account info in a ref to keep watchful
const account = ref({});
const unwatch = watchAccount((acc) => {
  account.value = { ...acc };
});

/////
async function buttonHandle() {
  await web3modal.openModal();
}
</script>

<template>
  <button class="loud-button" @click="buttonHandle">
    <Transition name="fade" mode="out-in">
      <span class="gradient-text" v-if="!account?.isConnected"> Connect </span>
      <span v-else class="gradient-text">Connected</span>
    </Transition>
  </button>
</template>

<style scoped></style>
