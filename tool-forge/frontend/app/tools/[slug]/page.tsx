// tool-forge/frontend/app/tools/[slug]/page.tsx
// HSCSG Tool Forge — Universal Tool Runner Page
// Dynamic route: /tools/:slug
// CaaS Wallet integrated, AdSense placeholders, SEO optimized

'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { CaaSWalletProvider, useCaaS, CaaSToolAccessGate, CaaSTierBadge } from '@/components/CaaSWallet';
import { MVP_TOOL_SPECS, ToolSpec } from '@/backend/tool-generator';
import { executeQR3DGenerator, QR3DInput, QR3DOutput } from '@/tools/qr-3d-generator';
import { 
  Download, CheckCircle, AlertCircle, Share2, 
  RotateCcw, Maximize2, Minimize2,
  ExternalLink, Star, Heart,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { AdSensePlaceholder } from '@/app/page';

/* ══════════════════════════════════════════════════════════════════
   TOOL RUNNER PAGE
   ══════════════════════════════════════════════════════════════════ */

export default function ToolPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const tool = MVP_TOOL_SPECS.find(t => t.slug === slug);

  if (!tool) {
    return <ToolNotFound slug={slug} />;
  }

  return (
    <CaaSWalletProvider>
      <ToolRunner tool={tool} />
    </CaaSWalletProvider>
  );
}

