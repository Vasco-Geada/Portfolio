import type { TranslationResource } from "@store/I18n";

const en = {
  common: {
    languageSwitcherAriaLabel: "Choose language",
    portugueseLabel: "Portuguese",
    englishLabel: "English",
    portugueseShortLabel: "PT",
    englishShortLabel: "EN",
    githubLabel: "GitHub",
    opensInNewTab: "(opens in a new tab)",
    homeAriaLabel: "{{name}}, home",
    technologiesAriaLabel: "{{name}} technologies",
    skillsAriaLabel: "{{name}} skills",
    emailAriaLabel: "Email Vasco at {{email}}",
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
    defaultTitle: "Vasco Geada | Software Engineer",
    applicationName: "Vasco Geada — Portfolio",
    description:
      "Software Engineer focused on Web Development, Artificial Intelligence and Machine Learning.",
    keywords: [
      "Vasco Geada",
      "Software Engineer",
      "Frontend Engineer",
      "AI Engineer",
      "Next.js",
      "Machine Learning",
    ],
    openGraphLocale: "en_GB",
    projectsTitle: "Projects",
    projectsDescription:
      "Selected software engineering, frontend development and applied AI projects by Vasco Geada.",
    projectNotFoundTitle: "Project not found",
  },
  home: {
    skipToMainContent: "Skip to main content",
    navigation: {
      primaryAriaLabel: "Primary navigation",
      mobileAriaLabel: "Mobile navigation",
      menuAriaLabel: "Navigation menu",
      downloadCv: "Download CV",
      items: [
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
    },
    hero: {
      availability: "Available for new opportunities",
      greeting: "Hi, I'm Vasco Geada.",
      slides: [
        {
          id: "software",
          title: "Software",
          titleEmphasis: "Development",
          description:
            "I develop and maintain frontend production web applications, integrate REST APIs and solve problems in cross-functional teams.",
          skills: ["TypeScript", "JavaScript", "Python", "REST APIs", "Git", "Java"],
          image: {
            src: "/hero/software-development.png",
            alt: "Interconnected software modules in a dark-blue visualisation",
          },
        },
        {
          id: "frontend",
          title: "Frontend",
          titleEmphasis: "Engineering",
          description:
            "I built responsive interfaces with React, Next.js, Vue.js and Nuxt.js. In production, I helped migrate 20+ modules from Nuxt.js to Next.js.",
          skills: ["React", "Next.js", "TypeScript", "Vue.js", "Nuxt.js", "JavaScript", "HTML", "CSS", "Basic Web Accessibility", "SCSS"],
          image: {
            src: "/hero/frontend-engineering.png",
            alt: "Responsive web interfaces and layered components in blue",
          },
        },
        {
          id: "games",
          title: "Game",
          titleEmphasis: "Development",
          description:
            "I co-developed Elemental Battle, a turn-based board game in Java featuring cards, duels and surprise spaces.",
          skills: ["Java", "OOP", "Turn-based systems", "Card mechanics", "Game rules"],
          image: {
            src: "/hero/game-development.png",
            alt: "Isometric board for a turn-based strategy game",
          },
        },
        {
          id: "aiData",
          title: "AI & Data",
          titleEmphasis: "Engineering",
          description:
            "For my master's thesis, I am building an NLP pipeline to classify European Portuguese emails and extract structured information.",
          skills: ["Python", "scikit-learn", "PyTorch", "Transformers", "spaCy", "Bert", "NLP", "Machine Learning", "Question Answering"],
          image: {
            src: "/hero/ai-data-engineering.png",
            alt: "Data flowing through layers of a language model",
          },
        },
      ],
      viewWork: "View my work",
      downloadCv: "Download CV",
      socialProfilesAriaLabel: "Social profiles",
      location: "Portugal · Open to remote",
      technologiesAriaLabel: "Skills for this area",
      carousel: {
        ariaLabel: "Professional areas of interest",
        previousSlideAriaLabel: "Show the previous area",
        nextSlideAriaLabel: "Show the next area",
        goToSlideAriaLabel: "Go to area {{number}} of {{total}}",
        slideStatus: "{{title}}, area {{current}} of {{total}}",
      },
      professionalFocusAriaLabel: "Professional focus",
      profileLabel: "PROFILE / 01",
      openToWork: "Open to work",
      focusLabel: "Focus",
      focusValue: "AI + Web",
      approachLabel: "Approach",
      approachValue: "Useful, clear, reliable",
    },
    featuredProjects: {
      title: "Projects developed",
      description:
        "Projects in applied AI, full-stack software development and game development.",
      viewAll: "View all projects",
      viewCaseStudy: "View case study",
    },
    about: {
      title: "Curious by nature. Practical by design.",
      introduction:
        "I'm a software engineer who enjoys turning ambiguous problems into clear, useful products. My interests sit at the intersection of thoughtful web experiences and applied artificial intelligence.",
      description:
        "I care about the details behind a product as much as the interface in front of it: sensible architecture, maintainable code, honest collaboration and technology chosen for a reason. I'm happiest when I'm learning, building and making something a little easier to use.",
      principles: [
        {
          icon: "code",
          title: "Build thoughtfully",
          description: "Simple foundations that can grow without getting in the way.",
        },
        {
          icon: "spark",
          title: "Keep exploring",
          description: "New ideas are useful when they lead to better outcomes for people.",
        },
      ],
    },
    experience: {
      title: "Work, research and steady progress.",
      description:
        "Experience shaped by hands-on delivery, technical ownership and continuous learning.",
      entries: [
        {
          role: "Master's Dissertation Researcher",
          company: "Academic research",
          startDate: "2025",
          endDate: "Present",
          description:
            "Researching how European Portuguese emails can be transformed into structured events and temporal information, from dataset exploration and annotation strategy to transformer-based experiments and evaluation.",
          technologies: [
            "Python",
            "BERT",
            "Transformers",
            "NLP",
            "Question Answering",
          ],
        },
        {
          role: "Full-Stack Developer",
          company: "ERP4U · Academic project",
          startDate: "2024",
          endDate: "2025",
          description:
            "Contributed to an ERP prototype in Laravel and PHP, with Blade interfaces and modules for managing suppliers, families and postal codes.",
          technologies: ["PHP", "Laravel", "Blade", "Bootstrap", "jQuery"],
        },
        {
          role: "Game Software Developer",
          company: "Elemental Battle · Academic project",
          startDate: "2023",
          endDate: "2024",
          description:
            "Co-developed a turn-based board game in Java, applying object-oriented programming to the board rules, cards and player duels.",
          technologies: ["Java", "OOP"],
        },
      ],
    },
    skills: {
      title: "The right tool for the problem.",
      description:
        "A practical toolkit developed through professional work, academic projects and ongoing research.",
      categories: [
        {
          title: "Frontend",
          description:
            "Accessible, responsive interfaces built with a strong component architecture.",
          skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "SCSS"],
        },
        {
          title: "Backend",
          description:
            "Application services, domain logic and APIs designed around maintainable foundations.",
          skills: ["Python", "C#", "Java", "PHP", "Laravel"],
        },
        {
          title: "AI / Machine Learning",
          description:
            "Language-focused experimentation spanning data preparation, modelling and evaluation.",
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
          title: "Databases",
          description:
            "Relational and graph data modelling for product and research use cases.",
          skills: ["PostgreSQL", "MySQL", "SQL Server", "Neo4j"],
        },
        {
          title: "Tools",
          description:
            "Practical workflows for versioning, collaboration and reproducible delivery.",
          skills: ["Git", "GitHub", "Docker"],
        },
      ],
    },
    currentWork: {
      status: "Currently researching",
      learnMore: "Learn more",
      topicsAriaLabel: "Research topics",
      content: {
        label: "Master's dissertation",
        title:
          "Automatic Recognition of Events and Temporal Expressions in Emails: Development of a European Portuguese Model",
        description:
          "I'm developing a system for the automatic understanding of European Portuguese email, exploring how language models can classify messages and extract events, dates and useful structured information.",
        projectHref: "/projects/email-recognition",
        topics: [
          "Natural Language Processing",
          "BERT",
          "Email Classification",
          "Event Extraction",
          "Temporal Expressions",
          "Question Answering",
        ],
        technologies: ["Python", "Machine Learning", "PT-PT"],
      },
    },
    contact: {
      title: "Let's work together",
      description:
        "I'm open to conversations about Software Engineering, Frontend Development and applied AI. If you're building something worthwhile, I'd be glad to hear about it.",
    },
    footer: {
      socialLinksAriaLabel: "Social links",
      backToTop: "Back to top",
    },
  },
  projectsPage: {
    skipToContent: "Skip to content",
    backHome: "Back home",
    title: "Projects with a story behind them.",
    description:
      "A closer look at applied AI research, product development and software design—including the decisions, trade-offs and lessons behind each project.",
    allProjects: "All projects",
    caseCount_one: "{{count}} case study",
    caseCount_other: "{{count}} case studies",
    viewCaseStudy: "View case study",
    liveDemo: "Live demo",
    contactEyebrow: "Have a project in mind?",
    contactTitle: "Let's build something useful.",
    contactDescription:
      "I'm open to thoughtful software engineering, frontend and applied AI opportunities.",
    contactAction: "Get in touch",
  },
  projectDetail: {
    skipToContent: "Skip to content",
    allProjects: "All projects",
    caseStudy: "Case study",
    projectDetailsAriaLabel: "Project details",
    technologies: "Technologies",
    liveDemo: "Live demo",
    viewGitHub: "View GitHub",
    navigationAriaLabel: "Project navigation",
    finishedReading: "Finished reading?",
    exploreMore: "Explore the rest of the work.",
    viewAllProjects: "View all projects",
  },
  projects: [
    {
      id: "email-recognition",
      title: "Email Recognition PT-PT",
      shortDescription:
        "An NLP research system that turns European Portuguese emails into structured events and temporal signals.",
      description:
        "My master's dissertation explores a language-processing pipeline for understanding European Portuguese email: classifying messages, identifying relevant events and resolving when those events happen.",
      image: {
        src: "/projects/email-recognition.svg",
        alt: "Conceptual email analysis interface showing a Portuguese message becoming structured NLP output",
      },
      technologies: ["Python", "BERT", "NLP", "Machine Learning", "Question Answering"],
      featured: true,
      sections: [
        {
          type: "text",
          title: "The research problem",
          content:
            "Emails contain valuable actions, dates and commitments, but their informal language and conversational context make that information difficult to process automatically. European Portuguese adds a further challenge because representative datasets and specialised models are comparatively limited.",
        },
        {
          type: "features",
          title: "Research focus",
          features: [
            {
              title: "Email classification",
              description:
                "Identify the intent and operational category of each message before downstream extraction.",
            },
            {
              title: "Event recognition",
              description:
                "Detect actions, participants and relevant contextual attributes in unstructured text.",
            },
            {
              title: "Temporal understanding",
              description:
                "Recognise explicit and relative time expressions and associate them with events.",
            },
            {
              title: "Question answering",
              description:
                "Explore targeted extraction through natural-language questions over message content.",
            },
          ],
        },
        {
          type: "text",
          title: "Working approach",
          content:
            "The work combines a carefully defined annotation strategy with transformer-based baselines and task-specific experiments. Evaluation is designed per capability so classification, extraction and temporal reasoning can be compared independently before being composed into a wider pipeline.",
        },
        {
          type: "image",
          title: "From inbox to structured knowledge",
          src: "/projects/email-recognition.svg",
          alt: "Visual summary of the Email Recognition PT-PT processing pipeline",
          caption:
            "Concept artwork for the research workflow; replace with a verified architecture diagram or experiment result.",
        },
      ],
    },
    {
      id: "erp4u",
      title: "ERP4U",
      shortDescription:
        "A Laravel ERP prototype for managing suppliers, families and postal codes.",
      description:
        "ERP4U is an academic project built with PHP and Laravel. The repository includes create, read, update and delete flows for suppliers, families and postal codes, alongside authentication and user-profile management.",
      image: {
        src: "/projects/erp4u.svg",
        alt: "Concept illustration of an ERP4U dashboard with sample charts and indicators",
      },
      technologies: ["PHP", "Laravel", "Blade", "Bootstrap", "jQuery", "MVC"],
      githubUrl: "https://github.com/vascogeada/ERP4U",
      featured: true,
      sections: [
        {
          type: "text",
          title: "Overview",
          content:
            "The published code shows an administrative prototype focused on reference data. Blade pages manage suppliers, families and postal codes; registration, sign-in and profile pages are also present. The dashboard contains sample indicators and transactions, not reports calculated from those modules.",
        },
        {
          type: "features",
          title: "Features in the repository",
          features: [
            {
              title: "Suppliers",
              description:
                "List, create, edit and delete supplier records with a code, name, address, town and postal code.",
            },
            {
              title: "Families",
              description:
                "Manage family records through list pages and create and edit forms.",
            },
            {
              title: "Postal codes",
              description:
                "Manage postal codes and locations, with an association defined in the supplier model.",
            },
            {
              title: "User account",
              description:
                "Authentication flows and pages to view or edit a profile and change the password.",
            },
          ],
        },
        {
          type: "text",
          title: "Engineering perspective",
          content:
            "The implementation combines Laravel routes and controllers, Eloquent models, database migrations and Blade views. The admin interface uses Bootstrap and jQuery/DataTables. The repository demonstrates these management modules but does not include operational sales, stock or reporting features.",
        },
        {
          type: "image",
          src: "/projects/erp4u.svg",
          alt: "Concept illustration of the ERP4U admin dashboard",
          caption:
            "Concept artwork for the portfolio; it is neither a screenshot nor a representation of real project data.",
        },
      ],
    },
    {
      id: "elemental-battle",
      title: "Elemental Battle",
      shortDescription:
        "A Java turn-based board game for 2 to 6 players, featuring cards, duels and surprise spaces.",
      description:
        "An academic project co-developed with Olavo Cacheiro to apply object-oriented programming and software engineering. Players move around a 25-space board and fight card-based duels; the goal is to earn 10 wins.",
      image: {
        src: "/projects/elemental-battle.svg",
        alt: "Concept illustration of Elemental Battle, a board game with turn-based duels",
      },
      technologies: ["Java", "OOP"],
      githubUrl: "https://github.com/Elemental-Battle/Elemental_Battle_Project",
      featured: true,
      sections: [
        {
          type: "text",
          title: "How it plays",
          content:
            "Two to six players take alternating turns, rolling a six-sided die once per turn and moving clockwise. On duel spaces, cards decide the outcome; the first player to collect 10 duel wins reaches the game's goal.",
        },
        {
          type: "features",
          title: "Rules and mechanics",
          features: [
            {
              title: "Board",
              description:
                "The 5 × 5 board has 25 spaces: one starting space, eight neutral spaces, eight duel spaces and eight surprise spaces.",
            },
            {
              title: "Turns and movement",
              description:
                "Turns alternate between players; one die roll determines how many spaces to move clockwise.",
            },
            {
              title: "Deck and cards",
              description:
                "Each player starts with 10 cards. A card may have an ability, is discarded after use, and a random new card is gained when passing the start.",
            },
            {
              title: "Duels",
              description:
                "Card strength decides the winner; tied strength is broken by dexterity. If both values tie, neither player scores a point.",
            },
            {
              title: "Surprise spaces",
              description:
                "These may move a player forwards or backwards, or grant a strength or dexterity bonus to a card of their choice.",
            },
            {
              title: "Goal",
              description:
                "The goal is to win 10 duels. When several players share a space, duels between them are triggered too.",
            },
          ],
        },
        {
          type: "image",
          title: "Project illustration",
          src: "/projects/elemental-battle.svg",
          alt: "Concept illustration of Elemental Battle's turn-based duels",
          caption:
            "Concept artwork for the portfolio; this is not an in-game screenshot.",
        },
        {
          type: "text",
          title: "Technical learning",
          content:
            "The project provided hands-on practice with Java and object-oriented programming by modelling players, cards, the board, turns and duels, and organising rules for a game with multiple player interactions.",
        },
      ],
    },
  ],
} satisfies TranslationResource;

export default en;
