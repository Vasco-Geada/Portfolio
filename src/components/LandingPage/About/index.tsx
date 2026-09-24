"use client";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Description } from "@/components/Description";
import { Icon } from "@/components/Icon";
import { Text } from "@/components/Text";
import { Title } from "@/components/Title";
import { useI18n } from "@/i18n/useI18n";
import styles from "./styles.module.scss";

export function About() {
  const { content } = useI18n();
  const { about } = content.home;

  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <Container className={styles.grid}>
        <div className={styles.heading}>
          {/* <Text as="p" size="small" tone="secondary" weight="semibold" className={styles.eyebrow}>
            {about.eyebrow}
          </Text> */}
          <Title as="h2" id="about-title" size="large">
            {about.title}
          </Title>
        </div>

        <div className={styles.content}>
          <Description size="large">
            {about.introduction}
          </Description>
          <Description>
            {about.description}
          </Description>

          <div className={styles.principles}>
            {about.principles.map((principle) => (
              <Card key={principle.title} className={styles.principle}>
                <Icon name={principle.icon} />
                <div>
                  <Title as="h3" size="small">
                    {principle.title}
                  </Title>
                  <Text tone="muted">{principle.description}</Text>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
