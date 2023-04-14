import { useQuery } from 'react-query';
import { fetchCollection } from '../../service-fns';

export const COLLECTIONS_QUERY_KEY = 'collections' as const;
export const useQueryCollections = () =>
  useQuery({
    queryKey: COLLECTIONS_QUERY_KEY,
    queryFn: fetchCollection,
  });
