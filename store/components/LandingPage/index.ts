import type { SocialIconName } from "@store/components/Icon";
import type { HeroSlide } from "@store/components/LandingPage/HeroCarousel";

export interface Experience {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface SocialLink {
  id: "github" | "linkedin" | "email";
  label: string;
  href: string;
  icon: SocialIconName;
}

export interface CurrentWorkContent {
  label: string;
  title: string;
  description: string;
  projectHref: string;
  topics: string[];
  technologies: string[];
}

export interface AboutPrinciple {
  icon: "code" | "spark";
  title: string;
  description: string;
}

export interface HomeContent {
  skipToMainContent: string;
  navigation: {
    primaryAriaLabel: string;
    mobileAriaLabel: string;
    menuAriaLabel: string;
    downloadCv: string;
    items: NavigationItem[];
  };
  hero: {
    availability: string;
    greeting: string;
    slides: [HeroSlide, ...HeroSlide[]];
    viewWork: string;
    downloadCv: string;
    socialProfilesAriaLabel: string;
    location: string;
    technologiesAriaLabel: string;
    carousel: {
      ariaLabel: string;
      previousSlideAriaLabel: string;
      nextSlideAriaLabel: string;
      goToSlideAriaLabel: string;
      slideStatus: string;
    };
    professionalFocusAriaLabel: string;
    profileLabel: string;
    openToWork: string;
    focusLabel: string;
    focusValue: string;
    approachLabel: string;
    approachValue: string;
  };
  featuredProjects: {
    title: string;
    description: string;
    viewAll: string;
    viewCaseStudy: string;
  };
  about: {
    title: string;
    introduction: string;
    description: string;
    principles: AboutPrinciple[];
  };
  experience: {
    title: string;
    description: string;
    entries: Experience[];
  };
  skills: {
    title: string;
    description: string;
    categories: SkillCategory[];
  };
  currentWork: {
    status: string;
    learnMore: string;
    topicsAriaLabel: string;
    content: CurrentWorkContent;
  };
  contact: {
    title: string;
    description: string;
  };
  footer: {
    socialLinksAriaLabel: string;
    backToTop: string;
  };
}
