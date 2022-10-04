import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import * as tdly from "@tenderly/hardhat-tenderly";
tdly.setup({
  automaticVerifications: false
});

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("solc", "Prints selected version of solc", async (taskArgs, hre) => {
  console.log(hre.config.solidity.compilers[0].version);
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1,
            details: {
              orderLiterals: true,
              deduplicate: true,
              cse: true,
              constantOptimizer: true,
              yul: true,
            },
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.GOERLI_URL || "",
        enabled: process.env.FORK_GOERLI === "1" || false,
      },
    },
    goerli: {
      chainId: 5,
      url: process.env.GOERLI_URL || "",
      accounts:
        process.env.PRIVATE_KEYS !== undefined
          ? process.env.PRIVATE_KEYS.split(",")
          : [],
    },
  },
  tenderly: {
    project: process.env.TENDERLY_PROJECT || "",
    username: process.env.TENDERLY_USERNAME || "",
    privateVerification: true,
  }
};
export default config;
