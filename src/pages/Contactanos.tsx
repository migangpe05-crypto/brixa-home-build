import { motion, useScroll, useTransform } from 'motion/react';
import { Send, MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Compass, Hexagon, Share2 } from 'lucide-react';

export default function Contactanos() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div className="bg-dark">
      {/* CINEMATIC CONTACT HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Background Drone Movement */}
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <motion.div
            animate={{ 
              x: [-50, 50],
              y: [-20, 20],
              scale: [1.1, 1.3, 1.1]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full"
          >
            <img 
              src="/src/assets/images/brixa_contact_3d_render_1779322352896.png" 
              className="w-full h-full object-cover brightness-[0.6] contrast-[1.2]"
              alt="Brixa 3D Office Interior"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-transparent to-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />
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
                CONEXIÓN
              </motion.span>
            </div>
            
            <div className="mb-10 md:mb-16 relative">
              <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl sm:text-6xl md:text-[8rem] lg:text-[10rem] xl:text-[12rem] leading-[0.8] text-white tracking-tighter italic"
              >
                ESTAMOS <span className="text-primary">LISTOS</span>
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
                  PARA TU SIGUIENTE PASO
                </p>
                <div className="w-16 sm:w-24 h-[1px] bg-primary animate-pulse shadow-[0_0_10px_#A60F1F]" />
                <p className="text-white/40 tracking-[0.3em] sm:tracking-[0.5em] text-[8px] sm:text-xs uppercase max-w-md font-mono">
                  ELEVANDO TU VISIÓN ARQUITECTÓNICA
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 sm:space-y-16"
          >
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-none">CONECTA CON <br /><span className="text-primary">NUESTRO EQUIPO</span></h2>
              <p className="text-base sm:text-lg text-white font-content leading-relaxed max-w-md opacity-80">
                <strong>BRIXA HOME & BUILD</strong> integra procesos, tecnología y diseño para ofrecerte la mejor experiencia en desarrollo inmobiliario.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              <div className="space-y-3 sm:space-y-4 group">
                <div className="flex items-center gap-4 text-primary">
                  <MapPin size={18} sm:size={20} />
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-[.2em] sm:tracking-[.3em] font-mono">Ubicación</span>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Calle+Loma+Bonita+Ampliacion+Santa+Catarina+Sin+Numero+Ext+3+Puebla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 font-mono text-xs sm:text-sm leading-relaxed border-l border-white/10 pl-6 group-hover:border-primary transition-colors block"
                >
                  Calle Loma Bonita, Ampliación Santa Catarina, <br className="hidden sm:block" />
                  Sin Número Ext. 3, Puebla
                </a>
              </div>

              <div className="space-y-3 sm:space-y-4 group">
                <div className="flex items-center gap-4 text-primary">
                  <Phone size={18} sm:size={20} />
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-[.2em] sm:tracking-[.3em] font-mono">Llamada Directa</span>
                </div>
                <p className="text-white/80 font-mono text-xs sm:text-sm leading-relaxed border-l border-white/10 pl-6 group-hover:border-primary transition-colors">
                  +52 222 302 8042
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 group">
                <div className="flex items-center gap-4 text-primary">
                  <Mail size={18} sm:size={20} />
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-[.2em] sm:tracking-[.3em] font-mono">Correo Electrónico</span>
                </div>
                <a 
                  href="mailto:brixahomeybuild@gmail.com"
                  className="text-white/80 font-mono text-xs sm:text-sm leading-relaxed border-l border-white/10 pl-6 group-hover:border-primary transition-colors block break-all sm:break-normal"
                >
                  brixahomeybuild@gmail.com
                </a>
              </div>

              <div className="space-y-3 sm:space-y-4 group">
                <div className="flex items-center gap-4 text-primary">
                  <Share2 size={18} sm:size={20} />
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-[.2em] sm:tracking-[.3em] font-mono">REDES SOCIALES</span>
                </div>
                <div className="flex gap-4 border-l border-white/10 pl-6 group-hover:border-primary transition-colors">
                  {[
                    { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61582174198846' },
                    { Icon: Instagram, href: 'https://www.instagram.com/arquitectu3120' },
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: '#A60F1F' }}
                      className="text-white/40"
                    >
                      <social.Icon size={18} />
                    </motion.a>
                  ))}
                  <motion.a
                    href="https://www.tiktok.com/@brixaconstructora?_r=1&_t=ZS-96bdnsHg0Dk"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: '#A60F1F' }}
                    className="text-white/40"
                  >
                    <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.16 8.16 0 004.77 1.52V6.79a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM SECTION - The "Cotizar" target */}
          <motion.div
            id="quote-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-6 sm:p-10 lg:p-14 bg-white/[0.02] border border-white/5 backdrop-blur-3xl overflow-hidden"
          >
            {/* Cinematic background element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-[100px] pointer-events-none" />
            
            <form className="space-y-8 sm:space-y-10 relative z-10" onSubmit={(e) => {
              e.preventDefault();
              alert('Solicitud enviada correctamente. Nuestro equipo se pondrá en contacto pronto.');
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-4">
                  <label className="text-[8px] sm:text-[10px] uppercase tracking-[.4em] text-primary font-semibold">Nombre Completo</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full bg-white/[0.03] border-b border-white/20 p-4 sm:p-5 outline-none focus:border-primary transition-all font-content text-white placeholder:text-white/20 text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[8px] sm:text-[10px] uppercase tracking-[.4em] text-primary font-semibold">Correo</label>
                  <input 
                    required
                    type="email" 
                    placeholder="ejemplo@dominio.com"
                    className="w-full bg-white/[0.03] border-b border-white/20 p-4 sm:p-5 outline-none focus:border-primary transition-all font-content text-white placeholder:text-white/20 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-3">
                  <label className="text-[8px] sm:text-[9px] uppercase tracking-[.4em] text-primary/80 font-mono">Teléfono</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full bg-white/5 border-b border-white/10 p-4 outline-none focus:border-primary transition-all font-content text-white text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[8px] sm:text-[9px] uppercase tracking-[.4em] text-primary/80 font-mono">Inversión Estimada</label>
                  <select className="w-full bg-white/5 border-b border-white/10 p-4 outline-none focus:border-primary transition-all font-content text-white/60 appearance-none text-sm sm:text-base">
                    <option className="bg-dark">$500k - $1M</option>
                    <option className="bg-dark">$1M - $5M</option>
                    <option className="bg-dark">$5M+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[8px] sm:text-[9px] uppercase tracking-[.4em] text-primary/80 font-mono">Proyecto / Idea</label>
                <textarea 
                  required
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-primary transition-all font-content text-white resize-none text-sm sm:text-base"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#25D366' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 sm:py-6 bg-primary text-white font-display text-base sm:text-xl tracking-[0.2em] sm:tracking-[0.3em] uppercase flex items-center justify-center gap-4 transition-all shadow-2xl"
              >
                Solicitar Cotización <Send size={18} sm:size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* MAP SECTION */}
        <motion.a
          href="https://www.google.com/maps/search/?api=1&query=Calle+Loma+Bonita+Ampliacion+Santa+Catarina+Sin+Numero+Ext+3+Puebla"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 aspect-[21/9] w-full bg-white/5 border border-white/5 overflow-hidden relative block group"
        >
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/puebla_map/1920/800')] bg-cover grayscale contrast-150 opacity-10 group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 bg-primary rounded-full animate-ping absolute opacity-10" />
                <div className="w-6 h-6 bg-primary rounded-full relative z-10 shadow-[0_0_30px_#A60F1F] flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="text-center group-hover:translate-y-[-10px] transition-transform">
                  <span className="font-display text-3xl tracking-[0.6em] text-white block uppercase">Puebla</span>
                  <span className="text-[10px] text-primary uppercase tracking-[0.5em] mt-2 block opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Ver en Google Maps</span>
                </div>
             </div>
          </div>
        </motion.a>
      </section>

      {/* WHATSAPP FLOAT */}
      <motion.a
        href="https://wa.me/522223028042"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl z-40"
      >
        <Phone size={24} sm:size={32} className="text-white fill-current" />
      </motion.a>
    </div>
  );
}

