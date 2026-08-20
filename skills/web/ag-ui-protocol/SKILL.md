---
name: ag-ui-protocol
description: AG-UI — protocolo abierto agent-to-user (CopilotKit) que OpenBot usa para que cualquier agente (LangGraph, Mastra, CrewAI, Pydantic AI, Google ADK o a mano) llegue como coworker con governance que cabalga el protocolo, no el framework. Usar para entender por qué HSCSG no necesita acoplarse a un framework de agentes y cómo un protocolo común desacopla governance de implementación.
---

# AG-UI — protocolo agent-to-user

De OpenBot (CopilotKit/openbot): "Un Bot es cualquier endpoint que hable AG-UI, así OpenBot no está atado a un framework y tú tampoco."

## Por qué importa
- **Governance cabalga el protocolo, no el framework.** El gateway de acciones de OpenBot decide sobre el flujo AG-UI, así que el mismo límite aplica a un Bot de LangGraph, CrewAI o uno escrito a mano.
- **Componentes en vez de solo prosa.** El Bot responde con componentes (herramientas de frontend) que el surface puede renderizar; la governance también gobierna qué componentes puede usar (`/admin/components`).

## Isomorfismo con HSCSG
- AG-UI (estándar abierto) ↔ **Vasos comunicantes** (protocolo propio de HSCSG) / agent mesh RAO.
- Ambos desacoplan la governance de la implementación del agente.
- HSCSG NO debe cambiar a AG-UI (ya tiene Vasos comunicantes); la lección es: **definir el límite de governance a nivel de protocolo, no de framework**, para que cualquier agente nuevo caiga bajo las mismas Boundaries.

## Cuándo usar
- Explicar arquitectura multi-framework de agentes.
- Decidir entre acoplarse a un framework vs definir un protocolo/gateway propio.
- Diseñar governance que sobreviva a cambios de backend de agente.
