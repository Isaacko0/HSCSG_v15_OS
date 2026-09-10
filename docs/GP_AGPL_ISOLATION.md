# AISLAMIENTO GPL/AGPL — Documentación Técnica
## Arquitectura de Microservicios para Cumplimiento Copyleft

**Fecha:** 2026-09-10  
**Versión:** 1.0  
**Estado:** Implementado via Botón Rojo Monumental

---

## Principio Legal: "Mere Aggregation" (GPL FAQ)

> "Mere aggregation of two programs means putting them side by side on the same computer... If the modules are combined in a single address space, that combines them into one program."

**Solución HSCSG:** Microservicios en procesos separados + comunicación RPC/HTTP = **NO combinación en un mismo espacio de direcciones** = **Mere Aggregation** = Core MIT no contaminado.

---

## Microservicios Implementados

| Servicio | Licencia | Puerto | Repos Envuelto | Comunicación |
|---|---|---|---|---|
| `colony-wrapper` | GPL-3.0 | 3001 | colony-gql, colonyJS, colonyNetwork, colonySDK | HTTP/REST |
| `kleros-wrapper` | GPL-3.0 | 3002 | kleros-court, kleros-ecosystem | HTTP/REST |
| `nextcloud-wrapper` | AGPL-3.0 | 3003 | nextcloud-server | WebDAV/REST |
| `tekitl-wrapper` | GPL-3.0 | 3004 | tekitl | HTTP/REST |

---

## Uso desde Core HSCSG (MIT)

```typescript
// src/core/lib/gpl-bridge.ts
// SOLO cliente HTTP - NO importar código GPL

export interface GPLServiceClient {
  colony: ColonyClient;
  kleros: KlerosClient;
  nextcloud: NextcloudClient;
  tekitl: TekitlClient;
}

export class ColonyClient {
  private baseUrl = process.env.COLONY_SERVICE_URL || 'http://localhost:3001';
  
  async connect(network: string): Promise<{ connected: boolean }> {
    const res = await fetch(`${this.baseUrl}/colony/connect`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ network, provider: 'ethereum' })
    });
    return res.json();
  }
  
  async operation(op: string, params: any): Promise<any> {
    const res = await fetch(`${this.baseUrl}/colony/operation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ operation: op, params })
    });
    return res.json();
  }
}

// ... KlerosClient, NextcloudClient, TekitlClient similares
```

---

## Despliegue

### Desarrollo Local
```bash
# Terminal 1: Colony
cd services/gpl-isolated/colony && npm run dev

# Terminal 2: Kleros
cd services/gpl-isolated/kleros && npm run dev

# Terminal 3: Nextcloud
cd services/gpl-isolated/nextcloud && npm run dev

# Terminal 4: Tekitl
cd services/gpl-isolated/tekitl && npm run dev

# Terminal 5: Core HSCSG
npm run dev
```

### Producción (Docker Compose)
```yaml
# docker-compose.gpl.yml
version: '3.8'
services:
  colony-gpl:
    build: ./services/gpl-isolated/colony
    ports: ["3001:3001"]
    environment:
      - NODE_ENV=production
    restart: unless-stopped
  
  kleros-gpl:
    build: ./services/gpl-isolated/kleros
    ports: ["3002:3002"]
    environment:
      - NODE_ENV=production
    restart: unless-stopped
  
  nextcloud-agpl:
    build: ./services/gpl-isolated/nextcloud
    ports: ["3003:3003"]
    environment:
      - NODE_ENV=production
    restart: unless-stopped
  
  tekitl-gpl:
    build: ./services/gpl-isolated/tekitl
    ports: ["3004:3004"]
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

---

## Verificación de Cumplimiento

### Checklist Legal
- [x] Core HSCSG (MIT) no importa código GPL/AGPL
- [x] Comunicación solo vía HTTP/JSON (procesos separados)
- [x] Cada microservicio tiene su propia LICENSE (GPL-3.0 / AGPL-3.0)
- [x] Código fuente de microservicios disponible (cumple GPL)
- [x] No distribución de binarios combinados
- [x] license-checker CI excluye `services/gpl-isolated/**`

### Exclusión de license-checker
```json
// .license-checkerrc
{
  "exclude": ["services/gpl-isolated/**"]
}
```

---

## Mantenimiento

### Actualizar dependencias GPL
```bash
cd services/gpl-isolated/colony && npm update
cd services/gpl-isolated/kleros && npm update
cd services/gpl-isolated/nextcloud && npm update
cd services/gpl-isolated/tekitl && npm update
```

### Verificar compatibilidad
```bash
npm run license:check  # Debe pasar (excluye microservicios)
```

---

## Contacto Legal
Para dudas sobre cumplimiento GPL/AGPL: consultar `docs/LEGAL_PROTECTION_FINANCIAL_RETURN.md` y `docs/LEGAL_NOTICE.md`
