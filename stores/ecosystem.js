import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import data from "./data.json";
import slug from "slug";

export const useEcosystemStore = defineStore("ecosystem", () => {
  const route = useRoute();

  const list = useStorage("ecosystem-data", data);

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

    addDapp,
  };
});
