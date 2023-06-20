<script setup>
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import { configureChains, createConfig } from "@wagmi/core";
import { arbitrum, mainnet, polygon } from "@wagmi/core/chains";
import { signTypedData, getAccount } from "@wagmi/core";

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

/////
const signature = ref(null);

const wallet = computed(() => {
  return getAccount();
});

async function getSignature() {
  console.log(getAccount());

  const domain = {
    name: "Verify User",
    version: "1",
  };
  // The named list of all type definitions
  const types = {
    User: [{ name: "wallet", type: "string" }],
  };
  const message = {
    wallet: getAccount().address,
  };

  signature.value = await signTypedData({
    domain,
    message,
    types,
    primaryType: "User",
  });

  console.log("signature", signature.value);
}

async function onSignIn() {
  await web3modal.openModal();
}
</script>

<template>
  <div class="actions">
    <button
      class="loud-button"
      v-if="!getAccount().isConnected"
      @click="onSignIn"
    >
      <span class="gradient-text"> Connect </span>
    </button>

    <button class="loud-button" @click="getSignature" v-else>Sign</button>
  </div>
</template>
