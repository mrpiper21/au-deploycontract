import ethers from "ethers";
import dotenv from 'dotenv'
import hre  from 'hardhat';
dotenv.config()


async function main() {

    const url = process.env.GOERLI_URL;
  
    let artifacts = await hre.artifacts.readArtifact("Faucet");
  
    const provider = new ethers.AlchemyProvider(url);
  
    let privateKey = process.env.TESTNET_PRIVATE_KEY;
  
    let wallet = new ethers.Wallet(privateKey as string, provider);
  
    // Create an instance of a Faucet Factory
    let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);
  
    let faucet = await factory.deploy();
  
    console.log("Faucet address:", faucet);
  
    await faucet.deploymentTransaction();
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
  });