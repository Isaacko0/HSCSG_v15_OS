# BACKUP — Urbanika/Nidori-catalogo

> Fuente: https://github.com/Urbanika/Nidori-catalogo (clonado depth-1 urbanika_Nidori-catalogo)
> Metodología HSCSG Fase 1-2. Texto REAL extraído del README del repo.

## Resumen
- **Archivos en repo:** 24
- **Tipo:** proyecto con código

## Contenido del README (texto real)

# Catálogo Bioclimático Nidori

El **Catálogo Bioclimático Nidori** es una colección de soluciones constructivas y ambientales que reduce el consumo energético en edificios hasta en un 80%. Presenta 10 sistemas prácticos, asequibles e implementables en contextos latinoamericanos que combinan sostenibilidad con eficiencia térmica y gestión de recursos.

## Sistemas incluidos

1. **Techos verdes** — cubiertas vivas que regulan temperatura y reducen escorrentía
2. **Biofiltro de agua gris** — tratamiento natural de aguas grises para riego
3. **Captación pluvial** — recolección y almacenamiento de agua de lluvia
4. **Pozos canadienses** — ventilación y climatización pasiva subterránea
5. **Tubos terracota** — drenaje y mejora de suelos con materiales locales
6. **Bioconstrucción local** — materiales vernáculos y técnicas tradicionales
7. **Reactor LMSN** — tratamiento de efluentes con luz solar
8. **Energía solar** — aprovechamiento de radiación solar pasiva y activa
9. **Energía eólica** — generación de electricidad con viento
10. **Biopiscinas** — piscinas con filtración natural sin químicos

## Especificaciones

| Campo | Valor |
|-------|-------|
| **Versión** | v1.0 |
| **Fecha** | 17 de abril de 2026 |
| **Tipo de cambio** | 1 USD = $17.42 MXN (Banxico FIX, 9 abril 2026) |
| **Crédito** | Nidori · Urbanika |

## Estructura

- `/index.html` — índice principal con enlaces a los 10 sistemas
- `/SISTEMA.html` — folleto detallado de cada sistema (con imágenes, esquemas, ventajas)
- `/assets/catalogo.css` — estilos compartidos
- `/assets/img/` — imágenes referenciadas en los folletos

## Uso local

Para servir el catálogo localmente:

```bash
cd catalogo-deploy
python3 -m http.server 8000
```

Luego abre `http://localhost:8000` en tu navegador.

## Deployment

Desplegado en Vercel con rutas limpias (sin extensión `.html`).

- URLs limpias activadas: `/techos_verdes` en lugar de `/techos_verdes.html`
- No hay trailing slash requerido

---

**Nidori** es una iniciativa de **Urbanika** para democratizar soluciones bioclimáticas en Latinoamérica.


---
*Backup generado por extracción de texto REAL del repo clonado. Sin contenido inventado.*
