import React from 'react';
import { MessageCircle, ArrowDown, MapPin } from 'lucide-react';
import { businessConfig, createWhatsAppLink } from '../data/businessConfig';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 lg:py-28 overflow-hidden bg-[#0A0A0A]">
      {/* Background Photography with Sophisticated Editorial Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={businessConfig.hero.image}
          alt="Loiro iluminado com acabamento sofisticado em Pedro Freitas Conceito Aquiraz"
          className="w-full h-full object-cover object-center lg:object-[center_35%] filter brightness-[0.75] contrast-[1.05]"
          fetchPriority="high"
        />
        {/* Multilayer gradient: deep dark left for contrast, soft overlay across */}
        <div className="absolute inset-0 img-hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-white/10 bg-[#0A0A0A]/70 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-[#C9A86A]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A86A] font-medium">
              {businessConfig.hero.eyebrow}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.08] tracking-tight mb-6">
            Loiros iluminados que{' '}
            <span className="italic font-normal text-[#C9A86A]">
              valorizam
            </span>{' '}
            a sua beleza.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-[#D0D0D0] font-light leading-relaxed mb-10 max-w-xl">
            {businessConfig.hero.subtitle}
          </p>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#0A0A0A] bg-[#C9A86A] hover:bg-[#D7BC85] transition-all duration-300 shadow-xl shadow-black/40 hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Agendar atendimento pelo WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{businessConfig.hero.primaryCta}</span>
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs uppercase tracking-[0.2em] font-medium text-white border border-white/20 hover:border-[#C9A86A] hover:text-[#C9A86A] bg-[#0A0A0A]/40 backdrop-blur-sm transition-all duration-300"
            >
              <span>{businessConfig.hero.secondaryCta}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Trust Markers Bar */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-[#888888] mb-1">
                Especialidade
              </span>
              <span className="text-sm font-medium text-white">
                Mechas & Loiros
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-[#888888] mb-1">
                Localização
              </span>
              <span className="text-sm font-medium text-white">
                Centro • Aquiraz
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block text-[10px] uppercase tracking-widest text-[#888888] mb-1">
                Atendimento
              </span>
              <span className="text-sm font-medium text-white">
                Exclusivo com Hora Marcada
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
