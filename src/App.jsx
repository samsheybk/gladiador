import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/marca-de-agua.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.08,
        }}
      />
      <div className="relative z-10">
        <Navbar />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      </div>
    </div>
  )
}
