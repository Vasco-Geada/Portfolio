"use client";

import { Container } from "@/components/Container";
import { Description } from "@/components/Description";
import { Icon } from "@/components/Icon";
import { Link } from "@/components/Link";
import { Title } from "@/components/Title";
import { useI18n } from "@/i18n/useI18n";
import styles from "./styles.module.scss";

export function Contact() {
  const { content } = useI18n();
  const { contact } = content.home;

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <Container>
        <div className={styles.heading}>
         {/*  <Text as="p" size="small" tone="secondary" weight="semibold" className={styles.eyebrow}>
            {contact.eyebrow}
          </Text> */}
          <Title as="h2" id="contact-title" size="xl">
            {contact.title}<span>.</span>
          </Title>
          <Description size="large" className={styles.intro}>
            {contact.description}
          </Description>
        </div>

        <div className={styles.socials}>
          {content.site.socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              external={link.id !== "email"}
              className={styles.social}
            >
              <span>
                <Icon name={link.icon} />
                {link.label}
              </span>
              <Icon name="arrow-up-right" size="small" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
