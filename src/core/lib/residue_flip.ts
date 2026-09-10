/**
 * Giro de Residuo (GR) — Equivalente HSCSG a "Canelazo"
 * 
 * Transformador de assets: invierte el ángulo de un asset existente
 * para crear nuevo valor a partir de "residuos" (bloopers, descartes, sobras).
 * 
 * Principio: "Sácale algo a lo que ya tenías y da la vuelta, empieza al revés."
 */

export type AssetType = 
  | 'CONTENT'      // video, artículo, post, transcripción
  | 'CODE'         // snippet, función, módulo
  | 'DESIGN'       // mockup, wireframe, UI component
  | 'DATA'         // dataset, métricas, logs
  | 'FEEDBACK'     // comentario, objeción, testimonio
  | 'ERROR'        // bug, fallo, blooper
  | 'MEETING'      // transcripción, notas, action items
  | 'RESEARCH'     // notas, paper, benchmark
  | 'OTHER';

export interface Asset {
  id: string;
  type: AssetType;
  title: string;
  content: string;           // contenido original o referencia
  metadata: AssetMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface AssetMetadata {
  originalPurpose: string;    // para qué se creó originalmente
  audience: string;           // audiencia original
  format: string;             // formato original
  performance?: {             // métricas si aplica
    views?: number;
    engagement?: number;
    conversion?: number;
  };
  tags: string[];
  language: string;
}

export type FlipAngle = 
  | 'INVERT_PURPOSE'      // "Lo que falló → lección aprendida"
  | 'INVERT_AUDIENCE'     // "Para expertos → para principiantes" 
  | 'INVERT_FORMAT'       // "Largo → corto / Texto → video / Video → hilo"
  | 'INVERT_TONE'         // "Serio → humor / Formal → coloquial"
  | 'INVERT_PERSPECTIVE'  // "Problema → oportunidad / Fracaso → caso de estudio"
  | 'EXTRACT_RESIDUE'     // "Lo que sobró → micro-contenido"
  | 'RECOMBINE'           // "Fragmentos A+B → nuevo contexto"
  | 'CUSTOM';

export interface FlipOperation {
  angle: FlipAngle;
  customPrompt?: string;    // si angle === 'CUSTOM'
  intensity: number;        // 1-100 (qué tan radical es el giro)
  preserveCore: boolean;    // mantener mensaje central vs transformar todo
}

export interface FlippedAsset {
  originalId: string;
  operation: FlipOperation;
  newAsset: Asset;
  concept: string;          // concepto memorable extraído (ej: "la imperfección vende")
  estimatedValue: number;   // 1-100 (valor estimado del nuevo asset)
  createdAt: Date;
}

/**
 * Ejecuta giro de residio sobre un asset
 */
export function flipAsset(
  asset: Asset,
  operation: FlipOperation
): FlippedAsset {
  const newContent = applyFlip(asset.content, asset.metadata, operation);
  const concept = extractConcept(asset, operation);
  const newAsset: Asset = {
    id: `flip_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    type: asset.type,
    title: generateFlippedTitle(asset.title, operation),
    content: newContent,
    metadata: {
      ...asset.metadata,
      originalPurpose: `Giro de residuo: ${asset.metadata.originalPurpose}`,
      tags: [...asset.metadata.tags, 'giro-residuo', operation.angle.toLowerCase()],
      format: inferNewFormat(asset.metadata.format, operation)
    },
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  const estimatedValue = estimateValue(asset, operation);
  
  return {
    originalId: asset.id,
    operation,
    newAsset,
    concept: concept,
    estimatedValue,
    createdAt: new Date()
  };
}

function applyFlip(
  content: string,
  metadata: AssetMetadata,
  operation: FlipOperation
): string {
  // En implementación real, aquí iría LLM con prompt según ángulo
  // Por ahora, template base
  
  const prompts: Record<FlipAngle, string> = {
    INVERT_PURPOSE: `Transforma este contenido invirtiendo su propósito original. 
    Original: "${metadata.originalPurpose}"
    Nuevo propósito: Lo que falló/sobró se convierte en lección/caso de estudio.
    Contenido original: ${content}`,
    
    INVERT_AUDIENCE: `Reescribe este contenido para audiencia opuesta.
    Audiencia original: "${metadata.audience}"
    Nueva audiencia: Principiantes / No técnicos / Escépticos
    Contenido: ${content}`,
    
    INVERT_FORMAT: `Convierte este contenido a formato opuesto.
    Formato original: "${metadata.format}"
    Contenido: ${content}`,
    
    INVERT_TONE: `Cambia el tono radicalmente.
    Tono original: Serio/Formal/Técnico
    Nuevo tono: Conversacional/Humor/Vulnerable/Coloquial
    Contenido: ${content}`,
    
    INVERT_PERSPECTIVE: `Reencuadra desde perspectiva opuesta.
    Original: Problema/Error/Fracaso
    Nueva: Oportunidad/Lección/Caso de estudio
    Contenido: ${content}`,
    
    EXTRACT_RESIDUE: `Extrae lo más valioso de los "residuos" (bloopers, cortes, fracasos, sobras).
    Contenido: ${content}`,
    
    RECOMBINE: `Identifica fragmentos recombinables para nuevo contexto.
    Contenido: ${content}`,
    
    CUSTOM: operation.customPrompt || `Aplica transformación personalizada: ${content}`
  };
  
  // En producción: llamar LLM con prompt correspondiente
  // Por ahora retorna marker para pipeline real
  return `[FLIP:${operation.angle}:INTENSITY:${operation.intensity}] ${content}`;
}

function extractConcept(asset: Asset, operation: FlipOperation): string {
  // Extrae concepto memorable tipo "la imperfección vende autenticidad"
  const conceptTemplates: Record<FlipAngle, string[]> = {
    INVERT_PURPOSE: [
      "El error es el mejor maestro",
      "Lo que falla revela la verdad",
      "Los residuos contienen la esencia"
    ],
    INVERT_AUDIENCE: [
      "La simplicidad es la máxima sofisticación",
      "Explicado para tu abuela, entendido por el experto",
      "El conocimiento no tiene prerequisitos"
    ],
    INVERT_FORMAT: [
      "El medio es el mensaje invertido",
      "Mismo núcleo, nueva envoltura",
      "La forma sigue a la función... invertida"
    ],
    INVERT_TONE: [
      "La vulnerabilidad es autoridad",
      "Lo informal es lo nuevo formal",
      "El humor desarma la resistencia"
    ],
    INVERT_PERSPECTIVE: [
      "Cada problema es una oportunidad disfrazada",
      "El fracaso es datos, no destino",
      "Los obstáculos son el camino"
    ],
    EXTRACT_RESIDUE: [
      "Lo que sobra es lo que importa",
      "Los recortes son la obra",
      "En los márgenes está la verdad"
    ],
    RECOMBINE: [
      "La innovación es recombinación",
      "Nada se crea, todo se remezcla",
      "1+1=3 cuando los ángulos encajan"
    ],
    CUSTOM: ["Transformación personalizada aplicada"]
  };
  
  const templates = conceptTemplates[operation.angle] || conceptTemplates.CUSTOM;
  return templates[Math.floor(Math.random() * templates.length)];
}

function generateFlippedTitle(originalTitle: string, operation: FlipOperation): string {
  const prefixes: Record<FlipAngle, string> = {
    INVERT_PURPOSE: 'Lección: ',
    INVERT_AUDIENCE: 'Versión simple: ',
    INVERT_FORMAT: 'Formato alternativo: ',
    INVERT_TONE: 'Versión humana: ',
    INVERT_PERSPECTIVE: 'Reencuadre: ',
    EXTRACT_RESIDUE: 'Residuo oro: ',
    RECOMBINE: 'Remix: ',
    CUSTOM: 'Transformado: '
  };
  
  return `${prefixes[operation.angle] || 'Giro: '}${originalTitle}`;
}

function inferNewFormat(originalFormat: string, operation: FlipOperation): string {
  const formatMap: Record<string, Record<FlipAngle, string>> = {
    'video': { INVERT_FORMAT: 'hilo-twitter', INVERT_AUDIENCE: 'video-corto', EXTRACT_RESIDUE: 'clip-15s' },
    'articulo': { INVERT_FORMAT: 'hilo-twitter', INVERT_AUDIENCE: 'resumen-ejecutivo', INVERT_TONE: 'newsletter-coloquial' },
    'codigo': { INVERT_PERSPECTIVE: 'caso-estudio', INVERT_AUDIENCE: 'tutorial-paso-paso' },
    'reunion': { EXTRACT_RESIDUE: 'action-items', INVERT_FORMAT: 'resumen-ejecutivo' },
    'feedback': { INVERT_PERSPECTIVE: 'mejora-documentada', INVERT_AUDIENCE: 'faq-publico' }
  };
  
  return formatMap[originalFormat]?.[operation.angle] || originalFormat;
}

function estimateValue(asset: Asset, operation: FlipOperation): number {
  // Heurística simple: valor base × factor ángulo × factor rendimiento
  const baseValue = 50;
  
  const angleMultipliers: Record<FlipAngle, number> = {
    INVERT_PURPOSE: 1.3,      // Lecciones de errores = alto valor
    INVERT_PERSPECTIVE: 1.2,  // Reencuadre = alto valor
    EXTRACT_RESIDUE: 1.1,     // Residuos = valor medio-alto
    INVERT_AUDIENCE: 1.15,    // Nueva audiencia = expansión
    INVERT_FORMAT: 1.05,      // Reformato = valor medio
    INVERT_TONE: 1.1,         // Tono nuevo = engagement
    RECOMBINE: 1.25,          // Recombinación = innovación
    CUSTOM: 1.0
  };
  
  const performanceFactor = asset.metadata.performance 
    ? Math.min(1 + (asset.metadata.performance.engagement || 0) / 1000, 1.5)
    : 1;
  
  return Math.round(baseValue * angleMultipliers[operation.angle] * performanceFactor);
}

/**
 * Procesa lote de assets (batch flip)
 */
export function batchFlip(
  assets: Asset[],
  operation: FlipOperation
): FlippedAsset[] {
  return assets.map(asset => flipAsset(asset, operation));
}

/**
 * Genera reporte de giro de residuo
 */
export function generateFlipReport(results: FlippedAsset[]): string {
  const totalValue = results.reduce((sum, r) => sum + r.estimatedValue, 0);
  const avgValue = Math.round(totalValue / results.length);
  
  return `
# Reporte Giro de Residuo (GR)

## Resumen
- **Assets procesados:** ${results.length}
- **Valor total estimado:** ${totalValue}
- **Valor promedio:** ${avgValue}/100

## Assets Generados
${results.map((r, i) => `
### ${i+1}. ${r.newAsset.title}
- **Concepto:** ${r.concept}
- **Ángulo:** ${r.operation.angle}
- **Valor estimado:** ${r.estimatedValue}/100
- **Formato:** ${r.newAsset.metadata.format}
`).join('\n')}

## Conceptos Clave Extraídos
${[...new Set(results.map(r => r.concept))].map(c => `- ${c}`).join('\n')}

---
*Generado por HSCSG ResidueFlip Engine v1.0*
  `.trim();
}

/**
 * Factory para operaciones comunes
 */
export const FlipPresets = {
  blooperToLesson: (intensity = 80): FlipOperation => ({
    angle: 'INVERT_PURPOSE' as FlipAngle,
    intensity,
    preserveCore: true
  }),
  
  technicalToSimple: (intensity = 70): FlipOperation => ({
    angle: 'INVERT_AUDIENCE' as FlipAngle,
    intensity,
    preserveCore: true
  }),
  
  failureToCaseStudy: (intensity = 90): FlipOperation => ({
    angle: 'INVERT_PERSPECTIVE' as FlipAngle,
    intensity,
    preserveCore: true
  }),
  
  formalToConversational: (intensity = 60): FlipOperation => ({
    angle: 'INVERT_TONE' as FlipAngle,
    intensity,
    preserveCore: true
  }),
  
  longToShort: (intensity = 75): FlipOperation => ({
    angle: 'INVERT_FORMAT' as FlipAngle,
    intensity,
    preserveCore: false
  }),
  
  residueToGold: (intensity = 85): FlipOperation => ({
    angle: 'EXTRACT_RESIDUE' as FlipAngle,
    intensity,
    preserveCore: true
  })
};