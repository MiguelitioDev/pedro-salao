import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { businessConfig } from '../data/businessConfig';

export const TrustSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#0D0D0D] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative border border-white/10 p-3 bg-[#111111]">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
                alt="Ambiente e atendimento técnico em Pedro Freitas Conceito"
                className="w-full h-[400px] sm:h-[480px] object-cover filter contrast-[1.05]"
                loading="lazy"
              />
              {/* Subtle architectural badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#0A0A0A] border border-[#C9A86A]/40 p-5 shadow-2xl max-w-[220px]">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86A] font-semibold mb-1">
                  Atendimento
                </p>
                <p className="text-xs text-[#CCCCCC] leading-snug">
                  Cuidado individualizado e respeito integral à saúde capilar.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Statement & Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#C9A86A] font-semibold block mb-3">
              Posicionamento Conceitual
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              {businessConfig.trust.heading}
            </h2>

            <p className="text-base sm:text-lg text-[#B8B8B8] font-light leading-relaxed mb-10">
              {businessConfig.trust.statement}
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-none border border-[#C9A86A]/30 flex items-center justify-center text-[#C9A86A] mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Técnica & Precisão
                </h3>
                <p className="text-xs text-[#999999] leading-relaxed">
                  Avaliação da estrutura do fio antes de qualquer procedimento clareador.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-none border border-[#C9A86A]/30 flex items-center justify-center text-[#C9A86A] mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Preservação Capilar
                </h3>
                <p className="text-xs text-[#999999] leading-relaxed">
                  Tratamentos associados para garantir toque sedoso e brilho duradouro.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-none border border-[#C9A86A]/30 flex items-center justify-center text-[#C9A86A] mb-3">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Harmonia Visual
                </h3>
                <p className="text-xs text-[#999999] leading-relaxed">
                  Cores que valorizam o tom de pele, contraste natural e estilo de cada cliente.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
