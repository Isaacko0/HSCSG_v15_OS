/**
 * Triada Foco-Apalancamiento (TFA) — Equivalente HSCSG a "Domina/Delega/Desecha"
 * 
 * Motor de priorización para el autómata: decide qué dominar (FOCO),
 * qué delegar (APALANCAMIENTO) y qué eliminar (PODA).
 * 
 * Principio: "Michael Jordan intentó dos deportes; en el segundo no le salió.
 * Domina UNA cosa, delega el resto, poda el ruido."
 */

export type TFAAction = 'FOCO' | 'APALANCAMIENTO' | 'PODA';

export interface TFAItem {
  id: string;
  name: string;
  description: string;
  category: TFAAction;
  priority: number;        // 1-100
  effort: number;          // 1-100 (esfuerzo estimado)
  impact: number;          // 1-100 (impacto en objetivo principal)
  delegatable: boolean;    // ¿Se puede delegar a coworker/IA/automatización?
  energyDrain: number;     // 1-100 (cuánta energía consume vs da)
  alignment: number;       // 1-100 (alineación con propósito/MMA)
  status: 'PENDING' | 'ACTIVE' | 'DELEGATED' | 'PRUNED' | 'COMPLETED';
  assignee?: string;       // Si delegado: coworker/IA/humano
  createdAt: Date;
  updatedAt: Date;
}

export interface TFAPlan {
  focus: TFAItem;                    // UNA sola cosa en FOCO
  leverage: TFAItem[];               // Lista para APALANCAMIENTO
  prune: TFAItem[];                  // Lista para PODA
  focusScore: number;                // 0-100 (claridad del foco)
  leverageRatio: number;             // items delegados / items totales
  pruneRatio: number;                // items podados / items totales
  estimatedCapacityFreed: number;    // % capacidad liberada
  createdAt: Date;
  updatedAt: Date;
}

export interface TFACriteria {
  maxFocusItems: number;             // Siempre 1 (regla dura)
  minImpactForFocus: number;         // Umbral impacto para FOCO (default 80)
  maxEffortForLeverage: number;      // Máx esfuerzo para delegar (default 60)
  minEnergyDrainForPrune: number;    // Mín drenaje para podar (default 70)
  minAlignmentForKeep: number;       // Mín alineación para no podar (default 40)
}

export const DEFAULT_TFA_CRITERIA: TFACriteria = {
  maxFocusItems: 1,
  minImpactForFocus: 80,
  maxEffortForLeverage: 60,
  minEnergyDrainForPrune: 70,
  minAlignmentForKeep: 40
};

/**
 * Genera plan TFA a partir de lista de actividades/items
 */
