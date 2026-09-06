---
name: hscsg-nfc-wallet
description: Use when implementing physical NFC-based wallet terminals for HSCSG v15 OS. Triggers on "NFC wallet", "tarjeta soberana", "ESP32 terminal", "Pago offline", "Lector NFC android", "Point of Sale regenerativo". Implements the Ecoaldeas Raíces pattern: ESP32 + PN532 + OLED + 4 modos (Keypad/Web/Touch/Community), tarjeta NTAG424 DNA / DESFire EV3 anti-clonación, cifrado ed25519 + AES-256-GCM + ephemeral ECDH (Forward Secrecy), modos 100% offline.
---

# Skill: hscsg-nfc-wallet

**Versión:** 1.0.0  
**Fecha:** 2026-09-05  
**Autor:** Isaac Ko (Isaacko0) / HSCSG v15 OS  
**Basado en:** Ecoaldeas Raíces (Libro Ecoaldeas Federadas Cap. 17 + gaia_ecoaldeas_deep_integration.md)

---

## Cuándo usar esta skill

Esta skill se activa cuando:

1. **Implementar terminales NFC soberanos** — Para pagos offline en nodos/tribus HSCSG
2. **Crear hardware wallet DID:hsccsg** — Implementación física de identidad digital
3. **Punto de venta regenerativo** — Compatible con CaaS-BM y bioMarket
4. **Tarjetas anti-clonación** — Para trueque TQ, ZNU, Gaia Tokens
5. **Modos multi-operador** — Keypad, Web, Touch, Community (doble tarjeta)
6. **Cifrado de grado militar** — Para transacciones sensibles sin internet

## Cuándo NO usar

- Si solo necesitas wallet digital (smartphone) — usar `hscsg-digital-wallet` (pendiente)
- Si necesitas integración con exchange fiat — usar `priceParity-oracle`
- Si es solo un módulo del backend — no se necesita esta skill

---

## Arquitectura del Sistema NFC

### 1. Hardware Base

#### 1.1 Microcontrolador: ESP32
- **CPU:** Dual-core Xtensa LX6, 240 MHz
- **Memoria:** 520 KB SRAM, 4 MB Flash
- **Conectividad:** Wi-Fi 802.11 b/g/n, Bluetooth 4.2 BR/EDR/BLE
- **GPIO:** 34 pines programables
- **Precio:** ~$3-5 USD
- **Voltaje:** 3.3V (regulador integrado)

#### 1.2 Módulo NFC: PN532
- **Protocolos:** ISO/IEC 14443A/B, ISO/IEC 18092, FeliCa
- **Frecuencia:** 13.56 MHz
- **Alcance:** ~5 cm
- **Velocidad:** 106/212/424 kbps
- **Precio:** ~$4-8 USD

#### 1.3 Pantalla: OLED 0.96" (128x64)
- **Interfaz:** I2C (4 pines: VCC, GND, SCL, SDA)
- **Color:** Monocromo (blanco/azul)
- **Precio:** ~$2-3 USD

#### 1.4 Encoder Rotatorio (solo modo Keypad)
- **Tipo:** EC11 o similar
- **Función:** Ingreso de monto + selección de opciones
- **Precio:** ~$0.5-1 USD

#### 1.5 Tarjeta: NTAG424 DNA o DESFire EV3
- **NTAG424 DNA:** NXP, con Secure Unique NFC (SUN) y criptografía AES-128
- **DESFire EV3:** NXP, con AES-128/3DES, anti-clonación, mutual authentication
- **Capacidad:** 4-8 KB
- **Precio:** ~$0.10-0.50 USD por tarjeta
- **Seguridad:** Cada tarjeta tiene un par de claves único (público/privado)

### 2. Modos de Operación (4)

#### 2.1 Modo Keypad
- **Input:** Encoder rotatorio + botón pulsador
- **Display:** OLED monocromo
- **Flujo:**
  1. Usuario acerca tarjeta
  2. Verifica balance (lectura de Gaia Token balance)
  3. Ingresa monto con encoder (rotar = cambiar valor, pulsar = confirmar)
  4. Ingresa PIN con keypad
  5. Acerca tarjeta de receptor
  6. Confirma transacción

