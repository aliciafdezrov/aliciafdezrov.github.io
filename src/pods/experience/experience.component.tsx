import { getExperience } from "./experience.actions";
import styles from "./experience.module.scss";
import { ExperienceRowComponent } from "./components/experience-row/experience-row.component";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
export const Experience = async () => {
  const experience = await getExperience();

  return (
    <div className={styles.container}>
      <RevealMotion>
        <h3 className={styles.title}>Work Experience</h3>
      </RevealMotion>
      {experience.jobs.map((job) => (
        <ExperienceRowComponent key={job.date} experienceRow={job} />
      ))}
    </div>
  );
};