export function generateTFAPlan(
  items: TFAItem[],
  criteria: TFACriteria = DEFAULT_TFA_CRITERIA
): TFAPlan {
  // 1. Filtrar items válidos
  const validItems = items.filter(i => i.status !== 'COMPLETED' && i.status !== 'PRUNED');
  
  // 2. Scoring compuesto para cada item
  const scored = validItems.map(item => ({
    ...item,
    compositeScore: calculateCompositeScore(item),
    focusScore: calculateFocusScore(item),
    leverageScore: calculateLeverageScore(item),
    pruneScore: calculatePruneScore(item)
  }));
  
  // 3. Seleccionar FOCO (mayor focusScore, cumple umbrales)
  const focusCandidates = scored.filter(s => 
    s.impact >= criteria.minImpactForFocus && 
    s.alignment >= criteria.minAlignmentForKeep
  );
  
  const focus = focusCandidates.length > 0
    ? focusCandidates.reduce((a, b) => a.focusScore > b.focusScore ? a : b)
    : scored.reduce((a, b) => a.focusScore > b.focusScore ? a : b);
  
  focus.category = 'FOCO';
  focus.status = 'ACTIVE';
  
  // 4. Clasificar resto: APALANCAMIENTO vs PODA
  const remaining = scored.filter(s => s.id !== focus.id);
  const leverage: TFAItem[] = [];
  const prune: TFAItem[] = [];
  
  for (const item of remaining) {
    // Poda: alto drenaje + baja alineación + delegable
    if (
      item.energyDrain >= criteria.minEnergyDrainForPrune &&
      item.alignment < criteria.minAlignmentForKeep &&
      item.delegatable
    ) {
      item.category = 'PODA';
      item.status = 'PRUNED';
      prune.push(item);
    }
    // Apalancamiento: delegable + esfuerzo moderado + no es foco
    else if (
      item.delegatable &&
      item.effort <= criteria.maxEffortForLeverage &&
      item.alignment >= criteria.minAlignmentForKeep
    ) {
      item.category = 'APALANCAMIENTO';
      item.status = 'DELEGATED';
      leverage.push(item);
    }
    // Si no encaja en ninguno, va a apalancamiento si delegable, sino poda
    else if (item.delegatable) {
      item.category = 'APALANCAMIENTO';
      item.status = 'DELEGATED';
      leverage.push(item);
    } else {
      item.category = 'PODA';
      item.status = 'PRUNED';
      prune.push(item);
    }
  }
  
  // 5. Calcular métricas del plan
  const totalItems = 1 + leverage.length + prune.length;
  const focusScore = focus.focusScore;
  const leverageRatio = leverage.length / totalItems;
  const pruneRatio = prune.length / totalItems;
  const estimatedCapacityFreed = calculateCapacityFreed(leverage, prune);
  
  return {
    focus,
    leverage,
    prune,
    focusScore,
    leverageRatio,
    pruneRatio,
    estimatedCapacityFreed,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

function calculateCompositeScore(item: TFAItem): number {
  // Score ponderado: impacto 40% + alineación 30% + (100-esfuerzo) 20% + (100-drenaje) 10%
  return Math.round(
    item.impact * 0.4 +
    item.alignment * 0.3 +
    (100 - item.effort) * 0.2 +
    (100 - item.energyDrain) * 0.1
  );
}

function calculateFocusScore(item: TFAItem): number {
  // Para FOCO: alto impacto + alta alineación + esfuerzo manejable + bajo drenaje
  return Math.round(
    item.impact * 0.35 +
    item.alignment * 0.30 +
    (100 - item.effort) * 0.20 +
    (100 - item.energyDrain) * 0.15
  );
}

function calculateLeverageScore(item: TFAItem): number {
  // Para APALANCAMIENTO: delegable + esfuerzo moderado + alineación decente
  return Math.round(
    (item.delegatable ? 100 : 0) * 0.4 +
    (100 - item.effort) * 0.3 +
    item.alignment * 0.2 +
    (100 - item.energyDrain) * 0.1
  );
}

function calculatePruneScore(item: TFAItem): number {
  // Para PODA: alto drenaje + baja alineación + delegable
  return Math.round(
    item.energyDrain * 0.4 +
    (100 - item.alignment) * 0.3 +
    (item.delegatable ? 100 : 0) * 0.2 +
    item.effort * 0.1  // alto esfuerzo = más candidato a poda si no alineado
  );
}

function calculateCapacityFreed(leverage: TFAItem[], prune: TFAItem[]): number {
  const leverageEffort = leverage.reduce((sum, i) => sum + i.effort, 0);
  const pruneEffort = prune.reduce((sum, i) => sum + i.effort, 0);
  const totalEffort = leverageEffort + pruneEffort;
  
  // Capacidad liberada = esfuerzo delegado + esfuerzo eliminado
  // Normalizado a 0-100 asumiendo 1000 esfuerzo total base
  return Math.min(Math.round((leverageEffort + pruneEffort) / 10), 100);
}

/**
 * Ejecuta decisión TFA para un item específico (focusLeveragePrune)
 * Retorna acción recomendada + razonamiento
 */
export function focusLeveragePrune(
  item: TFAItem,
  currentFocus: TFAItem | null,
  criteria: TFACriteria = DEFAULT_TFA_CRITERIA
): { action: TFAAction; reasoning: string; newItem: TFAItem } {
  
  // Si ya hay foco y este item compite por foco
  if (currentFocus && item.id !== currentFocus.id) {
    const itemFocusScore = calculateFocusScore(item);
    const currentFocusScore = calculateFocusScore(currentFocus);
    
    if (itemFocusScore > currentFocusScore + 10) {
      // Este item merece ser el nuevo foco
      return {
        action: 'FOCO',
        reasoning: `Score foco ${itemFocusScore} > actual ${currentFocusScore} + margen 10. Reemplaza foco actual.`,
        newItem: { ...item, category: 'FOCO', status: 'ACTIVE' }
      };
    }
  }
  
  // Evaluar poda
  if (
    item.energyDrain >= criteria.minEnergyDrainForPrune &&
    item.alignment < criteria.minAlignmentForKeep &&
    item.delegatable
  ) {
    return {
      action: 'PODA',
      reasoning: `Drenaje ${item.energyDrain} ≥ ${criteria.minEnergyDrainForPrune} + Alineación ${item.alignment} < ${criteria.minAlignmentForKeep} + Delegable. Podar.`,
      newItem: { ...item, category: 'PODA', status: 'PRUNED' }
    };
  }
  
  // Evaluar apalancamiento
  if (
    item.delegatable &&
    item.effort <= criteria.maxEffortForLeverage &&
    item.alignment >= criteria.minAlignmentForKeep
  ) {
    return {
      action: 'APALANCAMIENTO',
      reasoning: `Delegable + Esfuerzo ${item.effort} ≤ ${criteria.maxEffortForLeverage} + Alineación ${item.alignment} ≥ ${criteria.minAlignmentForKeep}. Delegar.`,
      newItem: { ...item, category: 'APALANCAMIENTO', status: 'DELEGATED' }
    };
  }
  
  // Default: si no es foco actual y no califica para delegar/podar
  if (currentFocus && item.id !== currentFocus.id) {
    return {
      action: 'PODA',
      reasoning: `No califica para foco ni delegación. Alineación ${item.alignment}. Podar por ruido.`,
      newItem: { ...item, category: 'PODA', status: 'PRUNED' }
    };
  }
  
  // Es el foco actual
  return {
    action: 'FOCO',
    reasoning: 'Item es foco actual confirmado.',
    newItem: { ...item, category: 'FOCO', status: 'ACTIVE' }
  };
}

/**
 * Genera reporte TFA legible
 */
export function generateTFAReport(plan: TFAPlan): string {
  return `
# Plan TFA — Triada Foco-Apalancamiento-Poda

## 🎯 FOCO (Único)
- **${plan.focus.name}** (Score: ${plan.focusScore})
- Impacto: ${plan.focus.impact} | Alineación: ${plan.focus.alignment} | Esfuerzo: ${plan.focus.effort}
- ${plan.focus.description}

## 🔄 APALANCAMIENTO (${plan.leverage.length} items — ${Math.round(plan.leverageRatio * 100)}%)
${plan.leverage.map(l => `- **${l.name}** → Delegar a: ${l.assignee || 'PENDIENTE'} (Esfuerzo: ${l.effort}, Alineación: ${l.alignment})`).join('\n') || '  (ninguno)'}

## ✂️ PODA (${plan.prune.length} items — ${Math.round(plan.pruneRatio * 100)}%)
${plan.prune.map(p => `- **${p.name}** → Eliminar (Drenaje: ${p.energyDrain}, Alineación: ${p.alignment})`).join('\n') || '  (ninguno)'}

## Métricas
- **Focus Score:** ${plan.focusScore}/100
- **Ratio Apalancamiento:** ${Math.round(plan.leverageRatio * 100)}%
- **Ratio Poda:** ${Math.round(plan.pruneRatio * 100)}%
- **Capacidad Liberada Estimada:** ${plan.estimatedCapacityFreed}%

---
*Generado por HSCSG TFA Engine v1.0*
  `.trim();
}

/**
 * Crea item TFA desde descripción simple
 */
export function createTFAItem(
  name: string,
  description: string,
  estimates: {
    effort: number;
    impact: number;
    alignment: number;
    energyDrain: number;
    delegatable: boolean;
  }
): TFAItem {
  return {
    id: `tfa_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name,
    description,
    category: 'PENDING',
    priority: 50,
    effort: estimates.effort,
    impact: estimates.impact,
    delegatable: estimates.delegatable,
    energyDrain: estimates.energyDrain,
    alignment: estimates.alignment,
    status: 'PENDING',
    createdAt: new Date(),
    updatedAt: new Date()
  };
}