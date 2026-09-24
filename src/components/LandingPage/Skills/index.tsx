"use client";

import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Description } from "@/components/Description";
import { Text } from "@/components/Text";
import { Title } from "@/components/Title";
import { useI18n } from "@/i18n/useI18n";
import styles from "./styles.module.scss";

export function Skills() {
  const { content, t } = useI18n();
  const copy = content.home.skills;

  return (
    <section className={styles.section} aria-labelledby="skills-title">
      <Container>
        <div className={styles.heading}>
          {/* <Text as="p" size="small" tone="secondary" weight="semibold" className={styles.eyebrow}>
            {copy.eyebrow}
          </Text> */}
          <Title as="h2" id="skills-title" size="large">
            {copy.title}
          </Title>
          <Description className={styles.intro}>
            {copy.description}
          </Description>
        </div>

        <div className={styles.grid}>
          {copy.categories.map((category, index) => (
            <Card key={category.title} className={styles.card}>
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <Title as="h3" size="small">
                  {category.title}
                </Title>
                <Text tone="muted" className={styles.description}>
                  {category.description}
                </Text>
              </div>
              <div
                className={styles.badges}
                aria-label={t("common.skillsAriaLabel", { name: category.title })}
              >
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
