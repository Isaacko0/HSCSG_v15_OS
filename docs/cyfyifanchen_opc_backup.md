# cyfyifanchen/one-person-company — Backup Quirúrgico

**Fuente:** https://github.com/cyfyifanchen/one-person-company (commit ed91bcef4ee54a56486a4424d5256033d176cccd)  
**Fecha:** 2026-08-22  
**Licencia:** MIT  
**Estado:** Activo (44 commits, 2.7k★, 235 forks, 26 watching)  
**Tipo:** Curación de herramientas IA para One-Person Company (Review-based: "algunos son tesoros, algunos son trampas")

---

## Visión General

Repo de **curación práctica** de herramientas IA para One-Person Companies. No es código ejecutable ni arquitectura: es una **lista comentada y categorizada** con reviews reales ("algunos son tesoros, algunos son trampas"), rankings reales (WebDev Arena, Chatbot Arena), precios, y enlaces directos.

**Valor para HSCSG v15 OS:** Tooling stack validado por practicantes reales, rankings de modelos LLM actualizados, pricing real de servicios, categorización por caso de uso.

---

## Estructura del Repo

```
cyfyifanchen/one-person-company/
├── assets/
│   ├── gif/banner-cape.gif
│   ├── jpg/ (llm.jpg, tts.jpg, code.jpg, design.jpg, website.jpg, learning.jpg)
│   └── png/
├── README.md              # Versión chino (principal)
├── assets/README-EN.md    # Versión inglés
└── LICENSE                # MIT
```

---

## Contenido por Categoría (Extracción Completa)

### 1. 🤖 大语言模型 (LLMs) — Rankings Reales WebDev Arena / Chatbot Arena

**TOP 3 Recomendados (WebDev Arena):**
| Modelo | Proveedor | Ranking WebDev Arena | Fortaleza |
|--------|-----------|---------------------|-----------|
| **Claude 3.7 Sonnet** | Anthropic | 🥇 #1 | Multi-funcional, conocimiento actualizado rápido |
| **Gemini 2.5 Pro** | Google | 🥈 #2 | Reasoning fuerte, multi-modal |
| **DeepSeek-V3** | DeepSeek | 🏅 #4 | Dev capability excelente, código calidad alta |

**Metodología de uso del autor:** Usa Claude 3.7 Sonnet + Gemini 2.5 Pro como principales; DeepSeek + Grok para verificación cruzada.

**Fuentes de rankings:** https://web.lmarena.ai/leaderboard (WebDev Arena + Chatbot Arena)

---

### 2. 🎙️ TTS (Text-to-Speech) — 30+ Servicios Categorizados

**TOP 3 Recomendados:**
| Servicio | Fortaleza | Precio |
|----------|-----------|--------|
| **Microsoft Azure TTS** | Multi-idioma, emotional SSML, streaming | Free 5M chars/mes (12 meses) |
| **iFlytek 科大讯飞** | Chino #1, multi-escenario, voice cloning | ¥0.2/mil chars |
| **ElevenLabs** | Role-play fuerte, audio calidad alta, emotion | $11/M chars |

**Categorización completa (30+ servicios):**

| Categoría | Servicios Clave |
|-----------|-----------------|
| **Comerciales EN/Multi** | Azure, Google Cloud, Amazon Polly, IBM Watson, ElevenLabs, PlayHT, OpenAI TTS, Deepgram, Neuphonic, Murf AI, Resemble AI |
| **Chinos (CN)** | iFlytek, Baidu, MiniMax, ByteDance SeedTTS/MegaTTS3, Cartesia Sonic, Fish Speech, CosyVoice (Alibaba), 火山引擎 |
| **Open Source / Self-hosted** | Fish Speech (8 langs, voice clone, streaming), CosyVoice (Alibaba, multi-lang, streaming), Coqui TTS (entrenable), Mimic (Mycroft, embedded), Bark (Suno, multimodal), Tortoise TTS (alta calidad, no real-time), VITS (end-to-end), VoiceCanvas (50+ langs, 10s cloning) |

**Tabla comparativa funcional (30+ filas):**
- Columnas: Nombre, Chino, Inglés, Streaming, Clonación, Open Source, Especialidad, Precio
- Ejemplo: Azure TTS ✅✅✅ Chino/Inglés ✅ Streaming ❌ Clone ❌ OpenSource "Commercial standard, strong emotion" $4/M chars

