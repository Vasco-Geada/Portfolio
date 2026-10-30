/** Human-readable route segment, such as `email-recognition`. */
export type ProjectSlug = string;

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface TextProjectSection {
  type: "text";
  title?: string;
  content: string;
}

export interface ImageProjectSection extends ProjectImage {
  type: "image";
  title?: string;
}

export interface GalleryProjectSection {
  type: "gallery";
  title?: string;
  images: ProjectImage[];
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface FeaturesProjectSection {
  type: "features";
  title?: string;
  features: ProjectFeature[];
}

export type ProjectSection =
  | TextProjectSection
  | ImageProjectSection
  | GalleryProjectSection
  | FeaturesProjectSection;

export interface Project {
  id: ProjectSlug;
  title: string;
  shortDescription: string;
  description: string;
  image: ProjectImage;
  technologies: string[];
  githubUrl?: string;
  projectUrl?: string;
  featured: boolean;
  sections: ProjectSection[];
}

export interface ProjectsPageContent {
  skipToContent: string;
  backHome: string;
  eyebrow: string;
  title: string;
  description: string;
  allProjects: string;
  caseCount_one: string;
  caseCount_other: string;
  viewCaseStudy: string;
  liveDemo: string;
  contactEyebrow: string;
  contactTitle: string;
  contactDescription: string;
  contactAction: string;
}

export interface ProjectDetailContent {
  skipToContent: string;
  allProjects: string;
  caseStudy: string;
  projectDetailsAriaLabel: string;
  technologies: string;
  liveDemo: string;
  viewGitHub: string;
  navigationAriaLabel: string;
  finishedReading: string;
  exploreMore: string;
  viewAllProjects: string;
}