function ToolRunner({ tool }: { tool: ToolSpec }) {
  const { user, verifyAccess, recordUsage, znuToUsd } = useCaaS();
  const [input, setInput] = useState<Record<string, any>>(getDefaultInput(tool.inputSchema));
  const [output, setOutput] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exportFormat, setExportFormat] = useState<'png' | 'svg' | '3mf' | 'stl' | 'pdf'>('png');
  const [access, setAccess] = useState<{ allowed: boolean; reason?: string; tier: string } | null>(null);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [show3DPreview, setShow3DPreview] = useState(false);

  // Check access on mount and when user changes
  useEffect(() => {
    checkAccess();
  }, [tool.slug]);

  const checkAccess = async () => {
    setCheckingAccess(true);
    // In real app, this would call the CaaS engine
    // For now, simulate based on tool tier
    const tierHierarchy = { FREE: 0, PRO: 1, ENTERPRISE: 2 };
    const userTier = 'FREE'; // Would come from wallet
    const requiredTier = tool.tier;
    
    const allowed = tierHierarchy[userTier as keyof typeof tierHierarchy] >= tierHierarchy[requiredTier as keyof typeof tierHierarchy];
    setAccess({ allowed, tier: userTier, requiredTier: allowed ? undefined : requiredTier });
    setCheckingAccess(false);
  };

  const handleInputChange = (field: string, value: any) => {
    setInput(prev => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleRun = async () => {
    setLoading(true);
    setError(null);

    if (!access?.allowed) {
      setError(access?.reason || 'Acceso denegado');
      setLoading(false);
      return;
    }

    try {
      let result: any;
      
      // Execute tool based on slug
      switch (tool.slug) {
        case 'qr-3d-generator':
          result = await executeQR3DGenerator(input as QR3DInput);
          break;
        case 'mortgage-tax-calculator':
          result = await executeMortgageCalculator(input);
          break;
        case 'pdf-image-compressor':
          result = await executePDFCompressor(input);
          break;
        case 'freelance-contract-generator':
          result = await executeContractGenerator(input);
          break;
        case 'schema-seo-validator':
          result = await executeSchemaValidator(input);
          break;
        default:
          result = { success: true, data: input };
      }

      setOutput(result);
      await recordUsage(tool.slug, 'run');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    if (!output) return;

    const exportAccess = { allowed: true, tier: 'FREE' }; // Would check CaaS
    if (!exportAccess.allowed) {
      setError(exportAccess.reason || 'Export requiere tier superior');
      return;
    }

    try {
      // In real app: call /api/tools/:slug/export
      const blob = await generateExportBlob(output, exportFormat, tool.slug);
      downloadBlob(blob, `${tool.slug}-${Date.now()}.${exportFormat}`);
      await recordUsage(tool.slug, 'export');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al exportar');
    }
  };

  // AdSense placeholder for download popup
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const handleExportWithAd = () => {
    setShowDownloadPopup(true);
    setTimeout(() => {
      handleExport();
      setShowDownloadPopup(false);
    }, 2000); // Show ad for 2 seconds
  };

  // Generate meta tags for SEO
  const seo = tool.seo;

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{seo.metaTitle}</title>
      <meta name="description" content={seo.metaDescription} />
      <meta property="og:title" content={seo.metaTitle} />
      <meta property="og:description" content={seo.metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.metaTitle} />
      <meta name="twitter:description" content={seo.metaDescription} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': seo.structuredData,
            name: tool.name,
            description: tool.description,
            applicationCategory: tool.category,
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: tool.tier === 'FREE' ? '0' : '19',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock'
            }
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* AdSense Top Banner */}
        <AdSensePlaceholder position="top-banner" />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <a href="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">HF</span>
                  </div>
                  <span className="font-bold text-xl text-gray-900">HSCSG Tool Forge</span>
                </a>
                <span className="hidden md:block text-gray-400 mx-2">/</span>
                <span className="hidden md:block text-gray-600">{tool.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <CaaSTierBadge tier={tool.tier as any} />
                <CaaSWalletButton />
              </div>
            </div>
          </div>
        </nav>

        {/* Tool Header */}
        <header className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${getTierColor(tool.tier)}`}>
                {tool.tier}
              </span>
              <span className="text-gray-500">·</span>
              <span className="text-gray-500 text-sm">{tool.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{tool.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{tool.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {tool.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Tier Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Tier requerido</p>
                  <p className="font-semibold text-gray-900">{tool.tier}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Tu tier actual</p>
                  <p className="font-semibold text-gray-900">FREE</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* AdSense Mid Content */}
        <AdSensePlaceholder position="mid-content" />

        {/* Main Tool Area */}
        <main className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Access Gate */}
            <CaaSToolAccessGate toolId={tool.slug} action="run">
              {/* Tool Interface */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-8">
                {checkingAccess && (
                  <div className="animate-pulse space-y-4">
                    <div className="h-8 bg-gray-100 rounded w-1/4"></div>
                    <div className="h-64 bg-gray-100 rounded"></div>
                  </div>
                )}

                {!checkingAccess && access?.allowed && (
                  <ToolInterface
                    tool={tool}
                    input={input}
                    setInput={setInput}
                    output={output}
                    loading={loading}
                    error={error}
                    exportFormat={exportFormat}
                    setExportFormat={setExportFormat}
                    onRun={handleRun}
                    onExport={handleExportWithAd}
                    show3DPreview={show3DPreview}
                    setShow3DPreview={setShow3DPreview}
                  />
                )}

                {!checkingAccess && !access?.allowed && (
                  <div className="text-center py-12">
                    <AlertCircle className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Acceso Restringido</h3>
                    <p className="text-gray-500 mb-4">{access?.reason || 'Requiere tier superior'}</p>
                    {access?.requiredTier && (
                      <span className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full ${getTierColor(access.requiredTier)}`}>
                        Requiere: {access.requiredTier}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Output & Export */}
              {output && !checkingAccess && access?.allowed && (
                <OutputSection
                  tool={tool}
                  output={output}
                  exportFormat={exportFormat}
                  setExportFormat={setExportFormat}
                  onExport={handleExportWithAd}
                  show3DPreview={show3DPreview}
                  setShow3DPreview={setShow3DPreview}
                />
              )}

              {/* Error Display */}
              {error && (
                <div className="mt-6 flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-xl border border-red-200">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Loading Overlay */}
              {loading && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <div className="bg-white p-8 rounded-xl flex items-center gap-4">
                    <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full" />
                    <span className="text-lg font-medium">Ejecutando herramienta...</span>
                  </div>
                </div>
              )}
            </CaaSToolAccessGate>

            {/* AdSense Download Popup */}
            {showDownloadPopup && (
              <AdSensePlaceholder position="download-popup" />
            )}
          </div>

          {/* SEO Sections */}
          <SEOSections tool={tool} output={output} />
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center text-sm">
          Powered by HSCSG v15 OS • CaaS Economy • <a href="/" className="hover:text-white">Tool Forge</a>
        </footer>

        {/* AdSense Corner Notification */}
        <AdSensePlaceholder position="corner-notification" />
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ═════════════════════════════════════════════════════════════════ */

