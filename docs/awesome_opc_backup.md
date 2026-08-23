# chen103226/awesome-one-person-company — Backup Quirúrgico

**Fuente:** https://github.com/chen103226/awesome-one-person-company (commit 1e2887d6e456c9ae3c6dab1db8611bbc63d3f883)  
**Fecha:** 2026-08-22  
**Licencia:** CC BY 4.0  
**Estado:** Activo (8 commits, 279★, 34 forks, 2 watching)  
**Tipo:** Awesome list curada bilingüe (EN/CN) — casos de estudio reales con ingresos verificados

---

## Visión General

Awesome list **high-signal** para one-person companies: solo incluye "productos reales, ingresos reales (o verificables), retros reales". Enfocada en:
- Casos de estudio con datos financieros verificados
- Stacks tecnológicos recomendados (2026)
- Metodología de validación (The Mom Test)
- Rutas de aprendizaje curadas
- 30-day launch checklist

---

## Casos de Estudio (Ingresos Verificados)

### 🌍 Internacionales

| Creador | Producto | Ingreso | Tech Stack | Punto Clave |
|---------|----------|---------|------------|-------------|
| **Pieter Levels** | Nomad List, Remote OK, Photo AI | $2.1M/año | PHP, jQuery, SQLite | Build in Public, 70+ proyectos, 4 rentables |
| **Marc Lou** | ShipFast + 25 proyectos | $1.03M/año | Next.js, Tailwind, Supabase | Multi-product matrix, SaaS boilerplate |
| **Jon Yongfook** | Bannerbear | $600K ARR | Rails, AWS, Vue.js | API-first, B2B focus, Zapier integration |
| **Daniel Vassallo** | Small Bets community | — | — | Filosofía "Small Bets", ex-AWS |
| **Nathan Barry** | ConvertKit | $29M ARR | Rails, React, AWS | De 1→70 personas, bootstrapped |

### 🇨🇳 Chinas

| Creador | Producto | Ingreso | Tech Stack | Punto Clave |
|---------|----------|---------|------------|-------------|
| **royqh1979** | 小熊猫C++ IDE | ¥5万+/mes | C++, Qt, Scintilla | Free + 爱发电 + consultoría |

---

## Stacks Tecnológicos Recomendados (2026)

### Stack A: Vercel Ecosystem (Recomendado)
```
Frontend: Next.js 14 (App Router) + React 18
UI: Tailwind CSS + shadcn/ui
Backend: Next.js API Routes
Database: Supabase (PostgreSQL)
Auth: Supabase Auth
Storage: Supabase Storage
Hosting: Vercel
```

### Stack B: Laravel Ecosystem (Bajo costo)
```
Framework: Laravel 11
Frontend: Inertia.js + Vue 3 / Livewire
Database: MySQL / PostgreSQL
Cache: Redis
Hosting: Hetzner / DigitalOcean
```

### Stack C: Pieter Levels Style (Ultra simple)
```
Frontend: Vanilla JS / jQuery
Backend: PHP (nativo)
Database: SQLite
Hosting: DigitalOcean VPS
```

---

## Metodología: The Mom Test

```
1. Definir usuario específico
   ❌ "Ayudar emprendedores"
   ✅ "Ayudar a YouTubers a analizar datos"

2. Descubrir dolor real (evitar falsa demanda)
   ❌ "¿Te sirve esta función?"
   ✅ "¿Qué problema tuviste la última vez que analizaste datos?"

3. Validar disposición a pagar
   ❌ "¿Lo usarías si lo hiciera?"
   ✅ "¿Cuánto pagarías si existiera ahora?"

4. MVP test rápido (1-2 semanas)
   - Landing page + Waitlist
   - Servicio manual (disfrazar automatización)
   - 5+ usuarios pagos → empezar desarrollo
```

---

## 30-Day Launch Checklist

**Semana 1: Validar idea**
- [ ] Entrevistar 10+ usuarios
- [ ] Buscar quejas en Reddit/X/小红书
- [ ] Landing page simple
- [ ] 5+ usuarios intención de pago

**Semana 2: MVP**
- [ ] Stack tecnológico elegido
- [ ] Funcionalidad core
- [ ] Pagos integrados (Stripe/Lemon Squeezy)
- [ ] Analytics (Plausible/PostHog)

**Semana 3: Beta**
- [ ] 10-20 beta users
- [ ] Feedback + iteración
- [ ] Preparar Product Hunt

**Semana 4: Launch**
- [ ] Product Hunt launch
- [ ] Comunidad (Reddit/HN/V2EX)
- [ ] Blog "Build in Public"
- [ ] Primer usuario pago

---

## Mapeo a HSCSG v15 OS

| Concepto awesome-opc | Aplicación HSCSG | Destino |
|---------------------|------------------|---------|
| **Casos de estudio con ingresos** | Benchmarks para CaaS-BM pricing | `lib/caas_pricing.ts` |
| **Stacks tecnológicos recomendados** | Guía para autodidactas/profesionales | `BRIEF_PERFIL_AUTODIDACTAS.md` + `BRIEF_PERFIL_PROFESIONALES.md` |
| **30-day launch checklist** | Enriquecer ONBOARDING constructor | `BRIEF_ONBOARDING_CONSTRUCTOR.md` |
| **The Mom Test** | Metodología validación en Autómata | `lib/methodology.ts` |
| **Learning paths** | Curriculum para perfiles | `docs/learning_paths.md` |
| **创业Idea pool** | Input para CoachFAB chips | `packages/ui/CoachFAB.tsx` |
| **Failory (casos fracaso)** | Lessons learned | `BRIEF_ONBOARDING_CONSTRUCTOR.md` |

---

## Qué NO Migrar

| Componente | Acción | Razón |
|------------|--------|-------|
| Assets (imágenes) | ❌ No migrar | Visuales del README |
| README.md / README_EN.md / README_CN.md | ❌ No migrar | Docs del repo fuente |
| WeChat QR codes | ❌ No migrar | China-specific |
| Twitter handles | ⚠️ Adaptar | Solo los relevantes |

---

## Qué SÍ Conservar

| Dato | Destino HSCSG | Formato |
|------|---------------|---------|
| Casos de estudio (ingresos, stack, puntos clave) | `lib/case_studies.ts` | TypeScript const |
| Stacks tecnológicos (Vercel, Laravel, Pieter Levels) | `lib/stacks_recommendations.ts` | TypeScript enum |
| The Mom Test methodology | `lib/mom_test_methodology.ts` | TypeScript functions |
| 30-day launch checklist | `docs/30_day_launch_checklist.md` | Markdown |
| Learning paths | `docs/learning_paths.md` | Markdown |
| Herramientas recomendadas (Figma, Framer, Carrd, etc.) | `lib/tooling_stack.ts` (enrichment) | TypeScript const |
| Citas textuales de creadores | `docs/creator_quotes.md` | Markdown |

---

*Backup generado: 2026-08-22 | Repo: chen103226/awesome-one-person-company | Commit: 1e2887d | Metodología: 4 fases HSCSG*