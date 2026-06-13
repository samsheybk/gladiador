import { useState, useEffect } from 'react'
import Reveal from './Reveal'
import Modal from './Modal'

const TESTIMONIALS = [
  {
    quote: 'Trabajar con GLADIADOR transformó nuestra operación. Pasamos de datos dispersos a un tablero de control que nos da visibilidad total en tiempo real.',
    name: 'Carlos Mendoza',
    role: 'COO',
    company: 'RetailConnect',
    reactions: ['❤️', '👍', '🔥'],
  },
  {
    quote: 'La automatización que implementaron nos ahorró 120 horas hombre al mes. Son verdaderos gladiadores de la tecnología.',
    name: 'Ana López',
    role: 'Directora de Operaciones',
    company: 'LogiTech',
    reactions: ['👍', '❤️'],
  },
  {
    quote: 'El software a medida que desarrollaron para nosotros reemplazó 4 herramientas distintas. Nuestra productividad se disparó un 300%.',
    name: 'Roberto Silva',
    role: 'CTO',
    company: 'FinGroup',
    reactions: ['🔥', '❤️', '👍', '🎉'],
  },
  {
    quote: 'La implementación fue impecable. En tiempo récord teníamos todo funcionando con resultados visibles desde el primer mes.',
    name: 'María García',
    role: 'CEO',
    company: 'InnovaTech',
    reactions: ['❤️', '👍'],
  },
  {
    quote: 'GLADIADOR entiende de tecnología pero también de negocio. Eso los diferencia de cualquier otra consultora.',
    name: 'Pedro Infante',
    role: 'VP de Operaciones',
    company: 'CorpGlobal',
    reactions: ['🔥', '❤️'],
  },
]

const PARTNERS = [
  {
    name: 'TechVault',
    initials: 'TV',
    color1: '#2563eb',
    color2: '#7c3aed',
    project: 'Desarrollamos su plataforma de gestión de activos digitales, automatizando la conciliación de más de 50,000 transacciones diarias con un 99.9% de precisión.',
    tags: ['Blockchain', 'Automatización', 'Fintech'],
  },
  {
    name: 'DataSphere',
    initials: 'DS',
    color1: '#06b6d4',
    color2: '#2563eb',
    project: 'Implementamos un data warehouse en tiempo real con dashboards de KPIs que integra 15 fuentes de datos distintas, reduciendo el tiempo de reporteo de 3 semanas a minutos.',
    tags: ['Data Warehouse', 'KPIs', 'Tiempo Real'],
  },
  {
    name: 'CloudPeak',
    initials: 'CP',
    color1: '#0ea5e9',
    color2: '#8b5cf6',
    project: 'Migramos toda su infraestructura on-premise a una arquitectura cloud-native en AWS, logrando un 40% de ahorro en costos operativos y una disponibilidad del 99.99%.',
    tags: ['Cloud Migration', 'AWS', 'DevOps'],
  },
  {
    name: 'NexusCorp',
    initials: 'NC',
    color1: '#f59e0b',
    color2: '#ef4444',
    project: 'Automatizamos su cadena de suministro con RPA, integrando 7 sistemas legacy y eliminando 200+ horas mensuales de trabajo manual en procesos de aprovisionamiento.',
    tags: ['RPA', 'Supply Chain', 'Integración'],
  },
  {
    name: 'StratumAI',
    initials: 'SA',
    color1: '#10b981',
    color2: '#0ea5e9',
    project: 'Creamos un modelo predictivo de rotación de clientes usando machine learning, logrando anticipar con un 87% de precisión las bajas y reduciendo la tasa de cancelación en un 34%.',
    tags: ['Machine Learning', 'Predictivo', 'Analítica'],
  },
  {
    name: 'PulseDigital',
    initials: 'PD',
    color1: '#ec4899',
    color2: '#8b5cf6',
    project: 'Construimos una plataforma de omnicanalidad que unifica CRM, email marketing y redes sociales en un solo tablero, incrementando la retención de clientes en un 52%.',
    tags: ['Omnicanal', 'CRM', 'Marketing'],
  },
  {
    name: 'ApexAnalytics',
    initials: 'AA',
    color1: '#6366f1',
    color2: '#06b6d4',
    project: 'Diseñamos un sistema de OKRs automatizados que conecta los objetivos estratégicos con KPIs operativos en tiempo real para toda la organización.',
    tags: ['OKRs', 'KPIs', 'Dashboard'],
  },
  {
    name: 'ForgeLabs',
    initials: 'FL',
    color1: '#f43f5e',
    color2: '#f59e0b',
    project: 'Desarrollamos su plataforma SaaS de gestión de proyectos con inteligencia artificial integrada, sirviendo a más de 10,000 usuarios activos en 15 países.',
    tags: ['SaaS', 'IA', 'Escalabilidad'],
  },
]