---

### 3. 💻 代码 (Code Tools) — 50+ Herramientas

**TOP 3 Recomendados:**
| Herramienta | Especialidad | Precio |
|-------------|--------------|--------|
| **Cursor** | AI-assisted coding, completion, context understanding | Free tier |
| **Deepwiki.com** | Auto-docs generation, code understanding, private repos | Free |
| **Tempo** | Full-stack rapid build (backend+frontend+auth+payments) | Free |

**Categorías (50+ herramientas):**

| Subcategoría | Herramientas Clave |
|--------------|-------------------|
| **IDE** | TRAE, Cursor (3.7 free), VS Code, Windsurf (free) |
| **Terminal AI** | Warp (AI-enhanced, free tier) |
| **Code Understanding / Docs** | Deepwiki.com (auto-docs, private repos), gitsummarize (arch overview, biz logic), gitdiagram.com (visualize deps, module structure) |
| **Full-stack Rapid Build** | Tempo (backend+frontend+auth+payments), Chef (convex), Vibe Code App, v0.dev, Bolt.new, Lovable, Firebase Studio, Devin, HeyBoss, Replit, Same, a0.dev, Vibe Coder, ShipAny, CopyWeb, Seede, Magic Patterns |

---

### 4. 🎨 设计工具 (Design Tools) — 25+ Herramientas

**TOP 3 Recomendados:**
| Herramienta | Especialidad | Precio |
|-------------|--------------|--------|
| **Recraft.ai** | All-in-one: Logo, imágenes, MockUp, Banner, templates, estilos | 100 gen/día free |
| **Canva** | Templates masivos, doc/whiteboard/social/video | 30 días free (tarjeta) |
| **Finisher** | AI hero headers inmersivos, estilos, auto-adapt copy/CTA/bg | Free |

**Categorías:**
| Subcategoría | Herramientas |
|--------------|--------------|
| **All-in-one Design** | Recraft.ai (🔥🔥🔥), Canva, Figma (AI plugins) |
| **Operations Design** | Canva (docs/whiteboard/social/video) |
| **Web Design** | Relume (1-liner → full site, Figma sync), Finisher (hero headers, auto copy/CTA/bg) |
| **3D Design** | Blender (MCP controller), Spline (web-based, templates) |
| **Motion Design** | Jitter (hero animations), HailuoAI, KlingAI |
| **Workflow Design** | Overflow (interaction flows) |
| **Logo Design** | Fiverr, Design.com, AILogoGenerator, LogoMakr, LogoPony, Looka |

---

### 5. ⚙️ 生产力工具 (Productivity) — 30+ Herramientas

**TOP 3 Recomendados:**
| Herramienta | Especialidad | Precio |
|-------------|--------------|--------|
| **Notion** | All-in-one workspace, databases, AI | Free tier |
| **Obsidian** | Local-first, markdown, plugins, graph view | Free (sync paid) |
| **Raycast** | Launcher + AI + extensions (Mac) | Free (Pro paid) |

**Categorías:** Note-taking, Task/Project Mgmt, Calendar, Automation, Read-later, Clipboard, Launcher, Focus/Timer

---

### 6. 🌐 网站系列 (Website Builders) — 15+ Herramientas

**TOP 3 Recomendados:**
| Herramienta | Especialidad | Precio |
|-------------|--------------|--------|
| **v0.dev** | Más rápido, sin watermark, instant preview | Free |
| **Lovable** | Mejor diseño, fácil customizar | Free |
| **bolt.new** | Mejor UX, interacción fluida | Free |

**Otros:** heyboss (12 min, $10 credit), replit (4 min, $25/mo necesita tarjeta), a0.dev, vibecoder.gg, shipany.ai, copyweb.ai, seede.ai, magicpatterns.com, same.dev, heyBoss, Devin, Firebase Studio, Devin, ShipAny, CopyWeb, Seede, Magic Patterns, Vibe Coder

---

### 7. 📚 学习系列 (Learning Resources)

Recursos de aprendizaje curados para one-person companies.

---

### 8. 👻 恶搞系列 (Parody)

