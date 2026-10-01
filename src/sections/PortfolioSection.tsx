import React, { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { businessConfig, type PortfolioItem } from '../data/businessConfig';
import { LightboxModal } from '../components/LightboxModal';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'Todos'
    ? businessConfig.portfolio
    : businessConfig.portfolio.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#0D0D0D] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#C9A86A] font-semibold">
              Galeria Conceitual
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-light text-white mb-4">
            Inspirações & Acabamentos
          </h2>

          <p className="text-sm sm:text-base text-[#9E9E9E] font-light leading-relaxed">
            Uma curadoria visual de tons, texturas e produções que representam o padrão estético do Pedro Freitas Conceito.
          </p>
          
          <p className="text-[11px] text-[#707070] mt-2 italic">
            * Referências visuais selecionadas para a proposta estética deste protótipo.
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12" role="tablist">
          {businessConfig.portfolioCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-[0.18em] transition-all duration-300 font-medium ${
                  isActive
                    ? 'bg-[#C9A86A] text-[#0A0A0A] font-semibold shadow-md'
                    : 'bg-[#141414] text-[#B8B8B8] hover:text-white hover:bg-[#1A1A1A] border border-white/5'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            const isTall = item.aspectRatio === 'tall' || index % 3 === 0;
            return (
              <div
                key={item.id}
                className="group relative cursor-pointer overflow-hidden bg-[#141414] border border-white/10 hover:border-[#C9A86A]/50 transition-all duration-300"
                onClick={() => setSelectedItem(item)}
              >
                <div className={`w-full overflow-hidden ${isTall ? 'h-[440px]' : 'h-[360px]'}`}>
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.category}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                </div>

                {/* Editorial Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/20 to-transparent p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A86A] bg-[#0A0A0A]/80 px-2.5 py-1 border border-white/10">
                      {item.category}
                    </span>
                    
                    <span className="p-2 bg-[#0A0A0A]/80 text-[#C9A86A] border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C9A86A] block mb-1">
                      {item.label}
                    </span>
                    <h3 className="font-editorial text-xl sm:text-2xl text-white font-medium mb-1">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-xs text-[#CCCCCC] font-light line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Portfolio Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#808080]">
            Clique em qualquer imagem para inspecionar os detalhes e consultar disponibilidade desse estilo via WhatsApp.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <LightboxModal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          imageUrl={selectedItem.image}
          title={selectedItem.title}
          category={selectedItem.category}
          label={selectedItem.label}
          description={selectedItem.description}
        />
      )}
    </section>
  );
};
