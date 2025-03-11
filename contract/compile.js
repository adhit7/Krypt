const path = require('path');
const fs = require('fs');
const solc = require('solc');

const transactionPath = path.resolve(
  __dirname,
  'contracts',
  'Transactions.sol'
);

const source = fs.readFileSync(transactionPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'Transactions.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['abi', 'evm.bytecode'],
      },
    },
  },
};

const compiledContracts = JSON.parse(solc.compile(JSON.stringify(input)));

// Extract ABI & Bytecode
const abi = compiledContracts.contracts['Transactions.sol'].Transactions.abi;
const bytecode =
  compiledContracts.contracts['Transactions.sol'].Transactions.evm.bytecode
    .object;

// Export ABI & Bytecode for deployment
module.exports = { abi, bytecode };
//
