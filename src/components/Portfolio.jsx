import { useState } from 'react'
import Reveal from './Reveal'
import Modal from './Modal'

const PROJECTS = [
  {
    category: 'Fintech',
    title: 'FinFlow',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: ['#2563eb', '#7c3aed'],
    description: 'Plataforma de conciliación financiera automatizada.',
    result: 'Redujo errores en un 98% y acortó ciclos de cierre de 7 días a 4 horas.',
    tags: ['React', 'Node.js', 'Python', 'AWS'],
  },
  {
    category: 'Retail',
    title: 'DataArena',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    gradient: ['#06b6d4', '#2563eb'],
    description: 'Dashboard de KPIs en tiempo real para cadena retail.',
    result: 'Visibilidad centralizada para 200+ sucursales con actualización en tiempo real.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Power BI'],
  },
  {
    category: 'Logística',
    title: 'ProcesaBot',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: ['#10b981', '#0ea5e9'],
    description: 'Automatización de flujo documental y aprobaciones.',
    result: 'Ciclos de aprobación reducidos de 5 días a 3 horas.',
    tags: ['RPA', 'Python', 'Docker', 'MongoDB'],
  },
  {
    category: 'Salud',
    title: 'MedTrack',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    gradient: ['#f43f5e', '#f59e0b'],
    description: 'Sistema de gestión de historiales clínicos.',
    result: 'Digitalización del 100% de registros, acceso inmediato para 50+ clínicas.',
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'Azure'],
  },
]

export default function Portfolio() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="portafolio" className="relative py-10 lg:py-14">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(24,131,255,0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-electric-500 text-sm font-semibold tracking-widest uppercase">
              Victorias
            </span>
            <h2 className="section-title mt-3">
              Proyectos que{' '}
              <span className="gradient-text">Hablan</span>
            </h2>
            <p className="section-subtitle">
              Cada proyecto es una batalla ganada. Conoce cómo hemos transformado
              los desafíos técnicos en victorias para nuestros clientes.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 120}>
              <button
                onClick={() => setSelected(project)}
                className="glass-card rounded-2xl py-8 px-4 flex flex-col items-center justify-center gap-4 group w-full cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradient[0]}20, ${project.gradient[1]}10)`,
                    border: `1px solid ${project.gradient[0]}30`,
                  }}
                >
                  {project.icon}
                </div>
                <div className="text-center">
                  <span className="text-xs text-electric-500 font-semibold tracking-wider uppercase block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold font-display text-gray-200 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        data={selected ? {
          title: selected.title,
          subtitle: selected.category,
          icon: selected.icon,
          color1: selected.gradient[0],
          color2: selected.gradient[1],
          description: selected.description,
          result: selected.result,
          tags: selected.tags,
        } : null}
        onClose={() => setSelected(null)}
      />
    </section>
  )
}
