"use client";

import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { Link } from "@/components/Link";
import { Text } from "@/components/Text";
import { useI18n } from "@/i18n/useI18n";
import styles from "./styles.module.scss";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { content } = useI18n();
  const profileLinks = content.site.socialLinks.filter((link) => link.id !== "email");

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <Text size="small" tone="muted">
          {content.site.name} · © {currentYear}
        </Text>
        <div className={styles.links} aria-label={content.home.footer.socialLinksAriaLabel}>
          {profileLinks.map((link) => (
            <Link key={link.label} href={link.href} external variant="muted" className={styles.link}>
              <Icon name={link.icon} size="small" />
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="#main-content" variant="muted" className={styles.backToTop}>
          {content.home.footer.backToTop}
          <span aria-hidden="true">↑</span>
        </Link>
      </Container>
    </footer>
  );
}
