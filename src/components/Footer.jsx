export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-electric-500 flex items-center justify-center font-black text-sm font-display">
                G
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                GLADIADOR
              </span>
            </a>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed">
              Forjamos el futuro digital de tu empresa. Desarrollo de software,
              automatización inteligente y datos al servicio de tu crecimiento.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {['Servicios', 'Portafolio', 'Testimonios', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    className="text-sm text-gray-500 hover:text-electric-500 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>hola@gladiador.dev</li>
              <li>+52 55 1234 5678</li>
              <li>Ciudad de México, MX</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} GLADIADOR. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-gray-600 hover:text-electric-500 transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
