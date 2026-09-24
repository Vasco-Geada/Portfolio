"use client";

import { useRef } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link } from "@/components/Link";
import { useI18n } from "@/i18n/useI18n";
import styles from "./styles.module.scss";

export function Navbar() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const closeMobileMenu = () => mobileMenuRef.current?.removeAttribute("open");
  const { content, t } = useI18n();
  const { navigation } = content.home;
  const { site } = content;

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link
          className={styles.brand}
          href="/"
          aria-label={t("common.homeAriaLabel", { name: site.name })}
        >
          {site.brand}<span aria-hidden="true">.</span>
        </Link>

        <nav className={styles.desktopNav} aria-label={navigation.primaryAriaLabel}>
          {navigation.items.map((item) => (
            <Link key={item.href} href={item.href} variant="nav">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.desktopAction}>
          <LanguageSwitcher />
          <Button href={site.cvUrl} variant="secondary" size="small" download>
            {navigation.downloadCv}
            <Icon name="download" size="small" />
          </Button>
        </div>

        <details ref={mobileMenuRef} className={styles.mobileMenu}>
          <summary aria-label={navigation.menuAriaLabel}>
            <Icon name="menu" />
          </summary>
          <nav className={styles.mobilePanel} aria-label={navigation.mobileAriaLabel}>
            <div className={styles.mobileLanguage}>
              <LanguageSwitcher />
            </div>
            {navigation.items.map((item) => (
              <Link key={item.href} href={item.href} variant="nav" onClick={closeMobileMenu}>
                {item.label}
              </Link>
            ))}
            <Button
              href={site.cvUrl}
              variant="primary"
              size="small"
              download
              onClick={closeMobileMenu}
            >
              {navigation.downloadCv}
            </Button>
          </nav>
        </details>
      </Container>
    </header>
  );
}
