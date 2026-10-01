import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { businessConfig, createWhatsAppLink } from '../data/businessConfig';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-[#0D0D0D] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#C9A86A] font-semibold block mb-2">
            Localização Privilegiada
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white leading-tight mb-4">
            Estamos no centro de Aquiraz.
          </h2>
          <p className="text-sm sm:text-base text-[#B8B8B8] font-light leading-relaxed">
            Localização central com fácil acesso para clientes de Aquiraz, Porto das Dunas, Eusébio e região metropolitana.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-[#141414] border border-white/10 p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#C9A86A]/40 bg-[#0A0A0A] flex items-center justify-center text-[#C9A86A] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#888888] block mb-1">
                    Endereço
                  </span>
                  <p className="text-base text-white font-medium leading-snug">
                    {businessConfig.address.street}
                  </p>
                  <p className="text-sm text-[#A0A0A0]">
                    {businessConfig.address.neighborhood} — {businessConfig.address.city}, {businessConfig.address.state}
                  </p>
                </div>
              </div>

              {/* Hours Block */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#C9A86A]/40 bg-[#0A0A0A] flex items-center justify-center text-[#C9A86A] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#888888] block mb-1">
                    Funcionamento
                  </span>
                  <p className="text-sm text-white font-medium">
                    {businessConfig.address.hoursNotice}
                  </p>
                  <p className="text-xs text-[#808080] mt-0.5">
                    Atendimento com agendamento prévio.
                  </p>
                </div>
              </div>

              {/* Contact Block */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#C9A86A]/40 bg-[#0A0A0A] flex items-center justify-center text-[#C9A86A] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#888888] block mb-1">
                    WhatsApp & Contato
                  </span>
                  <p className="text-sm text-white font-medium">
                    {businessConfig.contact.phoneFormatted}
                  </p>
                  <p className="text-xs text-[#808080] mt-0.5">
                    {businessConfig.contact.instagramHandle}
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-8 border-t border-white/10 mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={businessConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#0A0A0A] bg-[#C9A86A] hover:bg-[#D7BC85] transition-colors"
                aria-label="Abrir rota no Google Maps para Rua Otoni Sá 374 Centro Aquiraz"
              >
                <Navigation className="w-4 h-4" />
                <span>Como Chegar</span>
              </a>

              <a
                href={createWhatsAppLink('Olá! Gostaria de saber como agendar um horário no Pedro Freitas Conceito em Aquiraz.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-white border border-white/20 hover:border-[#C9A86A] hover:text-[#C9A86A] transition-colors"
              >
                <span>Consultar Vagas</span>
              </a>
            </div>

          </div>

          {/* Right Visual Map Card */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 overflow-hidden relative min-h-[380px]">
            {/* Embedded Interactive OpenStreetMap / Google Location View */}
            <iframe
              title="Mapa de localização Pedro Freitas Conceito em Aquiraz"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8052163937175!2d-38.3934375!3d-3.905625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74f5146c82305%3A0x6b787dcfa526a310!2sR.%20Otoni%20S%C3%A1%2C%20374%20-%20Centro%2C%20Aquiraz%20-%20CE%2C%2061700-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px', filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.85)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            
            {/* Overlay Banner */}
            <div className="absolute top-4 left-4 bg-[#0A0A0A]/90 border border-white/10 p-3 backdrop-blur-sm pointer-events-none max-w-xs">
              <span className="text-[10px] uppercase tracking-wider text-[#C9A86A] font-semibold block">
                Ponto de Referência
              </span>
              <p className="text-xs text-white">
                Rua Otoni Sá, 374 • Centro de Aquiraz
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
