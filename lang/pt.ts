import type { TranslationResource } from "@store/I18n";

const pt = {
  common: {
    languageSwitcherAriaLabel: "Escolher idioma",
    portugueseLabel: "Português",
    englishLabel: "Inglês",
    portugueseShortLabel: "PT",
    englishShortLabel: "EN",
    githubLabel: "GitHub",
    opensInNewTab: "(abre num novo separador)",
    homeAriaLabel: "{{name}}, página inicial",
    technologiesAriaLabel: "Tecnologias de {{name}}",
    skillsAriaLabel: "Competências de {{name}}",
    emailAriaLabel: "Enviar email a Vasco através de {{email}}",
  },
  site: {
    name: "Vasco Geada",
    brand: "VG",
    email: "mailto:geadavasco@gmail.com",
    cvUrl: "/vasco-geada-cv.pdf",
    socialLinks: [
      {
        id: "github",
        label: "GitHub",
        href: "https://github.com/Vasco-Geada",
        icon: "github",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/vasco-geada-a66b01372/",
        icon: "linkedin",
      },
      {
        id: "email",
        label: "Email",
        href: "mailto:geadavasco@gmail.com",
        icon: "mail",
      },
    ],
  },
  metadata: {
    defaultTitle: "Vasco Geada | Engenheiro de Software",
    applicationName: "Vasco Geada — Portfólio",
    description:
      "Engenheiro de Software, Programador de Frontend, Inteligência Artificial e Machine Learning.",
    keywords: [
      "Vasco Geada",
      "Engenheiro de Software",
      "Programador de Frontend",
      "Engenheiro de IA",
      "Next.js",
      "Javascript",
      "React",
      "Machine Learning",
    ],
    openGraphLocale: "pt_PT",
    projectsTitle: "Projetos",
    projectsDescription:
      "Projetos selecionados de engenharia de software, desenvolvimento frontend e inteligência artificial aplicada de Vasco Geada.",
    projectNotFoundTitle: "Projeto não encontrado",
  },
  home: {
    skipToMainContent: "Saltar para o conteúdo principal",
    navigation: {
      primaryAriaLabel: "Navegação principal",
      mobileAriaLabel: "Navegação móvel",
      menuAriaLabel: "Menu de navegação",
      downloadCv: "Descarregar CV",
      items: [
        { label: "Projetos", href: "#projects" },
        { label: "Experiência", href: "#experience" },
        { label: "Sobre mim", href: "#about" },
        { label: "Contacto", href: "#contact" },
      ],
    },
    hero: {
      availability: "Disponível para novas oportunidades",
      greeting: "Olá, sou o Vasco Geada.",
      slides: [
        {
          id: "software",
          title: "Desenvolvimento de",
          titleEmphasis: "Software.",
          description:
            "Desenvolvo e mantenho aplicações web de frontend em produção, integro APIs REST e resolvo problemas com equipas de diferentes departamentos.",
          skills: ["TypeScript", "JavaScript", "Python", "REST APIs", "Git", "Java"],
          image: {
            src: "/hero/software-development.png",
            alt: "Módulos de software interligados numa visualização azul-escura",
          },
        },
        {
          id: "frontend",
          title: "Programador de",
          titleEmphasis: "Frontend",
          description:
            "Construo interfaces responsivas com React, Next.js, Vue.js e Nuxt.js. Em produção, ajudei a migrar mais de 20 módulos de Nuxt.js para Next.js.",
          skills: ["React", "Next.js", "TypeScript", "Vue.js", "Nuxt.js", "JavaScript", "HTML", "CSS", "Acessibilidade Web Básica", "SCSS"],
          image: {
            src: "/hero/frontend-engineering.png",
            alt: "Interfaces web responsivas e componentes sobrepostos em tons de azul",
          },
        },
        {
          id: "games",
          title: "Desenvolvimento de",
          titleEmphasis: "Jogos",
          description:
            "Desenvolvi em equipa o Elemental Battle, um jogo de tabuleiro por turnos em Java com cartas, duelos e casas surpresa.",
          skills: ["Java", "OOP", "Sistemas por turnos", "Mecânicas de cartas", "Regras de jogo"],
          image: {
            src: "/hero/game-development.png",
            alt: "Tabuleiro isométrico de um jogo de estratégia por turnos",
          },
        },
        {
          id: "aiData",
          title: "IA e Engenharia",
          titleEmphasis: "de Dados",
          description:
            "Na minha dissertação, construo um pipeline de NLP para classificar emails em português europeu e extrair informação estruturada.",
          skills: ["Python", "scikit-learn", "PyTorch", "Transformers", "spaCy", "Bert", "NLP", "Machine Learning", "Question Answering"],
          image: {
            src: "/hero/ai-data-engineering.png",
            alt: "Fluxo de dados a atravessar camadas de um modelo de linguagem", 
          },
        },
      ],
      viewWork: "Ver o meu trabalho",
      downloadCv: "Descarregar CV",
      socialProfilesAriaLabel: "Perfis sociais",
      location: "Portugal · Disponível para trabalho remoto",
      technologiesAriaLabel: "Competências desta área",
      carousel: {
        ariaLabel: "Áreas de interesse profissional",
        previousSlideAriaLabel: "Mostrar a área anterior",
        nextSlideAriaLabel: "Mostrar a área seguinte",
        goToSlideAriaLabel: "Ir para a área {{number}} de {{total}}",
        slideStatus: "{{title}}, área {{current}} de {{total}}",
      },
      professionalFocusAriaLabel: "Foco profissional",
      profileLabel: "PERFIL / 01",
      openToWork: "Disponível",
      focusLabel: "Foco",
      focusValue: "IA + Web",
      approachLabel: "Abordagem",
      approachValue: "Útil, clara e fiável",
    },
    featuredProjects: {
      title: "Projetos desenvolvidos",
      description:
        "Trabalhos em IA aplicada, desenvolvimento de software full-stack e jogos.",
      viewAll: "Ver todos os projetos",
      viewCaseStudy: "Ver caso de estudo",
    },
    about: {
      title: "Curioso por natureza. Prático por escolha.",
      introduction:
        "Sou engenheiro de software e gosto de transformar problemas ambíguos em produtos claros e úteis. Os meus interesses encontram-se entre experiências web cuidadas e inteligência artificial aplicada.",
      description:
        "Dou tanta importância aos detalhes por trás de um produto como à interface que se vê: arquitetura sensata, código sustentável, colaboração honesta e tecnologia escolhida com intenção. É a aprender, construir e simplificar a experiência de alguém que faço o meu melhor trabalho.",
      principles: [
        {
          icon: "code",
          title: "Construir com intenção",
          description: "Bases simples que podem crescer sem se tornarem um obstáculo.",
        },
        {
          icon: "spark",
          title: "Continuar a explorar",
          description: "Novas ideias são úteis quando melhoram os resultados para as pessoas.",
        },
      ],
    },
    experience: {
      title: "Trabalho, investigação e evolução contínua.",
      description:
        "Experiência construída com execução prática, responsabilidade técnica e aprendizagem contínua.",
      entries: [
        {
          role: "Investigador de Dissertação de Mestrado",
          company: "Investigação académica",
          startDate: "2025",
          endDate: "Presente",
          description:
            "Investigo como transformar emails em português europeu em eventos e informação temporal estruturada, desde a exploração dos dados e estratégia de anotação até experiências com transformers e respetiva avaliação.",
          technologies: [
            "Python",
            "BERT",
            "Transformers",
            "NLP",
            "Question Answering",
          ],
        },
        {
          role: "Programador Full-Stack",
          company: "ERP4U · Projeto académico",
          startDate: "2024",
          endDate: "2025",
          description:
            "Contribuí para um protótipo de ERP em Laravel e PHP, com interfaces Blade e operações de gestão de fornecedores, famílias e códigos postais.",
          technologies: ["PHP", "Laravel", "Blade", "Bootstrap", "jQuery"],
        },
        {
          role: "Programador de Software de Jogos",
          company: "Elemental Battle · Projeto académico",
          startDate: "2023",
          endDate: "2024",
          description:
            "Desenvolvi em equipa um jogo de tabuleiro por turnos em Java, aplicando programação orientada a objetos às regras do tabuleiro, às cartas e aos duelos entre jogadores.",
          technologies: ["Java", "OOP"],
        },
      ],
    },
    skills: {
      title: "A ferramenta certa para cada problema.",
      description:
        "Um conjunto prático de competências desenvolvido através de trabalho profissional, projetos académicos e investigação contínua.",
      categories: [
        {
          title: "Frontend",
          description:
            "Interfaces acessíveis e responsivas, construídas sobre uma arquitetura de componentes sólida.",
          skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "SCSS"],
        },
        {
          title: "Backend",
          description:
            "Serviços aplicacionais, lógica de domínio e APIs construídos sobre bases sustentáveis.",
          skills: ["Python", "C#", "Java", "PHP", "Laravel"],
        },
        {
          title: "IA / Machine Learning",
          description:
            "Experimentação centrada em linguagem, desde a preparação de dados à modelação e avaliação.",
          skills: [
            "scikit-learn",
            "Transformers",
            "BERT",
            "NLP",
            "Machine Learning",
            "Question Answering",
          ],
        },
        {
          title: "Bases de dados",
          description:
            "Modelação de dados relacionais e em grafo para produtos e projetos de investigação.",
          skills: ["PostgreSQL", "MySQL", "SQL Server", "Neo4j"],
        },
        {
          title: "Ferramentas",
          description:
            "Fluxos de trabalho práticos para versionamento, colaboração e entregas reproduzíveis.",
          skills: ["Git", "GitHub", "Docker"],
        },
      ],
    },
    currentWork: {
      status: "Investigação em curso",
      learnMore: "Saber mais",
      topicsAriaLabel: "Tópicos de investigação",
      content: {
        label: "Dissertação de mestrado",
        title:
          "Reconhecimento Automático de Eventos e Expressões Temporais em Emails: Desenvolvimento de um Modelo em Português Europeu",
        description:
          "Estou a desenvolver um sistema para a compreensão automática de emails em português europeu, explorando a forma como modelos de linguagem podem classificar mensagens e extrair eventos, datas e informação estruturada relevante.",
        projectHref: "/projects/email-recognition",
        topics: [
          "Processamento de Linguagem Natural",
          "BERT",
          "Classificação de Emails",
          "Extração de Eventos",
          "Expressões Temporais",
          "Question Answering",
        ],
        technologies: ["Python", "Machine Learning", "PT-PT"],
      },
    },
    contact: {
      title: "Vamos trabalhar juntos",
      description:
        "Estou disponível para conversar sobre Engenharia de Software, Desenvolvimento Frontend e IA aplicada. Se estás a construir algo com valor, terei todo o gosto em saber mais.",
    },
    footer: {
      socialLinksAriaLabel: "Ligações sociais",
      backToTop: "Voltar ao topo",
    },
  },
  projectsPage: {
    skipToContent: "Saltar para o conteúdo",
    backHome: "Voltar ao início",
    title: "Projetos com uma história por trás.",
    description:
      "Um olhar mais próximo sobre investigação em IA aplicada, desenvolvimento de produto e design de software — incluindo as decisões, compromissos e aprendizagens por trás de cada projeto.",
    allProjects: "Todos os projetos",
    caseCount_one: "{{count}} caso de estudo",
    caseCount_other: "{{count}} casos de estudo",
    viewCaseStudy: "Ver caso de estudo",
    liveDemo: "Ver demonstração",
    contactEyebrow: "Tens um projeto em mente?",
    contactTitle: "Vamos construir algo útil.",
    contactDescription:
      "Estou disponível para oportunidades relevantes em engenharia de software, frontend e IA aplicada.",
    contactAction: "Entrar em contacto",
  },
  projectDetail: {
    skipToContent: "Saltar para o conteúdo",
    allProjects: "Todos os projetos",
    caseStudy: "Caso de estudo",
    projectDetailsAriaLabel: "Detalhes do projeto",
    technologies: "Tecnologias",
    liveDemo: "Ver demonstração",
    viewGitHub: "Ver no GitHub",
    navigationAriaLabel: "Navegação de projetos",
    finishedReading: "Terminaste a leitura?",
    exploreMore: "Explora os restantes projetos.",
    viewAllProjects: "Ver todos os projetos",
  },
  projects: [
    {
      id: "email-recognition",
      title: "Email Recognition PT-PT",
      shortDescription:
        "Um sistema de investigação em Processamento de Linguagem Natural (NLP) que transforma emails em português europeu, em contexto profissional ou académico, em eventos estruturados e sinais temporais.",
      description:
        "A minha dissertação de mestrado explora uma pipeline de processamento de linguagem para compreender emails em português europeu: classificar mensagens, extrair e identificar reuniões e determinar quando, onde e com quem acontecem.",
      image: {
        src: "/projects/email-recognition.svg",
        alt: "Interface conceptual de análise de email que transforma uma mensagem em português em resultados estruturados de NLP",
      },
      technologies: ["Python", "scikit-learn", "PyTorch", "Hugging", "Face", "Transformers", "spaCy", "Machine Learning", "Question Answering", "PT-PT"],
      featured: true,
      sections: [
        {
          type: "text",
          title: "O problema de investigação",
          content:
            "Os emails contêm ações, datas e compromissos importantes, mas a sua linguagem informal e contexto conversacional dificultam o processamento automático dessa informação. O português europeu representa um desafio adicional, uma vez que existem comparativamente menos conjuntos de dados representativos e modelos especializados.",
        },
        {
          type: "features",
          title: "Foco da investigação",
          features: [
            {
              title: "Classificação de emails",
              description:
                "Identificar a intenção e a categoria operacional de cada mensagem antes das etapas seguintes de extração.",
            },
            {
              title: "Reconhecimento de eventos",
              description:
                "Detetar ações, participantes e atributos contextuais relevantes em texto não estruturado.",
            },
            {
              title: "Compreensão temporal",
              description:
                "Reconhecer expressões temporais explícitas e relativas e associá-las aos respetivos eventos.",
            },
            {
              title: "Question answering",
              description:
                "Explorar a extração dirigida através de perguntas em linguagem natural sobre o conteúdo das mensagens.",
            },
          ],
        },
        {
          type: "text",
          title: "Abordagem de trabalho",
          content:
            "O trabalho combina uma estratégia de anotação cuidadosamente definida com baselines baseadas em transformers e experiências específicas para cada tarefa. A avaliação é desenhada por capacidade, permitindo comparar classificação, extração e raciocínio temporal de forma independente antes da sua integração num pipeline mais amplo.",
        },
        {
          type: "image",
          title: "Da caixa de entrada ao conhecimento estruturado",
          src: "/projects/email-recognition.svg",
          alt: "Resumo visual do pipeline de processamento do Email Recognition PT-PT",
          caption:
            "Imagem conceptual do fluxo de investigação; deverá ser substituída por um diagrama de arquitetura ou resultado experimental verificado.",
        },
      ],
    },
    {
      id: "erp4u",
      title: "ERP4U",
      shortDescription:
        "Protótipo de ERP em Laravel com gestão de fornecedores, famílias e códigos postais.",
      description:
        "O ERP4U é um projeto académico em PHP e Laravel. O repositório inclui operações de criação, consulta, edição e remoção de fornecedores, famílias e códigos postais, além de autenticação e gestão do perfil de utilizador.",
      image: {
        src: "/projects/erp4u.svg",
        alt: "Ilustração conceptual de um painel ERP4U com gráficos e indicadores exemplificativos",
      },
      technologies: ["PHP", "Laravel", "Blade", "Bootstrap", "jQuery", "MVC"],
      githubUrl: "https://github.com/vascogeada/ERP4U",
      featured: true,
      sections: [
        {
          type: "text",
          title: "Visão geral",
          content:
            "O código publicado mostra um protótipo administrativo centrado em dados de referência. As páginas em Blade permitem gerir fornecedores, famílias e códigos postais; há também registo, início de sessão e páginas de perfil. O painel inicial contém indicadores e transações de exemplo, não relatórios calculados a partir destes módulos.",
        },
        {
          type: "features",
          title: "Funcionalidades presentes no repositório",
          features: [
            {
              title: "Fornecedores",
              description:
                "Listagem, criação, edição e remoção de fornecedores, com código, nome, morada, localidade e código postal.",
            },
            {
              title: "Famílias",
              description:
                "Gestão de registos de famílias através de páginas de listagem e formulários de criação e edição.",
            },
            {
              title: "Códigos postais",
              description:
                "Gestão de códigos postais e localidades, com uma associação definida no modelo de fornecedores.",
            },
            {
              title: "Conta de utilizador",
              description:
                "Fluxos de autenticação e páginas para consultar ou editar o perfil e alterar a palavra-passe.",
            },
          ],
        },
        {
          type: "text",
          title: "Perspetiva de engenharia",
          content:
            "A implementação combina rotas e controladores Laravel, modelos Eloquent, migrações de base de dados e vistas Blade. A área administrativa usa Bootstrap e jQuery/DataTables. O repositório demonstra estes módulos de gestão, mas não contém funcionalidades de vendas, stock ou relatórios operacionais.",
        },
        {
          type: "image",
          src: "/projects/erp4u.svg",
          alt: "Ilustração conceptual do painel administrativo ERP4U",
          caption:
            "Ilustração conceptual do portfólio; não é uma captura nem representa dados reais do projeto.",
        },
      ],
    },
    {
      id: "elemental-battle",
      title: "Elemental Battle",
      shortDescription:
        "Jogo de tabuleiro por turnos em Java para 2 a 6 jogadores, com cartas, duelos e casas surpresa.",
      description:
        "Projeto académico desenvolvido em colaboração com Olavo Cacheiro para aplicar programação orientada a objetos e engenharia de software. Os jogadores percorrem um tabuleiro de 25 casas e disputam duelos com cartas; o objetivo é alcançar 10 vitórias.",
      image: {
        src: "/projects/elemental-battle.svg",
        alt: "Ilustração conceptual do Elemental Battle, um jogo de tabuleiro com duelos por turnos",
      },
      technologies: ["Java", "OOP"],
      githubUrl: "https://github.com/Elemental-Battle/Elemental_Battle_Project",
      featured: true,
      sections: [
        {
          type: "text",
          title: "Como se joga",
          content:
            "Entre 2 e 6 jogadores alternam jogadas: cada um lança um dado de 1 a 6 uma vez por turno e avança no sentido dos ponteiros do relógio. Nas casas de duelo, as cartas decidem o confronto; o primeiro jogador a somar 10 vitórias alcança o objetivo do jogo.",
        },
        {
          type: "features",
          title: "Regras e mecânicas",
          features: [
            {
              title: "Tabuleiro",
              description:
                "São 25 casas num tabuleiro de 5 × 5: uma de partida, oito neutras, oito de duelo e oito de surpresa.",
            },
            {
              title: "Turnos e movimento",
              description:
                "As jogadas alternam entre jogadores; um lançamento do dado determina quantas casas se avança no sentido dos ponteiros do relógio.",
            },
            {
              title: "Baralho e cartas",
              description:
                "Cada jogador começa com 10 cartas. Cada carta pode ter uma capacidade, é descartada após o uso e recebe-se outra aleatória ao passar pela partida.",
            },
            {
              title: "Duelos",
              description:
                "A força das cartas determina o vencedor; em caso de igualdade, compara-se a destreza. Se persistir o empate, ninguém ganha o ponto.",
            },
            {
              title: "Casas surpresa",
              description:
                "Podem fazer avançar ou recuar o jogador, ou atribuir um bónus de força ou destreza a uma carta à sua escolha.",
            },
            {
              title: "Objetivo",
              description:
                "O objetivo é obter 10 vitórias em duelos. A partilha de uma casa por vários jogadores também desencadeia duelos entre eles.",
            },
          ],
        },
        {
          type: "image",
          title: "Ilustração do projeto",
          src: "/projects/elemental-battle.svg",
          alt: "Ilustração conceptual dos duelos por turnos do Elemental Battle",
          caption:
            "Ilustração conceptual do portfólio; não é uma captura do jogo.",
        },
        {
          type: "text",
          title: "Aprendizagem técnica",
          content:
            "O projeto permitiu aplicar Java e programação orientada a objetos à modelação de jogadores, cartas, tabuleiro, turnos e duelos, organizando as regras de um jogo com várias interações entre jogadores.",
        },
      ],
    },
  ],
} satisfies TranslationResource;

export default pt;
