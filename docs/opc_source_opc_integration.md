# opc-source/one-person-company — Integración Operativa con HSCSG v15 OS

**Objetivo:** Integrar la arquitectura Cloud Native (CNCF + Alibaba) para one-person-company como **infraestructura base TypeScript** en HSCSG v15 OS, enriqueciendo: vasos `infra:connect`, neko-rooms federation, observabilidad CAC/PGS, service mesh para neko-rooms, y OpenHaven Matrix enrichment.

---

## Resumen Ejecutivo

opc-source/one-person-company define una **arquitectura de infraestructura Cloud Native completa** para one-person-companies, combinando CNCF Landscape + Alibaba Open Source. No es código ejecutable ni curación de herramientas: es **arquitectura de referencia infraestructural** (diagrama v0.1.0 + componentes detallados).

**Valor para HSCSG:** Infraestructura base para:
- **Vasos `infra:connect`** (multi-cluster, service mesh, observabilidad)
- **neko-rooms federation** (multi-cluster K8s via OCM + KubeVela)
- **Métricas CAC/PGS** (observabilidad stack: OpenTelemetry, Prometheus, Grafana)
- **neko-rooms secure comms** (Service Mesh: Istio, Envoy, Dapr)
- **OpenHaven Matrix enrichment** (CNCF Landscape + Alibaba components)

---

## Decisiones Take / Adapt / Discard

### ✅ TAKE (Integrar Directamente como Arquitectura + Datos)

| # | Concepto opc-source | Destino HSCSG | Archivo Objetivo |
|---|---------------------|---------------|------------------|
| 1 | **Multi-Cluster Architecture** (KubeVela + OCM) | `MultiClusterManager` | `lib/multi_cluster.ts` |
| 2 | **Service Mesh Stack** (Istio, Envoy, Dapr, WebAssembly) | `ServiceMeshStack` | `lib/service_mesh.ts` |
| 3 | **Observability Stack** (OpenTelemetry, Prometheus, Grafana, Kibana, ElasticSearch, Fluentd) | `ObservabilityStack` | `lib/observability_stack.ts` |
| 4 | **Cloud Native Container** (K8s, OpenKruise, Istio, Envoy, Dapr, Containerd, etcd) | `CloudNativeContainer` | `lib/cloud_native_container.ts` |
| 5 | **CNCF Landscape Mapping** (categorías + proyectos) | `CNCLandscape` | `lib/cncf_landscape.ts` |
| 6 | **Alibaba Cloud Components** (Sealer, KubeVela, Nacos, Sentinel, Seata, RocketMQ, ShardingSphere, OpenAnolis) | `AlibabaCloudStack` | `lib/alibaba_cloud_stack.ts` |
| 7 | **Cloud Delivery** (Sealer, Cluster Image) | `ClusterDelivery` | `lib/cluster_delivery.ts` |
| 8 | **Infrastructure as Code** (Terraform, Open Cluster Management) | `IaCManager` | `lib/iac_manager.ts` |
| 9 | **Microservice Frameworks** (Dubbo, Nacos, Sentinel, Seata, RocketMQ, ShardingSphere) | `MicroserviceFrameworkStack` | `lib/microservice_frameworks.ts` |
| 10 | **Operating System** (OpenAnolis) | `OperatingSystemRef` | `lib/os_reference.ts` |
| 11 | **Infrastructure Diagram v0.1.0** | `InfrastructureDiagram` | `docs/infrastructure_diagram_v010.md` |

### 🔄 ADAPT (Transformar para HSCSG)

