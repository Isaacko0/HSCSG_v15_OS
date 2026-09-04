# Red de Intercambio Federada Ecoaldea Raices del Monte inicio de Federación de Ecoaldeas / Feria Conuquera Agroecológica — Backup Quirúrgico Completo

**Fuente original:** `C:\Users\Isaacko0\Downloads\Desktop\HSCSG dinero flores\nuevas integraciones\Documentacion tecnica Red de Intercambio Federada Ecoaldea Raices del Monte inicio de Federación de Ecoaldeas.zip` + `Red de Intercambio Federada Ecoaldea Raices del Monte inicio de Federación de Ecoaldeas Cergio Monasterio.html` (página pública de federación)

**Fecha de asimilación:** 2026-09-02

**Total de documentos:** 43 archivos Markdown técnicos + 1 página HTML pública completa

---

## 📋 Índice de Documentos Técnicos (43 archivos)

### Core System Architecture
1. **architecture.md** — Visión general, componentes, flujo de datos
2. **api.md** — Endpoints REST, request/response, autenticación
3. **database.md** — Esquema de BD, tablas, relaciones, migraciones
4. **security.md** — Passkeys, claves Ed25519, hash chain, JWT
5. **deployment.md** — Docker, instalación de nuevo nodo, setup wizard

### Federation & Governance
6. **federation.md** — mTLS, gossip, mensajes entre nodos, federación de productos, nodo satélite (ferias offline)
7. **federation_governance.md** — Constantes federadas, propuestas, votación entre nodos, consenso, canasta básica compartida, niveles de nodo, padrino, verificación 4 opciones
8. **governance.md** — Ley de la Aldea, 3 niveles (Federación/Aldea/Org), asambleas, juntas directivas, FRNE, tenencia de tierra, 24 reglas comunidad intencional
9. **federation_limits.md** — Piscina global multilateral, piscinas bilaterales, integridad distribuida, firma dual, hash encadenado, reconciliación
10. **assembly.md** — Sesiones, propuestas, votación, convocatoria automática, tipos por scope, reglas de transferencia

### Economic System (Moneda TQ / Trueque)
11. **currency_exchange.md** — TQ, crédito mutuo, historia (LETS, Club del Trueque, Sardex, WIR), 5 pilares saldo cero, cálculo energético, comercio externo
12. **pricing.md** — Calculadora energética, catálogo, tarifas, energía por kg, ICE Database
13. **payments.md** — QR, NFC, manual, terminales ESP32
14. **composite_products.md** — Productos compuestos, materias primas, recetas, precio automático
15. **external_bridge.md** — FC, DEX, tienda comunitaria, productos compuestos
16. **taxes.md** — Cuenta predefinida, distribución por asamblea, reglas de transferencia
17. **PLAN_SERVICIOS_ORGANIZACIONES.md** — Plan de impuestos por nivel, servicios, organizaciones de la Asamblea

### Accounts & Membership
18. **accounts.md** — Tipos de cuenta, niveles de miembro (aspirante, provisional, pleno), admisión
19. **recovery.md** — Aprobación configurable, multi-firma, códigos de invitación
20. **departments.md** — Departamentos con jerarquía (org padre), roles, permisos, asambleas opcionales

### Technical Infrastructure
21. **frontend.md** — React, TypeScript, TailwindCSS, Vite, service worker (PWA)
22. **notifications.md** — Sistema unificado, pasarelas federadas (Matrix, Telegram, XMPP), preferencias, scope por usuario
23. **audit.md** — Transparencia, verificación hash chain
24. **scaling_yugabytedb.md** — Límite de tabletas, agregar nodos, colocation, configuración cluster
25. **satellite.md** — Nodo satélite para ferias offline (cache + cola eventos, mTLS, firma Ed25519)

