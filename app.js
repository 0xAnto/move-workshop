const { AptosClient, TokenClient } = require("aptos");
const { getAccount } = require("./account.js");
const main = async () => {
  let nodeUrl = "https://fullnode.testnet.aptoslabs.com/v1";
  let client = new AptosClient(nodeUrl);
  let tokenClient = new TokenClient(client);
  let account = getAccount();
  console.log(account.address());
  let collectionName = "Anto";
  let collectionDescription = "This is Anto's first NFT collection";
  let collectionUri =
    "https://pbs.twimg.com/profile_images/1590928207716716546/_0PqzEW3_400x400.jpg";
  let maxNoOfTokens = 100;
  let collection = await tokenClient.createCollection(
    account,
    collectionName,
    collectionDescription,
    collectionUri,
    maxNoOfTokens
  );
  console.log(collection);

  let tokenName = "Anto #007";
  let tokenDesc = "First NFT of Anto's collection";
  let supply = 1;
  let tokenUri =
    "https://pbs.twimg.com/profile_images/1590928207716716546/_0PqzEW3_400x400.jpg";

  let token = await tokenClient.createToken(
    account,
    collectionName,
    tokenName,
    tokenDesc,
    supply,
    tokenUri
  );
  console.log(token);
};
main();
