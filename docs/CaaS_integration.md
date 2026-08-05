# Integración CaaS → HSCSG v15 OS
# Comunidad como Servicio reconciliado con Materialismo Jerárquico (MJ) y Sistema Alráico

> Documento de integración. El input original de CaaS se conserva en
> `docs/CaaS_backup_original.md` (copia de seguridad). Aquí se asimila CaaS
> al marco HSCSG v15 y se implementa como módulo real (`/caas`).

---

## 1. El problema de CaaS visto desde el Materialismo Jerárquico

El CaaS original (acceso monetizado a un grupo de personas) cae en la **estética flotante** que
el MJ critica: monetiza *acceso* (capa C, inmaterial) sin anclar a base material. Sus riesgos bajo
MJ:

- **Sin base material** → la comunidad es un lumen C desconectado de tierra/agua/energía/comida.
- **Monetización del acceso** → puede violar **Ley I MJ** si extrae valor sin regenerar base.
- **Reparto de ingresos sobre volumen** → puede violar **Ley II MJ** si ROI (ΔAUT/costo) < 1.
- **Gamificación/tokens** → puede violar **Ley III MJ** si no hay datos de laboratorio (PGS real).

## 2. Reescritura HSCSG v15 de CaaS

CaaS se reinterpreta como **Comunidad como Servicio de Base Material** (CaaS-BM): la comunidad
NO es el producto a vender, es el **órgano ontogenético** que sostiene la base material. El acceso
se gana (no se compra) mediante contribución verificable a la base material.

| CaaS original | CaaS-BM (HSCSG v15) |
|---------------|---------------------|
| Monetizar acceso a grupo | **Soberanizar acceso** vía contribución a base material (ValueFlows) |
| Miembros pagan por entrar | Miembros **aportan** trabajo/recursos → ganan ZNU + voz |
| Creador monetiza facilitando | Colectivo facilita; reparto según CDS y PMRTE (no según volumen ciego) |
| Inversión SaaS→comunidad | **Inversión comunidad→base material** (tierra/energía/comida primero) |
| Afiliados/comisiones | **Flujos entre pares** con ValueFlows (Labor/Love/Care/Repair/Manufacture) |
| Revenue sharing por volumen | **Reparto por AUT y CDS** (anti-acumulación: demurrage sobre ZNU) |
| Tokens gamificados | **ZNU con demurrage** + paridad biofísica (kg/kWh/horas) |

## 3. El modelo de negocio CaaS-BM (ingresos bajo MJ)

Revenue streams permitidos (todos pasan gate MJ):

1. **Suscripción de pertenencia (stake ZNU)** — el miembro bloquea ZNU como compromiso; no es pago
   USDC ciego sino stake ontogenético. Demurrage evita acumulación.
2. **Revenue sharing por AUT** — reparto de excedente FABSHIP/energía según AUT_ALIM/ENER y CDS.
3. **Servicios entre pares (B2B/B2C cautivo)** — marketplace de alta confianza resuelto con
   ValueFlows (sin dinero fiduciario intermedio que extraiga).
4. **Afiliados verdes** — comisión SOLO por referir herramientas que elevan AUT (ej. paneles, semillas).
5. **Contenido/educación regenerativa** — pagado en ZNU, no en extractión USDC.

Toda transacción pasa por `evaluateMJGate`: si toca base material (Ley I), si ROI<1 (Ley II), o si
no hay PGS real (Ley III), se **deniega y audita**.

## 4. Implementación en HSCSG v15 OS (módulo `/caas`)

Estado (`CaaSState`):
- `tiers`: niveles de pertenencia con stake ZNU requerido y beneficios (anclados a AUT mínimo).
- `memberships`: miembro ↔ tier ↔ stake ↔ contribución medida (ValueFlows).
- `revenueStreams`: los 5 streams con elegibilidad MJ en vivo.
- `payouts`: reparto calculado por AUT+CDS, con demurrage aplicado.
- `auditCaaS`: trazabilidad de cada movimiento de valor.

Cálculos (`lib/caas.ts`):
- `tierEligible(member, aut, cds)` — puede acceder al tier según su AUT/CDS real.
- `revenueShare(payoutBase, members, aut, cds)` — reparto equitativo con tope demurrage.
- `streamMJStatus(stream, ctx)` — cada stream evaluado contra Leyes MJ (verde/ámbar/rojo).
- `coopNet(usdcIn, znuOut, aut, pop)` — ROI del colectivo bajo Ley II.

## 5. Conexión con el resto del OS

- **Base Material** provee los bienes físicos que la comunidad sostiene.
- **Lucidez (CAC)** da el AUT que habilita tiers y reparto.
- **Colectivo** da el CDS que pondera el revenue sharing.
- **Orquestación (Paperclip)** gobierna las tareas de la comunidad.
- **ZNU** es la unidad de cuenta con demurrage (anti-acumulación).
- **Verificación Triaxial** valida que el CaaS no es estética flotante.

> CaaS-BM NO es vender comunidad. Es la comunidad sosteniendo la base material y
> compartiendo el excedente sin extraerla. La única métrica de éxito es
> **AUT biofísico + CDS + PMRTE**, no ingresos USDC.
