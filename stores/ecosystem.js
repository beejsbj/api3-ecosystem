import { defineStore } from "pinia";
import data from "./ecosystem-data.json";
import slug from "slug";
import { useFetch } from "nuxt/app";
import { CHAINS } from "@api3/chains";

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

  const productTypeToLabel = {
    dapi: "dAPI",
    qrng: "QRNG",
    datafeed: "Data Feed",
    airnode: "Airnode",
  };

  const categoryToLabel = {
    defi: "DeFi",
    dex: "Dex",
    nft: "NFT",
    gaming: "Gaming",
    dao: "Dao",
    oracle: "Oracle",
    wallet: "Wallet",
    infrastructure: "Infrastructure",
    other: "Other",
  };

  const categoryOptions = Object.keys(categoryToLabel).map((key) => {
    return {
      label: categoryToLabel[key],
      value: key,
    };
  });
  const productTypeOptions = Object.keys(productTypeToLabel).map((key) => {
    return {
      label: productTypeToLabel[key],
      value: key,
    };
  });
  const chainOptions = CHAINS.map((chain) => {
    return {
      label: chain.name,
      value: chain.id,
    };
  });

  // chain id to chain name mapping
  const chainNames = (chainId) => {
    const chain = CHAINS.find((chain) => chain.id === chainId);
    return chain ? chain.name : chainId;
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
    categoryOptions,
    productTypeOptions,
    chainOptions,
    categoryToLabel,
    productTypeToLabel,
    filter,
    serverPage,
    chainNames,
    addDapp,
  };
});
