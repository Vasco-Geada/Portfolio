import type { HomeContent, SocialLink } from "@store/components/LandingPage";
import type {
  Project,
  ProjectDetailContent,
  ProjectsPageContent,
} from "@store/Projects";

export type Locale = "pt" | "en";

export interface CommonContent {
  languageSwitcherAriaLabel: string;
  portugueseLabel: string;
  englishLabel: string;
  portugueseShortLabel: string;
  englishShortLabel: string;
  githubLabel: string;
  opensInNewTab: string;
  homeAriaLabel: string;
  technologiesAriaLabel: string;
  skillsAriaLabel: string;
  emailAriaLabel: string;
}

export interface SiteContent {
  name: string;
  brand: string;
  email: string;
  cvUrl: string;
  socialLinks: SocialLink[];
}

export interface MetadataContent {
  defaultTitle: string;
  applicationName: string;
  description: string;
  keywords: string[];
  openGraphLocale: string;
  projectsTitle: string;
  projectsDescription: string;
  projectNotFoundTitle: string;
}

export interface TranslationResource {
  common: CommonContent;
  site: SiteContent;
  metadata: MetadataContent;
  home: HomeContent;
  projectsPage: ProjectsPageContent;
  projectDetail: ProjectDetailContent;
  projects: Project[];
}

export interface LocalePageProps {
  initialLocale?: Locale;
}
