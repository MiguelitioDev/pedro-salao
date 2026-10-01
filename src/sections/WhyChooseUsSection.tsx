import React from 'react';
import { UserCheck, Target, Sparkles, MapPin } from 'lucide-react';
import { businessConfig } from '../data/businessConfig';

export const WhyChooseUsSection: React.FC = () => {
  const icons = [
    <UserCheck className="w-5 h-5 text-[#C9A86A]" />,
    <Target className="w-5 h-5 text-[#C9A86A]" />,
    <Sparkles className="w-5 h-5 text-[#C9A86A]" />,
    <MapPin className="w-5 h-5 text-[#C9A86A]" />,
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0D0D0D] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#C9A86A] font-semibold block mb-2">
            Critérios de Excelência
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white leading-tight">
            Por que escolher o Pedro Freitas Conceito
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businessConfig.whyChooseUs.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#141414] border border-white/10 hover:border-[#C9A86A]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 border border-white/10 bg-[#0A0A0A] flex items-center justify-center mb-6">
                  {icons[idx]}
                </div>

                <h3 className="font-editorial text-2xl text-white font-medium mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#9E9E9E] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#606060]">
                <span>Pilar {idx + 1}</span>
                <span className="w-6 h-[1px] bg-[#C9A86A]/40" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
