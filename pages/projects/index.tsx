import Head from "next/head";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Description } from "@/components/Description";
import { Icon } from "@/components/Icon";
import { Image } from "@/components/Image";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link } from "@/components/Link";
import { Text } from "@/components/Text";
import { Title } from "@/components/Title";
import { useI18n } from "@/i18n/useI18n";
import { createLocaleServerSideProps } from "@lang/server";

import styles from "./styles.module.scss";

export default function ProjectsPage() {
  const { content, t } = useI18n();
  const copy = content.projectsPage;
  const { projects, site } = content;

  return (
    <>
      <Head>
        <title>{`${content.metadata.projectsTitle} | ${site.name}`}</title>
        <meta name="description" content={content.metadata.projectsDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${content.metadata.projectsTitle} | ${site.name}`} />
        <meta property="og:description" content={content.metadata.projectsDescription} />
        <meta property="og:site_name" content={content.metadata.applicationName} />
        <meta property="og:locale" content={content.metadata.openGraphLocale} />
      </Head>

      <div className={styles.page}>
      <a className="skip-link" href="#main-content">
        {copy.skipToContent}
      </a>

      <header className={styles.topbar}>
        <Container className={styles.topbarInner}>
          <Link href="/" variant="nav" underline="none" className={styles.brand}>
            {site.brand}<span aria-hidden="true">.</span>
            <span className="sr-only">
              {t("common.homeAriaLabel", { name: site.name })}
            </span>
          </Link>
          <div className={styles.topbarActions}>
            <LanguageSwitcher />
            <Button href="/" variant="ghost" size="small">
              {copy.backHome}
            </Button>
          </div>
        </Container>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="projects-page-title">
          <Container>
            <Text
              as="p"
              size="small"
              tone="primary"
              weight="semibold"
              className={styles.eyebrow}
            >
              {copy.eyebrow} / {String(projects.length).padStart(2, "0")}
            </Text>
            <Title as="h1" id="projects-page-title" size="xl" className={styles.title}>
              {copy.title}
            </Title>
            <Description size="large" width="wide" className={styles.intro}>
              {copy.description}
            </Description>
          </Container>
        </section>

        <section className={styles.projectsSection} aria-labelledby="all-projects-title">
          <Container>
            <div className={styles.sectionHeading}>
              <Title as="h2" id="all-projects-title" size="medium">
                {copy.allProjects}
              </Title>
              <Text as="p" size="small" tone="muted">
                {t("projectsPage.caseCount", { count: projects.length })}
              </Text>
            </div>

            <ul className={styles.grid}>
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  as="li"
                  padding="none"
                  interactive
                  className={styles.card}
                >
                  <div className={styles.imageWrap}>
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={1600}
                      height={900}
                      sizes="(max-width: 48rem) 100vw, (max-width: 72rem) 50vw, 33vw"
                      className={styles.projectImage}
                    />
                    <span className={styles.projectNumber} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardCopy}>
                      <Title as="h3" size="medium">
                        {project.title}
                      </Title>
                      <Description size="small" width="none">
                        {project.shortDescription}
                      </Description>
                    </div>

                    <div
                      className={styles.badges}
                      aria-label={t("common.technologiesAriaLabel", { name: project.title })}
                    >
                      {project.technologies.map((technology) => (
                        <Badge key={technology} size="small">
                          {technology}
                        </Badge>
                      ))}
                    </div>

                    <div className={styles.cardLinks}>
                      <Link
                        href={`/projects/${project.id}`}
                        variant="standalone"
                        className={styles.caseStudyLink}
                      >
                        {copy.viewCaseStudy}
                        <Icon name="arrow-right" size="small" />
                      </Link>

                      {project.githubUrl ? (
                        <Link href={project.githubUrl} external variant="muted">
                          <span className={styles.externalLink}>
                            <Icon name="github" size="small" />
                            {content.common.githubLabel}
                          </span>
                        </Link>
                      ) : null}

                      {project.projectUrl ? (
                        <Link href={project.projectUrl} external variant="muted">
                          <span className={styles.externalLink}>
                            <Icon name="arrow-up-right" size="small" />
                            {copy.liveDemo}
                          </span>
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </Card>
              ))}
            </ul>
          </Container>
        </section>

        <section className={styles.contact} aria-labelledby="projects-contact-title">
          <Container size="narrow" className={styles.contactInner}>
            <Text as="p" size="small" tone="primary" weight="semibold" className={styles.eyebrow}>
              {copy.contactEyebrow}
            </Text>
            <Title as="h2" id="projects-contact-title" size="large" align="center">
              {copy.contactTitle}
            </Title>
            <Description align="center" width="compact">
              {copy.contactDescription}
            </Description>
            <Button href="/#contact" size="large">
              {copy.contactAction}
              <Icon name="arrow-right" size="small" />
            </Button>
          </Container>
        </section>
      </main>
      </div>
    </>
  );
}

export const getServerSideProps = createLocaleServerSideProps();
