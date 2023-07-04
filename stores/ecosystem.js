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
  console.log("list", list);

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

  const productTypes = ["dapi", "qrng", "datafeed"]; //["dAPI", "QRNG", "Airnode", "Custom Solution"];

  const categories = [
    // "DeFi",
    // "Perpetual trading",
    // "Lending",
    // "Synthetics",
    // "Yield",
    // "Derivatives",
    // "RWA",
    // "Options",
    // "Farm",
    // "Predicition Market",
    // "Payments",
    // "Algo-stables",
    // "Liquid staking",
    // "NFT",
    // "Gaming",
    // "Data Provider",
    // "DEX",
    // "Play to Earn",
    // "Infrastructure",
    // "DAO",

    "defi",
    "dex",
    "nft",
    "gaming",
    "dao",
  ];

  //   const chains = [
  //     // "Ethereum",
  //     // "Polygon",
  //     // "Polygon zkEVM",
  //     // "zkSync Era",
  //     // "BNB",
  //     // "Avalanche",
  //     // "Fantom",
  //     // "Arbitrum",
  //     // "Optimism",
  //     // "Moonriver",
  //     // "Moonbeam",
  //     // "Gnosis",
  //     "1",
  //     "137",
  //     "56",
  //   ];

  const chains = {
    1: "ethereum",
    5: "ethereum-goerli-testnet",
    10: "optimism",
    30: "rsk",
    31: "rsk-testnet",
    56: "bsc",
    97: "bsc-testnet",
    100: "gnosis",
    137: "polygon",
    250: "fantom",
    288: "boba-ethereum",
    416: "sx",
    420: "optimism-goerli-testnet",
    599: "metis-goerli-testnet",
    647: "sx-testnet",
    1088: "metis",
    1284: "moonbeam",
    1285: "moonriver",
    1287: "moonbeam-testnet",
    2001: "milkomeda-c1",
    4002: "fantom-testnet",
    10200: "gnosis-testnet",
    42161: "arbitrum",
    42170: "arbitrum-nova",
    43113: "avalanche-testnet",
    43114: "avalanche",
    43288: "boba-avalanche",
    56288: "boba-bnb",
    71401: "godwoken-testnet",
    71402: "godwoken",
    80001: "polygon-testnet",
    200101: "milkomeda-c1-testnet",
    421613: "arbitrum-goerli-testnet",
    11155111: "ethereum-sepolia-testnet",
    1313161554: "aurora",
    1313161555: "aurora-testnet",
  };

  const filter = ref({
    search: "",
    category: [],
    chains: [],
    productTypes: [],
    years: [],
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
