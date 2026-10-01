import React, { useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from '../data/businessConfig';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  category: string;
  description?: string;
  label?: string;
}

export const LightboxModal: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  category,
  description,
  label,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const consultationMessage = `Olá! Vi a referência de "${title}" (${category}) no site do Pedro Freitas Conceito e gostaria de consultar informações para o meu cabelo.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visualização detalhada: ${title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#111111] border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 bg-[#0A0A0A]/80 text-white/80 hover:text-white border border-white/10 hover:border-[#C9A86A] transition-colors"
          aria-label="Fechar visualização"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Box */}
        <div className="w-full md:w-3/5 bg-black flex items-center justify-center min-h-[320px] max-h-[70vh] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover md:object-contain"
            loading="lazy"
          />
        </div>

        {/* Content Box */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#141414]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86A] font-semibold">
                {category}
              </span>
              {label && (
                <span className="text-[10px] uppercase tracking-wider text-[#888888] border border-white/10 px-2 py-0.5">
                  {label}
                </span>
              )}
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium mb-3 leading-snug">
              {title}
            </h3>

            {description && (
              <p className="text-sm text-[#B8B8B8] leading-relaxed mb-6 font-light">
                {description}
              </p>
            )}

            <div className="text-[11px] text-[#707070] border-t border-white/5 pt-3 mb-6">
              * Imagem de referência visual e inspiração estética selecionada para o protótipo.
            </div>
          </div>

          <div>
            <a
              href={createWhatsAppLink(consultationMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#0A0A0A] bg-[#C9A86A] hover:bg-[#D7BC85] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consultar este estilo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
