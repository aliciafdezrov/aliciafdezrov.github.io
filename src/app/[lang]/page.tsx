import styles from "../page.module.scss";
import { AboutMe } from "@/pods/about-me/about-me.component";
import { Experience } from "@/pods/experience/experience.component";
import { TechnicalSkills } from "@/pods/technical-skills/technical-skills.component";
import { UserProfile } from "@/pods/user-profile/user-profile.component";
import { EducationAndCertifications } from "@/pods/education-and-certifications/education-and-certifications.component";
import { Section } from "@/core/sections";
import { Lang, LANGS } from "@/i18n/getDictionary";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const langEnum = lang as Lang;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UserProfile lang={langEnum} />
        <div className={styles.content}>
          <section id={Section.AboutMe}>
            <AboutMe lang={langEnum} />
          </section>
          <section id={Section.Experience}>
            <Experience lang={langEnum} />
          </section>
          <section id={Section.Skills}>
            <TechnicalSkills lang={langEnum} />
          </section>
          <section id={Section.Education}>
            <EducationAndCertifications lang={langEnum} />
          </section>
        </div>
      </main>
    </div>
  );
}
