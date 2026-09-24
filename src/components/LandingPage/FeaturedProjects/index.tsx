"use client";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Description } from "@/components/Description";
import { Icon } from "@/components/Icon";
import { Image } from "@/components/Image";
import { Link } from "@/components/Link";
import { Title } from "@/components/Title";
import { useI18n } from "@/i18n/useI18n";
import styles from "./styles.module.scss";

export function FeaturedProjects() {
  const { content, t } = useI18n();
  const copy = content.home.featuredProjects;
  const featuredProjects = content.projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <Container>
        <div className={styles.heading}>
          <div>
            {/* <Text as="p" size="small" tone="secondary" weight="semibold" className={styles.eyebrow}>
              {copy.eyebrow}
            </Text> */}
            <Title as="h2" id="projects-title" size="large">
              {copy.title}
            </Title>
            <Description className={styles.intro}>
              {copy.description}
            </Description>
          </div>
          <Button href="/projects" variant="secondary">
            {copy.viewAll}
            <Icon name="arrow-right" size="small" />
          </Button>
        </div>

        <div className={styles.grid}>
          {featuredProjects.map((project, index) => (
            <Card key={project.id} as="article" padding="none" className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={1600}
                  height={900}
                  sizes={index === 0 ? "(max-width: 900px) 100vw, 66vw" : "(max-width: 900px) 100vw, 33vw"}
                  className={styles.projectImage}
                />
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className={styles.cardBody}>
                <Title as="h3" size="medium">
                  {project.title}
                </Title>
                <Description size="small">{project.shortDescription}</Description>

                <div
                  className={styles.badges}
                  aria-label={t("common.technologiesAriaLabel", { name: project.title })}
                >
                  {project.technologies.slice(0, 4).map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>

                <div className={styles.links}>
                  <Link href={`/projects/${project.id}`} className={styles.projectLink}>
                    {copy.viewCaseStudy}
                    <Icon name="arrow-right" size="small" />
                  </Link>
                  {project.githubUrl ? (
                    <Link href={project.githubUrl} external variant="muted" className={styles.githubLink}>
                      <Icon name="github" size="small" />
                      {content.common.githubLabel}
                    </Link>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
