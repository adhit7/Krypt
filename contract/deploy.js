require('dotenv').config(); // Load environment variables

const { ethers } = require('ethers');
const { abi, bytecode } = require('./compile');

const provider = new ethers.providers.JsonRpcProvider(process.env.JPC_PROVIDER);

const wallet = ethers.Wallet.fromMnemonic(process.env.PRIVATE_KEY).connect(
  provider
);

const main = async () => {
  const transactionsFactory = new ethers.ContractFactory(abi, bytecode, wallet);

  // Deploy Contract
  const transactionsContract = await transactionsFactory.deploy();

  // Wait for deployment to finish
  await transactionsContract.deployed();

  console.log(
    'Transactions contract deployed to:',
    transactionsContract.address
  );
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
//Contract Address - 0x67D41Ee8A63aeB341f4D848885D0709ecF71D87f

//0xb2eaa2c50727dD5eEb97D193eDe8474A3909717f
