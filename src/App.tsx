import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Pod from './pages/pod';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Pod />
      </div>
    </QueryClientProvider>
  );
}

export default App;
