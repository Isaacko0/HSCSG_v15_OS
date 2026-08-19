# BACKUP — community_ai-alliance (b3alliance / The AI Alliance)

**Fecha:** 2026-08-19 · **Origen:** https://github.com/b3alliance/community_ai-alliance
**Clon:** `C:\Users\Isaacko0\Documents\community_ai-alliance` (33 archivos) · **Backup:** `community_ai-alliance_BACKUP_20260819_004018`
**Licencia:** Apache 2.0 / CC-BY 4.0 / CDLA 2.0 (tri-licencia del AI Alliance).

## Qué es

Repo de **gobernanza y comunidad abierta** del AI Alliance (fork de `The-AI-Alliance/community`). No es código ejecutable: es la **OS de comunidad** — eventos, grupos por región/temas, code of conduct, recursos, blog, videos, newsletter. Estructura de **colaboración federada por PR** (cualquiera contribuye vía pull request).

## Estructura (33 archivos)

```
README.md · CODE_OF_CONDUCT.md · CODE_OF_CONDUCT_COMMITTEE.md · CONTRIBUTING.md · MAINTAINERS.md
groups/   regional.md · topics.md          # grupos por región y por tema
events/   online/ · 2025/                   # eventos presenciales/online
projects/ readme.md                         # proyectos afiliados
resources/ · blog/ · videos/ · newsletter/ · website/ · online/
```

## Conceptos clave (para integration.md)

- **Gobernanza participativa por PR:** cualquier miembro propone evento/grupo/recurso vía pull request. Isomorfo a `celulas`/`civilizaciones` (federación de células por Dunbar).
- **Grupos por región + tema:** taxonomía de comunidad distribuida. Isomorfo a `células` + `dominios` de HSCSG.
- **Code of Conduct + Committee:** capa humana de justicia/restauración. Isomorfo a Kleros + Wisdom Councils (Gaia) + Ley I MJ (no-daño).
- **Tri-licencia abierta:** apertura por diseño (Apache/CC-BY/CDLA). Isomorfo a `license: MIT` de skills HSCSG.

## Por qué es fuente primaria para HSCSG

HSCSG ya tiene `civilizaciones`/`celulas` + capa social Hylo fork. `community_ai-alliance` es **evidencia de mercado de gobernanza comunitaria federada open-source** (el "cómo" de una comunidad global funciona sin jerarquía cerrada). Complementa el Anexo D (Competitive Landscape CaaS): mientras Verint es cerrado, el AI Alliance es abierto/federado — HSCSG es el siguiente paso (offline + soberano).

## Infraestructura ajena a extirpar (principio anfibio)

- **GitHub como única sede:** reemplazar por almacenamiento HSCSG local (Zustand + Nostr federation). El repo es la "sede"; HSCSG la hace offline-first.
- **Meetup/eventos externos:** conservar el modelo de eventos presenciales/online, pero como `events` en estado local.
- **Se conserva:** estructura de grupos por región/tema, CoC, gobernanza por contribución (PR → análogo a propuestas vecinales).
