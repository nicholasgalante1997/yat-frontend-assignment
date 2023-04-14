import { Request, Response } from 'express';
import { QueryClient, dehydrate } from 'react-query';
import { COLLECTIONS_QUERY_KEY } from './web/query-fns';
import { fetchCollection } from './web/service-fns';
import { prerender } from './server-render';
import App from './web/App';

export async function pageHandler(req: Request, res: Response) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryFn: fetchCollection,
    queryKey: COLLECTIONS_QUERY_KEY,
  });
  const dehydratedState = dehydrate(queryClient);
  res.send(
    prerender(App, {
      bundleName: 'pod',
      queryConfig: { queryClient, dehydratedState },
    })
  );
}
