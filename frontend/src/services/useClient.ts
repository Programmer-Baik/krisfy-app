import { createWalletClient, createPublicClient, http, custom, mainnet } from "../types/libs"

export default function useClient() {
  const publicClient = createPublicClient({
    chain: mainnet,
    transport: http(),
  });

  const walletClient = createWalletClient({
    chain: mainnet,
    transport: custom(window.ethereum),
  });

  return {
    publicClient,
    walletClient,
  };
}
