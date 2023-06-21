<script setup>
import { signTypedData, getAccount } from "@wagmi/core";

/////
const signature = ref(null);

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

async function getSignature() {
  console.log(getAccount());

  signature.value = await signTypedData({
    domain,
    message,
    types,
    primaryType: "User",
  });

  console.log("signature", signature.value);
}
</script>

<template>
  <button class="loud-button" @click="getSignature">Signature</button>
</template>
