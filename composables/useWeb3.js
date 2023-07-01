import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import {
  configureChains,
  createConfig,
  getAccount,
  signMessage,
  getNetwork,
} from "@wagmi/core";
import { arbitrum, mainnet, polygon } from "@wagmi/core/chains";

//get env variable for project id
const config = useRuntimeConfig();
const projectId = config.public.WEB3MODAL_PROJECT_ID;

//configure chains
const chains = [arbitrum, mainnet, polygon];
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

//create wagmi config
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});

// //create ethereum client and web3modal
const ethereumClient = new EthereumClient(wagmiConfig, chains);
const web3modal = new Web3Modal({ projectId }, ethereumClient);

export const useWeb3 = () => {
  const openModal = async () => {
    await web3modal.openModal();
  };

  const account = getAccount().address;
  const chainId = getNetwork().chain.id;

  const isConnected = getAccount().isConnected;

  const sign = async (message) => {
    try {
      const result = await signMessage(message);
      return result;
    } catch (error) {
      console.log("sign error", error);
      return null;
    }
  };

  return { openModal, account, sign, isConnected, chainId };
};