| # | Concepto Original | Adaptación Requerida | Destino HSCSG |
|---|-------------------|---------------------|---------------|
| 1 | **Kubernetes + KubeVela + OCM** (YAML/Helm) | Convertir a TypeScript types + neko-rooms federation logic | `lib/multi_cluster.ts` + `packages/neko-client` |
| 2 | **Istio/Envoy/Dapr** (Sidecar proxies) | Convertir a `ServiceMeshConfig` para neko-rooms WebRTC secure channels | `lib/service_mesh.ts` + `packages/neko-client` |
| 3 | **Prometheus/Grafana/OpenTelemetry** (Servers) | Convertir a `MetricsCollector` client-side para CAC/PGS | `lib/observability_stack.ts` → `lib/metrics.ts` |
| 4 | **CNCF Landscape** (Interactive landscape.cncf.io) | Convertir a `CNCLandscape` static data para OpenHaven Matrix | `lib/cncf_landscape.ts` → OpenHaven Matrix |
| 4 | **Alibaba Components** (Sealer, KubeVela, Nacos, etc.) | Mapear a equivalents HSCSG: KubeVela→MultiCluster, Nacos→Service Registry, Sealer→ClusterDelivery | `lib/alibaba_cloud_stack.ts` |
| 5 | **Sealer Cluster Image** | Convertir a `ClusterImage` type para neko-rooms deployment | `lib/cluster_delivery.ts` |
| 6 | **Terraform/Open Cluster Management** | Convertir a `IaCManager` para neko-rooms provisioning | `lib/iac_manager.ts` |
| 7 | **Dubbo/Nacos/Sentinel/Seata/RocketMQ/ShardingSphere** | Mapear a HSCSG equivalents: Nacos→Service Registry, Sentinel→Rate Limiting, Seata→Distributed Tx | `lib/microservice_frameworks.ts` |
| 7 | **OpenAnolis OS** | Reference only → `OperatingSystemRef` | `lib/os_reference.ts` |
| 8 | **Infrastructure Diagram v0.1.0** | Convertir a Mermaid/Markdown para docs | `docs/infrastructure_diagram_v010.md` |
| 9 | **CNCF Categories** (Cluster Cloud Ops, Cloud Deliver, Cloud, Container, Observability, Microservice, OS) | Mapear a OpenHaven Matrix categories | `lib/cncf_landscape.ts` |

### ❌ DISCARD (No Integrar)

| # | Componente | Razón |
|---|------------|-------|
| 1 | **Cloud Providers específicos** (Aliyun, Tencent, Huawei, Private) | Vendor lock-in — HSCSG es cloud-agnostic |
| 2 | **KubeVela/OCM/Sealer YAML/Helm charts** | Configuración declarativa — HSCSG usa TypeScript types |
| 3 | **Kubernetes manifests/operators** | K8s-specific — HSCSG es K8s-agnostic (usa neko-rooms) |
| 4 | **Istio/Envoy sidecar configs** | Sidecar-specific — HSCSG usa WebRTC directo |
| 4 | **Prometheus/Grafana server configs** | Server-side — HSCSG usa client-side metrics |
| 5 | **Aliyun/ACK Distro specifics** | Vendor-specific — HSCSG cloud-agnostic |
| 6 | **Java/Go specific frameworks** (Dubbo, Spring Cloud Alibaba) | Language-specific — HSCSG es TypeScript |
| 7 | **Containerd/etcd/Kubernetes configs** | Infra-specific — HSCSG abstrae infra |

---

## Archivos a Crear en HSCSG (Nuevos Módulos de Infraestructura)

| Archivo | Descripción | Basado en opc-source |
|---------|-------------|---------------------|
| `src/core/lib/multi_cluster.ts` | `MultiClusterManager` (KubeVela + OCM logic) | Cluster Cloud Ops |
| `src/core/lib/service_mesh.ts` | `ServiceMeshStack` (Istio, Envoy, Dapr, WASM) | Service Mesh |
| `src/core/lib/observability_stack.ts` | `ObservabilityStack` (OTel, Prometheus, Grafana, Kibana, ES, Fluentd) | Observability |
| `src/core/lib/cloud_native_container.ts` | `CloudNativeContainer` (K8s, OpenKruise, Istio, Envoy, Dapr, Containerd, etcd) | Cloud Native Container |
| `src/core/lib/cncf_landscape.ts` | `CNCLandscape` (categorías + proyectos CNCF) | CNCF Landscape |
| `src/core/lib/alibaba_cloud_stack.ts` | `AlibabaCloudStack` (Sealer, KubeVela, Nacos, Sentinel, Seata, RocketMQ, ShardingSphere, OpenAnolis) | Alibaba Cloud |
| `src/core/lib/cluster_delivery.ts` | `ClusterDelivery` (Sealer cluster images) | Cloud Deliver |
| `src/core/lib/iac_manager.ts` | `IaCManager` (Terraform, OCM) | IaC |
| `src/core/lib/microservice_frameworks.ts` | `MicroserviceFrameworkStack` (Dubbo, Nacos, Sentinel, Seata, RocketMQ, ShardingSphere) | Microservice Frameworks |
| `src/core/lib/os_reference.ts` | `OperatingSystemRef` (OpenAnolis) | Operating System |
| `docs/infrastructure_diagram_v010.md` | Diagrama v0.1.0 en Mermaid/Markdown | Infrastructure Diagram |

---

## Archivos a Extender/Modificar (Existentes)

