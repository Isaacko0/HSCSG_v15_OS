# Integración: OpenCivics Commons → HSCSG v15 OS

**Backup:** `docs/opencivics_commons_backup.md` (rescate completo del Commons, 19 dominios + 7 Resources + 5 Directories + 6 Browse-By, con descripción+dominio por entrada en Directories).
**Fuente viva:** https://commons.opencivics.co/OpenCivics-Commons-25106d2570f280a885c9e57d0600f387
**Fecha asimilación:** 2026-08-19 · **Skill usada:** `notion-page-scrape` (scrape de Notion vía navegador Hermes + clicks en vistas filtradas).

---

## Qué es OpenCivics Commons
El directorio cívico federado abierto más completo rescatado: un "knowledge commons" de Notion con 19 Innovation Domains y miles de entradas curadas (sistemas, utilidades, individuos, organizaciones, patrones, protocolos, frameworks, artefactos). Es el catálogo práctico de lo que el movimiento OpenCivics considera "open civic systems".

## Isomorfismo con HSCSG (mapeo directo)
| OpenCivics Commons | HSCSG v15 OS |
|---|---|
| **Network Governance** (DAO governance, Colony, Holacracy, Snapshot, Gnosis Safe) | CDS-SUI-CGC-FRS-RAO (Sistema Alráico) — coordinación distribuida |
| **Currency Design / Regenerative Finance / Mutual Credit / Time Banking** (Sardex, BerkShares, Ithaca HOURS, CES, Circles UBI, Quadratic Funding, Demurrage) | ZNU / CaaS-BM — **principio anfibio**: misma lógica de cálculo opera en modo postmonetario (ZNU default offline) o conectado (USD/USDC vía priceParity). Extirpar infra USD, conservar lógica. |
| **Digital Public Infrastructure / Open Protocols** (Nostr, ActivityPub, Matrix, Solid, AT Protocol, TCP/IP) | Vasos comunicantes / nodo offline RAO / interoperabilidad (Hylo fork como capa social) |
| **Rights of Nature / Bioregional Coordination** (Te Awa Tupua, Ecuador RoN, CDER, Cascadia, BioFi) | ecotech / regen (loopEngine) — Sistema Alráico + límites ecológicos |
| **Mutual Aid / Local Food / Community Exchange System** (Bed-Stuy Strong, Open Food Network, CES) | vecinal / CaaS members |
| **Public Interest AI / AI Incident DB / Algorithmic Impact Assessment** (AI Now, AJL, NIST AI RMF) | loopEngine generativo + gate humano MJ (ContentCreation-OS) |
| **Collective Intelligence / Sense-Making / Dialogue** (Co-Intelligence, Pol.is, Kialo) | lucidez / participatory governance |
| **Cosmolocal Networks** (Fab Academy, RepRap, WikiHouse, GVCS, Precious Plastic) | Design Global, Manufacture Local (primitiva del Commons) |

## Valor para HSCSG
1. **Catálogo de validación externa:** confirma que ZNU/CaaS/Alráico no son inventos aislados — hay ~50 organizaciones vivas (Sardex, Bristol Pound, WIR, Circles, Timebanking UK) operando monedas complementarias/mutual-credit exactamente como HSCSG propone.
2. **Anexo D (Competitive Landscape CaaS):** HSCSG es el salto **offline-soberano** sobre estos directorios en la nube. El Commons es la "vitrina" en línea; HSCSG es el nodo que opera sin red.
3. **Frameworks ya mapeables:** Doughnut Economics, Ostrom, Solid, Nostr, ActivityPub, Matrix → usar como referencias en `docs/` y en el módulo de interoperabilidad.
4. **Individuals/Organizations:** ~50 think tanks y líderes (Vandana Shiva, Timnit Gebru, David Graeber, Bernard Lietaer, Elinor Ostrom citada) — útiles como autoridades de cita en el BRIEF y en `CivilizacionesState`.

## Limitaciones del rescate (honestidad)
- Resources (Primitives, Patterns, Protocols, Playbooks, Frameworks, Artifacts, Templates): el navegador de Notion lista SOLO nombres en la vista filtrada (sin descripción por entrada). Recuperar descripción requeriría clickar cada entrada (decenas/cientos de navegaciones) — no hecho.
- Open Civic Activities: la vista solo lista categorías contenedoras (Frameworks, Alliances, Grants…), sin entradas individuales expuestas.
- Organizations: descripciones recuperadas hasta "COBALT Bioregional Digital Twin"; ~25 entradas post-COBALT quedaron solo con nombre (la vista truncó el innerText).

## Acción recomendada
Incluir el Commons como fuente 47 en el BRIEF. No requiere código en el repo (es catálogo de conocimiento, no lógica de dominio). Mantener `opencivics_commons_backup.md` como fuente primaria local.
