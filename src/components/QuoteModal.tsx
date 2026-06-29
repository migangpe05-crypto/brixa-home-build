import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Calculator, Building2, Home, Hammer, ShieldCheck, Layers } from 'lucide-react';
import React, { useState } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = (val: string) => {
    setSelectedService(val);
    setStep(2);
  };
  const prevStep = () => setStep(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const nombre = (e.currentTarget as HTMLFormElement).querySelector<HTMLInputElement>('input[type="text"]')?.value || '';
    const whatsapp = (e.currentTarget as HTMLFormElement).querySelector<HTMLInputElement>('input[type="tel"]')?.value || '';
    const descripcion = (e.currentTarget as HTMLFormElement).querySelector('textarea')?.value || '';
    const mensaje = `Hola BRIXA HOME & BUILD, me interesa cotizar un proyecto.%0A%0A*Servicio:* ${selectedService}%0A*Nombre:* ${nombre}%0A*WhatsApp:* ${whatsapp}%0A*Descripción:* ${descripcion}`;
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      setStep(1);
      window.open(`https://wa.me/522223028042?text=${mensaje}`, '_blank');
    }, 1500);
  };

  const services = [
    { icon: Building2, label: 'Desarrollo Habitacional', val: 'Desarrollo Habitacional' },
    { icon: Home, label: 'Residencial desde Cero', val: 'Residencial desde Cero' },
    { icon: Calculator, label: 'Proyecto Comercial', val: 'Proyecto Comercial' },
    { icon: Hammer, label: 'Remodelación / Acabados', val: 'Remodelación / Acabados' },
    { icon: ShieldCheck, label: 'DRO - Dirección Responsable de Obra', val: 'DRO - Dirección Responsable de Obra' },
    { icon: Layers, label: 'Logotipos y Branding Empresarial', val: 'Logotipos y Branding Empresarial' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-dark/90 backdrop-blur-md" />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-2xl bg-dark border border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 blur-[80px] pointer-events-none" />
            <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-primary transition-colors z-10">
              <X size={24} />
            </button>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <Calculator className="text-primary" size={20} />
                <span className="text-premium-label">COTIZACIÓN_ESTRATÉGICA</span>
              </div>

              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <h2 className="text-3xl md:text-5xl uppercase tracking-tight leading-[1.1]">
                    ¿QUÉ TIPO DE PROYECTO <br />
                    <span className="text-brand border-b-2 border-primary/20 pb-1">BUSCAS DESARROLLAR?</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => nextStep(item.val)}
                        className="group flex flex-col items-center gap-4 p-8 border border-white/5 bg-white/[0.02] hover:border-primary/40 hover:bg-white/[0.05] transition-all text-center"
                      >
                        <item.icon className="text-primary/40 group-hover:text-primary transition-colors" size={28} />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-white transition-colors leading-relaxed">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-bold">Servicio seleccionado</span>
                    <p className="text-white/60 text-sm mt-1 uppercase tracking-widest">{selectedService}</p>
                  </div>
                  <h2 className="text-3xl md:text-5xl uppercase tracking-tight leading-[1.1]">
                    DETALLES DE <br />
                    <span className="text-brand border-b-2 border-primary/20 pb-1">LA VISIÓN</span>
                  </h2>
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
                      <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Descripción del Proyecto</label>
                      <textarea required rows={3} className="w-full bg-white/[0.03] border border-white/10 p-4 outline-none focus:border-primary text-sm font-content text-white resize-none" />
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={prevStep} className="flex-1 py-4 border border-white/10 text-white/40 uppercase tracking-widest text-[10px] hover:text-white transition-colors">
                        Atrás
                      </button>
                      <button disabled={isSubmitting} type="submit" className="flex-[2] py-5 bg-primary text-white uppercase tracking-[0.3em] font-display text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-2xl">
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
