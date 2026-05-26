import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, Globe, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Inicio() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const cityScale = useTransform(scrollYProgress, [0.1, 0.4], [1.1, 1]);
  const cityOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <div className="relative overflow-hidden bg-dark">
      {/* SECTION 1: CINEMATIC DRONE HERO */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden px-6 md:px-20 lg:px-32">
        {/* Background Drone Movement */}
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity, y: yParallax }}
          className="absolute inset-0 z-0"
        >
          <motion.div
            animate={{ 
              x: [100, -100],
              y: [-25, 25],
              rotate: [-1, 1],
              scale: [1.1, 1.5, 1.15]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full"
          >
            <img 
              src="/src/assets/images/brixa_cyber_hero_cinematic_1779247366665.png" 
              className="w-full h-full object-cover brightness-[0.8] contrast-[1.2] scale-110"
              alt="Brixa Futuristic Hub"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,transparent,rgba(0,0,0,0.8))]" />
        </motion.div>

        {/* Hero Content - Standardized alignment and margins with top offset */}
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
                CONSTRUIMOS
              </motion.span>
            </div>
            
            <div className="mb-10 md:mb-16 relative">
              <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl sm:text-6xl md:text-[8rem] lg:text-[10rem] xl:text-[12rem] leading-[0.8] text-primary tracking-tighter italic"
              >
                VALOR
              </motion.h1>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 md:space-y-16"
            >
              <div className="space-y-4 md:space-y-10 border-l-[1px] border-primary/40 pl-6 md:pl-12">
                <p className="font-display text-sm sm:text-base md:text-3xl text-white/70 tracking-[0.3em] uppercase max-w-3xl leading-snug">
                  DESARROLLAMOS FUTURO
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 pl-6 md:pl-12">
                <Link 
                  to="/servicios" 
                  className="group relative px-10 md:px-16 py-5 md:py-6 bg-primary text-white overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(166,15,31,0.3)] active:scale-95 text-center"
                >
                  <motion.div
                    className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <span className="relative z-10 font-display text-lg md:text-xl tracking-[0.3em] uppercase">Explorar Proyectos</span>
                </Link>
                <Link 
                  to="/nosotros" 
                  className="group relative px-10 md:px-16 py-5 md:py-6 bg-primary text-white overflow-hidden transition-all duration-500 active:scale-95 text-center"
                >
                  <motion.div
                    className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <span className="relative z-10 font-display text-lg md:text-xl tracking-[0.3em] uppercase transition-colors">QUIÉNES SOMOS</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* SECTION 2: LUXURY DEVELOPMENT REVEAL */}
      <section className="relative min-h-[150vh] bg-dark">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div 
            style={{ scale: cityScale, opacity: cityOpacity }}
            className="absolute inset-0"
          >
            <img 
              src="/src/assets/images/brixa_grounded_hero_v2_1779246974147.png" 
              className="w-full h-full object-cover grayscale opacity-20 transition-all duration-1000"
              alt="Luxury Development"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-6xl px-6 pt-10 sm:pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 40 }}
                    whileHover={{ 
                      y: -10,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderColor: 'rgba(166, 15, 31, 0.4)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="group bg-white/[0.02] backdrop-blur-3xl p-6 sm:p-10 lg:p-16 border border-primary/10 rounded-sm transition-all duration-500 h-full flex flex-col justify-center text-center items-center"
                  >
                    <div className="w-12 h-[1px] bg-primary mb-6 sm:mb-8 group-hover:w-24 transition-all duration-700" />
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-8 tracking-tight uppercase font-display text-white italic">ARQUITECTURA</h2>
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-8 tracking-tight uppercase font-display text-white">DE VANGUARDIA</h2>
                    <p className="text-white/80 text-sm sm:text-lg leading-relaxed font-content max-w-md">
                      Fusionamos diseño contemporáneo con alta ingeniería. Cada obra es un legado de durabilidad y estética funcional en el entorno urbano actual.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 40 }}
                    whileHover={{ 
                      y: -10,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderColor: 'rgba(166, 15, 31, 0.4)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="group bg-white/[0.02] backdrop-blur-3xl p-6 sm:p-10 lg:p-16 border border-primary/10 rounded-sm transition-all duration-500 h-full flex flex-col justify-center text-center items-center"
                  >
                    <div className="w-12 h-[1px] bg-primary mb-6 sm:mb-8 group-hover:w-24 transition-all duration-700" />
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-8 tracking-tight uppercase font-display text-white italic">CALIDAD</h2>
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-8 tracking-tight uppercase font-display text-white">SIN COMPROMISO</h2>
                    <p className="text-white/80 text-sm sm:text-lg leading-relaxed font-content max-w-md">
                      Nuestra metodología se basa en la precisión absoluta, desde la cimentación hasta los acabados más finos, garantizando plusvalía inmediata.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: CONSTRUCTION REALISM */}
      <section className="py-24 px-6 bg-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h3 className="text-primary tracking-[0.5em] text-xs uppercase mb-4">Ingeniería de Alto Nivel</h3>
            <h2 className="text-4xl md:text-7xl mb-8 leading-[0.9]">PRECISIÓN EN CADA ESTRUCTURA</h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed font-content max-w-xl">
              Nuestros procesos integran metodologías avanzadas de gestión, garantizando una eficiencia operativa excepcional 
              en desarrollos residenciales, comerciales e industriales de gran escala.
            </p>
            <Link to="/servicios" className="inline-flex items-center gap-4 text-white group">
              <span className="font-display text-xl tracking-widest uppercase">Ver Servicios de Ingeniería</span>
              <div className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all duration-500" />
              <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-[4/5] overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
                src="/src/assets/images/brixa_structural_precision_clean_v3_1779511204879.png"
                className="w-full h-full object-cover"
                alt="Construction Site"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-10 -left-10 p-10 backdrop-blur-xl border-l-[1px] border-primary/40 md:block hidden">
              <div className="font-display text-4xl leading-none text-white italic tracking-tighter">EXCELENCIA</div>
              <span className="text-white/40 uppercase tracking-[0.4em] text-[10px] block mt-4 font-mono">Compromiso BRIXA HOME & BUILD</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
