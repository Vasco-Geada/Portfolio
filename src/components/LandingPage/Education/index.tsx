"use client";

import { Container } from "@/components/Container";
import { Description } from "@/components/Description";
import { Text } from "@/components/Text";
import { Title } from "@/components/Title";
import { useI18n } from "@/i18n/useI18n";
import styles from "./styles.module.scss";

export function Education() {
  const { content } = useI18n();
  const copy = content.home.education;

  return (
    <section id="education" className={styles.section} aria-labelledby="education-title">
      <Container>
        <div className={styles.heading}>
          <Title as="h2" id="education-title" size="large">
            {copy.title}
          </Title>
          <Description className={styles.intro}>{copy.description}</Description>
        </div>

        <ol className={styles.list}>
          {copy.entries.map((entry) => (
            <li key={`${entry.qualification}-${entry.startDate}`} className={styles.item}>
              <Text as="p" size="small" tone="muted" weight="medium" className={styles.period}>
                {entry.startDate} — {entry.endDate}
              </Text>
              <div className={styles.details}>
                <Title as="h3" size="medium">
                  {entry.qualification}
                </Title>
                <Text as="p" tone="secondary" weight="semibold" className={styles.institution}>
                  {entry.institution}
                </Text>
                {entry.description ? <Description>{entry.description}</Description> : null}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
