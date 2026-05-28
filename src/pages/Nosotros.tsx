import { motion, useScroll, useTransform, useInView, animate } from 'motion/react';
import { Shield, Target, Award, Infinity, Users, Compass, Box } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import nosotrosHero from '../assets/images/nosotros_premium_drone_shot_final_1779400154815.png';
import historyBg from '../assets/images/brixa_history_construction_replicated_1779490894094.png';
import missionBg from '../assets/images/brixa_mission_construction_1779488942951.png';
import visionBg from '../assets/images/brixa_vision_cityscape_ultra_real_clean_1779504261648.png';

const AnimatedNumber = ({ value }: { value: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplayValue(Math.floor(progress * numericValue));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplayValue(numericValue);
    };
    requestAnimationFrame(step);
  }, [isInView, numericValue]);

  return <span ref={nodeRef}>{displayValue}{suffix}</span>;
};
};

const stats = [
  { label: 'Proyectos Realizados', value: '150+', icon: <Target className="text-primary" /> },
  { label: 'Clientes Satisfechos', value: '450+', icon: <Users className="text-primary" /> },
  { label: 'Años de Experiencia', value: '8', icon: <Infinity className="text-primary" /> },
  { label: 'Proyectos Premium', value: '40+', icon: <Award className="text-primary" /> },
];

