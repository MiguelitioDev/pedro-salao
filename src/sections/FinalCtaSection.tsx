import React from 'react';
import { MessageCircle, CalendarCheck, Shield } from 'lucide-react';
import { businessConfig, createWhatsAppLink } from '../data/businessConfig';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0A] border-t border-white/10 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-white/10" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Monogram / Icon */}
        <div className="w-14 h-14 mx-auto mb-8 border border-[#C9A86A]/40 bg-[#141414] flex items-center justify-center text-[#C9A86A]">
          <CalendarCheck className="w-6 h-6" />
        </div>

        {/* Eyebrow */}
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#C9A86A] font-semibold block mb-4">
          Agendamento & Consultoria
        </span>

        {/* Headline */}
        <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
          Seu próximo cabelo começa com uma conversa.
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-[#B8B8B8] font-light leading-relaxed mb-10 max-w-2xl mx-auto">
          Fale com o Pedro Freitas Conceito e consulte disponibilidade para o seu atendimento.
        </p>

        {/* Main WhatsApp CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 text-xs uppercase tracking-[0.22em] font-semibold text-[#0A0A0A] bg-[#C9A86A] hover:bg-[#D7BC85] transition-all duration-300 shadow-xl shadow-[#C9A86A]/10 active:scale-95"
            aria-label="Agendar atendimento pelo WhatsApp com Pedro Freitas Conceito"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar pelo WhatsApp</span>
          </a>

          <a
            href={businessConfig.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium text-white border border-white/20 hover:border-[#C9A86A] hover:text-[#C9A86A] transition-colors"
          >
            <span>Ver Localização</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-[#707070]">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#C9A86A]" />
            <span>Avaliação capilar responsável</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
            <span>Atendimento com hora marcada</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
            <span>Centro de Aquiraz — CE</span>
          </div>
        </div>

      </div>
    </section>
  );
};
