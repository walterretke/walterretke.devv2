# Especificação Técnica e Design System: Portfólio Web

Este documento define as diretrizes de arquitetura, estruturação de pastas e escolhas de design para o desenvolvimento de um portfólio de engenharia de software com foco em produtos escaláveis e liderança técnica.

## 1. Visão Geral da Stack
* **Frontend & Roteamento:** Next.js (App Router) + React.
* **Estilização:** Tailwind CSS + Componentes acessíveis (shadcn/ui ou Radix UI).
* **CMS (Headless):** Notion API (gerenciamento de conteúdo do blog e projetos).
* **Renderização do Conteúdo:** `react-notion-x` para tradução de blocos do Notion para React.
* **Estratégia de Cache:** Incremental Static Regeneration (ISR) para alta performance e baixo custo de chamadas à API.
* **Internacionalizacao:** O portifolio deve ser em ingles majoritariamente, com opcao para tocar para portugues do brasil.

---

## 2. Design System: Estética "SaaS Premium / Editorial"

O objetivo visual é fugir do padrão genérico de portfólios de desenvolvedores juniores, focando em legibilidade extrema, minimalismo e um aspecto de produto corporativo de alto nível.

### Tipografia (Foco em Leitura Técnica)
A hierarquia tipográfica deve separar claramente títulos de seções do conteúdo longo (artigos).
* **Títulos (Headings):** Fonte Serifada moderna (ex: *Playfair Display* ou *Lora*) ou Sans-serif geométrica (*Cal Sans*). Transmite maturidade.
* **Texto Base (Body/UI):** Fonte Sans-serif altamente legível (ex: *Inter*, *Geist*).
* **Código/Tags:** Fonte Monospace (ex: *Roboto Mono* ou *JetBrains Mono*).

### Paleta de Cores (Alto Contraste Minimalista)
Uso de tons profundos e off-white, evitando preto absoluto (`#000`) e branco absoluto (`#FFF`) para reduzir a fadiga visual.

* **Light Mode:**
    * Background: `#FAFAFA` (Off-white)
    * Texto Principal: `#171717` (Cinza muito escuro)
    * Bordas/Divisores: `#E5E5E5`
* **Dark Mode (Foco Principal):**
    * Background: `#111111` ou `#0F172A` (Slate muito escuro)
    * Texto Principal: `#EDEDED`
    * Bordas/Divisores: `#262626`
* **Cor de Destaque (Accent):** Escolher **uma** cor primária sóbria (ex: Azul Cobalto `#2563EB` ou Esmeralda Escuro `#059669`) para links, botões primários e hover states.

### Espaçamento e UI
* **Whitespace:** Uso generoso de margens e paddings (padrão de escalas `8`, `12`, `16` do Tailwind) para deixar o layout "respirar".
* **Bordas:** Sutis (1px sólido com cores de baixo contraste), substituindo o uso excessivo de sombras.

---

## 3. Estrutura de Seções do Site

A navegação deve ser limpa, guiando o usuário pelas facetas técnicas e arquiteturais.

1.  **Hero / Apresentação:** Proposta de valor direta focada em engenharia de software, arquitetura e construção de produtos.
2.  **Ecossistema de Projetos:** Destaque para soluções complexas. Exemplo: detalhamento da arquitetura da plataforma Tramitta (SaaS B2B de onboarding), ilustrando a integração do frontend em Next.js com o backend em Spring Boot.
3.  **Engenharia & Arquitetura (Blog):** Alimentado pelo Notion. Dividido por categorias como "Decisões de Arquitetura", "Otimização", etc.
4.  **Stack em Produção:** Apresentação visual das tecnologias dominadas (Java, Spring Boot, PHP, SQL, React, Next.js) e ferramentas de infraestrutura.
5.  **Trajetória:** Linha do tempo de impacto corporativo e transição de carreira.

---

## 4. Arquitetura de Pastas (Next.js App Router)

A base de código deve refletir o Princípio de Responsabilidade Única (SRP), isolando a lógica de negócios e chamadas à API da camada de apresentação visual.

```text
meu-portifolio/
├── src/
│   ├── app/                      # Roteamento baseado em diretórios (App Router)
│   │   ├── layout.tsx            # Root Layout: Header, Footer, Theme Providers
│   │   ├── page.tsx              # Página Inicial (Hero, Highlights)
│   │   ├── projetos/             # Seção do ecossistema de projetos
│   │   │   └── page.tsx          
│   │   └── blog/                 # Seção de artigos técnicos
│   │       ├── page.tsx          # Listagem dos posts (Consome API do Notion)
│   │       └── [slug]/           # Rota dinâmica do artigo
│   │           └── page.tsx      # Renderiza o conteúdo usando react-notion-x
│   │
│   ├── components/               # UI Isolada e reaproveitável
│   │   ├── layout/               # Componentes estruturais (Navbar, Footer)
│   │   ├── ui/                   # Componentes base (Botões, Inputs, Cards - via shadcn)
│   │   └── sections/             # Blocos de conteúdo da Home (HeroSection, TechStack)
│   │
│   ├── lib/                      # Regras de negócio, APIs e utilitários
│   │   ├── notion.ts             # Funções de fetch na API do Notion (getPosts, getPage)
│   │   └── utils.ts              # Utilitários globais (cn para Tailwind, formatação de data)
│   │
│   ├── types/                    # Contratos de dados (TypeScript)
│   │   └── notion.d.ts           # Interfaces mapeando as respostas da Notion API
│   │
│   ├── styles/                   # Variáveis globais de estilo
│   │   └── globals.css           # Diretivas Tailwind e variáveis CSS do Design System
│   │
│   └── data/                     # Dados estáticos para não poluir os componentes
│       └── constants.ts          # Links de redes sociais, lista de stack técnica
│
├── public/                       # Assets estáticos (ícones, currículo em PDF)
├── tailwind.config.ts            # Configuração de temas, cores customizadas e fontes
├── next.config.js                # Configuração de imagens (domains: ['notion.so', 's3.us-west-2.amazonaws.com'])
└── package.json