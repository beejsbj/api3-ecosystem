<script setup>
import { getAccount, signMessage } from "@wagmi/core";
import { SiweMessage } from "siwe";

/////

async function getSignature() {
  const nonce = await $fetch("/api/auth/nonce", {
    method: "GET",
  });

  const address = getAccount().address;

  const message = new SiweMessage({
    domain: window.location.host,
    address: address,
    statement: "Sign in with Ethereum to the API3 ecosystem.",
    uri: window.location.origin,
    version: "1",
    chainId: 56,
    nonce: nonce,
  });

  const signature = await signMessage({ message: message.prepareMessage() });

  const signatureVerification = await $fetch("/api/auth", {
    method: "POST",
    body: {
      signature: signature,
      address: address,
      message: message.prepareMessage(),
      nonce: nonce,
    },
  });

  console.log(signatureVerification);
}
</script>

<template>
  <button
    class="loud-button"
    v-if="getAccount().isConnected"
    @click="getSignature"
  >
    Signature
  </button>
</template>
