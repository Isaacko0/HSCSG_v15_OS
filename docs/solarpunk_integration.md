# Integración Solarpunk Utopia → HSCSG v15 OS (+ CaaS post/monetario)
# Dos repos: lizTheDeveloper/solarpunk_utopia (APP REAL) + Isaacko0/Plataforma-solarpunk_utopia (SPEC)
# Tres perspectivas: Usuario · LLM · Proyecto HSCSG_v15_OS / CaaS

> Backups en `docs/solarpunk_liz_backup.md` y `docs/solarpunk_isaac_backup.md`.

---

## 0. Síntesis de ambos repos

| Dimensión | lizTheDeveloper (REAL) | Isaacko0/Plataforma (SPEC) |
|-----------|------------------------|-----------------------------|
| Estado | App funcionando (run_all_services) | Solo specs, sin código |
| Modelo | Economía del don + ValueFlows + malla DTN | Economía del don no-monetaria |
| Transporte | DTN/WiFi Direct/BATMAN-adv | ActivityPub/Meshtastic/DTN (planeado) |
| Agentes | 14 IA operativas | 10 IA especificadas |
| Crypto | no (USDC de Conway no aplica) | EXPLÍCITAMENTE prohibido |
| Identidad | Web of Trust (vouch chains) | DIDs |
| Propósito | Resistencia / santuario / emergencias | Comunidades post-escasez |

**Conclusión LLM**: ambos son la **capa de coordinación offline + don** que HSCSG v15 OS necesita para
que la base material se comparta sin dinero. liz = implementación de referencia; Isaac = manifiesto
alineado con MJ (Ley III: lucidez, sin estética financiera).

---

## 1. PERSPECTIVA USUARIO

Como usuario de HSCSG v15 OS quiero que el nodo pueda:
- **Coordinar recursos en economía del don** (no venta): ofrezco excedente de huerta, necesito
  herramientas, el sistema hace match vía ValueFlows — sin tocar ZNU para intercambios de cuidado.
- **Seguir funcionando SIN internet** (malla DTN/local): si cae la red, el nodo sigue compartiendo.
- **Confiar por Web of Trust**: mi reputación viene de avales de la comunidad, no de un saldo.
- **Activar red santuario** en emergencias: botón de pánico, borrado seguro, coordinación de ayuda.
- **No ver nunca crypto/tokens**: la economía del don es sagrada; ZNU solo mide contribución, no compra.

---

## 2. PERSPECTIVA LLM (asimilación)

| Solarpunk | Asimilación HSCSG v15 OS |
|-----------|--------------------------|
| ValueFlows (offers/needs/exchanges) | Módulo `Solarpunk`: ofertas/necesidades/intercambios como ValueFlows puros |
| Web of Trust (vouch) | `members` del Colectivo ya tienen `signedSocialDNA`; añado `vouches` y `trustScore` |
| 14/10 agentes IA | Ya tengo Orquestación (Paperclip) + Autómata (Conway); el matchmaking entra ahí |
| DTN mesh | `survivalTier` del Autómata = "conectado / offline / aislado" |
| Panic / secure wipe | Acción gobernada por Ley I MJ (proteger a personas en riesgo) |
| Emma Goldman Test | Filtro de diseño: ¿aumenta autonomía o crea dependencia? |
| Sin crypto (Isaac) | Refuerza ZNU como unidad NO-especulativa (Ley III) |

**Decisión**: NO instalo liz (requiere NATS GCP, servicios Python, Android). Asimilo el MODELO:
ValueFlows + Web of Trust + don + offline, implementado como módulo local en React/Zustand.

---

## 3. PERSPECTIVA PROYECTO HSCSG / CaaS (monetario → postmonetario)

El Solarpunk es el **puente entre CaaS monetario y postmonetario**:

### 3a. CaaS MONETARIO (lo ya construido)
- Suscripción, revenue share, B2B, afiliados — flujos en ZNU/USDC gobernados por MJ.

### 3b. Solarpunk POSTMONETARIO (nuevo módulo)
- Economía del don pura: ofertas/necesidades resueltas por **AUT×CDS**, no por precio.
- El "pago" es **contribución a la base material** (cuidar huerta a cambio de herramienta).
- Web of Trust sustituye reputación financiera.

### 3c. Transición monetario → postmonetario (el producto)
El módulo `Solarpunk` muestra AMBOS lados y un **medidor de transición**:
- % de intercambios resueltos por don vs por ZNU → "índice de post-monetarización".
- A mayor AUT colectivo, menor necesidad de ZNU → el nodo camina hacia post-escasez.
- **Producto CaaS**: el OS mismo se vende/comparta como "kit de nodo solarpunk" (CaaS monetario
  para arrancar) pero su destino es volverse postmonetario (el don lo sostiene).

### 3d. Isomorfismo con MJ
```
SOLARPUNK (Isaac)              HSCSG v15 (MJ)
No monetario / sin crypto  ≈   Ley III: lucidez, sin estética financiera flotante
Ayuda mutua / don         ≈   Ley II: ganarse la vida soberanizando (regenerar, no extraer)
Autonomía comunitaria     ≈   Ley I: no dañar (proteger personas, red santuario)
```

---

## 4. Implementación (módulo `/solarpunk`)

Estado (`SolarpunkState`):
- `offers`: recursos donados (tipo, cantidad, nodo).
- `needs`: demandas de la comunidad.
- `exchanges`: ValueFlows ejecutados (oferente, demandante, recurso, medio: 'don' | 'znu').
- `vouches`: avales member→member; `trustScore(member)`.
- `mesh`: { online: boolean, peers: number } — supervivencia de red.
- `sanctuary`: activación de red santuario (Ley I).
- `postMonetaryIndex`: % don / (%don + %znu).

Cálculos (`lib/solarpunk.ts`):
- `matchOffersNeeds(offers, needs)` — matchmaking por AUT/CDS.
- `trustScore(member, vouches)` — Web of Trust.
- `postMonetaryIndex(exchanges)` — medidor de transición.
- `evaluateSanctuary(ctx)` — gate MJ (Ley I) antes de activar.
- `meshStatus()` — online/offline/aislado.

> El Solarpunk de liz "compra su servidor con NATS". El Solarpunk HSCSG **no necesita servidor**:
> la malla DTN y el don lo sostienen entre nodos. Misma resistencia, sustrato físico-comunitario.