function ToolInterface({
  tool,
  input,
  setInput,
  output,
  loading,
  error,
  exportFormat,
  setExportFormat,
  onRun,
  onExport,
  show3DPreview,
  setShow3DPreview
}: any) {
  const inputFields = generateInputFields(tool.inputSchema, input, setInput);

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <span className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center">
            <span className="text-blue-500 text-lg">⚙</span>
          </span>
          Configuración
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inputFields}
        </div>

        {/* Run Button */}
        <button
          onClick={onRun}
          disabled={loading}
          className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Generando...
            </>
          ) : (
            <>
              <span className="text-lg">Generar Resultado</span>
            </>
          )}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

function OutputSection({
  tool,
  output,
  exportFormat,
  setExportFormat,
  onExport,
  show3DPreview,
  setShow3DPreview
}: any) {
  const isQR3D = tool.slug === 'qr-3d-generator';
  const allowedExports = getAllowedExports(tool.tier);

  return (
    <div className="mt-8 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <span className="w-8 h-8 bg-green-50 rounded-xl flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-green-500" />
          </span>
          Resultado Generado
        </h2>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-500">Formato:</label>
          <select
            value={exportFormat}
            onChange={(e) => setExportFormat(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {allowedExports.map(fmt => (
              <option key={fmt} value={fmt}>{fmt.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Output Display */}
      <div className="mb-6">
        {isQR3D && output.preview3d && (
          <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden">
            {show3DPreview ? (
              <ThreeJSPreview scene={output.preview3d} />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <img 
                  src={output.png} 
                  alt="QR Code Preview" 
                  className="max-w-full max-h-[400px] mx-auto"
                />
                <button
                  onClick={() => setShow3DPreview(true)}
                  className="absolute bottom-4 text-white bg-black/50 px-4 py-2 rounded-lg hover:bg-black/70 transition-colors"
                >
                  Ver en 3D <RotateCcw className="h-4 w-4 ml-2 inline" />
                </button>
              </div>
            )}
          </div>
        )} : (
          <div className="bg-gray-50 rounded-xl p-6 max-h-[500px] overflow-auto">
            <pre className="text-sm text-gray-900 font-mono whitespace-pre-wrap break-words">
              {JSON.stringify(output, null, 2)}
            </pre>
          </div>
        )}

        {/* Download Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onExport}
            className="flex-1 sm:flex-none py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all flex items-center justify-center gap-2"
          >
            <Download className="h-5 w-5" />
            Descargar {exportFormat.toUpperCase()}
          </button>
          
          <button className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors flex items-center gap-2">
            <Share2 className="h-5 w-5" />
            Compartir
          </button>
          
          {isQR3D && (
            <button
              onClick={() => setShow3DPreview(!show3DPreview)}
              className="px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition-colors flex items-center gap-2"
            >
              {show3DPreview ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
              {show3DPreview ? 'Cerrar 3D' : 'Ver 3D'}
            </button>
          )}
        </div>
      </div>

      {/* Download Popup Ad Placeholder */}
      <AdSensePlaceholder position="download-popup" />
    </div>
  );
}

function ThreeJSPreview({ scene }: { scene: any }) {
  // Placeholder for Three.js canvas
  // In production: use @react-three/fiber
  return (
    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
      <div className="text-center text-gray-500">
        <RotateCcw className="h-12 w-12 mx-auto mb-3 animate-spin text-blue-500" />
        <p>Vista 3D Interactive (Three.js)</p>
        <p className="text-sm">Arrastra para rotar, scroll para zoom</p>
      </div>
    </div>
  );
}

function SEOSections({ tool, output }: { tool: any; output: any }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
      {/* AdSense Mid Content 2 */}
      <AdSensePlaceholder position="mid-content-2" />

      {/* How it Works */}
      <section className="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center">
            <span className="text-blue-500 text-xl">📖</span>
          </span>
          Cómo Funciona
        </h2>
        <ol className="space-y-4 text-gray-600">
          <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 font-bold">1</span> Introduce los datos en el formulario superior según lo que necesites generar.</li>
          <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 font-bold">2</span> Haz clic en "Generar Resultado" — la herramienta procesa tu input en milisegundos.</li>
          <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 font-bold">3</span> Visualiza el resultado, elige formato de exportación (PNG, SVG, 3MF, STL, PDF) y descarga.</li>
        </ol>
      </section>

      {/* Use Cases */}
      <section className="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Casos de Uso para "{tool.name}"</h2>
        <ul className="space-y-3 text-gray-600">
          {tool.seo.targetKeywords.map((kw, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">{i + 1}</span>
              <span>{kw}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
        <dl className="space-y-6">
          <div>
            <dt className="font-semibold text-gray-900">¿Necesito registrarme?</dt>
            <dd className="text-gray-600 mt-1">No. La herramienta funciona sin registro. Conecta tu wallet HSCSG para acceder a tiers PRO/ENTERPRISE y ganar ZNU/FRNE.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">¿Puedo usar esto comercialmente?</dt>
            <dd className="text-gray-600 mt-1">Sí. La salida es tuya. Para uso comercial intensivo, el tier PRO elimina ads y da acceso API.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">¿Los archivos 3MF funcionan en cualquier impresora?</dt>
            <dd className="text-gray-600 mt-1">3MF es el estándar moderno (Prusa, Bambu, Creality, etc.). Para impresoras antiguas, usa STL.</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}

function ToolNotFound({ slug }: { slug: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Herramienta No Encontrada</h1>
        <p className="text-gray-600 mb-8">La herramienta "<code className="bg-gray-100 px-2 py-1 rounded">{slug}</code>" no existe.</p>
        <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700">
          <ChevronLeft className="h-5 w-5" />
          Volver al Inicio
        </a>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   HELPERS
   ═════════════════════════════════════════════════════════════════ */

function getDefaultInput(schema: any): Record<string, any> {
  if (!schema.properties) return {};
  const defaults: Record<string, any> = {};
  for (const [key, prop] of Object.entries(schema.properties as any)) {
    defaults[key] = prop.default ?? getDefaultValue(prop.type);
  }
  return defaults;
}

function getDefaultValue(type: string): any {
  switch (type) {
    case 'string': return '';
    case 'number': return 0;
    case 'boolean': return false;
    case 'array': return [];
    case 'object': return {};
    default: return null;
  }
}

function generateInputFields(schema: any, input: Record<string, any>, setInput: Function) {
  if (!schema.properties) return [];
  
  return Object.entries(schema.properties).map(([key, prop]: [string, any]) => {
    const required = schema.required?.includes(key) || false;
    return (
      <div key={key} className="space-y-1">
        <label htmlFor={key} className="block text-sm font-medium text-gray-700">
          {key.charAt(0).toUpperCase() + key.slice(1)} {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {prop.type === 'string' && prop.enum ? (
          <select
            id={key}
            value={input[key] || prop.default || ''}
            onChange={(e) => setInput(key, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required={required}
          >
            {prop.enum.map((opt: string) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ) : prop.type === 'number' ? (
          <input
            id={key}
            type="number"
            value={input[key] ?? prop.default ?? ''}
            onChange={(e) => setInput(key, parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required={required}
            placeholder={prop.description || ''}
          />
        ) : prop.type === 'boolean' ? (
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={input[key] ?? prop.default ?? false}
              onChange={(e) => setInput(key, e.target.checked)}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{prop.description || key}</span>
          </label>
        ) : (
          <input
            id={key}
            type="text"
            value={input[key] ?? prop.default ?? ''}
            onChange={(e) => setInput(key, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required={required}
            placeholder={prop.description || ''}
          />
        )}
      </div>
    );
  });
}

function getAllowedExports(tier: string): string[] {
  const exports: Record<string, string[]> = {
    FREE: ['png', 'svg'],
    PRO: ['png', 'svg', '3mf', 'stl', 'pdf'],
    ENTERPRISE: ['png', 'svg', '3mf', 'stl', 'pdf']
  };
  return exports[tier] || exports.FREE;
}

function getTierColor(tier: string): string {
  const colors: Record<string, string> = {
    FREE: 'bg-green-100 text-green-700',
    PRO: 'bg-blue-100 text-blue-700',
    ENTERPRISE: 'bg-purple-100 text-purple-700'
  };
  return colors[tier] || colors.FREE;
}

async function executeMortgageCalculator(input: any): Promise<any> {
  // Simplified mortgage calculation
  const { precio, entrada, tipoInteres = 3.5, plazos = 30 } = input;
  const principal = precio - entrada;
  const monthlyRate = tipoInteres / 100 / 12;
  const payments = plazos * 12;
  const cuotaMensual = principal * (monthlyRate * Math.pow(1 + monthlyRate, payments)) / (Math.pow(1 + monthlyRate, payments) - 1);
  const totalPagado = cuotaMensual * payments;
  const totalIntereses = totalPagado - principal;
  
  return {
    cuotaMensual: Math.round(cuotaMensual * 100) / 100,
    totalIntereses: Math.round(totalIntereses * 100) / 100,
    totalPagado: Math.round(totalPagado * 100) / 100,
    deduccionIRPF: Math.round(cuotaMensual * 12 * 0.15 * 100) / 100, // Simplified
    gastosCompra: Math.round(precio * 0.1 * 100) / 100 // ~10%
  };
}

async function executePDFCompressor(input: any): Promise<any> {
  // Placeholder
  return {
    compressedFiles: input.files.map((f: string, i: number) => ({
      name: `compressed_${i}.pdf`,
      originalSize: Math.floor(Math.random() * 5000000) + 1000000,
      compressedSize: Math.floor(Math.random() * 1000000) + 500000
    })),
    originalSize: 10000000,
    compressedSize: 3000000,
    reductionPercent: 70
  };
}

async function executeContractGenerator(input: any): Promise<any> {
  // Placeholder contract template
  return {
    contratoTexto: `CONTRATO DE SERVICIOS PROFESIONALES\n\nEntre ${input.cliente.nombre} (cliente) y ${input.freelancer.nombre} (freelancer)...`,
    pdf: 'base64pdfplaceholder',
    clausulas: ['Alcance', 'Honorarios', 'Propiedad Intelectual', 'Confidencialidad', 'Resolución']
  };
}

async function executeSchemaValidator(input: any): Promise<any> {
  // Placeholder
  return {
    valid: true,
    score: 95,
    schemaOrg: { '@context': 'https://schema.org', '@type': 'WebSite' },
    openGraph: { 'og:title': 'Example', 'og:type': 'website' },
    twitterCards: { 'twitter:card': 'summary_large_image' },
    metaTags: { title: 'Example', description: 'Test' },
    errors: [],
    warnings: ['Falta og:image'],
    suggestions: ['Añadir og:image', 'Incluir Schema.org Product']
  };
}

async function generateExportBlob(output: any, format: string, slug: string): Promise<Blob> {
  // Placeholder - real implementation would generate actual files
  const content = format === 'json' ? JSON.stringify(output, null, 2) : `Export ${format} for ${slug}`;
  return new Blob([content], { type: getMimeType(format) });
}

function getMimeType(format: string): string {
  const types: Record<string, string> = {
    png: 'image/png',
    svg: 'image/svg+xml',
    '3mf': 'application/vnd.ms-package.3dmanufacturing-3dmodel+xml',
    stl: 'application/sla',
    pdf: 'application/pdf',
    json: 'application/json'
  };
  return types[format] || 'application/octet-stream';
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

import { useState } from 'react';