# Yarn workspace monorepo

PoC of a monorepo using yarn workspace.

## Prerequisites

- Yarn v4+ installed: [installation guide](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)


## Getting started

1. Install workspace dependencies (used across packages): `yarn`
1. To build a single package: `yarn workspace @yarn-monorepo/express-app-1 build`
1. To build all packages: `yarn workspaces run build `
1. To build a single app (with dependencies installed): `yarn workspaces focus @yarn-monorepo/express-app-1`

## Creating deployable directories for specific apps

For `expressApp1`, to build and deploy.

1. Run: `yarn deploy:app1` from the root of the repository. This command will:
- yarn install dependencies filtering for expressApp1, resulting in the `node_modules` folder containing the dependencies for expressApp1 only. This is created in the root of the monorepo,
- build using tsc in the `dist` folder created in the expressApp1 folder.
- copies the `node_modules` from the root into the `dist` folder created in the expressApp1 folder.

**Notes:** the same command is available for expressApp2: `yarn deploy:app2` and you could start the apps after building from the root: `yarn start:app2`
