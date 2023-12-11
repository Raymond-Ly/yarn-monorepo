# Yarn workspace monorepo

PoC of a monorepo using yarn workspace.

## Prerequisites

- Yarn installed: [installation guide](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)


## Getting started

1. Install workspace dependencies (used across packages): `yarn`
1. To build a single package: `yarn workspace @yarn-monorepo/express-app build`
1. To build all packages: `yarn workspaces run build `
