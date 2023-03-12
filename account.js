const { AptosAccount } = require("aptos");
require("dotenv").config();

module.exports.getAccount = getAccount = () => {
  return AptosAccount.fromAptosAccountObject({
    address: process.env.ADDRESS,
    publicKeyHex: process.env.PUBLIC,
    privateKeyHex: process.env.PRIVATE,
  });
};
