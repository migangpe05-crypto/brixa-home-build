import { useState, useEffect, useRef } from 'react'
import {
  Layers,
  BookOpen,
  Building2,
  Briefcase,
  Palette,
  Share2,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'Diseño de Logotipos',
    description: 'Creamos símbolos visuales únicos que encapsulan la esencia de tu marca y generan recordación inmediata.',
    tag: 'Identidad',
  },
  {
    icon: BookOpen,
    title: 'Manual de Marca',
    description: 'Documentamos todas las reglas de uso de tu identidad: tipografías, colores, espaciados y aplicaciones correctas.',
    tag: 'Guía',
  },
  {
    icon: Building2,
    title: 'Branding Corporativo',
    description: 'Desarrollamos la imagen completa de tu empresa para posicionarla de forma coherente y profesional en su sector.',
    tag: 'Estrategia',
  },
  {
    icon: Briefcase,
    title: 'Personalización Empresarial',
    description: 'Aplicamos tu identidad visual en papelería, uniformes, señalética y materiales corporativos de alto impacto.',
    tag: 'Aplicaciones',
  },
  {
    icon: Palette,
    title: 'Identidad Visual Integral',
    description: 'Sistema de diseño completo: paleta cromática, tipografías, iconografía y lenguaje visual unificado.',
    tag: 'Sistema',
  },
  {
    icon: Share2,
    title: 'Diseño para Redes Sociales',
    description: 'Templates y piezas gráficas optimizadas para cada plataforma digital con coherencia de marca.',
    tag: 'Digital',
  },
]

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    alt: 'Diseño de logotipo corporativo',
    label: 'Diseño de Logotipos',
  },
  {
    src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    alt: 'Manual de marca empresarial',
    label: 'Manual de Marca',
  },
  {
    src: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    alt: 'Branding corporativo integral',
    label: 'Branding Corporativo',
  },
  {
    src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80',
    alt: 'Identidad visual corporativa',
    label: 'Identidad Visual',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
    alt: 'Estrategia de posicionamiento de marca',
    label: 'Posicionamiento',
  },
]

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

export default function BrandingSection() {
  const { ref: headerRef, inView: headerIn } = useInView()
  const { ref: galleryRef, inView: galleryIn } = useInView(0.05)
  const { ref: cardsRef, inView: cardsIn } = useInView(0.05)
  const { ref: ctaRef, inView: ctaIn } = useInView()

  return (
    <section
      id="branding"
      aria-labelledby="branding-heading"
      className="bg-[#0d0d0d] py-24 px-4 overflow-hidden"
    >
      <div
        ref={headerRef}
        className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
          headerIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="inline-block text-[#C00000] text-xs font-semibold tracking-[0.2em] uppercase mb-4 border border-[#C00000]/40 px-4 py-1 rounded-full">
          Diseño & Comunicación Visual
        </span>
        <h2
          id="branding-heading"
          className="text-white text-4xl md:text-5xl font-bold leading-tight mb-5"
        >
          Branding e{' '}
          <span className="text-[#C00000]">Identidad Corporativa</span>
        </h2>
        <p className="text-[#8A8A8A] text-lg max-w-2xl mx-auto leading-relaxed">
          Desarrollamos identidades visuales profesionales para empresas que buscan destacar en su mercado.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-[#C00000]/50" />
          <div className="w-2 h-2 rounded-full bg-[#C00000]" />
          <div className="h-px w-16 bg-[#C00000]/50" />
        </div>
      </div>

      <div
        ref={galleryRef}
        className={`max-w-6xl mx-auto mb-20 transition-all duration-700 ${
          galleryIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[220px] gap-3 md:gap-4">
          {gallery.map((img, i) => (
            <div
              key={img.label}
              className={`relative overflow-hidden rounded-2xl group cursor-default ${
                i === 0 ? 'col-span-2 md:col-span-1 row-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-[#C00000]/80 backdrop-blur-sm px-3 py-1 rounded-full">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={cardsRef}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
      >
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <article
              key={service.title}
              className={`group relative bg-[#141414] border border-white/5 rounded-2xl p-6 hover:border-[#C00000]/40 hover:bg-[#181818] transition-all duration-500 ease-out cursor-default ${
                cardsIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: cardsIn ? `${i * 70}ms` : '0ms' }}
            >
              <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest text-[#C00000]/70 uppercase">
                {service.tag}
              </span>
              <div className="mb-4 w-11 h-11 rounded-xl bg-[#C00000]/10 border border-[#C00000]/20 flex items-center justify-center group-hover:bg-[#C00000]/20 group-hover:border-[#C00000]/40 transition-all duration-300">
                <Icon className="text-[#C00000] w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2 leading-snug">{service.title}</h3>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">{service.description}</p>
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C00000]/0 to-transparent group-hover:via-[#C00000]/40 transition-all duration-500" />
            </article>
          )
        })}
      </div>

      <div
        ref={ctaRef}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          ctaIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: ctaIn ? '150ms' : '0ms' }}
      >
        <div className="relative rounded-2xl border border-[#C00000]/30 bg-gradient-to-r from-[#1a0505] via-[#141414] to-[#1a0505] px-8 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-[#C00000]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative text-center md:text-left">
            <p className="text-white font-semibold text-xl mb-1">¿Listo para construir tu marca?</p>
            <p className="text-[#8A8A8A] text-sm">Cotiza tu proyecto de branding con expertos en identidad corporativa.</p>
          </div>
          
            href="#contacto"
            className="relative flex-shrink-0 inline-flex items-center gap-2 bg-[#C00000] hover:bg-[#a50000] text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#C00000]/30 hover:-translate-y-0.5 group/btn"
            aria-label="Solicitar cotización de branding"
          >
            Solicitar Cotización
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