**NaaS - No as a Service:** Servicio que no hace nada, pero tiene CI/CD completo para deployar "nada". Repos: hotheadhacker/no-as-a-service, gotev/no-as-a-service.

---

## Métricas de Calidad del Repo

| Métrica | Valor |
|---------|-------|
| **Stars** | 2.7k |
| **Forks** | 235 |
| **Watchers** | 26 |
| **Commits** | 44 |
| **Branches** | 7 |
| **Última actualización** | Mayo 2025 |
| **Idiomas** | Chino (README.md) + Inglés (assets/README-EN.md) |
| **Licencia** | MIT |

---

## Mapeo a HSCSG v15 OS (Conceptos Clave)

| Concepto cyfyifanchen | Aplicación HSCSG | Destino |
|----------------------|------------------|---------|
| **LLM Rankings (WebDev Arena)** | Model selection en Autómata | `lib/automaton.ts` → model selection logic |
| **TTS Services (30+)** | Voice layer para CoachFAB + notifications | `lib/voice_stack.ts` |
| **Code Tools (50+)** | Tooling stack para CaaS-BM + Talent Market | `lib/tooling_stack.ts` |
| **Design Tools (25+)** | Asset generation para CoachFAB + navteka | `lib/design_stack.ts` |
| **Website Builders (15+)** | Rapid prototyping en navteka | `packages/neko-client` prototyping |
| **Productivity Tools (30+)** | Personal OS para Autómata | `lib/personal_os.ts` |
| **Website Generators (v0, Lovable, Bolt)** | Rapid UI generation para CoachFAB | `packages/ui/CoachFAB.tsx` integration |
| **Learning Resources** | Curriculum para `BRIEF_ONBOARDING_CONSTRUCTOR.md` | `docs/BRIEF_ONBOARDING_CONSTRUCTOR.md` enrichment |
| **Pricing Real (TTS, LLMs, Tools)** | Cost modeling para ZNU/CaaS-BM pricing | `lib/caas_pricing.ts` |

---

## Qué NO Migrar (Extirpar)

| Componente | Acción | Razón |
|------------|--------|-------|
| Assets (gif, jpg, png) | ❌ No migrar | Solo visuales del README |
| README.md / README-EN.md | ❌ No migrar | Documentación del repo fuente |
| LICENSE | ❌ No migrar | Licencia del repo fuente |
| Estructura de carpetas assets/ | ❌ No migrar | Solo organización del repo fuente |

---

## Qué SÍ Conservar (Lógica Pura → Migrar a HSCSG)

| Dato Puro | Destino HSCSG | Formato |
|-----------|---------------|---------|
| **LLM Rankings (WebDev/Chatbot Arena)** | `lib/llm_rankings.ts` | TypeScript const + update script |
| **TTS Services Matrix (30+ filas)** | `lib/tts_matrix.ts` | TypeScript interface + pricing |
| **Code Tools Categorization (50+)** | `lib/code_tools_catalog.ts` | TypeScript enum + metadata |
| **Design Tools Catalog (25+)** | `lib/design_tools_catalog.ts` | TypeScript enum + metadata |
| **Website Builders Comparison (15+)** | `lib/website_builders.ts` | TypeScript + benchmark scores |
| **Productivity Tools (30+)** | `lib/productivity_tools.ts` | TypeScript enum |
| **Pricing Data (Real, verificado)** | `lib/caas_pricing.ts` | TypeScript + ZNU conversion |
| **Learning Resources URLs** | `docs/learning_resources_catalog.md` | Markdown curado |

---

## Referencias Cruzadas

- **Integración HSCSG:** `docs/cyfyifanchen_opc_integration.md` (pendiente)
- **Briefs relacionados:** BF-083, BF-084 (pendientes en BRIEFS_INDEX)
- **Briefs de perfiles:** `BRIEF_PERFIL_PROFESIONALES.md`, `BRIEF_PERFIL_AUTODIDACTAS.md`, `BRIEF_ONBOARDING_CONSTRUCTOR.md`
- **Skills relacionadas:** `hscsg-repo-assimilation`, `brief-detector-recommender`

---

*Backup generado: 2026-08-22 | Repo: cyfyifanchen/one-person-company | Commit: ed91bce | Metodología: 4 fases HSCSG*