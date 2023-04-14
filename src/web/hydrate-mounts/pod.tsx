import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import App from '../App';
import reportWebVitals from '../reportWebVitals';
import { logger } from '../utils';

import 'react-loading-skeleton/dist/skeleton.css';

type EnhancedWindow = typeof window & typeof globalThis & { __REACT_QUERY_STATE__: string };

function mountApp() {
  const dehydratedState = window && (window as EnhancedWindow).__REACT_QUERY_STATE__;
  const queryClient = new QueryClient();
  hydrateRoot(
    document.getElementById('production-root')!,
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <App />
      </Hydrate>
    </QueryClientProvider>
  );
}

mountApp();
reportWebVitals(logger.log);
