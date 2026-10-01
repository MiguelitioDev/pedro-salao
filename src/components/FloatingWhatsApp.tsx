import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createWhatsAppLink } from '../data/businessConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 4 seconds of landing on desktop
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end"
    >
      {/* Floating Prompt Notification Bubble (Desktop only to prevent mobile clutter) */}
      {showTooltip && (
        <div className="hidden sm:block relative mb-3 max-w-[270px] bg-[#141414] border border-[#C9A86A]/40 text-white p-3.5 shadow-2xl rounded-none animate-fadeIn">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Fechar mensagem de WhatsApp"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="pr-4">
            <span className="block text-[10px] uppercase tracking-wider text-[#C9A86A] font-semibold">
              Atendimento Online
            </span>
            <p className="text-xs text-[#D8D8D8] mt-1 leading-snug">
              Deseja consultar horários ou tirar dúvidas sobre o seu cabelo?
            </p>
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-xs font-medium text-[#C9A86A] underline underline-offset-2 hover:text-[#D7BC85]"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Main Floating WhatsApp Action Button */}
      <a
        href={createWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 sm:gap-3 px-3.5 py-3 sm:px-4 sm:py-3.5 bg-[#141414] hover:bg-[#1a1a1a] text-white border border-[#C9A86A]/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-[1.03] active:scale-95"
        aria-label="Abrir conversa no WhatsApp com Pedro Freitas Conceito"
      >
        {/* Subtle glowing beacon */}
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A86A] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[#C9A86A]"></span>
        </span>

        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A86A] group-hover:scale-110 transition-transform" />

        <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] font-semibold text-white">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
