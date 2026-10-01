import React from 'react';
import { MessageCircle, Check, ArrowRight } from 'lucide-react';
import { businessConfig, createWhatsAppLink } from '../data/businessConfig';

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#C9A86A] font-semibold block mb-2">
              Menu de Especialidades
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white leading-tight">
              Serviços pensados para a sua autenticidade
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#8E8E93] max-w-sm font-light">
            Procedimentos realizados com produtos de alta performance e consultoria de imagem capilar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {businessConfig.services.map((service) => (
            <article
              key={service.id}
              className="group bg-[#141414] border border-white/10 hover:border-[#C9A86A]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Image & Number Banner */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={`Serviço de ${service.title} em Aquiraz`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 bg-[#0A0A0A]/85 backdrop-blur-sm border border-white/10 px-3 py-1">
                  <span className="font-editorial text-lg text-[#C9A86A] font-semibold">
                    {service.number}
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86A] font-medium block">
                    {service.subtitle}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-[#B8B8B8] leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8" aria-label={`Destaques de ${service.title}`}>
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-[#999999]">
                        <Check className="w-3.5 h-3.5 text-[#C9A86A] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with WhatsApp Booking CTA */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-[#777777] uppercase tracking-wider">
                    Valores sob consulta
                  </span>

                  <a
                    href={createWhatsAppLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#C9A86A] hover:text-[#D7BC85] transition-colors py-2 group-hover:translate-x-1"
                    aria-label={`${service.ctaLabel} para ${service.title}`}
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global Service Booking Prompt */}
        <div className="mt-14 p-6 sm:p-8 bg-[#101010] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-medium text-white mb-1">
              Dúvidas sobre qual técnica é ideal para o seu cabelo?
            </h4>
            <p className="text-xs text-[#8E8E93]">
              Envie fotos de referência e receba uma orientação inicial personalizada pelo WhatsApp.
            </p>
          </div>
          <a
            href={createWhatsAppLink('Olá! Gostaria de uma avaliação inicial para saber qual técnica é mais indicada para o meu cabelo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.16em] font-semibold text-[#0A0A0A] bg-white hover:bg-[#C9A86A] transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fazer Avaliação Prévia</span>
          </a>
        </div>

      </div>
    </section>
  );
};
