import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { InstagramIcon } from '../components/InstagramIcon';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-20 lg:py-28 bg-[#0A0A0A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-[#C9A86A]">
              <InstagramIcon className="w-4 h-4" />
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold">
                Social Feed
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white">
              Veja mais no Instagram
            </h2>
            <p className="text-sm text-[#8E8E93] mt-2">
              Acompanhe o dia a dia, bastidores e novidades em{' '}
              <span className="text-[#C9A86A] font-medium">{businessConfig.contact.instagramHandle}</span>
            </p>
          </div>

          <a
            href={businessConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-white border border-[#C9A86A]/40 hover:border-[#C9A86A] hover:bg-[#C9A86A]/10 transition-colors whitespace-nowrap self-start sm:self-auto"
            aria-label="Abrir Instagram @pedrofreitasconceito em nova aba"
          >
            <InstagramIcon className="w-4 h-4 text-[#C9A86A]" />
            <span>Ver Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A86A]" />
          </a>
        </div>

        {/* Instagram Visual Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {businessConfig.instagramFeed.map((post) => (
            <a
              key={post.id}
              href={businessConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#141414] border border-white/5 block"
              aria-label={post.alt}
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                <InstagramIcon className="w-6 h-6 text-[#C9A86A]" />
              </div>
            </a>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-8 flex items-center justify-between text-xs text-[#707070]">
          <span>Feed curado para visualização no protótipo.</span>
          <a
            href={businessConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A86A] hover:underline"
          >
            {businessConfig.contact.instagramHandle}
          </a>
        </div>

      </div>
    </section>
  );
};