### NFC & Hardware (Sistema Completo)
26. **nfc_hardware.md** — Terminales ESP32 (keypad, touch, community, BLE reader, chip-id reader)
27. **nfc_tipos_tarjetas.md** — Tipos soportados (UID-only, MIFARE Classic, DESFire EV3), compatibilidad Venezuela
28. **tarjeta-classic-certificados.md** — Modelo 6 capas, provisionamiento, rotación, recuperación
29. **tarjeta-ntag215-protocolo.md** — 30 slots, PWD única, rotación aleatoria, compatible todos teléfonos
30. **tarjeta-ultralight-c-protocolo.md** — 8 slots, 3DES 112-bit, fallback si no hay NTAG215
31. **card-drivers/** — Drivers modulares JSON por tipo de tarjeta
32. **guia-agregar-tarjeta-nfc.md** — Paso a paso para agregar driver (sistema antiguo)
33. **diseno-drivers-auto-instalables.md** — Paquetes .nfcpkg firmados, auto-instalables web admin, sharing federado
34. **guia-crear-paquete-nfcpkg.md** — Para programadores: crear, firmar, distribuir driver .nfcpkg
35. **guia-instalar-driver-web.md** — Para admin: instalar driver sin programar
36. **templates/nfc-driver-template/** — Plantilla base completa

### Governance Extensions
37. **diseno-perfiles-nodo-productos-prohibidos.md** — Perfiles dinámicos (adventista, ISKCON, etc.) con prohibiciones compartidas via federation
38. **guia-perfiles-nodo.md** — Configurar perfil, marcar productos prohibidos, compartir con otros nodos
38. **COMPARACION_KOTLIN_VS_REACT.md** — Comparativa técnica

### Guides & Principles
40. **guia-inicio-desarrolladores-tq.md** — Stack completo, estructura repo, cómo colaborar
41. **PRINCIPIOS_INNEGOCIABLES.md** — 14 principios: código abierto, código base único, ajustes de nodo, 3 niveles gobernanza, modificaciones locales, implementaciones locales vs federadas, mejoras se comparten, decisiones en lenguaje humano, copiar modelos que funcionan, federación voluntaria/protocolo único, piscina global, responsabilidad padrino, integridad criptográfica, separación trueque/comercio
42. **guia-usuario.md** — Guía para personas no técnicas: 3 preguntas entrada, saldo cero, TQ, límites, federación, asamblea, cayapa, tarjeta NFC
43. **feria_conuquera.md** — Historia, filosofía, organización, productos, actividades, ecoaldeas
44. **INDEX.md** — Índice maestro con estado de implementación (19 fases completadas), estructura proyecto, migraciones (152), cambios recientes

---

## 🏗️ Estructura del Proyecto (Go + React + Kotlin + C/C++)

```
red de intercambio federada/
├── cmd/
│   ├── node/main.go          # Punto de entrada del nodo
│   ├── install/main.go       # Instalador CLI
│   ├── installer/main.go     # Instalador web
│   └── nfc-pkg/main.go       # CLI crear/firmar/verificar .nfcpkg
├── config.yaml               # Configuración del nodo
├── internal/
│   ├── accounts/             # Usuarios, organizaciones, recuperación
│   ├── api/                  # Handlers HTTP, middleware, rutas, setup wizard
│   ├── config/               # Carga de configuración
│   ├── crypto/               # Passkeys, Ed25519, encriptación, terminal crypto
│   ├── db/                   # Pool conexión, migraciones (152), seed
│   ├── external/             # DEX, tienda comunitaria, productos compuestos
│   ├── federation/           # Servidor federado, mTLS, gossip, productos federados, drivers NFC, perfiles
│   ├── ledger/               # Ledger doble entrada, hash chain, piscina global/bilateral
│   ├── payments/             # QR, NFC, manual, terminales NFC ESP32, cards (drivers auto-instalables)
│   └── pricing/              # Calculadora energética, productos
├── firmware/                 # Firmware ESP32 para terminales NFC
│   ├── shared/               # Código compartido (crypto, NFC, display, server, pairing)
│   ├── terminal-keypad/      # Terminal con encoder rotatorio
│   ├── terminal-touch/       # Terminal con pantalla táctil
│   ├── terminal-community/   # Punto comunitario doble tarjeta
│   ├── terminal-ble-reader/  # Lector NFC Bluetooth (accesorio POS)
│   ├── chip-id-reader/       # Lector chip ID para provisioning
│   └── docs/                 # Hardware, seguridad, flasheo, troubleshooting
├── web/                      # Frontend PWA React
│   ├── src/
│   │   ├── api.ts            # Cliente API con JWT + upload helper
│   │   ├── App.tsx           # Rutas
│   │   ├── components/       # Layout, navegación, public-site (44+ páginas)
│   │   ├── hooks/            # useAuth, usePermissions, useConfig
│   │   └── pages/            # Setup, Dashboard, POS, NFCTerminals, NFCDrivers, Assembly, Store, NodeSettings, etc.
│   ├── public/               # manifest, sw.js, icon
│   └── package.json
├── templates/
│   └── nfc-driver-template/  # Plantilla para crear drivers NFC (.nfcpkg)
├── docs/                     # Esta documentación (43 archivos)
└── docker/                   # Dockerfile, docker-compose
```

---

## 📊 Estado de Implementación — 19 Fases Completadas

| Fase | Descripción | Estado |
|------|-------------|--------|
| 1 | Fundación (DB, ledger, hash chain, transacciones) | ✅ Completado |
| 2 | Cripto + Auth (Passkeys, Ed25519, JWT) | ✅ Completado |
| 3 | Admisión + API REST | ✅ Completado |
| 4 | Federación (mTLS, gossip, límites bilaterales) | ✅ Completado |
| 5 | Organizaciones, instituciones públicas, multi-firma | ✅ Completado |
| 6 | Asamblea + Auditoría | ✅ Completado |
| 7 | Pagos (QR, NFC, manual) | ✅ Completado |
| 8 | Comercio externo + Precios (DEX, tienda, FC) | ✅ Completado |
| 9 | Frontend PWA React | ✅ Completado |
| 9.1 | Recuperación cuenta con aprobación configurable | ✅ Completado |
| 9.2 | Departamentos, roles y permisos granulares | ✅ Completado |
| 9.3 | Terminales NFC ESP32 (keypad, web, touch, community) | ✅ Completado |
| 9.4 | Setup Wizard + login contraseña + auto-configuración | ✅ Completado |
| 10 | Documentación | ✅ Completado |
| 11 | Catálogo energético realineado (ICE Database) | ✅ Completado |
| 11.1 | Productos por kg material + trabajo por hora | ✅ Completado |
| 11.2 | División bundles en productos individuales | ✅ Completado |
| 12 | Tienda comunitaria con costos adicionales y paginación | ✅ Completado |
| 12.1 | Productos compuestos con precio automático | ✅ Completado |
| 12.2 | Federación productos entre nodos con aprobación individual | ✅ Completado |
| 13 | Documentación actualizada | ✅ Completado |
| 14 | Gobernanza con asamblea: quorum, votación, revisión, minutas | ✅ Completado |
| 14.1 | Asambleas organización y departamento (scoped) | ✅ Completado |
| 14.2 | Convocatoria automática, frecuencia, notificaciones | ✅ Completado |
| 14.3 | Tipos propuesta por scope (no mezclar decisiones) | ✅ Completado |
| 14.4 | Tiempos mínimos anticipación, fecha obligatoria | ✅ Completado |
| 14.5 | Reglas transferencia por scope | ✅ Completado |
| 14.6 | Departamentos con organización padre (jerarquía) | ✅ Completado |
| 14.7 | Documentación actualizada asambleas y gobernanza | ✅ Completado |
| 15 | Impuestos por nivel miembro y organización | ✅ Completado |
| 15.1 | Servicios y mensualidades organizaciones | ✅ Completado |
| 15.2 | Organizaciones de la Asamblea (is_assembly_owned) | ✅ Completado |
| 15.3 | Auto-suscripción miembros a servicios obligatorios | ✅ Completado |
| 15.4 | Scheduler cobros mensuales automáticos | ✅ Completado |
| 15.5 | Juntas directivas con reuniones, votaciones, actas | ✅ Completado |
| 15.6 | Organizaciones de la Asamblea usan Asamblea General | ✅ Completado |
| 15.7 | Documentación actualizada servicios y gobernanza | ✅ Completado |
| 16 | Junta Directiva nodo (meeting_type en assembly_sessions) | ✅ Completado |
| 16.1 | Reclasificación decisiones operativas a Junta Directiva | ✅ Completado |
| 16.2 | Quorum configurable Junta Directiva nodo | ✅ Completado |
| 16.3 | Sincronización automática info red entre nodos | ✅ Completado |
| 16.4 | Calculadora precios externos Comercio Exterior | ✅ Completado |
| 16.5 | Fix: catálogo servicios federados no cargaba (res.data) | ✅ Completado |
| 16.6 | Fix: guardar FC desde canasta básica (internal_cost nullable) | ✅ Completado |
| 16.7 | Documentación actualizada | ✅ Completado |
| 17 | Piscina global multilateral + integridad distribuida (migraciones 128-130) | ✅ Completado |
| 17.1 | Piscina global real vs bilateral, firma dual, hash encadenado | ✅ Completado |
| 17.2 | Niveles nodo federado (Nuevo, Aceptado, Pleno) + padrino | ✅ Completado |
| 17.3 | Verificación 4 opciones para POS y federation pairing | ✅ Completado |
| 17.4 | Reconciliación cadena al reconectar nodos | ✅ Completado |
| 18 | Drivers NFC auto-instalables (.nfcpkg) | ✅ Completado |
| 18.1 | Sandbox Goja + parser + firma Ed25519 por-nodo | ✅ Completado |
| 18.2 | Motor declarativo Android + descarga automática | ✅ Completado |
| 18.3 | Sharing federado drivers via gossip | ✅ Completado |
| 18.4 | CLI nfc-pkg + plantilla + documentación | ✅ Completado |
| 19 | Perfiles nodo dinámicos + prohibiciones compartidas | ✅ Completado |
| 19.1 | Perfiles en DB (no hardcodeados) + crear nuevos perfiles | ✅ Completado |
| 19.2 | Prohibiciones por producto individual + cola aprobación | ✅ Completado |
| 19.3 | Sharing federado perfiles y prohibiciones via gossip | ✅ Completado |
| 19.4 | Auto-aprobación opcional + independencia por nodo | ✅ Completado |

---

## 🗃️ Migraciones Clave (152 migraciones)

### Migraciones Fundamentales
- **038-046**: Catálogo realineado valores energéticos internacionales (ICE Database)
- **047**: Límites simétricos + canasta básica 500 TQ
- **048**: Tabla governance_rules + seed inicial (Ley de la Aldea ~40 reglas)
- **049-057**: Sistema asambleas completo (3 niveles: nodo/org/depto)
- **069-070**: Servicios organizaciones, suscripciones, is_assembly_owned
- **076-077**: Gobernanza federada: constantes, propuestas, votación, expulsión
- **079**: Información red nodo para sincronización federada
- **080-082**: Junta Directiva nodo + reclasificación decisiones operativas
- **128-130**: Piscina global + niveles nodo federado + federation pairing (4 opciones)
- **148-149**: Permisos NFC separados + perfil religioso/filosófico nodo
- **151**: Registry drivers NFC auto-instalables (.nfcpkg)
- **152**: Perfiles nodo dinámicos + prohibiciones compartidas federadas
- **160-162**: Nodo satélite (ferias offline)

---

## 💰 Sistema Económico: 5 Pilares del Saldo Cero (currency_exchange.md)

1. **Punto de Partida - Saldo Inicial Cero**: Sin capital previo, sin banco central, sin inflación. TQ se crea en el intercambio y se destruye al saldarse.
2. **Dinámica del Intercambio - Crédito Mutuo**: Contabilidad equilibrada. Suma de todos los saldos = 0 siempre.
3. **Límite Inferior - Piso Negativo**: Flexibilidad para consumir, bloqueo al tocar límite, obligación de aportar para reactivar.
4. **Límite Superior - Techo Positivo**: Circulación forzada, obligación de reinversión (gastar, financiar proyectos comunales). Nadie acumula indefinidamente.
5. **Respaldo - Energía Física Real**: 1 TQ = 1 kWh = 3.6 MJ. No oro, no dólares, no promesa gobierno. Valor objetivo, medible, auditable, no especulativo.

**Canasta Básica Mensual (familia 4 personas):** 500 TQ calculada con precios catálogo (granos, arroz, harina, tubérculos, verduras, frutas, leche, huevos, pollo...)

---

## 🌐 Federación: Conceptos Clave

### Dos Modos de Federación
- **Modo A: Internet público** — Dominios públicos, HTTPS normal
- **Modo B: Intranet (OpenWrt + WireGuard)** — IPv6 ULA, túneles cifrados, **no depende de Internet público**
- **Modo C: Híbrido** — Ambos simultáneos

### Federacion Automática Global: Sponsor + Propagación en Cadena
- Nodo nuevo solo se federa con **un sponsor** (verificación 4 opciones)
- Sponsor propaga identidad a toda la red en cadena exponencial
- Transporte E2E cifrado: Ed25519 + ECDH + AES-256-GCM
- **Sin clave privada compartida** — cada nodo tiene su clave individual

### Piscina Global Multilateral (Real)
- Saldo compartido entre **todos los nodos federados**
- `pool_type = 'global'` → no filtra por `counterpart_node`
- Saldo ganado con Nodo B se gasta con Nodo C
- Límite depende de **nivel del nodo** (1000/5000/20000 TQ)

### Piscinas Bilaterales
- Acuerdos específicos entre 2 nodos (`pool_type = 'bilateral'`)
- No afectan piscina global
- Para límites mayores entre pares específicos

### Integridad Distribuida
- **Firma Dual**: Ambos nodos firman cada transacción cross-node
- **Hash Encadenado**: `prev_hash` + `tx_hash` en tabla `cross_node_tx_chain`
- **Reconciliación al reconectar**: Comparan hashes, intercambian divergencias, verifican firmas

### Niveles de Nodo Federado
| Nivel | Nombre | Límite Global | Voz | Voto | Patrocinar | Mín. Días | Auto-upgrade |
|-------|--------|---------------|-----|------|------------|-----------|--------------|
| 1 | Nodo Nuevo | 1,000 TQ | Sí | **No** | **No** | 90 | No (requiere votación) |
| 2 | Nodo Aceptado | 5,000 TQ | Sí | Sí | Sí | 180 | Sí (a nivel 3) |
| 3 | Nodo Pleno | 20,000 TQ | Sí | Sí | Sí | - | - |

### Sistema de Padrino
- Nivel 2+ apadrina nodo nuevo → límite padrino se reduce
- Si ahijado entra en default → deuda pasa al padrino
- Al subir ahijado a nivel 2 → límite padrino se libera
- **Responsabilidad real** — evita admisión descontrolada

### Verificación de 4 Opciones (Anti-MITM)
1. Nodo nuevo genera código 6 dígitos
2. Padrino ve **4 códigos diferentes** en pantalla
3. Comunicación fuera de banda (teléfono, mensaje, persona)
4. Padrino elige código correcto (25% probabilidad adivinar)
4. Expira en 60 segundos

---

## 🏛️ Gobernanza: 3 Niveles (governance.md + federation_governance.md)

### Nivel 1: Federación (Mundial)
- **Decide**: Canasta TQ (misma en todos), límite crédito global, expulsión nodos, protocolo comunicación, métrica TQ (1 TQ = 1 kWh), criptografía NFC, estructura ledger, umbral aprobación (default 100%)
- **Consenso**: Por defecto 100% (todos). Cambiar umbral requiere aprobación bajo umbral actual
- **Cadena de nodos**: Decisiones globales aplican a TODOS aunque no estén directamente federados

### Nivel 2: Aldea/Nodo (Local)
- **Decide**: Horas trabajo/sueldos, catálogo productos/precios, admisión/expulsión miembros, tasas/comisiones/horarios, sitio web público, comercio exterior moneda local, servicios federados instalados, adaptaciones culturales
- **Asamblea General**: Órgano máximo. No transfiere a personas directo (solo orgs/deptos)
- **Junta Directiva Nodo**: Decisiones operativas (cuentas, límites, productos, fondos, presupuesto). Quorum sobre miembros junta, no todos miembros.

### Nivel 3: Organizaciones (Dentro de la Aldea)
- **Organizaciones de la Asamblea** (`is_assembly_owned=true`): Pertenecen a Asamblea, todos miembros auto-suscritos, decisiones en Asamblea General, junta directiva propia, servicios obligatorios aplican a todos
- **Organizaciones Regulares**: Pertenecen a personas, asamblea interna propia, pueden transferir a personas
- **Departamentos**: Deben pertenecer a organización o nodo/asamblea. No aislados ni pertenecer a persona. Asambleas opcionales.

### FRNE (Fórmula Restitución No Especulativa)
```
R_neto = I_ini - D_desgaste - C_restauracion +/- B_TQ - T_salida
```
- `I_ini`: Inversión materiales (adobes, madera, paneles solares)
- `D_desgaste`: Amortización anual 3-4% sobre valor construcción
- `C_restauracion`: Costo reparar daños territorio
- `B_TQ`: Balance contable TQ (negativo resta, positivo suma)
- `T_salida`: 15% retención solidaria Fondo Comunitario
- Pago diferido 12-24 meses

### Tenencia de Tierra
- **Fideicomiso Comunitario**: Colectiva, indivisible, inalienable
- **Derecho de Usufructo**: Mientras membresía activa
- **Prohibición de Venta**: No mercado abierto

---

## 📱 Hardware NFC Completo (firmware/ + nfc_*.md)

### Terminales ESP32 (4 tipos)
1. **terminal-keypad** — Encoder rotatorio
2. **terminal-touch** — Pantalla táctil
3. **terminal-community** — Punto comunitario doble tarjeta
4. **terminal-ble-reader** — Lector NFC Bluetooth (accesorio POS, no terminal)
5. **chip-id-reader** — Lector chip ID para provisioning

### Tipos Tarjeta Soportados
| Tipo | Seguridad | Costo | Compatibilidad | Uso Recomendado |
|------|-----------|-------|----------------|-----------------|
| UID-only | Básica (clonable) | Muy bajo | Universal | Solo con documento + PIN |
| MIFARE Classic | Certificados dinámicos 6 capas | Bajo | Universal | Requiere documento + PIN siempre |
| NTAG215 | 30 slots, PWD única, rotación aleatoria | Medio | **Todos los teléfonos** | **Recomendada estándar** |
| DESFire EV3 | AES-128 real | Alto | Moderna | Grandes volúmenes, máxima seguridad |
| Ultralight C | 3DES 112-bit, 8 slots | Muy bajo | Limitada | Fallback si no hay NTAG215 |

### Drivers Auto-Instalables (.nfcpkg)
- **Paquete ZIP firmado Ed25519**: manifest.json, driver.js, reader.json, migration.sql, signature.sig
- **Sandbox Goja**: ES5.1, API segura (db, crypto, bcrypt), timeout 5s, sin I/O
- **Firma por-nodo**: Cada nodo genera su clave Ed25519. No clave centralizada.
- **Motor declarativo Android**: POS interpreta reader.json sin ejecutar JS. Sin recompilar APK.
- **Sharing federado**: Drivers comparten via gossip entre nodos
- **CLI nfc-pkg**: Crear, firmar, verificar, inspeccionar .nfcpkg

### Perfiles de Nodo Dinámicos + Prohibiciones Compartidas
- 8 perfiles oficiales: Adventista, ISKCON, Plum Village, Halal, Kosher, Jain, Vegano, Ital Rastafari
- **Crear perfiles custom** desde web admin (ej: "Adventista Reforma") — se comparten via federation
- **Prohibiciones por producto individual** (no solo categoría) — tabla `profile_product_prohibitions`
- **Sharing federado**: Nodos mismo perfil comparten prohibiciones via gossip cada 60s
- **Auto-aprobación opcional**: Cada nodo decide si aprueba automático o revisa manual
- **Cola de aprobación**: Prohibiciones recibidas aparecen para revisión
- **Independencia**: Cada nodo puede desaprobar localmente (falso positivo)

---

## 🌱 Página Pública: Feria Conuquera Agroecológica (Red de Intercambio Federada Ecoaldea Raices del Monte inicio de Federación de Ecoaldeas Cergio Monasterio.html)

**URL original:** `https://feria.loanstly.com/main/p/federacion`

### Mensaje Central
> "¿El mayor reto de crear una ecoaldea? No es comprar el terreno... es ponerse de acuerdo."
> Muchos proyectos ecoamigables fracasan por falta de bases sólidas de gobernanza y economía.

### Propuesta de Valor (4 Pilares)
1. **🌐 Autonomía + Federación**: Nodo independiente con leyes/cultura/asambleas propias + comercio federado justo/seguro (QR + NFC)
2. **🗳️ Gobernanza y Asamblea Digital**: Asamblea Digital y Votaciones transparentes, decisiones inmutables
3. **🔋 Trueque TQ (Moneda Inmune a Inflación)**: Crédito mutuo, 1 TQ = 1 kWh trabajo/cosecha/insumos
4. **🚜 Acumulación Riqueza Real vs Números Falsos**: Vivienda bioclimática, conucos, herramientas, semillas, tractor — no números virtuales congelables/devaluables
5. **📈 Límites Dinámicos**: Escalones de confianza, límite protector canasta básica familiar, sube en asamblea con integración/aporte

### Llamado a Acción
- Plataforma en desarrollo, busca ecoaldeas con tierras o intención de fundar
- Interesa conversar con experiencias positivas y negativas
- Demo del sistema disponible
- Contacto por privado para integración a Red de Ecoaldeas Federadas

---

## 🎯 Conceptos Clave para Asimilación HSCSG v15 OS

### Isomorfismos Directos con HSCSG

| Red de Intercambio Federada Ecoaldea Raices del Monte inicio de Federación de Ecoaldeas | HSCSG v15 OS Equivalente |
|--------------------|---------------------------|
| **Nodo federado** | Nodo HSCSG / tribu fractal |
| **Piscina global multilateral** | Vasos Comunicantes / red de seguridad distribuida |
| **Sistema de padrino** | Suscripción = equipo / desafío subsistencia decreciente |
| **Canasta básica federada (500 TQ)** | Cuaternidad Soberana Ampliada / base material común |
| **1 TQ = 1 kWh energía real** | Dinero off-grid / libertad financiera reinvertida como autonomía |
| **Firma dual + hash encadenado** | Verificación triaxial (RAO inmutable, MJ Gate, verificación triaxial) |
| **3 niveles gobernanza** | 5 planos HSCSG + Cuaternidad |
| **FRNE (Restitución No Especulativa)** | Modelo cooperativo + gobernanza sorteada |
| **Tenencia tierra fideicomiso** | Soberanía recíproca / tierra no se vende |
| **Perfiles nodo dinámicos** | Cultura anidada / tribu fractal |
| **Drivers auto-instalables (.nfcpkg)** | Módulos anfibios / skills Hermes |
| **Nodo satélite (ferias offline)** | Modo off-grid / autonomía local |
| **Setup Wizard auto-configuración** | Onboarding 4 fases (BRIEF_ONBOARDING_CONSTRUCTOR) |
| **Crédito mutuo saldo cero** | Desafío subsistencia decreciente → abundancia apoyos |
| **Limites simétricos (+/-)** | Reciprocidad / soberanía recíproca |
| **Comercio exterior separado del trueque** | Modo anfibio: postmonetario (ZNU/CaaS) vs conectado (USD/USDC vía priceParity) |

### Innovaciones Técnicas Transferibles a HSCSG

1. **Piscina Global Real** — No solo verificación límites bilaterales, pool compartido real (`node_bridge_global` vs `node_bridge_bilateral`)
2. **Sponsor + Propagación Cadena** — Admisión federada escalable O(1) vs O(N²)
3. **Transporte E2E Cifrado** — mTLS + Ed25519 + ECDH + AES-256-GCM, reverse proxy no lee contenido
4. **Verificación 4 Opciones** — Anti-MITM para pairing POS y federación nodos
5. **Drivers NFC Auto-Instalables** — Sistema paquetes .nfcpkg firmados, sandbox Goja, motor declarativo Android
6. **Perfiles Nodo Dinámicos** — En BD, no hardcodeados, sharing federado via gossip, auto-aprobación opcional
7. **Nodo Satélite** — Cache offline + cola eventos para ferias/eventos sin Internet
8. **Setup Wizard Completo** — Auto-configuración nodo nuevo (dominio, red, servicios, gobernanza)
9. **Junta Directiva Nodo Separada** — Decisiones operativas vs estratégicas (assembly vs board)
10. **Organizaciones de la Asamblea** — `is_assembly_owned`, auto-suscripción, servicios obligatorios universales

---

## 📁 Archivos Fuente Referenciados

- ZIP: `C:\Users\Isaacko0\Downloads\Desktop\HSCSG dinero flores\nuevas integraciones\Documentacion tecnica Red de Intercambio Federada Ecoaldea Raices del Monte inicio de Federación de Ecoaldeas.zip` (237 KB, 43 archivos .md)
- HTML: `C:\Users\Isaacko0\Downloads\Desktop\HSCSG dinero flores\nuevas integraciones\Red de Intercambio Federada Ecoaldea Raices del Monte inicio de Federación de Ecoaldeas Cergio Monasterio.html` (144 KB, página federación completa)
- Extraído en: `C:\Users\Isaacko0\ecoaldea_monte_extract\Documentacion tecnica Red de Intercambio Federada Ecoaldea Raices del Monte inicio de Federación de Ecoaldeas\`

---

**Nota:** Este backup es fiel a la documentación original. Para integración operativa con HSCSG v15 OS, ver `docs/ecoaldea_monte_integration.md`.