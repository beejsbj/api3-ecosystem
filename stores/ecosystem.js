import { defineStore } from "pinia";
import data from "./data.json";
import slug from "slug";

export const useEcosystemStore = defineStore("ecosystem", () => {
  const route = useRoute();

  const list = useLocalStorage("ecosystem-data", data);

  const categories = [
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
    "Wallet",
    "Analytics",
    "Developer Tools",
    "Social",
    "Marketing",
    "Security",
    "Insurance",
  ];

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
    "Proof of Reserve",
    "Functions",
    "CCIP",
    "Fair Sequencing Services",
    "Custom Solution",
    "Data Feeds",
    "Automation",
  ];

  const currentDapp = computed(() => {
    if (route.params.detail) {
      return list.value.find((dapp) => slug(dapp.name) === route.params.detail);
    }
  });

  function addDapp(dapp) {
    list.value.push(dapp);
  }

  return {
    list,
    currentDapp,
    categories,
    chains,
    integrations,

    addDapp,
  };
});