| Archivo | Extensión | Referencia opc-source |
|---------|-----------|----------------------|
| `src/core/lib/boundaries.ts` | Añadir: `InfrastructurePolicy` (cluster, mesh, observability rules) | Cluster policies |
| `src/core/lib/observability_stack.ts` | Ya existe → extender con OTel, Prometheus, Grafana, Kibana, ES, Fluentd configs | Observability Stack |
| `src/core/lib/metrics.ts` | Extender: `CAC/PGS` collectors usando `ObservabilityStack` client-side | Metrics collection |
| `src/core/state/automaton.ts` | Añadir: `infrastructure` slice (clusters, mesh, observability) | Infrastructure state |
| `src/core/state/store.ts` | Integrar `infrastructure` slice | Store integration |
| `packages/neko-client/src/` | Añadir: `MultiClusterManager`, `ServiceMeshClient`, `ObservabilityClient` | neko-rooms federation |
| `src/app/(os)/infrastructure/page.tsx` | Nueva pantalla: clusters, mesh, observability, delivery | Infrastructure management |
| `src/app/(os)/vasos/page.tsx` | Actualizar vaso `infra:connect` con nuevos componentes | Vasos update |

---

## Vasos Comunicantes Afectados

| Vaso | Impacto | Acción |
|------|---------|--------|
| **infra:connect** | **Principal** — Multi-cluster, Service Mesh, Cluster Delivery, IaC | `MultiClusterManager` + `ServiceMeshStack` + `ClusterDelivery` + `IaCManager` |
| **intel:match** | Observabilidad → Métricas CAC/PGS automáticas | `ObservabilityStack` → `MetricsCollector` |
| **governance:sync** | Cluster policies via Boundaries CEL | `InfrastructurePolicy` en Boundaries |
| **trust:bridge** | Service Mesh mTLS para neko-rooms | `ServiceMeshStack` → mTLS config |
| **eco:sync** | Métricas infra → CAC vectors (efficiency, resilience) | Infrastructure metrics → CAC |
| **app:federate** | Cluster delivery para CaaS-BM deployments | `ClusterDelivery` → CaaS-BM deployments |

---

## Plan de Implementación (Orden Sugerido)

### Fase 1: Data Constants + Core Types (Día 1-2)
```bash
# Data constants (arquitectura pura)
src/core/lib/cncf_landscape.ts          # CNCF Landscape categories + projects
src/core/lib/alibaba_cloud_stack.ts     # Alibaba components mapped
src/core/lib/microservice_frameworks.ts # Dubbo, Nacos, Sentinel, Seata, etc.
src/core/lib/os_reference.ts            # OpenAnolis reference

# Core infrastructure types
src/core/lib/multi_cluster.ts           # MultiClusterManager (KubeVela + OCM)
src/core/lib/service_mesh.ts            # ServiceMeshStack (Istio, Envoy, Dapr)
src/core/lib/observability_stack.ts     # ObservabilityStack (OTel, Prometheus, Grafana, etc.)
src/core/lib/cloud_native_container.ts  # CloudNativeContainer (K8s, OpenKruise, etc.)
src/core/lib/cluster_delivery.ts        # ClusterDelivery (Sealer)
src/core/lib/iac_manager.ts             # IaCManager (Terraform, OCM)

# Tests
src/core/lib/*.test.ts
```

### Fase 2: Integración en Módulos Core + neko-client (Día 2-3)
```bash
# Extender módulos existentes
src/core/lib/boundaries.ts              # + InfrastructurePolicy
src/core/lib/observability_stack.ts     # Extender con OTel, Prometheus, Grafana, Kibana, ES, Fluentd
src/core/lib/metrics.ts                 # + CAC/PGS collectors usando ObservabilityStack
src/core/state/automaton.ts             # + infrastructure slice
src/core/state/store.ts                 # + infrastructure slice integration

# neko-client extensions
packages/neko-client/src/multi_cluster.ts      # MultiClusterManager para neko
packages/neko-client/src/service_mesh.ts       # ServiceMeshClient para neko
packages/neko-client/src/observability.ts      # ObservabilityClient para neko
```

### Fase 3: UI + Pantallas + Vasos (Día 3-4)
```bash
# Nueva pantalla
src/app/(os)/infrastructure/page.tsx    # Clusters, Mesh, Observability, Delivery

# Vasos actualizados
src/app/(os)/vasos/page.tsx             # infra:connect actualizado

# neko-rooms federation
packages/neko-client/src/federation.ts  # Multi-cluster neko federation
```

