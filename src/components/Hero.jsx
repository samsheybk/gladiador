import Reveal from './Reveal'

const layers = [
  [{ x: 80, y: 200 }, { x: 100, y: 300 }],
  [{ x: 190, y: 120 }, { x: 190, y: 220 }, { x: 190, y: 320 }],
  [{ x: 300, y: 80 }, { x: 300, y: 180 }, { x: 300, y: 280 }, { x: 300, y: 380 }],
  [{ x: 420, y: 150 }, { x: 420, y: 280 }, { x: 420, y: 410 }],
]

function NetworkOverlay() {
  const edges = []
  for (let l = 0; l < layers.length - 1; l++) {
    for (const a of layers[l]) {
      for (const b of layers[l + 1]) {
        edges.push([a.x, a.y, b.x, b.y])
      }
    }
  }
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500" fill="none">
      {edges.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1883FF" strokeWidth="0.6" opacity="0.12" />
      ))}
      {layers.flat().map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="4" fill="#1883FF" opacity="0.5" />
          <circle cx={n.x} cy={n.y} r="8" fill="#1883FF" opacity="0.1" />
        </g>
      ))}
    </svg>
  )
}

function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-[600px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <img src="/escudo.svg" alt="Escudo Gladiador" className="w-full h-full max-w-[280px] mx-auto object-contain opacity-80 animate-float" style={{ animationDelay: '0.5s' }} />
        <img src="/lanza.svg" alt="Lanza Gladiador" className="absolute inset-0 w-full h-full object-contain opacity-70 scale-150 animate-float" style={{ animationDelay: '1s' }} />
        <NetworkOverlay />
      </div>

      <div className="absolute top-[15%] left-[10%] animate-float" style={{ animationDelay: '0s' }}>
        <div className="glass-strong rounded-xl p-3 w-40 shadow-lg shadow-black/40">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-[10px] text-gray-500">Sistema Activo</span>
          </div>
          <div className="flex items-end gap-1 h-8">
            {[30, 55, 40, 70, 60, 85, 50, 65].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: 'rgba(24,131,255,0.3)' }} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-[12%] right-[8%] animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="glass-strong rounded-xl p-3 w-36 shadow-lg shadow-black/40">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-gray-500">KPIs</span>
            <span className="text-[10px] text-electric-500 font-semibold">+32%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 rounded-full bg-gray-800 overflow-hidden">
              <div className="h-full w-[76%] rounded-full bg-electric-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[25%] right-[5%] animate-float" style={{ animationDelay: '3s' }}>
        <div className="glass-strong rounded-xl p-3 w-32 shadow-lg shadow-black/40">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-3 h-3 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[10px] text-gray-500">Auto.</span>
          </div>
          <span className="text-[10px] text-green-400">98% eficiencia</span>
        </div>
      </div>

      <div className="absolute bottom-[20%] left-[5%] animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass-strong rounded-xl p-3 w-28 shadow-lg shadow-black/40">
          <div className="flex items-center justify-center gap-1 mb-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full" style={{ background: i === 2 ? '#1883FF' : 'rgba(255,255,255,0.1)' }} />
            ))}
          </div>
          <span className="text-[10px] text-gray-500 text-center block">Procesando...</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent z-0" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(24,131,255,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="text-center lg:text-left flex flex-col justify-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 lg:mb-8">
                <span className="w-2 h-2 rounded-full bg-electric-500 animate-pulse" />
                <span className="text-xs text-gray-400 tracking-wide uppercase">
                  Transformación Digital para tu Empresa
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] mb-4 lg:mb-6">
                Forjamos el{' '}
                <span className="gradient-text">Futuro Digital</span>
                <br />
                de tu Empresa
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-xl mb-6 lg:mb-8">
                Trabajamos con las mejores <span className="text-electric-500 font-semibold">herramientas de IA</span> para gestionar proyectos en tiempo récord. Desarrollo de software a la medida, automatización inteligente y procesamiento de datos.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <a href="#contacto" className="btn-primary text-base w-full sm:w-auto">
                  Solicitar Cotización
                </a>
                <a href="#portafolio" className="btn-secondary text-base w-full sm:w-auto">
                  Ver Proyectos
                </a>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal direction="none">
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  )
}
