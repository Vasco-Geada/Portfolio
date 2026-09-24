import type { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

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
import { getProjectById } from "@lang/index";
import { getLocaleFromCookieHeader } from "@lang/server";
import type { LocalePageProps } from "@store/I18n";
import type { ProjectSection } from "@store/Projects";
import type { SectionBlockProps } from "@store/Projects/[id]";

import styles from "./styles.module.scss";

function SectionBlock({ children, className, title }: SectionBlockProps) {
  const Element = title ? "section" : "div";

  return (
    <Element className={className}>
      {title ? (
        <Title as="h2" size="large" className={styles.sectionTitle}>
          {title}
        </Title>
      ) : null}
      {children}
    </Element>
  );
}

function assertNever(section: never): never {
  throw new Error(`Unsupported project section: ${String(section)}`);
}

function renderSection(section: ProjectSection, index: number) {
  const key = `${section.type}-${index}`;

  switch (section.type) {
    case "text":
      return (
        <SectionBlock key={key} className={styles.contentSection} title={section.title}>
          <Description size="large" width="wide" className={styles.prose}>
            {section.content}
          </Description>
        </SectionBlock>
      );

    case "image":
      return (
        <SectionBlock key={key} className={styles.mediaSection} title={section.title}>
          <figure className={styles.figure}>
            <div className={styles.figureFrame}>
              <Image
                src={section.src}
                alt={section.alt}
                width={1600}
                height={900}
                sizes="(max-width: 75rem) 100vw, 75rem"
                className={styles.sectionImage}
              />
            </div>
            {section.caption ? (
              <figcaption className={styles.caption}>{section.caption}</figcaption>
            ) : null}
          </figure>
        </SectionBlock>
      );

    case "gallery":
      return (
        <SectionBlock key={key} className={styles.mediaSection} title={section.title}>
          <div className={styles.gallery}>
            {section.images.map((image, imageIndex) => (
              <figure key={`${image.src}-${imageIndex}`} className={styles.figure}>
                <div className={styles.figureFrame}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    sizes="(max-width: 48rem) 100vw, 50vw"
                    className={styles.sectionImage}
                  />
                </div>
                {image.caption ? (
                  <figcaption className={styles.caption}>{image.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </SectionBlock>
      );

    case "features":
      return (
        <SectionBlock key={key} className={styles.contentSection} title={section.title}>
          <ul className={styles.featureGrid}>
            {section.features.map((feature) => (
              <Card key={feature.title} as="li" variant="outlined" className={styles.featureCard}>
                <span className={styles.featureMarker} aria-hidden="true" />
                <Title as="h3" size="small">
                  {feature.title}
                </Title>
                <Description size="small" width="none">
                  {feature.description}
                </Description>
              </Card>
            ))}
          </ul>
        </SectionBlock>
      );

    default:
      return assertNever(section);
  }
}

export default function ProjectDetailPage() {
  const router = useRouter();
  const { content, t } = useI18n();
  const copy = content.projectDetail;
  const projectId = typeof router.query.id === "string" ? router.query.id : "";
  const project = content.projects.find((item) => item.id === projectId);

  if (!project) return null;

  const hasExternalLinks = Boolean(project.githubUrl || project.projectUrl);

  return (
    <>
      <Head>
        <title>{`${project.title} | ${content.site.name}`}</title>
        <meta name="description" content={project.shortDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${project.title} | ${content.site.name}`} />
        <meta property="og:description" content={project.shortDescription} />
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
            {content.site.brand}<span aria-hidden="true">.</span>
            <span className="sr-only">
              {t("common.homeAriaLabel", { name: content.site.name })}
            </span>
          </Link>
          <div className={styles.topbarActions}>
            <LanguageSwitcher />
            <Link href="/projects" variant="standalone" className={styles.backLink}>
              <span aria-hidden="true">←</span>
              {copy.allProjects}
            </Link>
          </div>
        </Container>
      </header>

      <main id="main-content" tabIndex={-1}>
        <header className={styles.hero}>
          <Container>
            <Text
              as="p"
              size="small"
              tone="primary"
              weight="semibold"
              className={styles.eyebrow}
            >
              {copy.caseStudy}
            </Text>

            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <Title as="h1" size="xl" className={styles.projectTitle}>
                  {project.title}
                </Title>
                <Description size="large" width="wide" className={styles.lead}>
                  {project.description}
                </Description>
              </div>

              <aside className={styles.projectMeta} aria-label={copy.projectDetailsAriaLabel}>
                <Text as="p" size="xsmall" tone="muted" weight="semibold" className={styles.metaLabel}>
                  {copy.technologies}
                </Text>
                <div className={styles.badges}>
                  {project.technologies.map((technology) => (
                    <Badge key={technology} variant="outline" tone="primary">
                      {technology}
                    </Badge>
                  ))}
                </div>

                {hasExternalLinks ? (
                  <div className={styles.actions}>
                    {project.projectUrl ? (
                      <Button href={project.projectUrl} external size="small">
                        {copy.liveDemo}
                        <Icon name="arrow-up-right" size="small" />
                      </Button>
                    ) : null}
                    {project.githubUrl ? (
                      <Button href={project.githubUrl} external variant="secondary" size="small">
                        <Icon name="github" size="small" />
                        {copy.viewGitHub}
                      </Button>
                    ) : null}
                  </div>
                ) : null}
              </aside>
            </div>

            <div className={styles.coverFrame}>
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={1600}
                height={900}
                priority
                sizes="(max-width: 75rem) 100vw, 75rem"
                className={styles.coverImage}
              />
            </div>
          </Container>
        </header>

        <Container as="div" className={styles.story}>
          {project.sections.map(renderSection)}
        </Container>

        <nav className={styles.bottomNav} aria-label={copy.navigationAriaLabel}>
          <Container className={styles.bottomNavInner}>
            <div>
              <Text as="p" size="small" tone="muted">
                {copy.finishedReading}
              </Text>
              <Title as="h2" size="medium">
                {copy.exploreMore}
              </Title>
            </div>
            <Button href="/projects" variant="secondary">
              {copy.viewAllProjects}
              <Icon name="arrow-right" size="small" />
            </Button>
          </Container>
        </nav>
      </main>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<LocalePageProps> = async ({
  params,
  req,
}) => {
  const locale = getLocaleFromCookieHeader(req.headers.cookie);
  const projectId = typeof params?.id === "string" ? params.id : "";

  if (!getProjectById(locale, projectId)) {
    return { notFound: true };
  }

  return {
    props: { initialLocale: locale },
  };
};
