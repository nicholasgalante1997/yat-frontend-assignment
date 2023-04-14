import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import path from 'path';
import { trace } from './middleware';
import { pageHandler } from './handler';

const expressApp = express();

expressApp.use(cors());
expressApp.use(express.json());
expressApp.use(trace);

expressApp.use(express.static(path.resolve(process.cwd(), 'build', 'static')));

expressApp.get('/', pageHandler);

export const server = createServer(expressApp);
