import axios from "axios";

var data = JSON.stringify({
  jsonrpc: "2.0",
  id: 0,
  method: "alchemy_getAssetTransfers",
  params: [
    {
      fromBlock: "0xA97AB8",
      toBlock: "0xA97CAC",
      fromAddress: "0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE",
      contractAddresses: ["0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9"],
      maxCount: "0x5",
      excludeZeroValue: true,
      category: ["external", "token"],
    },
  ],
});

var config = {
  method: "post",
  url: "https://eth-mainnet.alchemyapi.io/v2/demo",
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
