export type CarouselDirection = "next" | "previous";

export type HeroSlideId = "software" | "frontend" | "java" | "games" | "aiData";

export interface HeroSlide {
  id: HeroSlideId;
  title: string;
  titleEmphasis: string;
  description: string;
  skills: string[];
  image: {
    src: string;
    alt: string;
  };
}

export interface HeroCarouselProps {
  onSlideChange: (index: number) => void;
}
