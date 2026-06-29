import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandingSection from '../components/BrandingSection';
import cyberHero from '../assets/images/brixa_cyber_hero_cinematic_1779247366665.png';
import groundedHero from '../assets/images/brixa_grounded_hero_v2_1779246974147.png';
import structuralPrecision from '../assets/images/brixa_structural_precision_clean_v3_1779511204879.png';

export default function Inicio() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const cityScale = useTransform(scrollYProgress, [0.1, 0.4], [1.1, 1]);
  const cityOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const handleCotizar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nombre = (form.elements.namedItem('nombre') as HTMLInputElement).value;
    const telefono = (form.elements.namedItem('telefono') as HTMLInputElement).value;
    const servicio = (form.elements.namedItem('servicio') as HTMLSelectElement).value;
    const mensaje = (form.elements.namedItem('mensaje') as HTMLTextAreaElement).value;
    const text = `Hola BRIXA, me interesa cotizar:%0ANombre: ${nombre}%0ATeléfono: ${telefono}%0AServicio: ${servicio}%0AMensaje: ${mensaje}`;
    window.open(`https://wa.me/522221234567?text=${text}`, '_blank');
  };

  return (
    <div className="relative overflow-hidden bg-dark">
      <section className="relative h-screen flex items-center justify-start overflow-hidden px-6 md:px-20 lg:px-32">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity, y: yParallax }} className="absolute inset-0 z-0">
          <motion.div animate={{ x: [100, -100], y: [-25, 25], rotate: [-1, 1], scale: [1.1, 1.5, 1.15] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full">
            <img src={cyberHero} className="w-full h-full object-cover brightness-[0.8] contrast-[1.2] scale-110" alt="Brixa Futuristic Hub" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,transparent,rgba(0,0,0,0.8))]" />
        </motion.div>

        <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center h-full px-8 pt-48 md:pt-80">
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="flex-1">
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-6 md:mb-8">
                <div className="flex flex-col leading-none">
                  <span className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-[0.25em] uppercase font-bold">BRIXA</span>
                  <span className="font-display text-xs sm:text-sm md:text-base lg:text-lg text-white/60 tracking-[0.55em] uppercase font-light mt-1">HOME &amp; BUILD</span>
                </div>
              </motion.div>
              <div className="mb-4 md:mb-6 overflow-hidden">
                <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="block font-display text-lg sm:text-xl md:text-3xl lg:text-4xl leading-none text-white tracking-[0.4em] md:tracking-[0.7em] uppercase opacity-40 mb-4">
                  CONSTRUIMOS
                </motion.span>
              </div>
              <div className="mb-8 md:mb-12 relative">
                <motion.h1 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="font-display text-4xl sm:text-6xl md:text-[8rem] lg:text-[9rem] xl:text-[10rem] leading-[0.8] text-primary tracking-tighter italic">
                  VALOR
                </motion.h1>
              </div>
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                <div className="border-l-[1px] border-primary/40 pl-6 md:pl-12">
                  <p className="font-display text-sm sm:text-base md:text-3xl text-white/70 tracking-[0.3em] uppercase max-w-3xl leading-snug">DESARROLLAMOS FUTURO</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="w-full lg:w-[340px] xl:w-[380px] shrink-0">
              <div style={{ background: 'rgba(10, 10, 10, 0.65)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(192, 0, 0, 0.18)', boxShadow: '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)' }} className="rounded-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-[2px] bg-primary" />
                  <span className="font-display text-xs tracking-[0.35em] uppercase text-white/80">Cotiza tu proyecto</span>
                </div>
                <form onSubmit={handleCotizar} className="space-y-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-white/40 mb-1 font-display">Nombre</label>
                    <input name="nombre" type="text" placeholder="Tu nombre" required className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-2.5 rounded-sm placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors duration-300" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-white/40 mb-1 font-display">Teléfono</label>
                    <input name="telefono" type="tel" placeholder="222 000 0000" required className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-2.5 rounded-sm placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors duration-300" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-white/40 mb-1 font-display">Servicio</label>
                    <select name="servicio" required className="w-full bg-[#111] border border-white/10 text-white/70 text-sm px-4 py-2.5 rounded-sm focus:outline-none focus:border-primary/50 transition-colors duration-300 appearance-none">
                      <option value="" disabled>Selecciona un servicio</option>
                      <option disabled className="text-white/30">── Construcción ──</option>
                      <option value="Construcción">Construcción</option>
                      <option value="Remodelación">Remodelación</option>
                      <option value="Diseño de interiores">Diseño de interiores</option>
                      <option value="Ingeniería estructural">Ingeniería estructural</option>
                      <option value="Otro">Otro</option>
                      <option disabled className="text-white/30">── DRO - Dirección Responsable de Obra ──</option>
                      <option value="Responsiva de Obra">Responsiva de Obra</option>
                      <option value="Revisión y Validación de Proyectos">Revisión y Validación de Proyectos</option>
                      <option value="Supervisión de Obra Técnica e Institucional">Supervisión de Obra Técnica e Institucional</option>
                      <option value="Cumplimiento Normativo y Legal">Cumplimiento Normativo y Legal</option>
                      <option value="Gestión de Trámites y Licencias">Gestión de Trámites y Licencias</option>
                      <option value="Detección y Mitigación de Riesgos">Detección y Mitigación de Riesgos</option>
                      <option value="Asesoría Técnica Especializada">Asesoría Técnica Especializada</option>
                      <option disabled className="text-white/30">── Logotipos y Branding ──</option>
                      <option value="Diseño de Logotipos en Madera">Logotipos en Madera</option>
                      <option value="Diseño de Logotipos en Aluminio">Logotipos en Aluminio</option>
                      <option value="Logotipos con Luz LED">Logotipos con Luz LED</option>
                      <option value="Conceptualización de Logotipos Profesionales">Conceptualización de Logotipos Profesionales</option>
                      <option value="Estrategia de Branding Empresarial">Estrategia de Branding Empresarial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-white/40 mb-1 font-display">Mensaje</label>
                    <textarea name="mensaje" placeholder="Breve descripción..." rows={3} className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-2.5 rounded-sm placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors duration-300 resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-primary text-white font-display text-xs tracking-[0.3em] uppercase py-3 px-6 hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-3 group mt-2">
                    Cotizar Ahora
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[150vh] bg-dark">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div style={{ scale: cityScale, opacity: cityOpacity }} className="absolute inset-0">
            <img src={groundedHero} className="w-full h-full object-cover grayscale opacity-20 transition-all duration-1000" alt="Luxury Development" />
            <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-6xl px-6 pt-10 sm:pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
                  <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} whileHover={{ y: -10, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(166, 15, 31, 0.4)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }} className="group bg-white/[0.02] backdrop-blur-3xl p-6 sm:p-10 lg:p-16 border border-primary/10 rounded-sm transition-all duration-500 h-full flex flex-col justify-center text-center items-center">
                    <div className="w-12 h-[1px] bg-primary mb-6 sm:mb-8 group-hover:w-24 transition-all duration-700" />
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-8 tracking-tight uppercase font-display text-white italic">ARQUITECTURA</h2>
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-8 tracking-tight uppercase font-display text-white">DE VANGUARDIA</h2>
                    <p className="text-white/80 text-sm sm:text-lg leading-relaxed font-content max-w-md">Fusionamos diseño contemporáneo con alta ingeniería. Cada obra es un legado de durabilidad y estética funcional en el entorno urbano actual.</p>
                  </motion.div>
                  <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} whileHover={{ y: -10, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(166, 15, 31, 0.4)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }} className="group bg-white/[0.02] backdrop-blur-3xl p-6 sm:p-10 lg:p-16 border border-primary/10 rounded-sm transition-all duration-500 h-full flex flex-col justify-center text-center items-center">
                    <div className="w-12 h-[1px] bg-primary mb-6 sm:mb-8 group-hover:w-24 transition-all duration-700" />
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-8 tracking-tight uppercase font-display text-white italic">CALIDAD</h2>
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-8 tracking-tight uppercase font-display text-white">SIN COMPROMISO</h2>
                    <p className="text-white/80 text-sm sm:text-lg leading-relaxed font-content max-w-md">Nuestra metodología se basa en la precisión absoluta, desde la cimentación hasta los acabados más finos, garantizando plusvalía inmediata.</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h3 className="text-primary tracking-[0.5em] text-xs uppercase mb-4">Ingeniería de Alto Nivel</h3>
            <h2 className="text-4xl md:text-7xl mb-8 leading-[0.9]">PRECISIÓN EN CADA ESTRUCTURA</h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed font-content max-w-xl">Nuestros procesos integran metodologías avanzadas de gestión, garantizando una eficiencia operativa excepcional en desarrollos residenciales, comerciales e industriales de gran escala.</p>
            <Link to="/servicios" className="inline-flex items-center gap-4 text-white group">
              <span className="font-display text-xl tracking-widest uppercase">Ver Servicios de Ingeniería</span>
              <div className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all duration-500" />
              <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-[4/5] overflow-hidden">
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 1 }} src={structuralPrecision} className="w-full h-full object-cover" alt="Construction Site" />
            </div>
            <div className="absolute bottom-10 -left-10 p-10 backdrop-blur-xl border-l-[1px] border-primary/40 md:block hidden">
              <div className="font-display text-4xl leading-none text-white italic tracking-tighter">EXCELENCIA</div>
              <span className="text-white/40 uppercase tracking-[0.4em] text-[10px] block mt-4 font-mono">Compromiso BRIXA HOME & BUILD</span>
            </div>
          </div>
        </div>
      </section>

      <BrandingSection />

    </div>
  );
}
