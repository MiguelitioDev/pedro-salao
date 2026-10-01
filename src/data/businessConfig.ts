export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  whatsappMessage: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Todos' | 'Iluminados' | 'Loiros' | 'Transformações' | 'Noivas' | 'Beauty';
  label: string;
  image: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
  description?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  treatment: string;
  note: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  category: string;
  city: string;
  state: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    formatted: string;
    googleMapsUrl: string;
    hoursNotice: string;
  };
  contact: {
    phoneFormatted: string;
    phoneRaw: string;
    whatsappUrl: string;
    whatsappDefaultMessage: string;
    instagramHandle: string;
    instagramUrl: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
  };
  trust: {
    heading: string;
    statement: string;
    pillars: {
      title: string;
      description: string;
    }[];
  };
  services: ServiceItem[];
  portfolioCategories: ('Todos' | 'Iluminados' | 'Loiros' | 'Transformações' | 'Noivas' | 'Beauty')[];
  portfolio: PortfolioItem[];
  beforeAfter: BeforeAfterItem[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  instagramFeed: {
    id: string;
    image: string;
    alt: string;
    likesApprox?: string;
  }[];
}

const DEFAULT_WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Vim pelo site do PEDRO FREITAS Conceito e gostaria de consultar disponibilidade para um atendimento.'
);

