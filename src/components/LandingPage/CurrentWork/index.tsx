"use client";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Description } from "@/components/Description";
import { Icon } from "@/components/Icon";
import { Text } from "@/components/Text";
import { Title } from "@/components/Title";
import { useI18n } from "@/i18n/useI18n";
import styles from "./styles.module.scss";

export function CurrentWork() {
  const { content } = useI18n();
  const copy = content.home.currentWork;
  const currentWork = copy.content;

  return (
    <section className={styles.section} aria-labelledby="current-work-title">
      <Container>
        <div className={styles.panel}>
          <div className={styles.label}>
            <span aria-hidden="true" />
            <Text as="p" size="xsmall" tone="inherit" weight="semibold">
              {copy.status}
            </Text>
          </div>

          <div className={styles.grid}>
            <div className={styles.copy}>
              <Text as="p" size="small" tone="inherit" weight="semibold" className={styles.eyebrow}>
                {currentWork.label}
              </Text>
              <Title as="h2" id="current-work-title" size="large" tone="inherit">
                {currentWork.title}
              </Title>
              <Description size="large" className={styles.description}>
                {currentWork.description}
              </Description>
              <Button href={currentWork.projectHref} variant="secondary" size="large">
                {copy.learnMore}
                <Icon name="arrow-right" size="small" />
              </Button>
            </div>

            <div className={styles.topics} aria-label={copy.topicsAriaLabel}>
              {currentWork.topics.map((topic, index) => (
                <div key={topic} className={styles.topic}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Text as="p" tone="inherit" weight="medium">
                    {topic}
                  </Text>
                </div>
              ))}
              <div className={styles.badges}>
                {currentWork.technologies.map((technology) => (
                  <Badge key={technology} tone="primary">
                    {technology}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
