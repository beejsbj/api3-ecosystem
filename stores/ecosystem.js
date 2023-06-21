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
    "Perpetual trading",
    "Lending",
    "Synthetics",
    "Yield",
    "Derivatives",
    "RWA",
    "Options",
    "Farm",
    "Predicition Market",
    "Payments",
    "Algo-stables",
    "Liquid staking",
    "NFT",
    "Gaming",
    "Data Provider",
    "DEX",
    "Play to Earn",
    "Infrastructure",
    "DAO",
  ];

   // taken from https://defillama.com/categories

  const chains = [
    "Ethereum",
    "Polygon",
    "Polygon zkEVM",
    "zkSync Era",
    "BNB Chain",
    "Avalanche C-Chain",
    "Fantom",
    "Arbitrum One",
    "Optimism",
    "Moonriver",
    "Moonbeam",
    "Gnosis Chain",

  ];

  const productTypes = [
    "dAPI",
    "API3 QRNG",
    "Airnode",
    "Custom Solution",
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
