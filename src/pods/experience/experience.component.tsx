import { getExperience } from "./experience.actions";
import styles from "./experience.module.scss";
import { ExperienceRowComponent } from "./components/experience-row/experience-row.component";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";

export const Experience = async () => {
  const experience = await getExperience();

  return (
    <div className={styles.container}>
      <RevealMotion delay={0.4}>
        <h3 className={styles.title}>Work Experience</h3>
      </RevealMotion>
      {experience.jobs.map((job, index) => (
        <ExperienceRowComponent key={job.date} experienceRow={job} index={index} />
      ))}
    </div>
  );
};
