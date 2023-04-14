import { Request, Response, NextFunction } from 'express';
import { logger } from './web/utils';

const TRACE_TEMPLATE = `
******************
User-Agent: {{userAgent}}
Path: {{path}}
Referrer: {{referer}}
Timestamp: {{time}}
`;

export function trace(req: Request, _res: Response, next: NextFunction) {
  const saturatedLogLine = TRACE_TEMPLATE.replace(
    '{{userAgent}}',
    req.headers['user-agent'] ?? ''
  )
    .replace('{{path}}', req.path)
    .replace('{{referer}}', req.headers['referer'] ?? '')
    .replace('{{time}}', Date.now().toString());
  logger.log(saturatedLogLine);
  next();
}
