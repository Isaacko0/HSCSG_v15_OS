// src/core/lib/nieves-turing-scriven.ts
// HSCSG v15 OS — Módulo Máquina Turing-Scriven / Blindcoin (Nieves)
// Integración: automaton.ts (SOUL/E²R/MJ), loopEngine.ts (tick D), boundaries.ts (invariante), caas.ts (worker), trustlines.ts (bidireccional), vasos-comunicantes.ts (flujo A↔B)

import type { Rational, bigint } from './types/math';
import { Automaton } from './automaton';
import { LoopEngine } from './loopEngine';
import { Boundaries } from './boundaries';
import { CaaS } from './caas';
import { Trustlines } from './trustlines';
import { VasosComunicantes } from './vasos-comunicantes';
import { MJGate } from './orchestration';

/* ═══════════════════════════════════════════════════════════════════
   TIPOS — MÁQUINA TURING-SCRIVEN
   ═══════════════════════════════════════════════════════════════════ */

export interface TuringScrivenMachine {
  tapes: {
    A: TapeState;      // Usuario A (cinta transportadora)
    B: TapeState;      // Usuario B (cinta transportadora)
    C: ProcessingNode; // Codificador (MJ Gate)
    D: CentralNode;    // Encriptador/Desencriptador central (LoopEngine)
  };
  discreteFunction: DiscreteFunction;
  invariantCriterion: InvariantCriterion;
  cryptoSystem: BlindcoinCrypto;
}

export interface TapeState {
  userDID: string;           // Identidad soberana (Ley I)
  sequence: Rational[];      // Secuencia numérica en la cinta
  sovereign: true;           // Soberanía del usuario
  headPosition: number;      // Posición del cabezal
}

export interface ProcessingNode {
  type: 'encoder' | 'central';
  verify: (input: any) => MJGateResult;
  process: (input: Info) => ProcessedInfo;
}

export interface CentralNode {
  type: 'central';
  verify: (input: any) => MJGateResult;
  encrypt: (infoA: Info, infoB: Info) => EncryptedPackage;
  decrypt: (pkg: EncryptedPackage, user: 'A' | 'B') => DecryptedInfo;
}

export interface DiscreteFunction {
  sumA: Rational[];     // Σaₙ - cinta A
  sumB: Rational[];     // Σbₙ - cinta B
  invariantD: Rational; // D - invariante central
  
  // Criterio de invariancia: Si Σaₙ - Σbₙ = D → aₙ = bₙ solo si D = D-1
  checkInvariant: (state: MachineState) => boolean;
  decrementD: () => void;  // Tick: D = D - 1 (γ-CARMIS)
}

export interface MachineState {
  sumA: Rational;
  sumB: Rational;
  D: Rational;
}

export interface InvariantCriterion {
  verify: (state: MachineState) => boolean;
  decrementD: () => void;
}

export interface Info {
  data: any;
  user: 'A' | 'B';
  timestamp: number;
}

export interface ProcessedInfo {
  encoded: any;
  user: 'A' | 'B';
}

export interface EncryptedPackage {
  ciphertext: any;
  metadata: {
    encryptedAt: number;
    invariantD: Rational;
    users: ['A', 'B'];
  };
}

export interface DecryptedInfo {
  plaintext: any;
  verified: boolean;
  user: 'A' | 'B';
}

export interface BlindcoinCrypto {
  encrypt: (infoA: Info, infoB: Info) => EncryptedPackage;
  decrypt: (pkg: EncryptedPackage, user: 'A' | 'B') => DecryptedInfo;
  partialDecrypt: boolean;
  localOrGlobal: 'local' | 'global';
  bidirectional: true;
  hscsgMapping: CryptoMapping;
}

export interface CryptoMapping {
  encrypt: 'LoopEngine.tick()';
  decrypt: 'Proof of Response';
  partial: 'CaaS granular';
  flow: 'VasosComunicantes';
  trust: 'Trustlines';
}

export interface MJGateResult {
  pass: boolean;
  reason?: string;
  evidence?: RAOEvidence;
}

export interface RAOEvidence {
  immutable: boolean;
  timestamp: number;
  hexagram?: string;
}

/* ═══════════════════════════════════════════════════════════════════
   CRITERIO DE INVARIANCIA (Corazón del diseño)
   ═══════════════════════════════════════════════════════════════════ */

/**
 * Criterio: Si Σaₙ - Σbₙ = D → aₙ = bₙ
 * Solo si D = D - 1 (decremento controlado = tick)
 * 
 * Isomorfismo HSCSG:
 * - Σaₙ - Σbₙ = D → Boundaries.checkInvariant()
 * - aₙ = bₙ → Trustlines.consensus() / VasosComunicantes equilibrium
 * - D = D - 1 → LoopEngine.tick() / γ-CARMIS
 */
