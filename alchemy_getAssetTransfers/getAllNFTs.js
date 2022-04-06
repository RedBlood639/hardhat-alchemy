import { createAlchemyWeb3 } from "@alch/alchemy-web3";

// Replace with your Alchemy api key:
const apiKey = "b8QZzPLZ2yu5codOUnK9zOJo4H7HAxjQ";

// Initialize an alchemy-web3 instance:
const web3 = createAlchemyWeb3(
  `https://eth-ropsten.alchemyapi.io/v2/${apiKey}`
);

const data = await web3.alchemy.getAssetTransfers({
  fromBlock: "0x0",
  toBlock: "latest",
  toAddress: "0x68F69156132c75b0035F25dBaef996D99C52b3F5",
  fromAddress: "0x0000000000000000000000000000000000000000",
  category: ["erc721", "erc1155"],
});
// Print response:
for (const events of data.transfers) {
  console.log("Token Transfer: ", events.value, " ", events.asset);
}
