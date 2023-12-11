import express from 'express';
import { Example } from '@yarn-monorepo/common-types';
import { ExpressApp2 } from '@yarn-monorepo/express-app-2-types';

const app = express();
const port = 3002;

app.get('/', (req, res) => {
  const test: Example & ExpressApp2 = { name: 'Judit', pinNumber: 1111 };

  res.send(`Hello world and ${test.name}!`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
