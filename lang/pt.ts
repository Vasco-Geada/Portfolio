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
      {
        id: "phone",
        label: "+351 962 976 705",
        href: "tel:+351962976705",
        icon: "phone",
      },
    ],
  },
  metadata: {
    defaultTitle: "Vasco Geada | Engenheiro de Software",
    applicationName: "Vasco Geada — Portfólio",
    description:
      "Engenheiro de software com quase dois anos de experiência em frontend, aplicações SaaS B2B e desenvolvimento web com React, Next.js e TypeScript.",
    keywords: [
      "Vasco Geada",
      "Engenheiro de Software",
      "Programador de Frontend",
      "Programador Full-Stack",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React",
      "Java",
      "NLP",
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
        { label: "Formação", href: "#education" },
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
            "Tenho quase dois anos de experiência em desenvolvimento frontend para aplicações SaaS B2B e estou a desenvolver o DevTrack em Java, aprofundando também competências de backend.",
          skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "Git"],
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
            "Desenvolvi aplicações web em produção com React, Next.js, Vue.js e Nuxt.js, incluindo a migração de mais de 20 módulos de Nuxt.js para Next.js.",
          skills: ["React", "Next.js", "TypeScript", "Vue.js", "Nuxt.js", "JavaScript", "HTML5", "CSS3", "REST APIs"],
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
            "Desenvolvi o Elemental Battle, um jogo de consola em Java, aplicando herança, polimorfismo, abstração e interfaces à lógica do jogo.",
          skills: ["Java", "OOP", "Herança", "Polimorfismo", "Abstração", "Interfaces"],
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
            "Na minha dissertação, desenvolvo uma pipeline modular de PLN para classificar emails em português europeu e extrair informação estruturada.",
          skills: ["Python", "scikit-learn", "PyTorch", "Hugging Face Transformers", "spaCy", "BERTimbau", "NLP", "Machine Learning"],
          image: {
            src: "/hero/ai-data-engineering.png",
            alt: "Fluxo de dados a atravessar camadas de um modelo de linguagem", 
          },
        },
      ],
      viewWork: "Ver o meu trabalho",
      downloadCv: "Descarregar CV",
      socialProfilesAriaLabel: "Perfis sociais",
      location: "Torres Novas, Portugal · Disponível para trabalho remoto",
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
      focusValue: "Software + Web",
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
      title: "Experiência de produção, aprendizagem contínua.",
      introduction:
        "Sou engenheiro de software com quase dois anos de experiência em desenvolvimento web frontend, incluindo aplicações SaaS B2B em produção com React, Next.js, TypeScript e JavaScript.",
      description:
        "Tenho experiência com APIs REST, debugging, MySQL e desenvolvimento Agile em equipas multidisciplinares. Atualmente, desenvolvo um projeto em Java centrado em programação orientada a objetos, enquanto aprofundo competências de backend e continuo a investigação em PLN e Machine Learning.",
      principles: [
        {
          icon: "code",
          title: "Resolver e melhorar",
          description: "Debugging, tratamento de erros e melhorias de desempenho orientadas a aplicações reais.",
        },
        {
          icon: "spark",
          title: "Aprender continuamente",
          description: "Evolução do frontend para Java, backend, PLN e Machine Learning.",
        },
      ],
    },
    experience: {
      title: "Experiência profissional em desenvolvimento web.",
      description:
        "Experiência em aplicações de produção, integrações com APIs e colaboração com equipas multidisciplinares.",
      entries: [
        {
          role: "Programador Frontend",
          company: "Digital Manager Guru · Portugal, remoto",
          startDate: "01/2024",
          endDate: "07/2025",
          description:
            "Desenvolvi e mantive aplicações web em produção, contribuí para a migração de mais de 20 módulos de Nuxt.js para Next.js, implementei funcionalidades e resolvi problemas de produção e desempenho. Integrei APIs REST, consultei backend Laravel quando necessário e trabalhei com Git/GitHub, GCP, Jira e práticas Agile.",
          technologies: ["React", "Next.js", "Nuxt.js", "TypeScript", "JavaScript", "REST APIs", "Laravel", "GCP", "Jira"],
        },
        {
          role: "Estagiário de Desenvolvimento Frontend",
          company: "Digital Manager Guru · Santarém, Portugal · 755 horas",
          startDate: "04/2022",
          endDate: "08/2022",
          description:
            "Desenvolvi funcionalidades em Vue.js, JavaScript, HTML e CSS, modernizei o portal MyOrders e criei novos módulos. Trabalhei em integrações com Twilio, NuPay e MaxiPago, criei componentes reutilizáveis e melhorei o tratamento de erros das APIs.",
          technologies: ["Vue.js", "JavaScript", "HTML", "CSS", "REST APIs", "Twilio", "NuPay", "MaxiPago"],
        },
        {
          role: "Estagiário de Desenvolvimento Web",
          company: "Alta Densidade Informática · Lisboa, Portugal",
          startDate: "02/2020",
          endDate: "07/2020",
          description:
            "Desenvolvi e mantive websites com WordPress, HTML, CSS e PHP, contribuí para aplicações web e melhorei interfaces e código existentes.",
          technologies: ["WordPress", "HTML", "CSS", "PHP"],
        },
      ],
    },
    education: {
      title: "Formação académica.",
      description:
        "Um percurso contínuo em informática, engenharia de software e investigação aplicada.",
      entries: [
        {
          qualification: "Mestrado em Informática Aplicada",
          institution: "Universidade Politécnica de Santarém",
          startDate: "08/2024",
          endDate: "Presente",
          description:
            "Dissertação: Reconhecimento Automático de Eventos e Expressões Temporais em Emails — Desenvolvimento de um Modelo em Português Europeu.",
        },
        {
          qualification: "Licenciatura em Engenharia Informática",
          institution: "Universidade Politécnica de Santarém",
          startDate: "09/2025",
          endDate: "07/2026",
        },
        {
          qualification: "Licenciatura em Informática",
          institution: "Universidade Politécnica de Santarém",
          startDate: "08/2022",
          endDate: "06/2024",
        },
        {
          qualification: "CTeSP em Tecnologias e Programação de Sistemas de Informação",
          institution: "Universidade Politécnica de Santarém",
          startDate: "08/2020",
          endDate: "06/2022",
        },
      ],
    },
    skills: {
      title: "Competências técnicas.",
      description:
        "Tecnologias e práticas utilizadas em experiência profissional, projetos e investigação.",
      categories: [
        {
          title: "Linguagens de programação",
          description:
            "Linguagens utilizadas em aplicações web, projetos orientados a objetos e processamento de dados.",
          skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL"],
        },
        {
          title: "Full-stack e desenvolvimento web",
          description:
            "Desenvolvimento de interfaces e integração de aplicações web com serviços backend.",
          skills: ["React", "Next.js", "Node.js", "Vue.js", "Nuxt.js", "REST APIs", "HTML5", "CSS3"],
        },
        {
          title: "Backend e bases de dados",
          description:
            "Experiência com persistência relacional e familiaridade com desenvolvimento backend em Laravel e PHP.",
          skills: ["Laravel (familiar)", "PHP (familiar)", "MySQL", "SQL Server"],
        },
        {
          title: "Engenharia de software",
          description:
            "Práticas de conceção, diagnóstico e colaboração aplicadas ao ciclo de desenvolvimento.",
          skills: ["OOP", "Design Patterns", "Debugging", "Tratamento de erros de API", "Performance", "Git", "Agile", "JSON"],
        },
        {
          title: "IA / Machine Learning",
          description:
            "Investigação e desenvolvimento de uma pipeline modular para emails em português europeu.",
          skills: [
            "Machine Learning",
            "NLP",
            "scikit-learn",
            "PyTorch",
            "Hugging Face Transformers",
            "spaCy",
            "BERTimbau",
          ],
        },
        {
          title: "Cloud e ferramentas",
          description:
            "Ferramentas utilizadas no desenvolvimento, colaboração, cloud e desenho de interfaces.",
          skills: ["Google Cloud Platform", "Docker", "GitHub", "Postman", "Jira", "Figma"],
        },
      ],
    },
    currentWork: {
      status: "Em desenvolvimento desde 01/2026",
      learnMore: "Saber mais",
      topicsAriaLabel: "Tópicos de investigação",
      content: {
        label: "Dissertação de mestrado",
        title:
          "Reconhecimento Automático de Eventos e Expressões Temporais em Emails: Desenvolvimento de um Modelo em Português Europeu",
        description:
          "Investigo abordagens de PLN e Machine Learning e desenvolvo uma pipeline modular em Python para classificar a intenção de emails em português europeu e extrair eventos, expressões temporais e informação estruturada.",
        projectHref: "/projects/email-recognition",
        topics: [
          "Processamento de Linguagem Natural",
          "BERT",
          "Classificação de Emails",
          "Extração de Eventos",
          "Expressões Temporais",
        ],
        technologies: ["Python", "scikit-learn", "spaCy", "PyTorch", "Hugging Face Transformers", "BERTimbau"],
      },
    },
    contact: {
      title: "Vamos trabalhar juntos",
      description:
        "Estou disponível para oportunidades em desenvolvimento de software, full-stack e frontend. Também tenho interesse em Java, backend, PLN e Machine Learning.",
    },
    footer: {
      socialLinksAriaLabel: "Ligações sociais",
      backToTop: "Voltar ao topo",
    },
  },
  projectsPage: {
    skipToContent: "Saltar para o conteúdo",
    backHome: "Voltar ao início",
    eyebrow: "Portfólio",
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
      id: "devtrack",
      title: "DevTrack",
      shortDescription:
        "Aplicação Java em desenvolvimento para gerir projetos de software, inspirada em conceitos do Git e do Jira.",
      description:
        "O DevTrack aplica programação orientada a objetos a um domínio de gestão de projetos, com diferentes tipos de tarefas e regras para atribuições, estados e evolução do trabalho.",
      image: {
        src: "/projects/devtrack.svg",
        alt: "Ilustração conceptual do DevTrack com tarefas ligadas a um fluxo de desenvolvimento",
      },
      technologies: ["Java", "OOP", "Git"],
      githubUrl: "https://github.com/Vasco-Geada/DevTrack",
      featured: true,
      sections: [
        {
          type: "text",
          title: "Objetivo do projeto",
          content:
            "Iniciado em setembro de 2026, o DevTrack explora a gestão de projetos de software através de conceitos inspirados no Git e no Jira. A aplicação organiza projetos, tarefas, atribuições e estados num modelo de domínio em Java.",
        },
        {
          type: "features",
          title: "Trabalho em desenvolvimento",
          features: [
            {
              title: "Modelo orientado a objetos",
              description:
                "Herança, polimorfismo, abstração e encapsulamento representam diferentes tipos de tarefas e comportamentos.",
            },
            {
              title: "Regras de projeto",
              description:
                "A lógica do domínio define atribuições, transições de estado e gestão dos projetos de software.",
            },
            {
              title: "Evolução planeada",
              description:
                "O roteiro prevê uma API REST com Spring Boot e uma interface React construída com Next.js.",
            },
          ],
        },
        {
          type: "image",
          title: "Fluxo conceptual",
          src: "/projects/devtrack.svg",
          alt: "Fluxo conceptual de tarefas e estados no DevTrack",
          caption:
            "Ilustração conceptual do portfólio para um projeto ainda em desenvolvimento.",
        },
      ],
    },
    {
      id: "email-recognition",
      title: "Sistema de Reconhecimento de Eventos",
      shortDescription:
        "Sistema de PLN e Machine Learning para classificar emails em português europeu e extrair informação estruturada.",
      description:
        "A minha dissertação de mestrado investiga abordagens de Processamento de Linguagem Natural e Machine Learning para reconhecer eventos e expressões temporais em emails em português europeu.",
      image: {
        src: "/projects/email-recognition.svg",
        alt: "Interface conceptual de análise de email que transforma uma mensagem em português em resultados estruturados de NLP",
      },
      technologies: ["Python", "scikit-learn", "spaCy", "PyTorch", "Hugging Face Transformers", "BERTimbau", "Machine Learning", "NLP"],
      githubUrl: "https://github.com/Vasco-Geada/email_recognition_pt_pt",
      featured: true,
      sections: [
        {
          type: "text",
          title: "O problema de investigação",
          content:
            "Os emails contêm eventos, intenções e expressões temporais relevantes, mas a sua linguagem e contexto dificultam a extração automática. O trabalho investiga e seleciona abordagens adequadas ao processamento de emails em português europeu.",
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
              title: "Pipeline modular",
              description:
                "Organizar classificação e extração em módulos Python com requisitos, arquitetura e configurações de modelos explícitos.",
            },
          ],
        },
        {
          type: "text",
          title: "Abordagem de trabalho",
          content:
            "O trabalho envolve investigação e seleção de abordagens, definição dos requisitos dos módulos, arquitetura e configurações dos modelos. O sistema é implementado e aperfeiçoado de forma iterativa com Python, scikit-learn, spaCy, PyTorch, Hugging Face Transformers e BERTimbau.",
        },
        {
          type: "image",
          title: "Da caixa de entrada ao conhecimento estruturado",
          src: "/projects/email-recognition.svg",
          alt: "Resumo visual do pipeline do Sistema de Reconhecimento de Eventos",
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
        "Jogo de consola por turnos em Java para 2 a 6 jogadores, com tabuleiro, cartas, duelos e casas surpresa.",
      description:
        "Projeto académico desenvolvido entre 2021 e 2022 em colaboração com Olavo Cacheiro. A aplicação usa programação orientada a objetos para modelar um jogo de consola em que os jogadores percorrem um tabuleiro de 25 casas e disputam duelos com cartas.",
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
            "O projeto permitiu aplicar herança, polimorfismo, abstração e interfaces para modelar entidades e comportamentos do jogo, separando responsabilidades em classes e componentes reutilizáveis.",
        },
      ],
    },
  ],
} satisfies TranslationResource;

export default pt;
