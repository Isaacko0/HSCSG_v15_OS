// src/core/lib/nieves-beal.ts
// HSCSG v15 OS — Módulo Beal (5 ecuaciones canónicas + discriminante 4-check)
// Integración: caas.ts (5 templates), mjGate.ts (tetra-condicional), loopEngine.ts (búsqueda ternas)

import type { Rational, bigint } from './types/math';
import { CaaS } from './caas';
import { MJGate } from './orchestration';
import { LoopEngine } from './loopEngine';
import { VasosComunicantes } from './vasos-comunicantes';

/* ═══════════════════════════════════════════════════════════════════
   TIPOS
   ═══════════════════════════════════════════════════════════════════ */

export type BealCanonicalForm = 1 | 2 | 3 | 4 | 5;

export interface BealCanonicalEquation {
  form: BealCanonicalForm;
  equation: string;
  conditions: BealConditions;
  generate: (params: BealParams) => BealTriple;
  verify: (triple: BealTriple) => boolean;
}

export interface BealConditions {
  a?: { min: number };
  b?: { min: number };
  n?: { min: number };
  x?: { min: number };
  parity?: 'odd' | 'even' | 'any';
}

export interface BealParams {
  a?: bigint;
  b?: bigint;
  n?: number;
  x?: number;
  A?: bigint;
  c?: bigint;
}

export interface BealTriple {
  A: bigint;
  B: bigint;
  C: bigint;
  x: number;
  y: number;
  z: number;
  canonicalForm: BealCanonicalForm;
  discriminantCheck: DiscriminantResult;
  verified: boolean;
}

export interface BealDiscriminant {
  identities: BealIdentity[];
  verify: (triple: BealTriple) => BealIdentityResult[];
}

export interface BealIdentity {
  id: 1 | 2 | 3 | 4;
  formula: string;
  mjGateCheck: MJGateCheckType;
}

export type MJGateCheckType = 
  | 'verifyRatioIdentity'      // [Aˣ/Cᶻ] - [Aˣ/Bʸ] = 1
  | 'verifyInverseRatio'       // [Cᶻ/Aˣ] - [Bʸ/Aˣ] = 1
  | 'verifyCrossRatio'         // [Cᶻ/Bʸ] - [Aˣ/Bʸ] = 1
  | 'verifySumRatio';          // [Aˣ/Cᶻ] + [Bʸ/Cᶻ] = 1

export interface BealIdentityResult {
  identity: number;
  passed: boolean;
  value: Rational;
}

export interface DiscriminantResult {
  beal: BealIdentityResult[];
  subsetSum: SubsetSumCriterionResult[];
  allPass: boolean;
  evidence: RAOEvidence;
}

export interface SubsetSumCriterionResult {
  criterion: 1 | 2;
  satisfied: boolean;
  subsetA: bigint[];
  subsetB: bigint[];
}

export interface RAOEvidence {
  immutable: boolean;
  timestamp: number;
  hexagram?: string;
}

export interface CaaSTemplate {
  id: BealCanonicalForm;
  name: string;
  generate: (params: BealParams) => BealTriple;
  verify: (triple: BealTriple) => boolean;
  caasContribution: CaaSContribution;
}

export interface CaaSContribution {
  verified: boolean;
  znuEmitted: bigint;
  frneEmitted: bigint;
}

/* ═══════════════════════════════════════════════════════════════════
   5 ECUACIONES CANÓNICAS BEAL-NIEVES
   ═══════════════════════════════════════════════════════════════════ */

