const { HardhatUserConfig } = require("hardhat/config");
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const config = {
  solidity: "0.8.28",
  networks: {
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [process.env.TESTNET_PRIVATE_KEY]
    }
  }
};

module.exports = config;