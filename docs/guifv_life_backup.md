# BACKUP — GuiFV/life
# Fuente: https://github.com/GuiFV/life (clonado --depth 1 el 2026-08-05)
# Stack: Django 4 + Python + PostgreSQL + Docker + django-allauth + CKEditor5 + Materialize CSS.
# App de organización personal: "An app to organize what you need to do in life".

Modelos (life/core/models.py):
- Goal: name, description, type (Project/Trip/Buy/Do), effort (High/Low), area (Personal/Professional),
  important (1-9), urgent (1-9), matrix = important*urgent (matriz Important x Urgent),
  cost (Decimal), start_date, end_date, next (bool), completed (bool), created_at.
- GoogleAgenda: agenda_id, agenda_clean (procesado por services.extract_src_ctz).
- Notes: my_notes (CKEditor5 rich text).

Vistas: account (allauth: login/register), core (dashboard, goal CRUD, notes), google_agenda.
URL demo: http://54.210.101.32:8106/

Por qué se asimila: HSCSG necesita un módulo de organización de vida personal del nodo.
Life aporta la matriz Important x Urgent + tipos (Trip/Project/Buy/Do) + seguimiento next/completed.
Se asimila como lógica pura TS/Zustand; los costos se reinterpretan en ZNU (postmonetario), no dinero.
