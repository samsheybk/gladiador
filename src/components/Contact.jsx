import Reveal from './Reveal'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section id="contacto" className="relative py-10 lg:py-14">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(24,131,255,0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-electric-500 text-sm font-semibold tracking-widest uppercase">
              Entrar a la Arena
            </span>
            <h2 className="section-title mt-3">
              Hagamos{' '}
              <span className="gradient-text">Equipo</span>
            </h2>
            <p className="section-subtitle">
              Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo
              en menos de 24 horas para iniciar tu transformación digital.
            </p>
          </div>
        </Reveal>

        <div className="max-w-2xl mx-auto">
          <Reveal delay={200}>
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 lg:p-10 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Tu nombre"
                  className="input-glass"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm text-gray-400 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Nombre de tu empresa"
                  className="input-glass"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="correo@ejemplo.com"
                  className="input-glass"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+58 412 844 5726"
                  className="input-glass"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectType" className="block text-sm text-gray-400 mb-2">
                  Tipo de Proyecto
                </label>
                <select
                  id="projectType"
                  className="input-glass appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    backgroundSize: '16px',
                  }}
                  required
                >
                  <option value="" disabled selected className="bg-gray-900">Selecciona una opción</option>
                  <option value="software" className="bg-gray-900">Desarrollo de Software</option>
                  <option value="data" className="bg-gray-900">Procesamiento de Datos / KPIs</option>
                  <option value="automation" className="bg-gray-900">Automatización de Procesos</option>
                  <option value="consulting" className="bg-gray-900">Consultoría Tecnológica</option>
                  <option value="other" className="bg-gray-900">Otro</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto, objetivos y desafíos técnicos..."
                className="input-glass resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full text-base py-4"
            >
              Enviar Solicitud
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>

            <p className="text-xs text-gray-600 text-center">
              Al enviar, aceptas nuestra Política de Privacidad. No compartiremos
              tus datos con terceros.
            </p>
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
