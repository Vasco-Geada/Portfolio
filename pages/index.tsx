import Head from "next/head";

import { useI18n } from "@/i18n/useI18n";
import { createLocaleServerSideProps } from "@lang/server";
import styles from "./styles.module.scss";
import { About } from "@/components/LandingPage/About";
import { Contact } from "@/components/LandingPage/Contact";
import { CurrentWork } from "@/components/LandingPage/CurrentWork";
import { Experience } from "@/components/LandingPage/Experience";
import { FeaturedProjects } from "@/components/LandingPage/FeaturedProjects";
import { Footer } from "@/components/LandingPage/Footer";
import { Hero } from "@/components/LandingPage/Hero";
import { Navbar } from "@/components/LandingPage/Navbar";
import { Skills } from "@/components/LandingPage/Skills";

export default function HomePage() {
  const { content } = useI18n();
  const { metadata, site } = content;

  return (
    <>
      <Head>
        <title>{metadata.defaultTitle}</title>
        <meta name="description" content={metadata.description} />
        <meta name="application-name" content={metadata.applicationName} />
        <meta name="author" content={site.name} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.defaultTitle} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:site_name" content={metadata.applicationName} />
        <meta property="og:locale" content={metadata.openGraphLocale} />
      </Head>

      <div className={styles.page}>
        <a className="skip-link" href="#main-content">
          {content.home.skipToMainContent}
        </a>
        <Navbar />
        <main id="main-content" className={styles.main} tabIndex={-1}>
          <Hero />
          <FeaturedProjects />
          <About />
          <Experience />
          <Skills />
          <CurrentWork />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps = createLocaleServerSideProps();
