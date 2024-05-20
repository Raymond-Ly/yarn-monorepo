import request from 'supertest';
import express from 'express';
import { Example } from '@yarn-monorepo/common-types';
import { ExpressApp1 } from '@yarn-monorepo/express-app-1-types';

describe('Express App 1', () => {
  let app: express.Application;

  beforeAll(() => {
    app = express();

    app.get('/', (_, res) => {
      const test: Example & ExpressApp1 = { name: 'Ray', pinCode: 1111 };

      res.send(`Hello world and ${test.name}!`);
    });
  });

  it('should respond with 200 response', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello world and Ray!');
  });
});
