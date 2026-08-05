# BACKUP ORIGINAL — Baruch4413 / tekitl
# Copia de seguridad del repositorio analizado (2026-08-05) antes de asimilarlo a HSCSG v15 OS.
# Fuente: https://github.com/Baruch4413/tekitl
# Stack: Laravel 12 + Inertia v2 + React 19 + TypeScript + Tailwind v4 + MySQL + Reverb + Fortify + Wayfinder
# Licencia: GPL-3.0

Estructura clave (del README):
app/
  Models/           # Post, Project, ProjectRole, ProjectVolunteer,
                     # ProjectTimelineEvent, Reaction, User, UserTalent…
  Http/Controllers/ # ProjectController, ProjectStageController,
                     # ProjectTimelineController, ProjectVolunteerController…
  Observers/        # Emisores de eventos de timeline
  ProjectStage.php  # Enum/máquina de estados del ciclo de vida
  ReactionType.php  # Enum de reacciones (incl. Potenciar)
resources/js/
  pages/            # Entry points de Inertia
  components/ui/proyectos/
                     # ProjectTimeline, ProjectTimelineEntry,
                     # ProjectTimelinePostUpdate, ProjectRoles,
                     # CrowdfundingProgress…
  actions/, routes/ # Bindings generados por Wayfinder
specs/              # Specs de features en curso (Spec Kit)
  001-project-lifecycle-timeline/
  002-i18n-spanish-baseline/

Dominios centrales:
- Post → Project (ciclo: planificación → ejecución → completado|abortado)
- Roles + voluntarios (ocupación + horas estimadas, aplicación/aceptación/horas)
- Coins (moneda social no monetaria): reacciones "Potenciar" → acuñan coins
- Timeline de actividad por proyecto (eventos significativos)
- Talentos = portafolio (ocupación + confianza + años, proyectos participados)