import "dotenv/config";
import { defineConfig } from "hardhat/config";
import hardhatToolboxMochaEthers from "@nomicfoundation/hardhat-toolbox-mocha-ethers";

const privateKey = process.env.PRIVATE_KEY;
const amoyRpcUrl =
  process.env.POLYGON_AMOY_RPC_URL ||
  "https://rpc-amoy.polygon.technology/";
const polygonRpcUrl =
  process.env.POLYGON_RPC_URL ||
  "https://polygon-mainnet.g.alchemy.com/v2/REPLACE_WITH_YOUR_ALCHEMY_KEY";

export default defineConfig({
  plugins: [hardhatToolboxMochaEthers],

  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  networks: {
    polygonAmoy: {
      type: "http",
      chainType: "generic",
      chainId: 80002,
      url: amoyRpcUrl,
      accounts: privateKey ? [privateKey] : []
    },

    polygon: {
      type: "http",
      chainType: "generic",
      chainId: 137,
      url: polygonRpcUrl,
      accounts: privateKey ? [privateKey] : []
    }
  }
});