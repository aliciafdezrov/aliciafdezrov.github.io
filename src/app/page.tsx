import Image from "next/image";
import styles from "./page.module.css";
import { AboutMe } from "@/pods/about-me/about-me.component";
import { Experience } from "@/pods/experience/experience.component";
import { TechnicalSkills } from "@/pods/technical-skills/technical-skills.component";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.profile}>patata</div>
        <div className={styles.content}>
          <AboutMe />
          <Experience />
          <TechnicalSkills />
        </div>
      </main>
    </div>
  );
}
