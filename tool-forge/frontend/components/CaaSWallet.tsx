// tool-forge/frontend/components/CaaSWallet.tsx
// HSCSG v15 OS — CaaS Wallet Component (React + Zustand)
// Integración: DID, ZNU Balance, FRNE, Tier, Trustlines

'use client';

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { CaaSEngine, CaaSUser, CaaSTier, AccessResult } from '../../backend/caas-engine';
import { Wallet, Coins, ArrowUpCircle, Shield, Link, Settings, ChevronDown, CheckCircle } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════════
   CONTEXT & PROVIDER
   ═══════════════════════════════════════════════════════════════════ */

interface CaaSWalletContextType {
  user: CaaSUser | null;
  loading: boolean;
  connect: (did: string) => Promise<void>;
  disconnect: () => void;
  upgradeTier: (tier: CaaSTier) => Promise<{ success: boolean; reason?: string }>;
  verifyAccess: (toolId: string, action: 'run' | 'export' | 'api_call') => Promise<AccessResult>;
  recordUsage: (toolId: string, action: 'run' | 'export' | 'api_call') => Promise<void>;
  znuToUsd: (znu: bigint) => number;
  getAnalytics: () => any;
}

const CaaSWalletContext = createContext<CaaSWalletContextType | null>(null);

const TIER_COLORS: Record<CaaSTier, string> = {
  FREE: 'bg-gray-100 text-gray-700 border-gray-200',
  PRO: 'bg-blue-100 text-blue-700 border-blue-200',
  ENTERPRISE: 'bg-purple-100 text-purple-700 border-purple-200'
};

const TIER_LABELS: Record<CaaSTier, string> = {
  FREE: 'Gratis',
  PRO: 'Pro',
  ENTERPRISE: 'Enterprise'
};

const TIER_PRICES: Record<CaaSTier, { znu: bigint; eur: number }> = {
  FREE: { znu: 0n, eur: 0 },
  PRO: { znu: 1000n, eur: 19 },
  ENTERPRISE: { znu: 5000n, eur: 59 }
};

