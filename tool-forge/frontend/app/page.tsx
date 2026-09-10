// tool-forge/frontend/app/page.tsx
// HSCSG Tool Forge — Landing Page
// SEO-optimized, Mobile-first, CaaS Wallet integrated

'use client';

import { CaaSWalletProvider, CaaSWalletButton, CaaSWalletBalance } from '@/components/CaaSWallet';
import { CaasEngine } from '@/backend/caas-engine';
import { MVP_TOOL_SPECS } from '@/backend/tool-generator';
import { 
  Search, Zap, Shield, Coins, Globe, 
  ArrowRight, CheckCircle, Star, 
  Layers, Code, BarChart, 
  Download, ExternalLink 
} from 'lucide-react';
import Link from 'next/link';

/* ══════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ══════════════════════════════════════════════════════════════════ */

export default function ToolForgeHome() {
  return (
    <CaaSWalletProvider>
      <main className="min-h-screen bg-gray-50">
        {/* AdSense Placeholder - Top Banner */}
        <AdSensePlaceholder position="top-banner" />
        
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Layers className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-900">HSCSG Tool Forge</span>
              </div>
              
              <div className="hidden md:flex items-center gap-8">
                <Link href="#tools" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Herramientas</Link>
                <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Cómo funciona</Link>
                <Link href="#caas" className="text-gray-600 hover:text-gray-900 text-sm font-medium">CaaS Economy</Link>
                <Link href="#seo" className="text-gray-600 hover:text-gray-900 text-sm font-medium">SEO</Link>
                <Link href="#faq" className="text-gray-600 hover:text-gray-900 text-sm font-medium">FAQ</Link>
              </div>
              
              <CaaSWalletButton />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                Crea <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Micro-Herramientas</span> que Generan Ingresos
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8">
                Generador de herramientas CaaS-powered. Despliega en segundos. Monetiza con ads, suscripciones y economía HSCSG (ZNU/FRNE/Trustlines).
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="#tools" 
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Zap className="h-5 w-5 mr-2 inline" />
                  Explorar Herramientas
                </Link>
                <Link 
                  href="#caas" 
                  className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                >
                  <Coins className="h-5 w-5 mr-2 inline" />
                  Ver Economía CaaS
                </Link>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <StatCard value="5+" label="Herramientas MVP" icon={Code} />
              <StatCard value="3" label="Tiers CaaS" icon={Coins} />
              <StatCard value="∞" label="Escalabilidad" icon={Globe} />
              <StatCard value="100%" label="Soberano" icon={Shield} />
            </div>
          </div>
        </section>

        {/* AdSense Placeholder - Mid Content */}
        <AdSensePlaceholder position="mid-content" />

        {/* Tools Gallery */}
        <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Herramientas Disponibles</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Cada herramienta es un CaaS Worker independiente. Gratis con ads, Pro sin ads + API + exports 3D.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MVP_TOOL_SPECS.map((tool, index) => (
                <ToolCard key={tool.slug} tool={tool} index={index} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="#suggest" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors">
                <Star className="h-5 w-5" />
                Sugerir Nueva Herramienta
              </Link>
            </div>
          </div>
        </section>

        {/* AdSense Placeholder - Mid Content 2 */}
        <AdSensePlaceholder position="mid-content-2" />

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Cómo Funciona en 3 Pasos</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                De idea a herramienta generando ingresos en minutos, no meses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StepCard 
                number="1" 
                title="Describe tu Herramienta" 
                description="Escribe qué necesitas: calculadora, generador, conversor, validador. La IA genera el código, tests y deployment."
                icon={Search}
              />
              <StepCard 
                number="2" 
                title="Deploy Automático" 
                description="CaaS Engine verifica tier, sandbox testea, despliega a Vercel Edge Functions. Live en segundos con URL propia."
                icon={Zap}
              />
              <StepCard 
                number="3" 
                title="Monetiza Múltiple" 
                description="Ads (Free), Suscripciones ZNU (Pro), API B2B Trustlines (Enterprise). LoopEngine auto-genera herramientas long-tail."
                icon={Coins}
              />
            </div>
          </div>
        </section>

        {/* CaaS Economy */}
        <section id="caas" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <CaaSWalletBalance />
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="Tiers CaaS" 
                description="FREE (ads), PRO (19€/mes, 1000 ZNU), ENTERPRISE (59€/mes, 5000 ZNU). Upgrade quema ZNU, emite FRNE."
                icon={Coins}
                items={['Ads automáticos AdSense', 'Exports: PNG/SVG/3MF/STL/PDF', 'API Access + Trustlines B2B', 'White-label + Unlimited']}
              />
              <FeatureCard 
                title="Economía HSCSG" 
                description="ZNU (unidad biophysical), FRNE (emisión por contribución), priceParity oracle, Global Pool redistribución."
                icon={Shield}
                items={['ZNU: unidad valor biophysical', 'FRNE: recompensa contribución real', 'priceParity: USD/ZNU oracle', 'Global Pool: crisis redistribution']}
              />
              <FeatureCard 
                title="Trustlines B2B" 
                description="Crédito bilateral sin intermediarios. Otras webs integran tus herramientas via API, pagan via Trustlines ZNU."
                icon={Link}
                items={['Liquidación instantánea', 'Sin fees intermediarios', 'Bilateral credit/debit', 'Escalable a millones']}
              />
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Integra tus Herramientas en Cualquier Web</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Un script. Cero backend. Monetización automática via Trustlines.
              </p>
              <code className="bg-black/20 px-4 py-2 rounded-lg text-sm">
                <script src="https://tool-forge.vercel.app/embed/qr-3d-generator.js"></script>
              </code>
            </div>
          </div>
        </section>

        {/* SEO Section */}
        <section id="seo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">SEO Integrado en Cada Herramienta</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                No solo código. Cada herramienta nace optimizada para posicionar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <SEOFeature title="Schema.org Automático" description="SoftwareApplication, WebApplication, HowTo, FAQPage generados automáticamente." />
              <SEOFeature title="Keywords Long-tail" description="Targeting automático: 'codigo qr 3d', 'calculadora hipoteca 2026', 'comprimir pdf gratis'." />
              <SEOFeature title="Core Web Vitals" description="Vercel Edge + Next.js 14 = LCP < 1.2s, CLS < 0.1, FID < 50ms." />
              <SEOFeature title="Sitemap + Robots" description="Auto-generado, submit a Google Search Console via API." />
              <SEOFeature title="Open Graph + Twitter" description="Cards ricas automáticas para cada herramienta." />
              <SEOFeature title="AdSense Ready" description="4 placeholders pre-posicionados: banner, mid-content, download-popup, corner." />
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Casos de Uso Reales</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Herramientas que resuelven problemas específicos con demanda probada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <UseCaseCard 
                title="Restaurantes" 
                tool="QR 3D Generator" 
                description="Cartas menú → QR 3D llavero/soporte. Clientes escanean, piden, dejan reseña." 
                keywords={["codigo qr 3d", "qr carta restaurante", "qr reseñas google"]} 
              />
              <UseCaseCard 
                title="Alojamientos Turísticos" 
                tool="QR 3D Generator" 
                description="WiFi, check-in, guía local → QR placa pared. Huésped escanea, todo en móvil." 
                keywords={["qr wifi alojamiento", "qr check-in", "placa qr pared"]} 
              />
              <UseCaseCard 
                title="Compradores Vivienda" 
                tool="Calculadora Hipoteca" 
                description="Cuota real, IRPF, gastos compraventa. Lead gen para bancos/brokers." 
                keywords={["calculadora hipoteca 2026", "cuota hipoteca", "deduccion irpf vivienda"]} 
              />
              <UseCaseCard 
                title="Freelancers/Agencias" 
                tool="Generador Contratos" 
                description="Contratos válidos España: alcance, PI, confidencialidad. Exporta PDF." 
                keywords={["modelo contrato freelance", "contrato servicios profesionales"]} 
              />
              <UseCaseCard 
                title="SEOs/Marketers" 
                tool="Validador Schema.org" 
                description="Valida Schema, Open Graph, Twitter Cards. Score + reporte + fixes." 
                keywords={["validador schema org", "test structured data", "validar open graph"]} 
              />
              <UseCaseCard 
                title="Cualquiera" 
                tool="Compresor PDF/Imágenes" 
                description="Arrastra, ajusta calidad, descarga. Sin límites, sin registro, privacidad." 
                keywords={["comprimir pdf gratis", "reducir peso pdf", "comprimir imagen online"]} 
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Preguntas Frecuentes</h2>
            
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* Suggest Tool */}
        <section id="suggest" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Tienes una Idea de Herramienta?</h2>
            <p className="text-gray-600 mb-8">
              La comunidad vota. LoopEngine la genera. Tú ganas ZNU por la idea.
            </p>
            <form className="space-y-4 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert('¡Gracias! Tu idea entra en el pool de LoopEngine.'); }}>
              <input type="text" placeholder="Nombre de la herramienta" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
              <textarea placeholder="¿Qué hace? ¿Qué problema resuelve? ¿Palabras clave SEO?" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
              <button type="submit" className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all">
                Enviar Idea → LoopEngine Pool
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-400">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Layers className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white">HSCSG Tool Forge</span>
              </div>
              <p className="text-sm">Generador de micro-herramientas CaaS-powered. Economía regenerativa HSCSG v15 OS.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Herramientas</h4>
              <ul className="space-y-2 text-sm">
                {MVP_TOOL_SPECS.map(t => <li key={t.slug}><Link href={`/tools/${t.slug}`} className="hover:text-white">{t.name}</Link></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Economía</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#caas" className="hover:text-white">Tiers CaaS</Link></li>
                <li><Link href="#caas" className="hover:text-white">ZNU/FRNE</Link></li>
                <li><Link href="#caas" className="hover:text-white">Trustlines</Link></li>
                <li><Link href="#caas" className="hover:text-white">Global Pool</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="hover:text-white">Privacidad</a></li>
                <li><a href="/terms" className="hover:text-white">Términos</a></li>
                <li><a href="/cookies" className="hover:text-white">Cookies</a></li>
                <li><a href="/affiliate-disclosure" className="hover:text-white">Afiliados</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            Built on HSCSG v15 OS • Powered by CaaS Economy • Deployed on Vercel + Hostinger
          </div>
        </footer>

        {/* AdSense Placeholder - Download Popup (handled per-tool) */}
        <AdSensePlaceholder position="download-popup" />
        <AdSensePlaceholder position="corner-notification" />
      </main>
    </CaaSWalletProvider>
  );
}

/* ══════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ═════════════════════════════════════════════════════════════════ */

function AdSensePlaceholder({ position }: { position: string }) {
  // Solo renderiza en producción
  if (process.env.NODE_ENV !== 'production') return null;
  
  const labels: Record<string, string> = {
    'top-banner': 'ANUNCIO - Banner Superior (728x90)',
    'mid-content': 'ANUNCIO - Mid Content (300x250)',
    'mid-content-2': 'ANUNCIO - Mid Content 2 (300x250)',
    'download-popup': 'ANUNCIO - Popup Descarga (300x250)',
    'corner-notification': 'ANUNCIO - Esquina (320x50)'
  };

  return (
    <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 text-center text-sm font-medium my-4 mx-auto max-w-7xl">
      {labels[position] || `ANUNCIO - ${position}`}
    </div>
  );
}

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-center gap-3 mb-3">
        <Icon className="h-8 w-8 text-blue-500" />
        <span className="text-3xl font-bold text-gray-900">{value}</span>
      </div>
      <p className="text-sm text-gray-600 text-center">{label}</p>
    </div>
  );
}

function ToolCard({ tool, index }: { tool: any; index: number }) {
  const tierColors = {
    FREE: 'bg-green-100 text-green-700',
    PRO: 'bg-blue-100 text-blue-700',
    ENTERPRISE: 'bg-purple-100 text-purple-700'
  };

  return (
    <Link href={`/tools/${tool.slug}`} className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <Layers className="h-6 w-6 text-white" />
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${tierColors[tool.tier as keyof typeof tierColors]}`}>
          {tool.tier}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{tool.name}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{tool.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tool.tags.slice(0, 4).map(tag => (
          <span key={tag} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">{tag}</span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500">{tool.category}</span>
        <span className="flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all">
          Probar <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

function StepCard({ number, title, description, icon: Icon }: { number: string; title: string; description: string; icon: any }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 relative">
      <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
        {number}
      </div>
      <div className="pt-4">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-blue-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon: Icon, items }: { title: string; description: string; icon: any; items: string[] }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-blue-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SEOFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function UseCaseCard({ title, tool, description, keywords }: { title: string; tool: string; description: string; keywords: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-3">
        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">{tool}</span>
        <Star className="h-5 w-5 text-yellow-500" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-1">
        {keywords.map(kw => (
          <span key={kw} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">{kw}</span>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
        <h3 className="font-semibold text-gray-900">{question}</h3>
        <ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-slide-down">
        {answer}
      </div>
    </details>
  );
}

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: '¿Es realmente gratis?',
    a: 'Sí, el tier FREE es gratis para siempre. Se monetiza con anuncios AdSense (placeholders ya integrados). Tú decides cuándo/if actualizar a PRO.'
  },
  {
    q: '¿Qué es ZNU y FRNE?',
    a: 'ZNU es la unidad de valor biophysical de HSCSG (≈ $0.019). FRNE se emite cuando aportas valor real (usar herramientas, crear contenido, validar). 1000 ZNU = ~19€/mes PRO.'
  },
  {
    q: '¿Necesito saber programar?',
    a: 'No. Las herramientas se usan directo en el navegador. Si quieres crear nuevas, describes la idea en lenguaje natural y LoopEngine + LLM generan el código.'
  },
  {
    q: '¿Cómo gano dinero yo?',
    a: '1) Ads en tus herramientas (AdSense). 2) Usuarios PRO pagan ZNU → tú recibes FRNE. 3) Otras webs integran tus herramientas via API → pagan Trustlines ZNU. 4) Creas herramienta → ganas ZNU reward.'
  },
  {
    q: '¿Qué pasa si AdSense me rechaza?',
    a: 'El tier FREE sigue funcionando. Los ingresos vienen de tiers PRO/ENTERPRISE + Trustlines B2B. AdSense es solo una capa extra, no la base del modelo.'
  },
  {
    q: '¿Es legal en España/EU?',
    a: 'Sí. HSCSG tiene auditoría legal completa: doctrina idea-expresión, homologación términos, licencias MIT/Apache, dual licensing, compliance GDPR. Ver docs/LEGAL_NOTICE.md.'
  }
];