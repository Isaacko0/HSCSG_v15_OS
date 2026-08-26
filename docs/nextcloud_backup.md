# Nextcloud Server — Backup Quirúrgico

**Fuente:** https://github.com/nextcloud/server (commit d0e216bfc2fe10d2590a259ee50cbf63e1e44a67)  
**Fecha:** 2026-08-25  
**Licencia:** AGPL-3.0-or-later  
**Tipo:** Plataforma de sincronización y colaboración de archivos (self-hosted)  
**Stack:** PHP 57.3%, JavaScript 33.4%, TypeScript 3.8%, Vue 3.7%, Gherkin 1.2%  
**Escala:** 36.6k★, 5.1k forks, 89,976 commits, 1,098 contribuidores

---

## Qué es Nextcloud

**Nextcloud Server** es la plataforma de productividad y sincronización de archivos más grande del mundo open-source. Es una **alternativa self-hosted a Google Drive, Dropbox, Microsoft 365 y Slack** — donde el usuario controla sus datos, servidor y seguridad.

### Propuesta de Valor

| Característica | Descripción |
|----------------|-------------|
| **Acceso a datos** | Almacena archivos, contactos, calendarios en servidor propio |
| **Sincronización** | Sincronización multi-dispositivo (desktop, móvil, web) |
| **Compartición** | Comparte archivos con permisos granulares (lectura, escritura, tiempo limitado) |
| **Apps expandibles** | 200+ apps: Calendar, Contacts, Mail, Talk (video), Deck (Kanban), Notes, Forms, etc. |
| **Seguridad** | 2FA, encryption end-to-end, HackerOne bounty, brute-force protection |
| **Colaboración** | Chat, videoconferencia, edición colaborativa de documentos |

### Arquitectura Técnica

```
┌─────────────────────────────────────────────────────────────┐
│                    NEXTCLOUD SERVER                          │
├─────────────────────────────────────────────────────────────┤
│  Frontend: Vue.js + TypeScript + SCSS                      │
│  Backend: PHP 8.x + Symfony                                │
│  Base de datos: MySQL/MariaDB/PostgreSQL/SQLite            │
│  Servidor: Apache/Nginx + PHP-FPM                          │
│  Almacenamiento: Local/S3/Swift/FTP/SFTP/WebDAV            │
│  Sincronización: WebDAV + API REST + WebSockets            │
│  Seguridad: 2FA (TOTP/WebAuthn) + Encryption + OAuth2       │
├─────────────────────────────────────────────────────────────┤
│  Apps: Calendar, Contacts, Mail, Talk, Deck, Notes, Forms  │
│  Integraciones: LDAP/AD, SAML/OIDC, WebDAV, CalDAV, CardDAV│
└─────────────────────────────────────────────────────────────┘
```

### Estructura del Repo

| Directorio | Contenido |
|------------|-----------|
| `apps/` | Aplicaciones principales (files, calendar, contacts, mail, talk, deck, etc.) |
| `core/` | Núcleo del sistema (rutas, controladores, plantillas) |
| `lib/` | Librerías compartidas (privacidad, archivos, compartir, seguridad) |
| `ocs/` | Open Collaboration Services (API) |
| `tests/` | Tests PHPUnit, Behat, Vitest, Playwright |
| `themes/` | Temas visuales |
| `3rdparty/` | Dependencias externas (giggsey, etc.) |

### Modelo de Seguridad

| Capa | Mecanismo |
|------|-----------|
| **Autenticación** | 2FA (TOTP, WebAuthn), OAuth2, SAML, LDAP/AD |
| **Autorización** | ACL granulares (read/write/delete/share por archivo/carpeta) |
| **Cifrado** | End-to-end encryption (E2EE), server-side encryption (SSE) |
| **Auditoría** | Logging de accesos, cambios, comparticiones |
| **Protección** | Brute-force detection, rate limiting, HackerOne bounty |

### Modelo de Compartición

