# Colony GPL-3.0 Microservice

## Propósito
Aislar código GPL-3.0 (colony-gql, colonyJS, colonyNetwork, colonySDK) del core MIT de HSCSG.

## Arquitectura
- **Proceso separado** en puerto 3001
- **Comunicación:** HTTP/REST + JSON
- **Core HSCSG** llama vía `fetch()` / cliente HTTP
- **No link estático** → "mere aggregation" GPL válido

## Licencia
GPL-3.0-only — Este microservicio DEBE ser GPL-3.0 para cumplir copyleft.
El core HSCSG (MIT) NO se contamina.

## Uso desde Core HSCSG
```typescript
// En core HSCSG (MIT) - SOLO llamada HTTP
const colonyClient = {
  async connect(network: string) {
    const res = await fetch('http://localhost:3001/colony/connect', {
      method: 'POST',
      body: JSON.stringify({ network, provider: 'ethereum' })
    });
    return res.json();
  }
};
```
