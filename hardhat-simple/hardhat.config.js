require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "FlOf6LAzxykDJEYcn-F2qlgkyxHu8JGv";

const ROPSTEN_PRIVATE_KEY =
  "7be6355ca247aa87f11825365ba75c77b2e69e59645cc1cb981eed3b934ed0f8";

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
