import styles from "./page.module.scss";
import { AboutMe } from "@/pods/about-me/about-me.component";
import { Experience } from "@/pods/experience/experience.component";
import { TechnicalSkills } from "@/pods/technical-skills/technical-skills.component";
import { UserProfile } from "@/pods/user-profile/user-profile.component";
import { EducationAndCertifications } from "@/pods/education-and-certifications/education-and-certifications.component";
import { Section } from "@/core/sections";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UserProfile />
        <div className={styles.content}>
          <section id={Section.AboutMe}>
            <AboutMe />
          </section>
          <section id={Section.Experience}>
            <Experience />
          </section>
          <section id={Section.Skills}>
            <TechnicalSkills />
          </section>
          <section id={Section.Education}>
            <EducationAndCertifications />
          </section>
        </div>
      </main>
    </div>
  );
}
