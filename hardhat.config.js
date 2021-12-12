require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { PRIVATE_KEY, ALCHEMY_HTTP_API } = process.env;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: ALCHEMY_HTTP_API,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