export const businessConfig: BusinessConfig = {
  name: 'PEDRO FREITAS Conceito',
  tagline: 'Salão de Beleza & Hair Design',
  category: 'Salão de Beleza Premium',
  city: 'Aquiraz',
  state: 'CE',
  address: {
    street: 'Rua Otoni Sá, 374',
    neighborhood: 'Centro',
    city: 'Aquiraz',
    state: 'CE',
    formatted: 'Rua Otoni Sá, 374, Centro, Aquiraz - CE',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Otoni+S%C3%A1%2C+374%2C+Centro%2C+Aquiraz+-+CE',
    hoursNotice: 'Horários e disponibilidade sob consulta.',
  },
  contact: {
    phoneFormatted: '(85) 98578-7242',
    phoneRaw: '5585985787242',
    whatsappUrl: `https://wa.me/5585985787242?text=${DEFAULT_WHATSAPP_MESSAGE}`,
    whatsappDefaultMessage: 'Olá! Vim pelo site do PEDRO FREITAS Conceito e gostaria de consultar disponibilidade para um atendimento.',
    instagramHandle: '@pedrofreitasconceito',
    instagramUrl: 'https://www.instagram.com/pedrofreitasconceito/',
  },
  hero: {
    eyebrow: 'AQUIRAZ • CEARÁ',
    title: 'Loiros iluminados que valorizam a sua beleza.',
    subtitle: 'Beleza, técnica e sofisticação para transformar seu cabelo em um resultado que combina com você.',
    primaryCta: 'Agendar pelo WhatsApp',
    secondaryCta: 'Ver portfólio',
    // Editorial blonde portrait with rich, warm lighting and depth
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85',
  },
  trust: {
    heading: 'Mais do que um salão. Uma experiência.',
    statement:
      'No coração de Aquiraz, um espaço concebido para quem valoriza a excelência no cuidado capilar. Cada procedimento é conduzido com rigor técnico, análise minuciosa da fibra capilar e olhar estético apurado, garantindo resultados sofisticados e duradouros.',
    pillars: [
      {
        title: 'Técnica e Precisão',
        description: 'Processos estruturados de descoloração e tonalização respeitando a saúde integral dos fios.',
      },
      {
        title: 'Personalização Exclusiva',
        description: 'Tons e mechas desenvolvidos sob medida para valorizar os traços e a harmonia de cada cliente.',
      },
      {
        title: 'Ambiente Sofisticado',
        description: 'Espaço minimalista e acolhedor projetado para proporcionar conforto durante toda a sua produção.',
      },
    ],
  },
  services: [
    {
      id: 'iluminado',
      number: '01',
      title: 'Iluminado',
      subtitle: 'Mechas & Dimensão',
      description: 'Mechas e técnicas de iluminação para criar profundidade, dimensão e luminosidade natural.',
      highlights: ['Contorno personalizado', 'Transição suave', 'Proteção da fibra capilar'],
      ctaLabel: 'Consultar disponibilidade',
      whatsappMessage: 'Olá! Gostaria de consultar disponibilidade para o serviço de Iluminado / Mechas no Pedro Freitas Conceito.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'correcao-de-cor',
      number: '02',
      title: 'Correção de Cor',
      subtitle: 'Harmonia & Recuperação',
      description: 'Recuperação e transformação da cor com foco em harmonia visual, neutralização de reflexos e cuidado.',
      highlights: ['Diagnóstico capilar', 'Neutralização precisa', 'Tratamento reconstrutor'],
      ctaLabel: 'Agendar avaliação',
      whatsappMessage: 'Olá! Gostaria de agendar uma avaliação para Correção de Cor no Pedro Freitas Conceito.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'noivas-madrinhas',
      number: '03',
      title: 'Noivas & Madrinhas',
      subtitle: 'Produção Exclusiva',
      description: 'Produção pensada para momentos especiais, com acabamento sofisticado e fixação impecável.',
      highlights: ['Penteados editoriais', 'Cronograma do grande dia', 'Atendimento com hora marcada'],
      ctaLabel: 'Consultar datas',
      whatsappMessage: 'Olá! Gostaria de consultar datas e informações para produção de Noivas & Madrinhas no Pedro Freitas Conceito.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'formatura-beauty',
      number: '04',
      title: 'Formatura & Beauty',
      subtitle: 'Eventos & Ensaios',
      description: 'Produção de beleza para eventos, ensaios fotográficos e ocasiões especiais que pedem elegância.',
      highlights: ['Finalização de alta durabilidade', 'Design de styling', 'Harmonia estética'],
      ctaLabel: 'Consultar disponibilidade',
      whatsappMessage: 'Olá! Gostaria de consultar disponibilidade para produção de Formatura / Beauty no Pedro Freitas Conceito.',
      image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80',
    },
  ],
  portfolioCategories: ['Todos', 'Iluminados', 'Loiros', 'Transformações', 'Noivas', 'Beauty'],
  portfolio: [
    {
      id: 'p1',
      title: 'Morena Iluminada Caramelo',
      category: 'Iluminados',
      label: 'Referência de Iluminado',
      description: 'Tons quentes de avelã e caramelo com transição suave na raiz.',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=85',
      aspectRatio: 'tall',
    },
    {
      id: 'p2',
      title: 'Loiro Pérola com Contorno Frontal',
      category: 'Loiros',
      label: 'Referência de Loiro',
      description: 'Clareamento uniforme em tom perolado com pontos de luz estratégicos.',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=85',
      aspectRatio: 'wide',
    },
    {
      id: 'p3',
      title: 'Penteado Editorial para Noivas',
      category: 'Noivas',
      label: 'Produção de Noivas',
      description: 'Penteado texturizado com acabamento leve e alta durabilidade.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
      aspectRatio: 'tall',
    },
    {
      id: 'p4',
      title: 'Correção e Alinhamento de Tom',
      category: 'Transformações',
      label: 'Transformação & Cor',
      description: 'Neutralização de tonalidades antigas e restauração do brilho natural.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85',
      aspectRatio: 'square',
    },
    {
      id: 'p5',
      title: 'Loiro Baunilha Acetinado',
      category: 'Loiros',
      label: 'Referência de Cor',
      description: 'Nuances frias e neutras com profundidade e preservação da fibra.',
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=85',
      aspectRatio: 'tall',
    },
    {
      id: 'p6',
      title: 'Styling & Ondas para Formatura',
      category: 'Beauty',
      label: 'Produção de Beleza',
      description: 'Ondas volumosas e polimento com efeito glow.',
      image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=900&q=85',
      aspectRatio: 'wide',
    },
  ],
  beforeAfter: [
    {
      id: 'ba1',
      title: 'Dimensão e Luminosidade em Fios Opacos',
      category: 'Iluminado Conceito',
      treatment: 'Técnica de Mechas com Preservação de Fundo',
      beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80',
      afterImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=700&q=80',
      note: 'Referência visual demonstrativa de transformação capilar no protótipo.',
    },
    {
      id: 'ba2',
      title: 'Correção de Tonalidade & Loiro Perolado',
      category: 'Correção & Loiro',
      treatment: 'Neutralização de Reflexos Quentes e Matização Fria',
      beforeImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80',
      afterImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=700&q=80',
      note: 'Referência visual demonstrativa de transformação capilar no protótipo.',
    },
  ],
  whyChooseUs: [
    {
      title: 'Atendimento Personalizado',
      description: 'Cada atendimento inicia com uma escuta atenta e diagnóstico preciso das necessidades do seu cabelo.',
    },
    {
      title: 'Foco em Resultado',
      description: 'Compromisso com acabamento de alto padrão, cor duradoura e preservação da textura e integridade dos fios.',
    },
    {
      title: 'Experiência Sofisticada',
      description: 'Ambiente intimista e calmo no centro da cidade, proporcionando um momento de cuidado sem pressa.',
    },
    {
      title: 'Localização Central em Aquiraz',
      description: 'Fácil acesso na Rua Otoni Sá, 374, com estacionamento e conveniência para clientes da região.',
    },
  ],
  instagramFeed: [
    {
      id: 'ig1',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
      alt: 'Mechas iluminadas em tons avelã - Pedro Freitas Conceito',
    },
    {
      id: 'ig2',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80',
      alt: 'Loiro elegante com acabamento sedoso - Pedro Freitas Conceito',
    },
    {
      id: 'ig3',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      alt: 'Penteado sofisticado de noiva - Pedro Freitas Conceito',
    },
    {
      id: 'ig4',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      alt: 'Tonalização e nutrição capilar - Pedro Freitas Conceito',
    },
    {
      id: 'ig5',
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80',
      alt: 'Loiro perolado com movimento natural - Pedro Freitas Conceito',
    },
    {
      id: 'ig6',
      image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=600&q=80',
      alt: 'Produção para formatura e eventos especiais - Pedro Freitas Conceito',
    },
  ],
};

export const createWhatsAppLink = (customMessage?: string): string => {
  const message = customMessage ? encodeURIComponent(customMessage) : DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${businessConfig.contact.phoneRaw}?text=${message}`;
};
