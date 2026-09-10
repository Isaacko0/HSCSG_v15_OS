/**
 * Kleros GPL-3.0 Isolated Microservice
 * Licencia: GPL-3.0-only
 */

import Fastify from 'fastify';

const app = Fastify({ logger: true });

app.get('/health', async () => ({ status: 'ok', service: 'kleros-wrapper', license: 'GPL-3.0' }));

app.post('/dispute/create', async (request, reply) => {
  const { evidence, parties, ruling } = request.body as any;
  // Implementation: create Kleros dispute
  return { disputeId: '0x...', status: 'created' });
});

app.post('/dispute/ruling', async (request, reply) => {
  const { disputeId } = request.body as { disputeId: string };
  // Implementation: get ruling
  return { ruling: 'party_a_wins' });
});

const start = async () => {
  try {
    await app.listen({ port: 3002, host: '0.0.0.0' });
    console.log('🔴 Kleros GPL Microservice running on port 3002');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