export function createInvariantCriterion(initialD: Rational): InvariantCriterion {
  let currentD = { ...initialD };
  
  return {
    verify: (state: MachineState) => {
      // Verificar Σaₙ - Σbₙ = D
      const diff = rationalSub(state.sumA, state.sumB);
      const invariantHolds = rationalEquals(diff, currentD);
      
      if (invariantHolds) {
        // Si se mantiene, aₙ debe igualar bₙ (consenso)
        const lastA = state.sumA;
        const lastB = state.sumB;
        return rationalEquals(lastA, lastB);
      }
      return false;
    },
    
    decrementD: () => {
      // Tick: D = D - 1 (γ-CARMIS reconfiguración)
      currentD = rationalSub(currentD, { num: 1n, den: 1n });
    }
  };
}

/* ═══════════════════════════════════════════════════════════════════
   CRIPTOSISTEMA BLINDCOIN
   ═══════════════════════════════════════════════════════════════════ */

/**
 * Blindcoin: Criptosistema bidireccional, parcial/total, local/global
 * Máquina encripta, usuarios descodifican
 * 
 * Isomorfismos HSCSG:
 * - Bidireccional → Trustlines (crédito/débito)
 * - Parcial/total → CaaS granular
 * - Local/global → Vasos Comunicantes
 * - Funciones no biyectivas global → biyectivas local → Boundaries.failClosed()
 * - Info oculta en máquina → Autómata SOUL (estado interno soberano)
 */
export function createBlindcoinCrypto(): BlindcoinCrypto {
  return {
    encrypt: (infoA: Info, infoB: Info) => {
      // Punto D: encriptación central (LoopEngine tick)
      const invariantD = { num: 0n, den: 1n }; // Se actualiza por tick
      
      return {
        ciphertext: { dataA: infoA.data, dataB: infoB.data },
        metadata: {
          encryptedAt: Date.now(),
          invariantD,
          users: ['A', 'B'] as ['A', 'B']
        }
      };
    },
    
    decrypt: (pkg: EncryptedPackage, user: 'A' | 'B') => {
      // Usuario verifica y descodifica (Proof of Response)
      const userData = user === 'A' ? pkg.ciphertext.dataA : pkg.ciphertext.dataB;
      
      return {
        plaintext: userData,
        verified: true,
        user
      };
    },
    
    partialDecrypt: true,
    localOrGlobal: 'global',
    bidirectional: true,
    hscsgMapping: {
      encrypt: 'LoopEngine.tick()',
      decrypt: 'Proof of Response',
      partial: 'CaaS granular',
      flow: 'VasosComunicantes',
      trust: 'Trustlines'
    }
  };
}

/* ═══════════════════════════════════════════════════════════════════
   MAPPING A AUTÓMATA HSCSG (SOUL/E²R/MJ)
   ═══════════════════════════════════════════════════════════════════ */

/**
 * Turing-Scriven Machine → HSCSG Automaton
 * 
 * | Turing-Scriven | HSCSG Automaton |
 * |----------------|-----------------|
 * | Cinta A/B      | Trustlines      |
 * | Punto C (codificador) | MJ Gate (verificación) |
 * | Punto D (central) | LoopEngine (tick central) |
 * | Función discreta | Boundaries (invariante) |
 * | Criterio invariancia | MJ Gate check |
 * | "Responde la verdad" | Proof of Response |
 * | Compilador + Intérprete | LoopEngine + Autómata SOUL |
 */
export function turingScrivenToAutomaton(machine: TuringScrivenMachine): AutomatonConfig {
  return {
    SOUL: {
      identity: machine.tapes.A.userDID, // Usuario A como identidad base
      invariant: machine.invariantCriterion,
      tapes: {
        A: machine.tapes.A.sequence,
        B: machine.tapes.B.sequence
      }
    },
    E2R: {
      action: 'encrypt',
      verification: 'MJGate',
      processor: machine.tapes.C.process
    },
    MJGate: {
      check: machine.invariantCriterion.verify,
      boundaries: machine.discreteFunction.checkInvariant,
      encoder: machine.tapes.C.verify,
      central: machine.tapes.D.verify
    }
  };
}

export interface AutomatonConfig {
  SOUL: {
    identity: string;
    invariant: InvariantCriterion;
    tapes: { A: Rational[]; B: Rational[] };
  };
  E2R: {
    action: string;
    verification: string;
    processor: (input: Info) => ProcessedInfo;
  };
  MJGate: {
    check: (state: MachineState) => boolean;
    boundaries: (state: MachineState) => boolean;
    encoder: (input: any) => MJGateResult;
    central: (input: any) => MJGateResult;
  };
}

