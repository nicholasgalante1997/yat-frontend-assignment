import { server } from './server';
import { mockDataServer } from './web/mocks/node';
import { logger } from './web/utils'

const PORT = (process.env.PORT || 3000 as const);

mockDataServer.listen();

process.on('exit', (code) => {
    mockDataServer.close();
});

server.listen(PORT, () => logger.log('server started on port 3000...'));