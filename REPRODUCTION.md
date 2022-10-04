Setup env:
```
git clone https://github.com/kacperzuk/tenderly-external-lib-issue.git
cd tenderly-external-lib-issue
npm install
```

Update your keys in `hardhat.config.ts` or `.env` file.

Deploy contract:
```
> npx hardhat run --network goerli scripts/deploy-test.ts
Compiled 1 Solidity file successfully
Lib deployed to  0x4e297274cDfEdB2982e386DB60a70BF23877ECBb
Contract deployed to  0xa217e561d041c5599d5d850D874e7Dfd845e24d8
```

Try to push to tenderly:
```
> npx hardhat --network goerli tenderly:push Example=0xa217e561d041c5599d5d850D874e7Dfd845e24d8
hardhat-tenderly: Warning: No new contracts have been verified.
  Contract not eligible for verification Example,
```
