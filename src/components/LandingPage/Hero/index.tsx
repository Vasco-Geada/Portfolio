"use client";

import { useState } from "react";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Description } from "@/components/Description";
import { Icon } from "@/components/Icon";
import { Link } from "@/components/Link";
import { Title } from "@/components/Title";
import { HeroCarousel } from "@/components/LandingPage/HeroCarousel";
import { useI18n } from "@/i18n/useI18n";
import styles from "./styles.module.scss";

export function Hero() {
  const { content } = useI18n();
  const { hero } = content.home;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = hero.slides[activeIndex] ?? hero.slides[0];
  const profileLinks = content.site.socialLinks.filter((link) => link.id !== "email");

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.carouselOverlay} />
      <HeroCarousel onSlideChange={setActiveIndex} />
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <Title as="h1" id="hero-title" size="xl" className={styles.title}>
            {activeSlide.title} {activeSlide.titleEmphasis}
          </Title>
          <Description size="large" className={styles.description}>
            {activeSlide.description}
          </Description>

          <div className={styles.actions}>
            <Button href="#projects" variant="primary" size="large">
              {hero.viewWork}
              <Icon name="arrow-right" size="small" />
            </Button>
            <Button href={content.site.cvUrl} variant="secondary" size="large" download>
              {hero.downloadCv}
              <Icon name="download" size="small" />
            </Button>
          </div>

          <div className={styles.meta}>
            <div className={styles.socials} aria-label={hero.socialProfilesAriaLabel}>
              {profileLinks.map((link) => (
                <Link key={link.label} href={link.href} external className={styles.socialLink}>
                  <Icon name={link.icon} size="small" />
                  {link.label}
                </Link>
              ))}
            </div>
            <span className={styles.location}>{hero.location}</span>
          </div>

          <div className={styles.technologies} aria-label={hero.technologiesAriaLabel}>
            {activeSlide.skills.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>
        </div>

      {/*   <aside className={styles.profileCard} aria-label={hero.professionalFocusAriaLabel}>
          <div className={styles.cardTopline}>
            <span>{hero.profileLabel}</span>
            <span className={styles.cardStatus}>{hero.openToWork}</span>
          </div>

          

          <div className={styles.snapshot}>
            <div>
              <Text as="span" size="small" tone="muted">
                {hero.focusLabel}
              </Text>
              <Text as="span" weight="semibold">
                {hero.focusValue}
              </Text>
            </div>
            <div>
              <Text as="span" size="small" tone="muted">
                {hero.approachLabel}
              </Text>
              <Text as="span" weight="semibold">
                {hero.approachValue}
              </Text>
            </div>
          </div>
        </aside> */}
      </Container>
    </section>
  );
}
