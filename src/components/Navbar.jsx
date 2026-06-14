import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <img src="/logo.svg" alt="GLADIADOR" className="h-10 w-auto transition-all duration-300 group-hover:scale-110" style={{ filter: 'brightness(0) invert(1)', transition: 'filter 0.3s' }}
              onMouseEnter={e => e.target.style.filter = 'brightness(0) saturate(100%) invert(34%) sepia(100%) saturate(1200%) hue-rotate(195deg)'}
              onMouseLeave={e => e.target.style.filter = 'brightness(0) invert(1)'}
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-electric-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="btn-primary text-sm !px-5 !py-2.5">
              Cotización
            </a>
          </div>

          <button
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-strong px-4 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="btn-primary text-sm text-center mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Solicitar Cotización
          </a>
        </div>
      </div>
    </nav>
  )
}
