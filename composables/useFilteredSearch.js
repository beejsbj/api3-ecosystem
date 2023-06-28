// useFilteredSearch.js
import { computed } from "vue";

export default function useFilteredSearch(ecosystem) {
  const searchLowerCase = computed(() =>
    ecosystem?.filter?.search?.toLowerCase()
  );

  const filtered = computed(() => {
    if (
      !ecosystem.filter.category.length &&
      !ecosystem.filter.chains.length &&
      !ecosystem.filter.productTypes.length &&
      !ecosystem.filter.years.length
    ) {
      console.log("returned list", ecosystem.list);
      return ecosystem.list;
    }

    const allFiltered = ecosystem.list.filter((dapp) => {
      const filteredCategories = ecosystem.filter.category.every((category) => {
        return dapp.categories.includes(category);
      });

      const filteredChains = ecosystem.filter.chains.every((chain) => {
        return dapp.chains.includes(chain);
      });

      const filteredproductTypes = ecosystem.filter.productTypes.every(
        (productType) => {
          return dapp.productTypes.includes(productType);
        }
      );

      const filteredYears = ecosystem.filter.years.every((year) => {
        return dapp.year == year;
      });

      return (
        filteredChains &&
        filteredCategories &&
        filteredproductTypes &&
        filteredYears
      );
    });

    console.log("filtered list", allFiltered);
    return allFiltered;
  });

  const searchResults = computed(() => {
    if (!searchLowerCase.value) return filtered.value;

    console.log(searchLowerCase.value);

    const allFiltered = filtered.value.filter((dapp) => {
      console.log(filtered.value, dapp);
      const searchStr = searchLowerCase.value;
      const fieldsToCheck = [
        dapp.name,
        dapp.tagline,
        ...dapp.categories,
        ...dapp.productTypes,
        ...dapp.chains.map((chain) => chain.name),
      ];
      console.log("fields", fieldsToCheck);

      return (
        fieldsToCheck.some((field) =>
          field?.toLowerCase().includes(searchStr)
        ) || dapp.year == ecosystem.filter.search
      );
    });

    return allFiltered;
  });

  return {
    searchResults,
  };
}
