require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const { PRIVATE_KEY, ALCHEMY_HTTP_API } = process.env;

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: ALCHEMY_HTTP_API,
      accounts: [`${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