export default function Nosotros() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="bg-dark">
      {/* CINEMATIC PHILOSOPHY HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity, y: yParallax }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <motion.div
            animate={{ 
              x: [20, -20],
              y: [-10, 10],
              rotate: [-0.5, 0.5],
              scale: [1.15, 1.25, 1.15]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
            className="w-full h-full"
          >
            <img 
              src={nosotrosHero}
              className="w-[110%] h-[110%] object-cover brightness-[0.7] contrast-[1.1] -translate-x-[5%] -translate-y-[5%]"
              alt="Brixa Philosophy Architectural Landscape"
            />
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
                EXPERIENCIA
              </motion.span>
            </div>
            
            <div className="mb-10 md:mb-16 relative">
              <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl sm:text-6xl md:text-[8rem] lg:text-[10rem] xl:text-[12rem] leading-[0.8] text-white tracking-tighter italic"
              >
                QUIÉNES <span className="text-primary">SOMOS</span>
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
                  TRAYECTORIA Y VALORES
                </p>
                <div className="w-16 sm:w-24 h-[1px] bg-primary animate-pulse shadow-[0_0_10px_#A60F1F]" />
                <p className="text-white/40 tracking-[0.3em] sm:tracking-[0.5em] text-[8px] sm:text-xs uppercase max-w-md font-mono">
                  CONSTRUYENDO CON PROPÓSITO
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-0 pointer-events-none z-10 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random()
              }}
              animate={{ 
                y: [null, Math.random() * 100 + "%"],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 10 + Math.random() * 10, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </section>

      {/* HISTORIA */}
      <section className="relative py-24 sm:py-48 px-6 bg-dark border-t border-white/5 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={historyBg}
            className="w-full h-full object-cover grayscale opacity-20 brightness-[0.4]"
            alt="Construction History Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-primary tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-xs uppercase mb-4 font-mono">Trayectoria & Legado</h3>
              <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none mb-8 px-4">OCHO AÑOS DE <br /><span className="text-primary italic">EXCELENCIA</span></h2>
              <div className="w-16 sm:w-24 h-[1px] bg-primary mx-auto mb-10 shadow-[0_0_15px_#A60F1F]" />
              <p className="text-white/70 font-content leading-relaxed text-sm sm:text-lg md:text-xl max-w-4xl mx-auto px-4">
                <strong>BRIXA HOME & BUILD</strong> es una desarrolladora inmobiliaria dedicada a estructurar, diseñar y construir proyectos inmobiliarios residenciales y comerciales en Puebla.
                <br /><br className="hidden sm:block" />
                Nuestro enfoque integra planeación, ejecución y acabados especializados, permitiendo mayor control, eficiencia y calidad en cada etapa del desarrollo.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 pt-8 sm:pt-12 px-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-4 sm:p-8 border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col items-center gap-2 sm:gap-4 group hover:border-primary/40 transition-all duration-500"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform duration-500 mb-1 sm:mb-2 scale-75 sm:scale-100">
                    {stat.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-3xl md:text-4xl font-display text-white">
                      <AnimatedNumber value={stat.value} />
                    </div>
                    <div className="text-[8px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em] text-gray-metallic mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISIÓN & VISIÓN */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(166, 15, 31, 0.4)',
                boxShadow: '0 20px 40px -20px rgba(166, 15, 31, 0.3)'
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center text-center p-8 sm:p-10 lg:p-16 bg-white/[0.02] backdrop-blur-xl border border-primary/10 rounded-sm transition-all duration-500 h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                <img 
                  src={missionBg}
                  className="w-full h-full object-cover grayscale brightness-50"
                  alt="Mission Background"
                />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(166,15,31,0.2),transparent_70%)]" />
              
              <div className="relative mb-6 sm:mb-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 flex items-center justify-center text-primary border border-primary/20 rotate-45 group-hover:rotate-0 transition-transform duration-700">
                  <Target size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-700" />
                </div>
                <div className="absolute -inset-2 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-display text-white uppercase tracking-[0.2em] mb-6 sm:mb-8 relative">
                MISIÓN
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </h3>
              
              <p className="text-white text-sm sm:text-lg font-content leading-relaxed max-w-md relative z-10 px-2 sm:px-0">
                En <strong>BRIXA HOME & BUILD</strong> desarrollamos y construimos proyectos inmobiliarios eficientes, transformando tierra en activos habitables y rentables, mediante procesos estructurados, control de costos y ejecución confiable con eficiencia operativa y alto retorno para clientes e inversionistas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(166, 15, 31, 0.4)',
                boxShadow: '0 20px 40px -20px rgba(166, 15, 31, 0.3)'
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="group flex flex-col items-center text-center p-8 sm:p-10 lg:p-16 bg-white/[0.02] backdrop-blur-xl border border-primary/10 rounded-sm transition-all duration-500 h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                <img 
                  src={visionBg}
                  className="w-full h-full object-cover grayscale brightness-50"
                  alt="Vision Background"
                />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(166,15,31,0.2),transparent_70%)]" />

              <div className="relative mb-6 sm:mb-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 flex items-center justify-center text-primary border border-primary/20 rotate-45 group-hover:rotate-0 transition-transform duration-700">
                  <Shield size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-700" />
                </div>
                <div className="absolute -inset-2 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-display text-white uppercase tracking-[0.2em] mb-6 sm:mb-8 relative">
                VISIÓN
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </h3>
              
              <p className="text-white text-sm sm:text-lg font-content leading-relaxed max-w-md relative z-10 px-2 sm:px-0">
                Posicionar a <strong>BRIXA HOME & BUILD</strong> como una desarrolladora líder en Puebla, especializada en proyectos accesibles y escalables, financiados estratégicamente. Destacar por su calidad, transparencia y capacidad de generar patrimonio y valor urbano.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-40 px-6 text-center bg-dark/50">
        <h2 className="text-2xl sm:text-5xl md:text-7xl mb-8 sm:mb-12 uppercase leading-tight px-4">LIDERANDO LA NUEVA ERA DE LA CONSTRUCCIÓN</h2>
        <motion.a
          href="https://wa.me/522223028042"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, backgroundColor: '#25D366' }}
          whileTap={{ scale: 0.95 }}
          className="inline-block w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-primary font-display text-base sm:text-xl tracking-[0.2em] sm:tracking-[0.3em] uppercase transition-colors duration-300"
        >
          Cotízalo por WhatsApp
        </motion.a>
      </section>
    </div>
  );
}
