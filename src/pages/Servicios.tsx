import { motion, useScroll, useTransform } from 'motion/react';
import { Home, Building2, Hammer, Settings, TreePine, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import serviciosHero from '../assets/images/servicios_construction_drone_final_1779400171800.png';
import imgDesarrollo from '../assets/images/brixa_finished_house_replicated_1779490909196.png';
import imgRemodelacion from '../assets/images/brixa_history_construction_replicated_1779490894094.png';
import imgComercial from '../assets/images/brixa_commercial_interior_wood_beams_1779492112865.png';
import imgMantenimiento from '../assets/images/brixa_maintenance_workers_construction_1779492128667.png';
import imgCarpinteria from '../assets/images/luxury_carpentry_brixa_1779244089927.png';

const services = [
  {
    id: '01',
    title: 'Desarrollo y Construcción',
    description: 'Diseño, planeación y ejecución de proyectos habitacionales y comerciales. Vivienda desde cero y edificación completa llave en mano.',
    icon: <Building2 className="w-10 h-10 text-primary" />,
    img: imgDesarrollo,
    details: ['Vivienda desde cero', 'Edificación completa', 'Proyectos llave en mano', 'Optimización de costos']
  },
  {
    id: '02',
    title: 'Remodelación y Optimización',
    description: 'Intervenciones para mejorar funcionalidad, estética y valor del inmueble. Remodelaciones integrales y optimización de espacios.',
    icon: <Home className="w-10 h-10 text-primary" />,
    img: imgRemodelacion,
    details: ['Remodelaciones integrales', 'Ampliaciones', 'Refuerzo estructural', 'Reconfiguración de espacios']
  },
  {
    id: '03',
    title: 'Proyectos Comerciales e Industriales',
    description: 'Soluciones para negocios y operación empresarial. Naves industriales, locales comerciales y domos estructurales.',
    icon: <Settings className="w-10 h-10 text-primary" />,
    img: imgComercial,
    details: ['Naves industriales', 'Locales comerciales', 'Domos estructurales', 'Adecuaciones para operación']
  },
  {
    id: '04',
    title: 'Servicios Técnicos y Mantenimiento',
    description: 'Solución de problemas y mantenimiento especializado preventivo de sistemas críticos para la operación.',
    icon: <Hammer className="w-10 h-10 text-primary" />,
    img: imgMantenimiento,
    details: ['Sistemas hidráulicos y eléctricos', 'Reparaciones estructurales menores', 'Mantenimiento preventivo', 'Consultoría técnica']
  }
];

export default function Servicios() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div className="bg-dark">
      {/* CINEMATIC SERVICES HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity, y: yParallax }}
          className="absolute inset-0 z-0"
        >
          <motion.div
            animate={{ x: [20, -20], y: [-10, 10], rotate: [-0.5, 0.5], scale: [1.15, 1.25, 1.15] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img src={serviciosHero} className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]" alt="Brixa 3D Architectural Detail" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />
        </motion.div>

        <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center h-full px-8 pt-48 md:pt-80">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="mb-4 md:mb-6 overflow-hidden">
              <motion.span 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block font-display text-lg sm:text-xl md:text-3xl lg:text-4xl leading-none text-white tracking-[0.4em] md:tracking-[0.7em] uppercase opacity-40 mb-4"
              >
                SOLUCIONES
              </motion.span>
            </div>
            <div className="mb-10 md:mb-16 relative">
              <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl sm:text-6xl md:text-[8rem] lg:text-[10rem] xl:text-[12rem] leading-[0.8] text-primary tracking-tighter italic"
              >
                SERVICIOS
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 md:space-y-16"
            >
              <div className="space-y-4 md:space-y-10 border-l-[1px] border-primary/40 pl-6 md:pl-12">
                <p className="font-display text-sm sm:text-base md:text-3xl text-white/70 tracking-[0.3em] uppercase max-w-3xl leading-snug italic">PREMIUM</p>
                <div className="w-16 sm:w-24 h-[1px] bg-primary animate-pulse shadow-[0_0_10px_#A60F1F]" />
                <p className="text-white/40 tracking-[0.3em] sm:tracking-[0.5em] text-[8px] sm:text-xs uppercase max-w-md font-mono">ARQUITECTURA TÉCNICA Y EJECUCIÓN MAGISTRAL</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ opacity: { duration: 0.5, delay: idx * 0.05 }, duration: 0.4 }}
              className="relative group p-6 sm:p-10 lg:p-16 bg-dark transition-all duration-500 overflow-hidden"
            >
              {/* Imagen siempre visible en móvil, hover en escritorio */}
              <div className="absolute inset-0 opacity-20 md:opacity-0 md:group-hover:opacity-40 pointer-events-none transition-opacity duration-700">
                <img 
                  src={service.img} 
                  className="w-full h-full object-cover" 
                  alt={service.title} 
                />
              </div>

              <div className="relative z-10 space-y-6 sm:space-y-8">
                <div className="p-3 sm:p-4 bg-primary/10 inline-block border border-primary/20">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl uppercase leading-tight tracking-tight max-w-xs">{service.title}</h3>
                <p className="text-white/80 font-content leading-relaxed max-w-sm text-xs sm:text-sm">{service.description}</p>
                <ul className="space-y-2 sm:space-y-3">
                  {service.details?.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 sm:gap-3 text-[8px] sm:text-[10px] text-gray-metallic font-mono uppercase tracking-wider">
                      <div className="w-1 h-[1px] bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contacto"
                  className="flex items-center gap-3 text-white/40 group-hover:text-primary transition-all text-[8px] sm:text-[10px] uppercase tracking-[0.3em] font-mono"
                >
                  Cotizar <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CARPENTRY SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-32 relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/5 -skew-y-2 pointer-events-none" />
          <div className="relative flex flex-col lg:flex-row items-center gap-10 sm:gap-16 p-8 sm:p-12 lg:p-24 border border-white/5 backdrop-blur-2xl">
            <div className="flex-1 order-2 lg:order-1 lg:max-w-xl">
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <TreePine className="text-primary" size={24} />
                <span className="text-[8px] sm:text-[10px] uppercase tracking-[.3em] sm:tracking-[.5em] text-primary font-mono">CARPINTERÍA ARQUITECTÓNICA</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 uppercase tracking-tight leading-[0.9]">MANUFACTURA DE ALTO NIVEL</h2>
              <p className="text-white/80 font-content text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Contamos con una línea propia de carpintería arquitectónica respaldada por una de las naves con mayor trayectoria en Puebla. 
                Participamos en proyectos residenciales premium, integrando diseño personalizado, procesos de fabricación avanzados y acabados de excelencia.
              </p>
              <ul className="grid grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-4 sm:gap-x-8 mb-8 sm:mb-12">
                {[
                  { label: 'Cocinas Integrales', desc: 'Diseño a medida' },
                  { label: 'Closets y Vestidores', desc: 'Funcionalidad premium' },
                  { label: 'Puertas de Acceso', desc: 'Acabados especiales' },
                  { label: 'Mobiliario Empotrado', desc: 'Optimización de espacio' }
                ].map((item, i) => (
                  <li key={i} className="space-y-1">
                    <div className="text-white font-display uppercase tracking-widest text-[10px] sm:text-xs">{item.label}</div>
                    <div className="text-gray-metallic text-[8px] sm:text-[10px] font-mono tracking-widest uppercase">{item.desc}</div>
                  </li>
                ))}
              </ul>
              <motion.a
                href="https://wa.me/522223028042"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: '#25D366' }}
                whileTap={{ scale: 0.95 }}
                className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-primary text-white font-display text-base sm:text-lg uppercase tracking-widest transition-colors duration-300 text-center"
              >
                Cotízalo por WhatsApp
              </motion.a>
            </div>
            <motion.div 
              animate={{ y: [-20, 20], rotate: [-1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="flex-1 order-1 lg:order-2 relative aspect-[4/3] w-full overflow-hidden"
            >
              <img 
                src={imgCarpinteria}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                alt="Architecture Carpentry"
              />
              <div className="absolute inset-0 border-[20px] border-dark/20 pointer-events-none" />
              <div className="absolute bottom-8 right-8 p-10 backdrop-blur-xl border-r-[1px] border-primary/40 md:block hidden text-right">
                <div className="text-3xl font-display leading-none text-white italic tracking-tighter">PUEBLA</div>
                <span className="text-white/40 uppercase tracking-[0.4em] text-[10px] block mt-4 font-mono">Calidad Regional</span>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </section>
    </div>
  );
}
