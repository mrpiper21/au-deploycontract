import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
	solidity: "0.8.28",
	networks: {
		goerli: {
			url: process.env.GOERLI_URL,
			accounts: [process.env?.TESTNET_PRIVATE_KEY as string],
		},
	},
};

export default config;
