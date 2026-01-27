import styles from "./page.module.scss";
import { AboutMe } from "@/pods/about-me/about-me.component";
import { Experience } from "@/pods/experience/experience.component";
import { TechnicalSkills } from "@/pods/technical-skills/technical-skills.component";
import { Background } from "@/components/background/background.component";
import { UserProfile } from "@/pods/user-profile/user-profile.component";
import { EducationAndCertifications } from "@/pods/education-and-certifications/education-and-certifications.component";

export default function Home() {
  return (
    <div className={styles.page}>
      <Background />
      <main className={styles.main}>
        <UserProfile />
        <div className={styles.content}>
          <AboutMe />
          <Experience />
          <TechnicalSkills />
          <EducationAndCertifications />
        </div>
      </main>
    </div>
  );
}