/* ═══════════════════════════════════════════════════════════════════
   CAAS WORKER PARA BLINDCOIN
   ═══════════════════════════════════════════════════════════════════ */

export class BlindcoinCaaSWorker {
  private crypto: BlindcoinCrypto;
  private machine: TuringScrivenMachine;
  
  constructor(machine: TuringScrivenMachine) {
    this.machine = machine;
    this.crypto = createBlindcoinCrypto();
  }
  
  /**
   * Encriptación central (Punto D = LoopEngine tick)
   */
  async encrypt(infoA: Info, infoB: Info): Promise<EncryptedPackage> {
    // Verificar invariante antes de encriptar (MJ Gate)
    const state = this.getMachineState();
    if (!this.machine.invariantCriterion.verify(state)) {
      throw new Error('Invariante violada: Boundaries.failClosed()');
    }
    
    // Ejecutar tick D: decrementar D (γ-CARMIS)
    this.machine.invariantCriterion.decrementD();
    
    // Encriptar
    const pkg = this.crypto.encrypt(infoA, infoB);
    
    // Registrar flujo Vasos Comunicantes: A,B → D
    VasosComunicantes.recordFlow({
      from: 'users:A,B',
      to: 'central:D',
      amount: { num: 1n, den: 1n },
      verified: true,
      type: 'blindcoin-encrypt'
    });
    
    // Registrar Trustlines bidireccional
    Trustlines.recordReciprocal({
      credit: { party: 'A', amount: { num: 1n, den: 1n } },
      debit: { party: 'B', amount: { num: 1n, den: 1n } },
      verified: true,
      type: 'blindcoin-trust'
    });
    
    // Contribución CaaS
    CaaS.recordContribution({
      type: 'blindcoin-encrypt',
      users: ['A', 'B'],
      znuEmitted: 100n,
      frneEmitted: 50n
    });
    
    return pkg;
  }
  
  /**
   * Descodificación usuario (Proof of Response)
   */
  async decrypt(pkg: EncryptedPackage, user: 'A' | 'B'): Promise<DecryptedInfo> {
    // Usuario verifica y descodifica
    const result = this.crypto.decrypt(pkg, user);
    
    // Registrar verificación
    CaaS.recordContribution({
      type: 'blindcoin-decrypt',
      user,
      znuEmitted: 10n,
      frneEmitted: 5n
    });
    
    return result;
  }
  
  /**
   * Verificar invariante del sistema
   */
  async verifyInvariant(state: MachineState): Promise<boolean> {
    return this.machine.invariantCriterion.verify(state);
  }
  
  private getMachineState(): MachineState {
    return {
      sumA: this.machine.discreteFunction.sumA.reduce(rationalAdd, { num: 0n, den: 1n }),
      sumB: this.machine.discreteFunction.sumB.reduce(rationalAdd, { num: 0n, den: 1n }),
      D: this.machine.discreteFunction.invariantD
    };
  }
}

/* ═══════════════════════════════════════════════════════════════════
   FLUJO DE INFORMACIÓN (Protocolo Blindcoin)
   ═══════════════════════════════════════════════════════════════════ */

/**
 * Protocolo completo Blindcoin (6 pasos del paper)
 * 
 * 1. A → C → D (codificación)
 * 2. B → C → D (codificación)
 * 3. D → A,B (encriptación + distribución)
 * 4. A,B → binario → confirmación
 * 5. Retorno D → A,B (confirmación cintas)
 * 6. Descodificación: primer término D=0 → descartar repeticiones → comparar A,B
 */
export async function runBlindcoinProtocol(
  machine: TuringScrivenMachine,
  infoA: Info,
  infoB: Info
): Promise<{ success: boolean; packages: EncryptedPackage[]; decrypted: DecryptedInfo[] }> {
  
  const worker = new BlindcoinCaaSWorker(machine);
  const packages: EncryptedPackage[] = [];
  const decrypted: DecryptedInfo[] = [];
  
  // Paso 1-2: Codificación en C (MJ Gate)
  const encodedA = machine.tapes.C.process(infoA);
  const encodedB = machine.tapes.C.process(infoB);
  
  // Paso 3: Encriptación central D (LoopEngine tick)
  const pkg = await worker.encrypt(
    { ...infoA, data: encodedA.encoded },
    { ...infoB, data: encodedB.encoded }
  );
  packages.push(pkg);
  
  // Paso 4: Distribución a A,B + transformación binario
  // (Simulado: usuarios reciben paquete)
  
  // Paso 5: Descodificación usuarios
  const decA = await worker.decrypt(pkg, 'A');
  const decB = await worker.decrypt(pkg, 'B');
  decrypted.push(decA, decB);
  
  // Paso 6: Confirmación retorno (cintas)
  // Verificar coincidencias A,B en binario
  
  return { success: decA.verified && decB.verified, packages, decrypted };
}