const REACTION_EMOJIS = ['❤️', '👍', '🔥', '🎉', '⭐', '💪']

function FloatingReactions() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      const emoji = REACTION_EMOJIS[Math.floor(Math.random() * REACTION_EMOJIS.length)]
      const left = Math.random() * 80 + 10
      const delay = Math.random() * 2

      setParticles((prev) => [...prev, { id: Date.now(), emoji, left, delay }])

      setTimeout(() => {
        setParticles((prev) => prev.slice(1))
      }, 4000)
    }, 1200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute text-lg animate-float-up"
          style={{
            left: `${p.left}%`,
            bottom: '0',
            animationDelay: `${p.delay}s`,
            animationDuration: '3s',
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  )
}

function ChatBubble({ testimonial, index }) {
  const isLeft = index % 2 === 0

  return (
    <div className={`flex gap-3 ${isLeft ? '' : 'flex-row-reverse'} items-end`}>
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-display shrink-0"
        style={{
          background: `linear-gradient(135deg, ${['#2563eb', '#7c3aed', '#06b6d4', '#10b981', '#f43f5e'][index % 5]}, ${['#7c3aed', '#2563eb', '#2563eb', '#0ea5e9', '#f59e0b'][index % 5]})`,
        }}
      >
        {testimonial.name.split(' ').map(n => n[0]).join('')}
      </div>

      <div
        className={`max-w-[75%] rounded-2xl p-4 ${
          isLeft
            ? 'rounded-bl-sm'
            : 'rounded-br-sm'
        }`}
        style={{
          background: isLeft
            ? 'rgba(255,255,255,0.04)'
            : 'rgba(24,131,255,0.08)',
          border: `1px solid ${isLeft ? 'rgba(255,255,255,0.06)' : 'rgba(24,131,255,0.12)'}`,
        }}
      >
        <p className="text-sm text-gray-300 leading-relaxed mb-2">
          {testimonial.quote}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            <span className="font-medium text-gray-400">{testimonial.name}</span>
            {' · '}{testimonial.role}, {testimonial.company}
          </div>
          <div className="flex items-center gap-1 ml-2">
            {testimonial.reactions.map((r, i) => (
              <span key={i} className="text-xs cursor-default hover:scale-125 transition-transform">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="testimonios" className="relative py-10 lg:py-14">
      <style>{`
        @keyframes scroll-chat {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes float-up {
          0% { opacity: 0; transform: translateY(0) scale(0.5); }
          15% { opacity: 1; transform: translateY(-20px) scale(1); }
          100% { opacity: 0; transform: translateY(-200px) scale(0.8); }
        }
        .animate-float-up {
          animation: float-up 3s ease-out forwards;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(24,131,255,0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-electric-500 text-sm font-semibold tracking-widest uppercase">
              Muro de Honor
            </span>
            <h2 className="section-title mt-3">
              Voces que{' '}
              <span className="gradient-text">Respaldan</span>
            </h2>
            <p className="section-subtitle">
              Lo que dicen nuestros clientes sobre trabajar con verdaderos gladiadores digitales.
            </p>
          </div>
        </Reveal>

        <div className="max-w-2xl mx-auto mb-20">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              height: '480px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <FloatingReactions />

            <div className="absolute inset-0 overflow-hidden">
              <div
                className="p-6 space-y-5"
                style={{
                  animation: 'scroll-chat 40s linear infinite',
                }}
              >
                {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                  <ChatBubble key={i} testimonial={t} index={i} />
                ))}
              </div>
            </div>

            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent z-10" />
          </div>
        </div>

        <Reveal>
          <div className="text-center mb-12">
            <span className="text-electric-500 text-sm font-semibold tracking-widest uppercase">
              Aliados Comerciales
            </span>
            <h3 className="text-2xl font-bold font-display mt-2">
              Empresas que Confían en{' '}
              <span className="gradient-text">Nosotros</span>
            </h3>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {PARTNERS.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 80}>
              <button
                onClick={() => setSelected(partner)}
                className="glass-card rounded-2xl py-6 px-4 flex flex-col items-center justify-center gap-3 group w-full cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold font-display text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${partner.color1}, ${partner.color2})`,
                  }}
                >
                  {partner.initials}
                </div>
                <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                  {partner.name}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        data={selected ? {
          title: selected.name,
          subtitle: 'Aliado Comercial',
          initials: selected.initials,
          color1: selected.color1,
          color2: selected.color2,
          description: selected.project,
          tags: selected.tags,
        } : null}
        onClose={() => setSelected(null)}
      />
    </section>
  )
}
