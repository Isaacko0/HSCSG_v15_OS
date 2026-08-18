# INTEGRACIÓN — block/buzz → HSCSG v15 OS (Buzz 🐝)

> Baseline: `docs/buzz/buzz_backup.md` (texto real de README, AGENTS, VISION_SOVEREIGN/MESH/REMOTE_AGENTS).
> block/buzz = relay Nostr auto-hospedable donde humanos y agentes IA comparten la misma sala con un solo log de eventos firmados.
> Principio HSCSG (corrección 2026-08-10): NO ser conservador. Buzz es crítico para la capa de transporte de HSCSG → implementar módulo real, no dejar en P2.

## 1. Por qué Buzz es CLAVE para HSCSG (metaHSCSG)

| Concepto Buzz (real) | Equivalente / ganancia HSCSG |
|----------------------|------------------------------|
| Relay Nostr = workspace, un solo log firmado | **Capa de transporte de Symbiosky/Colectivo** (HSCSG ya apunta a Nostr/AT Protocol) |
| Agentes como miembros (keypair, canal, audit trail) | **Autómata Soberano + subagentes**: identidad por keypair, no por bots |
| VISION_SOVEREIGN: tu dominio, tu relay | **Nodo local offline-first (Cosateca OS)**: soberanía por dominio |
| buzz-audit (hash-chain) | **RAO append-only** del Sistema Alráico (G1-CARMIS) |
| Buzz Mesh: compute comunitario por membresía | **Cómputo anfibio del colectivo** (idle GPUs = recursos compartidos por CA) |
| Remote Agents: identidad portable en relay | **Coeficiente de Autonomía (CA)** durable más allá del dispositivo |
| ACP + buzz-dev-mcp | Estándar de agentes que el Autómata puede adoptar (tool-calls) |
| Content negotiation (git+HTML mismo URL) | Patrón de servir el nodo en una sola superficie |

## 2. Módulo NUEVO a crear en HSCSG (no placeholder)

### 2.1 `src/core/state/nostrRelay.ts` + `src/core/lib/nostrRelay.ts`
Puente de transporte Nostr para el nodo HSCSG (inspirado en buzz-core + buzz-sdk):
- `Event { id, pubkey, kind, content, sig, created_at }` (tipos Nostr mínimos).
- `RelayConfig { url, community, localOnly: boolean }` — `localOnly=true` = offline-first (sin red).
- `signEvent`, `verifyEvent` (firma offline con WebCrypto, sin dependencias).
- `publish(event)`, `subscribe(filter)` — cuando `localOnly`, guarda en RAO local; cuando conectado, enviá a relay Nostr.
- **Anfibio**: misma firma/evento opera offline (RAO local) o conectado (relay Nostr público/privado).

### 2.2 `src/core/state/agentMesh.ts` + `src/core/lib/agentMesh.ts`
Malla de agentes/comunidad (inspirado en Buzz Mesh + Remote Agents):
- `Agent { id, pubkey, name, community, reputation, body: 'local'|'remote'|'disposable' }`
- `shareCompute(memberId, resource)` / `requestCompute(agentId)` — gated por membresía de comunidad (CA colectiva).
- `remoteResurrect(agentId)` — reanuda agente por keypair, sin recrear historia (history en relay/RAO).
- `auditTrail(agentId)` — hash-chain de eventos del agente (buzz-audit ≈ RAO).

### 2.3 UI: `/nostr` (transporte) y `/agentes` (malla)
- `/nostr`: estado del relay (localOnly ↔ conectado), eventos firmados, verificación.
- `/agentes`: agentes del colectivo, reputación, compute compartido, resurrección remota.

## 3. Lo que se EXTIRPA (infra ajena, conservando lógica)

| Buzz (infra) | HSCSG lo reemplaza con |
|--------------|------------------------|
| `buzz-relay` (Rust/Postgres/Redis server) | Nodo local Zustand + RAO (offline-first); relay Nostr solo si modo conectado |
| `buzz-db` Postgres | estado local en `src/core/state` |
| `buzz-auth` (NIP-42) | firma WebCrypto local (keypair del nodo) |
| `buzz-pubsub` Redis | presencia local / solo si conectado |
| `buzz-search` Postgres FTS | index local de eventos RAO |
| `buzz-media` Blossom/S3 | storage local del nodo |
| `sprig`/ACP harness | Autómata Soberano ya cubre tool-calls |

Se mantiene: **modelo de evento firmado único, agentes como miembros, soberanía por comunidad, malla de cómputo por membresía, identidad portable**.

## 4. Conteo de conceptos nuevos

Buzz aporta ~14 conceptos nacidos para HSCSG:
1. Relay Nostr = workspace único
2. Un solo log de eventos firmados (persona = proceso)
3. Agentes como miembros (keypair, canal, audit)
4. Scoped by identity not permission flags
5. Content negotiation git+HTML mismo URL
6. VISION_SOVEREIGN (tu dominio, tu relay)
7. Community-local state
8. Buzz Mesh (compute comunitario)
9. Idle GPU pool gated por membresía
10. Remote Agents (cuerpo desechable, identidad en relay)
11. Resurrección ≠ renacimiento
12. One-way handoff (no substrate control channel)
13. ACP / MCP agent harness
14. hash-chain audit (buzz-audit ≈ RAO)

Total acumulado HSCSG: 118 + 14 = **132 conceptos nacidos**.

## 5. Estado

- [x] Fase 1 Desempaquetado (clone 4033 archivos)
- [x] Fase 2 Limpieza (gitignore + backup real)
- [x] Fase 3 GitHub (backup + integration commiteados)
- [x] Fase 4 Evolución: implementados módulos nostrRelay + agentMesh + UI /nostr,/agentes (commit 671f03c+). 42/42 tests.
- [ ] Actualizar BRIEF_EXHAUSTIVO (fuentes 37→38, conceptos 118→132)

---
*Integración derivada de backup de texto real. Módulos 2.1–2.3 son implementables (no placeholders) según corrección de método HSCSG. Buzz es el repo más alineado hasta ahora (capa de transporte + agentes + soberanía por dominio).*
