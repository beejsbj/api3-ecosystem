import { defineStore } from "pinia";
import data from "./ecosystem-data.json";
import slug from "slug";
import { useFetch } from "nuxt/app";

export const useEcosystemStore = defineStore("ecosystem", () => {
  const route = useRoute();

  //get projects, with dynamic pagination
  const baseServerUrl = ref("/api/projects/");
  const serverPage = ref(1);
  const serverURL = computed(() => {
    return serverPage.value
      ? baseServerUrl.value + `?page=${serverPage.value}`
      : baseServerUrl.value;
  });

  const { data: list, error: listError, refresh } = useFetch(serverURL.value);

  watch(serverPage, () => {
    console.log("serverPage changed", serverPage.value);
    console.log("serverURL changed", serverURL.value);
    console.log("list changed", list.value);
    refresh(); //#todo, this isnt working
  });

  //stats
  const { data: stats, error: statsError } = useFetch("/api/projects/stats/");

  function addDapp(dapp) {
    list.value.push(dapp);
  }

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

  const productTypes = [
    "VRF",
    "Proof of Reserve",
    "Functions",
    "CCIP",
    "Fair Sequencing Services",
    "Custom Solution",
    "Data Feeds",
    "Automation",
  ];

  const filter = ref({
    search: "",
    category: [],
    chains: [],
    productTypes: [],
    years: [],
    status: "",
    count: 0,
  });

  return {
    list,
    stats,
    categories,
    chains,
    productTypes,
    filter,
    serverPage,

    addDapp,
  };
});
