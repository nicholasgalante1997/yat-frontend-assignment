import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import path from 'path';
import axios from 'axios';
import { trace } from './middleware';
import { pageHandler } from './handler';
import { Pod } from './web/types';
import { logger } from './web/utils';
import { randomTokens } from './fallback';

const expressApp = express();

expressApp.use(cors());
expressApp.use(express.json());
expressApp.use(trace);

expressApp.use(express.static(path.resolve(process.cwd(), 'build', 'static')));

expressApp.get('/', pageHandler);
expressApp.get('/api/proxy/msw', async function (req, res) {
  try {
    const { data, status, statusText } = await axios.get<{ pod: Pod }>(
      'http://mock-server/collection/test'
    );
    if (status < 200 || status > 299) {
      throw new Error('Invalid Status Code Exception\n' + statusText);
    }

    return data;
  } catch (e: any) {
    logger.error((e as Error).message);
    /** fallback logic, here for if msw is wonky and were csr fetching */
    res.json({
      pod: {
        name: 'A1 Lunar Pod Bravo',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo magna mauris, sed vulputate odio blandit at. Donec eleifend lectus.',
        stats: {
          tokens: 10000,
          owners: 5257,
          volume: {
            daily: 98561,
            weekly: 169234,
            monthly: 4641231,
          },
          floorPrice: {
            current: 0.515,
          },
        },
        tokens: randomTokens(100),
      },
    });
  }
});

export const server = createServer(expressApp);
