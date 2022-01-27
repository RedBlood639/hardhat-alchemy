// require("@nomiclabs/hardhat-waffle");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// module.exports = {
//   defaultNetwork: "localhost",
//   networks: {
//     hardhat: {
//       forking: {
//         url: "https://eth-ropsten.alchemyapi.io/v2/FlOf6LAzxykDJEYcn-F2qlgkyxHu8JGv",
//       },
//     },
//     localhost: {
//       url: "http://127.0.0.1:8545",
//       accounts: [
//         "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
//       ],
//     },
//   },
//   solidity: {
//     version: "0.8.4",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   paths: {
//     sources: "./contracts",
//     tests: "./test",
//     cache: "./cache",
//     artifacts: "./artifacts",
//   },
//   mocha: {
//     timeout: 40000,
//   },
// };
require("@nomiclabs/hardhat-truffle5");

module.exports = {
  solidity: "0.7.3",
};
