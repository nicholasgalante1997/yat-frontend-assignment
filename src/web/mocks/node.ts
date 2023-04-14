import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const mockDataServer = setupServer(...handlers);
