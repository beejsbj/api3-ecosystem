// useFilteredSearch.js
import { computed } from "vue";

export default function useFilteredSearch(ecosystem) {
  const searchLowerCase = computed(() => ecosystem.filter.search.toLowerCase());

  const filtered = computed(() => {
    if (
      !ecosystem.filter.category.length &&
      !ecosystem.filter.chains.length &&
      !ecosystem.filter.integrations.length &&
      !ecosystem.filter.years.length &&
      !ecosystem.filter.status
    ) {
      console.log("returned list");
      ecosystem.filter.count = ecosystem.list.length;
      return ecosystem.list;
    }
    console.log("filtered list");

    const allFiltered = ecosystem.list.filter((dapp) => {
      const filteredCategories = ecosystem.filter.category.every((category) => {
        return dapp.categories.includes(category);
      });

      const filteredChains = ecosystem.filter.chains.every((chain) => {
        return dapp.chains.includes(chain);
      });

      const filteredIntegrations = ecosystem.filter.integrations.every(
        (integration) => {
          return dapp.integrations.includes(integration);
        }
      );

      const filteredYears = ecosystem.filter.years.every((year) => {
        return dapp.year == year;
      });

      const filteredStatus =
        ecosystem.filter.status != "all"
          ? ecosystem.filter.status == dapp.status
          : true;

      return (
        filteredChains &&
        filteredCategories &&
        filteredIntegrations &&
        filteredYears
      );
    });
    ecosystem.filter.count = allFiltered.length;
    return allFiltered;
  });

  const searchResults = computed(() => {
    if (!ecosystem.filter.search) return filtered.value;
    return filtered.value.filter((dapp) => {
      const searchStr = searchLowerCase.value;
      const fieldsToCheck = [
        dapp.name,
        dapp.tagline,
        ...dapp.categories,
        ...dapp.integrations,
        ...dapp.chains,
        ...dapp.about,
      ];

      return (
        fieldsToCheck.some((field) =>
          field.toLowerCase().includes(searchStr)
        ) || dapp.year == ecosystem.filter.search
      );
    });
  });

  return {
    searchResults,
  };
}
