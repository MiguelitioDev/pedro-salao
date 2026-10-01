import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { businessConfig, createWhatsAppLink } from '../data/businessConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Transformações', href: '#transformacoes' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Localização', href: '#localizacao' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Monogram */}
          <a
            href="#"
            className="group flex flex-col focus:outline-none"
            aria-label="PEDRO FREITAS Conceito - Início"
          >
            <span className="font-editorial text-xl sm:text-2xl tracking-[0.22em] uppercase font-semibold text-white group-hover:text-[#C9A86A] transition-colors">
              PEDRO FREITAS
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-[#C9A86A] font-light -mt-0.5">
              Conceito • Aquiraz
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-[#B8B8B8] hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A86A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={businessConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-none text-xs uppercase tracking-[0.18em] font-semibold text-[#0A0A0A] bg-[#C9A86A] hover:bg-[#D7BC85] transition-all duration-300 active:scale-95 shadow-md shadow-[#C9A86A]/10 border border-[#C9A86A]"
              aria-label="Agendar atendimento pelo WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={businessConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 text-[#C9A86A] border border-[#C9A86A]/30 hover:bg-[#C9A86A]/10 transition-colors"
              aria-label="Abrir WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#C9A86A] focus:outline-none transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0D0D] border-b border-white/10 px-6 py-6 transition-all duration-300 animate-fadeIn">
          <nav className="flex flex-col space-y-4" aria-label="Navegação Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium tracking-wider text-[#E0E0E0] hover:text-[#C9A86A] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0A0A0A] bg-[#C9A86A] hover:bg-[#D7BC85] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar pelo WhatsApp</span>
              </a>
              <p className="text-center text-xs text-[#808080] mt-3">
                {businessConfig.address.formatted}
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
