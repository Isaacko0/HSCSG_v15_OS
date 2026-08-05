# BACKUP ORIGINAL — lizTheDeveloper / solarpunk_utopia
# Copia de seguridad del repositorio analizado (2026-08-05) antes de asimilarlo a HSCSG v15 OS.
# Fuente: https://github.com/lizTheDeveloper/solarpunk_utopia (CLAUDE.md, estructura)

---

## Qué es

Aplicación DE PRODUCCIÓN (no template) de **economía del don distribuida, offline-first, sobre redes
de malla DTN (Delay-Tolerant Networking)**. Infraestructura de resistencia solarpunk: ayuda mutua,
retiro económico, redes santuario, resiliencia comunitaria.

## Componentes clave

- **Malla DTN**: WiFi Direct / BATMAN-adv, islas multi-AP + nodos puente, tolerante a desconexión.
- **ValueFlows v1.0**: coordinación económica (ofertas, necesidades, intercambios, compromisos).
- **Web of Trust**: cadenas de aval (vouch) + scoring de confianza.
- **14 agentes IA**: matchmaking, scheduling, gobernanza, optimización de recursos.
- **Mensajería E2E** con panic features (códigos de coacción, borrado seguro).
- **Red santuario** para personas en riesgo + respuesta rápida a emergencias.
- **OpenSpec**: spec-driven dev (proposal → approval → implementation → validation → archive).
- **MCP Hot-Reload Proxy**: 94% ahorro de contexto (3 tools vs 50+).
- **NATS Event Streaming**: coordinación multi-agente (server compartido GCP).
- **Autonomous Worker Templates**: Claude Code autónomo programado (systemd).
- **Solarpunk Node Spec**: spec completa de malla DTN en teléfonos Android.

## Comandos

- `./run_all_services.sh` → DTN Bundle (8000), ValueFlows Node (8001), Discovery/Search,
  File Chunking, Bridge Mgmt (8002).
- `./stop_all_services.sh`, `pytest tests/ -v`.

## Relevancia para HSCSG v15 OS

Es la **capa operativa de coordinación offline + don + ValueFlows** que HSCSG v15 necesita para que
la base material se comparta sin dinero. Sus 14 agentes IA y ValueFlows mapean directo al módulo
Orquestación (ya asimilado de Paperclip) y al CaaS-BM (reparto por AUT×CDS). La malla DTN es la
infraestructura física del "nodo" HSCSG cuando no hay internet.
