# Yarn workspace monorepo

PoC of a monorepo using yarn workspace.

## Prerequisites

- Yarn v4+ installed: [installation guide](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)


## Getting started

1. Install workspace dependencies (used across packages): `yarn`
1. To build a single package: `yarn workspace @yarn-monorepo/express-app-1 build`
1. To build all packages: `yarn workspaces run build `
1. To build a single app (with dependencies installed): `yarn workspaces focus @yarn-monorepo/express-app-1`