#### 2.2 Modo Web
- **Input:** Browser en smartphone/tablet
- **Conexión:** Wi-Fi del ESP32 actúa como Access Point
- **URL:** `http://192.168.4.1/pay` (default IP del ESP32 AP mode)
- **Flujo:**
  1. Usuario conecta a Wi-Fi "HSCSG-Terminal"
  2. Abre navegador
  3. Acerca tarjeta al ESP32 (PN532)
  4. Ingresa monto en formulario web
  5. Confirma con PIN
  6. Acerca tarjeta de receptor
  7. Confirma transacción

#### 2.3 Modo Touch
- **Hardware:** TTGO T-Display con pantalla táctil a color
- **Precio:** ~$10-15 USD (mayor que Keypad, pero más intuitivo)
- **Flujo:** Similar a Keypad pero con interfaz táctil

#### 2.4 Modo Community (Doble Tarjeta)
- **Uso:** Transacciones entre 2 personas en ferias, asambleas, trueques
- **Flujo:**
  1. Vendedor acerca su tarjeta
  2. Ingresa monto
  3. Vendedor acerca su tarjeta otra vez (confirmación)
  4. Comprador acerca su tarjeta
  5. Comprador ingresa PIN
  6. Comprador acerca su tarjeta otra vez (confirmación)
  7. Ambas partes reciben notificación visual/sonora

### 3. Protocolo de Seguridad

#### 3.1 Criptografía Asimétrica (ed25519)
Cada tarjeta genera un par de claves:
- **Privada:** Almacenada en secure element (NXP Secure Element)
- **Pública:** Compartida en la red federada

```typescript
// Pseudocódigo de generación
const cardKeyPair = {
  privateKey: 'A1B2C3D4...', // 64 bytes hex, en secure element
  publicKey: 'E5F6G7H8...',   // 32 bytes hex, compartido
  did: 'did:hsccsg:card:abc123...'
};
```

#### 3.2 Cifrado Simétrico (AES-256-GCM)
Para el payload de cada transacción:

```typescript
type EncryptedPayload = {
  iv: string;          // 12 bytes random
  ciphertext: string;  // Variable
  authTag: string;     // 16 bytes
};

// Proceso:
const nonce = crypto.randomBytes(12);
const cipher = crypto.createCipheriv('aes-256-gcm', sessionKey, nonce);
const ciphertext = Buffer.concat([cipher.update(payload), cipher.final()]);
const authTag = cipher.getAuthTag();
```

#### 3.3 Forward Secrecy (Ephemeral ECDH)
Para cada transacción, se genera un par de claves efímeras:

```typescript
// Por cada transacción:
const ephemeralKeyPair = crypto.generateKeyPairSync('ec', { namedCurve: 'secp256k1' });
const sharedSecret = crypto.diffieHellman({
  privateKey: ephemeralKeyPair.privateKey,
  publicKey: cardPublicKey
});
const sessionKey = crypto.hkdfSync('sha256', sharedSecret, salt, info, 32);
```

#### 3.4 Mutual Authentication
Antes de cualquier transacción, las 2 partes se autentican mutuamente:

```typescript
// Challenge-response
const challenge = crypto.randomBytes(32);
const signature = card.sign(challenge);
const verified = card.verify(challenge, signature);
```

### 4. Formato de Transacción

```typescript
type WalletTransaction = {
  // Metadata
  id: string;                // UUID
  timestamp: number;          // Unix epoch ms
  nonce: string;             // 32 bytes random
  
  // Partes
  fromCard: string;          // DID:hsccsg:card:abc
  toCard: string;            // DID:hsccsg:card:xyz
  
  // Operación
  operation: 'TRANSFER' | 'MINT' | 'BURN' | 'STAKE';
  amount: bigint;            // En unidades mínimas (1 TQ = 1000 unidades)
  token: 'TQ' | 'ZNU' | 'GAIAUSD' | 'GAIAWTS' | 'TERRA' | 'KAKAO';
  
  // Seguridad
  fromSignature: string;     // ed25519 firma
  toSignature: string;       // ed25519 firma
  encryptedPayload: string;  // AES-256-GCM
  
  // Metadatos
  memo: string;              // Max 256 bytes
  location: GeoPoint | null; // Opcional
  deviceId: string;          // ID del ESP32
  
  // Hash chain (ledger)
  previousHash: string;      // Hash de la transacción anterior
  currentHash: string;       // Hash de esta transacción
};

type GeoPoint = {
  latitude: number;
  longitude: number;
  accuracy: number; // metros
};
```

### 5. Arquitectura del Software

#### 5.1 Stack del ESP32

