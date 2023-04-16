import { Handler, Request, Response } from 'express';
import { pageHandler } from './handler';
import { apiProxyHandler } from './api-proxy';
import { NotFound404Page } from './web/pages';
import { prerender } from './server-render';

function handle404Path(_req: Request, res: Response) {
    res.send(prerender(NotFound404Page, { bundleName: 'notFound' }));
};



export function getRoute(path: string): Handler {
    const routeMap: Record<string, Handler> = {
        '/': pageHandler,
        '/api/proxy/msw': apiProxyHandler,
    };
    let handler: Handler | undefined;
    handler = routeMap[path];
    if (!handler) {
        handler = handle404Path;
    }
    return handler;
}