export function CaaSWalletProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<CaaSUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [engine] = useState(() => CaaSEngine.getInstance());

  useEffect(() => {
    // Auto-connect from localStorage DID
    const storedDid = localStorage.getItem('hscsg-did');
    if (storedDid) {
      connect(storedDid);
    } else {
      setLoading(false);
    }
  }, []);

  const connect = async (did: string) => {
    setLoading(true);
    try {
      const u = await engine.getOrCreateUser(did);
      setUser(u);
      localStorage.setItem('hscsg-did', did);
    } catch (error) {
      console.error('Connect failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const disconnect = () => {
    setUser(null);
    localStorage.removeItem('hscsg-did');
  };

  const upgradeTier = async (tier: CaaSTier) => {
    if (!user) return { success: false, reason: 'Not connected' };
    const result = await engine.upgradeTier(user.did, tier);
    if (result.success) {
      const updated = await engine.getOrCreateUser(user.did);
      setUser(updated);
    }
    return result;
  };

  const verifyAccess = async (toolId: string, action: 'run' | 'export' | 'api_call') => {
    if (!user) return { allowed: false, reason: 'Not connected', tier: 'FREE' as CaaSTier };
    return engine.verifyAccess(user.did, toolId, action);
  };

  const recordUsage = async (toolId: string, action: 'run' | 'export' | 'api_call') => {
    if (!user) return;
    await engine.recordUsage(user.did, toolId, action);
    const updated = await engine.getOrCreateUser(user.did);
    setUser(updated);
  };

  const znuToUsd = (znu: bigint) => engine.znuToUsd(znu);
  const getAnalytics = () => engine.getAnalytics();

  return (
    <CaaSWalletContext.Provider value={{
      user, loading, connect, disconnect, upgradeTier,
      verifyAccess, recordUsage, znuToUsd, getAnalytics
    }}>
      {children}
    </CaaSWalletContext.Provider>
  );
}

export function useCaaS() {
  const context = useContext(CaaSWalletContext);
  if (!context) throw new Error('useCaaS must be used within CaaSWalletProvider');
  return context;
}

/* ════════════════════════════════════════════════════════════════════
   WALLET UI COMPONENTS
   ═══════════════════════════════════════════════════════════════════ */

export function CaaSWalletButton() {
  const { user, loading, connect, disconnect, upgradeTier } = useCaaS();
  const [showMenu, setShowMenu] = useState(false);
  const [newDid, setNewDid] = useState('');

  if (loading) {
    return <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />;
  }

  if (!user) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowMenu(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
        >
          <Wallet className="h-5 w-5" />
          <span>Conectar Wallet</span>
        </button>
        
        {showMenu && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowMenu(false)} />
            <div className="relative bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Conectar Wallet HSCSG</h3>
                <button onClick={() => setShowMenu(false)} className="text-gray-400 hover:text-gray-600">✕</button>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Introduce tu DID (ej: did:hsccsg:user:abc123) o genera uno nuevo:
              </p>
              <div className="space-y-3">
                <input
                  type="text"
                  value={newDid}
                  onChange={(e) => setNewDid(e.target.value)}
                  placeholder="did:hsccsg:user:..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => { connect(newDid || `did:hsccsg:user:${Date.now().toString(36)}`); setShowMenu(false); }}
                    className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Conectar
                  </button>
                  <button
                    onClick={() => { connect(`did:hsccsg:user:${Date.now().toString(36)}`); setShowMenu(false); }}
                    className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium"
                  >
                    Generar Nuevo
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
          {user.did.slice(-2).toUpperCase()}
        </div>
        <div className="hidden sm:block text-left">
          <div className="text-gray-700">{user.did.slice(0, 20)}...</div>
          <div className="flex items-center gap-1">
            <span className={`px-2 py-0.5 text-xs rounded-full ${TIER_COLORS[user.tier]}`}>
              {TIER_LABELS[user.tier]}
            </span>
          </div>
        </div>
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </button>

      {showMenu && (
        <div className="fixed inset-0 z-50" onClick={() => setShowMenu(false)}>
          <div className="absolute right-4 top-12 w-72 bg-white rounded-xl shadow-xl border p-4 z-10">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  {user.did.slice(-2).toUpperCase()}
                </div>
                <div>
                  <div className="font-medium text-sm">{user.did.slice(0, 25)}...</div>
                  <div className="flex items-center gap-1">
                    <span className={`px-2 py-0.5 text-xs rounded-full ${TIER_COLORS[user.tier]}`}>
                      {TIER_LABELS[user.tier]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Balances */}
              <div className="grid grid-cols-2 gap-3 p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-xs text-gray-500">ZNU Balance</div>
                  <div className="font-bold text-lg">{user.znuBalance.toLocaleString()} ZNU</div>
                  <div className="text-xs text-gray-500">≈ ${engine.znuToUsd(user.znuBalance).toFixed(2)}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">FRNE Ganado</div>
                  <div className="font-bold text-lg">{user.frneEarned.toLocaleString()} FRNE</div>
                </div>
              </div>

              {/* Tier Upgrade */}
              <div className="border-t pt-4 space-y-2">
                <div className="text-xs font-medium text-gray-500">Actualizar Tier</div>
                {(['PRO', 'ENTERPRISE'] as CaaSTier[]).map(tier => (
                  <button
                    key={tier}
                    onClick={() => upgradeTier(tier)}
                    disabled={user.tier === tier}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      user.tier === tier 
                        ? 'bg-blue-50 border-blue-200' 
                        : 'hover:bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{TIER_LABELS[tier]}</div>
                        <div className="text-xs text-gray-500">
                          {TIER_PRICES[tier].eur}€/mes ({TIER_PRICES[tier].znu.toLocaleString()} ZNU)
                        </div>
                      </div>
                      {user.tier === tier && <CheckCircle className="h-5 w-5 text-blue-600" />}
                    </div>
                  </button>
                ))}
              </div>

              {/* Actions */}
              <div className="border-t pt-4 space-y-2">
                <button
                  onClick={() => { disconnect(); setShowMenu(false); }}
                  className="w-full text-left p-2 text-red-600 hover:bg-red-50 rounded-lg text-sm flex items-center gap-2"
                >
                  <Wallet className="h-4 w-4" />
                  Desconectar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';

export function CaaSWalletBalance() {
  const { user, znuToUsd } = useCaaS();
  
  if (!user) return null;
  
  return (
    <div className="flex items-center gap-4 p-4 bg-white border rounded-xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
          {user.did.slice(-2).toUpperCase()}
        </div>
        <div>
          <div className="font-medium text-gray-700">{user.did.slice(0, 20)}...</div>
          <div className="flex items-center gap-1">
            <span className={`px-2 py-0.5 text-xs rounded-full ${TIER_COLORS[user.tier]}`}>
              {TIER_LABELS[user.tier]}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex-1" />
      
      <div className="grid grid-cols-2 gap-4 text-right">
        <div>
          <div className="text-xs text-gray-500">ZNU</div>
          <div className="font-bold text-lg">{user.znuBalance.toLocaleString()}</div>
          <div className="text-xs text-gray-500">≈ ${znuToUsd(user.znuBalance).toFixed(2)}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">FRNE</div>
          <div className="font-bold text-lg">{user.frneEarned.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}

export function CaaSTierBadge({ tier }: { tier: CaaSTier }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full ${TIER_COLORS[tier]}`}>
      {TIER_LABELS[tier]}
    </span>
  );
}

export function CaaSToolAccessGate({ 
  toolId, 
  action = 'run' as 'run' | 'export' | 'api_call',
  children,
  fallback 
}: { 
  toolId: string; 
  action?: 'run' | 'export' | 'api_call';
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const { user, verifyAccess, recordUsage } = useCaaS();
  const [access, setAccess] = useState<AccessResult | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!user) {
      setAccess({ allowed: false, reason: 'Wallet not connected', tier: 'FREE' });
      setChecking(false);
      return;
    }
    
    verifyAccess(toolId, action).then(result => {
      setAccess(result);
      setChecking(false);
    });
  }, [user, toolId, action]);

  if (checking) {
    return <div className="animate-pulse bg-gray-100 h-10 rounded" />;
  }

  if (!access?.allowed) {
    return fallback || (
      <div className="p-6 text-center bg-gray-50 rounded-xl border">
        <Shield className="h-12 w-12 mx-auto text-gray-300 mb-3" />
        <h3 className="font-semibold text-gray-700 mb-1">Acceso Restringido</h3>
        <p className="text-sm text-gray-500 mb-4">{access?.reason || 'Requiere tier superior'}</p>
        {access?.requiredTier && (
          <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${TIER_COLORS[access.requiredTier]}`}>
            Requiere: {TIER_LABELS[access.requiredTier]}
          </span>
        )}
      </div>
    );
  }

  return (
    <>
      {children}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              window.recordCaaSUsage = window.recordCaaSUsage || function(toolId, action) {
                fetch('/api/caas/record-usage', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ toolId, action })
                });
              };
            })();
          `
        }}
      />
    </>
  );
}