export type Locale = 'en' | 'pt';

export const DICTIONARY = {
  en: {
    nav: {
      projects: 'Projects',
      stack: 'Expertise',
      experience: 'Trajectory',
      blog: 'Writing',
      contact: 'Let\'s Talk',
    },
    hero: {
      badge: 'Software Engineer',
      title: 'Architecting ',
      titleAccent: 'Global Systems',
      titleEnd: ' for Enterprise Scale.',
      description: "Driving digital transformation through high-performance distributed systems. Currently leading global rollouts across Brazil, Germany, and the USA, bridging the gap between robust Java backends and premium frontend experiences.",
      viewProjects: 'Selected Work',
      readStory: 'Technical Background',
      downloadCV: 'Download CV',
      currentStack: 'Main Stack:',
    },
    socialProof: {
      global: 'Global Implementation',
      scale: 'Distributed Architectures',
      stack: 'Full-Cycle Development',
    },
    sections: {
      projects: {
        title: 'Featured Impact',
        subtitle: 'Engineering solutions that solve real-world business bottlenecks at scale.',
        impactLabel: 'Key Impact',
      },
      stack: {
        title: 'Core Stack',
        subtitle: 'A pragmatic selection of technologies for building resilient, production-grade applications.',
      },
      experience: {
        title: 'Career Path',
        education: 'Academic Foundation',
        impactLabel: 'Impact & Results',
      },
      recommendations: {
        title: 'Social Proof',
        subtitle: 'Collaborative feedback from partners and engineering leaders.',
      },
      blog: {
        title: 'Engineering & Architecture',
        subtitle: 'Technical insights on building scalable systems, architectural decisions, and software engineering at scale.',
        readMore: 'Read Article',
        backToBlog: 'Back to Writing',
        publishedAt: 'Published on',
      },
    },
    recommendations: [
      {
        name: "Engineering Partner",
        role: "Senior Tech Lead",
        content: "Walter is an exceptional engineer who bridges the gap between complex backend requirements and premium frontend experiences with ease.",
      },
      {
        name: "Project Manager",
        role: "Global Operations",
        content: "His ability to manage global rollouts and maintain high availability in critical systems was a key asset to our success.",
      },
    ],
    experience: [
      {
        company: "WEG",
        role: "Software Engineer",
        period: "06/2025 – Present",
        description: [
          "Leading the end-to-end global implementation of Microsoft Dynamics, scaling from an MVP in Africa to full-scale enterprise rollouts in Brazil, Germany, and the USA.",
          "Architecting high-availability RESTful APIs using Java 17+ and Spring Boot, ensuring seamless integration for complex global business units.",
          "Driving the architectural evolution from monoliths to cloud-native microservices, optimizing for performance and system resilience.",
          "Solving critical production bottlenecks (L3 support), maintaining business continuity for high-traffic enterprise platforms.",
        ],
      },
      {
        company: "WEG",
        role: "Software Engineering Intern",
        period: "08/2024 – 06/2025",
        description: [
          "Co-architected a cloud-native migration for a legacy goal-setting system, significantly reducing technical debt and operational costs.",
          "Delivered premium user experiences using Next.js and a custom TypeScript design system for internal enterprise tools.",
          "Automated high-frequency deployments via CI/CD pipelines and secured global access through centralized Keycloak authentication.",
        ],
      },
      {
        company: "Rauzee",
        role: "Software Engineer",
        period: "01/2024 – 08/2024",
        description: [
          "Engineered scalable backend services using Java and Spring Boot, optimizing database performance for high-concurrency environments.",
          "Streamlined deployment cycles using Docker and Kubernetes, ensuring high availability and faster time-to-market.",
          "Developed high-performance frontend architectures with Next.js, focusing on performance and SEO.",
        ],
      },
      {
        company: "Self Employed",
        role: "Software Engineer (Independent Contractor)",
        period: "08/2021 – 01/2024",
        description: [
          "Partnered with IT companies to design, develop, and deploy scalable software solutions, e-commerce platforms, and institutional websites.",
          "Modernized legacy applications by migrating frontend architecture to Next.js, achieving a 150% increase in performance and load times.",
          "Optimized e-commerce platforms and checkout flows, resulting in a 40% increase in processing speed and 20% conversion growth.",
          "Engineered full-stack web and mobile applications using Java, Spring Boot, React, and Flutter, orchestrating deployments with Kubernetes.",
        ],
      },
    ],
    projects: [
      {
        title: "Tramitta: Enterprise B2B SaaS",
        description: "A comprehensive onboarding engine designed to automate vendor registration and sensitive document management for B2B ecosystems.",
        tech: ["Next.js", "React", "Java 17+", "Spring Boot", "AWS", "Docker"],
        impact: "Architected secure OIDC/OAuth2 flows to ensure zero-trust security and data privacy for corporate partners.",
      },
    ],
    education: {
      institution: "Catholic University of Santa Catarina",
      degree: "B.S. Software Engineering",
      period: "Jan 2024 – Dec 2027",
      details: "Mathematics Certificate",
    },
  },
  pt: {
    nav: {
      projects: 'Projetos',
      stack: 'Expertise',
      experience: 'Trajetória',
      blog: 'Blog',
      contact: 'Vamos Conversar',
    },
    hero: {
      badge: 'Software Engineer',
      title: 'Arquitetando ',
      titleAccent: 'Sistemas Globais',
      titleEnd: ' em Escala Enterprise.',
      description: "Impulsionando a transformação digital através de sistemas distribuídos de alta performance. Atualmente liderando rollouts globais no Brasil, Alemanha e EUA, unindo backends robustos em Java a experiências frontend premium.",
      viewProjects: 'Trabalhos Selecionados',
      readStory: 'Background Técnico',
      downloadCV: 'Baixar CV',
      currentStack: 'Stack Principal:',
    },
    socialProof: {
      global: 'Implementação Global',
      scale: 'Arquiteturas Distribuídas',
      stack: 'Desenvolvimento Full-Cycle',
    },
    sections: {
      projects: {
        title: 'Impacto em Destaque',
        subtitle: 'Engenharia de soluções que resolvem gargalos de negócios reais em escala.',
        impactLabel: 'Impacto Chave',
      },
      stack: {
        title: 'Stack Principal',
        subtitle: 'Uma seleção pragmática de tecnologias para construir aplicações resilientes de nível de produção.',
      },
      experience: {
        title: 'Plano de Carreira',
        education: 'Fundação Acadêmica',
        impactLabel: 'Impacto e Resultados',
      },
      recommendations: {
        title: 'Prova Social',
        subtitle: 'Feedback colaborativo de parceiros e líderes de engenharia.',
      },
      blog: {
        title: 'Engenharia & Arquitetura',
        subtitle: 'Insights técnicos sobre construção de sistemas escaláveis, decisões arquiteturais e engenharia de software em escala.',
        readMore: 'Ler Artigo',
        backToBlog: 'Voltar para Escrita',
        publishedAt: 'Publicado em',
      },
    },
    recommendations: [
      {
        name: "Parceiro de Engenharia",
        role: "Senior Tech Lead",
        content: "Walter é um engenheiro excepcional que une facilmente requisitos complexos de backend a experiências frontend premium.",
      },
      {
        name: "Gerente de Projetos",
        role: "Operações Globais",
        content: "Sua habilidade em gerenciar rollouts globais e manter alta disponibilidade em sistemas críticos foi um ativo fundamental para nosso sucesso.",
      },
    ],
    experience: [
      {
        company: "WEG",
        role: "Engenheiro de Software",
        period: "06/2025 – Presente",
        description: [
          "Liderando a implementação global ponta a ponta do Microsoft Dynamics, escalando de um MVP na África para rollouts enterprise no Brasil, Alemanha e EUA.",
          "Arquitetando APIs RESTful de alta disponibilidade usando Java 17+ e Spring Boot, garantindo integração fluida para unidades de negócios globais.",
          "Conduzindo a evolução arquitetural de monolitos para microsserviços cloud-native, otimizando performance e resiliência do sistema.",
          "Resolvendo gargalos críticos de produção (suporte L3), mantendo a continuidade de negócios para plataformas enterprise de alto tráfego.",
        ],
      },
      {
        company: "WEG",
        role: "Estagiário de Engenharia de Software",
        period: "08/2024 – 06/2025",
        description: [
          "Co-arquitetou a migração para nuvem de um sistema legado de metas, reduzindo significativamente o débito técnico e custos operacionais.",
          "Entregou experiências premium usando Next.js e um design system customizado em TypeScript para ferramentas internas enterprise.",
          "Automatizou deployments de alta frequência via pipelines de CI/CD e garantiu acesso global via autenticação centralizada Keycloak.",
        ],
      },
      {
        company: "Rauzee",
        role: "Engenheiro de Software",
        period: "01/2024 – 08/2024",
        description: [
          "Desenvolveu serviços de backend escaláveis usando Java e Spring Boot, otimizando a performance do banco de dados para ambientes de alta concorrência.",
          "Otimizou ciclos de deployment usando Docker e Kubernetes, garantindo alta disponibilidade e agilidade no lançamento de features.",
          "Construiu arquiteturas de frontend de alta performance com Next.js, focando em performance e SEO.",
        ],
      },
      {
        company: "Autônomo",
        role: "Engenheiro de Software (Contratante Independente)",
        period: "08/2021 – 01/2024",
        description: [
          "Fiz parceria com empresas de TI para projetar, desenvolver e implantar soluções de software escaláveis, plataformas de e-commerce e sites institucionais.",
          "Modernizei aplicações legadas migrando a arquitetura frontend para Next.js, alcançando um aumento de 150% na performance geral do sistema e nos tempos de carregamento.",
          "Otimizei plataformas de e-commerce e fluxos de checkout, resultando em um aumento de 40% na velocidade de processamento e 20% de crescimento na conversão.",
          "Desenvolvi aplicações web e mobile full-stack usando Java, Spring Boot, React e Flutter, orquestrando implantações com Kubernetes.",
        ],
      },
    ],
    projects: [
      {
        title: "Tramitta: SaaS B2B Enterprise",
        description: "Um motor de onboarding abrangente projetado para automatizar o registro de fornecedores e gestão de documentos sensíveis para ecossistemas B2B.",
        tech: ["Next.js", "React", "Java 17+", "Spring Boot", "AWS", "Docker"],
        impact: "Arquitetou fluxos seguros OIDC/OAuth2 para garantir segurança zero-trust e privacidade de dados para parceiros corporativos.",
      },
    ],
    education: {
      institution: "Universidade Católica de Santa Catarina",
      degree: "Engenharia de Software",
      period: "Jan 2024 – Dez 2027",
      details: "Certificado em Matemática",
    },
  },
};
