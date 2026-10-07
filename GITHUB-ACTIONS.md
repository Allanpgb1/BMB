# BMB — GitHub Actions

## Workflows

### Validate BMB
`Validate BMB` runs automatically on pushes and pull requests to `main`.

It:
1. Installs Node.js 22.
2. Installs dependencies with `npm ci`.
3. Compiles the contract.
4. Runs the automated tests.

### Deploy BMB - Polygon Amoy
This workflow is manual (`workflow_dispatch`).

Use it first to deploy BMB to the Polygon Amoy test network.

Required GitHub Actions secrets:

- `PRIVATE_KEY`
- `POLYGON_AMOY_RPC_URL`

Recommended Amoy RPC:
`https://rpc-amoy.polygon.technology/`

### Deploy BMB - Polygon
This workflow is also manual.

Only use it after the Amoy deployment has been tested.

Required GitHub Actions secrets:

- `PRIVATE_KEY`
- `POLYGON_RPC_URL`

## Adding GitHub Secrets

Repository:
`Settings` → `Secrets and variables` → `Actions` → `New repository secret`

Create:

`PRIVATE_KEY`
- Value: private key of the dedicated deployment wallet.
- Never commit it to the repository.

`POLYGON_AMOY_RPC_URL`
- Value: an Amoy RPC endpoint.

`POLYGON_RPC_URL`
- Value: a Polygon mainnet RPC endpoint.

## Security

Do not put a private key in:
- Solidity files
- TypeScript files
- README
- `.env.example`
- GitHub repository files
- chat messages

The workflows receive the private key only through GitHub Actions Secrets.

## Recommended order

1. Push the project to GitHub.
2. Run `Validate BMB`.
3. Configure the GitHub secrets.
4. Run `Deploy BMB - Polygon Amoy`.
5. Test the deployed contract.
6. Only then consider `Deploy BMB - Polygon`.
