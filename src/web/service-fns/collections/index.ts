import { axiosInstance as net, logger } from '../../utils';
import { Pod } from '../../types';

const OP_BEGIN_LOGLINE = 'Beginning `fetchCollection` operation.' as const;
const OP_FAILED_LOGLINE = 'Op `fetchCollection` failure.' as const;
const OP_ENDED_LOGLINE = 'Op `fetchCollection` ended.' as const;

export async function fetchCollection(): Promise<Pod | null> {
  try {
    logger.log(OP_BEGIN_LOGLINE);

    const isBrowser = typeof window !== 'undefined';
    const url = isBrowser
      ? 'http://localhost:3000/api/proxy/msw'
      : 'http://mock-server/collection/test';

    const { data, status, statusText } = await net.get<{ pod: Pod }>(url);

    if (status < 200 || status > 299) {
      logger.error(
        `StatusCodeException: Status Code is ${status}.\n${statusText}`
      );
      throw new Error(
        'Invalid Status Code Exception: Status Code on `fetchCollections` response indicates the response resulted in a likely failure. Please check logs.'
      );
    }

    logger.log(OP_ENDED_LOGLINE);

    return data.pod;
  } catch (e: any) {
    logger.error(OP_FAILED_LOGLINE);
    logger.error((e as Error).message);
    return null;
  }
}
