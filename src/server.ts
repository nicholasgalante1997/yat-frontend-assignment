import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import path from 'path';
import { trace } from './middleware';
import { getRoute } from './router';

const expressApp = express();

expressApp.use(cors());
expressApp.use(express.json());
expressApp.use(trace);

expressApp.use(express.static(path.resolve(process.cwd(), 'build', 'static')));

expressApp.get('/', getRoute('/'));
expressApp.get('/api/proxy/msw', getRoute('/api/proxy/msw'));
expressApp.get('*', getRoute('not-found'));

export const server = createServer(expressApp);
