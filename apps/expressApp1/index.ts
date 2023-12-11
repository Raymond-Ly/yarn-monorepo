import express from 'express';
import { Example } from '@pnpm-monorepo/common-types';
import { ExpressApp1 } from '@pnpm-monorepo/express-app-1-types';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  const test: Example & ExpressApp1 = { name: 'Ray', pinCode: 1111 };

  res.send(`Hello world and ${test.name}!`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
