# Profile Briefs Mapping — brief-detector-recommender

**Session:** 2026-08-22 | **Context:** 6 new cognitive/professional profile briefs created

---

## New Profile Briefs (BF-077 to BF-082)

| BF-ID | Brief File | Audiencia | Completeness Checklist |
|-------|------------|-----------|------------------------|
| **BF-077** | `BRIEF_PERFIL_PROFESIONALES.md` | Especialistas certificados | ✅ Punto entrada por especialidad, flujo trabajo, herramientas, casos éxito |
| **BF-078** | `BRIEF_PERFIL_POLIMATAS.md` | Polimatas (3+ dominios) | ✅ Orquestador nativo, flujo no lineal, arquitecto vasos, patrón éxito semanal |
| **BF-079** | `BRIEF_PERFIL_GENERALISTAS.md` | Generalistas | ✅ Mapa navegación, flujo ancho→profundo→ancho, contribución sin ser experto |
| **BF-080** | `BRIEF_PERFIL_AUTODIDACTAS.md` | Autodidactas | ✅ Cero permisos, mapa 3 niveles, herramientas autodidactas, patrón éxito |
| **BF-081** | `BRIEF_PERFIL_INTERDISCIPLINARES.md` | Interdisciplinares | ✅ Vasos como puentes, 3 puentes/semana, protocolos traducción |
| **BF-082** | `BRIEF_PERFIL_TRANSDISCIPLINARES.md` | Transdisciplinares | ✅ Base Material + Autómata, flujo vida→acción→regeneración, briefs como semillas |

---

## Completeness Verification (All 6 Briefs)

| Section | BF-077 | BF-078 | BF-079 | BF-080 | BF-081 | BF-082 |
|---------|--------|--------|--------|--------|--------|--------|
| Punto de entrada concreto | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Flujo de trabajo propio | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Herramientas HSCSG mapeadas | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Patrón de éxito temporal | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Checklist de identidad | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Trampas + antídotos | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Canal dedicado | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Primera acción concreta | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

**All 6 briefs: COMPLETE ✅**

---

## Integration with Gap Detection

### New Gap Detection Rules to Add

```javascript
// In detectGaps() - Check profile briefs completeness
const profileBriefs = [
  'BRIEF_PERFIL_PROFESIONALES.md',
  'BRIEF_PERFIL_POLIMATAS.md',
  'BRIEF_PERFIL_GENERALISTAS.md',
  'BRIEF_PERFIL_AUTODIDACTAS.md',
  'BRIEF_PERFIL_INTERDISCIPLINARES.md',
  'BRIEF_PERFIL_TRANSDISCIPLINARES.md'
];

profileBriefs.forEach(brief => {
  const path = require('path');
  const fs = require('fs');
  const fullPath = path.join(DOCS, brief);
  if (!fs.existsSync(fullPath)) {
    gaps.push({
      id: `BF-${brief.match(/BF-(\d+)/)?.[1] || 'XXX'}`,
      type: 'profile_brief_missing',
      source: brief,
      priority: 'P0',
      related_briefs: ['BF-073'], // ONBOARDING
      workstream: 'DOCUMENTATION'
    });
  } else {
    // Verify completeness
    const content = fs.readFileSync(fullPath, 'utf-8');
    const requiredSections = [
      'Punto de entrada',
      'Flujo de trabajo',
      'Herramientas',
      'Patrón de éxito',
      'Checklist',
      'Trampas',
      'Canal',
      'Primera acción'
    ];
    requiredSections.forEach(section => {
      if (!content.includes(section)) {
        gaps.push({
          id: `BF-${brief.match(/BF-(\d+)/)?.[1] || 'XXX'}-INCOMPLETE`,
          type: 'profile_brief_incomplete',
          source: brief,
          priority: 'P1',
          missing_section: section,
          workstream: 'DOCUMENTATION'
        });
      }
    });
  }
});
```

---

## Usage in Recommendations

### Priority Boost for Profile Briefs
```javascript
// In calculateScore() - boost if gap relates to onboarding/profile
if (gap.type === 'profile_brief_missing' || gap.type === 'profile_brief_incomplete') {
  strategicValue = 10; // Maximum - these are entry points for ALL new contributors
  unblockFactor = 10;  // Unblocks all future contributors
}
```

### Projection Horizons for Profile Briefs
| Horizon | Profile Brief Actions |
|---------|----------------------|
| **30d** | Verify all 6 briefs complete + linked in BRIEFS_INDEX.md + README Start Here |
| **60d** | Create profile-specific CoachFAB chips + neko-room templates |
| **90d** | Profile-based onboarding automation (auto-detect profile → show right brief) |

---

## Extrapolation: Profile-Based Onboarding Future

```javascript
// Predicted evolution (based on 6 profiles created)
{
  nextStep: "Profile auto-detection via CoachFAB conversation",
  timeline: "60-90 days",
  implementation: "CoachFAB asks 3 questions → identifies profile → loads right brief + workstream",
  skillsNeeded: "coach-profile-detector, hscsg-profile-onboarding",
  briefsImpacted: "BF-077 through BF-082 become dynamic, not static"
}
```

---

## Quick Verification Commands

```bash
# Check all 6 profile briefs exist
ls -la docs/BRIEF_PERFIL_*.md

# Verify completeness (all have required sections)
for f in docs/BRIEF_PERFIL_*.md; do
  echo "=== $f ==="
  grep -c -E "(Punto de entrada|Flujo de trabajo|Herramientas|Patr.n de éxito|Checklist|Trampas|Canal|Primeraacci.n)" "$f"
done

# Check BRIEFS_INDEX.md includes them
grep "BRIEF_PERFIL" docs/BRIEFS_INDEX.md

# Check README Start Here links
grep "BRIEF_PERFIL" README.md
```

---

*Generated: 2026-08-22 | Skill: brief-detector-recommender | Context: 6 profile briefs created for HSCSG v15 OS*