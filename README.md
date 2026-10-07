# BMB

BMB is a fixed-supply ERC-20 token intended for deployment on Polygon PoS.

## Token parameters

- Name: BMB
- Symbol: BMB
- Standard: ERC-20
- Network: Polygon PoS
- Total supply: 1,000,000,000 BMB
- Decimals: 18
- Additional minting: disabled
- Transfer tax: none

The initial supply is minted once in the constructor and sent to the wallet that deploys the contract.

## Requirements

Hardhat 3 currently requires Node.js 22.13.0 or later.

Install dependencies:

```bash
npm install
```

## 1. Compile

```bash
npm run compile
```

## 2. Test

```bash
npm test
```

Do not deploy to mainnet until the tests pass and the contract has been independently reviewed/audited as appropriate.

## 3. Configure secrets

Copy:

```bash
cp .env.example .env
```

Put your deployment wallet private key in `.env`.

NEVER upload `.env` to GitHub and NEVER send the private key to anyone.

## 4. Test deployment on Polygon Amoy

Polygon's official documentation lists Amoy as chain ID 80002 and its public RPC as:

https://rpc-amoy.polygon.technology/

You need test POL in the deployment wallet.

Deploy:

```bash
npm run deploy:amoy
```

The deployment address will be shown in the terminal.

## 5. Mainnet deployment

Polygon PoS mainnet uses chain ID 137. Mainnet deployment requires real POL for gas.

Before mainnet:

1. Compile.
2. Run the tests.
3. Deploy and test on Amoy.
4. Confirm the contract source and parameters.
5. Make sure the deployment wallet and private key are secure.
6. Fund the deployment wallet with enough POL for gas.

Then:

```bash
npm run deploy:polygon
```

## 6. Verify the contract

After deployment, verify the deployed address on the Polygon explorer. With Hardhat Verify configured, the command is:

```bash
npx hardhat verify --network polygon YOUR_CONTRACT_ADDRESS
```

BMB has no constructor arguments, so no constructor argument needs to be supplied.

## Security notes

This project deliberately keeps the token contract small:

- no owner-only mint
- no blacklist
- no hidden transfer restrictions
- no buy/sell tax
- no upgrade proxy
- no pause function
- fixed supply

The use of OpenZeppelin's ERC-20 implementation does not replace a professional security review.

## Important

Creating the token contract does not automatically create a market, liquidity pool, exchange listing, price, or demand for BMB. Those are separate steps and require additional decisions.