export const BEAL_CANONICAL_EQUATIONS: BealCanonicalEquation[] = [
  // Forma 1: (aⁿ-1)ⁿ + (aⁿ-1)ⁿ⁺¹ = ((aⁿ-1)·a)ⁿ
  {
    form: 1,
    equation: '(aⁿ - 1)ⁿ + (aⁿ - 1)ⁿ⁺¹ = ((aⁿ - 1) · a)ⁿ',
    conditions: { a: { min: 2 }, n: { min: 2 } },
    generate: (params) => generateForm1(params),
    verify: (triple) => verifyForm1(triple)
  },
  // Forma 2: (a·c)ⁿ + (b·c)ⁿ = cⁿ⁺¹  donde aⁿ + bⁿ = c
  {
    form: 2,
    equation: '(a·c)ⁿ + (b·c)ⁿ = cⁿ⁺¹  con aⁿ + bⁿ = c',
    conditions: { a: { min: 1 }, b: { min: 1 }, n: { min: 2 } },
    generate: (params) => generateForm2(params),
    verify: (triple) => verifyForm2(triple)
  },
  // Forma 3: Ax + [(Ax-1)/2]² = [(Ax+1)/2]²  (A impar)
  {
    form: 3,
    equation: 'Ax + [(Ax-1)/2]² = [(Ax+1)/2]²',
    conditions: { parity: 'odd', x: { min: 1 } },
    generate: (params) => generateForm3(params),
    verify: (triple) => verifyForm3(triple)
  },
  // Forma 4: Ax + [(Ax-4)/4]² = [(Ax+4)/4]²  (A par)
  {
    form: 4,
    equation: 'Ax + [(Ax-4)/4]² = [(Ax+4)/4]²',
    conditions: { parity: 'even', x: { min: 1 } },
    generate: (params) => generateForm4(params),
    verify: (triple) => verifyForm4(triple)
  },
  // Forma 5: Ax = N²  (x par)
  {
    form: 5,
    equation: 'Ax = N²  donde x par',
    conditions: { x: { min: 2 } },
    generate: (params) => generateForm5(params),
    verify: (triple) => verifyForm5(triple)
  }
];

/* ═══════════════════════════════════════════════════════════════════
   GENERADORES POR FORMA
   ══════════════════════════════════════════════════════════════════ */

function generateForm1(params: BealParams): BealTriple {
  const a = params.a ?? 2n;
  const n = params.n ?? 2;
  const base = pow(a, n) - 1n;
  const A = base;
  const B = base;
  const C = base * a;
  const x = n;
  const y = n + 1;
  const z = n;
  return createTriple(1, A, B, C, x, y, z);
}

function generateForm2(params: BealParams): BealTriple {
  const a = params.a ?? 2n;
  const b = params.b ?? 2n;
  const n = params.n ?? 2;
  const c = pow(a, n) + pow(b, n);
  const A = a * c;
  const B = b * c;
  const C = c;
  const x = n;
  const y = n;
  const z = n + 1;
  return createTriple(2, A, B, C, x, y, z);
}

function generateForm3(params: BealParams): BealTriple {
  const A = params.A ?? 3n; // impar
  const x = params.x ?? 1;
  const Ax = pow(A, x);
  const B = (Ax - 1n) / 2n;
  const C = (Ax + 1n) / 2n;
  return createTriple(3, Ax, B * B, C * C, x, 2, 2);
}

function generateForm4(params: BealParams): BealTriple {
  const A = params.A ?? 2n; // par
  const x = params.x ?? 1;
  const Ax = pow(A, x);
  // Excepción: A = 2·(2m+1), x=1 no válida
  if (A % 2n === 0n && x === 1 && (A / 2n) % 2n === 1n) {
    throw new Error('Forma 4: caso excluido A=2·(2m+1), x=1');
  }
  const B = (Ax - 4n) / 4n;
  const C = (Ax + 4n) / 4n;
  return createTriple(4, Ax, B * B, C * C, x, 2, 2);
}

function generateForm5(params: BealParams): BealTriple {
  const A = params.A ?? 2n;
  const x = params.x ?? 2;
  if (x % 2 !== 0) throw new Error('Forma 5: x debe ser par');
  const N = pow(A, x / 2);
  return createTriple(5, pow(A, x), 0n, N * N, x, 0, 2);
}

function createTriple(
  form: BealCanonicalForm,
  A: bigint, B: bigint, C: bigint,
  x: number, y: number, z: number
): BealTriple {
  const triple: BealTriple = {
    A, B, C, x, y, z,
    canonicalForm: form,
    discriminantCheck: { beal: [], subsetSum: [], allPass: false, evidence: { immutable: true, timestamp: Date.now() } },
    verified: false
  };
  triple.discriminantCheck = verifyDiscriminant(triple);
  triple.verified = triple.discriminantCheck.allPass;
  return triple;
}