### Fase 4: OpenHaven Matrix + Tests (Día 4)
```bash
# OpenHaven Matrix enrichment
src/core/lib/cncf_landscape.ts          # Para OpenHaven Matrix

# Diagram docs
docs/infrastructure_diagram_v010.md     # Mermaid diagram

# Tests + Verificación
npm run typecheck
npm run build
npm run test
npm run preview
# Verificar: /infrastructure, vasos/infra:connect, neko federation
```

---

## Tasks en Orchestrator (Actualizar `scripts/orchestrator-next-steps.js`)

```javascript
// Workstream: OPC_SOURCE_INTEGRATION
{
  "id": "OPC-data-constants",
  "title": "Crear data constants: cncf_landscape, alibaba_cloud_stack, microservice_frameworks, os_reference",
  "deps": [],
  "effort": 2,
  "value": 85,
  "workstream": "OPC_SOURCE_INTEGRATION",
  "source": "agent"
},
{
  "id": "OPC-infra-core-types",
  "title": "Core infrastructure types: multi_cluster, service_mesh, observability_stack, cloud_native_container, cluster_delivery, iac_manager",
  "deps": ["OPC-data-constants"],
  "effort": 3,
  "value": 90,
  "workstream": "OPC_SOURCE_INTEGRATION",
  "source": "agent"
},
{
  "id": "OPC-integration-core",
  "title": "Integrar en core: Boundaries InfrastructurePolicy, ObservabilityStack extendido, Metrics collectors, Automaton infrastructure slice",
  "deps": ["OPC-infra-core-types"],
  "effort": 2,
  "value": 85,
  "workstream": "OPC_SOURCE_INTEGRATION",
  "source": "agent"
},
{
  "id": "OPC-neko-federation",
  "title": "neko-client extensions: MultiClusterManager, ServiceMeshClient, ObservabilityClient, Federation",
  "deps": ["OPC-infra-core-types"],
  "effort": 3,
  "value": 90,
  "workstream": "OPC_SOURCE_INTEGRATION",
  "source": "agent"
},
{
  "id": "OPC-ui-vasos",
  "title": "UI: Infrastructure page + Vasos infra:connect actualizado + neko federation",
  "deps": ["OPC-integration-core", "OPC-neko-federation"],
  "effort": 2,
  "value": 80,
  "workstream": "OPC_SOURCE_INTEGRATION",
  "source": "agent"
},
{
  "id": "OPC-openhaven-enrichment",
  "title": "OpenHaven Matrix enrichment con CNCF Landscape + Alibaba components",
  "deps": ["OPC-data-constants"],
  "effort": 1,
  "value": 75,
  "workstream": "OPC_SOURCE_INTEGRATION",
  "source": "agent"
}
```

---

## Verification Checklist

- [ ] `npm run typecheck` pasa (TypeScript strict en todos los nuevos módulos)
- [ ] `npm run build` pasa (Vite + tsc)
- [ ] `npm run test` pasa (tests para cada módulo + integraciones)
- [ ] `npm run preview` → `/infrastructure` pantalla accesible
- [ ] `npm run preview` → `/vasos` vaso `infra:connect` actualizado
- [ ] `node scripts/orchestrator-next-steps.js run OPC-data-constants` → completado
- [ ] `node scripts/orchestrator-next-steps.js run OPC-ui-vasos` → completado
- [ ] Vasos: `infra:connect` funcionando con MultiCluster + ServiceMesh + Observability
- [ ] neko-rooms federation: multi-cluster funcional
- [ ] Métricas CAC/PGS colectadas via ObservabilityStack
- [ ] OpenHaven Matrix enriquecido con CNCF Landscape
- [ ] `docs/opc_source_opc_integration.md` creado (este documento)
- [ ] `docs/opc_source_opc_backup.md` creado (backup quirúrgico)
- [ ] `BRIEFS_INDEX.md` actualizado (BF-085, BF-086 → ✅)
- [ ] `fuentes_indice.json` actualizado (fuente #16 estado ✅)
- [ ] `docs/infrastructure_diagram_v010.md` creado (Mermaid diagram)

---

## Referencias

- **Backup Quirúrgico:** `docs/opc_source_opc_backup.md`
- **Fuentes Índice:** `docs/fuentes_indice.json` (fuente #16)
- **BRIEFS_INDEX:** BF-085 (`opc_source_opc_backup.md`), BF-086 (`opc_source_opc_integration.md`)
- **Skills:** `hscsg-repo-assimilation` (metodología 4 fases), `brief-detector-recommender`
- **Repo Fuente:** https://github.com/opc-source/one-person-company (commit 0dc1105)

---

*Integración generada: 2026-08-22 | Metodología HSCSG 4 fases | Repo: opc-source/one-person-company*