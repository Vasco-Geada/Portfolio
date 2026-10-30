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
      {
        id: "phone",
        label: "+351 962 976 705",
        href: "tel:+351962976705",
        icon: "phone",
      },
    ],
  },
  metadata: {
    defaultTitle: "Vasco Geada | Software Engineer",
    applicationName: "Vasco Geada — Portfolio",
    description:
      "Software engineer with nearly two years of frontend experience in production B2B SaaS applications built with React, Next.js and TypeScript.",
    keywords: [
      "Vasco Geada",
      "Software Engineer",
      "Frontend Engineer",
      "Full-Stack Developer",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React",
      "Java",
      "NLP",
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
        { label: "Education", href: "#education" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
    },
    hero: {
      availability: "Available for new opportunities",
      greeting: "Hi, I'm Vasco Geada.",
      slides: [
         {
          id: "devOps",
          title: "DevOps &",
          titleEmphasis: "DevSecOps.",
          description:
            "I developed a CI/CD pipeline for web applications, including automated testing, linting, build and deployment for my home lab.",
          skills: ["Python", "Docker", "Kubernetes", "Terraform", "Helm", "CI/CD", "GitHub Actions"],
          image: {
            src: "/hero/ai-data-engineering.png",
            alt: "Fluxo de dados a atravessar camadas de um modelo de linguagem", 
          },
        },
        {
          id: "cloud",
          title: "Cloud",
          titleEmphasis: "Engineering",
          description:
            "I built a home lab of infrastructure as code (IaC) for cloud applications, including provisioning, configuration and management of resources.",
          skills: ["Proxmox", "PfSense", "Kubernetes", "Terraform", "Helm", "Docker", "Grafana"],
          image: {
            src: "/hero/ai-data-engineering.png",
            alt: "Fluxo de dados a atravessar camadas de um modelo de linguagem", 
          },
        },
        {
          id: "software",
          title: "Software",
          titleEmphasis: "Development",
          description:
            "I have nearly two years of frontend experience in B2B SaaS applications and I am building DevTrack in Java while expanding my backend skills.",
          skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "Git"],
          image: {
            src: "/hero/software-development.png",
            alt: "Interconnected software modules in a dark-blue visualisation",
          },
        },
        {
          id: "games",
          title: "Game",
          titleEmphasis: "Development",
          description:
            "I developed Elemental Battle, a Java console game that applies inheritance, polymorphism, abstraction and interfaces to its game logic.",
          skills: ["Java", "OOP", "Inheritance", "Polymorphism", "Abstraction", "Interfaces"],
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
            "For my master's dissertation, I am building a modular NLP pipeline to classify European Portuguese emails and extract structured information.",
          skills: ["Python", "scikit-learn", "PyTorch", "Hugging Face Transformers", "spaCy", "BERTimbau", "NLP", "Machine Learning"],
          image: {
            src: "/hero/ai-data-engineering.png",
            alt: "Data flowing through layers of a language model",
          },
        },
      ],
      viewWork: "View my work",
      downloadCv: "Download CV",
      socialProfilesAriaLabel: "Social profiles",
      location: "Torres Novas, Portugal · Open to remote work",
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
      focusValue: "Software + Web",
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
      title: "Production experience, continuous learning.",
      introduction:
        "I'm a software engineer with nearly two years of frontend web-development experience, including production B2B SaaS applications built with React, Next.js, TypeScript and JavaScript.",
      description:
        "I have experience with REST APIs, debugging, MySQL and Agile development in cross-functional teams. I am currently building an object-oriented Java project, expanding my backend skills and continuing research in NLP and Machine Learning.",
      principles: [
        {
          icon: "code",
          title: "Solve and improve",
          description: "Debugging, error handling and performance improvements grounded in production work.",
        },
        {
          icon: "spark",
          title: "Keep learning",
          description: "Growing from frontend work into Java, backend development, NLP and Machine Learning.",
        },
      ],
    },
    experience: {
      title: "Professional experience in web development.",
      description:
        "Experience with production applications, API integrations and cross-functional collaboration.",
      entries: [
        {
          role: "Frontend Developer",
          company: "Digital Manager Guru · Portugal, remote",
          startDate: "01/2024",
          endDate: "07/2025",
          description:
            "Developed and maintained production web applications, helped migrate more than 20 modules from Nuxt.js to Next.js, delivered features and resolved production and performance issues. Integrated REST APIs, inspected Laravel backend code when required, and worked with Git/GitHub, GCP, Jira and Agile practices.",
          technologies: ["React", "Next.js", "Nuxt.js", "TypeScript", "JavaScript", "REST APIs", "Laravel", "GCP", "Jira"],
        },
        {
          role: "Frontend Developer Intern",
          company: "Digital Manager Guru · Santarém, Portugal · 755 hours",
          startDate: "04/2022",
          endDate: "08/2022",
          description:
            "Developed features with Vue.js, JavaScript, HTML and CSS, modernised the MyOrders customer portal and built new modules. Worked on Twilio, NuPay and MaxiPago integrations, created reusable components and improved API error handling.",
          technologies: ["Vue.js", "JavaScript", "HTML", "CSS", "REST APIs", "Twilio", "NuPay", "MaxiPago"],
        },
        {
          role: "Web Developer Intern",
          company: "Alta Densidade Informática · Lisbon, Portugal",
          startDate: "02/2020",
          endDate: "07/2020",
          description:
            "Developed and maintained websites with WordPress, HTML, CSS and PHP, contributed to web applications and improved existing interfaces and code.",
          technologies: ["WordPress", "HTML", "CSS", "PHP"],
        },
      ],
    },
    education: {
      title: "Education.",
      description:
        "An ongoing path through computing, software engineering and applied research.",
      entries: [
        {
          qualification: "Master's in Applied Informatics",
          institution: "Polytechnic University of Santarém",
          startDate: "08/2024",
          endDate: "Present",
          description:
            "Dissertation: Automatic Recognition of Events and Temporal Expressions in Emails — Development of a European Portuguese Model.",
        },
        {
          qualification: "Bachelor's in Computer Engineering",
          institution: "Polytechnic University of Santarém",
          startDate: "09/2025",
          endDate: "07/2026",
        },
        {
          qualification: "Bachelor's in Informatics",
          institution: "Polytechnic University of Santarém",
          startDate: "08/2022",
          endDate: "06/2024",
        },
        {
          qualification: "CTeSP in Information Systems Technologies and Programming",
          institution: "Polytechnic University of Santarém",
          startDate: "08/2020",
          endDate: "06/2022",
        },
      ],
    },
    skills: {
      title: "Technical skills.",
      description:
        "Technologies and practices used in professional work, projects and research.",
      categories: [
        {
          title: "Programming languages",
          description:
            "Languages used across web applications, object-oriented projects and data processing.",
          skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL"],
        },
        {
          title: "Full-stack and web development",
          description:
            "Interface development and integration of web applications with backend services.",
          skills: ["React", "Next.js", "Node.js", "Vue.js", "Nuxt.js", "REST APIs", "HTML5", "CSS3"],
        },
        {
          title: "Backend and databases",
          description:
            "Relational persistence experience and familiarity with backend development in Laravel and PHP.",
          skills: ["Laravel (familiar)", "PHP (familiar)", "MySQL", "SQL Server"],
        },
        {
          title: "Software engineering",
          description:
            "Design, diagnostic and collaboration practices applied throughout the development lifecycle.",
          skills: ["OOP", "Design Patterns", "Debugging", "API error handling", "Performance", "Git", "Agile", "JSON"],
        },
        {
          title: "AI / Machine Learning",
          description:
            "Research and development of a modular pipeline for European Portuguese emails.",
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
          title: "Cloud and tools",
          description:
            "Tools used for development, collaboration, cloud workflows and interface design.",
          skills: ["Google Cloud Platform", "Docker", "GitHub", "Postman", "Jira", "Figma"],
        },
      ],
    },
    currentWork: {
      status: "In development since 01/2026",
      learnMore: "Learn more",
      topicsAriaLabel: "Research topics",
      content: {
        label: "Master's dissertation",
        title:
          "Automatic Recognition of Events and Temporal Expressions in Emails: Development of a European Portuguese Model",
        description:
          "I research NLP and Machine Learning approaches and develop a modular Python pipeline to classify the intent of European Portuguese emails and extract events, temporal expressions and structured information.",
        projectHref: "/projects/email-recognition",
        topics: [
          "Natural Language Processing",
          "BERT",
          "Email Classification",
          "Event Extraction",
          "Temporal Expressions",
        ],
        technologies: ["Python", "scikit-learn", "spaCy", "PyTorch", "Hugging Face Transformers", "BERTimbau"],
      },
    },
    contact: {
      title: "Talk to me",
      description:
        "I'm open to DevOps, DevSecOps, Cloud Engineer and software development opportunities.",
    },
    footer: {
      socialLinksAriaLabel: "Social links",
      backToTop: "Back to top",
    },
  },
  projectsPage: {
    skipToContent: "Skip to content",
    backHome: "Back home",
    eyebrow: "Portfolio",
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
      id: "devtrack",
      title: "DevTrack",
      shortDescription:
        "A Java application in development for managing software projects, inspired by concepts from Git and Jira.",
      description:
        "DevTrack applies object-oriented programming to a project-management domain, with different task types and rules for assignments, statuses and work progression.",
      image: {
        src: "/projects/devtrack.svg",
        alt: "Concept illustration of DevTrack with tasks connected through a development workflow",
      },
      technologies: ["Java", "OOP", "Git"],
      githubUrl: "https://github.com/Vasco-Geada/DevTrack",
      featured: true,
      sections: [
        {
          type: "text",
          title: "Project goal",
          content:
            "Started in September 2026, DevTrack explores software-project management through concepts inspired by Git and Jira. The application organises projects, tasks, assignments and statuses in a Java domain model.",
        },
        {
          type: "features",
          title: "Work in progress",
          features: [
            {
              title: "Object-oriented model",
              description:
                "Inheritance, polymorphism, abstraction and encapsulation represent different task types and behaviours.",
            },
            {
              title: "Project rules",
              description:
                "Domain logic defines assignments, status transitions and software-project management.",
            },
            {
              title: "Planned evolution",
              description:
                "The roadmap includes a REST API with Spring Boot and a React interface built with Next.js.",
            },
          ],
        },
        {
          type: "image",
          title: "Conceptual workflow",
          src: "/projects/devtrack.svg",
          alt: "Conceptual flow of tasks and statuses in DevTrack",
          caption:
            "Portfolio concept artwork for a project that is still in development.",
        },
      ],
    },
    {
      id: "email-recognition",
      title: "Event Recognition System",
      shortDescription:
        "An NLP and Machine Learning system for classifying European Portuguese emails and extracting structured information.",
      description:
        "My master's dissertation investigates Natural Language Processing and Machine Learning approaches for recognising events and temporal expressions in European Portuguese emails.",
      image: {
        src: "/projects/email-recognition.svg",
        alt: "Conceptual email analysis interface showing a Portuguese message becoming structured NLP output",
      },
      technologies: ["Python", "scikit-learn", "spaCy", "PyTorch", "Hugging Face Transformers", "BERTimbau", "Machine Learning", "NLP"],
      githubUrl: "https://github.com/Vasco-Geada/email_recognition_pt_pt",
      featured: true,
      sections: [
        {
          type: "text",
          title: "The research problem",
          content:
            "Emails contain relevant events, intentions and temporal expressions, but their language and context make automatic extraction difficult. The work researches and selects approaches suited to processing European Portuguese emails.",
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
              title: "Modular pipeline",
              description:
                "Organise classification and extraction into Python modules with explicit requirements, architecture and model configurations.",
            },
          ],
        },
        {
          type: "text",
          title: "Working approach",
          content:
            "The work includes researching and selecting approaches, defining module requirements, architecture and model configurations, and iteratively implementing and refining the system with Python, scikit-learn, spaCy, PyTorch, Hugging Face Transformers and BERTimbau.",
        },
        {
          type: "image",
          title: "From inbox to structured knowledge",
          src: "/projects/email-recognition.svg",
          alt: "Visual summary of the Event Recognition System pipeline",
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
        "A Java turn-based console game for 2 to 6 players, featuring a board, cards, duels and surprise spaces.",
      description:
        "An academic project co-developed with Olavo Cacheiro between 2021 and 2022. The application uses object-oriented programming to model a console game where players move around a 25-space board and fight card-based duels.",
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
            "The project applied inheritance, polymorphism, abstraction and interfaces to model game entities and behaviours, separating responsibilities into reusable classes and components.",
        },
      ],
    },
  ],
} satisfies TranslationResource;

export default en;
