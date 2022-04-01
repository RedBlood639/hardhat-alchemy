import axios from "axios";

var data = JSON.stringify({
  jsonrpc: "2.0",
  id: 0,
  method: "alchemy_getAssetTransfers",
  params: [
    {
      // fromBlock: "0xA97AB8", // inclusive from block (hex string or latest). optional (defaults tolatest)
      toBlock: "latest", // inclusive to block (hex string or latest). optional (defaults to latest)
      fromAddress: "0x68F69156132c75b0035F25dBaef996D99C52b3F5", //  from address (hex string). optional (default wildcard - any address)
      // toAddress : "" //  to address (hex string). optional (default wildcard - any address)
      category: ["erc721"], // Optional array of categories, can be any of the following: "external", "internal", "token", "erc20", "erc721", "erc1155" (defaults to the following categories: ["external", "internal", "token"])
      contractAddresses: ["0x99e124a42724a5855ba9e772be67bc59300ce20f"], // list of contract addresses (hex strings) for token transfers. optional (default wildcard - any address)
      // maxCount: "0x3e8", // max hex string number of results to return per call. optional (default and max1000 or 0x3e8)
      excludeZeroValue: true, // aBoolean to exclude transfers with zero value. optional (default true)
      // pageKey: ?  // we shoule use this option if we are going to all transation, so we can use it as like page index
    },
  ],
});

var config = {
  method: "post",
  url: "https://eth-ropsten.alchemyapi.io/v2/b8QZzPLZ2yu5codOUnK9zOJo4H7HAxjQ",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
