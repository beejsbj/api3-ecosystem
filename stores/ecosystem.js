import { defineStore } from "pinia";
import data from "./data.json";
import slug from "slug";

export const useEcosystemStore = defineStore("ecosystem", () => {
  const route = useRoute();

  const list = data;

  const currentDapp = computed(() => {
    if (route.params.detail) {
      return list.find((dapp) => slug(dapp.name) === route.params.detail);
    }
  });

  return {
    list,
    currentDapp,
  };
});
