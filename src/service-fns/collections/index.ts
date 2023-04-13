import { axiosInstance as net, logger } from '../../utils';

const OP_BEGIN_LOGLINE = 'Beginning `fetchCollection` operation.' as const;

export async function fetchCollection() {
  try {
    logger.log(OP_BEGIN_LOGLINE);
    const { data, status, statusText } = await net.get(
      'http://mock-server/collection/test'
    );
    return data;
  } catch (e: any) {
    logger.error((e as Error).message);
  } finally {
    logger.log('op ended');
  }
}
