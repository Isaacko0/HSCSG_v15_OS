/**
 * Nextcloud AGPL-3.0 Isolated Microservice
 * 
 * ADVERTENCIA: AGPL-3.0 tiene trigger SaaS.
 * Solo usar si HSCSG NO expone este servicio públicamente como SaaS.
 * Licencia: AGPL-3.0-or-later
 */

import Fastify from 'fastify';

const app = Fastify({ logger: true });

app.get('/health', async () => ({ 
  status: 'ok', 
  service: 'nextcloud-wrapper', 
  license: 'AGPL-3.0-or-later',
  warning: 'AGPL SaaS trigger - do not expose publicly' 
}));

app.post('/files/upload', async (request, reply) => {
  const { file, path } = request.body as { file: Buffer; path: string };
  // Implementation: upload to Nextcloud via WebDAV
  return { uploaded: true, path });
});

app.get('/files/list', async (request, reply) => {
  const { path } = request.query as { path: string };
  // Implementation: list files
  return { files: [] });
});

const start = async () => {
  try {
    await app.listen({ port: 3003, host: '0.0.0.0' });
    console.log('🔴 Nextcloud AGPL Microservice running on port 3003');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
