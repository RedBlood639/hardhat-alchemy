require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "FlOf6LAzxykDJEYcn-F2qlgkyxHu8JGv";

const ROPSTEN_PRIVATE_KEY =
  "5c05cc731fd7123d907d7d1468ac7f7ba37251f6d6e46c0c11457111d98f59fe";

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