```
Archivo/Carpeta
  ├── Permisos: read | write | delete | share
  ├── Destinatarios: usuarios | grupos | links públicos
  ├── Expiración: fecha límite de acceso
  └── Protección: password, watermark, readonly
```

### Apps Principales

| App | Función | Isomorfismo HSCSG |
|-----|---------|-------------------|
| **Files** | Gestor de archivos | Base Material (AUT_HABI) |
| **Calendar** | Calendario compartido | Tekitl (proyectos) |
| **Contacts** | Agenda de contactos | Colectivo (miembros) |
| **Mail** | Cliente de email | Comunicación |
| **Talk** | Chat + videoconferencia | Vasos comunicantes |
| **Deck** | Kanban/Proyectos | Tekitl (FSM) |
| **Notes** | Notas colaborativas | Knowledge Commons |
| **Forms** | Formularios | CDS (encuestas) |
| **Polls** | Votaciones | CDS (decisiones) |

---

## Principio Anfibio Aplicado

### EXTIRPAR (infra ajena)
- PHP/MySQL/MariaDB backend → HSCSG es SPA offline (React + Zustand + localStorage)
- Servidor Apache/Nginx → HSCSG corre en navegador (Vite + SPA)
- Docker/CI/CD (GitHub Actions, Playwright) → No aplica (HSCSG es frontend puro)
- BrowserStack/WAVE/Lighthouse → Testing externo (no relevante para asimilación)
- HackerOne bounty → Programa de seguridad externo

### CONSERVAR (lógica pura)
- **Modelo de apps/plugins** → Arquitectura extensible de módulos HSCSG
- **Sistema de permisos granulares** → Boundaries CEL (deny>allow, fail-closed)
- **Sincronización peer-to-peer** → DTN mesh (offline-first)
- **Compartición por permisos** → ValueFlows (eventos económicos con ACL)
- **Seguridad 2FA/encryption** → Ley I MJ (no dañar base material/datos)
- **Colaboración multi-usuario** → Colectivo (CDS + ValueFlows)
- **Calendario/Contactos/Tareas** → Tekitl (proyectos + FSM)

---

## Isomorfismos HSCSG ↔ Nextcloud

| Concepto Nextcloud | Concepto HSCSG | Isomorfismo |
|-------------------|----------------|-------------|
| Self-hosted data sovereignty | Nodo Cosateco soberano | Control local de datos |
| Files sync (WebDAV) | DTN mesh offline-first | Sincronización descentralizada |
| Sharing permissions (read/write/delete) | Boundaries CEL (deny>allow) | Control de acceso granular |
| 2FA + Encryption | Ley I MJ (no dañar) | Seguridad por diseño |
| Apps ecosystem | Módulos HSCSG (extensible) | Arquitectura plugin |
| Calendar/Contacts/Tasks | Tekitl (proyectos + FSM) | Gestión de tiempo |
| Talk (chat/video) | Vasos comunicantes | Comunicación |
| Deck (Kanban) | Tekitl (FSM etapas) | Gestión de proyectos |
| Forms/Polls | CDS (decisiones colectivas) | Gobernanza |
| User groups | Colectivo (células) | Organización social |
| Activity log | RAO (append-only) | Auditoría inmutable |
| Trash bin | Reversibilidad (Ley I) | Recuperación de datos |
| Version control | RAO (historial) | Trazabilidad |
| Federation (cross-server) | Federación ontogenética | Red de nodos |

---

## Valor para HSCSG

| Necesidad HSCSG | Aporte Nextcloud |
|-----------------|------------------|
| **Almacenamiento soberano** | Modelo self-hosted de archivos |
| **Comunicación offline** | Patrón de sincronización P2P |
| **Permisos granulares** | ACL por recurso (archivo/carpeta) |
| **Colaboración** | Chat, video, calendario, tareas |
| **Seguridad** | 2FA, encryption, auditoría |
| **Extensibilidad** | Arquitectura de apps/plugins |
| **Federación** | Compartición entre servidores |

---

*Documento generado: 2026-08-25 | Fuente: github.com/nextcloud/server*