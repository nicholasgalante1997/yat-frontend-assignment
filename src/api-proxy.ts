import axios from 'axios';
import { Request, Response } from 'express';
import { logger } from './web/utils';
import { randomTokens } from './fallback';
import { Pod } from './web/types';

export async function apiProxyHandler(_req: Request, res: Response) {
  try {
    const { data, status, statusText } = await axios.get<{ pod: Pod }>('http://mock-server/collection/test');
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
}
