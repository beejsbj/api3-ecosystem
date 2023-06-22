<script setup>
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import { configureChains, createConfig } from "@wagmi/core";
import { arbitrum, mainnet, polygon } from "@wagmi/core/chains";
import { getAccount, signMessage } from "@wagmi/core";
import { SiweMessage } from "siwe";

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

const wallet = computed(() => {
  return getAccount();
});

async function getSignature() {
  // 1. get nonce from server
  const nonce = await $fetch("/api/auth/nonce", {
    method: "GET",
  });

  console.log("nonce", nonce);

  const address = getAccount().address;
  //2. prepare message to sign
  const message = new SiweMessage({
    domain: window.location.host,
    address: address,
    statement: "Sign in with Ethereum to the API3 ecosystem.",
    uri: window.location.origin,
    version: "1",
    chainId: 56,
    nonce: nonce,
  });

  console.log("message", message);

  // 3. sign message
  const signature = await signMessage({ message: message.prepareMessage() });

  console.log("signature", signature);

  const signatureVerification = await $fetch("/api/auth", {
    method: "POST",
    body: {
      signature: signature,
      address: address,
      message: message.prepareMessage(),
      nonce: nonce,
    },
  });

  console.log("signatureVerification", signatureVerification);
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

  <pre>

	
	{{ wallet.isConnected ? wallet : "Not Connected" }}


  </pre>
</template>
