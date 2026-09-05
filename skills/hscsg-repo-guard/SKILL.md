---
name: hscsg-repo-guard
description: Skill para guardar/asimilar repos externos en HSCSG_v15_OS cuando el usuario lo indique. Clonea, documenta (backup + integración), crea módulos, y pusha a GitHub. Invocable por el usuario o por el orchestrator. Incluye workstream GAIA_METAPLATFORM_INTEGRATION listo para usar.
---

# hscsg-repo-guard — Guarda repos externos en HSCSG v15 OS

## Qué hace
1. Clona el repo indicado (git clone --depth 1)
2. Crea `docs/<repo>_backup.md` (qué es, stack, estructura, licencia, índice de archivos clave)
3. Crea `docs/<repo>_integration.md` (triple perspectiva: Usuario/LLM/HSCSG, isomorfismos, Take/Adapt/Discard)
4. Añade workstream al orchestrator si aplica
5. Commitea + pushea todo a GitHub

## Invocación
```bash
# Manual
node hscsg-repo-guard.js guard <owner/repo> [alias]

# Automático (si el usuario da la URL)
node hscsg-repo-guard.js guard sourcerer-io/sourcerer-app sourcerer
```

## Estructura de salida
```
docs/<source>_backup.md      # backup quirúrgico completo
docs/<source>_integration.md # isomorfismos + decisiones
```

## Dependencias
- `git` (git-bash en Windows)
- `node` (para el script)

## Configuración
- Ruta base: `/c/Users/Isaacko0/HSCSG_v15_OS`
- Repo destino: `origin/main` (ya configurado)
- Clones temporales: `/c/Users/Isaacko0/Documents/repo_<source>/`

## Estado
- Skill creada: ✅
- Workflows listos: backup, integration, orchestrator
- Pendiente: primer repo guardado (sourcerer-io/sourcerer-app)
