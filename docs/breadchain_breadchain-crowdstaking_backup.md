# BreadchainCoop — Breadchain-crowdstaking (Archived) (Backup 2026-09-10)

**Fecha de asimilación:** 2026-09-10  
**Repositorio original:** https://github.com/BreadchainCoop/breadchain-crowdstaking  
**Commit HEAD:** 6699fa3 (2023-10-06)  
**Estado:** **Archivado** (junio 2024), Público, 476 commits, 2 ramas, 0 tags, 2 forks, 10 estrellas

---

## 📋 Resumen Ejecutivo

**breadchain-crowdstaking** es el **frontend original (archived)** para interactuar con el contrato Breadchain Crowdstaking. Fue archivado en junio 2024 y reemplazado por `crowdstake.fun` (monorepo Next.js + Foundry). Usa **Hardhat + Vite + React** (stack anterior a la migración a Next.js 15 + Foundry).

> **Importante**: Este es el **ancestro directo** de `crowdstake.fun` — entender la evolución ayuda a mapear patrones.

---

## 🏗️ Arquitectura Técnica (Legacy Stack)

### Stack (2023)
| Capa | Tech |
|------|------|
| Frontend | Vite + React + TypeScript |
| Smart Contracts | Hardhat (JavaScript/TypeScript) |
| Styling | Tailwind CSS + PostCSS |
| Testing | Synpress (Cypress + MetaMask) + Hardhat tests |
| Storybook | Component documentation |
| Package Manager | Yarn (via Volta) |
| Node | Volta pinned |

### Estructura
```
breadchain-crowdstaking/
├── hardhat/                # Hardhat project (contracts, tests, deploy)
├── src/                    # Frontend React (Vite)
│   ├── components/         # UI components
│   ├── hooks/              # Custom hooks
│   ├── utils/              # Utilities
│   └── App.tsx
├── public/                 # Static assets
├── tests/                  # E2E tests (Synpress)
├── .storybook/             # Storybook config
├── hardhat.config.js
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## 🔄 Evolución → crowdstake.fun

| Aspecto | breadchain-crowdstaking (2023) | crowdstake.fun (2024-2026) |
|---------|-------------------------------|----------------------------|
| Frontend | Vite + React | Next.js 15 App Router + React 19 |
| Contracts | Hardhat (JS/TS) | Foundry (Solidity/Rust) |
| Monorepo | No | Sí (pnpm workspace) |
| Design System | Tailwind config local | `@breadcoop/ui` (separate repo) |
| Wallet | MetaMask (injected) | Privy (embedded + gasless) |
| Cross-chain | No | Sí (familyId, EIP-712) |
| Telegram | No | Sí (Mini App) |
| E2E | Synpress | Custom anvil fork + GIF recording |
| Deploy | Hardhat scripts | Forge scripts + Netlify static |

---

## 🔗 Integración con Ecosistema Bread

| Repo | Relación |
|------|----------|
| `crowdstake.fun` | **Sucesor directo** — evolución completa |
| `ourcoop` | Fork de crowdstake.fun (no de este) |
| `bread-design-system` | No existía aún (Tailwind local) |
| `coopstable-contracts` | Paralelo (Stellar) |
| `commonware-restaking-contracts` | No relacionado |

---

## 📦 Archivos Clave para Asimilación HSCSG

| Archivo | Qué Aporta |
|---------|------------|
| `hardhat/` | Contratos originales, tests, deploy scripts |
| `src/` | Frontend React patterns (legacy) |
| `tests/` | Synpress E2E patterns |
| `.storybook/` | Component documentation pattern |
| `hardhat.config.js` | Hardhat config reference |
| `vite.config.ts` | Vite config reference |

---

## 🧠 Isomorfismos HSCSG ←→ Breadchain-crowdstaking

| Concepto Legacy | Concepto HSCSG / Moderno | Tipo Mapeo |
|-----------------|-------------------------|------------|
| Hardhat contracts | **Foundry contracts** (crowdstake.fun) | **Evolución** |
| Vite React | **Next.js App Router** | **Evolución** |
| MetaMask injected | **Privy embedded + gasless** | **Evolución** |
| Local Tailwind | **@breadcoop/ui design system** | **Evolución** |
| Synpress E2E | **Anvil fork + GIF pipeline** | **Evolución** |
| Single chain | **Multi-chain (familyId)** | **Evolución** |
| No Telegram | **Telegram Mini App** | **Evolución** |
| Hardhat deploy | **Forge deploy** | **Evolución** |
| Yarn/Volta | **pnpm + Node 24** | **Evolución** |
| Storybook | **Design system docs** | **Evolución** |

---

## 🏷️ Tags para BRIEFS_INDEX / fuentes_indice

```json
{
  "fuente_id": 37,
  "nombre": "BreadchainCoop/breadchain-crowdstaking (archived)",
  "tipo": "legacy-frontend",
  "url": "https://github.com/BreadchainCoop/breadchain-crowdstaking",
  "commit": "6699fa3",
  "fecha_asimilacion": "2026-09-10",
  "briefs_generados": ["breadchain_breadchain-crowdstaking_backup", "breadchain_breadchain-crowdstaking_integration"],
  "workstreams_activados": ["BREADCHAIN_INTEGRATION"],
  "isomorfismos": 10,
  "modulos_extraibles": ["legacy-patterns", "evolution-mapping"],
  "estado": "archived",
  "sucesor": "BreadchainCoop/crowdstake.fun (fuente #30)"
}
```

---

*Backup generado automáticamente por HSCSG v15 OS — Metodología hscsg-repo-assimilation (Fase 1: Backup)*