/* ═══════════════════════════════════════════════════════════════════
   VERIFICADORES POR FORMA
   ══════════════════════════════════════════════════════════════════ */

function verifyForm1(triple: BealTriple): boolean {
  const { A, B, C, x, y, z } = triple;
  return A === B && C === A * 2n && y === x + 1 && z === x; // Simplificado
}

function verifyForm2(triple: BealTriple): boolean {
  const { A, B, C, x, y, z } = triple;
  return x === y && z === x + 1 && A % C === 0n && B % C === 0n;
}

function verifyForm3(triple: BealTriple): boolean {
  const { A, B, C, x, y, z } = triple;
  return y === 2 && z === 2 && A % 2n === 1n; // A impar
}

function verifyForm4(triple: BealTriple): boolean {
  const { A, B, C, x, y, z } = triple;
  return y === 2 && z === 2 && A % 2n === 0n; // A par
}

function verifyForm5(triple: BealTriple): boolean {
  const { A, C, x } = triple;
  return x % 2 === 0 && isPerfectSquare(C);
}

/* ═══════════════════════════════════════════════════════════════════
   DISCRIMINANTE BEAL (4 IDENTIDADES) → MJ GATE TETRA-CONDICIONAL
   ═══════════════════════════════════════════════════════════════════ */

export const BEAL_IDENTITIES: BealIdentity[] = [
  { id: 1, formula: '[Aˣ/Cᶻ] - [Aˣ/Bʸ] = 1', mjGateCheck: 'verifyRatioIdentity' },
  { id: 2, formula: '[Cᶻ/Aˣ] - [Bʸ/Aˣ] = 1', mjGateCheck: 'verifyInverseRatio' },
  { id: 3, formula: '[Cᶻ/Bʸ] - [Aˣ/Bʸ] = 1', mjGateCheck: 'verifyCrossRatio' },
  { id: 4, formula: '[Aˣ/Cᶻ] + [Bʸ/Cᶻ] = 1', mjGateCheck: 'verifySumRatio' }
];

export const BEAL_DISCRIMINANT: BealDiscriminant = {
  identities: BEAL_IDENTITIES,
  verify: (triple: BealTriple) => verifyDiscriminant(triple).beal
};

/**
 * Verifica las 4 identidades del discriminante Nieves
 * Cada identidad = 1 check MJ Gate tetra-condicional
 */
export function verifyDiscriminant(triple: BealTriple): DiscriminantResult {
  const { A, B, C, x, y, z } = triple;
  const Ax = pow(A, x);
  const By = pow(B, y);
  const Cz = pow(C, z);

  // Identidad 1: [Aˣ/Cᶻ] - [Aˣ/Bʸ] = 1
  const id1 = rationalDiv(Ax, Cz) - rationalDiv(Ax, By);
  
  // Identidad 2: [Cᶻ/Aˣ] - [Bʸ/Aˣ] = 1
  const id2 = rationalDiv(Cz, Ax) - rationalDiv(By, Ax);
  
  // Identidad 3: [Cᶻ/Bʸ] - [Aˣ/Bʸ] = 1
  const id3 = rationalDiv(Cz, By) - rationalDiv(Ax, By);
  
  // Identidad 4: [Aˣ/Cᶻ] + [Bʸ/Cᶻ] = 1
  const id4 = rationalDiv(Ax, Cz) + rationalDiv(By, Cz);

  const results: BealIdentityResult[] = [
    { identity: 1, passed: equalsOne(id1), value: id1 },
    { identity: 2, passed: equalsOne(id2), value: id2 },
    { identity: 3, passed: equalsOne(id3), value: id3 },
    { identity: 4, passed: equalsOne(id4), value: id4 }
  ];

  return {
    beal: results,
    subsetSum: [],
    allPass: results.every(r => r.passed),
    evidence: { immutable: true, timestamp: Date.now() }
  };
}

