import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PodLP from './pages/landing-page-pod';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PodLP />
    </QueryClientProvider>
  );
}

export default App;
