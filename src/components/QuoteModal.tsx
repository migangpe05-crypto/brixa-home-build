import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Calculator, Building2, Home, Hammer } from 'lucide-react';
import React, { useState } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Propuesta recibida. Analizando viabilidad técnica...');
      onClose();
      setStep(1);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-dark border border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 blur-[80px] pointer-events-none" />

            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/40 hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <Calculator className="text-primary" size={20} />
                <span className="text-premium-label">COTIZACIÓN_ESTRATÉGICA</span>
              </div>

              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-10"
                >
                  <h2 className="text-3xl md:text-5xl uppercase tracking-tight leading-[1.1]">¿QUÉ TIPO DE PROYECTO <br /><span className="text-brand border-b-2 border-primary/20 pb-1">BUSCAS DESARROLLAR?</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: Building2, label: 'Desarrollo Habitacional', val: 'res' },
                      { icon: Home, label: 'Residencial desde Cero', val: 'new' },
                      { icon: Calculator, label: 'Proyecto Comercial', val: 'comm' },
                      { icon: Hammer, label: 'Remodelación / Acabados', val: 'rem' },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={nextStep}
                        className="group flex flex-col items-center gap-6 p-10 border border-white/5 bg-white/[0.02] hover:border-primary/40 hover:bg-white/[0.05] transition-all text-center"
                      >
                        <item.icon className="text-primary/40 group-hover:text-primary transition-colors mb-2" size={32} />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-white transition-colors">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

               {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-10"
                >
                   <h2 className="text-3xl md:text-5xl uppercase tracking-tight leading-[1.1]">DETALLES DE <br /><span className="text-brand border-b-2 border-primary/20 pb-1">LA VISIÓN</span></h2>
                   <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Nombre</label>
                          <input required type="text" className="w-full bg-white/[0.03] border-b border-white/20 p-4 outline-none focus:border-primary text-sm font-content text-white" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Whatsapp</label>
                          <input required type="tel" className="w-full bg-white/[0.03] border-b border-white/20 p-4 outline-none focus:border-primary text-sm font-content text-white" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Descripción del Terreno / Área</label>
                        <textarea required rows={3} className="w-full bg-white/[0.03] border border-white/10 p-4 outline-none focus:border-primary text-sm font-content text-white resize-none" />
                      </div>
                      <div className="flex gap-4">
                        <button 
                          type="button"
                          onClick={prevStep}
                          className="flex-1 py-4 border border-white/10 text-white/40 uppercase tracking-widest text-[10px] hover:text-white transition-colors"
                        >
                          Atrás
                        </button>
                        <button 
                          disabled={isSubmitting}
                          type="submit"
                          className="flex-[2] py-5 bg-primary text-white uppercase tracking-[0.3em] font-display text-sm hover:neon-glow-red transition-all flex items-center justify-center gap-3 shadow-2xl"
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white animate-spin rounded-full" />
                          ) : (
                            <>ENVIAR SOLICITUD <Send size={18} /></>
                          )}
                        </button>
                      </div>
                   </form>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
