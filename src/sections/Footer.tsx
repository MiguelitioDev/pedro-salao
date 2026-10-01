import React from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { businessConfig, createWhatsAppLink } from '../data/businessConfig';
import { InstagramIcon } from '../components/InstagramIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070707] text-[#808080] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-6">
            <span className="font-editorial text-2xl tracking-[0.2em] uppercase font-semibold text-white block">
              {businessConfig.name}
            </span>
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#C9A86A] block mt-1">
              {businessConfig.tagline} • {businessConfig.city}, {businessConfig.state}
            </span>
            <p className="text-xs text-[#909090] max-w-md mt-4 font-light leading-relaxed">
              Espaço dedicado à valorização da beleza feminina através de técnicas avançadas de mechas, loiros iluminados e produções personalizadas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white font-medium block mb-4">
              Navegação
            </span>
            <ul className="space-y-2.5 text-xs text-[#A0A0A0]">
              <li>
                <a href="#sobre" className="hover:text-[#C9A86A] transition-colors">
                  Sobre o Conceito
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#C9A86A] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#C9A86A] transition-colors">
                  Portfólio de Inspirações
                </a>
              </li>
              <li>
                <a href="#transformacoes" className="hover:text-[#C9A86A] transition-colors">
                  Transformações
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#C9A86A] transition-colors">
                  Localização em Aquiraz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Social */}
          <div className="md:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white font-medium block mb-4">
              Atendimento & Redes
            </span>
            <p className="text-xs text-[#A0A0A0] leading-relaxed mb-3">
              {businessConfig.address.formatted}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 hover:border-[#C9A86A] flex items-center justify-center text-white hover:text-[#C9A86A] transition-colors"
                aria-label="Instagram Pedro Freitas Conceito"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 hover:border-[#C9A86A] flex items-center justify-center text-white hover:text-[#C9A86A] transition-colors"
                aria-label="WhatsApp Pedro Freitas Conceito"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                className="w-9 h-9 border border-white/10 hover:border-[#C9A86A] flex items-center justify-center text-white hover:text-[#C9A86A] transition-colors ml-auto"
                aria-label="Voltar ao topo da página"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Prototype Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#606060] gap-4">
          <p>
            © 2026 {businessConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-center sm:text-right">
            Protótipo de apresentação visual • Aquiraz, Ceará, Brasil.
          </p>
        </div>

      </div>
    </footer>
  );
};
