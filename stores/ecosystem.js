import { defineStore } from "pinia";
import data from "./ecosystem-data.json";
import slug from "slug";
import { useFetch } from "nuxt/app";

export const useEcosystemStore = defineStore("ecosystem", () => {
  const route = useRoute();

  const baseServerUrl = ref("http://localhost:5002/api/projects/v1/");
  const serverPage = ref(1);
  const serverURL = computed(() => {
    return baseServerUrl.value + serverPage.value;
  });
  const { data: list, error: listError } = useFetch(serverURL.value);

  const { data: stats, error: statsError } = useFetch(
    "http://localhost:5002/api/projects/stats/"
  );

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

    addDapp,
  };
});
