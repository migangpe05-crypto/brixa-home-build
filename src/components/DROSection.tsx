import { useState, useEffect, useRef } from 'react'
import { HardHat, ClipboardCheck, Eye, ShieldCheck, FileText, AlertTriangle, Wrench } from 'lucide-react'

const services = [
  { icon: HardHat, title: 'Responsiva de Obra', description: 'Asumimos la responsabilidad técnica y legal ante las autoridades competentes durante todo el ciclo del proyecto.' },
  { icon: ClipboardCheck, title: 'Revisión y Validación de Proyectos', description: 'Análisis exhaustivo de planos, memorias de cálculo y especificaciones para garantizar su viabilidad y corrección.' },
  { icon: Eye, title: 'Supervisión Técnica de Obra', description: 'Presencia activa en sitio para verificar que la ejecución cumpla con los estándares de calidad y especificaciones del proyecto.' },
  { icon: ShieldCheck, title: 'Cumplimiento Normativo', description: 'Aseguramos que cada etapa del proyecto cumpla con la normativa vigente: NOM, reglamentos locales y federales.' },
  { icon: FileText, title: 'Gestión de Trámites y Licencias', description: 'Gestionamos permisos de construcción, licencias municipales y todos los trámites ante dependencias oficiales.' },
  { icon: AlertTriangle, title: 'Detección y Mitigación de Riesgos', description: 'Identificamos y controlamos riesgos estructurales, geotécnicos y operativos antes de que afecten el proyecto.' },
  { icon: Wrench, title: 'Asesoría Técnica Especializada', description: 'Soporte experto en ingeniería civil, estructural y arquitectónica en cada fase del desarrollo del proyecto.' },
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } }, { threshold })
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function DROSection() {
  const { ref: headerRef, inView: headerIn } = useInView()
  const { ref: gridRef, inView: gridIn } = useInView(0.05)
  const { ref: bannerRef, inView: bannerIn } = useInView()
  return (
    <section id="dro" aria-labelledby="dro-heading" className="bg-[#111111] py-24 px-4 overflow-hidden">
      <div ref={headerRef} className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${headerIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="inline-block text-[#C00000] text-xs font-semibold tracking-[0.2em] uppercase mb-4 border border-[#C00000]/40 px-4 py-1 rounded-full">Respaldo Técnico y Legal</span>
        <h2 id="dro-heading" className="text-white text-4xl md:text-5xl font-bold leading-tight mb-5">DRO — <span className="text-[#C00000]">Dirección Responsable</span><br />de Obra</h2>
        <p className="text-[#8A8A8A] text-lg max-w-2xl mx-auto leading-relaxed">Supervisión técnica, legal y profesional para garantizar la correcta ejecución de cada proyecto.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-[#C00000]/50" />
          <div className="w-2 h-2 rounded-full bg-[#C00000]" />
          <div className="h-px w-16 bg-[#C00000]/50" />
        </div>
      </div>
      <div ref={gridRef} className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((service, i) => {
          const Icon = service.icon
          const isLast = i === services.length - 1
          return (
            <article key={service.title} className={`group relative bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 hover:border-[#C00000]/40 hover:bg-[#1f1f1f] transition-all duration-500 ease-out cursor-default ${isLast ? 'sm:col-span-2 lg:col-span-1 xl:col-span-2 xl:max-w-sm xl:mx-auto xl:w-full' : ''} ${gridIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: gridIn ? `${i * 70}ms` : '0ms' }}>
              <div className="absolute inset-0 rounded-2xl bg-[#C00000]/0 group-hover:bg-[#C00000]/4 transition-colors duration-500 pointer-events-none" />
              <div className="relative mb-4 w-12 h-12 rounded-xl bg-[#C00000]/10 border border-[#C00000]/20 flex items-center justify-center group-hover:bg-[#C00000]/20 group-hover:border-[#C00000]/40 transition-all duration-300">
                <Icon className="text-[#C00000] w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2 leading-snug">{service.title}</h3>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">{service.description}</p>
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C00000]/0 to-transparent group-hover:via-[#C00000]/30 transition-all duration-500" />
            </article>
          )
        })}
      </div>
      <div ref={bannerRef} className={`max-w-5xl mx-auto mt-16 transition-all duration-700 ${bannerIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: bannerIn ? '200ms' : '0ms' }}>
        <div className="relative rounded-2xl overflow-hidden border border-[#C00000]/30">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C00000]/15 via-[#1a1a1a] to-[#C00000]/10" />
          <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-transparent via-[#C00000] to-transparent rounded-full ml-6" />
          <div className="relative px-10 md:px-14 py-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#C00000] flex items-center justify-center shadow-lg shadow-[#C00000]/30">
              <ShieldCheck className="text-white w-7 h-7" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <p className="text-white/90 text-base md:text-lg leading-relaxed font-light">En <span className="font-bold text-white">BRIXA</span>, cada proyecto está respaldado por <span className="text-[#C00000] font-semibold">Dirección Responsable de Obra (DRO)</span>, garantizando seguridad, calidad y cumplimiento normativo desde el diseño hasta la entrega.</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {['Seguridad', 'Confianza', 'Legalidad', 'Experiencia', 'Profesionalismo', 'Calidad'].map((badge) => (
            <span key={badge} className="text-xs font-medium text-[#8A8A8A] border border-white/10 px-4 py-1.5 rounded-full hover:border-[#C00000]/40 hover:text-white transition-all duration-300">{badge}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
