const SERVICES = [
  {
    icon: (
      <svg className="w-8 h-8 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Desarrollo de Software a Medida',
    description: 'Construimos plataformas robustas y escalables diseñadas exactamente para tus necesidades. Desde APIs hasta sistemas completos, cada línea de código está pensada para tu victoria.',
    details: ['Arquitecturas escalables', 'APIs y microservicios', 'Sistemas legacy modernization', 'Integraciones cloud'],
  },
  {
    icon: (
      <svg className="w-8 h-8 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Procesamiento de Datos & KPIs',
    description: 'Transformamos datos crudos en inteligencia de negocio. Diseñamos KPIs y OKRs que miden lo que realmente importa: la productividad y el rendimiento de tu organización.',
    details: ['Dashboards en tiempo real', 'Modelos predictivos', 'OKRs estratégicos', 'Data warehousing'],
  },
  {
    icon: (
      <svg className="w-8 h-8 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Automatización de Procesos',
    description: 'Elimina tareas repetitivas y libera el potencial de tu equipo. Automatizamos flujos de trabajo complejos para que tu empresa opere con precisión de máquina.',
    details: ['Workflows automatizados', 'RPA (Robotic Process Automation)', 'Integración de sistemas', 'Orquestación cloud'],
  },
]

import { useState } from 'react'
import Reveal from './Reveal'

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="servicios" className="relative py-10 lg:py-14">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(24,131,255,0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-electric-500 text-sm font-semibold tracking-widest uppercase">
              Área de Entrenamiento
            </span>
            <h2 className="section-title mt-3">
              Servicios que{' '}
              <span className="gradient-text">Fortalecemos</span>
            </h2>
            <p className="section-subtitle">
              Cada servicio está diseñado como un programa de entrenamiento: disciplinado,
              medible y orientado a resultados.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const isOpen = openIndex === index

            return (
              <Reveal key={service.title} delay={index * 150}>
                <div className="glass-card rounded-2xl p-8 group">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                    style={{
                      background: 'rgba(24,131,255,0.08)',
                    }}
                  >
                    {service.icon}
                  </div>

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <h3 className="text-xl font-bold font-display group-hover:text-electric-500 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{
                      maxHeight: isOpen ? '600px' : '0',
                      opacity: isOpen ? 1 : 0,
                      transform: `translateY(${isOpen ? '0' : '-8px'})`,
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <div className="pt-4 border-t border-white/5 mt-4 space-y-4">
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-gray-500">
                            <svg className="w-4 h-4 text-electric-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
