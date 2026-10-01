import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Sliders } from 'lucide-react';
import { businessConfig, createWhatsAppLink } from '../data/businessConfig';

export const BeforeAfterSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const primaryItem = businessConfig.beforeAfter[0];

  return (
    <section id="transformacoes" className="py-20 lg:py-28 bg-[#0A0A0A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#C9A86A] font-semibold block mb-2">
            Resultados & Evolução
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white leading-tight mb-4">
            Transformações que falam por si.
          </h2>
          <p className="text-sm sm:text-base text-[#B8B8B8] font-light leading-relaxed">
            A harmonia entre respeito à integridade dos fios e a conquista da luminosidade desejada.
          </p>
        </div>

        {/* Interactive Comparison Feature Card */}
        <div className="bg-[#141414] border border-white/10 p-6 sm:p-10 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Split Comparison Slider Container */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[360px] sm:h-[450px] overflow-hidden select-none border border-white/10">
                {/* AFTER Image (Full background) */}
                <img
                  src={primaryItem.afterImage}
                  alt={`Depois da transformação: ${primaryItem.title}`}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[1.02]"
                  loading="eager"
                />
                <span className="absolute top-4 right-4 z-10 bg-[#0A0A0A]/85 text-[#C9A86A] text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 border border-white/10">
                  Depois (Iluminado)
                </span>

                {/* BEFORE Image (Clipped overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={primaryItem.beforeImage}
                    alt={`Antes da transformação: ${primaryItem.title}`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="eager"
                  />
                  <span className="absolute top-4 left-4 z-10 bg-[#0A0A0A]/85 text-[#B8B8B8] text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 border border-white/10">
                    Antes (Fundo)
                  </span>
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-[#C9A86A] pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0A0A0A] border-2 border-[#C9A86A] flex items-center justify-center shadow-lg text-[#C9A86A]">
                    <Sliders className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Range Input for accessibility and tactile control */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  aria-label="Controle de visualização antes e depois"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[#808080] mt-3">
                <span>← Arraste para comparar Antes e Depois →</span>
                <span>{primaryItem.category}</span>
              </div>
            </div>

            {/* Information & Consultation Column */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86A] font-semibold block mb-2">
                  Estudo de Caso
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium mb-4">
                  {primaryItem.title}
                </h3>
                <p className="text-sm text-[#B8B8B8] font-light leading-relaxed mb-6">
                  {primaryItem.treatment}. Clareamento com mechas desenhadas estrategicamente para valorizar a luminosidade facial sem marcas de transição.
                </p>

                <div className="p-4 bg-[#0D0D0D] border border-white/5 mb-6 text-xs text-[#909090]">
                  <p className="font-medium text-white mb-1">Nota de transparência:</p>
                  <p>{primaryItem.note}</p>
                </div>
              </div>

              <div>
                <a
                  href={createWhatsAppLink('Olá! Gostaria de consultar sobre uma transformação capilar no Pedro Freitas Conceito.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#0A0A0A] bg-[#C9A86A] hover:bg-[#D7BC85] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Avaliar Minha Transformação</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Second Transformation Card - Side by Side comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessConfig.beforeAfter.map((item, idx) => (
            <div key={item.id} className="bg-[#141414] border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A86A] font-medium">
                    Exemplo {idx + 1} • {item.category}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#777777]">
                    Referência
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="relative">
                    <img
                      src={item.beforeImage}
                      alt={`Antes: ${item.title}`}
                      className="w-full h-48 object-cover filter brightness-90"
                      loading="eager"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/80 text-[9px] uppercase tracking-wider text-[#A0A0A0] px-2 py-0.5">
                      Antes
                    </span>
                  </div>

                  <div className="relative">
                    <img
                      src={item.afterImage}
                      alt={`Depois: ${item.title}`}
                      className="w-full h-48 object-cover filter brightness-100"
                      loading="eager"
                    />
                    <span className="absolute bottom-2 left-2 bg-[#C9A86A] text-[9px] uppercase tracking-wider text-[#0A0A0A] font-bold px-2 py-0.5">
                      Depois
                    </span>
                  </div>
                </div>

                <h4 className="font-editorial text-lg text-white font-medium mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#909090] leading-relaxed mb-4">
                  {item.treatment}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-[#707070]">
                  Diagnóstico sob medida
                </span>
                <a
                  href={createWhatsAppLink(`Olá! Gostaria de consultar sobre o procedimento de ${item.category}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C9A86A] hover:text-[#D7BC85] uppercase tracking-wider font-semibold"
                >
                  <span>Consultar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
