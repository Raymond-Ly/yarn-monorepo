import express from 'express';
import { Example } from '@yarn-monorepo/common-types';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const test: Example = { name: 'Judit' };

  res.send(`Hello world and ${test.name}!`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
