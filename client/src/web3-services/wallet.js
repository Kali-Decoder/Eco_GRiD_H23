import { mainnet , polygonMumbai , polygon ,  } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
const { chains, publicClient } = configureChains(
  [polygonMumbai,mainnet,polygon],
  [
    jsonRpcProvider({
      rpc: (chainId) => {
        if (chainId.id == 1) {
          return {
            http: "https://eth-mainnet.g.alchemy.com/v2/bOg2BRsD466eVUYnfiZ0w9g0X_rWTbKL",
            webSocket:
              "wss://eth-mainnet.g.alchemy.com/v2/bOg2BRsD466eVUYnfiZ0w9g0X_rWTbKL",
          };
        } else if (chainId.id == 137) {
          return {
            http: "https://polygon-mainnet.g.alchemy.com/v2/ZLSEk8HyDPO8GF7NmrIZpRxxxKAY1zgr",
            webSocket:
              "wss://polygon-mainnet.g.alchemy.com/v2/ZLSEk8HyDPO8GF7NmrIZpRxxxKAY1zgr",
          };
        } else if (chainId.id == 42161) {
          return {
            http: "https://arb-mainnet.g.alchemy.com/v2/eCm1C8c0ke-nbr-n7sZ9S_UUovDTlTV6",
            webSocket:
              "wss://arb-mainnet.g.alchemy.com/v2/eCm1C8c0ke-nbr-n7sZ9S_UUovDTlTV6",
          };
        } else if (chainId.id == 80001) {
          return {
            http: "https://polygon-mumbai.g.alchemy.com/v2/CjKOqnJ82SrjDkCbIGKFFCjVqugC2khM",
            webSocket:
              "wss://polygon-mumbai.g.alchemy.com/v2/CjKOqnJ82SrjDkCbIGKFFCjVqugC2khM",
          };
        }
      },
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "BlockBet",
  projectId: "87106bd465234d097b8a51ba585bf799",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { wagmiConfig, chains };