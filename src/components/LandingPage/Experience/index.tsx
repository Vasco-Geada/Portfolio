"use client";

import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { Description } from "@/components/Description";
import { Text } from "@/components/Text";
import { Title } from "@/components/Title";
import { useI18n } from "@/i18n/useI18n";
import styles from "./styles.module.scss";

export function Experience() {
  const { content, t } = useI18n();
  const copy = content.home.experience;

  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-title">
      <Container>
        <div className={styles.heading}>
          {/* <Text as="p" size="small" tone="secondary" weight="semibold" className={styles.eyebrow}>
            <Icon name="briefcase" size="small" />
            {copy.eyebrow}
          </Text> */}
          <Title as="h2" id="experience-title" size="large">
            {copy.title}
          </Title>
          <Description className={styles.intro}>
            {copy.description}
          </Description>
        </div>

        <ol className={styles.timeline}>
          {copy.entries.map((experience) => (
            <li key={`${experience.role}-${experience.company}`} className={styles.item}>
              <div className={styles.period}>
                <span aria-hidden="true" />
                <Text as="p" size="small" tone="muted" weight="medium">
                  {experience.startDate} — {experience.endDate}
                </Text>
              </div>

              <div className={styles.details}>
                <Title as="h3" size="medium">
                  {experience.role}
                </Title>
                <Text as="p" tone="secondary" weight="semibold" className={styles.company}>
                  {experience.company}
                </Text>
                <Description>{experience.description}</Description>
                <div
                  className={styles.technologies}
                  aria-label={t("common.technologiesAriaLabel", { name: experience.role })}
                >
                  {experience.technologies.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