```
┌─────────────────────────────────┐
│      Application Layer           │
│  (UI OLED, Web Server, Touch)    │
├─────────────────────────────────┤
│      Protocol Layer              │
│  (NFC, ed25519, AES-256-GCM)    │
├─────────────────────────────────┤
│      Storage Layer                │
│  (SPIFFS, Preferences, NVS)     │
├─────────────────────────────────┤
│      Hardware Abstraction       │
│  (PN532, OLED, Encoder, Wi-Fi)  │
└─────────────────────────────────┘
```

#### 5.2 Stack del Backend (HSCSG)

```typescript
// En src/core/lib/nfc_terminal.ts
type NFCTerminalConfig = {
  deviceId: string;            // UUID único
  mode: 'keypad' | 'web' | 'touch' | 'community';
  networkConfig: {
    wifiSSID: string;
    wifiPassword: string;     // Almacenado en NVS encriptado
    apiEndpoint: string;        // https://hscsg-v15-os.vercel.app/api
    syncInterval: number;       // Segundos (default: 300 = 5 min)
  };
  cryptoConfig: {
    algorithm: 'ed25519' | 'secp256k1';
    encryption: 'AES-256-GCM';
    ephemeralKeys: boolean;     // true para forward secrecy
  };
  features: {
    allowOfflineTransactions: boolean;  // true (default)
    allowAnonymousPayments: boolean;    // false (por ahora)
    maxOfflineAmount: bigint;           // Max sin sync
    requirePINFor: bigint;              // Monto mínimo para PIN
  };
};
```

### 6. Procedimientos Operativos

#### 6.1 Setup Inicial
1. Flashear firmware HSCSG al ESP32
2. Generar par de claves del dispositivo (ed25519)
3. Registrar DID del dispositivo en la red federada
4. Conectar a Wi-Fi de la tribu/nodo
5. Aceptar primera tarjeta de operador (genera par de claves, DID de tarjeta)

#### 6.2 Operación Diaria
1. Verificar conexión Wi-Fi (online/offline)
2. Si online: sincronizar ledger pendiente
3. Si offline: continuar con ledger local (marcar como pendiente)
4. Operar normalmente (cualquier modo)
5. Auto-sincronizar cuando vuelva online

#### 6.3 Reconciliación
- Al volver online, el ESP32 envía todas las transacciones offline al backend
- Backend verifica:
  - Firmas válidas
  - No hay double-spending (mismo nonce dos veces)
  - Balances coherentes
- Si todo OK: marcar transacciones como confirmadas
- Si hay conflicto: notificar al operador

### 7. Configuración del Precio

#### 7.1 Hardware (precios aproximados, septiembre 2026)
| Componente | Precio Unitario | Cantidad | Subtotal |
|------------|----------------|----------|----------|
| ESP32 DevKit | $4 | 1 | $4 |
| PN532 NFC | $6 | 1 | $6 |
| OLED 0.96" | $2.50 | 1 | $2.50 |
| Encoder EC11 | $0.75 | 1 | $0.75 |
| Carcasa impresa 3D | $3 | 1 | $3 |
| Cables/conectores | $1 | 1 | $1 |
| **Total hardware** | | | **$17.25** |

#### 7.2 Características
- **Costo por terminal:** ~$17 USD (sin tarjeta)
- **Costo por usuario (tarjeta):** ~$0.30 USD
- **Para 100 usuarios:** ~$47 USD total
- **Vs POS tradicional:** ~$300-1000 USD (15-50x más barato)

### 8. Implementación en HSCSG v15 OS

#### 8.1 Frontend (React)
- **`src/app/screens/NFCWallet.tsx`** — Pantalla de configuración y monitoreo
- **Componentes:**
  - `NFCConfigForm` — Formulario de Wi-Fi, deviceId, modo
  - `TransactionMonitor` — Log de transacciones en tiempo real
  - `CardRegistration` — Registrar nueva tarjeta con DID
  - `OfflineLedger` — Ver transacciones pendientes de sync

#### 8.2 Backend (TypeScript)
- **`src/core/lib/nfc_terminal.ts`** — Lógica de terminal
- **`src/core/lib/card_crypto.ts`** — Cifrado y firmas
- **`src/core/state/nfc_state.ts`** — Estado de terminales y tarjetas
- **`src/core/api/nfc_api.ts`** — API REST para sincronización

#### 8.3 Firmware (C++/Arduino)
- **Código fuente:** `firmware/hscsg-nfc-wallet/`
- **Build:** PlatformIO + ESP-IDF
- **OTA Updates:** Soporte para actualizaciones remotas vía Wi-Fi