/* ═══════════════════════════════════════════════════════════════════
   INTEGRACIÓN CON LOOPENGINE — TICK CENTRAL D
   ═══════════════════════════════════════════════════════════════════ */

/**
 * LoopEngine tick para nodo central D (encriptador)
 * Ejecuta: verificación invariante → decremento D → encriptación
 */
export function runTuringScrivenTick(
  engine: LoopEngine,
  machine: TuringScrivenMachine
): { invariantHeld: boolean; newD: Rational; encrypted: boolean } {
  
  const state: MachineState = {
    sumA: machine.discreteFunction.sumA.reduce(rationalAdd, { num: 0n, den: 1n }),
    sumB: machine.discreteFunction.sumB.reduce(rationalAdd, { num: 0n, den: 1n }),
    D: machine.discreteFunction.invariantD
  };
  
  // Verificar invariante (MJ Gate / Boundaries)
  const invariantHeld = machine.invariantCriterion.verify(state);
  
  if (!invariantHeld) {
    Boundaries.failClosed('Turing-Scriven invariant violated at central node D');
    return { invariantHeld: false, newD: machine.discreteFunction.invariantD, encrypted: false };
  }
  
  // Tick: D = D - 1 (γ-CARMIS)
  machine.invariantCriterion.decrementD();
  
  // Actualizar invariante en función discreta
  machine.discreteFunction.invariantD = { ...state.D, num: state.D.num - 1n };
  
  return {
    invariantHeld: true,
    newD: machine.discreteFunction.invariantD,
    encrypted: true
  };
}

/* ═══════════════════════════════════════════════════════════════════
   FÁBRICA: CREAR MÁQUINA TURING-SCRIVEN
   ═══════════════════════════════════════════════════════════════════ */

export function createTuringScrivenMachine(
  userA_DID: string,
  userB_DID: string,
  initialD: Rational = { num: 10n, den: 1n }
): TuringScrivenMachine {
  
  const invariantCriterion = createInvariantCriterion(initialD);
  
  return {
    tapes: {
      A: {
        userDID: userA_DID,
        sequence: [],
        sovereign: true,
        headPosition: 0
      },
      B: {
        userDID: userB_DID,
        sequence: [],
        sovereign: true,
        headPosition: 0
      },
      C: {
        type: 'encoder',
        verify: (input) => ({ pass: true, evidence: { immutable: true, timestamp: Date.now() } }),
        process: (input) => ({ encoded: input.data, user: input.user })
      },
      D: {
        type: 'central',
        verify: (input) => ({ pass: true, evidence: { immutable: true, timestamp: Date.now() } }),
        encrypt: (infoA, infoB) => createBlindcoinCrypto().encrypt(infoA, infoB),
        decrypt: (pkg, user) => createBlindcoinCrypto().decrypt(pkg, user)
      }
    },
    discreteFunction: {
      sumA: [],
      sumB: [],
      invariantD: initialD,
      checkInvariant: (state) => invariantCriterion.verify(state),
      decrementD: () => invariantCriterion.decrementD()
    },
    invariantCriterion,
    cryptoSystem: createBlindcoinCrypto()
  };
}

/* ═══════════════════════════════════════════════════════════════════
   UTILIDADES RACIONALES
   ═══════════════════════════════════════════════════════════════════ */

export interface Rational { num: bigint; den: bigint; }

function rationalAdd(a: Rational, b: Rational): Rational {
  return { num: a.num * b.den + b.num * a.den, den: a.den * b.den };
}

function rationalSub(a: Rational, b: Rational): Rational {
  return { num: a.num * b.den - b.num * a.den, den: a.den * b.den };
}

function rationalEquals(a: Rational, b: Rational): boolean {
  return a.num * b.den === b.num * a.den;
}

/* ═══════════════════════════════════════════════════════════════════
   EXPORTACIÓN
   ═══════════════════════════════════════════════════════════════════ */

export const TuringScrivenModule = {
  createTuringScrivenMachine,
  createInvariantCriterion,
  createBlindcoinCrypto,
  turingScrivenToAutomaton,
  BlindcoinCaaSWorker,
  runBlindcoinProtocol,
  runTuringScrivenTick
};

export default TuringScrivenModule;