export const useWeb3Store = defineStore("web3", () => {
  const web3 = useWeb3();

  const isConnected = computed(() => web3.isConnected);

  return {
    isConnected,
  };
});
