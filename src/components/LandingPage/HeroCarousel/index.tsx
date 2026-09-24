"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Icon } from "@/components/Icon";
import { Image } from "@/components/Image";
import { useI18n } from "@/i18n/useI18n";
import type {
  CarouselDirection,
  HeroCarouselProps,
} from "@store/components/LandingPage/HeroCarousel";

import styles from "./styles.module.scss";

const AUTO_PLAY_DELAY = 7_000;
const SLIDE_TRANSITION_DURATION = 650;

export function HeroCarousel({ onSlideChange }: HeroCarouselProps) {
  const { content, t } = useI18n();
  const slides = content.home.hero.slides;
  const slideCount = slides.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(slideCount > 1 ? 1 : 0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [cycleKey, setCycleKey] = useState(0);
  const activeIndexRef = useRef(0);
  const isMovingRef = useRef(false);
  const normalizeTimeoutRef = useRef<number | null>(null);
  const transitionFrameRef = useRef<number | null>(null);

  const renderedSlides =
    slideCount > 1
      ? [slides[slideCount - 1], ...slides, slides[0]]
      : slides;

  const moveTo = useCallback(
    (nextIndex: number, direction: CarouselDirection) => {
      if (slideCount < 2 || isMovingRef.current) return;

      const currentIndex = activeIndexRef.current;

      if (currentIndex === nextIndex) {
        setCycleKey((currentCycle) => currentCycle + 1);
        return;
      }

      isMovingRef.current = true;

      let nextTrackIndex = nextIndex + 1;

      if (direction === "next" && currentIndex === slideCount - 1 && nextIndex === 0) {
        nextTrackIndex = slideCount + 1;
      }

      if (direction === "previous" && currentIndex === 0 && nextIndex === slideCount - 1) {
        nextTrackIndex = 0;
      }

      setTransitionEnabled(true);
      setTrackIndex(nextTrackIndex);
      setActiveIndex(nextIndex);
      onSlideChange(nextIndex);
      activeIndexRef.current = nextIndex;
      setCycleKey((currentCycle) => currentCycle + 1);

      if (normalizeTimeoutRef.current !== null) {
        window.clearTimeout(normalizeTimeoutRef.current);
      }

      normalizeTimeoutRef.current = window.setTimeout(() => {
        const isClonedSlide = nextTrackIndex === 0 || nextTrackIndex === slideCount + 1;

        if (isClonedSlide) {
          setTransitionEnabled(false);
          setTrackIndex(nextIndex + 1);

          transitionFrameRef.current = window.requestAnimationFrame(() => {
            setTransitionEnabled(true);
          });
        }

        isMovingRef.current = false;
      }, SLIDE_TRANSITION_DURATION);
    },
    [onSlideChange, slideCount],
  );

  const showNext = useCallback(() => {
    const nextIndex = (activeIndexRef.current + 1) % slideCount;
    moveTo(nextIndex, "next");
  }, [moveTo, slideCount]);

  const showPrevious = useCallback(() => {
    const nextIndex = (activeIndexRef.current - 1 + slideCount) % slideCount;
    moveTo(nextIndex, "previous");
  }, [moveTo, slideCount]);

  const showSlide = (nextIndex: number) => {
    const currentIndex = activeIndexRef.current;
    const direction: CarouselDirection = nextIndex > currentIndex ? "next" : "previous";

    moveTo(nextIndex, direction);
  };

  useEffect(() => {
    if (slideCount < 2) return;

    const autoPlayTimeout = window.setTimeout(showNext, AUTO_PLAY_DELAY);

    return () => window.clearTimeout(autoPlayTimeout);
  }, [cycleKey, slideCount, showNext]);

  useEffect(
    () => () => {
      if (normalizeTimeoutRef.current !== null) {
        window.clearTimeout(normalizeTimeoutRef.current);
      }

      if (transitionFrameRef.current !== null) {
        window.cancelAnimationFrame(transitionFrameRef.current);
      }
    },
    [],
  );

  const activeSlide = slides[activeIndex];
  const carouselCopy = content.home.hero.carousel;

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carousel}
        role="region"
        aria-label={carouselCopy.ariaLabel}
      >
        <div className={styles.viewport}>
          <div
            className={`${styles.track} ${transitionEnabled ? "" : styles.withoutTransition}`}
            style={{ transform: `translate3d(-${trackIndex * 100}%, 0, 0)` }}
          >
            {renderedSlides.map((slide, renderedIndex) => {
              const isVisible = renderedIndex === trackIndex;

              return (
                <div
                  key={`${slide.id}-${renderedIndex}`}
                  className={styles.slide}
                  aria-hidden={!isVisible}
                >
                  <Image
                    src={slide.image.src}
                    alt={isVisible ? slide.image.alt : ""}
                    width={1600}
                    height={900}
                    priority={renderedIndex === 1}
                    draggable={false}
                    radius="none"
                    sizes="100vw"
                    className={styles.slideImage}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {slideCount > 1 ? (
          <>
            <button
              type="button"
              className={`${styles.arrowButton} ${styles.previousButton}`}
              aria-label={carouselCopy.previousSlideAriaLabel}
              onClick={showPrevious}
            >
              <Icon name="arrow-left" size="large" decorative />
            </button>

            <button
              type="button"
              className={`${styles.arrowButton} ${styles.nextButton}`}
              aria-label={carouselCopy.nextSlideAriaLabel}
              onClick={showNext}
            >
              <Icon name="arrow-right" size="large" decorative />
            </button>

            <div className={styles.pagination}>
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;
                const isNext = index === (activeIndex + 1) % slideCount;

                return (
                  <button
                    key={slide.id}
                    type="button"
                    className={`${styles.paginationButton} ${isActive ? styles.active : ""} ${isNext ? styles.next : ""}`}
                    aria-label={t("home.hero.carousel.goToSlideAriaLabel", {
                      number: index + 1,
                      total: slideCount,
                    })}
                    aria-pressed={isActive}
                    onClick={() => showSlide(index)}
                  >
                    <span className={styles.indicator} aria-hidden="true">
                      {isNext ? (
                        <span key={cycleKey} className={styles.indicatorProgress} />
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </>
        ) : null}

        <span className="sr-only" aria-live="polite" aria-atomic="true">
          {t("home.hero.carousel.slideStatus", {
            title: `${activeSlide.title} ${activeSlide.titleEmphasis}`,
            current: activeIndex + 1,
            total: slideCount,
          })}
        </span>
      </div>
    </div>
  );
}