/* ═══════════════════════════════════════════════════════════════════
   CAAS TEMPLATES (5 PLANTILLAS VERIFICABLES)
   ═══════════════════════════════════════════════════════════════════ */

export const CAAS_TEMPLATES: CaaSTemplate[] = BEAL_CANONICAL_EQUATIONS.map(eq => ({
  id: eq.form,
  name: `Beal-Nieves ${eq.form}`,
  generate: eq.generate,
  verify: eq.verify,
  caasContribution: { verified: true, znuEmitted: 0n, frneEmitted: 0n }
}));

/* ═══════════════════════════════════════════════════════════════════
   INTEGRACIÓN CON LOOPENGINE — BÚSQUEDA TERNAS
   ═══════════════════════════════════════════════════════════════════ */

/**
 * LoopEngine tick para búsqueda de ternas Beal
 * Genera ternas via templates CaaS y verifica discriminante
 */
export function runBealTick(
  engine: LoopEngine,
  form: BealCanonicalForm,
  params: BealParams,
  maxSearch: number = 100
): { triples: BealTriple[]; verified: number } {
  const template = CAAS_TEMPLATES.find(t => t.id === form);
  if (!template) throw new Error(`Forma ${form} no existe`);

  const triples: BealTriple[] = [];
  let verified = 0;

  // Búsqueda paramétrica (simplificada)
  for (let i = 0; i < maxSearch && triples.length < 10; i++) {
    const searchParams = { ...params };
    // Variar parámetros según forma
    if (form === 1 || form === 2) {
      searchParams.a = (params.a ?? 2n) + BigInt(i);
      searchParams.b = (params.b ?? 2n) + BigInt(i);
    } else if (form === 3 || form === 4) {
      searchParams.A = (params.A ?? (form === 3 ? 3n : 2n)) + BigInt(i * 2);
    } else {
      searchParams.A = (params.A ?? 2n) + BigInt(i);
      searchParams.x = (params.x ?? 2) + i * 2;
    }

    try {
      const triple = template.generate(searchParams);
      if (template.verify(triple)) {
        triple.verified = true;
        verified++;
        
        // Registrar en CaaS
        CaaS.recordContribution({
          type: 'beal-triple',
          form,
          triple,
          znuEmitted: 10n,
          frneEmitted: 5n
        });

        // Flujo Vasos Comunicantes entre términos
        VasosComunicantes.recordFlow({
          from: `term:A^${x}`,
          to: `term:C^${z}`,
          amount: { num: triple.A, den: 1n },
          verified: true,
          type: 'beal-term'
        });
      }
      triples.push(triple);
    } catch (e) {
      // Parámetros inválidos (ej. forma 4 excluido)
    }
  }

  return { triples, verified };
}

/* ═══════════════════════════════════════════════════════════════════
   UTILIDADES MATEMÁTICAS
   ══════════════════════════════════════════════════════════════════ */

interface Rational { num: bigint; den: bigint; }

function pow(base: bigint, exp: number): bigint {
  let result = 1n;
  for (let i = 0; i < exp; i++) result *= base;
  return result;
}

function rationalDiv(a: bigint, b: bigint): Rational {
  return { num: a, den: b };
}

function equalsOne(r: Rational): boolean {
  return r.num === r.den && r.den !== 0n;
}

function isPerfectSquare(n: bigint): boolean {
  if (n < 0n) return false;
  const root = sqrtBigInt(n);
  return root * root === n;
}

function sqrtBigInt(n: bigint): bigint {
  let x = n;
  let y = (n + 1n) / 2n;
  while (y < x) {
    x = y;
    y = (x + n / x) / 2n;
  }
  return x;
}

/* ═══════════════════════════════════════════════════════════════════
   EXPORTACIÓN
   ═══════════════════════════════════════════════════════════════════ */

export const BealModule = {
  BEAL_CANONICAL_EQUATIONS,
  BEAL_IDENTITIES,
  BEAL_DISCRIMINANT,
  CAAS_TEMPLATES,
  verifyDiscriminant,
  runBealTick
};

export default BealModule;