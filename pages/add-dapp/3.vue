<script setup>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

const props = defineProps(["dappForm"]);

const categories = ref([
  "DeFi",
  "NFT",
  "Gaming",
  "Blockchain",
  "Data Provider",
  "Node Operator",
  "DEX",
  "Play to Earn",
  "Protocol",
  "Grants",
  "Infrastructure",
  "Launchpad",
  "BUILD Program",
  "Layer 2",
  "DAO",
]);

const chains = [
  "Ethereum",
  "Polygon",
  "BNB Chain",
  "Avalanche",
  "Solana",
  "Fantom",
  "Arbitrum",
  "Optimism",
  "Harmony",
  "Moon River",
  "HECO Chain",
  "Gnosis Chain",
  "Polkadot",
  "Cardano",
  "Bitcoin",
];

const integrations = [
  "VRF",
  "Automation",
  "Proof of Reserve",
  "Functions",
  "CCIP",
  "Fair Sequencing Services",
  "Custom Solution",
];
</script>

<template>
  <h2 class="attention-voice">Step 3</h2>

  <form-field>
    <label class="attention-voice" for="categories"> Category </label>
    <Multiselect
      id="categories"
      v-model="dappForm.categories"
      mode="tags"
      :close-on-select="false"
      :searchable="true"
      :create-option="false"
      :options="categories"
    />
  </form-field>

  <form-field>
    <label class="attention-voice" for="chains"> Chain </label>
    <Multiselect
      id="chains"
      v-model="dappForm.chains"
      mode="tags"
      :close-on-select="false"
      :searchable="true"
      :create-option="false"
      :options="chains"
    />
  </form-field>

  <form-field>
    <label class="attention-voice" for="integrations"> Integration </label>
    <Multiselect
      id="integrations"
      v-model="dappForm.integrations"
      mode="tags"
      :close-on-select="false"
      :searchable="true"
      :create-option="false"
      :options="integrations"
    />
  </form-field>
</template>
