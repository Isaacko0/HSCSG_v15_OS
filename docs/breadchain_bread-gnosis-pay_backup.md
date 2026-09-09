# BreadchainCoop — Bread-gnosis-pay (Backup 2026-09-10)

**Fecha de asimilación:** 2026-09-10  
**Repositorio original:** https://github.com/BreadchainCoop/bread-gnosis-pay  
**Commit HEAD:** 8aca4b6 (2024-03-17)  
**Estado:** Público, 36 commits, 2 ramas, 0 tags, 1 fork, 1 estrella

---

## 📋 Resumen Ejecutivo

**bread-gnosis-pay** es un **proyecto legacy/hackathon** (marzo 2024) para conectar Bread con Gnosis Pay. Incluye contrato `Bread2GnosisPay.sol` y frontend básico. Tiene 2 años de antigüedad, sin desarrollo reciente, y parece ser un experimento temprano de bridge que no evolucionó.

> **Nota**: Archivo conceptualmente — los repos activos usan crowdstake.fun/ourcoop para funding, no este bridge.

---

## 🏗️ Arquitectura Técnica

### Stack
| Capa | Tech |
|------|------|
| Contrato | Solidity + Foundry (Forge) |
| Frontend | Básico (en `frontend/`) |
| Librerías | OpenZeppelin contracts-upgradeable v5.0.2 |
| Deploy | Forge scripts |
| Red | Gnosis Chain (chain 100) |

### Estructura
```
bread-gnosis-pay/
├── src/                    # Contratos
│   └── Bread2GnosisPay.sol # Bridge contract
├── script/                 # Deploy scripts
│   └── DeployYieldDisburser.s.sol
├── test/                   # Tests
├── frontend/               # Frontend básico
├── lib/                    # OpenZeppelin (git submodule)
├── foundry.toml
├── hackathon_deployment.json # Deployment tracking
└── README.md
```

---

## 🔗 Integración con Ecosistema Bread

| Repo | Relación |
|------|----------|
| `crowdstake.fun` | Protocolo principal (reemplaza necesidad de bridge) |
| `ourcoop` | Fork cooperativo (usa crowdstake.fun) |
| `coopstable-contracts` | Stablecoin separada (Stellar) |
| `bread-design-system` | No usado |
| `commonware-restaking-contracts` | No usado |

---

## 📦 Archivos Clave para Asimilación HSCSG

| Archivo | Qué Aporta |
|---------|------------|
| `src/Bread2GnosisPay.sol` | Bridge pattern (legacy) |
| `script/DeployYieldDisburser.s.sol` | Yield disbursement pattern |
| `hackathon_deployment.json` | Deployment tracking example |

---

## 🧠 Isomorfismos HSCSG ←→ Bread-gnosis-pay

| Concepto Gnosis Pay | Concepto HSCSG | Tipo Mapeo |
|---------------------|----------------|------------|
| Bridge Bread → Gnosis | **Vaso infra:connect** — puentes inter-nodo | **Arquitectural** |
| Yield Disburser | **Distribución yield** — Autómata + Alráico | **Económico** |
| Hackathon deployment | **Orchestrator deploy tracking** | **Operacional** |
| OpenZeppelin upgradeable | **Upgradable modules** pattern | **Actualizabilidad** |

---

## 🏷️ Tags para BRIEFS_INDEX / fuentes_indice

```json
{
  "fuente_id": 36,
  "nombre": "BreadchainCoop/bread-gnosis-pay",
  "tipo": "legacy-bridge-hackathon",
  "url": "https://github.com/BreadchainCoop/bread-gnosis-pay",
  "commit": "8aca4b6",
  "fecha_asimilacion": "2026-09-10",
  "briefs_generados": ["breadchain_bread-gnosis-pay_backup", "breadchain_bread-gnosis-pay_integration"],
  "workstreams_activados": ["BREADCHAIN_INTEGRATION"],
  "isomorfismos": 4,
  "modulos_extraibles": ["bridge-pattern", "yield-disburser", "deployment-tracking"],
  "estado": "legacy/archived conceptualmente"
}
```

---

*Backup generado automáticamente por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 1: Backup)*