### 9. Consideraciones de Seguridad

#### 9.1 Amenazas y Mitigaciones
| Amenaza | Mitigación |
|---------|------------|
| Clonación de tarjeta | NTAG424 DNA con SUN + DESFire EV3 con mutual auth |
| Man-in-the-middle | Forward Secrecy + ephemeral keys por transacción |
| Replay attacks | Nonces únicos + hash chain + timestamps |
| Physical tampering | Secure element + tamper detection |
| Loss of card | DID-based recovery + multi-factor auth |
| Insider attack | 4-eyes principle para montos altos |

#### 9.2 Compliance
- **GDPR/LOPD:** Datos personales encriptados, derecho al olvido
- **PSD2 (si aplica):** Strong customer authentication para pagos >30 EUR
- **W3C VC:** Compatible con credenciales verificables

### 10. Roadmap de Implementación

#### Fase 1: Prototipo (4 semanas)
- [ ] Diseño de PCB
- [ ] Firmware base (NFC + OLED + Wi-Fi)
- [ ] Cifrado ed25519 + AES-256-GCM
- [ ] Modo Keypad funcional
- [ ] Tests con 5 usuarios

#### Fase 2: Producción (6 semanas)
- [ ] Carcasa impresa en 3D
- [ ] Firmware optimizado (low power)
- [ ] Modos Web y Community
- [ ] Backend API completo
- [ ] Tests con 50 usuarios

#### Fase 3: Federación (8 semanas)
- [ ] Sincronización federada entre nodos
- [ ] Modo Touch con TTGO T-Display
- [ ] OTA updates
- [ ] Integración con CaaS-BM
- [ ] Piloto en 3 tribus

#### Fase 4: Producción Masiva (12+ semanas)
- [ ] Certificación de seguridad
- [ ] Documentación completa
- [ ] Kits de auto-ensamblaje
- [ ] Marketplace de terminales

### 11. Relación con Otras Skills y Componentes

#### Skills Hermanas
- **`hscsg-repo-guard`** — Para guardar repositorios de firmware
- **`hscsg-document-architect`** — Para documentar
- **`hscsg-gaia-mycelium-integration`** — Para integrar con Gaia
- **`hscsg-tripartite-orchestrator`** — Para coordinar federaciones

#### Componentes HSCSG Existentes
- `src/core/lib/federation.ts` — Federación de nodos
- `src/core/lib/valueDual.ts` — Lógica anfibia TQ/ZNU
- `src/core/state/boundaries.ts` — Boundaries CEL (4 exclusiones salud)
- `src/core/lib/tokens.ts` — Sistema de tokens multi-activo (CoRe)

#### Componentes a Crear
- `src/core/lib/nfc_terminal.ts` — Lógica de terminal
- `src/core/lib/card_crypto.ts` — Cifrado y firmas
- `src/core/state/nfc_state.ts` — Estado de terminales
- `src/core/api/nfc_api.ts` — API REST
- `src/app/screens/NFCWallet.tsx` — UI

### 12. Mapeo a Ecoaldeas (asimilación previa)

| Concepto Ecoaldeas | Implementación HSCSG |
|-------------------|------------------------|
| ESP32 + PN532 + OLED | Hardware idéntico |
| 4 modos (Keypad/Web/Touch/Community) | Mismos 4 modos |
| NTAG424 DNA / DESFire EV3 | Mismas tarjetas |
| ed25519 + AES-256-GCM + ECDH | Misma criptografía |
| Sandbox Goja | Migrar a WASM/QuickJS |
| 100% offline-first | Mantener (HSCSG ya es offline-first) |
| QRs (3 min polling) | Añadir QR fallback (5 min) |
| Hash chain ledger | Mismo patrón |
| Gossip protocol (nodos) | Compatible |

### 13. Ejemplos de Uso

#### 13.1 Inicializar Terminal
```typescript
const terminal = await NFCTerminal.create({
  deviceId: 'ESP32-001-EcoaldeaRaices',
  mode: 'community',
  wifiSSID: 'EcoaldeaRaices-Mesh',
  apiEndpoint: 'https://hscsg-v15-os.vercel.app/api',
  features: {
    allowOfflineTransactions: true,
    maxOfflineAmount: 1000000n, // 1000 TQ max offline
  }
});
```

#### 13.2 Procesar Transacción
```typescript
const result = await terminal.processTransaction({
  fromCard: 'did:hsccsg:card:abc',
  toCard: 'did:hsccsg:card:xyz',
  amount: 50000n, // 50 TQ
  token: 'TQ',
  memo: 'Canasta semanal',
});
// result = { success: true, txHash: '0x...', status: 'pending' | 'confirmed' }
```

#### 13.3 Sincronizar Offline
```typescript
const pending = await terminal.getPendingTransactions();
console.log(`${pending.length} transacciones pendientes de sincronizar`);
await terminal.sync();
// Notifica al usuario: "Sincronización completa: 5 transacciones confirmadas"
```

### 14. Referencias

#### Documentación
- [ESP32 Technical Reference Manual](https://www.espressif.com/sites/default/files/documentation/esp32_technical_reference_manual_en.pdf)
- [PN532 User Manual](https://www.nxp.com/docs/en/user-guide/UM08001.pdf)
- [NTAG424 DNA Datasheet](https://www.nxp.com/docs/en/data-sheet/NTAG_424_426_TT_RA_DS.pdf)
- [DESFire EV3 Features](https://www.nxp.com/products/security-and-authentication/contactless-smart-card-ics-ntag-mifare-desfire/mifare-desfire-ev3)
- [W3C Verifiable Credentials](https://www.w3.org/TR/vc-data-model/)

#### Papers Académicos
- "Offline-First Web Applications" — Alex Feyerke (2013)
- "A Survey of NFC Security" — Roland et al. (2018)
- "HCE-NFC: A Practical Electronic Payment System" — Pasquet et al. (2016)
- "Mutual Authentication for NFC" (ISO/IEC 9798)

#### Asimilaciones Previas
- `docs/ecoaldea_monte_backup.md` — Implementación de referencia
- `docs/ecoaldea_monte_integration.md` — Mapeo conceptual
- `docs/libro_ecoaldeas_federadas_backup.md` — Documentación detallada
- `docs/gaia_ecoaldeas_deep_integration.md` — Integración con Gaia

---

## Implementación de Referencia

```c
// Firmware ESP32 (pseudo-código para Arduino/PlatformIO)

#include <Wire.h>
#include <Adafruit_PN532.h>
#include <Adafruit_SSD1306.h>
#include <ESP32RotaryEncoder.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <mbedtls/ecdh.h>
#include <mbedtls/gcm.h>

// Hardware pins
#define PN532_IRQ   4
#define PN532_RESET 5
#define OLED_SDA    21
#define OLED_SCL    22
#define ENCODER_CLK 32
#define ENCODER_DT  33
#define ENCODER_SW  25

// Globals
Adafruit_PN532 nfc(PN532_IRQ, PN532_RESET);
Adafruit_SSD1306 display(OLED_SDA, OLED_SCL);
RotaryEncoder encoder(ENCODER_CLK, ENCODER_DT, ENCODER_SW);
WiFiClient wifi;
String deviceId;
String apiEndpoint = "https://hscsg-v15-os.vercel.app/api";

void setup() {
  Serial.begin(115200);
  
  // Init NFC
  nfc.begin();
  nfc.SAMConfig();
  
  // Init OLED
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.display();
  
  // Init encoder
  encoder.begin();
  
  // Load deviceId from NVS
  deviceId = readDeviceId();
  
  // Connect Wi-Fi
  connectWifi();
  
  // Show welcome
  showWelcome();
}

void loop() {
  // Check for NFC card
  uint8_t uid[7];
  uint8_t uidLength;
  
  if (nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A, uid, &uidLength)) {
    handleCardTap(uid, uidLength);
  }
  
  // Check encoder
  if (encoder.wasTurned()) {
    handleEncoderTurn(encoder.getPosition());
  }
  
  // Check button
  if (encoder.wasPressed()) {
    handleButtonPress();
  }
  
  delay(50);
}

void handleCardTap(uint8_t* uid, uint8_t length) {
  String cardId = bytesToHex(uid, length);
  display.clear();
  display.setCursor(0, 0);
  display.print("Card: ");
  display.println(cardId);
  display.display();
  
  // Step 1: Get card balance
  auto balance = getBalance(cardId);
  display.println("Balance:");
  display.println(formatAmount(balance));
  display.display();
  
  // Step 2: Wait for amount (encoder) or auto-fetch from web
  // ...
}
```

---

*Skill generada el 2026-09-05 por el sistema de asimilación HSCSG v15 OS*
